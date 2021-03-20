<template>
  <div class="airline">
    <div class="company-banner">
      <HeaderMenu activeIndex="3"></HeaderMenu>
      <img src="../assets/img/bannerHX.jpg" alt />
      <div class="com-search container">
        <el-input placeholder="如：邮轮名称，港口城市" v-model="searchVal"></el-input>
        <img class="com-search-btn" @click="getList('1')" src="../assets/img/header/search.png" alt />
      </div>
    </div>
    <div class="container">
      <div class="airline-filter">
        <div class="airline-filter-count" v-if="tags.length>0">
          <!-- <p>
            共
            <span>{{ airlineCount }}</span>个产品
          </p> -->
          <el-tag
            v-for="tag in tags"
            :key="tag"
            closable
            @close="handleClose(tag)"
            type="info"
            color="#ffffff"
            disable-transitions="true"
          >{{tag}}</el-tag>
          <span @click="clearAll()">清除全部</span>
        </div>
        <div class="airline-filter-city content">
          <p class="filter-title">出发城市：</p>
          <div class="filter-detail">
            <!-- <p class="hot">热门港口</p> -->
            <!-- <p v-for="(item, index) in hotCity" :key="index">{{ item }}</p> -->
            <p v-for="(item, index) in departureCity" :key="index">
              <span @click="showCFcityFn(index)" v-bind:class="{ hoverBorder: (index == showCfCityIndex)}">
                {{ item.areaname }}
              </span>
            </p>
          </div>
        </div>
        <!-- 出发------城市二级展开收缩效果 -->
        <el-collapse-transition>
          <div class="showCFcity" v-if="showCFcity && (showCfCityIndex || showCfCityIndex==0)">
            <span 
              v-for="(item, index) in departureCity[showCfCityIndex].child" 
              :key="index"
              v-bind:class="{ hoverBg: (item.departureport == searchParams.departureport)}"
              @click="changeSearch('departureport', item.departureport)"
            >
              {{ item.departureport }}
            </span>
          </div>
        </el-collapse-transition>
        <div class="airline-filter-city content">
          <p class="filter-title">目的地：</p>
          <div class="filter-detail">
            <!-- <p class="hot">热门港口</p> -->
            <!-- <p v-for="(item, index) in hotCity" :key="index">{{ item }}</p> -->
            <p v-for="(item, index) in arrivalCity" :key="index">
              <span @click="showMDcityFn(index)" v-bind:class="{ hoverBorder: (index == showMDCityIndex)}">
                {{ item.areaname }}
              </span>
            </p>
          </div>
        </div>
        <!-- 目的地-------城市二级展开收缩效果 -->
        <el-collapse-transition>
          <div class="showCFcity" v-if="showMDcity && (showMDCityIndex || showMDCityIndex==0)">
            <span 
              v-for="(item, index) in arrivalCity[showMDCityIndex].child" 
              :key="index"
              v-bind:class="{ hoverBg: (item.arrivalport == searchParams.arrivalport)}"
              @click="changeSearch('arrivalport', item.arrivalport)"
            >
              {{ item.arrivalport }}
            </span>
          </div>
        </el-collapse-transition>
        <!-- <div class="airline-filter-city content"></div> -->
        <div class="airline-filter-line content">
          <p class="filter-title">邮轮时长：</p>
          <div class="filter-detail">
            <p class="hoverBg" v-for="(item, index) in timeList" :key="index">
              <span 
                v-bind:class="{ hoverBg: (searchParams.duration== item.name)}"
                @click="changeSearch('duration', item.name)"
              >
                {{ item.name }}
              </span>
            </p>
          </div>
        </div>
        <div class="airline-filter-logo content">
          <p class="filter-title">出发航线：</p>
          <div class="filter-detail">
            <p v-for="(item, index) in cityList" :key="index">
              <span 
                v-bind:class="{ hoverBg: (searchParams.area== item.areaname)}"
                @click="changeSearch('area', item.areaname)"
                >{{ item.areaname }}</span>
            </p>
          </div>
        </div>
        <div style="clear: both"></div>
        <!-- 行程天数 -->
        <!-- <div class="airline-filter-days content">
          <p class="filter-title">行程天数：</p>
          <div class="filter-detail">
            <p v-for="item in days" :key="item">{{ item }}</p>
          </div>
        </div> -->

        <!-- 途经国家 -->
        <!-- <div class="airline-filter-country content">
          <p class="filter-title">途经国家：</p>
          <div class="filter-detail">
            <p v-for="item in country" :key="item">{{ item }}</p>
          </div>
        </div> -->
      </div>
      <!-- 搜索内容为空 -->
      <div class="kong" v-if="list.length===0">
        <img src="../assets/img/kong.svg" alt="">
        <p>
          暂无内容
        </p>
      </div>

      <div class="airline-list">
        <div class="airline-item" v-for="item in list" :key="item.id">
          <router-link :to="{ name: 'airlineinfo', params: { id: item.id }}">
          <div class="airline-item-img">
            <img :src="item.coverimg" />
          </div>
          <div class="airline-item-info">
            <p class="info-title">{{item.title}}</p>
            <p class="address">{{item.departureport}}出发 | {{item.arrivalport}}抵港</p>
            <!-- <p class="light">
              <span>推荐班期：</span> 2019 12-10 周二
            </p> -->
            <p class="light">
              <span>途经国家：</span>{{item.viacountry}}
            </p>
            <p class="light">
              <span>出发港：</span>{{item.departureport}}
            </p>
             <p class="light">
              <span>到达港：</span>{{item.arrivalport}}
            </p>
            <div class="eval">
              <!-- <p>3764条评价</p> -->
              <!-- <p>
                <span>4.6</span>/5分
              </p> -->
            </div>
          </div>
          </router-link>
        </div>

        <!-- <div class="airline-item">
          <div class="airline-item-img">
            <img :src="airlineImg" />
          </div>
          <div class="airline-item-info">
            <p class="info-title">歌诗达邮轮【幸运号】 16天14晚 跟团游·亚洲风情全览(新加坡-兰卡威-新加坡-兰卡威新加坡-兰卡威新加坡-兰卡威新加坡-兰卡威)</p>
            <p class="address">北京出发 | 新加坡抵港</p>
            <p class="light">
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
import airlineImg from "../assets/logo.png";
import HeaderMenu from "../components/HeaderMenu.vue";
export default {
  name: "Airline",
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      showCFcity: false,
      showCfCityIndex: null,
      showMDcity: false,
      showMDCityIndex: null,
      searchVal: "",
      searchParams: {},
      activeIndex: 1,
      pageInfo: {
        page: 1,
        limit: 10,
        total: 0
      },
      airlineImg: airlineImg,
      airlineCount: 474,
      tags: [],
      cityList: [],
      departureCity: [],
      arrivalCity: [],
      lineList: [],
      days: [
        "1~3天",
        "4~6天",
        "7~9天",
        "10~11天",
        "12~16天",
        "17~33天",
        "33天以上"
      ],
      timeList:[{
        id:1,
        name:'5天以内'
      },{
        id:2,
        name:'6-10天'
      },{
        id:3,
        name:'11-15天'
      },{
        id:4,
        name:'15天以上'
      }],
      country: ["亚洲", "欧洲", "北美洲", "南美洲", "大洋洲", "南极洲", "非洲"]
    };
  },
  mounted() {
    this.getPPnav();
    this.getCityList();
    this.getDepartureCity(),
    this.getArrivalCity()
    this.setSearch();
  },
  methods: {
    changeSearch(field, val){
      this.searchParams[field] = val

      this.tags = [];
      if(this.searchParams.departureport)
        this.tags.push('出发城市：'+this.searchParams.departureport)
      if(this.searchParams.arrivalport)
        this.tags.push('目的地：'+this.searchParams.arrivalport)
      if(this.searchParams.duration)
        this.tags.push('邮轮时长：'+this.searchParams.duration)
      if(this.searchParams.area)
        this.tags.push('出发航线：'+this.searchParams.area)
      this.getList();
    },
    // 首页跳转过来，，，设置搜索参数
    setSearch(){
      // 首页带过来的查询条件设置选中
      // console.info('this.$route====', this.$route)
      if(!this.$route.query.searchVal){
        this.getList();
      }else{
        this.tags = [];
        let searchVal = JSON.parse(this.$route.query.searchVal)
        this.searchVal = searchVal.searchval
        this.searchParams = searchVal

        if(this.searchParams.departureport)
          this.tags.push('出发城市：'+this.searchParams.departureport)
        if(this.searchParams.arrivalport)
          this.tags.push('目的地：'+this.searchParams.arrivalport)
        if(this.searchParams.duration)
          this.tags.push('邮轮时长：'+this.searchParams.duration)
        if(this.searchParams.area)
          this.tags.push('出发航线：'+this.searchParams.area)
        this.getList();
      }
    },
    getCityList(){
      this.$http.get('/API/index.ashx?command=GetAreaCity').then(function (res) {
        // console.info('res.body===', res.body)
        this.cityList = res.body.list
      })
    },
    getDepartureCity(){
      this.$http.get('/API/index.ashx?command=GetDepartureCity').then(function (res) {
        // console.info('res.body===', res.body)
        this.departureCity = []
        this.departureCity.push({
          "id": 1,
          "areaname": "热门港口",
          "child": res.body.hotcity
        })
        this.departureCity.push({
          "id": 2,
          "areaname": "出发城市",
          "child": res.body.allcity
        })
      })
    },
    getArrivalCity(){
      this.$http.get('/API/index.ashx?command=GetArrivalCity').then(function (res) {
        // console.info('res.body===', res.body)
        this.arrivalCity = []
        this.arrivalCity.push({
          "id": 1,
          "areaname": "热门城市",
          "child": res.body.hotcity
        })
        this.arrivalCity.push({
          "id": 2,
          "areaname": "热门国家",
          "child": res.body.hotcountry
        })
      })
    },
    getList(pageval) {
      this.list = [];
      if (pageval) this.pageInfo.page = pageval;
      // 搜索参数
      var paramsData = this.getSearchParams()
      this.$http
        .get("/API/itinerary.ashx?command=GetItineraryPager", {
          params: paramsData
        })
        .then(function(res) {
          this.list = res.body.list;
          this.pageInfo.total = parseInt(res.body.count);
        });
    },
    // 获取参数
    getSearchParams(){
      var paramsData = {
        page: this.pageInfo.page,
        limit: this.pageInfo.limit
      };
      if (this.searchVal) 
        paramsData.keys = this.searchVal;
      // 出发城市
      if(this.searchParams.departureport)
        paramsData.departureport = this.searchParams.departureport;
      // 目的地
      if(this.searchParams.arrivalport)
        paramsData.arrivalport = this.searchParams.arrivalport;
      // 邮轮时长
      if(this.searchParams.duration)
        paramsData.duration = this.searchParams.duration;
      // 游轮品牌
      if(this.searchParams.area)
        paramsData.area = this.searchParams.area;
      return paramsData
    },
    // 清空全部
    clearAll(){
      this.tags = [];
      this.searchParams = {};

      this.showCFcity = false;
      this.showCfCityIndex = null;
      this.showMDcity = false;
      this.showMDCityIndex = null;
      this.getList()
    },
    // 标签关闭
    handleClose(tag) {
      console.info('tag', tag)
      if(tag.indexOf('出发城市') >-1) this.searchParams.departureport = ''
      if(tag.indexOf('邮轮时长') >-1) this.searchParams.duration = ''
      if(tag.indexOf('出发航线') >-1) this.searchParams.area = ''
      if(tag.indexOf('目的地') >-1) this.searchParams.arrivalport = ''
      this.tags.splice(this.tags.indexOf(tag), 1);
      this.getList()
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
    },
    // 邮轮品牌
    getPPnav(){
      this.$http.get('/API/index.ashx?command=GetShipCompany').then(function (res) {
        this.lineList = res.body
      })
    },
    // 出发城市二级显示
    showCFcityFn(showCfCityIndex){
      if(this.showCfCityIndex == showCfCityIndex || !this.showCFcity){
        this.showCFcity = !this.showCFcity
      }
      this.showCfCityIndex = showCfCityIndex
      if(this.showCFcity) showCfCityIndex = null
    },
    // 目的城市二级显示
    showMDcityFn(showMDCityIndex){
      if(this.showMDCityIndex == showMDCityIndex || !this.showMDcity){
        this.showMDcity = !this.showMDcity
      }
      this.showMDCityIndex = showMDCityIndex
      if(this.showMDcity) showMDCityIndex = null
    }
  }
};
</script>
<style lang="scss">
// 航线filter
.airline-filter {
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
  .showCFcity{
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
    line-height: 40px;
    padding: 0 125px;
    background: #ffffff;
    span{
      cursor: pointer;
      text-align: center;
      padding: 0 0 0 25px;
      margin-right: 10px;
    }
    .hoverBg{
      background: #ee6b03;
      color: #ffffff;
      padding: 1px 5px;
    }
  }
  & .content {
    margin-left: 30px;
    margin-right: 30px;
    min-height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    & .filter-title {
      // display: inline-block;
      font-size: 14px;
      color: #333333;
      font-weight: 700;
      width: 80px;
      float: left;
    }
    & .filter-detail {
      width: 1000px;
      float: left;
      // display: inline-block;
      margin-left: 40px;
      font-size: 14px;
      color: #333333;
      & p {
        display: inline-block;
        margin-right: 40px;
        cursor: pointer;
        .hoverBg{
          background: #ee6b03;
          color: #ffffff;
          padding: 1px 5px;
        }
        .hoverBorder{
          border: 1px solid #ee6b03;
          padding: 1px 5px;
        }
      }
      & .hot {
        color: #999999;
      }
    }
  }
}
.airline-list {
  & .airline-item {
    background: #ffffff;
    margin-top: 30px;
    height: 300px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
    & .airline-item-img {
      width: 400px;
      height: 300px;
      float: left;
      overflow: hidden;
      background: #ededed;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        // max-width: 100%;
      }
    }
    & .airline-item-info {
      width: 780px;
      font-size: 14px;
      float: left;
      position: relative;
      padding: 30px 100px 0 30px;
      & .info-title {
        font-size: 22px;
        color: #333333;
      }
      & .address {
        margin-top: 15px;
        margin-bottom: 30px;
        color: #333333;
      }
       & .light {
        margin-bottom: 20px;
        height: 18px;
        overflow: hidden;
        color: #333333;
        & span {
          color: #999999;
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
  }
}

// 分页
.page {
  width: 100%;
  text-align: center;
  .block {
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 auto;
  }
}

@media screen and (max-width: 750px) {
  .filter-detail{
    max-width: 100%;
  }
  .airline-item-img{
    width: 40%!important;
  }
  .airline-item-info{
    width: 60%!important;
  }
}
</style>
