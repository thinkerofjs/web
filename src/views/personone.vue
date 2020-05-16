<template>
  <div class="person">
    <Row type="flex" >
      <Col span="4" class="person-left">
        <div class="h140">&ensp;</div>
        <Row>
          <Col span="8"><br></Col>
          <Col span="8" class="person-left-img"><img src="@/assets/book.jpg"></Col>
          <Col span="8"><br></Col>
        </Row>
        <div class="h40">&ensp;</div>
        <h1>不愿透露名字的作者</h1>
        <br>
        <h2>作者</h2>
        <div class="h600">&ensp;</div>
        <Row type="flex" class="person-left-bottom">
          <Col span="2"><br></Col>
          <Col span="5"><a href="#"><span class="icon iconfont f24">&#xe773;</span></a></Col>
          <Col span="4"><span class="f18">设置</span></Col>
          <Col span="3"></Col>
        </Row>
        <br>
        <router-link to="/">
        <Row type="flex"  class="person-left-bottom">
          <Col span="2"><br></Col>
          <Col span="5"><a href="#"><span class="icon iconfont f24">&#xe77b;</span></a></Col>
          <Col span="4"><span class="f18">退出</span></Col>
          <Col span="3"></Col>
        </Row>
        </router-link>
      </Col>
      <Col span="20" class="person-right">
        <br>
        <br>
        <Row type="flex" justify="center" class="person-right-top">
          <Col span="2"><br></Col>
          <Col span="20"  class="person-box">
            <br>
            <br>
            <br>
            <Row type="flex"  >
              <Col span="4">
                <span class="icon iconfont f28 cD1D vt">&#xe6a0;</span>
                <span class="c0 b f28">3120</span>
              </Col>

              <Col span="4">
                <router-link to="/favorite" class="">
                <span class="icon iconfont f28 cD1D vt">&#xe600;</span>
                  <span class="c0 b f28">3121</span>
                </router-link>
              </Col>
              <Col span="4">
                <span class="icon iconfont f28 cD1D vt">&#xe71a;</span>
                <span class="c0 b f28">3122</span>
              </Col>
              <Col span="4">
                <span class="icon iconfont f28 cD1D vt">&#xe617;</span>
                <span class="c0 b f28">3126</span>
              </Col>
              <Col span="4">
                <span class="c0 b f28"><el-button type="primary">创建书籍</el-button></span>
              </Col>
            </Row>
            <div class="h180">&ensp;</div>
            <Row type="flex">
              <Col span="8"><br></Col>
              <Col span="8">
                <router-link to="/write">
                <div class="person-info">
                  <div class="person-info-img">
                    <img src="@/assets/book.jpg">
                  </div>
                  <div class="h40">&ensp;</div>
                  <h1>不愿透露名字的作者</h1>
                  <h2>作者</h2>
                  <div class="h60">&ensp;</div>
                  <h3>上次看到：<a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a></h3>
                  <p>第十八章    过去和现在</p>
                  <div class="h40">&ensp;</div>
                  <div class="person-read">
                    <p class="r"><span class="f14 c0">3126</span>&ensp;<span  class="f14 cB7B">人在看</span></p>
<!--                    <ul>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                      <li><img src="@/assets/book.jpg"></li>-->
<!--                    </ul>-->
                  </div>
                </div>
                </router-link>
              </Col>
              <Col span="8"><br></Col>
            </Row>
          </Col>
          <Col span="2"><br></Col>
        </Row>
      </Col>
    </Row>

  </div>
</template>

<script>
  import { Row, Col } from 'view-design';
  export default {
    name: 'person',
    props: {
      msg: String
    },
    data(){
      return {

      }
    },
    components: {
      Row,
      Col,
    },
    methods:{
      ts: function(){
        console.log(12);
      },
      tss: function(){
        console.log(434);
      }
    },
    computed: {
      loginStatue(){
        return this.$store.state.login;
      }
    },
    mounted() {
      this.$store.commit('changeNav', 0)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../fonts/font_2/iconfont.css";

  .person-left{float: left;
    height:1080px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 20px rgba(0,0,0,0.16);
    position: relative;
  }
  .person-left-img img{width: 98px;height: 98px; border-radius: 50%;}
  .h140{height: 140px;}
  .h40{height: 40px;}
  .h60{height: 60px;}
  .h600{height: 600px;}
  .h180{height: 180px;}
  .f24{font-size: 24px;}
  .f18{font-size: 18px;}
  .f28{font-size: 28px;}
  .c0{color: #000;}
  .cD1D{color:#D1D5D5}
  .cB7B{color:#B7B7B7}
  .b{font-weight: bold;}
  .vt{vertical-align: top;}
  .r{float: right;}
  .tfrte90{transform:rotate(180deg);
    -ms-transform:rotate(180deg);  /* IE 9 */
    -moz-transform:rotate(180deg);   /* Firefox */
    -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
    -o-transform:rotate(180deg);   /* Opera */
  }
  .person-left h1{font-weight: normal; font-size: 24px; color: #1B1B1B;}
  .person-left h2{ font-size: 14px; color: #B7B7B7;}
  .person-left-bottom{}
  .person-left-bottom span{line-height: 24px;  color: #8F97A2;}
  .person-right{background: #F7F8FC}
  .person-box{
    height:248px;
    background:rgba(46,58,70,0);
    border:1px solid rgba(209,213,213,1);
    border-radius:4px;}
  .person-box .icon{margin-right: 10px;}
  .person-box .ivu-col{height: 80px;}
  .person-info{
    height:326px;
    background:rgba(255,255,255,1);
    border-radius:4px;}
  .person-info-img img{width: 152px;height: 227px; float: left; margin-top: 20px; margin-left: 20px;margin-right: 20px;}
  .person-info h1{text-align: left;color: #1B1B1B;font-size: 24px;font-weight: normal;}
  .person-info h2{text-align: left;color: #B7B7B7;font-size: 14px;margin-top: 10px;}
  .person-info h3{text-align: left;color: #B7B7B7;font-size: 14px;font-weight: normal;}
  .person-info h3 span{display: inline-block; float: right;line-height: 24px; color: #806BFF;}
  .person-info p{text-align: left;color: #B7B7B7;font-size: 14px;font-weight: bold; margin-top: 10px;}
  .person-read{border-top:1px solid #F2F2F2;margin-left: 20px;margin-right: 20px;}
  .person-read ul{width: 210px;overflow: hidden;margin-top: 10px;}
  .person-read ul li{width: 28px;height: 28px; float: left;list-style: none;margin-left: -8px;}
  .person-read ul li:first-child{margin-left: 0px;}
  .person-read ul li img{width: 28px;height: 28px; border-radius: 50%;}
  .person-read .r{margin-top: 15px;}
</style>
