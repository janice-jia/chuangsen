<template>
  <div class="cs-BasicEduTeaRes">
    <!-- 教师资源 -->
    <div class="cs-BasicEduTeaRes-part1">
      <div class="container">
            <h1 class="tit">教师资源</h1>
            <div class="item">
                <div class="item-l"><img src="../assets/img/teacherResource-1.jpg" alt=""></div>
                <div class="item-r">
                    <h1>《人人能编程》</h1>
                    <div class="con">
                        人人能编程”课程可指导你通过 Swift Playgrounds 来教授编程，这款 app 通过互动式解谜闯关和生动有趣的角色，来引导儿童学习编码。它适合8岁以上的学生使用，也能让你用专业 app 开发者使用的语言来介绍编程。
                    </div>
                    <a href="https://www.apple.com.cn/education/docs/everyone-can-code-curriculum-guide.pdf" class="more">点击获取 <img src="../assets/img/icon-teacherResource-6.png" alt=""></a>
                </div>
                <div style="clear:both"></div>
            </div>

            <div class="item">
                <div class="item-l"><img src="../assets/img/teacherResource-2.jpg" alt=""></div>
                <div class="item-r">
                    <h1>《人人能创造》</h1>
                    <div class="con">
                        通过“人人能创造”学习指南里的各个项目，学生们可以学着用视频、摄影、音乐和绘画来开拓思路，表达想法。同时，老师们也可借此以富有趣味和意义的教学方法，将这些技能带入到各个年级的各种课程之中，从而点亮创意的火花。 
                    </div>
                    <a href="https://www.apple.com.cn/education/everyone-can-create-guides/" class="more">点击获取 <img src="../assets/img/icon-teacherResource-6.png" alt=""></a>
                </div>
                <div style="clear:both"></div>
            </div>

            <div class="item">
                <div class="item-l"><img src="../assets/img/teacherResource-3.jpg" alt=""></div>
                <div class="item-r">
                    <h1>Swift 开发专辑课程</h1>
                    <div class="con">
                        丰富的专辑课程，让教师可轻松帮助学生尽情投入到 app 设计与开发之中。 
                    </div>
                    <a href="/pdf/develop-in-swift-curriculum-guide.pdf" download="develop-in-swift-curriculum-guide.pdf" target="_blank" class="more">点击获取 <img src="../assets/img/icon-teacherResource-6.png" alt=""></a>
                </div>
                <div style="clear:both"></div>
            </div>
      </div>
    </div>
    <!-- Apple 杰出教育工作者（ADE）计划 -->
    <div class="cs-BasicEduTeaRes-part2">
      <div class="container">
          <h1 class="tit">Apple 杰出教育工作者（ADE）计划</h1>
        <div class="item">
            <div class="item-l">
                <p class="p1">Apple 为教育工作者带来了新思路，由兴趣教育发挥创造力。</p>
                <p class="p2">由 Apple 创立的一项专注于教育卓越和领导力关系的计划，由教育界领军人物组成的全球社区，利用 Apple 技术改变教学方式，帮助其他教育工作者重新思考 iPad 和 Mac 带来的无限可能性，进而为学生提供个性十足的学习方法。</p>
                <p class="p3">成为 ADE 社区的一员不仅是一项荣誉，更是一个能够有所作为的机会。</p>
                <a href="https://ade.apple.com/login.jspa?referer=%2Fwelcome" class="more">我想成为一名 ADE <span class="el-icon-arrow-right"></span></a>
            </div>
            <div class="item-r">
                <img src="../assets/img/teacherResource-4.jpg" alt="">
            </div>
        </div>
      </div>
    </div>

    <!-- Apple Teacher -->
    <div class="cs-BasicEduTeaRes-part3">
        <h1 class="tit">Apple Teacher</h1>
      <div class="container">
          <div class="item">
              <div class="item-l">
                  <img src="../assets/img/teacherResource-5.png" alt="">
              </div>
              <div class="item-r">
                  <p class="p1">先人一步接手最新课程资料、学习项目，用科技知识改变下一代。</p>
                  <p class="p2">由 Apple 提供的一项免费的专业学习计划，面向所有教育工作者开放，旨在帮助教育工作者培养 iPad 和 Mac 使用技能。通过 Apple Teacher 学习中心，教师可将学习资源直接运用到教学活动中，还能因为掌握新技能而获得认可。</p>
                  <a href="https://appleteacher.apple.com/#/auth/sign-in" class="more">加入 Apple Teacher 计划 <span class="el-icon-arrow-right"></span></a>
              </div>
          </div>
          <div style="clear:both"></div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name:'BasicEduTeacherResource',
  data() {
    return {
    }
  },
  mounted(){
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
.cs-BasicEduTeaRes{
    border-bottom: 1px solid #D6D6D6;
  .cs-BasicEduTeaRes-part1{
      .container{
          h1.tit{
            font-size: 58px;
            font-weight: 600;
            color: #000000;
            line-height: 76px;
            text-align: center;
            margin: 115px 0 96px 0;
          }
          .item{
            // height: 400px;
            background: #FFFFFF;
            border-radius: 22px;
            margin-bottom: 33px;
            padding: 48px 0;
            .item-l,.item-r{
                float: left;
            }
            .item-l{
                text-align: right;
                width: 365px;
                padding-left: 81px;
                img{
                    max-width: 100%;
                }
            }
            .item-r{
                width: 765px;
                padding: 17px 86px 0 53px;
                h1{
                    font-size: 32px;
                    font-weight: 600;
                    color: #000000;
                    line-height: 30px;
                }
                .con{
                    margin: 36px 0 40px 0;
                    font-size: 24px;
                    font-weight: 400;
                    color: #000000;
                    line-height: 38px;
                }
                .more{
                    font-size: 26px;
                    font-weight: 400;
                    color: #0071E3;
                    line-height: 30px;
                }
            }
          }
      }
  }
  .cs-BasicEduTeaRes-part2{
      background: #FFFFFF;
      padding-bottom: 93px;
      .container{
          h1.tit{
                font-size: 42px;
                font-weight: 600;
                color: #000000;
                line-height: 38px;
                padding: 91px 0;
                text-align: center;
          }
          .item{
              height: 530px;
              .item-l{
                  float: left;
                  width: 560px;
                  padding: 28px 0 0 0;
                  .p1{
                    font-size: 32px;
                    font-weight: bold;
                    color: #0071E3;
                    line-height: 51px;
                  }
                  .p2{
                      font-size: 20px;
                      font-weight: 400;
                      color: #000000;
                      line-height: 38px;
                      margin: 45px 0;
                  }
                  .p3{
                      font-size: 24px;
                      font-weight: 600;
                      color: #000000;
                      line-height: 38px;
                      margin-bottom: 45px;
                  }
                  .more{
                        font-size: 26px;
                        font-weight: 400;
                        color: #0071E3;
                        line-height: 30px;
                  }
              }
              .item-r{
                  width: 580px;
                  height: 530px;
                  float: right;
                  border-radius: 22px;
                  overflow: hidden;
                  img{
                      max-height: 100%;
                  }
              }
          }
      }
  }
  .cs-BasicEduTeaRes-part3{
      background: #f5f5f7;
      padding-bottom: 52px;
      img{
          max-width: 100%;
      }
      h1.tit{
        font-size: 42px;
        font-weight: 600;
        color: #000000;
        line-height: 38px;
        padding: 121px 0 88px 0;
        text-align: center;
      }
      .container{
          .item{
            .item-l{
                float: left;
                width: 613px;
            }
            .item-r{
                float: left;
                width: 557px;
                margin-left: 10px;
                .p1{
                    font-size: 32px;
                    font-weight: bold;
                    color: #0071E3;
                    line-height: 51px;
                }
                .p2{
                    font-size: 20px;
                    font-weight: 400;
                    color: #000000;
                    line-height: 38px;
                    margin: 45px 0;
                }
                .more{
                    font-size: 26px;
                    font-weight: 400;
                    color: #0071E3;
                    line-height: 30px;
                }
            }
          }
      }
  }
}
</style>
