<template>
    <div>
      <div class="wy-recommend">
          <div class="recommend-center">
              <div class="top">
                  <p>{{$t('recommend.dollara')}}</p>
                  <span>{{$t('recommend.dollarb')}}</span>
              </div>
              <div class="next">
                  <p>{{$t('recommend.dollarc')}}<a href="">{{$t('recommend.dollard')}}</a></p>
              </div>
              <!-- 推荐码、 -->
              <div class="center">
                  <div class="center-top">
                      <div class="top-first">
                          <p>{{$t('recommend.dollare')}}</p>
                          <span>{{$t('recommend.dollarf')}}</span>
                      </div>
                    
                      <div class="top-last">
                          <p>{{kk.code}}</p>
                          <span  v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError"></span>
                      </div>
                  </div>
                  <!-- 推荐链接、 -->
                  <div class="center-next center-top">
                      <div class="top-first">
                          <p>{{$t('recommend.dollarg')}}</p>
                          <span>{{$t('recommend.dollarh')}}</span>
                      </div>
                    
                      <div class="top-last">
                          <p>{{kk.url}}</p>
                          <span  v-clipboard:copy="url" v-clipboard:success="onCopy" v-clipboard:error="onError"></span>
                      </div>
                  </div>
                  <!-- 推荐二维码 -->
                  <div class="center-bottom center-top">
                      <div class="top-first">
                          <p>{{$t('recommend.dollari')}}</p>
                          <span>{{$t('recommend.dollarj')}}</span>
                      </div>
                      <div class="wrapper"  ref="imageTofile" >
                           <img :src=" downloadData.htmlUrl" class="real"/>
                            <div class="last">
                                <div class="last-top">{{$t('recommend.dollark')}}<span>{{kk.dollar}}</span></div>
                                <div class="last-center">{{$t('recommend.dollarl')}}<span>{{kk.cost}}</span>{{$t('recommend.dollarr')}}</div>
                                <vue-qr :text="downloadData.url" :margin="12" colorDark="#000" colorLight="#fff" :dotScale="1" :logoScale="0.2" :size="150" :callback='canva' class="last-bottom"></vue-qr>
                            </div>
                      </div>
                  </div>
              </div>
              <!-- 鼠标右击 -->
              <div class="right-click">{{$t('recommend.dollarm')}}</div>
              <!-- 物流查询 -->
              <div class="look">
                  <p></p>
                  <span>{{$t('recommend.dollarn')}}</span>
                  <div>{{$t('recommend.dollaro')}}<a href="www.baidu.com">{{$t('recommend.dollarp')}}</a>{{$t('recommend.dollarq')}}</div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
   import Vue from 'vue'
   import VueClipboard from 'vue-clipboard2'
   import vueQr from 'vue-qr'
   import html2canvas from 'html2canvas'
   Vue.use(VueClipboard)
    export default {
        props:['kk'],
        name:'recommend',
        components:{
             vueQr,
             html2canvas
        },
        data(){
            return{
                downloadData: {
                url: 'https://www.baidu.com',  //需要转化成二维码的网址
                 //二维码中间的图片,可以不设置
                htmlUrl:''
                },
                show:true,  
            }
        },
        methods:{
            onCopy:function(e){
                 this.$message({
                    message: '复制成功',
                    type: 'success'
                });
            },
             onError:function(e){
                 this.$message({
                    message: '复制失败',
                    type: 'error'
                });
             },
             canva:function(){
                   this.$nextTick(()=>{
                      html2canvas(this.$refs.imageTofile, {
　　　　　                　backgroundColor: null,
                            scale:1
　　　　          }).then((canvas) => {
   
　　　　　　           let url = canvas.toDataURL('image/png');
　　　　　　           this.downloadData.htmlUrl = url;
                     
                       
　　　　　　            
　　　　})
                   })

             }
        }
    }
</script>

<style lang="less" scoped>

</style>