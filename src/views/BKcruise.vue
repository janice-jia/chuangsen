<template>
  <div class="company bkcruise">
    <div class="company-banner">
      <HeaderMenu activeIndex="5"></HeaderMenu>
      <img src="../assets/img/bannerBK.jpg" alt=""/>
      <div class="com-search container">
        <el-input
          placeholder="如：华东"
          v-model="searchVal">
        </el-input>
        <img class="com-search-btn" @click="search()" src="../assets/img/header/search.png" alt="">
      </div>
    </div>
    <div class="container">
      <!-- 新手入门 -->
      <div class="bk-tit">
        <h2>新手入门</h2>
        <p class="tit2"> NEW TO CRUISING</p>
        <p class="more"><router-link :to="{ name: 'bkcruiselevel', params: { id: 3 }}">更多</router-link></p>
      </div>

      <!-- 新手入门--内容-------------------------------start -->
      <div class="bk-xinshourumen">
        <el-row>
          <el-col :span="8" v-for="(item, index) in articleData.list1" :key="item.id">
            <!-- 列1图片 -->
            <div class="bk-xs-item imgBg" v-if="index==0">
              <img :src="item.coverimg" alt="">
            </div>

            <!-- 列2内容 -->
            <div class="bk-xs-item conBg" v-if="index==1">
              <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">
                <div class="bk-xs-cont-tit">
                  {{item.articletitle}}
                </div>
                <div class="bk-xs-cont-desc" v-html="item.articlecontent">
                </div>
                <div class="bk-cont-more">
                  <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">更多></router-link>
                </div>
              </router-link>
            </div>

            <!-- 列3图片 -->
            <div class="bk-xs-item imgBg" v-if="index==2">
              <img :src="item.coverimg" alt="">
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8" v-for="(item, index) in articleData.list1" :key="item.id">
            <!-- 列1内容 -->
            <div class="bk-xs-item conBg pUp" v-if="index==0">
              <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">
                <div class="bk-xs-cont-tit">
                  {{item.articletitle}}
                </div>
                <div class="bk-xs-cont-desc" v-html="item.articlecontent">
                </div>
                <div class="bk-cont-more">
                  <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">更多></router-link>
                </div>
              </router-link>
            </div>

            <!-- 列2图片 -->
            <div class="bk-xs-item imgBg pDown" v-if="index==1">
              <img :src="item.coverimg" alt="">
            </div>

            <!-- 列3内容 -->
            <div class="bk-xs-item conBg pUp" v-if="index==2">
              <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">
                <div class="bk-xs-cont-tit">
                  {{item.articletitle}}
                </div>
                <div class="bk-xs-cont-desc" v-html="item.articlecontent">
                </div>
                <div class="bk-cont-more">
                  <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">更多></router-link>
                </div>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 新手入门--内容-------------------------------end -->

      <!-- 邮轮介绍 -->
      <div class="bk-tit">
        <h2>邮轮介绍</h2>
        <p class="tit2">CRUISE EXPERIENCE</p>
        <p class="more"><router-link :to="{ name: 'bkcruiselevel', params: { id: 4 }}">更多</router-link></p>
      </div>

      <!-- 邮轮介绍--内容-------------------------------start -->
      <div class="bk-youlunjieshao">
        <el-row>
          <el-col :span="8" v-for="item in articleData.list2" :key="item.id">
            <div class="imgBg bk-yljs-item">
              <div class="bk-yljs-img">
                <img :src="item.coverimg" alt="">
              </div>
              <h2>
                <span>[</span> 
                <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">
                {{item.articletitle}}
                </router-link> 
                <span>]</span>
                </h2>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 邮轮介绍--内容-------------------------------end -->

      <!-- 预定锦囊 -->
      <div class="bk-tit">
        <h2>预定锦囊</h2>
        <p class="tit2">CHOOSING A CRUISE</p>
        <p class="more"><router-link :to="{ name: 'bkcruiselevel', params: { id: 5 }}">更多</router-link></p>
      </div>

      <!-- 预定锦囊--内容-------------------------------start -->
      <div class="bk-yudingjinnang">
        <el-row>
          <div v-for="(item, index) in articleData.list3" :key="item.id">
            <!-- 左图右文 -->
            <div class="bk-ydjn-item-01" v-if="(index+1) % 2 == 1">
              <el-col :span="12" >
                <div class="imgBg bk-ydjn-item">
                  <img :src="item.coverimg" alt="">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="conBg bk-ydjn-item pLeft">
                  <div class="bk-ydjn-cont-tit">
                    {{item.articletitle}}
                  </div>
                  <div class="bk-ydjn-cont-desc" v-html="item.articlecontent">
                  </div>
                  <div class="bk-cont-more">
                    <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">更多></router-link>
                  </div>
                </div>
              </el-col>
            </div>

            <!-- 右图左文 -->
            <div class="bk-ydjn-item-02" v-if="(index+1) % 2 == 0">
              <el-col :span="12">
                <div class="conBg bk-ydjn-item pRight">
                  <div class="bk-ydjn-cont-tit">
                    {{item.articletitle}}
                  </div>
                  <div class="bk-ydjn-cont-desc" v-html="item.articlecontent">
                  </div>
                  <div class="bk-cont-more">
                    <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">更多></router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="12" >
                <div class="imgBg bk-ydjn-item">
                  <img :src="item.coverimg" alt="">
                </div>
              </el-col>
            </div>
          </div>
        </el-row>
      </div>
      <!-- 预定锦囊--内容-------------------------------end -->

      <!-- 出行准备 -->
      <div class="bk-tit">
        <h2>出行准备</h2>
        <p class="tit2">CRUISE PREPARATION</p>
        <p class="more"><router-link :to="{ name: 'bkcruiselevel', params: { id: 6 }}">更多</router-link></p>
      </div>

      <!-- 出行准备--内容-------------------------------start -->
      <div class="bk-chuxingzhunbei">
        <div class="bk-cx-banner">
          <img src="../assets/img/bkinfo.jpeg" alt="">
        </div>
        <el-row>
          <el-col :span="8" v-for="item in articleData.list4" :key="item.id">
            <div class="conBg bk-cxzb-item">
              <div class="bk-cxzb-cont-tit">
                {{item.articletitle}}
              </div>
              <div class="bk-cxzb-cont-desc" v-html="item.articlecontent">
              </div>
              <div class="bk-cont-more">
                <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">更多></router-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 出行准备--内容-------------------------------end -->

      <!-- 邮轮专栏 -->
      <div class="bk-tit">
        <h2>邮轮专栏</h2>
        <p class="tit2">CRUISE COLUMN</p>
        <p class="more"><router-link :to="{ name: 'bkcruiselevel', params: { id: 7 }}">更多</router-link></p>
      </div>

      <!-- 邮轮专栏--内容-------------------------------start -->
      <div class="bk-youlunzhuanlan">
        <el-row :gutter="30">
          <el-col :span="8" v-for="item in articleData.list5" :key="item.id">
            <div class="bk-ylzl-item">
              <div class="bk-ylzl-img imgBg">
                <img :src="item.coverimg" alt="">
              </div>
              <div class="bk-ylzl-tit">
                <router-link :to="{ name: 'bkcruiseinfo', params: { id: item.id }}">{{item.articletitle}}</router-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 邮轮专栏--内容-------------------------------end -->
    </div>
    
  </div>
</template>
<script>
let Base64 = require('js-base64').Base64
import HeaderMenu from '../components/HeaderMenu.vue'
export default {
  name:'Company',
  components: {
    HeaderMenu
  },
  data() {
    return {
      articleData: {},
      searchVal: '',
      activeIndex: 1
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    // 搜索
    search(){
      if(this.searchVal){
        this.$router.push({path:'bkcruisesearch', query:{searchVal: this.searchVal}})
      }
    },
    getList(){
      this.$http.get('/API/article.ashx?command=GetArticleByCategory').then(function (res) {
        // 转义新手入门内容
        if(res.body && res.body.list1){
          for(var i=0; i<res.body.list1.length; i++){
            res.body.list1[i].articlecontent = Base64.decode(res.body.list1[i].articlecontent)
          }
        }

        // 转义游轮介绍内容
        if(res.body && res.body.list2){
          for(var i=0; i<res.body.list2.length; i++){
            res.body.list2[i].articlecontent = Base64.decode(res.body.list2[i].articlecontent)
          }
        }

        // 转义预定锦囊内容
        if(res.body && res.body.list3){
          for(var i=0; i<res.body.list3.length; i++){
            res.body.list3[i].articlecontent = Base64.decode(res.body.list3[i].articlecontent)
          }
        }

        // 转义出行准备内容
        if(res.body && res.body.list4){
          for(var i=0; i<res.body.list4.length; i++){
            res.body.list4[i].articlecontent = Base64.decode(res.body.list4[i].articlecontent)
          }
        }

        // 转义游轮专栏内容
        if(res.body && res.body.list5){
          for(var i=0; i<res.body.list5.length; i++){
            res.body.list5[i].articlecontent = Base64.decode(res.body.list5[i].articlecontent)
          }
        }
        this.articleData = res.body
      })
    }
  }
}
</script>
<style lang="scss">
.bkcruise{
  // 标题
  .bk-tit{
    text-align: center;
    margin: 30px 0;
    h2{
      font-size:45px;
      color: #333333;
      font-weight: normal;
    }
    p.tit2{
      font-size: 35px;
      color: #999999;
    }
    p.more{
      font-size:24px;
      color: #333333;
      a{
        color: #333333;
      }
    }
  }

  .bk-cont-more{
    margin-top: 10px;
    font-size: 20px;
    font-weight: normal;
    color: #333333;
    a{
      color: #333333;
    }
  }
  // 新手入门
  .imgBg{
    background: #ededed;
    img{
      max-width: 100%;
    }
  }
  .bk-xinshourumen{
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    .pUp,.pDown{
      position: relative;
      &::before{
        width:0;
	      height:0;
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        margin-left: -8px;
        border-right:16px solid transparent;
        border-left:16px solid transparent;
        // background: #ffffff;
      }
    }
    .pUp{
      &::before{
        top:-16px!important;
        border-bottom:16px solid #ffffff;
      }
    }
    .pDown{
      &::before{
        border-top:16px solid #ffffff;
      }
    }
    .bk-xs-item{
      height: 280px;
      // overflow: hidden;
      .bk-xs-cont-tit{
        color: #ee6b03;
        font-size: 24px;
        height: 70px;
        line-height: 35px;
        overflow: hidden
      }
      .bk-xs-cont-desc{
        margin-top: 10px;
        height: 128px;
        overflow: hidden;
        color:#666666;
        font-size: 18px;
        line-height: 25px;
      }
    }
    .conBg{
      background: #ffffff;
      padding: 30px;
    }
  }

  // 游轮介绍
  .bk-youlunjieshao{
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    .imgBg{
      height: 400px;
    }
    .bk-yljs-item{
      position: relative;
      width: 400px;;
      overflow: hidden;
      .bk-yljs-img{
        width: 400px;
        overflow: hidden;
        box-shadow:5px 5px 5px rgba(0,0,0,.35);
      }
      h2{
        color: #ffffff;
        font-size: 32px;
        font-weight: normal;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 70px;
        line-height: 70px;
        text-align: center;
        width: 100%;
        overflow: hidden;
        padding: 0 20px;
        background: rgba(0,0,0,.3);
        span{
          float: left;
        }
        a{
          color: #ffffff;
          width: 340px;
          display: inline-block;
          float: left;
          overflow: hidden;
        }
      }
    }
  }

  // 预定锦囊
  .bk-yudingjinnang{
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    .conBg{
      padding: 40px;
    }
    .pLeft,.pRight{
      position: relative;
      &::before{
        width:0;
	      height:0;
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -8px;
        border-top:16px solid transparent;
        border-bottom:16px solid transparent;
        // background: #ffffff;
      }
    }
    .pLeft{
      &::before{
        left: -16px;
        border-right:16px solid #ffffff;
      }
    }
    .pRight{
      &::before{
        right: -16px;
        border-left:16px solid #ffffff;
      }
    }
    .bk-ydjn-item{
      height: 300px;
      overflow: hidden;
      img{
        max-width: 100%;
        // max-height: 100%;
      }
      .bk-ydjn-cont-tit{
        color: #ee6b03;
        font-size: 24px;
        height: 35px;
        line-height: 35px;
        overflow: hidden
      }
      .bk-ydjn-cont-desc{
        margin-top: 10px;
        color:#666666;
        font-size: 20px;
        line-height: 28px;
        height: 170px;
        overflow: hidden;
        *{
          font-size: 20px;
        }
      }
    }
  }

  // 出行准备
  .bk-chuxingzhunbei{
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    .bk-cx-banner{
      background: #ededed;
      img{
        max-width: 100%;
      }
    }
    .bk-cxzb-item{
      height: 400px;
      padding: 45px;
      .bk-cxzb-cont-tit{
        color: #ee6b03;
        font-size: 24px;
        height: 35px;
        line-height: 35px;
        overflow: hidden
      }
      .bk-cxzb-cont-desc{
        margin-top: 10px;
        color:#666666;
        font-size: 20px;
        line-height: 28px;
        height: 255px;
        overflow: hidden;
      }
    }
  }

  // 邮轮专栏
  .bk-youlunzhuanlan{
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    .bk-ylzl-item{
      height: 350px;
      .bk-ylzl-img{
        height: 265px;
      }
      .bk-ylzl-tit{
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        text-align: center;
        padding: 0 15px;
        a{
          font-size: 24px;
          color: #333333;
        }
      }
    }
  }
}
</style>
