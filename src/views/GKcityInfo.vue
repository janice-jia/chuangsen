<template>
  <div class="cityInfo">
    <div class="cityInfo-banner">
      <HeaderMenu activeIndex="4"></HeaderMenu>
      <img src="../assets/img/bannerGK.jpg" alt=""/>
      
      <div class="com-page-info">
        <!-- 标题，，，评分 -->
        <div class="info01">
          <el-row>
            <el-col :span="4">
              <div class="left">
                {{detail.portname}}
                <!-- <span>Tallinn</span> -->
              </div>
            </el-col>
            <el-col :span="18">
              <!-- <div class="center">
                <el-row type="flex" class="row-bg" justify="left">
                  <el-col :span="6">
                    <div class="tag-item">
                      当地语言：asass
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="tag-item">
                      文化：asass
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="tag-item">
                      信仰：asass
                    </div>
                  </el-col>
                </el-row>
              </div> -->
            </el-col>
          </el-row>
        </div>
        
        <!-- 简介 -->
        <div class="info02">
          {{detail.description}}
        </div>
      </div>
    </div>

    <div class="container infoCon">
        <div class="info-tag">
          <el-row type="flex" class="row-bg" justify="start">
            <el-col :span="3">
              <div class="info-tag-item">{{detail.portname}}</div>
            </el-col>
          </el-row>
        </div>
        
        <div class="cityinfo-citys">
          <div class="cityinfo-citys-l">
            <!-- 幻灯片 -->
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="item in detail.imglist" :key="item">
                <img :src="item.imgurl" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="cityinfo-citys-r">
            <div class="tit">
              {{detail.portname}}
              <!-- <span>Tallinn premature</span> -->
            </div>
            <div class="con">
              {{detail.description}}
            </div>
            <div class="desc">
              <!-- <p>游玩时间：建议游玩0.0小时</p>
              <p>地址：Vanalinn, Kesklinn, Tallinn</p> -->
            </div>
          </div>
        </div>
    </div>
    
  </div>
</template>
<script>
import HeaderMenu from '../components/HeaderMenu.vue'
export default {
  name:'Company',
  components: {
    HeaderMenu
  },
  data() {
    return {
      detail: {},
      searchVal: '',
      activeIndex: 1,
    }
  },
  mounted(){
    this.getDetail()
  },
  methods: {
    getDetail(pageval){
      this.detail = {}
      var paramsData = {}
      if (this.$route.params.id) paramsData.portid = this.$route.params.id
      this.$http.get('/API/port.ashx?command=GetPortDetail', {params: paramsData}).then(function (res) {
        this.detail = res.body
      })
    }
  }
}
</script>
<style lang="scss">
.cityInfo-banner{
  position: relative;
  padding-bottom: 30px;
  img{
    max-width: 100%;
  }
  .com-page-info{
    height: 200px;
    padding: 30px;
    width: 1200px;
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    position: absolute;
    left: 50%;
    bottom: -65px;
    margin-left: -600px;
    .info01{
      height: 60px;
      border-bottom: 1px solid #e5e5e5;
      .left{
        font-size: 32px;
        color: #333333;
        span{
          font-size: 14px;
          color: #666666;
          margin-left: 20px;
        }
      }
      .center{
        text-align: center;
        padding-top: 20px;
        font-size: 16px;
        color: #999999;
        .tag-item{
          text-align: center;
          border-right: 1px solid #e5e5e5;
        }
      }
    }
    .info02{
      font-size: 16px;
      color: #999999;
      margin-top: 12px;
      line-height: 28px;
      height: 82px;
      overflow: hidden;
    }
  }
}

.cityInfo{
  .infoCon{
    margin-top: 100px;
    .info-tag{
      box-shadow:5px 5px 5px rgba(0,0,0,.35);
      background: #ffffff;
      height: 100px;
      line-height: 100px;
      padding: 0 30px;
      .info-tag-item{
        font-size: 28px;
        font-weight: normal;
        color: #333333;
      }
    }
  }
}

.cityinfo-citys{
  margin-top: 30px;
  padding: 20px;
  height: 420px;
  box-shadow:5px 5px 5px rgba(0,0,0,.35);
  background: #ffffff;
  .cityinfo-citys-l{
    float: left;
    width: 730px;
    img{
      max-width: 100%;
    }
  }
  .cityinfo-citys-r{
    float: right;
    width: 395px;
    margin-left: 10px;
    .tit{
      font-size: 26px;
      color: #333333;
      padding: 30px 0;
      border-bottom: 1px solid #ededed;
      span{
        font-size: 16px;
        color: #999999;
        margin-left: 20px;
      }
    }
    .con{
      margin: 30px 0;
      font-size: 14px;
      color: #999999;
      line-height: 25px;
      max-height: 130px;
      overflow: hidden;
    }
    .desc{
      margin-top:30px;
      p{
        font-size: 14px;
        color: #333333;
        line-height: 25px;
      }
    }
  }
}

// 幻灯片
.cityinfo-citys-l{
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}

</style>
