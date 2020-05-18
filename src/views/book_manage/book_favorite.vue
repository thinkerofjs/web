<template>
	<el-container style="overflow: hidden;height: 100vh;" class="bg5">
		<v-anthor ref="vanthor"></v-anthor>
		<el-main width="46%" class="" style="padding: 30px 50px;">
			<div class="box-border padding-30" style="min-height: 50px;">
				<span class="margin-r50 f16"></span>
				<el-button class="fr" type="small" @click="goBookEdit" style="background-color: rgb(79, 93, 106);color:#fff;border-color:rgb(79, 93, 106) ;">创建作品</el-button>
			</div>
			<div class="padding-30">
				<el-row>
					<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }">
							<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
							<div style="padding: 14px;">
								<span>好吃的汉堡</span>
								<div class="bottom clearfix">
									<time class="time">{{ currentDate }}</time>
									<el-button type="text" class="button">操作按钮</el-button>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
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
