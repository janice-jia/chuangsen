<template>
  <div class="cf-footer">
    <div class="container">
      <div class="foot-con1">
       <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="middle-img">
            <!-- <img class="logo" src="../assets/foot_logo_small.png" alt=""> -->
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <el-row type="flex" justify="end">
            <div class="foot-logo">
              <div class="foot-logo-item">
                <img class="logo" src="../assets/foot_WeChat_App.jpg" alt="">
                <p>微信扫一扫<br/>享受教育价</p>
              </div>
              <div class="foot-logo-item">
                <img class="logo" src="../assets/foot_WeChat.jpg" alt="">
                <p>微信扫一扫<br/>关注公众号</p>
              </div>
            </div>
          </el-row>
        </el-col>
       </el-row>
       </div>
      <p class="Copyright">
        <a href="https://beian.miit.gov.cn/"><span>苏ICP备2021010860号-1 保留所有权利。</span></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
