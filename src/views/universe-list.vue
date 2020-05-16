<template>
    <div id="univerList">
        <Row type="flex" justify="center">
            <Col span="20" class="selectBar">
                <div class="searchBox searchCon1">
                    <Input class="searchCon " prefix="ios-search" placeholder="搜索作者或书名" />
                </div>
                <div class="searchBox searchCon2">
                    <Select class="searchCon " v-model="select1" slot="prepend">
                        <Option value="http">连载</Option>
                        <Option value="https">完结</Option>
                    </Select>
                </div>
                <div class="searchBox searchCon2">
                    <Select class="searchCon " v-model="select2" slot="prepend">
                        <Option value="http">全部宇宙</Option>
                        <Option value="https">全部宇宙</Option>
                    </Select>
                </div>
                <span class="deleteSearch">清除筛选条件</span>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span="20" class="bookListCon">
                <div class="bookList">
                    <li v-for="book_top in uniBooks_top" v-bind:key="book_top">
                        <div class="bookItem" to="/book_info?novelId=book_top.novelId">
                            <img src="@/assets/book.jpg" alt="">
                            <div class="bookInfo">
                                <p class="bookTitle">{{book_top.content.novelName}}</p>
                                <p class="bookAuthor">{{book_top.author.pseudonym}}</p>
                                <p class="bookTag">
                                    <span @click.stop="ts">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-mulu"></use>
                                          </svg>
                                          2134
                                    </span>
                                    <span>
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-mulu"></use>
                                          </svg>
                                          4354
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import { Row, Col, Input, Select, Option } from 'view-design';
export default {
    name: 'universe-list',
    data () {
        return {
            value11: '',
            value12: '',
            value13: '',
            select1: 'http',
            select2: 'com',
            select3: 'day',
            univId: 1,
            uniBooks_top:[]
        }
    },
    components: {
        Row,
        Col,
        Input,
        Select,
        Option
    },
    methods:{
        ts: function(){
            console.log(12);
        },
        tss: function(){
            console.log(434);
        }
    },
    created(){
        this.univId = document.getElementById("univId")
    },
    mounted() {

        //在用户看到界面之前执行
        var a = document.getElementById("tablebox");
        var scroll_width = 100; //滚动一下的距离
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll', mousewheel_event, false); // FF
        }
        a.onmousewheel = mousewheel_event; // IE/Opera/Chrome
        function mousewheel_event(eee) {
            var eee2 = eee || window.event, v;
            eee2.wheelDelta ? v=eee2.wheelDelta : v=eee2.detail;
            if(v>3||-v>3) v=-v;
            v>0 ? a.scrollLeft+=scroll_width : a.scrollLeft-=scroll_width;

            eee2.preventDefault(); //阻止浏览器的默认滚动
        }


        this.$api.get('api/main/pub/novel/universe/this.univId', {
            direction: 'DESC',
            pageNumber: 1,
            pageSize: 20,
            properties: null,
            sorted: true,
            unsorted: false,
            universeId: this.univId
        }, response =>{
            if (response.status >= 200 && response.status < 300) {
                console.log(response.data);
                this.uniBooks_top = response.data.resData;
            } else {
                console.log(response.message);
            }
        })
    }
}



</script>

<style>
#univerList{
    margin-top: 60px;
}
.selectBar{
    padding: 10px 20px;
    border-radius: 6px;
    box-shadow: 0 2px 4px #ccc;
    text-align: left;
}
.searchBox{
    display: inline-block;
    text-align: left;
    margin-right: 20px;
}
.searchCon .ivu-select-selection, .searchCon .ivu-input {
    background: #f4f5f7;
    border: none;
    color: #767086;
    box-shadow: none !important;
    height: 48px !important;
    line-height: 48px;
}
.searchCon1{
    width: 288px;
}
.searchCon2{
    width: 176px;
    font-size: 16px;
}
.ivu-select-selected-value,.ivu-select-placeholder,.ivu-icon{
    line-height: 48px !important;
    height: 48px !important;
}
.ivu-select-single .ivu-select-selection .ivu-select-selected-value{
    padding-left: 16px !important;
}
.ivu-select-visible .ivu-select-selection{
    box-shadow: none !important;
}
.ivu-select-item-selected, .ivu-select-item-selected:hover{
    color: #767086 !important;
}
.ivu-select-arrow:before{
    font-size: 20px;
}
.deleteSearch{
    float: right;
    font-size: 16px;
    color: #787c84;
    line-height: 48px;
    cursor: pointer;
}
.bookListCon{
    text-align: left;
}
.bookItem{
    display: inline-block;
    margin: 26px 0 10px;
    width: 25%;
    cursor: pointer;
}
.bookItem img{
    display: inline-block;
    vertical-align: top;
    width: 120px;
    margin-left: 10%;
    border-radius: 10px;
    box-shadow: 0 4px 6px #ccc;
}
.bookInfo{
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-left: 4%;
    margin-top: 4%;
    text-align: left;
    width: 42%;
    height: 150px;
}
.bookTitle{
    font-size: 24px;
    color: #000;
    line-height: 30px;
}
.bookAuthor{
    font-size: 14px;
    color: #95989f;
    margin-top: 14px;
}
.bookTag{
    position: absolute;
    left: 0;
    bottom: 0;
    margin-top: 50px;
    color: #95989f;
    font-size: 12px;
}
.bookTag span{
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
}
</style>