<template>
  <div id="app">
    <el-container>
      <!-- 头部 -->
      <Header></Header>
      <!-- banner -->
    </el-container>
    <router-view/>
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
    mounted(){
        this.setZoom()
    },
  components: {
    Header,
    Footer
  },
    methods: {
        setZoom(){
            // if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            //     var viewportmeta = document.querySelector('meta[name="viewport"]');
            //     if (viewportmeta) {
            //         viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
            //         document.addEventListener('touchstart', function () {
            //             viewportmeta.content = 'viewportmeta.content = width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            //         }, false);
            //         document.addEventListener('orientationchange', function () {
            //             viewportmeta.content = 'viewportmeta.content = width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
            //         }, false);
            //     }
            // }

            // var _width = parseInt(window.screen.width);
            // var scale = _width/1380;
            // var ua = navigator.userAgent.toLowerCase();
            // var result = /android (\d+\.\d+)/.exec(ua);
            // if (result){
            //     var version = parseFloat(result[1]);
            //     if(version>2.3){
            //         document.write('<meta name="viewport" content="width=1380, minimum-scale = '+scale+', maximum-scale = '+scale+'">');
            //     }else{
            //         document.write('<meta name="viewport" content="width=1380">');
            //     }
            // } else {
            //     document.write('<meta name="viewport" content="width=1380, user-scalable=no">');
            // }
        }
    },
    watch: {
        $route() {
            this.setZoom();
        }
    }
}
</script>

