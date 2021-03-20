<template>
  <div class="HeadModuleCH">
    <div class="yl_chengshi container">
      <div class="yl_chengshi_01">
        <el-row>
          <el-col :span="15">
            <div class="chImg">
              <img :src="contInfoCH.coverimg" alt="">
            </div>
          </el-col>
          <el-col :span="9" class="">
            <div class="yl_chengshi_po">
            <div class="yl_chengshi_tit">{{contInfoCH.areaname}}</div>
            <div class="yl_chengshi_con">
              {{contInfoCH.description}}
            </div>
            <div class="yl_chengshi_more">
              <!-- <router-link :to="{name:'gkcityinfo', params: { id: contInfoCH.id }}">查看更多 ></router-link>  -->
              <router-link :to="{name:'gkcitylevel', params: { areaid: contInfoCH.id }}">查看更多 ></router-link> 
            </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <el-row :gutter="30">
      <el-col :span="8" v-for="(item, i) in contInfoCH.child" :key="i+1">
        <router-link :to="{name:'gkcityinfo', params: { id: item.id }}">
          <div class="yl_chengshi_img">
            <img :src="item.imgurl" alt="">
          </div>
          <div class="yl_chengshi_name">
            <p class="tit"><router-link :to="{name:'gkcityinfo', params: { id: item.id }}">{{item.portname}}</router-link></p>
            <p class="con">{{item.description}}</p>
          </div>
        </router-link>
      </el-col>
    </el-row>


    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadModuleCH',
  props: {
    contInfoCH: Object
  }
}
</script>
<style lang="scss">
.HeadModuleCH{
  padding-bottom: 10px;
}
.yl_chengshi{
  .yl_chengshi_01{
    background: #ffffff;
    height: 280px;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-radius: 8px;
    margin-bottom: 30px;
    .chImg{
      overflow: hidden;
      height: 280px;
      background: #ededed;
      img{
        max-height: 100%;
      }
    }
    // 第一部分
    .yl_chengshi_tit{
      font-size: 32px;
      color: #333333;
      padding: 30px 20px;
    }
    .yl_chengshi_con{
      font-size: 14px;
      color: #666666;
      line-height: 22px;
      height: 130px;
      overflow: hidden;
      padding: 0 20px;
    }
    .yl_chengshi_more{
      text-align: right;
      color: #ee6b03;
      padding: 0 20px;
      font-size: 14px;
      a{
        color: #ee6b03;
      }
    }
    .yl_chengshi_po{
      position: relative;
      height: 280px;
      &::before{
        z-index: 1;
        content: " ";
        position:absolute;
        left: -23px;
        top: 50%;
        width: 23px;
        height: 47px;
        margin-top: -24px;
        background: url("../assets/img/header/left.png") no-repeat;
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
    background: #ededed;
    img{
      max-width: 100%;
    }
  }
  .yl_chengshi_name{
    color: #333333;
    height: 90px;
    padding: 0 8px;
    overflow: hidden;
    .tit{
      font-size: 24px;
      height: 40px;
      line-height: 40px;
      a{
        color: #333333;
      }
    }
    .con{
      font-size: 14px;
      line-height: 22px;
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

@media screen and (max-width: 750px) {
  .yl_chengshi{
    .yl_chengshi_img{
      height: 100px!important;
    }
    .yl_chengshi_name{
      height: 45px!important;
      .tit{
        height: 18px!important;
        line-height: 18px!important;
        font-size: 14px!important;
      }
      .con{
        font-size: 11px!important;
      }
    }
  }
}
</style>
