<template>
	<el-aside style="width: 17%;margin-right: 5px;" class="shadow-right bg4 padding-20">
		<div class="text-center" style="margin-top: 30%;" >
			<div @click="goPerson">
				<el-avatar class="hover" :size="70"  :src="anthor.headImage"  @error="errorHandler" >
					<img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
				</el-avatar>
			</div>
			
			<p class="title-p2 padding-tb-10">{{anthor.pseudonym}}</p>
			<p class="text-color-8 padding-tb-10" >作者</p>
		</div>
		<div class="text-left" style="margin-top: 30px;">
			<p class="text-color-10 margin-b20 hover"  style="color: #8F97A2;"><i class="iconfont iconshuji margin-r10"></i>作品</p>
			<p class="text-color-10 hover" style="color: #8F97A2;"><i class="iconfont iconshoucang margin-r10"></i>收藏</p>
		</div>
		<div class="absolute" style="bottom:30px">
			<p class="text-color-10 margin-b20 hover"  style="color: #8F97A2;"><i class="iconfont iconshezhi margin-r10"></i>设置</p>
			<p class="text-color-10 hover"  style="color: #8F97A2;"><i class="iconfont iconicon4 margin-r10"></i>退出</p>
		</div>
	</el-aside>
</template>

<script>
  import '@/static/xiaoyan_common.css'
  import '@/fonts/font_2/iconfont.css'
  export default {
    name:'v-anthor',
    components: {
    },
    data() {
      return {
		input:'',
		value: '',
		dialogImageUrl: '',
		dialogVisible: false,
		disabled: false,
		fits: 'cover',
		url: '',
		anthorId:1,
		detail:{},
		circleUrl: "",
		anthor:{},
      };
    },
    created:function () {
		this.getDetail()
		console.log(this.$store.state.login)
    },
    mounted:function(){
		this.$store.commit('changeNav', 0)
		
    },
	methods: {
		errorHandler() {
			return true
		},
		load () {
			this.count += 2
		},
		getDetail(){
			var url="/api/work/author/info";
			this.$api.get(url, {}, res =>{
				if(res.data.resCode=='0000'){
					this.anthor=res.data.resData;
				}else{
					this.$message({
					          showClose: true,
					          message: res.data.resMsg,
					          type:'error'
					        })
				}
			})
		},
		goPerson(){
			console.log(111)
			this.$router.push('/book_manage/personone')
		}
			
	}
  };
</script>

<style>
</style>
