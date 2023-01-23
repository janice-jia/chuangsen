<template>
  <div class="VocationalEdu">
    <div class="container">
        <div class="tit">政府采购</div>
        <div class="tit2">以下为合作院校</div>
        <div class="titimg">
            <img src="../assets/img/0123/zfcg_01.png" alt="">
        </div>
        <div class="con">
            <el-row :gutter="20">
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_02.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_03.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_04.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_05.png" alt="">
                </el-col>
            </el-row>
            <el-row :gutter="20" >
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_06.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_07.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_08.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_09.png" alt="">
                </el-col>
            </el-row>
        </div>

        <div class="titimg2">
            <img src="../assets/img/0123/zfcg_10.png" alt="">
        </div>
        <div class="con">
            <el-row :gutter="20">
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_11.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_12.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_13.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_14.png" alt="">
                </el-col>
            </el-row>
            <el-row :gutter="20" >
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_15.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_16.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_17.png" alt="">
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <img src="../assets/img/0123/zfcg_18.png" alt="">
                </el-col>
            </el-row>
        </div>

        <div class="phone">
            <p>王女士  139 1159 0503</p>
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
.VocationalEdu{
    .tit{
        font-size: 58px;
        font-weight: 600;
        color: #000000;
        text-align: center;
        margin-top: 110px;
        margin-bottom: 55px;
    }
    .tit2{
        font-size: 40px;
        font-weight: normal;
        color: #000000;
        text-align: center;
    }
    .titimg{
        text-align: center;
        margin-top: 75px;
        padding-bottom: 45px;
        border-bottom: 1px solid #c9c9c9;
    }
    .titimg2{
        text-align: center;
        margin-top: 45px;
        padding-bottom: 45px;
        border-bottom: 1px solid #c9c9c9;
    }
    .con{
        margin-top: 45px;
        .el-col{
            img{
                max-width: 100%;
                margin-bottom: 20px;
            }
        }
    }
    .phone{
        text-align: center;
        border-bottom: 1px solid #c9c9c9;
        padding-top: 30px;
        padding-bottom: 50px;
        p{
            display: inline-block;
            position: relative;
            padding-left: 60px;
            font-size: 26px;
            &::before{
                width: 40px;
                height: 40px;
                content: " ";
                position: absolute;
                left: 0;
                top: 0;
                background: url(../assets/img/0123/zfcg_phone.png) no-repeat;
            }
        }
    } 
}
</style>
