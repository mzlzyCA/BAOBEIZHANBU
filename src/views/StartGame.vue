<script setup>

</script>

<template>
<div class="wrapper">
    <div class="position">
       <img src="@/assets/svg/pre.svg" class="iconfont position__icon" alt="" >
        <div style="color: white;">咖啡占卜</div> 
        <img src="@/assets/png/topRight.png" class="iconfont topRight" alt="" >
    </div>
    <img src="@/assets/png/zhanbu1.png" class="baobei" alt="Main Image" >

    <!-- <router-link :to="{path:'/t',query: {index: 1}}"> -->
    <!-- <router-link :to="{path:'/DropCoffeeBeans'}">
      <button class="buttonbottom">开始游戏</button>
    </router-link>         -->
    <button @click="goToNextPage" class="buttonbottom">开始游戏</button>

</div>
</template>

<script>

export default {
  name:"StartGame",
  data() {
    return {
      
    };
  },
  computed: {

  },
  methods: {
    selectNavItem(navId) {
      this.selectedNavItem = navId;
    },
    goToNextPage() {
      // this.$router.push({path: '/coffee'});
      this.$router.replace('/countdown');
      console.log(this.$route.path);

    }
  }
}
</script>

<style scoped lang="scss">
/* @import url();  */

.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  // padding: 0 0.18vm;
  color: black;
  background-color: black;

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
        
    }
    .list-page {
        display: flex; 
        justify-content: center; 
        align-items: center;
    }

    .buttonbottom {
        position: fixed;
        bottom: 2%;
        width: 90%;
        align-items: center;
        border-radius: 60px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #F70017;
        color: #ffffff;
    }
}


</style>