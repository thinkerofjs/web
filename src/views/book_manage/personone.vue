<template>
	<el-container style="overflow: hidden;height: 100vh;" class="bg5">
		<v-anthor ref="vanthor"></v-anthor>
		<el-main width="46%" class="" style="padding: 30px 50px;">
			<div class="box-border padding-30" >
				<span class="margin-r50 f16"><i class="el-icon-s-promotion margin-r10"></i><span class="weight700">3126</span></span>
				<span class="margin-r50 f16"><i class="el-icon-star-off margin-r10"></i><span class="weight700">3126</span></span>
				<span class="margin-r50 f16"><i class="el-icon-notebook-1 margin-r10"></i><span class="weight700">3126</span></span>
				<span class="margin-r50 "><i class="el-icon-coin margin-r10"></i><span class="weight700">3126</span></span>
				<span class="margin-r50 f16"><i class="el-icon-medal margin-r10"></i><span class="weight700">3126</span></span>
				<span class="margin-r50 f16"><i class="el-icon-user margin-r10"></i><span class="weight700">3126</span></span>
				<span class="margin-r50 f16"><i class="el-icon-receiving margin-r10"></i><span class="weight700">3126</span></span>
				<el-button class="fr" type="small" @click="goBookEdit" style="background-color: rgb(79, 93, 106);color:#fff;border-color:rgb(79, 93, 106) ;">创建作品</el-button>
			</div>
			
		</el-main>
	</el-container>
</template>

<style>
	.juan-title{
		cursor: pointer;
		color: #798989;
		font-weight:600;
	}
	.juan-title:hover{
		color: #1B1B1B;
	}
	.select-p{
		color: #1B1B1B;
	}
	.juan_list .el-tabs__active-bar{
		background-color: #1B1B1B !important;
	}
	#app{
		margin-top: 0px !important;
	}
	.el-input-group__append, .el-input-group__prepend{
		padding: 0px 10px !important;
		background-color: #8F97A2 !important;
		color: #fff !important;
		border: none !important;
	}
	.el-upload--picture-card{
		height: 170px !important;
		width: 130px !important;
	}
	.el-select .el-input__inner{
		border:none !important;
		border-bottom: 1px solid #8F97A2 !important;
		border-radius: 0px !important;
		background: #F7F8FC !important;
		font-family: "iconfont" !important;
		font-size: 16px;
		
	}
	.el-form-item__label,.sel-checkbox__label{
		color:#B7B7B7 !important;
	}
	.form_r .el-input__inner{
		background-color: #D1D5D5 !important;
		border: none !important;
		border-radius: 8px;
	}
	.form_r .el-input__inner::placeholder {
		color: #fff;
	}
	/* 谷歌 */
	.form_r .el-input__inner::-webkit-input-placeholder {
		color: #fff;
	}
	/* 火狐 */
	.form_r .el-input__inner:-moz-placeholder {
		color: #fff;
	}
	/*ie*/
	.form_r .el-input__inner:-ms-input-placeholder {
		color: #fff;
	}

	.form_r .el-form-item__content{
		margin-left: 0px !important;
	}
	.el-input-group__append, .el-input-group__prepend{
		border-top-left-radius: 8px !important;
		border-bottom-left-radius: 8px !important;
	}
	.form_r .el-input__icon{
		color: #fff;
	}
	.form_b .el-form-item__content{
		margin-left: 0px !important;
	}
	.form_b .el-input__inner,.form_b .el-textarea__inner{
		background-color: #FBFBFB !important;
		border: none !important;
		padding: 0px !important;
	}
	.box_right .el-input__inner{
		background-color: #F4F5F7 !important;
		border: none !important;
	}
	.el-tabs__item{
		color:#798989 !important;
	}
	.el-tabs__item:hover{
		color: #1B1B1B !important;
	}
	.is-active{
		color: #1B1B1B !important;
	}
	
</style>

<script>
  import '@/static/xiaoyan_common.css'
  import '@/fonts/font_2/iconfont.css'
  // import '@/fonts/font_3/iconfont.css'
  import vAnthor from '@/views/common/anthor.vue'
  export default {
    name:'book_edit',
    components: {
		vAnthor,
    },
    data() {
      return {
		input:'',
        options: [{
			value: '选项1',
			label: '黄金糕'
		}, {
			value: '选项2',
			label: '双皮奶'
		}], 
		value: '',
		icon:'\ue605 设定宇宙',
		icon2:'\ue605　　搜索书名',
		form:{
			is_dingyue:0,
			dingyue:'',
		},
		rules:{
			name: [
				{ required: true, message: '请输入活动名称', trigger: 'blur' },
				{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
			],
		},
		dialogImageUrl: '',
		dialogVisible: false,
		disabled: false,
		fits: 'cover',
		url: '',
		juan_list:['第一卷','第二卷','第三卷','第四卷','第五卷','第六卷','第七卷','第八卷','第九卷','第十卷','第十一卷','第十二卷'],
		zhang_list:[
			{title:'第一卷','child':[{title:'第一章','num':0},{title:'第一章','num':0},{title:'第一章','num':0},{title:'第一章','num':0},{title:'第一章','num':0}]},
			{title:'第二卷','child':[{title:'第一章','num':1},{title:'第一章','num':1},{title:'第一章','num':1},{title:'第一章','num':1},{title:'第一章','num':1}]}
		],
		novelId:1,
		detail:{},
		circleUrl: "",
      };
    },
    created:function () {
		if(this.$router.query){
			this.novelId=this.$router.query.novelId;
		}
    },
    mounted:function(){
		this.$store.commit('changeNav', 0)
		if(!this.novelId){
			this.$message({
				showClose: true,
				message: '参数错误',
				type:'error'
			})
			return false;
		}else{
			this.getDetail();
		}
		
    },
	methods: {
		errorHandler() {
			return true
		},
		load () {
			this.count += 2
		},
		remoteMethod(query) {
			if (query !== '') {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
					this.options = this.list.filter(item => {
					return item.label.toLowerCase()
						.indexOf(query.toLowerCase()) > -1;
					});
				}, 200);
			} else {
				this.options = [];
			}
		},
		submitForm(){
			
		},
		getDetail(){
			var novelId=this.novelId;
			var url="api/work/novel/query/"+novelId;
			this.$api.get(url, {}, response =>{
				console.log(response)
				if (response.status >= 200 && response.status < 300) {
					this.log_err = true;
				} else {
					this.log_err = true;
				}
			})
		},
		goBookEdit(){
			this.$router.push({ path: '/book_manage/book_edit', query: { 'anthor': JSON.stringify(this.anthor)} })
		}
			
	}
  };
</script>
