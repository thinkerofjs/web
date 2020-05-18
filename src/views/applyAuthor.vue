<template>
  <div class="container">

    <div class="main">
      <div class="left_part"><img src="@/assets/leftpic.png" alt="背景"></div>

      <div class="right_log">
        <form action="">
          <div class="log_operate" style="margin-left: 80px;margin-top: 30px;">
            <br>
            <br>
            <br>
            <br>
            <div style="color: #787a7c;font-size: 17px;margin-bottom: 10px;">笔名</div>
            <el-input v-model="pri" style="width: 360px"></el-input>
            <div class="username">
            </div>
            <div class='sub'>
              <p v-if="login === false">
                <router-link to="/loadpage">
                <el-button type="primary" style="width: 360px;text-align: center;font-size: 20px">
                  请先登录
                </el-button>
                </router-link>
              </p>
              <p @click="Author" v-if="login === true">
                <el-button type="primary" style="width: 360px;text-align: center;font-size: 20px">
                  确定
                </el-button>
              </p>
            </div>

          </div>
        </form>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loadpage",
    data(){
      return {
        login:false,
        isAuthor:false,
        pri: ""
      }
    },
    mounted() {

      var jsons= {
        "email": "string",
        "headImage": "string",
        "isAuthor": false,
        "isFrozen": false,
        "nickname": "string",
        "phone": "string",
        "score": 0,
        "username": "string",
      }
      this.$axios({
        url:'api/main/user/info',
        data:jsons,
        method: 'get',
        header:{
          'Content-Type':'application/json'
        }
      })
          .then(res=>{
            this.login = true
            console.log(res.data)
          })
          .catch(Error=>{
            this.isAuthor = false
            this.login = false
            console.log(Error)
          })
    },
    computed: {
      },
    methods: {
      Author(){
        var jsons={
          "headImage": "string",
          "pseudonym": this.pri
        }
        this.$axios({
          url:'/api/work/author/apply',
          method:'post',
          data:jsons,
          header:{
            'Content-Type':'application/json'
          }
        })
            .then(res=>{
              if(res.data.resCode === '0000'){
                this.$message({
                  message: res.data.resMsg,
                  type: 'success'
                })
              }else if(res.data.resCode === '9999'){
                this.$message({
                  message: res.data.resMsg,
                  type: 'success'
                })
              }

              console.log(res.data)
            })
            .catch(Error=>{
              console.log(Error)
            })
      },
      },
    }
</script>

<style scoped>
  .sub{
    line-height: 50px;
    text-align: center;
    color: white;
    margin-top: 40px;
    width: 350px;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    border: none;
  }
  .sign_in{
    /*display: inline;*/
    width:50px;
    height: 30px;
    padding-top: 5%;
    font-size: 25px;
  }
  .log_title{
    width: 500px;
    height: 80px;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
  .container{
    max-width: 1920px;
    max-height: 1080px;
    margin: 0 auto;
    padding: 0 auto;
  }
  .main{
    height: 1000px;
    background-color: #ffffff;
    display: flex;
  }
  .nav{
    height:68px;
    max-width: 100%;
    background:#ffffff;
    display: flex;
    justify-content: space-around;
  }
  .nav div{
    width: 100px;
    padding-top: 30px;
  }
  .left_part{
    margin-top:12%;
    margin-left:8%;
  }
  .right_log{
    width: 500px;
    height: 500px;
    background: #ffffff;
    margin-top:12%;
    margin-left:27%;
  }
  /* .sign_in::after{
      content: '';
      position: absolute;
      left: 18px;
      top: auto;
      bottom: 0;
      right: auto;
      height: 6px;
      width: 105px;
  } */
  a{
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  body::-webkit-scrollbar{
    width:7px;
  }
  body::-webkit-scrollbar-track{
    background: #ffffff;
    border-radius:2px;
  }
  body::-webkit-scrollbar-thumb{
    background: #7f7f7f;
    border-radius:10px;
  }
  body::-webkit-scrollbar-thumb:hover{
    overflow: scroll;
  }
  .sign_up{
    display: inline;
    width:50px;
    height: 30px;
    padding-top: 5%;
    font-size: 25px;
  }
  .tips{
    font-size: 12px;
    color: red;
    text-align: center;
    height: 20px;
  }
  .log_operate{
    margin-left: 80px;
    margin-top: 30px;
  }
  .AccountNumber{color: #787a7c;font-size: 17px;margin-bottom: 10px;}
  .username_text{border-top: none;border-left: none;border-right: none;border-bottom: 0.5px solid #bbbdc1;width: 300px;height: 40px;}
  .passwd{color: #787a7c;font-size: 17px;margin-top: 40px;margin-bottom: 10px;}
</style>
