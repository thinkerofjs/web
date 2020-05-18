<template>
  <div id="book-reader">
    <transition>
      <div class="leftPicWrap" v-if="ifShowLeft">
        <div class="logo" @click="goIndex">
          <span>大说</span>
          <img src="/book-reader/logo.jpg" alt />
        </div>
        <img class="leftArrowBtn" src="/book-reader/左箭头.png" alt @click="triggerLeft" />
      </div>
    </transition>
    <div class="leftPicHidden" v-if="!ifShowLeft">
      <img class="leftArrowBtn" src="/book-reader/左箭头.png" alt @click="triggerLeft" />
    </div>
    <div class="rightContainer">
      <div class="contents">
        <div>
          <!-- 卷 -->
          <!--
          <template>
            <div class="volume">{{}}</div>
          </template>
          -->
          <!-- 章 -->
          <template>
            <div class="chapter">{{resData.chapterId}}</div>
          </template>
          <!-- 标题 -->
          <template>
            <div class="title">{{resData.chapterName}}</div>
          </template>
          <!-- 内容 -->
          <template>
            <div class="text">{{resData.content}}</div>
          </template>
        </div>
      </div>
      <div class="tabWrap">
        <button class="shareBtn">
          <img src="/book-reader/分享.png" alt />
        </button>
        <button class="commitBtn">
          <img src="/book-reader/评论.png" alt />
        </button>
        <div class="controlBtnWrap">
          <button class="autoBtn">
            <img src="/book-reader/下一页.png" alt />
          </button>
          <button class="prevBtn" @click="prevBtn()">
            <img src="/book-reader/上一章.png" alt />
          </button>
          <button class="menuBtn">
            <img src="/book-reader/目录.png" alt />
          </button>
          <button class="nextBtn" @click="nextBtn()">
            <img src="/book-reader/下一章.png" alt />
          </button>
        </div>
        <button class="fixBtn">
          <img src="/book-reader/固定.png" alt />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from "./mock-data";
export default {
  name: "book-reader",
  data: () => {
      return {
          contents: [],
          ifShowLeft: true,
          chapterId: 1,
          chapterName: '',
          resData:'',
          novelId: 0,
          wordNumber: 0,
          resCode: 0,
          resMsg: '',
          content: '',
      };
  },
  methods: {
      goIndex() {
          this.$router.push("/");
      },
      triggerLeft() {
          this.ifShowLeft = !this.ifShowLeft;
      },
      prevBtn(){
          this.$api.get('this.resData.previousChapter.chapterId', {
              chapterId: this.resData.previousChapter.chapterId
          }, response =>{
              if (response.status >= 200 && response.status < 300) {
                  console.log(response.data);
                  this.resCode = response.data.resCode;
                  this.resMsg = response.data.resMsg;
                  this.chapterId = response.data.chapterId;
                  this.chapterName = response.data.chapterName;
                  this.resData = response.data.resData;
                  this.novelId = response.data.novelId;
                  this.wordNumber = response.data.wordNumber;
                  this.resCode = response.data.resCode;
                  this.resMsg = response.data.resMsg;
              } else {
                  console.log(response.message);
              }
          })
      },
      nextBtn(){
          this.$api.get('api/main/pub/novel/content/this.resData.nextChapter.chapterId', {
              chapterId: this.resData.nextChapter.chapterId
              }, response =>{
              if (response.status >= 200 && response.status < 300) {
                  console.log(response.data);
                  this.resCode = response.data.resCode;
                  this.resMsg = response.data.resMsg;
                  this.chapterId = response.data.chapterId;
                  this.chapterName = response.data.chapterName;
                  this.resData = response.data.resData;
                  this.novelId = response.data.novelId;
                  this.wordNumber = response.data.wordNumber;
                  this.resCode = response.data.resCode;
                  this.resMsg = response.data.resMsg;
              } else {
                console.log(response.message);
              }
          })
      },
  },
  mounted() {
      this.contents = mockData
      console.log("universePage-mounted");

      this.$api.get('api/main/pub/novel/content/this.chapterId', {
          chapterId: this.chapterId
      }, response =>{
          if (response.status >= 200 && response.status < 300) {
              console.log(response.data);
              this.resCode = response.data.resCode;
              this.resMsg = response.data.resMsg;
              this.chapterId = response.data.chapterId;
              this.chapterName = response.data.chapterName;
              this.resData = response.data.resData;
              this.novelId = response.data.novelId;
              this.wordNumber = response.data.wordNumber;
              this.resCode = response.data.resCode;
              this.resMsg = response.data.resMsg;
           } else {
                console.log(response.message);
           }
      })
  },
  created(){

  },
};
</script>

<style  scoped>
#book-reader {
  width: 100vw;
  display: flex;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.leftPicWrap {
  background-color: #3d4e2c;
  flex: none;
  width: 773px;
  height: 100%;
  position: relative;
}
.leftPicWrap .logo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 10px;
  height: 100px;
  cursor: pointer;
}
.leftPicWrap .logo > span {
  color: white;
  font-size: 26px;
  margin-right: 20px;
}
.leftPicWrap .logo > img {
  height: 100%;
  height: 50px;
  border-radius: 50%;
}
.leftPicHidden {
  background-color: #3d4e2c;
  flex: none;
  width: 80px;
  height: 100%;
  position: relative;
}
.leftArrowBtn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.rightContainer {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.contents {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 142px 10% 100px;
  text-align: left;
  overflow-y: auto;
}
.volume {
  color: rgb(183, 183, 183);
  font-size: 12px;
  margin-bottom: 10px;
}
.chapter {
  color: rgb(27, 27, 27);
  font-size: 30px;
  margin-bottom: 23px;
}
.title {
  color: black;
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 45px;
  line-height: 1;
}
.text {
  color: black;
  font-size: 18px;
  margin-bottom: 45px;
}
.tabWrap {
  width: 100%;
  height: 90px;
  flex: none;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px 0px grey;
}
.tabWrap button {
  border: none;
  outline: none;
  background-color: transparent;
}
.tabWrap > .controlBtnWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  box-sizing: border-box;
  padding: 0 20px;
}
</style>
