<template>
  <div id="bookInfo">
    <Row class="bookInfoLayout" type="flex" justify="center" align="bottom">
        <Col span="10">
          <div class="bookText">
            <div class="bookTitle"><p>一人悲伤的老豆老豆<span class="bookStatus">连载中</span></p></div>
            <p class="bookAuthor">作者</p>
            <p class="bookIntroduction">一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆一人悲伤的一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆老豆一人悲伤的老豆一人悲伤的老豆一人悲伤的老豆</p>
            <div class="bookLine">
<!--              <router-link class="bookMenu" to="/BookCataLogue">-->
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-mulu"></use>
                </svg>
                <span>作品目录</span>
<!--              </router-link>-->
              <router-link class="bookRead" to="/BookReader">
                <span>开始阅读</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fanhui"></use>
                </svg>
              </router-link>
            </div>
            <div class="bookOther">
              <svg class="icon like" aria-hidden="true">
                <use xlink:href="#icon-chenggong"></use>
              </svg>
              <svg class="icon share" aria-hidden="true">
                <use xlink:href="#icon-chenggong"></use>
              </svg>
            </div>
          </div>
        </Col>
        <Col span="6">
          <router-link class="bookRead" to="/BookReader">
            <img class="bookImg" src="@/assets/book.jpg" />
          </router-link>
        </Col>
        <Col span="8">
            <div class="scorePeople">
                <p class="scoreP"><span>2344534</span>人</p>
                <p class="scrorT">评分</p>
            </div>
            <p class="score"><span>9.7</span></p>
            <div class="zan">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mulu"></use>
              </svg>
              <svg class="icon upZan" aria-hidden="true">
                <use xlink:href="#icon-mulu"></use>
              </svg>
            </div>
        </Col>
    </Row>
  </div>
</template>

<script>
import {Row, Col} from 'view-design'

export default {
  name: 'book-info',
  components: {
      Row,
      Col
  },
  mounted(){
    console.log(this.$store.state.count)
  }
}
</script>

<style scoped>
    .bookInfoLayout{
        margin: 70px 0;
    }
    .bookText{
      margin-left: 100px;
      text-align: left;
      width: 64%;
    }
    .bookTitle{
      font-size: 44px;
      color: #000;
      font-weight: bold;
    }
    .bookTitle p{
      position: relative;
      display: inline-block;
    }
    .bookTitle p span{
      position: absolute;
      color: red;
      right: 0;
      top: -42px;
      font-size: 16px;
    }
    .bookAuthor{
      font-size: 20px;
      text-align: left;
    }
    .bookIntroduction{
      font-size: 16px;
      line-height: 30px;
      margin-top: 10%;
    }
    .bookLine{
      margin-top: 30px;
      font-size: 16px;
      font-weight: bold;
    }
    .bookLine a{
      display: inline-block;
    }
    .bookMenu .icon{
      margin-right: 10px;
      color: #000;
      opacity: 1;
    }
    .bookRead{
      float: right;
      color: #806bff;
    }
    .bookRead .icon{
      margin-left: 10px;
      transform: rotate(180deg);
    }
    .bookOther{
      font-size: 30px;
      margin-top: 30%;
    }
    .bookOther .icon{
      margin-right: 40px;
      cursor: pointer;
    }
    .bookOther .like{
      color: red;
    }
    .bookOther .share{
      color: #ccc;
    }


    .scorePeople{
      text-align: center;
      width: 60%;
      margin: auto;
    }
    .scorePeople p{
      display: inline-block;
    }
    .scoreP{
      font-size: 22px;
      color: #acacac;
    }
    .scoreP span{
      font-size: 38px;
      color: #000;
    }
    .scrorT{
      float: right;
      font-size: 40px;
      color: #ff9269;
    }
    .score{
      width: 60%;
      margin: 10px auto 0;
      font-size: 150px;
      font-weight: bold;
      color: #ff9269;
      line-height: 150px;
      text-align: right;
    }
    .score span{
      display: inline-block;
      line-height: 150px;
    }
    .bookImg{
      display: block;
      width: 100%;
      box-shadow: 4px 4px 10px #ccc;
    }
    .zan{
      width: 60%;
      margin: 30% auto 30px;
      text-align: right;
    }
    .zan .icon{
      display: inline-block;
      margin-left: 76px;
      font-size: 30px;
      cursor: pointer;
    }
    .upZan{
      color: #ff9269;
    }

</style>
