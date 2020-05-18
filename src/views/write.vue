<template>
  <div class="write">
    <div class="write-side">
      <img src="/book-reader/logo.jpg" class="logo">
      <div class="h40">&ensp;</div>
      <div class="write-side-list">
        <ul>
          <li>
            <router-link to="/personone">
            <a href="#" class="active"><span class="icon iconfont f50">&#xe615;</span></a>
            </router-link>
          </li>
          <br>
          <li><a href="#" class=""><span class="icon iconfont f24">&#xe63f;</span></a></li>
          <br>
          <li><a href="#" class=""><span class="icon iconfont f50">&#xe617;</span></a></li>
          <li><a href="#" class=""><span class="icon iconfont f50 vt">&#xe7a8;</span></a></li>
        </ul>
      </div>
    </div>
    <div>
    <div class="write-box">
      <Row type="flex" >
        <Col span="4" class="write-set">
          <div class="h30">&ensp;</div>
          <h1>科技宇宙</h1>
          <div class="h10">&emsp;</div>
          <h5>{{universe_information}}</h5>
          <div class="h20">&ensp;</div>
          <h1>文明等级</h1>
          <ul class="set-rank">
            <li v-for="(item,inx) in wrank" :key="inx"><span>{{item[0]}}</span>{{item[1]}}</li>
          </ul>
          <div class="h30">&ensp;</div>
          <h1>人物等级</h1>
          <ul class="set-rank">
            <li v-for="(item,inx) in rrank" :key="inx"><span>{{item[0]}}</span>{{item[1]}}</li>
          </ul>
        </Col>
        <Col span="12" class="write-content">
          <div class="write-content-top">
            <Row type="flex" >
              <Col span="5">
                <Dropdown  trigger="click" @on-click="ts">
                    <Button type="primary">
                        <span class="mr5" v-html="xiala"></span>
                        <!-- 下拉菜单 -->
                        <Icon type="ios-arrow-down"></Icon>
                    </Button>
                    <DropdownMenu slot="list" >
                        <DropdownItem  v-for="(item,inx) in zhang" :key="inx" :name="item.label" >{{item.label}}</DropdownItem>

                    </DropdownMenu>
                </Dropdown>
              </Col>
              <Col span="15"><Input v-model="value1" size="large" :value="value1" class="write-content-top-name" /></Col>
              <Col span="4"><Button class="write-save"><span>提交</span><Icon type="md-arrow-dropright" /></Button></Col>
            </Row>
          </div>
          <div class="write-content-txt">
            <p class="tr mr20"><span class="icon iconfont f16 cD1D">&#xe60e;</span>&emsp;&emsp;&emsp;<span  class="f12 cD1D" v-html="zishu"></span></p>

            <textarea id="textarea" placeholder="内容" v-model="value2" cols="90" :rows="rows"></textarea>
            <!-- <div class="textarea" contenteditable="true"><br /></div> -->
          </div>
        </Col>
        <Col span="8" class="write-image">
            <div class="h60">&ensp;</div>
            <div class="write-image-top fix">
              <img src="@/assets/book.jpg">
              <h1>她与她在最不能不能说的故事</h1>
              <br>
              <ul>
                <li><span class="icon iconfont f14 vm">&#xe6c3;</span><span class="f12">{{Infomation_Collection}}</span></li>
                <li><span class="icon iconfont f12 vm mr5">&#xe63f;</span><span class="f12">{{Information_Chapter}}</span></li>
                <li><span class="icon iconfont f14 vm mr5">&#xe600;</span><span class="f12">{{Information_Fabulous}}</span></li>
                <li><span class="icon iconfont f14 vm mr5">&#xe6a0;</span><span class="f12">{{Information_Number}}</span></li>
                <li><span class="icon iconfont f14 vm mr5">&#xe60e;</span><span class="f12">{{Information_Share}}</span></li>
                <li><span class="icon iconfont f14 vm mr5">&#xe61b;</span><span class="f12">{{Information_Coin}}</span></li>
              </ul>
            </div>
            <div class="h60">&ensp;</div>
            <div class="write-image-mp3">
              <div class="h20">&ensp;</div>
              <h1>章节插画</h1>
              <br>
              <Upload
                  ref="upload"
                  :show-upload-list="false"
                  :default-file-list="defaultList"
                  :on-success="handleSuccess"
                  :format="['jpg','jpeg','png']"
                  :max-size="2048"
                  :on-format-error="handleFormatError"
                  :on-exceeded-size="handleMaxSize"
                  :before-upload="handleBeforeUpload"
                  multiple
                  type="drag"
                  action="//jsonplaceholder.typicode.com/posts/"
                  style="display: inline-block;width: 228px;">
                  <div @click="CoverUpLoad" style="height: 340px; border: 1px dashed #707070; line-height: 340px;background:#24303C; border:none;">
                      <Icon type="md-add" size="50" class="cD1D v-10" /><span class="f36 cD1D">添加</span>
                  </div>
              </Upload>
              <div class="h20">&ensp;</div>
              <h1>章节背景音乐</h1>
              <br>
              <Row type="flex" class="img-box" >
                <Col span="3" class="bg2e3">
                  <div class="img-box-left"><span class="icon iconfont f24">&#xe607;</span></div>
                </Col>
                <Col span="19">
                  <div class="img-box-right">
                    <span>轻音乐.mp3</span>

                    <Upload action="//jsonplaceholder.typicode.com/posts/" class="r"  style="height: 48px; overflow: hidden; ">
                        <Button><span class="icon iconfont f24 cf">&#xe656;</span></Button>
                    </Upload>
                  </div>
                </Col>
                <Col span="2"></Col>

              </Row>
            </div>
        </Col>
      </Row>
    </div>

    </div>

  </div>
</template>

<script>
  import { Row, Col,Dropdown,Button,DropdownMenu,DropdownItem,Icon,Upload  } from 'view-design';
  export default {
    name: 'write',
    data: () => {
      return {
        universe_information: "由绝对物理规则构成的宇宙，所有生命体都无法超规则。但同样在一代代超级智者们的不断努力下某些生命体种族开始掌握规则的运转逻辑，" +
            "他们建造制作各种机械体探索并开发规则的使用。",
        wrank: [
          ["Lv 1","原始文明"],
          ["Lv 2","部落文明"],
          ["Lv 3","帝国文明"],
          ["Lv 4","工业文明"],
          ["Lv 5","信息文明"],
          ["Lv 6","行星文明"],
          ["Lv 7","恒星文明"],
          ["Lv 8","星系文明"],
          ["Lv 9","空间文明"],
          ["Lv 10","时空文明"],
          ["Lv 11","等神文明"]
        ],
        rrank:[
          ["Lv 1","奴隶"],
          ["Lv 2","部落奴隶"],
          ["Lv 3","帝国奴隶"],
          ["Lv 4","工业奴隶"],
          ["Lv 5","信息奴隶"],
          ["Lv 6","行星奴隶"],
          ["Lv 7","恒星奴隶"],
          ["Lv 8","星系奴隶"],
          ["Lv 9","空间奴隶"],
          ["Lv 10","时空奴隶"],
          ["Lv 11","等神奴隶"]
        ],
        zhang:[
          {value: '1',label: '1章'},
          {value: '2',label: '2章'},
          {value: '3',label: '3章'},
          {value: '4',label: '4章'},
          {value: '5',label: '5章'},
          {value: '6',label: '6章'},
          {value: '7',label: '7章'},
          {value: '8',label: '8章'},
          {value: '9',label: '9章'},
          {value: '10',label: '10章'},
          {value: '11',label: '11章'},
          {value: '12',label: '12章'}
        ],
        xiala:"下拉菜单",
        value1:"绝地反击",
        value2:"绝地反击",
        renwu:["赵涛","方彤彤"],
        uploadList: [],
        defaultList: [
            {
                'name': 'a42bdcc1178e62b4694c830f028db5c0',
                'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
            },
            {
                'name': 'bc7521e033abdd1e92222d733590f104',
                'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
            }
        ],



      };
    },
    components: {
      Row,
      Col,
      Dropdown,
      Button,
      DropdownMenu,
      DropdownItem,
      Icon,
      Upload
    },
    methods:{
      CoverUpLoad(){
        var jsons={

        }
        this.$axios({
          url:'',
          data:jsons,
          header:{
            'Content-Type':'application/json'  //如果写成contentType会报错
          }
        })
            .then(res=>{
              console.log(res.data)
            })
            .catch(Error=>{
              console.log(Error)
            })
      },
      ts: function(name){
        this.xiala=name
      },
      tss: function(){
        console.log(434);
      },
      handleView (name) {
          this.imgName = name;
          this.visible = true;
      },
      handleRemove (file) {
          const fileList = this.$refs.upload.fileList;
          this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
          file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
          file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleFormatError (file) {
          this.$Notice.warning({
              title: 'The file format is incorrect',
              desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
          });
      },
      handleMaxSize (file) {
          this.$Notice.warning({
              title: 'Exceeding file size limit',
              desc: 'File  ' + file.name + ' is too large, no more than 2M.'
          });
      },
      handleBeforeUpload () {
          const check = this.uploadList.length < 5;
          if (!check) {
              this.$Notice.warning({
                  title: 'Up to five pictures can be uploaded.'
              });
          }
          return check;
      }
    },
    mounted() {
      this.$store.commit('changeNav', 0)
    },
    computed:{
      zishu(){
        return this.value2.length
      },
      rows(){
        let row=Math.ceil(this.value2.length/45)+2
        if(row>20){
          return row
        }else{
          return 20
        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../fonts/font_2/iconfont.css";


.h10{height: 10px;}
.h20{height: 20px;}
.h140{height: 140px;}
.h30{height: 30px;}
.h40{height: 40px;}
.h60{height: 60px;}
.h600{height: 600px;}
.h180{height: 180px;}
.w86{width: 86px}
.f24{font-size: 24px;}
.f12{font-size: 12px;}
.f16{font-size: 16px;}
.f18{font-size: 18px;}
.f28{font-size: 28px;}
.f36{font-size: 36px;}
.f50{font-size: 50px;}
.c0{color: #000;}
.cf{color: #fff;}
.l{float: left;}
.cD1D{color:#D1D5D5}
.cB7B{color:#B7B7B7}
.bg2e3{background: #2E3A46;}
.mr5{margin-right: 5px;}
.mr20{margin-right: 20px;}
.b{font-weight: bold;}
.dn{display: none;}
.dib{display: inline-block;}
.vt{vertical-align: top;}
.vm{vertical-align: middle;}
.v-10{vertical-align: -10px;}
.r{float: right;}
.tr{text-align: right;}
.tfrte90{transform:rotate(180deg);
  -ms-transform:rotate(180deg);  /* IE 9 */
  -moz-transform:rotate(180deg);   /* Firefox */
  -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
  -o-transform:rotate(180deg);   /* Opera */
}
/* 清除浮 动*/
.fix{*zoom:1;}
.fix:after{display:table; content:''; clear:both;}
li{list-style: none;}
.write{position: relative;}
.write-side{position: fixed;top:0px;width: 86px;height: 100vh;background: #1F2933; text-align: center;}
.write-side .logo{width: 28px;height: 28px;border-radius: 50%;margin-top: 20px;}
.write-side-list a span{color: #94979E;}
.write-side-list a.active span{color: #fff;}
.kkk{outline: 1px solid red;}
.write-box{padding-left: 86px; width: 100%;height: 100%;}
.write-set{background: #3D4B56;padding-left: 20px;padding-right: 20px;}
.write-set h1{color: #fff;font-size: 28px;font-weight: normal;}
.write-set h5{color: #D1D5D5;font-size: 14px;font-weight: normal;line-height: 36px;}
.set-rank li span{width: 65px;height: 29px;border-radius: 15px;background: #00D0C5; font-size: 14px; color: #fff;display: inline-block; text-align: center;line-height: 29px;margin-right: 20px;}
.set-rank li{color: #D1D5D5; font-size: 14px;margin-top: 20px;}
.write-content{background: #2E3A46;}
.write-content-top{height: 70px;border-bottom: 1px solid #3C4854;line-height: 70px;}
.write-content-top .ivu-btn{height: 48px;background: #24303C;border: none;width: 173px; font-size: 16px;color: #fff;}
.write-content-top .ivu-dropdown-menu{width: 173px; height:134px;overflow: auto;}
.write-content-top .ivu-select-dropdown{left: 0;top:60px;}
.write-content-top .ivu-dropdown{margin-left: 20px;}
.write-content-top-name{width: 289px;height: 48px;background: #24303C; float: left; margin-top: 10px;margin-top: 12px;margin-left: 20px; color: #fff;font-size: 16px;line-height: 48px;text-indent: 1.5em; border: none; border-radius: 8px;}
.write-content-top .ivu-btn.write-save{width: 90%;height: 48px;border-radius: 8px;background: #4F5D6A; color: #fff;font-size: 16px;}
.write-content-top .ivu-icon-md-arrow-dropright{width: 48px;height: 48px; line-height: 48px;background: #537CD6;font-size: 32px;margin-right: -30px; border-radius: 0 8px 8px 0;}
.write-save span{vertical-align: 3px;padding-right: 28px;}
#textarea{margin-left: 50px;background: #2E3A46; border:none; font-size: 18px; color: #D1D5D5; text-align: justify;}
#textarea:focus{ border:none; outline:none;}
.write-image{background:#24303C; }
.write-image-top{padding-right: 20px;}
.write-image-top img{width: 228px;height: 340px;margin-left: 40px;margin-right: 17px; float:left; }
.write-image-top h1{font-size: 24px; color: #fff; font-weight:normal; }
.write-image-top ul{}
.write-image-top ul li{width: 130px;height: 45px;float: left; color: #fff;}
.write-image-mp3{border-top: 1px solid #3C4854;padding-left: 40px;}
.write-image-mp3 h1{color: #B7B7B7; font-size: 14px;}
.write-image-mp3 .ivu-upload .ivu-upload-drag{background: none;}
.img-box{line-height: 48px; color: #fff;}
.img-box-left{width: 48px;height: 49px;background: #1F2933; text-align: center;line-height: 48px; color: #fff;}
.img-box-right{background: #2E3A46;}
.ivu-upload ul.ivu-upload-list{display:none;}
.ivu-btn-default{background: transparent;border:none;}
</style>
