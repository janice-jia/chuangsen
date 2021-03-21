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
              <div class="img-tit">
                <span class="tit">基础教育</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进一步了解</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card :body-style="{ padding: '0px' ,textAlign: 'center'}">
              <img src="../assets/img/cs-contactUs-3.jpg" class="image">
              <div class="img-tit">
                <span class="tit">高等教育</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">进一步了解</el-button>
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
    .cs-contactUs-part1{
        height: 750px;
        position: relative;
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
        margin-top: 330px;
    }
}
</style>
