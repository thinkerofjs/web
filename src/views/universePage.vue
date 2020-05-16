<template>
    <div id="univ">
        <swiper ref="mySwiper" :options="swiperOptions" @slideChangeTransitionEnd="slideChangeTransitionEnd">
            <swiper-slide class="univItem" v-for="(item, index) in swiper1Data" v-bind:key='index'>
                <div :class="currentIndex == index?'showCon':''">
                    <p class="univName0">{{item.univName}}</p>
                    <p class="univDes">{{item.univDes}}</p>
                </div>
                <div class="univImg">
                    <router-link to="/universe-list"><img :src="item.univImg" alt=""></router-link>
                    <p class="univName" :class="currentIndex == index?'hideCon':''">{{item.univName}}</p>
                </div>
            </swiper-slide>
        </swiper>
        <div class="pag">
            <svg class="icon" aria-hidden="true" @click="goPrev">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
            <swiper ref="mySwiper2" class='univSwiper2' :options="swiperPag">
                <swiper-slide v-for="(item, index) in swiper1Data" :key='index'><span @click="changeUn(index)">{{index+1}}</span></swiper-slide>
            </swiper>
            <svg class="icon arrRight" aria-hidden="true" @click="goNext">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    data() {
      return {
        currentIndex: 0,
        swiperLen: 3,
        swiper1Data:[
            {
                univName: '魔法宇宙',
                univDes: '由绝对物理规则构成的宇宙，所有生命体都无法超规则。但同样在一代代超级智者们的不断努力下某些生命体种族开始掌握规则的运转逻辑，他们建造制作各种机械体探索并开发规则的使用。',
                univImg: require('@/assets/book.jpg')
            },
            {
                univName: '魔法宇宙',
                univDes: '由绝对物理规则构成的宇宙，所有生命体都无法超规则。但同样在一代代超级智者们的不断努力下某些生命体种族开始掌握规则的运转逻辑，他们建造制作各种机械体探索并开发规则的使用。',
                univImg: require('@/assets/book.jpg')
            },
            {
                univName: '魔法宇宙',
                univDes: '由绝对物理规则构成的宇宙，所有生命体都无法超规则。但同样在一代代超级智者们的不断努力下某些生命体种族开始掌握规则的运转逻辑，他们建造制作各种机械体探索并开发规则的使用。',
                univImg: require('@/assets/book.jpg')
            },
            {
                univName: '魔法宇宙',
                univDes: '由绝对物理规则构成的宇宙，所有生命体都无法超规则。但同样在一代代超级智者们的不断努力下某些生命体种族开始掌握规则的运转逻辑，他们建造制作各种机械体探索并开发规则的使用。',
                univImg: require('@/assets/book.jpg')
            },
            {
                univName: '魔法宇宙',
                univDes: '由绝对物理规则构成的宇宙，所有生命体都无法超规则。但同样在一代代超级智者们的不断努力下某些生命体种族开始掌握规则的运转逻辑，他们建造制作各种机械体探索并开发规则的使用。',
                univImg: require('@/assets/book.jpg')
            }
        ],
        swiperOptions: {
            effect : 'coverflow',
            slidesPerView: 2,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: -200,
                depth: 400,
                modifier: 2,
                slideShadows : false
            }
        },
        swiperPag:{
            slidesPerView : 5,
            centeredSlides : true,
            allowTouchMove: false
        }
      }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    created() {
        if(this.swiper1Data.length > 7){
            this.swiperPag.slidesPerView = 7;
        }else(
            this.swiperPag.slidesPerView = this.swiper1Data.length
        )
    },
    mounted(){
    },
    methods:{
        slideChangeTransitionEnd:function(){
            this.currentIndex = this.$refs.mySwiper.$swiper.activeIndex;
            this.$refs.mySwiper2.$swiper.slideTo(this.currentIndex);
        },
        goPrev:function(){
            this.$refs.mySwiper.$swiper.slidePrev();
            this.$refs.mySwiper2.$swiper.slidePrev();
        },
        goNext:function(){
            this.$refs.mySwiper.$swiper.slideNext();
            this.$refs.mySwiper2.$swiper.slideNext();
        },
        changeUn:function(index){
            this.$refs.mySwiper.$swiper.slideTo(index);
            this.$refs.mySwiper2.$swiper.slideTo(index);
        }
    }
}
</script>

<style lang="scss">
    .arrRight{
        transform: rotate(180deg);
    }
    .univItem{
        margin-top: 60px;
        div{
            display: inline-block;
            width: 50%;
            vertical-align: middle;
        }
        div:nth-of-type(1){
            width: 40%;
            opacity: 0;
            transition: all 1s;
        }
        .showCon{
            opacity: 1 !important;
        }
        .hideCon{
            opacity: 0 !important;
        }
        .univName0{
            font-size: 38px;
            font-family: ZhenyanGB;
            font-weight: bold;
            text-align: right;
            color: #000;
        }
        .univDes{
            font-size: 14px;
            line-height: 24px;
            margin-top: 20px;
            color: #000;
        }
        .univInfoShow{
            width: 50%;
            height: auto;
        }
        .univImg{
            position: relative;
            padding-left: 5%;
            img{
                display: block;
                width: 100%;
                margin: auto;
            }
            p{
                position: absolute;
                width: 100%;
                bottom: -40px;
                left: 12%;
                font-size: 16px;
                margin-top: 20px;
                opacity: 1;
            }
        }
    }
    .swiper-pagination{
        width: 100%;
        bottom: 0;
        .my-bullet{
            display: inline-block;
            color: #ccc;
            margin: auto 10px;
            cursor: pointer;
        }
        .my-bullet-active{
            color: #000;
            border-bottom: 1px solid #000;
        }
    }
    .pag{
        margin-top: 20px;
        text-align: center;
        .univSwiper2{
            display: inline-block;
            vertical-align: middle;
            width: 200px;
            .swiper-slide{
                cursor: pointer;
            }
            .swiper-slide-active{
                span{
                    color: #000;
                    border-bottom: 1px solid #000;
                }
            }
        }
        .icon{
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
        }
        .arrRight{
            transform: rotate(180deg);
        }
    }
</style>
