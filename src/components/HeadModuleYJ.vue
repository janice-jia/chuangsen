<template>
  <div class="HeadModuleYJ">
    <div class="yl_chengshi container">
      <div class="yl_yj">
        <!-- <img :src="contInfoYJ.coverimg" alt=""> -->
        <!-- 
          自动播放 autostart=true、false
          <embed src="//player.video.iqiyi.com/98440a020edb2a03619235d1bc9eb6c1/0/0/v_19rrrnnplw.swf-albumId=3821237000-tvId=3821237000-isPurchase=0-cnId=undefined" allowFullScreen="true" quality="high" width="480" height="350" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
         -->
        <div class="embedbox" v-if="contInfoYJ.vlogurl">
          <embed :src="contInfoYJ.vlogurl" 
            autostart="false" />
        </div>
      </div>

      <el-row :gutter="30">
      <el-col :span="8" v-for="item in contInfoYJ.child" :key="item.id">
        <div class="yl_chengshi_img">
          <img :src="item.coverimg" alt="">
        </div>
        <div class="yl_chengshi_name">
          <p class="tit"><router-link to="comingSoon">{{item.articletitle}}</router-link></p>
          <p class="con" v-html="item.articlecontent"></p>
        </div>
      </el-col>
    </el-row>


    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadModuleYJ',
  props: {
    contInfoYJ: Object
  },
}
</script>
<style lang="scss">
.HeadModuleYJ{
  padding-bottom: 10px;
}
.yl_chengshi{
  .yl_yj{
    img{
      max-width: 100%;
    }
    .embedbox{
      height: 500px;
      background: #ededed;
      margin-bottom: 30px;
      embed{
        height: 100%;
        width: 100%;
      }
    }
  }

  // 第二部分
  .yl_chengshi_img{
    height: 230px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .yl_chengshi_name{
    color: #333333;
    height: 90px;
    padding: 0 8px;
    .tit{
      overflow: hidden;
      font-size: 24px;
      height: 40px;
      line-height: 40px;
      a{
        color: #333333;
      }
    }
    .con{
      margin-top:3px;
      font-size: 14px;
      line-height: 24px;
      color: #666666;
    }
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
</style>
