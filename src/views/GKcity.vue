<template>
  <div class="company gkCity">
    <div class="company-banner">
      <HeaderMenu activeIndex="4"></HeaderMenu>
      <img src="../assets/img/bannerGK.jpg" alt=""/>
      <div class="com-search container">
        <el-input
          placeholder="如：北欧"
          v-model="searchVal">
        </el-input>
        <img class="com-search-btn" @click="getList('1')" src="../assets/img/header/search.png" alt="">
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

      <div class="gkCityItem" v-for="(item, index) in list" :key="item.id">
        <div style="clear:both"></div>
        <!-- item结构1 -->
        <div class="gkCityItem01" v-if="(index+1)%2==1">
          <!-- 左图 -->
          <div class="left w800">
            <img :src="item.coverimg" alt="">
          </div>
          <!-- 右文 -->
          <div class="left w400">
            <div class="tit">{{item.area}}</div>
            <div class="desc">{{item.description}}</div>
            <div class="more">
              <router-link :to="{ name: 'gkcitylevel', params: { areaid: item.id }}" target="_blank">了解更多</router-link>
            </div>
          </div>
          <div style="clear:both"></div>
        </div>
        <div style="clear:both"></div>
        <!-- item结构2 -->
        <div class="gkCityItem02" v-if="(index+1)%2==0">
          <!-- 左文字 -->
          <div class="left w400">
            <div class="tit">{{item.area}}</div>
            <div class="desc">{{item.description}}</div>
            <div class="more">
              <router-link :to="{ name: 'gkcitylevel', params: { areaid: item.id }}" target="_blank">了解更多</router-link>
            </div>
          </div>
          <!-- 右图 -->
          <div class="left w800">
            <img :src="item.coverimg" alt="">
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
      <div style="clear:both"></div>

      <div class="page" v-if="list.length > 0">
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageInfo.page"
            :page-size="pageInfo.limit"
            layout="prev, pager, next, jumper"
            :total="pageInfo.total">
          </el-pagination>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import HeaderMenu from '../components/HeaderMenu.vue'
export default {
  name:'Company',
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: '',
      activeIndex: 1,
      pageInfo: {
        page: 1,
        limit: 10,
        total: 0
      }
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList(pageval){
      this.list = []
      if(pageval) this.pageInfo.page = pageval
      var paramsData = {
        page: this.pageInfo.page,
        limit: this.pageInfo.limit
      }
      if(this.searchVal) paramsData.area = this.searchVal
      this.$http.get('/API/port.ashx?command=GetAreaPager', {params: paramsData}).then(function (res) {
        this.list = res.body.list
        this.pageInfo.total = parseInt(res.body.count)
      })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${limit} 条`);
      this.getList(val)
    },
    handleCurrentChange(val) {
      this.getList(val)
    },
    currentPage(){
      console.info(11)
    }
  }
}
</script>
<style lang="scss">
.gkCity{
  .gkCityItem{
    margin-top: 30px;
    height: 360px;
    width: 100%;
    .gkCityItem01,.gkCityItem02{
      margin: 30px 0;
      background: #ffffff;
      height: 100%;
      box-shadow:5px 5px 5px rgba(0,0,0,.35);
    }
    .w800{
      width: 790px;
      max-width: 100%;
      background: #ededed;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-content: center;
      justify-content: center;
      img{
        max-width: 100%;
      }
    }
    .w400{
      width: 390px;
      padding: 10px 20px;
      .tit{
        font-size: 36px;
        color: #333333;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
      }
      .desc{
        font-size: 14px;
        color:#666666;
        line-height: 23px;
        margin-bottom: 10px;
        max-height: 240px;
        padding-left: 3px;
        overflow: hidden;
      }
      .more{
        text-align: right;
        a{
          position: relative;
          color:#333333;
          padding-right:22px;
          &::before{
            content: '';
            position: absolute;
            right: 0;
            top: 2px;
            width: 15px;
            height:15px;
            background: url("../assets/img/header/right.png") no-repeat;
            background-size: 12px;
          }
        }
      }
    }
    .left{
      float: left;
    }
  }
}
@media screen and (max-width: 750px) {
  .gkCityItem{
    height: 180px!important;
    .w800{
      width: 300px!important;
    }
    .w400{
      width: 150px!important;
      .desc{
        max-height: 65px!important;
      }
    }
  }
  
}
</style>
