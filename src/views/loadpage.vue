<template>
  <div class="container">
    <div class="main">
      <div class="left_part"><img src="@/assets/leftpic.png" alt="背景"></div>
      <div class="right_log" v-if="juice == 0">


        <div class="log_title">
          <div></div>
          <div class="sign_in"><a @click="juice = 0,res_err = false,repassword_err = false">登录</a></div>
          <div class="sign_up"><a @click="juice = 1,res_err = false,repassword_err = false">注册</a></div>
          <div></div>
        </div>


        <form action="">
          <div class="log_operate">
            <div class="AccountNumber">账号</div>
            <div class="username">
              <el-input
                    placeholder="请输入账号"
                    v-model="userName_1"
                    clearable style="width: 360px">
            </el-input>
            </div>
            <div class="passwd">密码</div>
            <div class="pwd">
              <el-input placeholder="请输入密码" v-model="password_1" show-password style="width: 360px"></el-input>
            </div>
            <div class='sub'>
              <p @click="login_click_function" style="line-height: 50px;text-align: center;color: white;margin-top: 40px;width: 350px;height: 50px;font-size: 20px;font-weight: 600;border: none;">
                <el-button type="primary" style="width: 360px;text-align: center;font-size: 20px">
                  登陆
                </el-button>
              </p>
            </div>
            <div class="forget_pwd" style="margin-top: 30px;margin-left: 140px;"><a @click="juice = 2" style="color: #787a7c;font-weight: 100;">忘记密码？</a></div>
          </div>
        </form>
      </div>

      <div class="right_log" v-if="juice == 1">
        <div class="log_title">
          <div></div>
          <div class="sign_in"><a @click="juice = 0">登录</a></div>
          <div class="sign_up"><a @click="juice = 1">注册</a></div>
          <div></div>
        </div>
        <form action="">
          <div class="log_operate" style="margin-left: 80px;margin-top: 30px;">
            <div style="color: #787a7c;font-size: 17px;margin-bottom: 10px;">账号</div>
            <div class="username">
              <el-input
                    placeholder="请输入账号"
                    v-model="userName_2"
                    clearable style="width: 360px">
            </el-input>
            </div>

            <div style="color: #787a7c;font-size: 17px;margin-top: 40px;margin-bottom: 10px;">密码</div>
            <div class="pwd">
              <el-input placeholder="请输入密码" v-model="password_2" show-password style="width: 360px"></el-input>
            </div>

            <div style="color: #787a7c;font-size: 17px;margin-top: 40px;margin-bottom: 10px;">确认密码</div>
            <div class="pwd">
              <el-input placeholder="请输入密码" v-model="password_3" show-password style="width: 360px"></el-input>
            </div>
            <div class='sub'>
              <p style="line-height: 50px;margin-top: 40px;width: 350px;height: 50px;font-size: 20px;font-weight: 600;border: none;text-align:center" v-if="password_3 !== password_2">
             两次密码不一致
              </p>
              <p @click="reg_click_function" style="line-height: 50px;background: white;color: white;margin-top: 40px;width: 350px;height: 50px;font-size: 20px;font-weight: 600;border: none;text-align:center" v-if="password_3 === password_2">
                <el-button type="primary" style="width: 360px;text-align: center;font-size: 20px">
                  注册
                </el-button>
              </p>
              <p @click="juice = 0" style="line-height: 50px;background: white;color: white;margin-top: 40px;width: 350px;height: 50px;font-size: 20px;font-weight: 600;border: none;text-align:center">
                <el-button type="primary" style="width: 360px;text-align: center;font-size: 20px">
                去登陆
                </el-button>
              </p>
            </div>
          </div>
        </form>
      </div>

      <div class="right_log" style="width: 600px; margin-left: 400px;" v-if="juice == 2">
        <div style="text-align: center;"><h1>修改密码</h1></div>
        <div style="text-align: center;font-size: 28px;margin-top: 50px;"><p>非常抱歉因为一些原因，暂不支持自助修改密码</p></div>
        <div style="text-align: center;font-size: 19px;"><a><p>如需帮助，请联系QQ：xxxxxxxxx</p></a></div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "loadpage",
    data(){
      return {
        juice: 0,  // 0-注册，1-登陆，2-忘记密码
        userName_1:"", //log
        password_1:"",
        userName_2:"", //res
        password_2:"",
        password_3:"", //re
      }
    },
    computed: {
      username(){
        return this.$store.state.username;
      },
      login(){
        return this.$store.state.login;
      },
    },
    methods:{
      //注册
      reg_click_function() {
        var jsons={
          //"email": "string",
          //"headImage": "string",
          //"nickname": "string",
          "password": this.password_2,
          //"phone": "string",
          "username": this.userName_2
        }
//在需要的事件中直接使用
        this.$axios({
          url:'api/main/pub/register',
          method: 'post',
          data:jsons,
          header:{
            'Content-Type':'application/json'  //如果写成contentType会报错
          }
        })
            .then(res=>{
              if(res.data.resCode !== '0000'){
                //alert(res.data.resMsg)
                //尝试饿了么UI
                this.$message.error('错啦QwQ,'+res.data.resMsg);
              } else {
                //表示用户注册成功，切回登陆页面并填入注册的账号
                this.$message({
                  message: '耶~！，'+res.data.resMsg,
                  type: 'success'
                });
              }
              console.log(res.data.resMsg)
              console.log(res.data.resCode)

            })
            .catch(Error=>{
              console.log(Error)
            })
      },

      //登陆
      login_click_function() {
        var jsons={
          "loginName": this.userName_1,
          "password": this.password_1,
          "rememberMe": true
        }
//在需要的事件中直接使用
        this.$axios({
          url:'api/main/pub/login',
          method: 'post',
          data:jsons,
          header:{
            'Content-Type':'application/json'  //如果写成contentType会报错
          }
        })
            .then(res=> {
              if (res.data.resCode !== '0000') {
                this.$message.error(res.data.resMsg);
              }else {
                this.$store.commit('getUserName', this.userName_1)
                this.$store.commit('changeinfoLogin', true)
                this.$router.push({ name: 'Home' })
                this.$message({
                  message: '耶~！，'+res.data.resMsg,
                  type: 'success'
                });
            }
              console.log(res.data.resMsg)
              console.log(res.data.resCode)

            })
            .catch(Error=>{
              console.log(Error)
            })
      },
    }
  }
</script>

<style scoped>
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
