<template>
  <div class="airLineInfo">
    <div class="companyInfo-banner">
      <HeaderMenu activeIndex="3"></HeaderMenu>
      <img src="../assets/img/cominfo.jpg" alt />

      <div class="com-page-info" id="hauto">
        <!-- 标题，评分 -->
        <div class="info01">
          <el-row>
            <el-col :span="4">
              <div class="coverimgBg">
                <img :src="detail.coverimg" alt />
              </div>
            </el-col>
            <el-col :span="20">
              <p class="cntit">{{detail.title}}</p>
            </el-col>
          </el-row>
        </div>

        <!-- 简介 -->
        <div class="info02">
          <el-row id="flexLeft" type="flex" class="row-bg" justify="start">
            <el-col :span="7">
              <div class="tag-item">出发城市：{{detail.departureport}}</div>
            </el-col>
            <el-col :span="7">
              <div class="tag-item">到达城市：{{detail.arrivalport}}</div>
            </el-col>
            <el-col :span="10">
              <div class="tag-item">途经国家：{{detail.viacountry}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- <div class="container infoCon">
      <div class="info-tag">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col span="3" >
            <div class="info-tag-item"><a href="#cpts">产品特色</a></div>
          </el-col>
          <el-col span="3" v-if="dayList.length > 0">
            <div class="info-tag-item"><a href="#xcjs">行程介绍</a></div>
          </el-col>
          <el-col span="3" >
            <div class="info-tag-item"><a href="#fysm">费用说明</a></div>
          </el-col>
          <el-col span="3" >
            <div class="info-tag-item"><a href="#ydxz">预定须知</a></div>
          </el-col>
        </el-row>
      </div>
    </div> -->
    <!-- 产品特色 -->
    <div class="container features" id="cpts">
      <div class="divider feature-title">
        <el-divider>产品特色</el-divider>
      </div>
      <div class="feature-detail">
        <p v-html="detail.itineraryfeature"></p>
        <!-- <p>体验闽南特色，一元换购指定大交通（单趟）</p>
        <p>行程特色：</p>
        <p v-for="(item,index) in featureList" :key="index">* {{item}}</p>
        <p>======================</p>
        <p class="red">一元换购以下城市前往厦门登船大交通动车车票一张（一人限购一张）</p>
        <p class="red">* 上海；嘉兴；杭州；绍兴；宁波；台州；温州，出发地前往厦门去程动车票（单程）。</p>
        <p>去程参考车次D2285</p>
        <p class="red">* 南昌；抚州；赣州，出发地前往厦门去程动车票（单程）。</p>
        <p>去程参考车次D2285</p>
        <p class="red">* 广州，东莞，深圳，出发地前往厦门去程动车票（单程）。</p>
        <p>去程参考车次D2285，深圳待定</p>
        <p class="red">* 武汉，黄石，出发地前往厦门去程动车票（单程）。</p>
        <p>去程参考车次D2285，深圳待定</p>
        <p class="red">***** 根据客人出发地选择以上其中一个城市出发动车二等座次车票（单程）</p>
        <p class="red">***** 厦门回程车票需要客户自理</p> -->
      </div>
      <!-- <div class="close">收起 ^</div> -->
    </div>
    <!-- 双子星号 -->
    <!-- <div class="container star">
      <div class="divider star-title">
        <el-divider>{{shipDetail.shipname}}</el-divider>
      </div>
      <div class="star-detail">
        <p class="detail-intro">
          {{shipDetail.description}}
          <span>了解更多 ></span>
        </p>
        <div class="star-tag fjh-tabs">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="'舱房介绍（' + cabinsInfoList.length + '）'" name="first">
              <table style="width: 100%" class="cangtable">
                <tr>
                  <th width="220">图片</th>
                  <th width="200">名称</th>
                  <th width="130">容纳</th>
                  <th width="150">楼层</th>
                  <th width="170">面积</th>
                  <th>窗型</th>
                  <th></th>
                </tr>
                <tr v-for="(item,index) in cabinsInfoList" :key="index">
                  <td>
                    <div class="image">
                      <img :src="item.imgurl" />
                    </div>
                  </td>
                  <td class="red">{{item.cabinsname}}</td>
                  <td>{{item.guests ? item.guests + '人' : ''}}</td>
                  <td>{{item.floor}}</td>
                  <td>{{item.area}}</td>
                  <td>{{item.windowtype}}</td>
                  <td class="red">详情 v</td>
                </tr>
              </table>
            </el-tab-pane>
            <el-tab-pane :label="'海上美食（' + foodInfoList.length + '）'" name="second">
              <div class="star-item">
                <el-row type="flex">
                  <el-col class="star-item-info" v-for="(item,index) in foodInfoList" :key="index" v-if="index < 3">
                    <div class="star-item-infoimg">
                      <img :src="item.imgurl" />
                    </div>
                    <p class="info-title">{{item.foodname}}</p>
                    <p class="info-tag">楼层：{{item.floor}} | 容纳：{{item.guests}}</p>
                    <p class="info-desc">{{item.description}}</p>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane :label="'船上娱乐（' + amusementInfoList.length + '）'" name="third">
              <div class="star-item">
                <el-row type="flex">
                  <el-col class="star-item-info" v-for="(item,index) in amusementInfoList" :key="index" v-if="index < 3">
                    <div class="star-item-infoimg">
                      <img :src="item.imgurl" />
                    </div>
                    <p class="info-title">{{item.amusementname}}</p>
                    <p class="info-tag">楼层：{{item.floor}} | 容纳：{{item.guests}}</p>
                    <p class="info-desc">{{item.description}}</p>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane :label="'邮轮购物（' + shopInfoList.length + '）'" name="fourth">
              <div class="star-item">
                <el-row type="flex">
                  <el-col class="star-item-info" v-for="(item,index) in shopInfoList" :key="index" v-if="index < 3">
                    <div class="star-item-infoimg">
                      <img :src="item.imgurl" />
                    </div>
                    <p class="info-title">{{item.shopname}}</p>
                    <p class="info-tag">楼层：{{item.floor}} | 容纳：{{item.guests}}</p>
                    <p class="info-desc">{{item.description}}</p>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        
      </div>
    </div> -->
    <!-- 日程安排 -->
    <div class="container schedule" id="xcjs" v-if="dayList.length > 0">
      <div class="schedule-list">
        <div class="schedule-listimg">
          <img :src="detail.coverimg" />
        </div>
        <div class="list-summary">
          <table cellspacing="0">
            <th>日期</th>
            <th>国家/城市</th>
            <th>
              抵达
              <span class="currTime">当地时间</span>
            </th>
            <th>
              起航
              <span class="currTime">当地时间</span>
            </th>
            <tr v-for="item in dayList" :key="item.id">
              <td>{{item.days}}</td>
              <td>{{item.departurecity}}</td>
              <td class="time"></td>
              <td class="time"></td>
            </tr>
          </table>
          <div class="tips">
            <p>
              <span>*</span>以上行程日期和时间均为当地时间，可能会因为天气、路况等原因做相应调整，请以最终的行程安排为准。
            </p>
          </div>
        </div>
      </div>
      <div class="schedule-detail">
        <div v-for="item in dayList" :key="item.id">
          <div class="detail-title">
            <span class="left">{{item.days}}</span>
            <span>{{item.departurecity}}</span>
            <!-- <span class="right">2019年9月24日</span> -->
          </div>
          <div class="detail-info">
            <p>{{item.description}}</p>
            <p>{{item.foods}}</p>
            <p>住宿：{{item.hotel}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 费用说明 -->

    <!-- <div class="container price" id="fysm">
      <div class="divider price-title">
        <el-divider>费用说明</el-divider>
      </div>
      <div class="price-include">
        {{detail.feedetail}}
        <div class="title">费用包含</div>
        <div class="detail">
          <ul>
            
            <li v-for="(item, index) in priceInclude" :key="index">{{item}}。</li>
          </ul>
        </div>
      </div>
      <div class="price-exclude">
        <div class="title">费用不包含</div>
        <div class="detail">
          <ul>
            <li v-for="(item, index) in priceInclude" :key="index">{{item}}。</li>
          </ul>
        </div> 
      </div>
    </div> -->
    <!-- 出行步骤 -->
    <!-- <div class="container step">
      <div class="divider step-title">
        <el-divider>出行步骤</el-divider>
      </div>
    </div> -->
    <!-- 预定须知 -->
    <!-- <div class="container book" id="ydxz">
      <div class="divider book-title">
        <el-divider>预定须知</el-divider>
      </div>
      <div class="book-item">
        {{detail.bookingdetail}}
        <div class="title">
          <el-menu default-active="1" class="el-menu-vertical">
            <el-menu-item index="1">
              <span slot="title">预定限制</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">退改说明</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">支付方式</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">出行说明</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="detail">
          <ul>
            <li v-for="(item, index) in priceInclude" :key="index">{{item}}。</li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import HeaderMenu from "../components/HeaderMenu.vue";
export default {
  name: "airLineInfo",
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: "",
      activeName: 'first',
      featureList: [
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛；",
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛；",
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛；",
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛；",
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛。"
      ],
      priceInclude: [
        "领队服务费（厦门接站开始）",
        "行程中所示的陆地段游览、用车及景点门票（注明自费的除外）",
        "行程内所列餐食（行程中特别注明须自理的除外）",
        "邮轮港务费、燃油附加费",
        "丽星邮轮双子星船票（含3晚住宿、指定餐厅免费膳食、指定的船上设施、船上娱乐节目及活动）",
        "邮轮港务费 599元/人",
        "日本岸上观光税1000日元/人",
        "住宿：厦门经济型酒店（准三）住宿三晚。（不提供自然单间，产生单房差客人自理，我社有权安排三人间（或加床）、拼住或由客人补单房差（房差：280元/人，该费用不包含）；福建省的酒店均要求：14:00办理入住手续，12:00办理退房手续，由于个人原因，需要提前办理入住或推迟退房而产生的费用自行承担）",
        "用餐：三早一正（正餐标20元/人/餐，八菜一汤，十人一桌，根据客人人数情况酌情安排房费中所含早餐，若客人不用，费用不退；客人在旅游期间因自身原因不用正餐，费用不退）",
        "门票：行程所列景点首道门票（以上景点的游览时间及顺序仅供参考，行程视情况调整）",
        "用车：当地空调旅游拼车（福建省内用车均需要套团，且散拼形式不保证一车到底）",
        "保险：旅行社责任险（具体解释权归保险公司）；建议游客自行购买旅游人身意外保险",
        "导服：全程优秀国语导游",
        "购物：全程安排2次购物（约120分钟/店），丝绸文化馆、乳胶平买商城、珠宝平买商城、金门厨具展示馆4选2（自愿购物，敬请配合）"
      ],
      // 详细信息
      detail:{},
      // 日程
      dayList: [],
      // 邮轮基本信息
      shipDetail: {},
      // 美食信息
      foodInfoList: [],
      // 娱乐信息
      amusementInfoList: [],
      // 购物信息
      shopInfoList:[],
      // 舱房信息
      cabinsInfoList: []
    };
  },
  mounted() {
    this.getDetail();
    this.getInfo();
  },
  methods: {
    // 获取详细
    getDetail(){
      var paramsData = {};
      if (this.$route.params.id) paramsData.id = this.$route.params.id;
      this.$http.get("/API/itinerary.ashx?command=GetItineraryDetail", {
        params: paramsData
      }).then(function(res) {
        this.detail = res.body;
        // 游轮详细信息
        this.getShipDetail(this.detail.shipid);
        // 邮轮美食信息
        this.getFoodInfoList(this.detail.shipid);
        // 邮轮娱乐信息
        this.getAmusementInfoList(this.detail.shipid);
        // 邮轮购物信息
        this.getShopInfoList(this.detail.shipid);
        // 邮轮舱房信息
        this.getCabinsInfoList(this.detail.shipid)
      });
    },
    // 获取详细---日程
    getInfo() {
      this.list = [];
      var paramsData = {};
      if (this.$route.params.id) paramsData.itineraryid = this.$route.params.id;
      this.$http.get("/API/itinerary.ashx?command=GetItineraryDetailByItineraryId", {
        params: paramsData
      }).then(function(res) {
        this.dayList = res.body;
      });
    },
    // 获取邮轮基本信息
    getShipDetail(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetBaseInfo&shipid="+parseInt(shipid)).then(function(res) {
        this.shipDetail = res.body;
      });
    },
    // 获取邮轮美食
    getFoodInfoList(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetFoodInfoList&shipid="+parseInt(shipid)).then(function(res) {
        this.foodInfoList = res.body;
      });
    },
    // 获取邮轮娱乐
    getAmusementInfoList(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetAmusementInfoList&shipid="+parseInt(shipid)).then(function(res) {
        this.amusementInfoList = res.body;
      });
      
    },
    // 获取邮轮购物
    getShopInfoList(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetShopInfoList&shipid="+parseInt(shipid)).then(function(res) {
        this.shopInfoList = res.body;
      });
    },
    // 获取邮轮仓房介绍
    getCabinsInfoList(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetCabinsInfoList&shipid="+parseInt(shipid)).then(function(res) {
        this.cabinsInfoList = res.body;
      });
    }
  }
};
</script>
<style lang="scss">
.companyInfo-banner {
  position: relative;
  img {
    max-width: 100%;
  }
  #hauto{
    height: auto!important;
  }
  .com-page-info {
    width: 1200px;
    padding-top: 10px;
    background: #ffffff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    position: absolute;
    left: 50%;
    margin-left: -600px;
    .info01 {
      border-bottom: 1px solid #e5e5e5;
      .coverimgBg{
        height: 110px;
        background: #e5e5e5;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
      img {
        max-width: none;
        // max-width: 100%;
        // max-height: 100%;
      }
      .cntit {
        padding: 20px 0 0 20px;
        font-size: 26px;
        color: #333333;
        .entit {
          font-size: 18px;
          color: #999999;
        }
      }
    }
    .info02 {
      font-size: 16px;
      color: #999999;
      margin-top: 25px;
      .tag-item {
        text-align: left;
        border: none;
      }
    }
  }
}

.airLineInfo {
  width: 1220px;
  margin: 0 auto;
  .infoCon {
    margin-top: 100px;
    width: 1220px;
    .info-tag {
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
      background: #ffffff;
      height: 100px;
      line-height: 100px;
      .info-tag-item {
        font-size: 28px;
        font-weight: normal;
        color: #333333;
        a{
          color: #333333;
        }
      }
    }
  }
}
// 产品特色
.features,
.star,
.price,
.step,
.book {
  margin-top: 30px !important;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  background: #ffffff;
  .divider {
    padding-top: 85px;
    padding-bottom: 42px;
    padding-left: 20px;
    padding-right: 20px;
    color: #333333;
    .el-divider__text {
      font-size: 36px;
    }
  }
}
.features {
  .feature-detail {
    padding-left: 110px;
    padding-bottom: 10px;
    font-size: 18px;
    color: #333333;
    p {
      margin-bottom: 18px;
      &.red {
        color: #fa2f0a;
      }
    }
  }
  .close {
    text-align: center;
    font-size: 18px;
    margin-top: 60px;
    padding-bottom: 30px;
  }
}
.star {
  padding-bottom: 60px !important;
  .star-detail {
    .detail-intro {
      padding-left: 110px;
      padding-right: 110px;
      font-size: 14px;
      color: #999999;
      & span {
        color: #ee6b03;
      }
    }
    .star-tag {
      margin-top: 50px;
      padding-bottom: 50px;
      .el-tabs {
        .el-tabs__header {
          padding-left: 60px;
        } 
        .el-tabs__item{
          margin-bottom: 10px;
        }
      }
      // padding-left: 110px;
      // padding-right: 110px;
      .el-menu {
        border-bottom: none;
        .el-menu-item {
          font-size: 24px;
          color: #333333;
          padding: 0;
          margin-left: 35px;
          margin-right: 35px;
          text-align: center;
        }
      }
    }
    .star-item {
      margin-left: 20px;
      width: 100%;
      .star-item-info {
        width: 360px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.35);
        border: 1px solid #eeeeee;
        margin-right: 30px;
        .star-item-infoimg{
          width: 100%;
          background: #e5e5e5;
          height: 210px;
          img {
            max-width: 100%;
          }
        }
        p {
          padding:0 10px;
          color: #999999;
          font-size: 16px;
        }
        .info-title {
          font-size: 24px;
          color: #333333;
          height: 50px;
          line-height: 50px;
          overflow: hidden;
        }
        .info-tag{
          margin-top: 10px;
          height: 20px;
          overflow: hidden;
        }
        .info-desc{
          margin: 10px 0;
          height: 25px;
          line-height:25px;
          overflow: hidden;
        }
      }
    }
  }
}
.schedule {
  margin-top: 30px !important;
  padding: 30px !important;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  background: #ffffff;
  .schedule-list {
    height: 342px;
    .schedule-listimg{
      width: 605px;
      height: 100%;
      float: left;
      background: #e5e5e5;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img{
        // max-width: 100%;
      }
    }
    .list-summary {
      display: inline-block;
      height: 342px;
      overflow-y: auto;
      float: right;
      width: 500px;
      table {
        color: #333333;
        width: 510px;
        th {
          font-size: 16px;
          text-align: left;
          height: 50px;
          line-height: 50px;
          border: none;
          padding-left: 20px;
          background: #f2f2f2;
          .currTime {
            color: #999999;
            font-size: 14px;
          }
        }
        tr {
          height: 54px;
          line-height: 54px;
          font-size: 14px;
          td {
            padding-left: 20px;
            &.time {
              text-align: center;
            }
          }
        }
      }
      .tips {
        font-size: 14px;
        color: #999999;
        width: 524px;
        padding-left: 30px;
        margin-top: 20px;
        span {
          color: #fa2f0a;
        }
      }
    }
  }
  .schedule-detail {
    .detail-title {
      margin-top: 30px;
      margin-bottom: 30px;
      height: 50px;
      line-height: 50px;
      background: #f2f2f2;
      border: 1px solid #e5e5e5;
      font-size: 20px;
      color: #333333;
      text-align: center;
      position: relative;
      .left,
      .right {
        position: absolute;
      }
      .left {
        left: 30px;
      }
      .right {
        right: 30px;
      }
    }
    .detail-info {
      padding-left: 30px;
      font-size: 16px;
      line-height: 32px;
      color: #333333;
      .breakfast {
        margin-top: 32px;
      }
    }
  }
}
.price-include,
.price-exclude {
  color: #333333;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 100px;
  .title {
    margin-right: 50px;
    display: inline-block;
    font-size: 20px;
    width: 100px;
    float: left;
  }
  .detail {
    display: inline-block;
    font-size: 18px;
    line-height: 32px;
    width: 830px;
    ul li {
      list-style: disc;
    }
  }
}
.book-item {
  padding-left: 20px;
  .title,
  .detail {
    display: inline-block;
  }
  .title {
    margin-right: 50px;
    width: 160px;
    float: left;
    .el-menu {
      border-right: none;
      .el-menu-item {
        font-size: 26px;
        border-bottom: 1px solid #e5e5e5;
        &:hover {
          background: #ffffff;
        }
      }
    }
  }
  .detail {
    width: 950px;
    font-size: 18px;
    color: #333333;
    line-height: 32px;
    padding-bottom: 60px;
    ul li {
      list-style: disc;
    }
  }
}
@media screen and (max-width: 750px) {
  .com-page-info{
    max-width: 100%;
  }
  .schedule-listimg{
    width: 40%!important;
  }
  .list-summary{
    width: 60%!important;
  }
  .fjh-tabs .el-tabs .el-tabs__item{
    padding: 0 10px!important;
  }
}
</style>
