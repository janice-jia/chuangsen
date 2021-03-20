<template>
  <div class="bkcruiseLevel">
    <div class="company-banner">
      <HeaderMenu activeIndex="5"></HeaderMenu>
      <img src="../assets/img/bannerBK.jpg" alt />
      <div class="com-search container">
        <el-input placeholder="如：亲子游" v-model="searchVal"></el-input>
        <img class="com-search-btn" @click="getList('1')" src="../assets/img/header/search.png" alt />
      </div>
    </div>
    <div class="container">
      <!-- 搜索内容为空 -->
      <div class="kong" v-if="list.length===0">
        <img src="../assets/img/kong.svg" alt="">
        <p v-if="searchVal">
          您搜索的"{{searchVal}}"暂无内容
        </p>
        <p v-if="!searchVal">
          暂无内容
        </p>
      </div>
      
      <div class="bkcruiseLevel-list">
        <div class="bkcruiseLevel-item" v-for="item in list" :key="item.id">
          <div class="bkcruiseLevel-item-img">
            <img :src="item.coverimg" />
          </div>
          <div class="bkcruiseLevel-item-tit">
            <p class="info-title">
              {{item.articletitle}}
            </p>
            <div class="eval">
              <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}" target="_blank">查看详情 ></router-link>
            </div>
          </div>
          <div class="bkcruiseLevel-item-con" v-html="item.articlecontent">
          </div>
          <div class="publishtime">
            <p><img src="../assets/img/time.png" alt/> 更新于 {{item.createdate}}</p>
            <!-- <p><img src="../assets/img/youyong.png" alt/> 有用 {{item.daycount}}</p> -->
          </div>
        </div>
      </div>
      <div class="page" v-if="list.length > 0">
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageInfo.page"
            :page-size="pageInfo.limit"
            layout="prev, pager, next, jumper"
            :total="pageInfo.total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderMenu from "../components/HeaderMenu.vue"
let Base64 = require('js-base64').Base64
export default {
  name: "Airline",
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: "",
      activeIndex: 1,
      pageInfo: {
        page: 1,
        limit: 10,
        total: 0
      }
    };
  },
  mounted() {
    if(this.$route.params.shipcompany){
      this.searchVal = this.$route.params.shipcompany
    }
    this.getList();
  },
  methods: {
    getList(pageval) {
      this.list = [];
      if (pageval) this.pageInfo.page = pageval;
      var paramsData = {
        page: this.pageInfo.page,
        limit: this.pageInfo.limit
      };
      // 搜索
      if (this.$route.params.id) {
        paramsData.categoryid = parseInt(this.$route.params.id)
      }
      if (this.searchVal) paramsData.articletitle = this.searchVal;
      console.info('paramsData', paramsData)
      this.$http
        .get("/API/article.ashx?command=GetArticleBySearch", {
          params: paramsData
        })
        .then(function(res) {
          this.list = res.body.list;
          for(var i=0; i< this.list.length; i++){
            if(this.list[i].articlecontent)
              this.list[i].articlecontent = Base64.decode(this.list[i].articlecontent)
          }
          this.pageInfo.total = parseInt(res.body.count);
        });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${limit} 条`);
      this.getList(val);
    },
    handleCurrentChange(val) {
      this.getList(val);
    },
    currentPage() {
      console.info(11);
    }
  }
};
</script>
<style lang="scss">
.bkcruiseLevel{
  // 航线filter
  .bkcruiseLevel-filter {
    width: 1180px;
    margin-top: 60px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
    & .airline-filter-count {
      padding-left: 30px;
      padding-right: 30px;
      height: 50px;
      line-height: 50px;
      background: rgba(238, 107, 3, 0.06);
      & p,
      .el-tag {
        display: inline-block;
        margin-right: 10px;
      }
      & p span {
        color: #ee6b03;
        font-size: 22px;
      }
    }
    & .content {
      margin-left: 30px;
      margin-right: 30px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #e5e5e5;
      & .filter-title {
        display: inline-block;
        font-size: 14px;
        color: #333333;
        font-weight: 700;
      }
      & .filter-detail {
        display: inline-block;
        margin-left: 40px;
        font-size: 14px;
        color: #333333;
        & p {
          display: inline-block;
          margin-right: 40px;
        }
        & .hot {
          color: #999999;
        }
      }
    }
  }
  .bkcruiseLevel-list {
    & .bkcruiseLevel-item {
      background: #ffffff;
      margin-top: 30px;
      height: 360px;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
      & .bkcruiseLevel-item-img {
        width: 400px;
        height: 360px;
        float: left;
        overflow: hidden;
        background: #ededed;
        img{
          max-width: 100%;
        }
      }
      & .bkcruiseLevel-item-tit {
        width: 780px;
        font-size: 14px;
        float: left;
        position: relative;
        padding: 30px 130px 0 30px;
        height: 85px;
        overflow: hidden;
        &::after{
          content: '';
          position: absolute;
          left: 0px;
          bottom: 0;
          width: 720px;
          margin: 0 30px;
          overflow: hidden;
          border-bottom: 1px solid #e5e5e5;
        }
        
        & .info-title {
          font-size: 24px;
          color: #333333;
          margin-bottom: 20px;
          a{
            font-size: 18px;
            color:#ee6b03;
            font-weight: normal;
            margin-left: 20px;
          }
        }
        
        & .eval {
          position: absolute;
          top: 40px;
          right: 0;
          color: #999999;
          display: inline-block;
          margin-right: 20px;
          & a {
            font-size: 18px;
            color: #ee6b03;
          }
        }
      }
      .bkcruiseLevel-item-con{
        height: 215px;
        padding: 20px 30px;
        overflow: hidden;
        font-size: 14px;
        color: #999999;
        line-height: 25px;
      }
      .publishtime{
        font-size: 16px;
        color: #999999;
        float: left;
        padding: 20px 30px 0 30px;
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
}
</style>
