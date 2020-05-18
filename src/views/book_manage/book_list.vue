<template>
	<el-container style="overflow: hidden;height: 100vh;" class="bg5">
		<v-anthor ref="vanthor"></v-anthor>
		<el-main width="46%" class="" style="padding: 30px 50px;">
			<div class="box-border padding-30" style="min-height: 50px;">
				<span class="margin-r50 f16"></span>
				<el-button class="fl" type="small" @click="goBookEdit" style="background-color: rgb(79, 93, 106);color:#fff;border-color:rgb(79, 93, 106) ;">创建作品</el-button>
			</div>
			<div class="padding-30">
				<div class="overflow">
					<el-image
					class="fl margin-r30"
					style="width: 132px; height: 197px;border-radius: 5px;border:1px solid #f7f7f7"
					:src="cover_url"
					:fit="fits">
						<div slot="error" class="image-slot " style="height: 100%;">
							<i class="el-icon-picture-outline middel f30" style="margin-top:56%;margin-left: 40%;"></i>
						</div>
					</el-image>
					<div style="width: 50%;color: #dedede;" class="fl ">
						<p class="f18 " >{{detail.novelName}}</p>
						<div class="padding-t30 user_desc" style="" v-html="detail.summary"></div>
					</div>
					
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<style>
	
	
</style>

<script>
  import '@/static/xiaoyan_common.css'
  import '@/fonts/font_2/iconfont.css'
  // import '@/fonts/font_3/iconfont.css'
  import vAnthor from '@/views/common/anthor.vue'
  export default {
    name:'book_favorite',
    components: {
		vAnthor,
    },
    data() {
      return {
		input:'',
		value: '',
		icon:'\ue605 设定宇宙',
		icon2:'\ue605　　搜索书名',
		form:{
			is_dingyue:0,
			dingyue:'',
		},
		fits: 'cover',
		url: '',
		novelId:'',
		detail:{},
		list:[],
      };
    },
    created:function () {
		if(!this.$store.state.login){
			this.$router.push('/loadpage')
			this.$message({
				showClose: true,
				message: '请先登录',
				type:'warning',
			})
			return false;
		}
		if(this.$router.query){
			this.novelId=this.$router.query.novelId;
		}
		this.getList()
    },
    mounted:function(){
		
		
    },
	methods: {
		goBookEdit(){
			this.$router.push({ path: '/book_manage/book_edit', query: { 'anthor': JSON.stringify(this.anthor)} })
		},
		getList(){
			var url='/api/work/novel/list';
			this.$api.get(url, {}, res =>{
				console.log(res)
				if (res.data.resCode =='0000') {
					this.list=res.data.resData;
				}
			})
		}
	}
  };
</script>
