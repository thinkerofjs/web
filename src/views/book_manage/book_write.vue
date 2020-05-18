<template>
	<el-container style="overflow: hidden;height: 100vh;background: #2E3A46;" >
		<el-aside width='60%' class="padding-30 aside-left">
			<div style="height: 10vh;line-height: 10vh;">
				<div style="width: 80%;" class="fl">
					<el-select v-model="form.volumeId" class="iconfont margin-r20" filterable :placeholder="icon2" style="width: 30%;"  @change="changeVolume" :disabled="disabled">
						<el-option
							v-for="item in juan_list"
							:key="item.value"
							:label="item.volumeName"
							:value="item.volumeId"
							>
						</el-option>
					</el-select>
					<el-select v-model="form.chapterId" class="iconfont margin-r20" filterable :placeholder="icon" style="width: 30%;" @change="changeChapter" :disabled="disabled2">
						<el-option
							v-for="item in zhang_list"
							:key="item.value"
							:label="item.chapterName"
							:value="item.chapterId">
						</el-option>
						<el-option
							label="新增章节"
							value="0"
							style="text-align: center;"
							class="hover">
						</el-option>
					</el-select>
					<el-input
									placeholder="请输入章节名称"
									v-model="form.chapterName"
									clearable
									style="width: 30%;">
					</el-input>
				</div>
				<span class="fr box-shadow">
					<el-button style="border: none;background-color:#4F5D6A;margin-right: 0px;border-top-right-radius: 0px;border-bottom-right-radius:0px" size="medium " type="info" class="f12" @click="saveContent()">保存</el-button>
					<el-button style="padding-right:10px ;padding-left:10px ;border: none;background-color:#537CD6;border-top-left-radius: 0px;border-bottom-left-radius:0px;margin-left:0px" icon="el-icon-caret-right" size="medium " type="info"></el-button>
				</span>
			</div>
			<div style="height: 80vh;">
				<el-input
					type="textarea"
					placeholder="请输入内容"
					v-model="form.chapterContent"
					@focus="focus"
				>
				</el-input>
				<!-- <textarea v-model="form.chapterContent" ref="textarea"></textarea> -->
			</div>
		</el-aside>
		<el-main width="40%" style="background: #24303C;padding: 30px;" class="padding-30">
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
			<div class="padding-t30 f12" v-show="save_time">
				<p><i class="el-icon-success margin-r10" style="color: #67C23A;"></i>上次保存时间：{{save_time}}</p>
			</div>
			<div class="border-bottom" style="padding-top:50px;border-color: #3C4854;"></div>
			<div style="padding-top:50px;">
				<el-button class="hover" size="medium " type="info" style="background: rgb(79, 93, 106);border: none;" @click="delZhang">删除章节</el-button>
				<el-button class="hover"  size="medium " type="info" style="background: rgb(79, 93, 106);border: none ;" @click="goEdit">返回</el-button>
			</div>
		</el-main>
	</el-container>
</template>

<script>
export default {
	inject:['reload'],
	name:'book_write',
	components: {
	},
	data() {
		return {
			novelId:'',
			volumeId:'',
			chapterId:'',
			juan_list:[],
			form:{
				novelId:'',
				volumeId:'',
				chapterId:'',
				chapterContent:'',
				chapterName:'',
			},
			icon:'\ue605　搜索章节',
			icon2:'\ue605　搜索分卷',
			zhang_list:[],
			detail:{},
			fits:'cover',
			zhang_detail:'',
			save_time:'',
			cover_url:'',
			timer:'',
			is_first:0,
			disabled:true,
			disabled2:true,
			is_newzhang:false,
		}
	},
	watch: {
		form:{
			handler(val){
				var that=this;
				if(this.is_first){
					var s=0;
					this.timer != null ? clearInterval(this.timer): "";
					// 延时1秒提交保存
					this.timer = setInterval(function() {
						s++;
						if(s>3&&val.ChapterContent!=''){
							// console.log('save')
							that.saveContent();
							that.beforeDestroy();
						}
					}, 1000);
				}
			},
			deep:true
		}
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
		if(this.$route.query&&this.$route.query.novelId){
			this.form.novelId=this.novelId=this.$route.query.novelId;
		}
		if(this.$route.query&&this.$route.query.volumeId){
			this.form.volumeId=Number(this.$route.query.volumeId)
		}
		if(this.$route.query&&this.$route.query.chapterId){
			this.form.chapterId=Number(this.$route.query.chapterId)
		}
		this.getJuan();
		this.getDetail();
		// this.getZhangeDetail();
		// this.getDate()
	},
	mounted:function(){
		this.$store.commit('changeNav', 0)
	},
	methods: {
		focus(){
			this.is_first=1;
		},
		beforeDestroy() {
			clearInterval(this.timer);
			this.timer = null;
		},
		getDetail(){
			var novelId=this.novelId;
			if(novelId){
				var url="/api/work/novel/"+novelId;
				this.$api.get(url, {}, response =>{
					if (response.data.resCode =='0000') {
						this.detail=response.data.resData;
						this.cover_url='/data/'+response.data.resData.cover
					}
				})
			}

		},
		//获取分卷
		getJuan(){
			var novelId=this.novelId;
			if(novelId){
				var url="/api/work/novelVolume/"+novelId;
				this.$api.get(url, {}, res =>{
					if (res.data.resCode =='0000') {
						this.juan_list=res.data.resData;

						this.disabled=false;
						this.getZhang();
					}
				})
			}
		},
		//获取章节
		getZhang(){
			var volumeId=this.form.volumeId;
			if(volumeId){
				var url="/api/work/novelVolume/"+volumeId+"/chapters";
				this.$api.get(url, {}, res =>{
					if (res.data.resCode =='0000') {
						this.disabled2=false;
						this.zhang_list=res.data.resData;
						if(!this.form.chapterId&&this.zhang_list.length>0&&!this.$route.query.is_newzhang&&this.$route.query.is_newzhang!=0){
							this.chapterId=this.form.chapterId=res.data.resData[0].chapterId;
							this.getZhangeDetail();
						}else if(this.$route.query.is_newzhang==0){
							this.chapterId=this.form.chapterId=res.data.resData[res.data.resData.length-1].chapterId;
							this.getZhangeDetail();
						}else{
							this.getZhangeDetail();
						}
					}
				})
			}


		},
		getZhangeDetail(){
			var chapterId=this.form.chapterId;
			if(chapterId){
				var url="/api/work/novel/content/"+chapterId;
				this.$api.get(url, {}, res =>{
					if (res.data.resCode =='0000') {
						this.zhang_detail=res.data.resData;
						this.form.chapterName=this.zhang_detail.chapterName;
						this.form.chapterContent=this.zhang_detail.content;

					}
				})
			}
		},
		goEdit(){
			this.$router.push({ path: '/book_manage/book_edit', query: { 'novelId': this.novelId}})
		},
		saveContent(){
			this.beforeDestroy();
			if(!this.form.novelId){
				this.$message({
					showClose: true,
					message: '作品不存在或者已删除',
				})
				return false;
			}
			if(!this.form.volumeId){
				this.$message({
					showClose: true,
					message: '分卷不存在或者已删除',
				})
				return false;
			}
			if(!this.form.chapterId){
				this.addChapter()
				return false;
			}
			if(!this.form.chapterContent){
				this.$message({
					showClose: true,
					message: '请输入内容',
				})
				return false;
			}
			var url='/api/work/novel/updateChapter';
			this.$api.originPost(url, this.form).then(res =>{
				if (res.data.resCode=='0000') {
					this.$message({
						showClose: true,
						message: '保存成功',
					})
					this.getDate();
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
		},
		addChapter(){
			if(!this.form.chapterName){
				this.$message({
					showClose: true,
					message: '新增章节请输入章节名称',
				})
				return false;
			}
			this.$api.originPost('/api/work/novel/createChapter', this.form).then(res =>{
				if (res.data.resCode=='0000') {
					this.$message({
						showClose: true,
						message: '操作成功',
					})
					this.changeChapter(0,0)
				} else {
					this.$message({
						showClose: true,
						message: res.data.resMsg,
						type:'error',
					})
				}
			})
		},
		getDate () {
			var timeStamp=new Date();
			var year = new Date(timeStamp).getFullYear();
			var month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
			var date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
			var hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
			var mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
			var ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
			this.save_time = year + "-" + month + "-" + date +"-"+" "+hh+":"+mm+':'+ss ;
		},
		delZhang(){
			// console.log(this.zhang_detail)
			if(!this.zhang_detail.chapterId){
				this.$message({
					showClose: true,
					message: '章节不存在或者已删除',
				})
				return false;
			}
			this.$confirm('确定删除章节及其内容：'+this.zhang_detail.chapterName+'?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							this.$api.delete('/api/work/novel/'+this.zhang_detail.chapterId, {},res =>{
								if (res.data.resCode=='0000') {
									this.$message({
										showClose: true,
										message: '操作成功',
									})
									this.goEdit()
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
		changeChapter(chapterId,is_newzhang){
			if(is_newzhang!=0&&!is_newzhang){
				is_newzhang=0;
				if(chapterId<=0){
					is_newzhang=1;
					chapterId='';
				}
			}
			// console.log(chapterId)
			if(chapterId){
				this.$router.push({ path: '/book_manage/book_write', query: { novelId: this.novelId,volumeId:this.form.volumeId,chapterId:chapterId} })
			}else{
				this.$router.push({ path: '/book_manage/book_write', query: { novelId: this.novelId,volumeId:this.form.volumeId,chapterId:chapterId,is_newzhang:is_newzhang} })
			}

			this.reload();
		},
		changeVolume(volumeId){
			var is_newjuan=0;
			if(volumeId<=0){
				is_newjuan=1;
			}
			this.$router.push({ path: '/book_manage/book_write', query: { novelId: this.novelId,volumeId:volumeId,is_newjuan:is_newjuan} })
			this.reload();
		}
	}
}
</script>

<style>
	.aside-left .el-select .el-input__inner,.aside-left .el-input__inner{
		background: #24303C !important;
		border-bottom: none !important;
		border-radius: 4px !important;
		color: #dedede !important;
		border: none !important;
	}
	.aside-left .el-scrollbar{
		max-height: 50vh;
	}
	.aside-left .el-textarea,textarea{
		height: 100% !important;
	}
	.aside-left .el-textarea__inner,textarea{
		height: 100% !important;
		resize: none !important;
		background-color: #2E3A46 !important;
		border: none !important;
		color: #dedede;
		width: 100% !important;
		padding: 20px !important;
	}
</style>
