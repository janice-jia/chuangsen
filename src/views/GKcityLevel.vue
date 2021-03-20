<template>
  <div class="companyLevel">
    <div class="company-banner">
      <HeaderMenu activeIndex="4"></HeaderMenu>
      <img src="../assets/img/bannerGK.jpg" alt />
      <div class="com-search container">
        <el-input placeholder="如：港口城市" v-model="searchVal"></el-input>
        <img class="com-search-btn" @click="getList('1')" src="../assets/img/header/search.png" alt />
      </div>
    </div>
    <div class="container">
      <div class="companyLevel-list">
        <div class="companyLevel-item" v-for="item in list" :key="item.id">
          <div class="companyLevel-item-img">
            <img :src="item.coverimg" />
          </div>
          <div class="companyLevel-item-tit">
            <p class="info-title">
              {{item.portname}}
              <router-link :to="{ name: 'gkcityinfo', params: { id: item.id }}" target="_blank">查看详情 ></router-link>
            </p>
            <!-- <p class="light">
              <span>当地语言：{{item.tonnage}}</span>
              <span>文化：{{item.guests}}</span>
              <span>信仰：{{item.overhaul}}</span>
            </p> -->
            <div class="eval">
              <!-- <p>3764条评价</p> -->
              <!-- <p>
                <span>4.6</span>/5分
              </p> -->
            </div>
          </div>
          <div class="companyLevel-item-con">
            {{item.description}}
          </div>
        </div>

        <!-- <div class="airline-item">
          <div class="airline-item-img">
            <img :src="airlineImg" />
          </div>
          <div class="airline-item-info">
            <p class="info-title">歌诗达邮轮【幸运号】 16天14晚 跟团游·亚洲风情全览(新加坡-兰卡威-新加坡-兰卡威新加坡-兰卡威新加坡-兰卡威新加坡-兰卡威)</p>
            <p class="address">北京出发 | 新加坡抵港</p>
            <p class="light">啧啧啧啧啧啧222
              <span>推荐班期：</span> 2019 12-10 周二
            </p>
            <p class="light">
              <span>班期特色：</span>亚洲风情全览
            </p>
            <p class="light">
              <span>当前卖家：</span>北京七海假期国际旅行社有限公司
            </p>
            <div class="eval">
              <p>3764条评价</p>
              <p>
                <span>4.6</span>/5分
              </p>
            </div>
          </div>
        </div> -->
      </div>
      <div class="page" v-if="list && list.length > 0">
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
import HeaderMenu from "../components/HeaderMenu.vue";
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
      if (this.$route.params.areaid) {
        paramsData.areaid = parseInt(this.$route.params.areaid)
      }
      if (this.searchVal) paramsData.portname = this.searchVal;
      console.info('paramsData', paramsData)
      this.$http
        .get("/API/port.ashx?command=GetPortPager", {
          params: paramsData
        })
        .then(function(res) {
          this.list = res.body.list;
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
.companyLevel{
  // 航线filter
  .companyLevel-filter {
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
  .companyLevel-list {
    & .companyLevel-item {
      background: #ffffff;
      margin-top: 30px;
      height: 360px;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
      & .companyLevel-item-img {
        width: 400px;
        height: 360px;
        float: left;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        // background: #ededed;
        img{
          max-width: 100%;
        }
      }
      & .companyLevel-item-tit {
        width: 780px;
        font-size: 14px;
        float: left;
        position: relative;
        padding: 30px 100px 0 30px;
        height: 140px;
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
        & .address {
          margin-top: 15px;
          margin-bottom: 30px;
          color: #333333;
        }
        & .light {
          height: 48px;
          overflow: hidden;
          color: #333333;
          line-height: 24px;
          & span {
            font-size: 14px;
            color: #999999;
            margin-right: 20px;
          }
        }
        & .eval {
          position: absolute;
          top: 30px;
          right: 0;
          color: #999999;
          & p {
            display: inline-block;
            margin-right: 20px;
            & span {
              font-size: 22px;
              color: #ee6b03;
            }
          }
        }
      }
      .companyLevel-item-con{
        height: 219px;
        padding: 20px 30px;
        overflow: hidden;
        font-size: 14px;
        color: #999999;
        line-height: 25px;
      }
    }
  }
}
</style>
