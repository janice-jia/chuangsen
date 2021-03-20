<template>
  <div class="HeadModulePP">

    <!-- <el-carousel indicator-position="outside" :autoplay="false" trigger="click" arrow="nerver">
      <el-carousel-item v-for="item in contInfoPP" :key="item.id"> -->
        <div class="yl_pinpai container">
          <el-row>
            <el-col :span="15">
              <div class="pinPL">
                <div class="pinPL-img">
                  <!-- <img :src="item.imgurl" alt=""> -->
                  <img :src="companyInfo.coverimg" alt="">
                </div>
                <div class="pinPL-con">
                  <p class="tit">
                    <!-- {{item.shipname}} -->
                    {{companyInfo.name}}
                    <!-- <router-link :to="{path: 'companyInfo',  query: { id: item.id, categoryid:categoryid }}">查看更多></router-link> -->
                    <router-link :to="{name: 'companylevel',  params: { shipcompanyid: companyInfo.id }}">查看更多></router-link>
                  </p>
                  <!-- <p class="con">{{item.description}}</p> -->
                  <p class="con">{{companyInfo.description}}</p>
                </div>
              </div>
            </el-col>
            <el-col :span="9">
              <ul>
                <li v-for="(vv, ii) in contInfoPP" :key="ii+1" v-if="ii < 2">
                  <router-link :to="{path: 'companyInfo',  query: { id: vv.id, categoryid:categoryid  }}">
                  <!-- <router-link :to="{ name: 'airlineinfo', params: { id: vv.id }}"> -->
                  <div class="pinPR">
                    <div class="pinPR-img">
                      <!-- <img :src="vv.coverimg" alt=""> -->
                      <img :src="vv.imgurl" alt="">
                    </div>
                    <div class="pinPR-name">{{vv.shipname}}</div>
                  </div>
                  </router-link>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div> 
      <!-- </el-carousel-item> -->
    <!-- </el-carousel> -->

    
    
  </div>
</template>

<script>
export default {
  name: 'HeadModulePP',
  props: {
    contInfoPP: Array,
    companyInfo: Object,
    categoryid: String
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
.HeadModulePP{
  .el-carousel__container{
    height: 600px;
  }
}
.pinPR{
  img{
    max-width: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background: #e2d9d9;
  }
}
.pinPL{
  padding-right: 40px;
  .pinPL-img{
    height: 440px;
    max-height: 440px;
    max-width: 100%;
    overflow: hidden;
    text-align: center;
    background: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      max-width:100%;
    }
  }
  .pinPL-con{
    height: 160px;
    overflow: hidden;
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 0 20px;
    .tit{
      height: 50px;
      line-height: 50px;
      font-size: 26px;
      color: #333333;
      overflow: hidden;
      a{
        padding-top:7px;
        font-size: 14px;
        float: right;
        color: #ee6b03;
      }
    }
    .con{
      line-height: 25px;
      font-size: 14px;
      height: 97px;
      overflow: hidden;
      color: #666666;
    }
  }
}
.pinPR{
  height: 285px;
  margin-bottom: 30px;
  .pinPR-img{
    height: 235px;
    background: #ededed;
    overflow:hidden;
  }
  .pinPR-name{
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    background: #ffffff;
    font-size: 26px;
    color: #333333;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
.HeadModulePP{
  .el-carousel__indicators--outside{
    border: -10px;
  }
}
@media screen and (max-width: 750px) {
  .HeadModulePP{
    .el-carousel__container{
      height: 300px;
    }
  }

  .pinPL{
    .pinPL-img{
      height: 210px;
    }
    .pinPL-con{
      height: 80px;
    }
  }

  .pinPR{
    height: 90px;
    margin-bottom: 30px;
    .pinPR-img{
      height: 65px;
    }
    .pinPR-name{
      height: 25px;
      line-height: 25px;
      overflow: hidden;
      font-size: 16px;
    }
  }
}
</style>
