<script setup>
import {onMounted, reactive, ref} from "vue"
</script>
<template>
<div class="wrapper">
    <div class="position">
      <router-link :to="{path:'/startgame'}">
        <img src="@/assets/svg/preb.svg" class="iconfont position__icon" alt="" >
    </router-link> 
        <div color="black">占卜结果</div> 
        <img src="@/assets/png/topRight.png" class="iconfont topRight" alt="" >
    </div>
    <!-- <img src="@/assets/png/coffee/1.png" class="baobei" alt="Main Image" > -->
    <div>

    <div v-if="reflag==0">
      <img src="@/assets/png/coffee/1.png" class="baobei" alt="Main Image" >
    </div>
    <div v-else-if="reflag==1">
      <img src="@/assets/png/coffee/2.png" class="baobei" alt="Main Image" >
    </div>
    <div v-else-if="reflag==2">
      <img src="@/assets/png/coffee/3.png" class="baobei" alt="Main Image" >
    </div>
    <div v-else-if="reflag==3">
      <img src="@/assets/png/coffee/4.png" class="baobei" alt="Main Image" >
    </div>
    <div v-else-if="reflag==4">
      <img src="@/assets/png/coffee/5.png" class="baobei" alt="Main Image" >
    </div>
    <div v-else>
      <img src="@/assets/png/coffee/6.png" class="baobei" alt="Main Image" >
    </div>
  </div>
    <!-- <img v-show="reflag===0" src="@/assets/png/coffee/1.png" class="baobei" alt="Main Image" >
    <img v-show="reflag===1" src="@/assets/png/coffee/2.png" class="baobei" alt="Main Image" >
    <img v-show="reflag===2" src="@/assets/png/coffee/3.png" class="baobei" alt="Main Image" >
    <img v-show="reflag===3" src="@/assets/png/coffee/4.png" class="baobei" alt="Main Image" >
    <img v-show="reflag===4" src="@/assets/png/coffee/5.png" class="baobei" alt="Main Image" >
    <img v-show="reflag===5" src="@/assets/png/coffee/6.png" class="baobei" alt="Main Image" > -->


    <!-- <router-link :to="{path:'/t',query: {index: 1}}"> -->
    <!-- <router-link :to="{path:'/DropCoffeeBeans'}">
      <button class="buttonbottom">开始游戏</button>
    </router-link> -->
    
    <div class="buttonContainer">
        <router-link :to="{path:'/startgame'}">
         <button @click="goToNextPage" style="background-color: #000000;color: white;" class="buttonbottom">再试一次</button>
        </router-link>
        <button @click="goToNextPage"  style="background-color: #F70017;color: white;" class="buttonbottom">去下单</button>
    </div>
<!-- 
  <van-row>
  <van-col span="4">span: 4</van-col>
  <van-col span="10" offset="4">offset: 4, span: 10</van-col>
  <van-col span="6">span: 6</van-col>
</van-row> -->
</div>
</template>

<script>

export default { 
  name:"OutCome",
  data(){
    return{

    }
  },
  computed:{
      
    reflag(){
      console.log(this.$route.query.index);
      return this.$route.query.index;
      },
    },
  setup() {
    // onMounted(() => {
    //   console.log("mounted",this.reflag);
    //   this.reflag = this.$route.query.index;
    //   console.log(this.reflag);
    // });


    // var reflag = ref(0);

    // onMounted(() => {
    //   console.log("mounted", reflag.value);
    //   reflag.value = $route.query.index;
    //   console.log(reflag.value);
    // });

    // return {
    //   reflag
    // };
  },
  // methods:{
   
    // goToNextPage() {
    //   // this.$router.push({path: '/coffee'});
    //   // this.$router.replace('/countdown');
    //   // console.log(this.$route.path);

    // }
  // }
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
  background-color: rgb(255, 255, 255);


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
    .buttonContainer{
      position: fixed;
      bottom: 2%;
      display: flex;
      width: 100vw;
      justify-content: space-evenly;
      // justify-content: center;
      align-items: center;

      .buttonbottom {
        width: 45vw;
        align-items: center;
        border-radius: 60px;
        // left: 50%;
        // transform: translateX(-50%);
      //   justify-content: center;
      // align-items: center;
    }
    }
    
}


</style>