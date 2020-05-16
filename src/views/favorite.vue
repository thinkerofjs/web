<template>
  <div class="container">
    <div class="user">
      <div class="avatar">
        <Avatar
          src="https://i.loli.net/2017/08/21/599a521472424.jpg"
          size="98"
        />
      </div>
      <div class="user-name">不愿透露名字的作者</div>
      <div class="user-identity">作者</div>
      <div class="user-setting">
        <Row :gutter="10" class="setting-word">
          <!-- 占位图标，后续替换对应图标 -->
          <Col span="2"><span class="iconfont">&#xe77a;</span></Col>
          <Col span="22">设置</Col>
        </Row>
        <Row :gutter="10" class="setting-word">
          <!-- 占位图标，后续替换对应图标 -->
          <Col span="2"><span class="iconfont">&#xe783;</span></Col>
          <Col span="22">退出</Col>
        </Row>
      </div>
    </div>
    <Row type="flex" justify="center">
      <Col span="20" class="selectBar">
        <div class="searchBox searchCon1">
          <Input
            class="searchCon "
            prefix="ios-search"
            placeholder="搜索作者或书名"
          />
        </div>
        <div class="searchBox searchCon2">
          <Select class="searchCon" v-model="workStatus">
            <Option value="serializing">连载</Option>
            <Option value="finished">完结</Option>
          </Select>
        </div>
        <div class="searchBox searchCon2">
          <Select class="searchCon" v-model="universe">
            <Option value="all">全部宇宙</Option>
            <Option value="one">全部宇宙</Option>
          </Select>
        </div>
        <span class="deleteSearch">清除筛选条件</span>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span="20" class="bookListCon">
        <div class="bookList">
          <div class="bookItem" @click="tss" v-for="i in 16" :key="i">
            <img src="@/assets/book.jpg" alt="" />
            <div class="bookInfo">
              <p class="bookTitle">黑夜如雪</p>
              <p class="bookAuthor">炭白</p>
              <p class="bookTag">
                <span @click.stop="ts">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-mulu"></use>
                  </svg>
                  2134
                </span>
                <span>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-mulu"></use>
                  </svg>
                  4354
                </span>
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Avatar, Row, Col, Select, Option, Input } from "view-design";
export default {
  name: "universe-list",
  components: {
    Avatar,
    Row,
    Col,
    Select,
    Option,
    Input,
  },
  data() {
    return {
      workStatus: "serializing",
      universe: "all",
    };
  },
  methods: {
    ts: function() {
      console.log(12);
    },
    tss: function() {
      console.log(434);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../fonts/font/iconfont.css";
.container {
  background: rgba(247, 248, 252, 1);
  overflow: hidden;
  .user {
    width: 320px;
    height: 1080px;
    padding-top: 140px;
    background: rgba(255, 255, 255, 0.29);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
    position: relative;
    float: left;
    .user-name {
      height: 31px;
      margin-bottom: 20px;
      text-align: center;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 31px;
      color: rgba(27, 27, 27, 1);
    }
    .user-identity {
      height: 19px;
      font-size: 14px;
      text-align: center;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 28px;
      color: rgba(183, 183, 183, 1);
    }
    .avatar {
      width: 98px;
      height: 98px;
      margin: 0 auto 40px;
      background: rgba(229, 234, 240, 1);
      border-radius: 50%;
      opacity: 1;
    }
    .user-setting {
      position: absolute;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(143, 151, 162, 1);
      width: 100%;
      bottom: 60px;
      left: 40px;
      .setting-word {
        margin-top: 20px;
      }
    }
  }
  .selectBar {
    margin: 40px 40px 30px 40px;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.16);
    background: rgba(255, 255, 255, 1);
    text-align: left;
  }
  .searchBox {
    display: inline-block;
    text-align: left;
    margin-right: 20px;
  }
  .searchCon .ivu-select-selection,
  .searchCon .ivu-input {
    background: #f4f5f7;
    border: none;
    color: #767086;
    box-shadow: none !important;
    height: 48px !important;
    line-height: 48px;
  }
  .searchCon1 {
    width: 288px;
  }
  .searchCon2 {
    width: 176px;
    font-size: 16px;
  }
  .bookListCon {
    text-align: left;
  }
  .bookItem {
    display: inline-block;
    margin: 26px 0 10px;
    width: 25%;
    cursor: pointer;
  }
  .bookItem img {
    display: inline-block;
    vertical-align: top;
    width: 120px;
    margin-left: 10%;
    border-radius: 10px;
    box-shadow: 0 4px 6px #ccc;
  }
  .bookInfo {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-left: 4%;
    margin-top: 4%;
    text-align: left;
    width: 42%;
    height: 150px;
  }
  .bookTitle {
    font-size: 24px;
    color: #000;
    line-height: 30px;
  }
  .bookAuthor {
    font-size: 14px;
    color: #95989f;
    margin-top: 14px;
  }
  .bookTag {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-top: 50px;
    color: #95989f;
    font-size: 12px;
  }
  .bookTag span {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
