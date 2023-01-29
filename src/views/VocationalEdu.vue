<template>
  <div class="VocationalEdu">
    <div class="container">
        <div class="tit">职业教育</div>
        <div class="tit2">
            <p>为了更好地促进我国职业教育健康有序发展，</p>
            <p>国家专门制定出台了《国家职业教育改革实施方案》（简称职教20条）。</p>
            <p>产教融合、校企合作是职业教育的基本办学模式，是办好职业教育的关键所在。</p>
            <p>我公司结合苹果公司的教育优势，</p>
            <p>为职业院校提供了 AATP（Apple Authorized Training Provider）</p>
            <p>创新优才培养方案和创新实训中心解决方案。</p>
        </div>

        <!-- 启发培养更多具有创新精神的未来人才！ -->
        <div class="tit3">
            启发培养更多具有创新精神的未来人才！
        </div>
        <div class="con1">
            <div class="con1-img">
                <img class="imgl" src="../assets/img/0123/zyjy_01.png" alt="">
                <img class="imgr" src="../assets/img/0123/zyjy_02.png" alt="">
            </div>
            <div class="con1-img">
                <img class="imgl"  src="../assets/img/0123/zyjy_03.png" alt="">
                <img class="imgr" src="../assets/img/0123/zyjy_04.png" alt="">
            </div>
            <div class="con1-img">
                <img class="imgl"  src="../assets/img/0123/zyjy_05.png" alt="">
                <img class="imgr" src="../assets/img/0123/zyjy_06.png" alt="">
            </div>
        </div>

        <!-- 创新实训中心项目 -->
        <div class="tit4">
            创新实训中心项目
        </div>
        <div class="con2">
            <div class="con2-img">
                <el-row :gutter="12">
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <img class="img1" src="../assets/img/0123/zyjy_07.png" alt="">
                        <p>能力培养</p>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <img class="img2" src="../assets/img/0123/zyjy_08.png" alt="">
                        <p>能力提升</p>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <img class="img3" src="../assets/img/0123/zyjy_09.png" alt="">
                        <p>能力验证</p>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>

    <!-- 学校获得 -->
    <div class="con3">
        <div class="container">
            <div class="titp">学校获得</div>
            <div class="con3-img">
                <img src="../assets/img/0123/zyjy_10.png" alt="">
            </div>
        </div>
    </div>

    <!-- 项目内容 -->
    <div class="con4">
        <div class="container">
            <div class="titp">项目内容</div>
            <div class="chuangxin">
                <img class="img3" src="../assets/img/0123/zyjy_11.png" alt="">
            </div>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="whiteBox">
                        <img class="img3" src="../assets/img/0123/zyjy_13.png" alt="">
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="whiteBox" style="margin:0">
                        <img class="img3" src="../assets/img/0123/zyjy_14.png" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
    <div class="phone">
        <div class="container">
            <img class="img3" src="../assets/img/0123/zfcg_phone1.png" alt="">
        </div>
    </div>
    <div class="line"></div>
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
.VocationalEdu{
    font-family: '苹方-简';
    .tit{
        font-size: 58px;
        font-weight: 600;
        color: #000000;
        text-align: center;
        margin-top: 110px;
        margin-bottom: 55px;
        font-weight: 400;
    }
    .tit2{
        font-size: 24px;
        font-weight: 300;
        color: #000000;
        text-align: center;
        line-height: 45px;
    }
    .tit3{
        font-size: 40px;
        margin-top: 95px;
        margin-bottom: 65px;
        text-align: center;
        font-weight: 400;
    }
    .tit4{
        font-size: 40px;
        margin-top: 65px;
        margin-bottom: 65px;
        text-align: center;
        font-weight: 400;
    }
    .con1{
        text-align: center;
        margin: 0 auto 0 auto;
        img{
            max-width: 100%;
        }
        .con1-img{
            padding-bottom: 15px;
            .imgl{
                margin-right: 20px;
            }
        }
    }
    .con2{
        text-align: center;
        margin: 0 auto 0 auto;
        img{
            max-width: 100%;
        }
        .con2-img{
            p{
                color: #000000;
                font-size: 26px;
                margin:25px 0 80px 0;
            }
        }
    }
    .con3{
        padding: 85px 0;
        background: #fff;
        .titp{
            font-size: 40px;
            margin-bottom: 40px;
            text-align: center;
            font-weight: 400;
        }
        .con3-img{
            text-align: center;
            img{
                max-width: 100%;
            }
        }
    }
    .con4{
        .titp{
            font-size: 40px;
            margin-top: 75px;
            margin-bottom: 50px;
            text-align: center;
            font-weight: 400;
        }
        .chuangxin{
            border-radius: 20px;
            padding: 90px 0 90px 50px;
            background: url(../assets/img/0123/zyjy_12.png) no-repeat center right #fff;
            background-size: 40%;
            margin-bottom: 20px;
            img{
                max-width: 55%;
            }
        }
        .whiteBox{
            text-align: center;
            background: #fff;
            border-radius: 20px;
            padding: 40px;
            width: 100%;
            margin-bottom: 20px;
            img{
                max-width: 100%;
            }
        }
    }
    .phone{
        text-align: center;
        padding: 35px 0 55px 0;
    }
    .line{
        height: 1px;
        border-top: 1px solid #d6d6d6;
    }
}

// 适配
@media screen and (max-width: 768px) {
  .phone {
    img{
        width: 60%;
    }
  }
}
</style>
