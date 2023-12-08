<script setup>
import { nextTick, onMounted, onUpdated} from 'vue'
import DropCoffeeBeans from './DropCoffeeBeans.vue'

var cnt=0;
function numberChange(cnt){
    var numEl = document.getElementById('number');
    if(cnt==1)
        numEl.src = new URL(`@/assets/svg/cc2.svg`, import.meta.url).href;
    if(cnt==2)
        numEl.src = new URL(`@/assets/svg/cc1.svg`, import.meta.url).href;
    numEl.classList.add('numberAni');  
    // requestAnimationFrame(numberChange(++cnt));
}
async function tto(){
    var cnt=0;
    numberChange(cnt);
    // setInterval(numberChange,1000);
    var timer = setInterval(async function(){
        numberChange(++cnt);
        if(cnt>=3){
          clearInterval(timer);
          timer = null;

        }
        // requestAnimationFrame();
    },1000);
    // requestAnimationFrame(numberChange(cnt),1000);
    // flag=true;
    // console.log('1',flag);

      // setTimeout(()=>{
      //   numberChange(1);
      // },1000)

      // setTimeout(()=>{
      //   numberChange(2);
      // },2000)

      // if (count.value <= 0) {
      //     clearInterval(timer);
      //     timer = null;
      //     //跳转的页面写在此处
      //     router.push({path: "/"}); // 强制切换当前路由 path
      //   }
      // }, 1000)
    await nextTick();
    // console.log('2',flag);
      //https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

}
onMounted(() =>{
    tto();
})
onUpdated(() =>{
  // console.log('3',flag);
})

</script>

<script>
export default {
  name:"CountDown",
  data(){
    return{
      flag:false
    }
    
  },
  methods:{},

  mounted:function(){
    console.log(this.flag);
    setTimeout(() => {
      this.flag=true;
      console.log(this.flag);
      // this.$router.replace('/dropcoffeebeans');
      // console.log(this.$route.path);
  },3500);

  }
  
}
</script>

<template>
  <div v-if="!flag" class="mask" id="father">
    <div class="contain">
    <img src="@/assets/png/cdbg.png" class="baobei" alt="Main Image" >
      <div>
        <img src="@/assets/svg/cc3.svg" id="number" class="logo" />
      </div>
    </div>
    
    <!-- <div class="num">{{ flag }}</div> -->
    
  </div>
  <div v-else>
    <DropCoffeeBeans></DropCoffeeBeans>
  </div>
  
</template>

<style scoped>

.mask{
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color:rgb(0, 0, 0);
    /* opacity: 0.3; */
    position: relative;
    z-index: 1;

    .contain{
      display: flex;
      justify-content: center;
      align-items: center;
      /* height: 100vh; */
      width: 100vw;
      
    }
    .baobei {
        position: absolute;
        width: 100vw;
        top:10%;

        
    }
    .logo{
        position: absolute;
        height: 6em;
        width: 3em;
        padding: 1.5em;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        /* will-change: filter; */
        /* transition: filter 300ms; */
        animation: numberAni 0.5s;
        text-align: center;
        
        /* filter: drop-shadow(0 0 2em #646cffaa); */
        z-index: 10;
    }   
    .num{
        animation: change-color 8s ease-in 4s infinite ;
    }
    .numberAnimate{
        /* animation: numberAni 1s ease-in 1s; */
       
  animation-name: change-color;
  animation-duration: 8s;
  animation-delay: 4s;
  animation-iteration-count: infinite;

  font-family: Arial;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
}
        
    }
    @keyframes numberAni{
        0% {
            transform: scale(0.1);
        }
        50% {
          /* transform: scale(1); */
            filter: drop-shadow(0 0 2em #F70017);
        }
        100% {
          /* transform: scale(0); */
          filter: drop-shadow(0 0 2em #F70017);
            
        }
}
@keyframes change-color {
  25% {
   transform: scale(0.1);
  }
  50% {
    color: #FF7A59;
  }
  75% {
    color: #00BDA5;
  }
  100% {
    color: #6A78D1;
  }
}

/* .logo{
  filter: drop-shadow(0 0 2em #646cffaa);
  animation: numberAni 1s;
} */

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
