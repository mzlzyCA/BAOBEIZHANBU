import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';


// https://vitejs.dev/config/



export default defineConfig({
  // base:"./",
  plugins: [
    vue(),
  //   vitePluginVueSvgIcons({ 
  //     // dir: fileURLToPath(new URL("./src/assets/svg", import.meta.url)) //svg的存放目录
  // }),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@':resolve('src'),
      'assets':resolve('./src/assets'),
      'components':resolve('./src/components'),
      
    }
  },
  server:{
    port: 8080,
    host:'100.79.38.96',
    https: false
  },
  Components:({
    resolvers: [VantResolver()],
  })
  // build:{
  //   rollupOptions:{
  //     external:'vite-plugin-vue-svg-icons'
  //   }
  // }
  

})
