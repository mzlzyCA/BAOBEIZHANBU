<script setup>

</script>

<template>
<div class="wrapper">
  <div class="position">
       <img src="@/assets/svg/pre.svg" class="iconfont position__icon" alt="" >
        <div>宝杯形象</div> 
        <img src="@/assets/png/topRight.png" class="iconfont topRight" alt="" >
    </div>
    <img src="@/assets/png/zhanbu1.png" class="baobei" alt="Main Image" >
    <van-tabs
        v-model="active"
        swipeable
        color="#000"
        animated
        :swipe-threshold="5"
        title-inactive-color="#999999"
        title-active-color="#fff"
        background="transparent"
        :border="false"
    >
    <!-- <div class="navigation"> -->
      
        <van-tab v-for="item in navItems" :title="item.title" :key="item.id">
      <ul class="nav-bar">    
        <!-- <li style="display:flex;" v-for="item in itemList" :key="item.id" @click="selectNavItem(item.id)">{{ item.title }}</li> -->
        <!-- <span>{{ item.title }}</span>     -->
      <div class="sub-content">
      <ul v-for="item in itemList" :key="item.id">
        <li class="title">{{ item.title }}</li>
        <!-- <li>
        
          <a :href="item.image" target="_blank">
          <img :src="item.image" alt="Item Image">
    </a>
        </li> -->
        <van-row>
          <van-col v-for="i in item.image" :key="index" span="4">
            <img :src="i" alt="Item Image" style="width: 80%;height: 80%;">
            <!-- style="width: 100%;height: 100%;" -->
          </van-col>
        </van-row>
      </ul>
    </div>
      </ul>
    </van-tab>
    <!-- </div> -->


  </van-tabs>
  <img src="@/assets/png/zhanbu1.png" class="baobei" alt="Main Image" >

    <button @click="goToNextPage" class="buttonbottom">完成</button>

</div>
</template>

<script>

export default {
  name:"StartPage",
  data() {
    return {
      navItems: [
        { id: 1, title: '面部' },
        { id: 2, title: '道具' },
        { id: 3, title: '发型' },
        { id: 4, title: '服装' },
        { id: 5, title: '背景' },
        { id: 6, title: '称号' }, 
      ],
      selectedNavItem: null,
      itemList: [
        { id: 1, title: '标题1', image: ['src/assets/svg/skin/Ellipse 13.svg',
        'src/assets/svg/skin/Ellipse 15.svg',
        'src/assets/svg/skin/Ellipse 16.svg',
        'src/assets/svg/skin/Ellipse 17.svg',
        'src/assets/svg/skin/Ellipse 18.svg',
        'src/assets/svg/skin/Ellipse 19.svg',
        'src/assets/svg/skin/Ellipse 20.svg',
      ]},
        { id: 2, title: '标题2', image: ['src/assets/svg/skin/Ellipse 14.svg'] },
        { id: 3, title: '标题3', image: ['src/assets/svg/skin/Ellipse 15.svg'] }
      ]
      // itemList: [
      //   { id: 1, title: '标题1', image: 'src/assets/svg/skin/Ellipse 13.svg'},
      //   { id: 2, title: '标题2', image: '@/assets/svg/2.svg' },
      //   { id: 3, title: '标题3', image: '@/assets/svg/3.svg'}
      // ]
    };
  },
  computed: {
    selectedNavItems() {
      if (this.selectedNavItem) {
        return this.itemList.filter(item => item.id === this.selectedNavItem);
      }
      return [];
    }
  },
  methods: {
    selectNavItem(navId) {
      this.selectedNavItem = navId;
    },
    goToNextPage() {
      // 跳转到下一页的逻辑
    }
  }
}
</script>

<style scoped>
/* @import url();  */
/* @import url("./StartGame.vue"); */
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 5vh;
  right: 0;
  padding: 0 18vm;
  color: black;

  .position {
        padding: 5% 5%;
        line-height: 22vm;
        font-size: 4vw;
        top:5vh;
        display: flex;

        .position__icon{
            width: 3vm;
            height: 3vh;
            padding: 0 1%;
        }
        .topRight{
           height: 3vh; 
           padding: 0 0 0 1%;
           margin-left: auto;
        }
    }
    .baobei {
      width: 100vw;
      margin-bottom: 10%;
    }
    .list-page {
        display: flex; justify-content: center; align-items: center;
    }

    .navigation {
     display: flex;
     justify-content:space-between;
     align-items: center;
    }

    .nav-bar {
    /* 导航栏样式设置 */
      display: flex;
      color: aqua;
    }

    .sub-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title{
            margin-bottom: 10px;
            left:5%;
        }
    }
    .buttonbottom {
        position: fixed;
        bottom: 2%;
        width: 90%;
        align-items: center;
        border-radius: 60px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000000;
    }
}


</style>
