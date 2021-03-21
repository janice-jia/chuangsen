<template>
  <div class="cf-footer">
    <div class="container">
       <el-row type="flex" justify="space-between" class="foot-con1">
        <el-col :span="10">
          <div class="middle-img">
            <img class="logo" src="../assets/foot_logo.png" alt="">
          </div>
        </el-col>
        <el-col :span="8">
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
      <p class="Copyright">
        <span>Copyright © 2021 xxxxxxxx. 保留所有权利。</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
