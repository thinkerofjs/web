<template>
    <div id="book-reader">
        <transition>
            <div class="leftPicWrap" v-if="ifShowLeft">
                <div class="logo" @click="goIndex">
                    <span>大说</span>
                    <img src="/book-reader/logo.jpg" alt/>
                </div>
                <img class="leftArrowBtn" src="/book-reader/左箭头.png" alt @click="triggerLeft"/>
            </div>
        </transition>
        <div class="leftPicHidden" v-if="!ifShowLeft">
            <img class="leftArrowBtn" src="/book-reader/左箭头.png" alt @click="triggerLeft"/>
        </div>
        <div class="rightContainer">
            <div class="contents" ref="contents">
                <!-- 章 -->
                <div class="title">{{chapterInfo.chapterName}}</div>
                <!-- 内容 -->
                <div class="text">{{chapterInfo.content}}</div>
            </div>
        </div>
        <div class="tabWrap">
            <button class="shareBtn">
                <img src="/book-reader/分享.png" alt/>
            </button>
            <button class="commitBtn">
                <img src="/book-reader/评论.png" alt/>
            </button>
            <div class="controlBtnWrap">
                <button class="prevBtn" v-if="chapterInfo.previousChapter" @click="fetchData(chapterInfo.previousChapter.chapterId)">
                    <img src="/book-reader/上一章.png" alt/>
                </button>
                <router-link class="bookMenu" :to="'/BookCataLogue/'+chapterInfo.novelId">
                <button class="menuBtn">
                    <img src="/book-reader/目录.png" alt/>
                </button>
                </router-link>
                <button class="nextBtn" v-if="chapterInfo.nextChapter" @click="fetchData(chapterInfo.nextChapter.chapterId)">
                    <img src="/book-reader/下一章.png" alt/>
                </button>
            </div>
            <button class="fixBtn">
                <img src="/book-reader/固定.png" alt/>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "book-reader",
        data: () => {
            return {
                // 章节相关信息
                chapterInfo: {},
                ifShowLeft: true
            };
        },
        created() {
            let chapterId = this.$route.params.id;
            this.fetchData(chapterId);
        },
        methods: {
            fetchData(chapterId) {
                let chapterInfo_url = "/api/main/pub/novel/content/" + chapterId;
                this.$api.get(chapterInfo_url, {}, response => {
                    if (response.data.resData === null) {
                        this.chapterInfo = {
                            chapterName: "没有章节名称",
                            content: "没有内容",
                        };
                    } else {
                        this.chapterInfo = response.data.resData;
                        this.handleCurrentChange();
                    }
                })
            },
            // 改变文章位置
            handleCurrentChange() {
                this.$nextTick(()=>{
                    this.$refs.contents.scrollTop = 0
                });
            },
            goIndex() {
                this.$router.push("/");
            },
            triggerLeft() {
                this.ifShowLeft = !this.ifShowLeft;
            }
        }
    };
</script>

<style scoped>
    #book-reader {
        width: 100vw;
        display: flex;
        align-items: center;
        height: 100vh;
        overflow: hidden;
    }

    .leftPicWrap {
        background-color: #3d4e2c;
        flex: none;
        width: 773px;
        height: 100%;
        position: relative;
    }

    .leftPicWrap .logo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 10px;
        height: 100px;
        cursor: pointer;
    }

    .leftPicWrap .logo > span {
        color: white;
        font-size: 26px;
        margin-right: 20px;
    }

    .leftPicWrap .logo > img {
        height: 100%;
        height: 50px;
        border-radius: 50%;
    }

    .leftPicHidden {
        background-color: #3d4e2c;
        flex: none;
        width: 80px;
        height: 100%;
        position: relative;
    }

    .leftArrowBtn {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .rightContainer {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
    }

    .contents {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 142px 10% 100px;
        text-align: left;
        overflow-y: auto;
    }

    .volume {
        color: rgb(183, 183, 183);
        font-size: 12px;
        margin-bottom: 10px;
    }

    .chapter {
        color: rgb(27, 27, 27);
        font-size: 30px;
        margin-bottom: 23px;
    }

    .title {
        color: black;
        font-size: 46px;
        font-weight: bold;
        margin-bottom: 45px;
        line-height: 1;
    }

    .text {
        color: black;
        font-size: 18px;
        margin-bottom: 45px;
    }

    .tabWrap {
        width: 100%;
        height: 90px;
        flex: none;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: white;
        display: flex;
        align-items: center;
        box-shadow: 0 10px 20px 0px grey;
    }

    .tabWrap button {
        border: none;
        outline: none;
        background-color: transparent;
    }

    .tabWrap > .controlBtnWrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        box-sizing: border-box;
        padding: 0 20px;
    }
</style>
