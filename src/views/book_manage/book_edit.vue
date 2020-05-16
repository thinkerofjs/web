<template>
	<el-container style="overflow: hidden;height: 100vh;" class="bg5">
		<v-anthor ref="vanthor"></v-anthor>
		<el-main width="46%" class="" style="padding: 30px 50px;">
			<div class="">
				<span class="fl">
					<el-select v-model="value" class="iconfont" filterable :placeholder="icon">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</span>
				<span class="fr box-shadow">
					<el-button style="padding-right:10px ;padding-left:10px ;border: none;background-color:#537CD6;border-top-right-radius: 0px;border-bottom-right-radius:0px" icon="el-icon-caret-left" size="medium " type="info"></el-button>
					<el-button style="border: none;background-color:#4F5D6A;margin-left: 0px;border-top-left-radius: 0px;border-bottom-left-radius:0px" size="medium " type="info" class="f12" @click="submitForm('ruleForm')">发布</el-button>
				</span>
			</div>
			<div class="bg6 padding-30 " style="margin-top: 60px;border-radius: 5px;">
				<el-form label-position="left" :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<div class="overflow ">
						<div class=" inline-block" style="position: relative;">
							<!-- <el-dialog :visible.sync="dialogVisible">
							  <img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog> -->
							<el-upload
								style="position: absolute;z-index: 1;right: 3px;bottom: 10px;"
								class="upload-demo"
								action="/api/work/upload"
								:on-success="handleAvatarSuccess"
								:on-preview="handlePreview"
								:on-remove="handleRemove"
								:before-remove="beforeRemove"
								:before-upload="beforeUpload"
								:limit="1"
								:accept='file_type'
								:on-exceed="handleExceed"
								:show-file-list="showFileList"
								ref="upload"
								>
								<el-button size="small" type="primary" style="background: #D1D5D5;opacity: 0.8;font-size: 10px;border: none;padding: 3px 8px;position: absolute;right: 3px;bottom: 3px;"><i class="iconfont iconshangchuan " style="margin-right: 5px;" ></i>更换</el-button>
							</el-upload>
							<el-image
							style="width: 132px; height: 197px;border-radius: 5px;border:1px solid #f7f7f7"
							:src="url"
							:fit="fits">
								<div slot="error" class="image-slot " style="height: 100%;">
									<i class="el-icon-picture-outline middel f30" style="margin-top:56%;margin-left: 40%;"></i>
								</div>
								
							</el-image>
						</div>
						
						<div class="fr form_r" style="width: 65%;">
							<el-form-item label="全本订阅" class="text-color-8" style="margin-bottom: 0px;">
								<el-checkbox class="fr text-color-8" v-model="form.is_dingyue">不允许全本订阅</el-checkbox>
							</el-form-item>
							<el-form-item label="" class="text-color-8">
							<div >
								<el-input style="color: #fff;" placeholder="0为vip免费" v-model="form.dingyue">
									<template slot="prepend"><i class="iconshouyimingxi iconfont"></i></template>
									</el-input>
							</div>
							</el-form-item>
							<el-form-item label="背景音乐" class="text-color-8" style="margin-bottom: 0px;">
							</el-form-item>
							<el-form-item label="" class="text-color-8">
							<div >
								<el-input style="color: #fff;" placeholder="轻音乐.mp3" v-model="form.dingyue" suffix-icon="iconshangchuan iconfont">
									<template slot="prepend"><i class="icontubiaozhizuomoban iconfont"></i></template>
									</el-input>
							</div>
							</el-form-item>
						</div>
						
					</div>
					<div class="form_b" style="margin-top: 50px;">
						<el-form-item label="" class="text-color-8" style="margin-bottom: 0px;">
							<el-input style="color: #fff;" placeholder="作品标题" v-model="form.dingyue">
								</el-input>
						</el-form-item>
					</div>
					<div class="border-bottom margin-t10 margin-b10"></div>
					<div class="form_b" style="margin-top: 10px;">
						<el-form-item label="" class="text-color-8" style="margin-bottom: 0px;">
							<el-input  type="textarea" rows="8" resize="none" style="color: #fff;height: 150px;" placeholder="作品简介" v-model="form.dingyue">
								</el-input>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-main>
		<el-aside width="37%" class="shadow-left" style="background:#fff;height: 100vh;">
			<div class="padding-20 box_right" style="height: 15vh;">
				<div class="box-shadow " style="height: 60px;line-height: 60px;width:100%;padding-left: 20px;padding-right: 20px;border-radius: 5px;">
					<el-input v-model="input" class="iconfont" :placeholder="icon2" style="width: 50%;"></el-input>
					<span style="color: #D1D5D5;" class="fr">
						<i class="el-icon-plus " style="font-weight: 700;"></i>
						<span>新章</span>
					</span>
				</div>
				
			</div>
			<div class="padding-30 juan_list" style="height: 85vh;">
				<el-aside class="fl" width="40%" style="height: 75vh;overflow: hidden;">
					<span style="color: #B7B7B7;" class="padding-20">卷引</span>
					<div class="" style="height: 100%;overflow: auto;margin-right: -17px;margin-top: 10px;">
						
						<ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
							<li v-for="(item,index) in juan_list" :key="index" class="infinite-list-item">
								<p class="f16 padding-b10 padding-lr-20 juan-title " :class="{'select-p':index==0}">{{item}}</p>
							</li>
						</ul>
					</div>
				</el-aside>
				<el-aside class="fr" width="60%" style="height: 75vh;">
					<p class="juan-title f16" style="color: #1B1B1B;">第一卷</p>
					<div class="padding-t20 " style="border-bottom:2px solid #F2F2F2"></div>
					<div class="padding-t20" style="line-height: 28px;">
						<span>第一章 前言</span>
						<el-button class="bg2 fr f12" round size="small" style="border: none;color: #fff;padding: 5px 40px;font-size: 12px;">免费</el-button>
						
					</div>
					<div class="padding-t20" style="line-height: 28px;">
						<span>第一章 前言</span>
						<el-button class="bg2 fr f12" round size="small" style="border: none;color: #fff;padding: 5px 40px;font-size: 12px;">免费</el-button>
						
					</div>
					<div class="padding-t20" style="line-height: 28px;">
						<span>第一章 前言</span>
						<el-button class="bg2 fr f12" round size="small" style="border: none;color: #fff;padding: 5px 40px;font-size: 12px;">免费</el-button>
						
					</div>
				</el-aside>
				
			</div>
		</el-aside>
	</el-container>
</template>

<style>
	.upload-demo{
		width: 100% !important;
	}
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
  import vAnthor from '@/views/common/anthor.vue'
  export default {
    name:'book_edit',
    components: {
		vAnthor,
    },
    data() {
      return {
		showFileList:false,
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
		file_type:'png,jpg,jpeg',
		anthor:{},
      };
    },
    created:function () {
		if(this.$router.query){
			this.novelId=this.$router.query.novelId;
		}
		if(this.$router.query){
			this.anthor=this.$router.query.anthor
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
		handleAvatarSuccess(res, file) {
			this.url = URL.createObjectURL(file.raw);
			this.$refs.upload.clearFiles();
		},
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
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},
		handleExceed(files, fileList) {
			console.log(files, fileList);
			this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		},
		beforeRemove(file, fileList) {
			console.log(file, fileList);
			return this.$confirm(`确定移除 ${ file.name }？`);
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
		beforeUpload(file){
			var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)
			if(this.file_type.indexOf(testmsg)===-1){
			  this.$message({
			            showClose: true,
			            message: '文件格式不符合要求',
			            type:'error'
			          })
			  this.is_upload=1;
			  return testmsg;
			}
		}
			
	}
  };
</script>
