<template>
  <div class="div-father">

    <div class="div-left">
      <p class="p-index">卷引</p>
      <Scroll class="-webkit-scrollbar">
      <p class="p-catalog" v-for="item in catalog" :key="item">
        {{item.title}}
      </p>
      </Scroll>
    </div>

    <div class="div-right">
      <div>
        <div class="ori3">
          <p class="div-status">
            {{status}}
          </p>
          <p class="div-title2">
            {{title}}
          </p>
        </div>

        <div class="ori2">
          <p class="ori2-in">
            {{author}}
          </p>
          <div class="ori2-in">
            <Avatar icon="ios-person" />
          </div>
        </div>
      </div>

      <div class="div-introduction">
        {{introduction}}
      </div>

      <div class="div-content">
        <Scroll class="-webkit-scrollbar">
        <div class="p-catalog" v-for="item in content" :key="item">
          <p class="p-title">
            {{item.title}}
          </p>
          <div class="link-top"></div>
          <div class="div-title" v-for="i in item.value" :key="i">

            <div>

            </div>
            <div class="div-content-1" v-if="i.isRead === false">
              {{i.title}}
            </div>

            <div class="div-content-1-read" v-if="i.isRead === true">
              {{i.title}}
            </div>

            <div class="div-content-2" v-if="i.isRead === false">
              {{i.value}}
            </div>

            <div class="div-content-2-read" v-if="i.isRead === true">
              {{i.value}}
            </div>

            <div class="div-content-3">
              <div v-if="i.type === '免费'">
                <Tag color="orange">免费</Tag>
              </div>
              <div v-else-if="i.type === 'vip'">
                <Tag color="primary">vip</Tag>
              </div>

            </div>


          </div>
        </div>
        </Scroll>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      title:'一个悲伤的故事',
      status:'完本',
      author:'不愿透露名字的作者',
      introduction:'他紧张兮兮的再次把头探出去，孟晓涵有点生气' +
              '但没有表现出来，只是微笑着拿过水杯要去接水。' +
              '他能想到，孟晓涵一定会把别人用过的杯子洗上十七八遍。'
      ,columns1: [
        {
          title: '卷引',
          key: 'title'
        },
      ],
      content:[
        {title: "第一卷",
          value:[
            {
              title:'第一章',
              value:'前言',
              type:'免费',
              isRead:true
            },{
              title:'第二章',
              value:'起因',
              type:'免费',
              isRead:true
            },{
              title:'第三章',
              value:'是他',
              type:'免费',
              isRead:true
            },{
              title:'第四章',
              value:'不该如此',
              type:'免费',
              isRead:true
            },{
              title:'第五章',
              value:'失去',
              type:'免费',
              isRead:false
            },{
              title:'第六章',
              value:'神秘人',
              type:'免费',
              isRead:false
            }
          ]},{title: "第二卷",
          value:[
            {
              title:'第一章',
              value:'出世',
              type:'vip',
              isRead:false
            },{
              title:'第二章',
              value:'再次出世',
              type:'vip',
              isRead:false
            },{
              title:'第三章',
              value:'横空出世',
              type:'vip',
              isRead:false
            },{
              title:'第四章',
              value:'结果出事',
              type:'vip',
              isRead:false
            },{
              title:'第五章',
              value:'最后去世',
              type:'vip',
              isRead:false
            }
          ]
        },
      ],
      catalog:[
        {
          title: '第一章',
        }, {
          title: '第二章',
        },{
          title: '第三章',
        },{
          title: '第四章',
        },{
          title: '第五章',
        },{
          title: '第六章',
        },{
          title: '第七章',
        }
      ]
    }
  }

}
</script>

<style scoped>
  .p-catalog{
    font-size:20px;
    margin: 10px;
  }
  .div-father{
    height: 100%;
    color: black;
  }
  .link-top {
    width: 100%;
    height: 1px;
    border-top: solid #ACC0D8 1px;
  }
  .p-title{
    font-family: "SimHei";
  }
  .div-introduction{
    width: 70%;
    font-size:16px;
  }
  .p-index{
    text-align: right;
    margin-right: 20px;
    color: #d8d8d8;
  }
  .div-left{
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    width: 20%;
    height: 100%;
    display: inline-block;
  }
  .div-right{
    margin: 0 auto;
    width: 80%;
    display: inline-block;
  }

  .ori1{
    display: inline-block;
  }

  .div-status{
    width: 30%;
    text-align: right;
    display: inline-block;
    margin: 5px;
    color: chocolate;
  }

  .div-title2{
    margin: 5px;
    font-size: 30px;
  }

  .ori3{
    width: 30%;
    display: inline-block;
  }
  .ori2{
    width: 70%;
    text-align: right;
    display: inline-block;
  }
  .ori2-in{
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
    border-radius:10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bfc1c4;
  }

  .div-content{
    width: 100%;
  }

  .div-content-1{
    width: 10%;
    display: inline-block;
  }

  .div-content-2{
    width: 20%;
    display: inline-block;
  }

  .div-content-1-read{
    width: 10%;
    display: inline-block;
    color: #d8d8d8;
  }

  .div-content-2-read{
    width: 20%;
    display: inline-block;
    color: #d8d8d8;
  }

  .div-content-3{
    width: 60%;
    text-align: right;
    display: inline-block;
  }
</style>