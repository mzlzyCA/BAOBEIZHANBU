<template>
<div class="wrapper">
    <div class="position">
       <img src="@/assets/svg/pre.svg" class="iconfont position__icon" alt="" >
        <div>北京理工大学国防科技园2号楼10层</div> 
        <img src="@/assets/png/topRight.png" class="iconfont topRight" alt="" >
    </div>
    <img src="@/assets/png/zhanbu1.png" class="baobei" alt="Main Image" >


    <button @click="goToNextPage" class="buttonbottom">开始游戏</button>
    
</div>
</template>

<script>

export default {
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
      // 跳转到下一页的逻辑
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
        }
    }
    .baobei {
        width: 100vw;
        
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
    }
}


</style>
