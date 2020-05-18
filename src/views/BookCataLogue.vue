<template>
    <div class="div-father">
        <div class="div-left">
            <p class="p-index">卷引</p>
            <p class="p-catalog" v-for="(item,index) in catalog" :key="index">
                {{item.volumeName}}
            </p>
        </div>
        <div class="div-right">
            <div>
                <div class="ori3">
                    <p class="div-status">
                        {{novelInfo.isComplete?status.finish:status.serialized}}
                    </p>
                    <p class="div-title2">
                        {{novelInfo.novelName}}
                    </p>
                </div>

                <div class="ori2" v-if="novelInfo.author">
                    <p class="ori2-in">
                        {{novelInfo.author.pseudonym}}
                    </p>
                    <div class="ori2-in">
                        <el-avatar :size="50" :src="novelInfo.author.headImage"></el-avatar>
                    </div>
                </div>
            </div>

            <div class="div-introduction">
                {{novelInfo.shortSummary}}
            </div>

            <div class="div-content">
                <div class="p-catalog" v-for="(item,index) in catalog" :key="index">
                    <p class="p-title">
                        {{item.volumeName}}
                    </p>
                    <div class="link-top"></div>
                    <div class="div-title" v-for="(chapter) in item.chapters" :key="chapter.chapterId">
                        <router-link :to="'/BookReader/'+chapter.chapterId">
                        <div class="div-content-1">
                            {{chapter.chapterName}}
                        </div>
                        <div class="div-content-1-read">
                            {{chapter.summary}}
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            const status = {serialized: "连载", finish: "完结"}
            return {
                status: status,
                novelInfo: {},
                catalog: []
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                let book_id = this.$route.params.id;
                this.$api.get('/api/main/pub/novel/' + book_id, {}, response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.novelInfo = response.data.resData;
                        this.catalog = response.data.resData.catalog;
                    } else {
                        console.log(response.message);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .p-catalog {
        font-size: 20px;
        margin: 10px;
    }

    .div-father {
        height: 100%;
        color: black;
    }

    .link-top {
        width: 100%;
        height: 1px;
        border-top: solid #ACC0D8 1px;
    }

    .p-title {
        font-family: "SimHei";
    }

    .div-introduction {
        width: 70%;
        font-size: 16px;
    }

    .p-index {
        text-align: right;
        margin-right: 20px;
        color: #d8d8d8;
    }

    .div-left {
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;
        width: 20%;
        height: 100%;
        display: inline-block;
    }

    .div-right {
        margin: 0 auto;
        width: 80%;
        display: inline-block;
    }

    .ori1 {
        display: inline-block;
    }

    .div-status {
        width: 30%;
        text-align: right;
        display: inline-block;
        margin: 5px;
        color: chocolate;
    }

    .div-title2 {
        margin: 5px;
        font-size: 30px;
    }

    .ori3 {
        width: 30%;
        display: inline-block;
    }

    .ori2 {
        width: 70%;
        text-align: right;
        display: inline-block;
    }

    .ori2-in {
        text-align: right;
        margin-right: 20px;
        display: inline-block;
        font-size: 20px;
    }

    ::-webkit-scrollbar {
        width: 6px;
        background-color: #d8d8d8;
    }


    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #bfc1c4;
    }

    .div-content {
        width: 100%;
    }

    .div-content-1 {
        width: 10%;
        display: inline-block;
    }

    .div-content-2 {
        width: 20%;
        display: inline-block;
    }

    .div-content-1-read {
        width: 10%;
        display: inline-block;
        color: #d8d8d8;
    }

    .div-content-2-read {
        width: 20%;
        display: inline-block;
        color: #d8d8d8;
    }

    .div-content-3 {
        width: 60%;
        text-align: right;
        display: inline-block;
    }
</style>
