<template>
  <div class="traveloginfo">
    <div class="traveloginfo-banner">
      <HeaderMenu activeIndex="6"></HeaderMenu>
      <img src="../assets/img/bannerYJ.jpg" alt />

      <div class="com-page-info">
        <!-- 标题，，， -->
        <div class="left">
          <div class="info01">{{detail.articletitle}}</div>

          <!-- 时间 -->
          <div class="info02">{{detail.createdate}}</div>
          <div class="tag">
            <div class="toutiao">头条</div>
            <div class="jinghua">精华</div>
          </div>
        </div>
        <div class="right">
          <!-- 标题，，， -->
          <div class="like">
            <el-row :gutter="10">  
              <el-col :span="5">
                <img src="../assets/img/yjicon01.png" alt />
                <span>收藏</span>
              </el-col>
              <el-col :span="6">
                <img src="../assets/img/yjicon02.png" alt />
                <span>喜欢{{detail.consumption}}</span>
              </el-col>
              <el-col :span="6">
                <img src="../assets/img/yjicon03.png" alt />
                <span>评论2</span>
              </el-col>
              <el-col :span="7">
                <img src="../assets/img/yjicon04.png" alt />
                <span>浏览4083</span>
              </el-col>
            </el-row>
          </div>
          <div class="time">
            <el-row :gutter="20">
              <el-col :span="13">
              <img src="../assets/img/yjicon05.png" alt />
              <span>天数：{{detail.daycount}}天</span></el-col>
              <el-col :span="11">
              <img src="../assets/img/yjicon06.png" alt />
              <span>时间：{{detail.travledate}}</span></el-col>
            </el-row>
          </div>
          <div class="with">
            <el-row :gutter="20">
              <el-col :span="13">
                <img src="../assets/img/yjicon07.png" alt />
                <span>人均：250000元</span>
              </el-col>
              <!-- <el-col :span="11">
                <img src="../assets/img/yjicon08.png" alt />
                <span>和谁：和朋友</span>
              </el-col> -->
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <div class="container infoCon">
      <div class="infoCon-01">
        <p>{{detail.articletitle}}</p>
      </div>

      <div class="infoCon-02" v-html="detail.articlecontent">
      </div>
      <div class="theEnd">~THE END～</div>
    </div>
  </div>
</template>
<script>
import HeaderMenu from "../components/HeaderMenu.vue";
let Base64 = require('js-base64').Base64
export default {
  name: "ravelog",
  components: {
    HeaderMenu
  },
  data() {
    return {
      detail: {},
      searchVal: "",
      activeIndex: 1
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail(pageval) {
      this.detail = {};
      var paramsData = {};
      if (this.$route.params.id) paramsData.articleid = this.$route.params.id;
      this.$http
        .get("/API/article.ashx?command=GetArticleDetail", {
          params: paramsData
        })
        .then(function(res) {
          this.detail = res.body;
          if(this.detail.articlecontent) this.detail.articlecontent= Base64.decode(this.detail.articlecontent)
        });
    }
  }
};
</script>
<style lang="scss">
.traveloginfo-banner {
  position: relative;
  padding-bottom: 30px;
  img {
    max-width: 100%;
  }
  .com-page-info {
    padding: 25px 100px;
    width: 1200px;
    background: #ffffff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    position: absolute;
    left: 50%;
    bottom: -60px;
    margin-left: -600px;
    .info01 {
      font-size: 32px;
      color: #333333;
    }
    .info02 {
      font-size: 26px;
      color: #999999;
      margin-top: 20px;
    }
    .tag div {
      display: inline-block;
      width: 50px;
      height: 20px;
      border-radius: 10px;
      margin-right: 10px;
      text-align: center;
      color: #ffffff;
      margin-top: 20px;
      &.toutiao {
        background: #f7ae0a;
      }
      &.jinghua {
        background: #ee6b03;
      }
    }
    .right {
      position: absolute;
      right: 120px;
      top: 30px;
      width: 35%;
      .like {
        font-size: 14px;
        margin-bottom: 30px;
        img{
          margin-right: 10px;
        }
      }
      .time,.with {
        font-size: 14px;
        margin-bottom: 20px;
        img,
        span {
          margin-right: 20px;
          float: left;
          line-height: 24px;
        }
      }
    }
  }
}

.traveloginfo {
  .infoCon {
    background: #ffffff;
    margin-top: 100px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    .infoCon-01 {
      padding: 60px 0 30px 0;
      width: 1000px;
      margin: 0 auto;
      font-size: 28px;
      color: #333;
      border-bottom: 1px solid #000000;
    }
    .infoCon-02 {
      padding: 30px 100px 0 100px;
      font-size: 18px;
      color: #333;
      font-weight: normal;
      text-align: center;
      img {
        max-width: 100%;
        margin-bottom: 20px;
      }
      p {
        text-align: left;
        margin-bottom: 30px;
        line-height: 28px;
      }
    }
    .theEnd{
      text-align: center;
      width: 1000px;
      margin: 60px 100px;
      font-size: 28px;
      color: #999999;
      height: 110px;
      line-height: 110px;
      border-top: 1px solid rgba(153, 153, 153, 0.5)
    }
  }
}
</style>
