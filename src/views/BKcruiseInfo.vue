<template>
  <div class="bkcruiseinfo">
    <div class="bkcruiseinfo-banner">
      <HeaderMenu activeIndex="5"></HeaderMenu>
      <img src="../assets/img/bannerBK.jpg" alt=""/>
      
      <div class="com-page-info">
        <!-- 标题，，， -->
        <div class="info01">
          {{detail.articletitle}}
        </div>
        
        <!-- 时间 -->
        <div class="info02">
          <p><img src="../assets/img/time.png" alt/> 更新于 {{detail.createdate}}</p>
          <p><img src="../assets/img/youyong.png" alt/> 有用 {{detail.consumption}}</p>
        </div>
      </div>
    </div>

    <div class="container infoCon">

      <div class="infoCon-item" v-html="detail.articlecontent">
      </div>


      <!-- <div class="next">
        下一篇：<router-link to="comingSoon" target="_blank">船上有儿童托管中心吗？是否免费？</router-link>
      </div> -->
      <!-- <div class="youyong">
        <button>
          <span>有用{{detail.consumption}}</span>
        </button>
        <p>如果本文对你有帮助,请点击"有用"</p>
      </div> -->
      <div style="clear:both">&nbsp;</div>
    </div>
  </div>
</template>
<script>
import HeaderMenu from '../components/HeaderMenu.vue'
let Base64 = require('js-base64').Base64
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
    getDetail(){
      this.detail = []
      var paramsData = {
      }
      if (this.$route.params.id) paramsData.articleid = this.$route.params.id;
      this.$http.get('/API/article.ashx?command=GetArticleDetail', {params: paramsData}).then(function (res) {
        this.detail = res.body
        if(this.detail.articlecontent) this.detail.articlecontent= Base64.decode(this.detail.articlecontent)
      })
    }
  }
}
</script>
<style lang="scss">
.bkcruiseinfo-banner{
  position: relative;
  padding-bottom: 30px;
  img{
    max-width: 100%;
  }
  .com-page-info{
    min-height: 120px;
    padding: 20px 100px;
    width: 1200px;
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    position: absolute;
    left: 50%;
    bottom: -25px;
    margin-left: -600px;
    .info01{
      font-size: 30px;
      color: #333333;
    }
    .info02{
      font-size: 16px;
      color: #999999;
      margin-top: 12px;
      p{
        display: inline-block;
        line-height: 20px;
        margin-right: 30px;
        img{
          float: left;
          margin-right: 8px;
        }
      }
    }
  }
}

.bkcruiseinfo{
  .infoCon{
    background: #ffffff;
    margin-top: 100px;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    .infoCon-item{
      padding: 30px 0 0 0;
      width: 1000px;
      margin: 0 auto;
      font-size: 18px;
      color: #999999;
      p{
        margin-bottom: 40px;
        &:last-child{
          margin-bottom: 30px!important;
        }
        img{
          max-width: 100%;
        }
      }
      border-bottom: 1px solid #000000;
      img{
        max-width: 100%;
      }
    }
    .infoCon-02{
      padding: 30px 100px;
      font-size: 18px;
      color: #999999;
      font-weight: normal;
      text-align: center;
      img{
        max-width: 100%;
      }
      p{
        text-align: left;
        margin-bottom: 30px;
        line-height: 28px;
        &.tit{
          font-weight: bold;
          color: #333333;
        }
        &.mb0{
          margin-bottom: 0;
        }
        &.center{
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
    .next{
      padding: 0 100px;
      font-size: 18px;
      color: #999999;
      a{
        color: #ee6b03;
      }
    }
    .youyong{
      padding: 0 100px;
      margin-top: 100px;
      text-align: center;
      button{
        height: 40px;
        width: 130px;
        text-align: center;
        border:1px solid #ededed;
        border-radius: 5px;
        font-size: 16px;
        color: #333333;
        cursor: pointer;
        span{
          display: inline-block;
          position: relative;
          padding-left: 25px;
          &::before{
            content: '';
            width: 25px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 1px;
            background: url(../assets/img/youyong.png) no-repeat;
          }
        }
        &:hover{
          span{
            &::before{
              background: none;
            }
          }
        }
      }
      p{
        margin: 10px 0 60px 0;
        color: #999999;
        font-size: 12px;
      }
    }
  }
}
</style>
