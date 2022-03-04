<template>
    <div class="wd">
      <!-- <div class="wy-sub"> -->
          <!-- 激活申请 -->
          <!-- <div class="apply">
              <div class="apply-left">{{$t('submission.applya')}}</div>
              <div class="apply-right">{{$t('submission.applyb')}}</div>
          </div> -->
          <!-- 温馨提示 -->
          <!-- <div class="tips">
              <div class="tips-center">
                  <ul>
                      <li>{{$t('submission.applyc')}}</li>
                      <li>{{$t('submission.applyd')}}</li>
                      <li>{{$t('submission.applye')}}</li>
                      <li>{{$t('submission.applyf')}}</li>
                      <li>{{$t('submission.applyg')}}</li>
                      <li>{{$t('submission.applyh')}}</li>
                  </ul>
              </div>
          </div> -->
          <!-- 重点 -->
          <!-- <div class="import">
              <div class="import-first">{{$t('submission.applyi')}}</div>
              <div class="import-second">{{$t('submission.applyj')}}</div>
              <div class="import-third">{{$t('submission.applyk')}}</div>
              <div class="import-fourth">
                  <p>{{$t('submission.applyl')}}<span>{{$t('submission.applym')}}</span></p>
              </div>
              <div class="import-last">
                  <ul>
                      <li>{{$t('submission.applyn')}}</li>
                      <li>{{$t('submission.applyo')}}</li>
                      <li>{{$t('submission.applyp')}}</li>
                      <li>{{$t('submission.applyq')}}</li>
                  </ul>
              </div>
          </div>
      </div>
      <recommend :kk='meg'></recommend> -->
      <!--旋转木马-->
     1111111111
    </div>
</template>

<script>
    export default {
        components:{
             recommend: () => import('@/components/recommend'),
        },
        methods:{
            changeLeft(){
                 this.config.push(this.config.shift());
            },
            changeRight(){
                this.config.unshift(this.config.pop());
            },
            change(index){
                for(var t=0;t<this.config.length;t++){
				if(this.config[index].zIndex==4){
					break
				}else{
					this.config.push(this.config.shift())
				}
			}
            },
        
            // stop(){
            //     clearInterval(this.time)
            // },
            // step(){
            //      this.time=setInterval(()=>{
            //          this.config.unshift(this.config.pop());
            //      },2000)
            // },
            showed(){
                 this.showFlag=true
            },
            hide(){
                this.showFlag=false
            }
        },
        data(){
            return{
                showFlag:false,//显示与隐藏
                time:'',//定时器
                show:'',
                meg:{
                    code:'BHTU',//推荐码
                    url:'http:www.naidu.com',//推荐链接
                    dollar:'19',//低至多少钱
                    cost:'10'//得多少话费
                },
                post:[{id:'1',url:'../../static/images/a1.jpg'},
                      {id:'2',url:'../../static/images/a2.jpg'},
                      {id:'3',url:'../../static/images/a3.jpg'},
                      {id:'4',url:'../../static/images/a4.jpg'},
                      {id:'5',url:'../../static/images/a5.jpg'}],
                //图片配置
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
                ]
            }
        }
    }
</script>

<style lang="less" scoped>

</style>