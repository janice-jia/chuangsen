<template>
  <div class="ContactUs">
    <div class="cs-contactUs-part1">
        <img src="../assets/img/cs-contactUs-1.jpg" alt="" />
        <div class="con">
            <div class="item1">
                <p class="more">更多业务咨询</p>
                <p class="url">wangrong@doublerise.com</p>
            </div>
            <div class="item2">
                <p class="more">关注我们</p>
                <img src="../assets/img/cs-contactUs-4.jpg" alt="" />
            </div>
        </div>
    </div>
    <div class="cs-contactUs-part2">
        <div class="container">
        <el-row type="flex" justify="space-between" :gutter="60">
          <el-col :span="12">
            <el-card :body-style="{ padding: '0px' ,textAlign: 'center'}">
              <img src="../assets/img/cs-contactUs-2.jpg" class="image">
              <div class="address-desc">
                <p class="address">汉口学院苹果体验店</p>
                <div class="address-con">
                  <p>湖北武汉市江夏区大桥新区街道金樱街文化大道汉口学院北门梧桐雨苹果体验店</p>
                </div>
                <div class="tel">
                    <p class="name">许璐</p>
                    <p class="telnum">136 3607 0936</p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card :body-style="{ padding: '0px' ,textAlign: 'center'}">
              <img src="../assets/img/cs-contactUs-3.jpg" class="image">
              <div class="address-desc">
                <p class="address">武汉大学苹果体验店</p>
                <div class="address-con">
                  <p>湖北武汉市武昌区珞珈山街道东湖南路8号武汉大学工程创新与实践中心1104室</p>
                </div>
                <div class="tel">
                    <p class="name">丁小轩</p>
                    <p class="telnum">185 0271 1021</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'ContactUs',
  data() {
    return {
    }
  },
  mounted(){
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
.ContactUs{
    border-bottom: 1px solid #D6D6D6;
    .cs-contactUs-part1{
        height: 750px;
        position: relative;
        img{
          max-height: 100%;
        }
        .con{
            position: absolute;
            left: 50%;
            bottom: -245px;
            width: 1200px;
            height: 320px;
            margin: 0 0 0 -600px;
            background: #FFFFFF;
            border-radius: 22px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            .item1{
                width: 759px;
                position: relative;
                &::after{
                    position: absolute;
                    right: 0;
                    top: 80px;
                    content: '';
                    width: 2px;
                    height: 160px;
                    background: #CECECE;
                }
            }
            .item2{
                width: 448px;
                p{
                    margin-bottom: 10px;
                }
            }
            .item1,.item2{
                display: table-cell;
                vertical-align: middle;
                height: 320px;
                text-align: center;
                p{
                    width: 100%;
                    text-align: center;
                }
                p.more{
                    font-size: 24px;
                    font-weight: 600;
                    color: #000000;
                }
                p.url{
                    font-size: 34px;
                    font-weight: 600;
                    color: #000000;
                    margin-top: 30px;
                }
            }
        }
    }

    .cs-contactUs-part2{
        width: 100%;
        background: #F5F5F7;
        padding: 330px 0 100px 0;
        .el-card{
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            border-radius: 22px;
        }
        .address-desc{
            padding: 30px 0 50px 0;
            .address{
                font-size: 24px;
                font-weight: 600;
                color: #000000;
                text-align: left;
                padding-left: 105px;
                background: url(../assets/img/icon-address.png) no-repeat 65px 0;
            }
            .address-con{
                padding: 15px 60px 15px 105px;
                text-align: left;
                p{
                    font-size: 17px;
                    font-weight: 400;
                    color: #333333;
                    line-height: 28px;
                }
            }
            .tel{
                font-size: 17px;
                font-weight: 600;
                color: #000000;
                p{
                    float: left;
                    &.name{
                        padding-right: 60px;
                        text-align: right;
                        width: 239px;
                        border-right: 1px solid #CECECE;
                        background: url(../assets/img/icon-user.png) no-repeat 108px 0;
                    }
                    &.telnum{
                        padding-left: 95px;
                        background: url(../assets/img/icon-tel.png) no-repeat 58px 0;
                    }
                }
            }
        }
    }
}
</style>
