<template>
  <div class="HeadModuleBK">
    <div class="yl_baike container">
      <el-row :gutter="30">
        <el-col :span="8" v-for="(item, index) in contInfoBK" 
          :key="index+1">
          <div class="yl_baike_img">
            <img :src="item.coverimg" alt="">
          </div>
          <div class="yl_baike_name">
            <router-link :to="{name:'bkcruiseinfo', params: { id: item.id }}">{{item.articletitle}}</router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadModuleBK',
  props: {
    contInfoBK: Array
  },
}
</script>
<style lang="scss">
.HeadModuleBK{
  padding-bottom: 10px;
}
.yl_baike{
  .yl_baike_img{
    height: 270px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    img{
      max-width: 100%;
    }
  }
  .yl_baike_name{
    font-size: 22px;
    color: #333333;
    a{
      color: #333333;
    }
    height: 60px;
    line-height: 60px;
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}

@media screen and (max-width: 750px) {
  .yl_baike{
    .yl_baike_img{
      height: 135px;
    }
  }
}
</style>
