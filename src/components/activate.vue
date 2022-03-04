<template>
  <div>
    <!-- 头部 -->
    <the-head></the-head>
    <!-- 切换按钮 -->
    <div class="btn">
      <el-button-group>
        <el-button type="primary" @click="tabC">中文</el-button>
        <el-button type="primary" @click="tabE">English</el-button>
      </el-button-group> 
    </div>
    <div class="wy-box">
      <!-- 首行文字说明 -->
      <div class="top">{{$t('activate.home')}}</div>
      <!-- 激活信息填写 -->
      <div class="center">
        <div class="center-left"></div>
        <div class="center-right">
          <div class="center-right-top">{{$t('activate.ms')}}</div>
          <div class="center-right-center">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              
              class="demo-ruleForm"
            >
              <el-form-item  prop="pass">
                <el-input type="text" v-model="ruleForm.pass" autocomplete="off" :placeholder="$t('activate.id')"></el-input>
              </el-form-item>
              <el-form-item  prop="checkPass">
                <el-input type="text" v-model="ruleForm.checkPass" autocomplete="off" :placeholder="$t('activate.acti')"></el-input>
              </el-form-item>
             
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" class="sub">{{$t('activate.next')}}</el-button>
               
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="navgie"></div>
   <the-footer></the-footer>
  </div>
</template>

<script>
export default {
   components: {
    theFooter: () => import('@/components/bottom'),
    theHead:()=>import('@/components/head')
  },
  data() {
      return{
          ruleForm: {
          pass: '',
          checkPass: '',
        },
         rules: {
          pass: [
            {required: true, message: "请输入ICCID", trigger: ["blur","change"] }
          ],
          checkPass: [
            {required: true, message: "请输入激活码", trigger: ["blur","change"] }
          ]
        }
      }
  },
  mounted() {
   
  },
  methods: {
      tabC:function () {
       this.$i18n.locale = 'zh'
     },
      tabE:function () {
       this.$i18n.locale = 'en'
     },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>

<style lang="less" scoped>
</style>