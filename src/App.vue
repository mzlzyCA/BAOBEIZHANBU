<script setup>
import DropCoffeeBeans from './views/DropCoffeeBeans.vue'
import CountDown from './views/CountDown.vue'
import StartGame from './views/StartGame.vue'
import StartPage from './views/StartPage.vue'
import OutCome from './views/OutCome.vue'


</script>

<template>
  
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" />  -->
  <!-- <DropCoffeeBeans></DropCoffeeBeans> -->
  <StartGame></StartGame>
  <!-- <OutCome></OutCome> -->
  <!-- <StartPage></StartPage> -->
  <!-- <CountDown></CountDown> -->
  <router-view></router-view>
  <!-- <router-link to="/DropCoffeeBeans">DropCoffeeBeans</router-link> |
  <router-link to="/StartGame">StartGame</router-link> | -->
  
</template>

<script>
export default {
  
  name: 'App',
  data(){
    
    return{
      meta:'',
    }
  },
  components:{
    // MainTabBar,
    // ScrollPage,
    // page1,
    // page2,
    // page3,
    // page4

    // DropCoffeeBeans,
    // CountDown,
    // StartGame,
    // StartPage
  },
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
