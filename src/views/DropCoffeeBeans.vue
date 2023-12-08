<script setup>

import router from "@/router/index.js"
import { ref, onMounted, nextTick, onUpdated} from 'vue'
// , useRoute
// const route = useRoute()

const gameContainerRef = ref(null)
const props={
    width: 40,
    height: 100,
    speed: 3,
    imageUrl: "@/assets/svg/c.svg",
    maxRotateDeg: 30,
    renderTime: 1200,
    split:20, 
    screenPadding:50,
    width:10,
    totalPackets:50,
    WindowWidth: '100vw'
}
var HitNum = 0;
var globFlag = false;
function createRedPacket(leftlen) {
    // console.log(leftlen)
    const id = Math.random() * 1e18
    // redPacketList.value.push(id)

    const { width, height, imageUrl } = props
    const CoffeeObj = document.createElement('img')
    CoffeeObj.src = new URL(`@/assets/svg/c.svg`, import.meta.url).href
    CoffeeObj.classList.add('CoffeeBeans');//为DOM添加一个新的样式
    CoffeeObj.id = 'Bean-' + id
    // CoffeeObj.style.width = width + 'px'
    // CoffeeObj.style.height = height + 'px'
    CoffeeObj.style.width = 5 + 'vw'
    CoffeeObj.style.height = 3 + 'vh'

    CoffeeObj.style.left = leftlen + 'px'
    // console.log("100", CoffeeObj)
    // gameContainerRef.value!.appendChild(CoffeeObj)  
    gameContainerRef.value.appendChild(CoffeeObj);
    // nextTick().then(( )=> {

    // })    
    // console.log("xx21",CoffeeObj.getBoundingClientRect().left,CoffeeObj.getBoundingClientRect().top);
    // CoffeeObj.onclick = () => hitPacket(id);
    setTimeout(() => {
      if(CoffeeObj)
        gameContainerRef.value.removeChild(CoffeeObj);
    }, 2000)
}
function hitPacket(id) {
 
    console.log("yes");
    const hitEl = document.querySelector(`#Bean-${id}`);
    
    if (gameContainerRef.value && hitEl) {
      gameContainerRef.value.removeChild(hitEl);
    }
    
    
}

function computedXPoint() {
  const { split, screenPadding, width, WindowWidth } = props
  const maxScreenWidth = window.innerWidth - screenPadding * 2
  const maxFreeSpace = maxScreenWidth - width * split
  const marginSpace = maxFreeSpace / (split + 1)
  return Object.keys([...Array(split)]).map(Number).map(x => screenPadding + marginSpace + (width + marginSpace) * x)
}

function getRandomArray(array) {
  return array.sort(() => 0.5 - Math.random())
}

function GetBeansInCup(){
  const box = document.getElementById('box');
  var beansArray = gameContainerRef.value.children;
  // console.log(beansArray instanceof HTMLCollection);
  // console.log(beansArray.length)
    for(var i=1; i<beansArray.length;i++){
          if(Math.abs(parseInt(box.style.left, 10) - beansArray[i].getBoundingClientRect().left ) <= 40 && Math.abs(parseInt(box.getBoundingClientRect().top,10) - beansArray[i].getBoundingClientRect().top <= 100)){
           
            const hitEl = document.querySelector(`#${beansArray[i].id}`);
            console.log("hhhhh",hitEl);
            // const hitEl = document.getElementById(`#${beansArray[i].id}`);
            if (gameContainerRef.value && hitEl) {
              
              console.log("yessssssssssss");
              
              const { top, left, width, height } = hitEl.getBoundingClientRect()
              const topPoint = top + height * 3 / 2
              const lefPoint = left + width  
              const hitImageEl = document.createElement('img')
              // hitImageEl.classList.add('hit-animation')
              hitImageEl.src = new URL(`@/assets/svg/Jia1.svg`, import.meta.url).href
              hitImageEl.style.position = 'absolute'
              hitImageEl.style.top = topPoint + 'px'
              hitImageEl.style.left = lefPoint + 'px'
              hitImageEl.style.width = '30px'
              hitImageEl.style.height = '30px'
              
              
              document.body.appendChild(hitImageEl);
              // gameContainerRef.value.appendChild(hitImageEl);
              HitNum += 1;
              console.log(HitNum);
              // gameContainerRef.value.removeChild(hitEl);
              
              // var cupObject = document.getElementById('Cup');
              //cupObject.src  = new URL(`@/assets/svg/b2.svg`, import.meta.url).href;
              hitEl.src  = new URL(`@/assets/svg/cc.svg`, import.meta.url).href;
              setTimeout(() => {
                if(hitImageEl)
                  document.body.removeChild(hitImageEl);
                  // gameContainerRef.value.removeChild(hitImageEl);
                // cupObject.src ="@/assets/svg/b1.svg";
                // cupObject.src  = new URL(`@/assets/svg/baobei.svg`, import.meta.url).href;


              }, 500)
            }
            //this.facial = true;
            // if(beansArray[i].getBoundingClientRect().bottom <= 0){
              
            // }
            
          }
          // console.log(i , beansArray[i].getBoundingClientRect().left, box.style.left );
    }
}
function testFunc(leftlen){
  createRedPacket(leftlen);
  // nextTick();
  // GetBeansInCup();
  nextTick(() => {
    GetBeansInCup();
  });
}
onMounted(async () => {
  const pointList = computedXPoint()
  const { split, totalPackets } = props
  const allPointList = [...Array(Math.ceil(totalPackets / split))].map(() => getRandomArray(pointList)).flat().splice(0, totalPackets).map(Math.ceil)

  let index = 0
//   let timer: number | null = null
  let timer = null
  let num=0
  createRedPacket(allPointList[index++])
  timer = setInterval(async function(){
    if (index >= totalPackets){
    // if (index >= 10) {
      clearInterval(timer);
      // router.replace('/startgame');
      
      setTimeout(() => {
          console.log("whwrhszslifj",HitNum);
          var flag = false;
          for(var i=0;i<HitArray.length;i++)
            if(HitNum%HitArray[i]==0){
            router.replace( {path: '/outcome', query: { index: i }});
            // router.replace('/outcome');
            flag = true;
            // console.log(that.$route.path);
            console.log("aaaaaaaaaaaaaa");
            break;
          }
          if(!flag){
            router.replace({path: '/outcome', query: { index: 5 }});
          } 
      },3000);
      
    }
    testFunc(allPointList[index++]);
    console.log(index);
    // nextTick();
    // GetBeansInCup();

    // console.log("xx22",gameContainerRef.value.children);

  }, 400)
  // console.log(1000, gameContainerRef)

  onUpdated(() => {
      
      console.log('DOM updated');
      // console.log("xx22",gameContainerRef.value.children);
  })

  var HitArray = [2,3,5,7,11];
  const that = this;
  // setTimeout(() => {

  //     console.log(this.$route.path);
  // },60000);

  console.log("ffffff",globFlag);
  if(globFlag){
    
  }


  // timerCup = setInterval(function(){
  //   if (index>=50) {
  //     clearInterval(timerCup)
  //   }
  //   // createRedPacket(allPointList[index++])
  // }, 700)
})

</script>

<template>
  <div class="game-container" ref="gameContainerRef" id="backPic">
    <!-- <img src="@/assets/svg/1.svg" class="CoffeeBeans" alt="" style="width: 80px; height: 101px; left: 20px;"> -->
    
    <img  src="@/assets/png/zhanbu2.png" class="game-container wx" alt="" style="width: 180vw; height: 80vh; ">

    <div class="CupContainer" id="box" @mousedown="startDrag"
    @touchstart="startDrag"
    @mousemove="drag"
    @touchmove="drag"
    @mouseup="endDrag"
    @touchend="endDrag" :class="isDragging ? 'grabbing' : ''" >
    
    <img id="Cup" src="@/assets/svg/baobei.svg"  class="BaoCup" alt="" style="width: 20vw; height: 12vh; ">
    
    <!-- <img v-show="facial" src="@/assets/svg/b2.svg"  id="Cup" class="BaoCup" alt="" style="width: 180px; height: 201px; "> -->
  
  </div>
  </div>
</template>

<script>
export default {
    name:"DropCoffeeBeans",
    data() {
      return {
        isActive:1,
        isDragging: false,
        initialMouseX: 0,
        initialMouseY: 0,
        initialBoxX: 0,
        initialBoxY: 0,
        facial:false
      };
  },
    components:
    {
      
    },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      
      if (event.type === 'mousedown') {
        this.initialMouseX = event.clientX;
        this.initialMouseY = event.clientY;
        this.initialBoxX = parseInt(window.getComputedStyle(event.target).getPropertyValue('left'), 10);
        window.addEventListener('mousemove', this.drag);
        window.addEventListener('mouseup', this.endDrag);
      } 
      else if (event.type === 'touchstart') {
        this.initialMouseX = event.touches[0].pageX;
        this.initialMouseY = event.touches[0].pageY;
        this.initialBoxX = parseInt(window.getComputedStyle(event.target).getPropertyValue('left'), 10);
        window.addEventListener('touchmove', this.drag);
        window.addEventListener('touchend', this.endDrag);
        
      }
      // this.initialBoxY = parseInt(window.getComputedStyle(event.target).getPropertyValue('top'), 10);
      
      
    },
    drag(event) {
      // console.log("yes",this.isDragging);
      if (this.isDragging) {
        const box = document.getElementById('box');
        var boxLeft = 0;
        if (event.type === 'mousemove') {
          // const deltaX = event.clientX - this.initialMouseX;
          boxLeft = event.clientX;
        }
        if (event.type === 'touchmove') {
          // const deltaX = event.touches[0].pageX - this.initialMouseX;
          // boxLeft = this.initialBoxX + event.touches[0].pageX - this.initialMouseX;
          boxLeft = event.touches[0].pageX;

        } 
       
        // const deltaX = event.clientX - this.initialMouseX;
        // const deltaY = event.clientY - this.initialMouseY;
        // const box = document.getElementById('box');
        // box.style.left = `${this.initialBoxX + deltaX}px`;
        
        // box.style.left = `${event.clientX}px`;
        // box.style.top = `${event.clientY}px`;

        
        var winWidth = window.innerWidth - box.style.width;
        // console.log(boxLeft);
        // console.log(window.innerWidth);
        
        // winWidth = document.documentElement.clientWidth;//$(window).width()
        if(boxLeft  <= 0){
          box.style.left = `0px`;
          console.log("1");
        }
        else if(boxLeft  >= winWidth){
          box.style.left = `${winWidth}px`;
          console.log("2");
        }
        else{
          box.style.left = `${boxLeft}px`;
          // console.log("3");
        }
        // box.style.left = `50px`;
        // box.style.top = `${this.initialBoxY + deltaY}px`;
        // console.log("deltaX"+deltaX)

        
      }
    },
    endDrag() {
      this.isDragging = false;
      window.removeEventListener('mousemove', this.drag);
      window.removeEventListener('mouseup', this.endDrag);
      window.removeEventListener('touchmove', this.drag);
      window.removeEventListener('touchend', this.endDrag);
    },

//     GetBeansInCup(){
//     const box = document.getElementById('box');
//     var beansArray = gameContainerRef.value.children;
//     // console.log(beansArray instanceof HTMLCollection);
//     // console.log(beansArray.length)
//     for(var i=1; i<beansArray.length;i++){
//           if(Math.abs( parseInt(box.style.left, 10) - beansArray[i].getBoundingClientRect().left ) <= 10 && parseInt(box.getBoundingClientRect().top,10) - beansArray[i].getBoundingClientRect().top <= 10){
//             console.log("yessssssssssss");
//             this.facial = 1;
//           }
//           console.log(i, beansArray[i].getBoundingClientRect().left, box.style.left );
//     }
// }
  }
  // ,
  
  // mounted: function() {
  //   // this.GetBeansInCup();

  // },
  

}

</script>

<style lang="scss">
.game-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: rgb(0, 0, 0);

  .CoffeeBeans{
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    font-size: 0;
    animation: down 2s linear forwards;
    z-index: 10;
  }

  @keyframes down {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(110vh);
    }
  }

  .wx{
    position: absolute;
    // top: 50%;
    // left: 1%;
    right:-40%;
    display: flex;
    align-items: center;
    justify-content: center;
    // animation: rotate 1s linear infinite;
    // -webkit-animation: rotate 1s linear infinite;
    // background-color:peru;
    border-radius: 50%;

  }
  @keyframes rotate {
        0% {
            transform: rotate(0);
            filter: drop-shadow(0 0 10em #f7001980);
        }

        25% {
            transform: rotate(90deg);
        }

        50% {
            transform: rotate(180deg);
        }

        75% {
            transform: rotate(270deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes rotate {
        0% {
            transform: rotate(0);
        }

        25% {
            transform: rotate(90deg);
        }

        50% {
            transform: rotate(180deg);
        }

        75% {
            transform: rotate(270deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

  .CupContainer{
    position: absolute;
    // background-color: aqua;
    bottom: 0;
    left: 0;
    width: 30vw;
    height: 25vh;
    
    .BaoCup{
      position: absolute;
      bottom: 0;
      left: 0;
      // transform: translateY(-100%);
      font-size: 0;
      // animation: down 3s linear forwards;
  }
    .hit-animation {
      animation: rise 0.4s ease forwards;
  }

    @keyframes rise {
      0% {
        transform: translateY(0);
        opacity: 1;
      }

      100% {
        transform: translateY(-100%);
        opacity: 0;
      }
    }

  }
  

  // @keyframes down {
  //   0% {
  //     transform: translateY(-100%);
  //   }

  //   100% {
  //     transform: translateY(110vh);
  //   }
  // }

}
// .CoffeeBeans{
//     width:36px;
//     height:36px;

// }

</style>
