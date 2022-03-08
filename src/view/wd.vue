<template>
    <div class="wd">
      <!-- 头部导航 -->
      <div class="head" @mouseleave="hide()">
          <div class="container">
              <p>沸点</p>
              <ul>
                  <li v-for="(item,index) in list" :key="index" @mouseover="change(index)" :class="showFlag==index?'show':''">
                      {{item.title}}
                      <div class="nav" v-show="showFlag==index">
                        <el-collapse-transition>
                            <div v-show="showFlag==index">
                                <p>{{item.text}}</p>
                            </div>
                        </el-collapse-transition>
                      </div>
                  </li>
              </ul>
              <p>临界点</p>
          </div>
      </div>
       <!-- 轮播图 -->
      <div class="lun">
          <p>让我们在一起的时光不停的旋转着</p>
          <template>
            <el-carousel :interval="2000" type="card" height="500px">
                <el-carousel-item v-for="(item,index) in listPic3" :key="index">
                <h3 class="medium">
                    <img :src="item.pic" alt="">
                </h3>
                </el-carousel-item>
            </el-carousel>
         </template>
      </div>
      <!-- 合照 -->
      <div class="merge">
          <div class="merge-top">一起走过所有的痕迹</div>
          <!-- 第一排 -->
          <ul class="listOne" :class="listShow1==1?'listShowa':''"> 
              <li @mousemove='changeTwo(index)' v-for="(item,index) in listPic" :key="index" @mouseleave="hideOne()">
                  <img :src='item.pic' alt="">
                  <p>《世界旅拍》</p>
                   <el-collapse-transition> 
                      <div class="flag" v-show='show3==index'>
                           <p></p>
                           <span>{{item.express}}</span>
                       </div>
                   </el-collapse-transition>
              </li>
          </ul>
          <!-- 第二排 -->
           <ul class="listTwo"  :class="listShow2==1?'listShowb':''">
              <li @mousemove='changeOne(index)' v-for="(item,index) in listPic1" :key="index" @mouseleave="hideTwo()">
                <img :src='item.pic' alt="">
                  <p>《世界旅拍》</p>
                   <el-collapse-transition> 
                      <div class="flag" v-show='show2==index'>
                           <p></p>
                          <span>{{item.express}}</span>
                       </div>
                   </el-collapse-transition>
              </li>
          </ul>
          <!-- 第三排 -->
           <ul class="listThree"  :class="listShow3==1?'listShowc':''">
              <li @mousemove='changeThree(index)' v-for="(item,index) in listPic2" :key="index" @mouseleave="hideThree()">
                 <img :src='item.pic' alt="">
                  <p>《世界旅拍》</p>
                   <el-collapse-transition> 
                      <div class="flag" v-show='show1==index'>
                           <p></p>
                           <span>{{item.express}}</span>
                       </div>
                   </el-collapse-transition>
              </li>
          </ul>
          <!-- 第四排 -->
           <ul class="listFour"  :class="listShow4==1?'listShowd':''">
              <li @mousemove='changeFour(index)' v-for="(item,index) in listPic4" :key="index" @mouseleave="hideFour()">
                 <img :src='item.pic' alt="">
                  <p>《世界旅拍》</p>
                   <el-collapse-transition> 
                      <div class="flag" v-show='show4==index'>
                           <p></p>
                           <span>{{item.express}}</span>
                       </div>
                   </el-collapse-transition>
              </li>
          </ul>
      </div>
      <!--旋转木马-->
      <div class="que">鹊桥仙</div>
      <div class="horse"  @mousemove="showed()" @mouseleave="hides()">
          <div class="left">
              <ul>
                  <li>纤云弄巧</li>
                  <li>飞星传恨</li>
                  <li>银汉迢迢暗度</li>
                  <li>金风玉露一相逢</li>
                  <li>便胜却人间无数</li>
              </ul>
          </div>
          <div class="wrapper" >
          <transtion-group appear tag="ul" mode="out-in">
              <li v-for="(item,index) in post" :style="config[index]" :key="item.id" @click="changes(index)" @mouseenter="stop()" @mouseleave="step()">
                  <img :src="item.url" alt="" class="ppp" >
              </li>
          </transtion-group>
          <div class="aaa" :class="showFlags==true?'aab':''">
              <div class="el-icon-arrow-left btn" @click="changeLeft()"></div>
              <div class="el-icon-arrow-right btn" @click="changeRight()"></div>
          </div>
      </div>
       <div class="right">
              <ul>
                  <li>柔情似水</li>
                  <li>佳期如梦</li>
                  <li>忍顾鹊桥归路</li>
                  <li>两情若是久长时</li>
                  <li>又岂在朝朝暮暮</li>
              </ul>
          </div>
      </div>
      <!-- tab切换 -->
      <div class="tab-topic">这些年，我们一起走过的城市</div>
      <div class="tab">
          <ul>
              <li v-for="(item,index) in listPlace" :key="index" @click="tabc(index)" :class="tabshow==index?'tabShow':''">{{item.title}}</li>
          </ul>
          <div class="tab-text">
              <div v-for="(item,index) in listText" :key="index" v-show="index==tabshow">{{item.text}}</div>
          </div>
      </div>
      <!-- 尾部 -->
      <div class="foot">
          <div class="center">
              <div class="center-top">
                   <p>皇后娘娘，让我给你唱首歌吧！</p>
                   <img src="../../static/images/wd/local-smail.png" alt="">
              </div>
              <div class="center-topic">《有何不可》</div>
              <div class="center-last">
                为你唱这首歌
				没有什么风格
				它仅仅代表着
				我想给你快乐
				为你解冻冰河
				为你做一只扑火的飞蛾
				没有什么事情是不值得
				为你唱这首歌
				没有什么风格
				它仅仅代表着
				我希望你快乐
				为你辗转反侧
				为你放弃世界有何不可
				夏末秋凉里带一点温热
				为你解冻冰河
				为你做一只扑火的飞蛾
				没有什么事情是不值得
				为你唱这首歌
				没有什么风格
				它仅仅代表着
				我希望你快乐
				为你辗转反侧
				为你放弃世界有何不可
				夏末秋凉里带一点温热
				有换季的颜色
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                showFlags:false,//显示与隐藏
                time:'',//定时器
                listShow1:'',
                listShow2:'',
                listShow3:'',
                listShow4:'',
                show3:0,
                show1:9,
                show2:9,
                show4:9,
                tabshow:0,
                list:[{title:'小肥猪',text:'怪我对你太惯了，带你走上了吃货的道路，如果上天再给我一次机会，我还是要带你走上吃货的道路'},
                      {title:'小绵羊',text:'遥想当年，你是如此的温柔，犹如那小绵羊一样，让我情不自禁的就想给你一巴掌'},
                      {title:'母老虎',text:'时光一去不复返，经过我四年精心的鄙视殴打，你终于从小绵羊变成了母老虎'},
                      {title:'小乌龟',text:'一起走过四年，时间飞速流逝，而你做事的速度还是如乌龟那样缓慢，你是这条街上最靓的龟'},
                      {title:'好老婆',text:'四年时间的相处，不管你哪里变了，哪里没变，我依然坚信你是我一生中最好的那个人，也是我以后的好老婆'}],
                showFlag:9,
                listPic:[{pic:require('../../static/images/wd/a1.jpeg'),express:'爱意永恒'},
                         {pic:require('../../static/images/wd/a5.jpeg'),express:'豆蔻夏时'},
                         {pic:require('../../static/images/wd/a3.jpeg'),express:'彼年素光'},
                         {pic:require('../../static/images/wd/a4.jpeg'),express:'碧波荡漾'}],
                listPic1:[{pic:require('../../static/images/wd/a6.jpeg'),express:'爱的誓言'},
                         {pic:require('../../static/images/wd/a7.jpeg'),express:'告白气球'},
                         {pic:require('../../static/images/wd/a13.jpeg'),express:'暮色恋歌'},
                         {pic:require('../../static/images/wd/a14.jpeg'),express:'日光倾城'}],
                listPic2:[{pic:require('../../static/images/wd/a11.jpeg'),express:'情定终身'},
                         {pic:require('../../static/images/wd/a12.jpeg'),express:'微笑倾城'},
                         {pic:require('../../static/images/wd/a9.jpeg'),express:'魂牵梦绕'},
                         {pic:require('../../static/images/wd/a10.jpeg'),express:'相濡以沫'}],
                 listPic4:[{pic:require('../../static/images/wd/a15.jpeg'),express:'情比金坚'},
                         {pic:require('../../static/images/wd/a45.jpeg'),express:'情真意切'},
                         {pic:require('../../static/images/wd/a17.jpeg'),express:'爱情告白'},
                         {pic:require('../../static/images/wd/a18.jpeg'),express:'三生三世'}],
                listPic3:[{pic:require('../../static/images/wd/a25.png')},
                         {pic:require('../../static/images/wd/a28.png')},
                         {pic:require('../../static/images/wd/a26.jpg')},
                         {pic:require('../../static/images/wd/a27.png')}],
                listPlace:[{title:'合肥'},{title:'全椒'},{title:'巢湖'},{title:'南京'},{title:'北京'},{title:'蚌埠'},{title:'马鞍山'}],
                listText:[{text:'合肥——我们相遇相识的地方，是我们一生中最浪漫的校园时光，在那里，我们不用思考其他因素，可以散步，可以游玩，无拘无束，放飞自我，犹如天空的鸟儿一般可以自由翱翔'},
                          {text:'全椒——你的老家，大学几年，每年过年，我都会跟车或者开车到那里与你相约，那是甜甜的，犹如尝了一口蜂蜜一样，到现在，你的家人也认识了我，可以想什么时候就什么时候去你的老家'},
                          {text:'巢湖——我的老家，遥想当年，每次都以去巢湖游玩或者吃好吃的把你骗去我家，不得不说，必果然还是太年轻，太好吃，吃货非你莫属。嘿嘿嘿......'},
                          {text:'南京——我们如今工作的地方，在这里，我们品尝到了生活的酸甜苦辣与油盐酱醋，在这里，我们从学生像社会人转变，在这里，我们褪去一丝丝稚嫩，在这里我们得到了成长，最后，在这里，我们都长胖了。'},
                          {text:'北京——我们所去的最远的城市，我们在那里游玩，在那里实习，尽管在一起有很多次的争吵，但还是我们必不可少的回忆，那时，是你最美最瘦的时候，现在呀，成小肥猪咯！'},
                          {text:'蚌埠——这个城市的经历让人印象深刻，因为那时下了大雪，冒着大雪，第一次乘坐高铁去那里和你度过一天，那次的宾馆，空调不给力，有点儿小冷。'},
                          {text:'马鞍山——和你一起第一次相见你的闺蜜，从那刻起，我认识了你的好闺蜜——刘林阳，那一晚，孤独一人住宾馆，晚上有点寂寞空虚冷，所以以后和你闺蜜出去玩，一定要带着她的小男友——陆勤胜。'}],
                           config:[
                    {
          position: "absolute",
          width: "350px",
          height: "500px",
          top: "60px",
          left: "90px",
          opacity: 0.2,
          zIndex: 2,
          transition: "1s"
        },
        {
          position: "absolute",
          width: "350px",
          height: "500px",
          top: "30px",
          left: "180px",
          opacity: 0.8,
          zIndex: 3,
          transition: "1s"
        },
         {
          position: "absolute",
          width: "350px",
          height: "500px",
          top: "0px",
          left: "50%",
          marginLeft:'-150px',
          opacity: 1,
          zIndex: 4,
          transition: "1s"
        },
        {
          position: "absolute",
          width: "350px",
          height: "500px",
          top: "30px",
          right: "180px",
          opacity: 0.8,
          zIndex: 3,
          transition: "1s"
        },
        {
          position: "absolute",
          width: "350px",
          height: "500px",
          top: "60px",
          right: "90px",
          opacity: 0.2,
          zIndex: 2,
          transition: "1s"
        }
                ],
         post:[       {id:'1',url:require('../../static/images/wd/q5.jpg')},
                      {id:'2',url:require('../../static/images/wd/q1.jpg')},
                      {id:'3',url:require('../../static/images/wd/q2.jpg')},
                      {id:'4',url:require('../../static/images/wd/q4.jpg')},
                      {id:'5',url:require('../../static/images/wd/q3.jpg')}],
               
            }
        },
        methods:{
            change:function(index){
                this.showFlag=index
            },
            hide:function(){
                this.showFlag=9
            },
            hideOne:function(){
                this.show3=9
            },
             hideTwo:function(){
                this.show2=9
            },
             hideThree:function(){
                this.show1=9
            },
            hideFour:function(){
                this.show4=9
            },
            changeTwo:function(index){
                this.show3=index
            },
             changeOne:function(index){
                this.show2=index
            },
             changeThree:function(index){
                this.show1=index
            },
            changeFour:function(index){
                this.show4=index
            },
            tabc:function(index){
                this.tabshow=index
            },
            // 监听滚动事件
            menu(){
               this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
               (this.scroll>=100)&&(this.listShow1=1);
               (this.scroll>=820)&&(this.listShow2=1);
               (this.scroll>=1470)&&(this.listShow3=1);
               (this.scroll>=2150)&&(this.listShow4=1);
            },
             changeLeft(){
                 this.config.push(this.config.shift());
            },
            changeRight(){
                this.config.unshift(this.config.pop());
            },
            changes(index){
                for(var t=0;t<this.config.length;t++){
				if(this.config[index].zIndex==4){
					break
				}else{
					this.config.push(this.config.shift())
				}
			}
            },
             showed(){
                 this.showFlags=true
            },
            hides(){
                this.showFlags=false
            },
            stop(){
                clearInterval(this.time)
            },
            step(){
                 this.time=setInterval(()=>{
                     this.config.unshift(this.config.pop());
                 },2000)
            },
        },
        mounted(){
            window.addEventListener('scroll', this.menu)
        }
    }
</script>

<style lang="less" scoped>

</style>