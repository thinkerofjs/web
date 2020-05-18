<template>
	<el-container style="overflow: hidden;height: 100vh;" class="bg5">
		<v-anthor ref="vanthor"></v-anthor>
		<el-main width="46%" class="" style="padding: 30px 50px;">
			<div class="">
				<span class="fl">
					<el-select v-model="form.universeId" class="iconfont" filterable :placeholder="icon">
						<el-option
							v-for="item in universeList"
							:key="item.value"
							:label="item.universeName"
							:value="item.universeId">
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
<!--							<el-dialog :visible.sync="dialogVisible">-->
<!--							  <img width="100%" :src="dialogImageUrl" alt="">-->
<!--							</el-dialog>-->
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
							<!-- <el-form-item label="全本订阅" class="text-color-8" style="margin-bottom: 0px;">
								<el-checkbox class="fr text-color-8" v-model="form.is_dingyue">不允许全本订阅</el-checkbox>
							</el-form-item> -->
							<!-- <el-form-item label="" class="text-color-8">
							<div >
								<el-input style="color: #fff;" placeholder="0为vip免费" v-model="form.dingyue">
									<template slot="prepend"><i class="iconshouyimingxi iconfont"></i></template>
									</el-input>
							</div>
							</el-form-item> -->
							<!-- <el-form-item label="背景音乐" class="text-color-8" style="margin-bottom: 0px;">
							</el-form-item>
							<el-form-item label="" class="text-color-8">
							<div >
								<el-input style="color: #fff;" placeholder="轻音乐.mp3" v-model="form.dingyue" suffix-icon="iconshangchuan iconfont">
									<template slot="prepend"><i class="icontubiaozhizuomoban iconfont"></i></template>
									</el-input>
							</div>
							</el-form-item> -->
						</div>

					</div>
					<div class="form_b" style="margin-top: 50px;">
						<el-form-item label="" class="text-color-8" style="margin-bottom: 0px;" prop="novelName">
							<el-input style="color: #fff;" placeholder="作品标题" v-model="form.novelName">
								</el-input>
						</el-form-item>
					</div>
					<div class="border-bottom margin-t10 margin-b20"></div>
					<div class="form_b" style="margin-top: 10px;">
						<el-form-item label="" class="text-color-8" style="margin-bottom: 0px;" prop="summary">
							<el-input  type="textarea" rows="8" resize="none" style="color: #fff;height: 150px;" placeholder="作品简介" v-model="form.summary">
								</el-input>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-main>
		<el-aside width="37%" class="shadow-left" style="background:#fff;height: 100vh;">
			<div class="padding-20 box_right" style="height: 15vh;">
				<div class="box-shadow " style="height: 60px;line-height: 60px;width:100%;padding-left: 20px;padding-right: 20px;border-radius: 5px;">
					<!-- <el-input v-model="input" class="iconfont" :placeholder="icon2" style="width: 50%;"></el-input> -->
					<span style="color: #B7B7B7;" class="fl  hover" @click="addJuan">
						<i class="el-icon-plus" style="font-weight: 700;"></i>
						<span>新加卷</span>
					</span>
					<span style="color: #D1D5D5;" class="fr hover" @click="addZhang">
						<i class="el-icon-plus " style="font-weight: 700;"></i>
						<span>新章</span>
					</span>
				</div>

			</div>
			<div class="padding-30 juan_list" style="height: 85vh;">
				<el-dialog :title="title" :visible.sync="dialogFormVisible" class="">
					<el-form ref="add_form" :model="add_form" :rules="rules" status-icon >
						<el-form-item label=""  prop="rules2">
							<el-input v-show="is_juan" v-model="add_form.volumeName" autocomplete="off" :placeholder="place" @keyup.enter.native="add('add_form')"></el-input>
							<el-input v-show="!is_juan" v-model="add_form.chapterName" autocomplete="off" :placeholder="place" @keyup.enter.native="add('add_form')"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="add('add_form')">确 定</el-button>
					</div>
				</el-dialog>
				<el-aside class="fl" width="40%" style="height: 75vh;overflow: hidden;">
					<span style="color: #B7B7B7;" class="padding-20">卷引</span>
					<!-- <span style="color: #B7B7B7;" class="padding-20 hover" @click="addJuan"><i class="el-icon-plus"></i>新加卷</span> -->
					<div v-if="is_list" class="" style="height: 100%;overflow: auto;margin-right: -17px;margin-top: 10px;min-height: 20vh;" v-loading="juan_loading">
						<ul  class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
							<li v-for="(item,index) in juan_list" :key="index" class="infinite-list-item" @click="clickJuan(item,index)">
								<p class="f16 padding-b10 padding-lr-20 juan-title fl" :class="{'select-p':index==cur_index}" style="width: 80%;">{{item.volumeName}}</p>
								<el-dropdown class="fr " style="width: 20%;" v-if="index==cur_index">
									<span class="hover" >
										<i class="el-icon-more "></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item  @click.native="edit(item)">编辑</el-dropdown-item>
										<el-dropdown-item  @click.native="del(item)">删除</el-dropdown-item>
										<!-- <el-dropdown-item  @click.native="up(item,index)">上移</el-dropdown-item>
										<el-dropdown-item  @click.native="down(item,index)">下移</el-dropdown-item> -->
									</el-dropdown-menu>
								</el-dropdown>
							</li>
						</ul>
					</div>
					<div v-if="!is_list">
						<p class="text-center padding-tb-50 text-color-8">暂无分卷</p>
					</div>

				</el-aside>
				<el-aside class="fr margin-l20" width="58%" style="height: 75vh;">
					<div v-show="is_list2" v-loading="zhang_loading" style="min-height: 50vh;">
						<p class="juan-title f16" style="color: #1B1B1B;">{{nowVolumeName}}</p>
						<div class="padding-t20 " style="border-bottom:2px solid #F2F2F2"></div>
						<div  v-for="(item,index) in zhang_list"  :key="index" class="padding-t20 hover" style="line-height: 28px;">
							<span  @click="goWrite(item.chapterId)" class="hover" style="display: inline-block;width: 48%;">{{item.chapterName}}</span>

							<el-button class="bg2 fr f12" round size="small" style="border: none;color: #fff;padding: 5px 40px;font-size: 12px;">{{item.price>0?item.price:'免费'}}</el-button>
						</div>
					</div>
					<div v-show="!is_list2" v-loading="zhang_loading" >
						<p class="text-center padding-tb-50 text-color-8">暂无章节</p>
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
	.el-form-item__label,.el-checkbox__label{
		color:#B7B7B7 !important;
	}
	.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
		background-color: #8F97A2 !important;
		border-color:#8F97A2 !important;
	}
	.form_r .el-input__inner{
		background-color: #D1D5D5 !important;
		border: none !important;
		border-radius: 8px;
		color: #fff;
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
		is_list:true,
		is_list2:true,
		cur_index:0,
		title:'新加分卷',
		dialogFormVisible:false,
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
		icon2:'\ue605　　搜索分卷',
		add_form:{
			novelId:'',
			volumeId:'',
			volumeName:'',
			chapterName:'',
		},
		rules2:{

		},
		form:{
			summary:'',
			cover:'',
			novelName:'',
			universeId:'',
			novelId:'',
		},
		rules:{
			novelName: [
				{ required: true, message: '请输入标题', trigger: 'blur' },
			],
			summary: [
				{ required: true, message: '请输入简介', trigger: 'blur' },
			],
		},
		dialogImageUrl: '',
		dialogVisible: false,
		disabled: false,
		fits: 'cover',
		url: '',
		// juan_list:['第一卷','第二卷','第三卷','第四卷','第五卷','第六卷','第七卷','第八卷','第九卷','第十卷','第十一卷','第十二卷'],
		juan_list:[],
		// zhang_list:[
		// 	{title:'第一卷','child':[{title:'第一章','num':0},{title:'第一章','num':0},{title:'第一章','num':0},{title:'第一章','num':0},{title:'第一章','num':0}]},
		// 	{title:'第二卷','child':[{title:'第一章','num':1},{title:'第一章','num':1},{title:'第一章','num':1},{title:'第一章','num':1},{title:'第一章','num':1}]}
		// ],
		zhang_list:[],
		novelId:'',
		detail:{},
		circleUrl: "",
		file_type:'png,jpg,jpeg',
		anthor:{},
		universeList:[],
		juan_loading:true,
		zhang_loading:true,
		add_url:"/api/work/novelVolume/addVolume",
		nowVolumeId:'',
		nowVolumeName:'',
		nowChapterId:'',
		nowChapterName:'',
		is_juan:1,
		place:'分卷名称',
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
		if(this.$route.query){
			this.novelId=this.$route.query.novelId;
		}
		if(this.$route.query){
			this.anthor=this.$route.query.anthor
		}
		this.getUniverseList();
    },
    mounted:function(){
		this.$store.commit('changeNav', 0)
		this.getDetail();
		this.getJuan();
    },
	methods: {
		handleAvatarSuccess(res, file) {
			this.url = URL.createObjectURL(file.raw);
			if(res.resCode=='0000'){
				this.form.cover=res.resData.result
			}
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
		submitForm(form){
			if(!this.form.universeId){
				this.$message({
					showClose: true,
					message: '请选择小说宇宙',
					type:'error',
				})
				return false;
			}
			if(!this.form.cover){
				this.$message({
					showClose: true,
					message: '请上传封面',
					type:'error',
				})
				return false;
			}
			this.$refs[form].validate((valid) => {
				if (valid) {
					var url='';
					// console.log(this.form)
					if(this.form.novelId){
						url='/api/work/novel/update';
					}else{
						url="/api/work/novel/create";
					}
					this.$api.originPost(url, this.form).then(res =>{
						if (res.data.resCode=='0000') {
							this.$message({
								showClose: true,
								message: '操作成功',
							})
							if(!this.form.novelId){
								this.novelId=res.data.resData.novelId;
								this.$router.push({ path: '/book_manage/book_edit', query: { novelId: this.novelId} })
							}
						} else {
							this.$message({
								showClose: true,
								message: res.data.resMsg,
								type:'error',
							})
						}
					})
				}else {
					// console.log('error submit!!');
					return false;
				}
			});
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
			if(novelId){
				var url="/api/work/novel/"+novelId;
				this.$api.get(url, {}, response =>{
					if (response.data.resCode =='0000') {
						var detail=response.data.resData;
						this.form.cover=detail.cover;
						this.form.novelName=detail.novelName;
						this.add_form.novelId=this.form.novelId=detail.novelId;
						this.form.summary=detail.summary;
						this.form.universeId=detail.universeId;
						this.url='/data/'+detail.cover;
					}
				})
			}

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
		},
		getUniverseList(){
			var url="api/work/universe/all";
			this.$api.get(url, {}, response =>{
				if(response.status==200){
					this.universeList=response.data.resData;
				}
			})
		},
		//新加卷
		addJuan(){
			var novelId=this.novelId;
			if(!novelId){
				this.$message({
					showClose: true,
					message: '请先创建作品信息',
					type:'error'
				})
				return false;
			}
			this.title='新增分卷';
			this.place='分卷名称';
			this.add_form.volumeId='';
			this.add_form.volumeName='';
			this.add_url='/api/work/novelVolume/addVolume';
			this.is_juan=true;
			this.dialogFormVisible=true;
		},
		addZhang(){
			var novelId=this.add_form.novelId;
			if(!novelId){
				this.$message({
					showClose: true,
					message: '请先创建作品信息',
					type:'error'
				})
				return false;
			}

			this.title='新增章节';
			this.place='章节名称';
			if(this.nowVolumeId&&this.nowVolumeName){
				this.title=this.nowVolumeName+':'+this.title;
			}
			this.add_url='/api/work/novel/createChapter';
			this.is_juan=false;
			this.dialogFormVisible=true;
		},
		add(form){
			if(this.is_juan&&!this.add_form.volumeName){
				this.$message({
					showClose: true,
					message: '请输入分卷名称',
					type:'error'
				})
				return false;
			}
			if(!this.is_juan&&!this.add_form.chapterName){
				this.$message({
					showClose: true,
					message: '请输入章节名',
					type:'error'
				})
				return false;
			}
			this.$refs[form].validate((valid) => {
				if (valid) {
					var url=this.add_url;
					this.$api.originPost(url, this.add_form).then(res =>{
						if (res.data.resCode=='0000') {
							this.$message({
								showClose: true,
								message: '操作成功',
							})
							if(this.is_juan){
								this.getJuan();
							}else{
								this.getZhang();
							}
							this.dialogFormVisible=false;
						} else {
							this.$message({
								showClose: true,
								message: res.data.resMsg,
								type:'error',
							})
						}
					})
				}else {
					// console.log('error submit!!');
					return false;
				}
			});
		},
		yidong(pa,yidong){
			this.$set(pa,'novelId',this.novelId)
			var url=this.add_url;
			this.$api.originPost(url, pa).then(res =>{
				if (res.data.resCode=='0000') {
					if(yidong){
						this.getJuan();
					}
				} else {
					this.$message({
						showClose: true,
						message: res.data.resMsg,
						type:'error',
					})
				}
			})
		},
		//获取分卷
		getJuan(){
			var novelId=this.novelId;
			if(novelId){
				var url="/api/work/novelVolume/"+novelId;
				this.$api.get(url, {}, res =>{
					if (res.data.resCode =='0000') {
						this.juan_list=res.data.resData;
						if(this.juan_list.length>0 && !this.add_form.volumeId){
							this.nowVolumeId=this.add_form.volumeId=this.juan_list[0].volumeId;
							this.nowVolumeName=this.add_form.volumeName=this.juan_list[0].volumeName;
							this.getZhang();
						}

						this.juan_loading=false;
					}
				})
			}else{
				this.juan_loading=false;
				this.is_list=false;
				this.zhang_loading=false;
				this.is_list2=false;
			}
		},
		//获取章节
		getZhang(){
			var volumeId=this.add_form.volumeId;
			var that=this;
			if(volumeId){
				var url="/api/work/novelVolume/"+volumeId+"/chapters";
				that.$api.get(url, {}, res =>{
					if (res.data.resCode =='0000') {
						that.zhang_list=res.data.resData;
						if(that.zhang_list.length>0 && !that.form.chapterId){
							that.nowChapterId=that.add_form.chapterId=that.zhang_list[0].chapterId;
							that.nowChapterName=that.add_form.ChapterName=that.zhang_list[0].ChapterName;
							that.is_list2=true;
						}else{
							that.is_list2=false;
						}

						that.zhang_loading=false;

					}
				})
			}


		},
		clickJuan(item,index){
			this.nowVolumeId=this.add_form.volumeId=item.volumeId;
			this.nowVolumeName=this.add_form.volumeName=item.volumeName;
			this.cur_index=index;
			this.zhang_loading=true;
			this.getZhang();
		},
		edit(item){
			this.nowVolumeId=this.add_form.volumeId=item.volumeId;
			this.nowVolumeName=this.add_form.volumeName=item.volumeName;
			this.title='编辑分卷';
			this.place='分卷名称';
			this.add_url='/api/work/novelVolume/addVolume';
			this.is_juan=true;
			this.dialogFormVisible=true;
		},
		del(item){
			this.$confirm('确定删除分卷：'+item.volumeName+'?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.$api.delete('/api/work/novelVolume/'+item.volumeId, {},res =>{
							if (res.data.resCode=='0000') {
								this.$message({
									showClose: true,
									message: '操作成功',
								})
								this.getJuan();
								this.dialogFormVisible=false;
							} else {
								this.$message({
									showClose: true,
									message: res.data.resMsg,
									type:'error',
								})
							}
						})
					}).catch(() => {
						this.$message({
						type: 'info',
						message: '已取消操作'
						});
					});

		},
		//上移
		// up(item,index){
		// 	if(this.juan_list[index-1]){
		// 		var pre_item=this.juan_list[index-1];
		// 		var pa={};
		// 		pa.volumeId=item.volumeId;
		// 		pa.volumeName=pre_item.volumeName;
		// 		var pa2={};
		// 		pa2.volumeId=pre_item.volumeId;
		// 		pa2.volumeName=item.volumeName;
		// 		this.yidong(pa);
		// 		this.yidong(pa2,1);
		// 	}else{
		// 		this.$message({
		// 			showClose: true,
		// 			message: '已经是第一位了',
		// 			type:'warning',
		// 		})
		// 	}
		// },
		// //下移
		// down(item,index){
		// 	if(this.juan_list[index+1]){
		// 		var pre_item=this.juan_list[index+1];
		// 		var pa={};
		// 		pa.volumeId=item.volumeId;
		// 		pa.volumeName=pre_item.volumeName;
		// 		var pa2={};
		// 		pa2.volumeId=pre_item.volumeId;
		// 		pa2.volumeName=item.volumeName;
		// 		this.yidong(pa);
		// 		this.yidong(pa2,1);
		// 	}else{
		// 		this.$message({
		// 			showClose: true,
		// 			message: '已经是最后一位了',
		// 			type:'warning',
		// 		})
		// 	}
		// },
		goWrite(chapterId){
			this.$router.push({ path: '/book_manage/book_write', query: { novelId: this.novelId,volumeId:this.nowVolumeId,chapterId:chapterId} })
		}
	}
  };
</script>
