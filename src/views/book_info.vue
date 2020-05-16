<template>
  <div id="bookInfo">
    <Row class="bookInfoLayout" type="flex" justify="center" align="bottom">
        <Col span="10">
          <div class="bookText">
            <div class="bookTitle"><p>{{resData.novelName}}<span class="bookStatus">没状态</span></p></div>
            <p class="bookAuthor">{{resData.author.pseudonym}}</p>
            <p class="bookIntroduction">{{resData.summary}}</p>
            <div class="bookLine">
<!--              <router-link class="bookMenu" to="/BookCataLogue">-->
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-mulu"></use>
                </svg>
                <span>作品目录</span>
<!--              </router-link>-->
              <router-link class="bookRead" to="/BookReader">
                <span>开始阅读</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fanhui"></use>
                </svg>
              </router-link>
            </div>
            <div class="bookOther">
              <svg class="icon like" aria-hidden="true">
                <use xlink:href="#icon-chenggong"></use>
              </svg>
              <svg class="icon share" aria-hidden="true">
                <use xlink:href="#icon-chenggong"></use>
              </svg>
            </div>
          </div>
        </Col>
        <Col span="6">
          <router-link class="bookRead" to="/BookReader">
            <img class="bookImg" src="@/assets/book.jpg" />
          </router-link>
        </Col>
        <Col span="8">
            <div class="scorePeople">
                <p class="scoreP"><span>2344534</span>人</p>
                <p class="scrorT">评分</p>
            </div>
            <p class="score"><span>9.7</span></p>
            <div class="zan">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mulu"></use>
              </svg>
              <svg class="icon upZan" aria-hidden="true">
                <use xlink:href="#icon-mulu"></use>
              </svg>
            </div>
        </Col>
    </Row>
  </div>
</template>

<script>
import {Row, Col} from 'view-design'

export default {
  name: 'book-info',
  data () {
      return {
          novelId : 0;
          resData : '',
      }
  },
  components: {
      Row,
      Col
  },
  created(){
      this.novelId = document.getElementById("novelId");
  },
  mounted(){
      console.log(this.$store.state.count)

      //在用户看到界面之前执行
      var a = document.getElementById("tablebox");
      var scroll_width = 100; //滚动一下的距离
      if(document.addEventListener){
          document.addEventListener('DOMMouseScroll', mousewheel_event, false); // FF
      }
      a.onmousewheel = mousewheel_event; // IE/Opera/Chrome
      function mousewheel_event(eee) {
          var eee2 = eee || window.event, v;
          eee2.wheelDelta ? v=eee2.wheelDelta : v=eee2.detail;
          if(v>3||-v>3) v=-v;
          v>0 ? a.scrollLeft+=scroll_width : a.scrollLeft-=scroll_width;

          eee2.preventDefault(); //阻止浏览器的默认滚动
      }

      this.$api.get('api/main/pub/novel/this.novelId', {
              novelId: this.novelId
          }, response =>{
              if (response.status >= 200 && response.status < 300) {
                  console.log(response.data);
                  this.resData = response.data.resData;
              } else {
                  console.log(response.message);
              }
          })
  }
}
</script>

<style scoped>
    .bookInfoLayout{
        margin: 70px 0;
    }
    .bookText{
      margin-left: 100px;
      text-align: left;
      width: 64%;
    }
    .bookTitle{
      font-size: 44px;
      color: #000;
      font-weight: bold;
    }
    .bookTitle p{
      position: relative;
      display: inline-block;
    }
    .bookTitle p span{
      position: absolute;
      color: red;
      right: 0;
      top: -42px;
      font-size: 16px;
    }
    .bookAuthor{
      font-size: 20px;
      text-align: left;
    }
    .bookIntroduction{
      font-size: 16px;
      line-height: 30px;
      margin-top: 10%;
    }
    .bookLine{
      margin-top: 30px;
      font-size: 16px;
      font-weight: bold;
    }
    .bookLine a{
      display: inline-block;
    }
    .bookMenu .icon{
      margin-right: 10px;
      color: #000;
      opacity: 1;
    }
    .bookRead{
      float: right;
      color: #806bff;
    }
    .bookRead .icon{
      margin-left: 10px;
      transform: rotate(180deg);
    }
    .bookOther{
      font-size: 30px;
      margin-top: 30%;
    }
    .bookOther .icon{
      margin-right: 40px;
      cursor: pointer;
    }
    .bookOther .like{
      color: red;
    }
    .bookOther .share{
      color: #ccc;
    }


    .scorePeople{
      text-align: center;
      width: 60%;
      margin: auto;
    }
    .scorePeople p{
      display: inline-block;
    }
    .scoreP{
      font-size: 22px;
      color: #acacac;
    }
    .scoreP span{
      font-size: 38px;
      color: #000;
    }
    .scrorT{
      float: right;
      font-size: 40px;
      color: #ff9269;
    }
    .score{
      width: 60%;
      margin: 10px auto 0;
      font-size: 150px;
      font-weight: bold;
      color: #ff9269;
      line-height: 150px;
      text-align: right;
    }
    .score span{
      display: inline-block;
      line-height: 150px;
    }
    .bookImg{
      display: block;
      width: 100%;
      box-shadow: 4px 4px 10px #ccc;
    }
    .zan{
      width: 60%;
      margin: 30% auto 30px;
      text-align: right;
    }
    .zan .icon{
      display: inline-block;
      margin-left: 76px;
      font-size: 30px;
      cursor: pointer;
    }
    .upZan{
      color: #ff9269;
    }

</style>
