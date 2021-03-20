<template>
  <div class="HeadModuleTit container">
    <h1>{{ tit }}</h1>
    <h2>{{ enTit }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HeadModuleTit',
  props: {
    tit: String,
    enTit: String
  }
}
</script>
<style lang="scss">
.HeadModuleTit{
  // margin-top: 50px;
  text-align: center;
  max-width: 100%;
  margin: 80px auto 60px auto!important;
  h1{
    font-size: 32px;
    color: #333333;
    display: inline-block;
    position: relative;
    &::before{
      position: absolute;
      content: '';
      top:50%;
      left: -90px;
      width: 60px;
      border-bottom:1px solid #333333;
    }
    &::after{
      position: absolute;
      content: '';
      top:50%;
      right: -90px;
      width: 60px;
      border-bottom:1px solid #333333;
    }
  }
  h2{
    font-size: 18px;
    color: #666666;
    font-weight: normal
  }
}
</style>
