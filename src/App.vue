<template>
  <div id="app">
    <Row class="nav" v-if="nav == 1">
      <Col span="20">
        <Row type="flex" justify="center" class="top">
          <Col span="3"><router-link to="/" class="font">大说</router-link></Col>
          <Col span="3"><router-link to="/universePage" class="font">宇宙</router-link></Col>
          <Col span="3" v-if ="Author_comp !=true"><router-link to="/applyAuthor"><el-button type="primary" style="font-size: 18px">成为作者</el-button></router-link></Col>
          <Col span="3" v-if ="Author_comp !=true"><router-link to="/book_manage/personone"><el-button type="primary" style="font-size: 18px">作者控制台</el-button></router-link></Col>
        </Row>
      </Col>
      <Col span="4" v-if = "login_comp === false"><router-link to="/loadpage" class="load"><el-button type="primary">登录/注册</el-button></router-link></Col>
      <Col span="4" v-if ="login_comp === true">QAQ欢迎你~{{UserName}}<el-button type="danger" @click="log_off">退出登录</el-button></Col>
    </Row>
    <router-view  v-if="routerstatus"></router-view>
  </div>
</template>


<script>
  import {Row, Col} from 'view-design'
  export default {
	provide(){
		return {
			reload:this.reload
		}
	},
    data(){
      return{
		routerstatus:true,
      }
    },
    name: 'App',
    components: {
      Row,
      Col
    },
    methods:{
      log_off(){
        var jsons={

        }

        this.$axios({
          url:'api/main/logout',
          method: "post",
          data:jsons,
          header:{
            'Content-Type':'application/json'  //如果写成contentType会报错
          }
        })
            .then(res=>{
              this.$store.commit('changeinfoLogin', false)
              this.$message({
                message: '你远离了大说网QAQ',
                type: 'success'
              }),
              console.log(res.data)
              //强制刷新页面
              // this.$forceUpdate();
            })
            .catch(Error=>{
              console.log(Error)
            })
      },
		reload(){
			this.routerstatus=false;
				this.$nextTick(()=>{
				this.routerstatus=true;
			})
		}
    },
    computed: {
      nav(){
        return this.$store.state.nav;
      },
      username(){
        return this.$store.state.username;
      },
      // eslint-disable-next-line vue/no-dupe-keys
      login_comp(){
        return this.$store.state.login;
      },
      Author_comp(){
        return this.$store.state.isAuthor;
      },
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
            this.UserName = res.data.username
            this.login_comp = res.data.isFrozen
            this.Author_comp = res.data.isAuthor
            this.$store.commit('getUserName',res.data.username)
            this.$store.commit('changeinfoLogin', true)
            this.$router.push({ name: 'Home' })
          })
          .catch(Error=>{
            this.isAuthor = false
            this.login = false
            console.log('如果是401，表示用户未登录')
            console.log(Error)
          })
    }
  }
</script>

<style lang="scss">
  #app{
  }
  .font{
    font-size: 30px;
    font-family:SimHei;
    font-weight:bold;
    color:white;
  }
  .nav{
    box-shadow:0px 10px 13px 3px rgba(51,51,51,0.1);
    a{
      color: #000;
      padding-bottom: 6px;
    }
    a.active{
      border-bottom: 4px solid #000;
    }
    a:hover{
      border-bottom: 4px solid #000;
    }
  }
</style>
