<template>
  <div class="AboutUs">
      <!-- 企业愿景 -->
    <div class="cs-aboutUs-part1">
        <div class="container">
            <div class="con">
                <p class="tit">企业愿景</p>
                <p class="desc">致力于教育，整合优质资源，打造互联生态，实现共赢。</p>
                <p class="desc">创森智云致力于K12教育集团、教育机构、网络教育集团、职业学校和大学。</p>
                <p class="desc">我们的目标是成为教育行业领先的服务提供商之一。</p>
            </div>
        </div>
    </div>
    <!-- 关于我们 -->
    <div class="cs-aboutUs-part2">
        <div class="container">
            <p class="tit">关于我们</p>
            <div class="cs-aboutUs-part2-con">
                <img src="../assets/img/cs-aboutus-1.jpg" alt="">
                <div class="con">
                    <p>江苏创森智云信息技术有限公司（以下简称“创森”）是苹果教育T1经销商。公司总部设在北京，在上海、深圳、苏州、杭州、武汉、成都等地设有分公司，是苹果企业T1经销商倍升互联（北京）科技有限公司的全资子公司。苹果业务的员工总数超过400人。创森和倍升由华软科技股份有限公司（深圳证券交易所证券代码：002453）控股。</p>
                    <p>华软科技成立于1999年，2010年在深圳证券交易所上市。2019年华软科技总收入4.07亿美元。华软始终用创新不断为客户创造价值。作为国家级高新技术企业，还拥有多个行业的认证。该公司还在教育领域进行了大量投资。截至目前，苹果教育业务收入份额占华润集团15%。江苏创森智云信息技术有限公司为各类教育客户提供移动解决方案，与200多所高校、100多所职业学校、50多个教育集团合作。</p>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'AboutUs',
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
.AboutUs{
   border-bottom: 1px solid #D6D6D6;
    // 企业愿景
    .tit{
        font-size: 40px;
        font-weight: 600;
        color: #000000;
        text-align: center;
    }
    .cs-aboutUs-part1{
        height: 340px;
        background: #fff;
        .con{
            text-align: center;
            .tit{
                font-size: 40px;
                font-weight: 600;
                color: #000000;
                padding: 80px 0 18px 0;
            }
            .desc{
                font-size: 20px;
                font-weight: 400;
                color: #333333;
                line-height: 38px;
            }
        }
        
    }
    // 关于我们
    .cs-aboutUs-part2{
        height: 820px;
        background: #F5F5F7;
        .tit{
            margin: 80px 0 57px 0;
        }
        .cs-aboutUs-part2-con{
            background: #fff;
            border-radius: 22px;
            overflow: hidden;
            height: 560px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            img{
                float: left;
            }
            .con{
                width: 640px;
                float: left;
                padding: 30px 35px 52px 52px;
                p{
                    font-size: 20px;
                    font-weight: 400;
                    color: #333333;
                    line-height: 38px;
                    &:first-child{
                        margin-bottom: 10px;
                    }
                }
            }
        }
        
    }
}
</style>
