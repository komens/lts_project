<template>
    <mdb-container fluid>
        <mdb-row class="Tool-wrapper">
            <mdb-col col="sm-5" class="btn-group">
                <mdb-btn-group size="sm">
                    <mdb-btn color="grey darken-1" class="btn-border"
                        :active="index == activeIndex"
                         v-for="(tool,index) in currentTools" 
                         :key="index" 
                         @click="toolsClickHandle(index)">{{tool}}</mdb-btn>
                </mdb-btn-group>
            </mdb-col>
            <mdb-col col="sm-3" class="text-truncate text-monospace tool-Title"><p>{{toolTitle}}</p></mdb-col>
            <mdb-col col="sm-4"><p class="float-left" @click="userLogin(true)"><span class="iconfont"><img class="img-fluid" src="../assets/images/user.svg" alt=""></span> list-super</p><p class="float-right">v1.011</p></mdb-col>
        </mdb-row>
        <p v-show="false">{{CurrentRoute}}</p>

        <!-- 用户登录 -->
        <user-login :login="isShowLogin" @isLogin="userLogin(false)" />
  </mdb-container>
</template>

<script>
import UserLogin from './Settings/UserLogin';
import { mdbContainer, mdbRow, mdbCol,mdbBtn,mdbIcon,mdbBtnGroup } from 'mdbvue';
export default {
  name: "ToolList",
  components:{
      mdbBtn,
      mdbIcon,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtnGroup,
      UserLogin
  },
  data(){
      return {
          currentTools:["L T S","控制"],
          tools:["插入","属性","位置","动画"],
          toolTitle: "当前编辑内容",
          activeIndex:0,
          isShowLogin:false,//是否显示登录界面
      }
  },
  methods:{
      toolsClickHandle:function(index){//导航
          switch(index) {
              case 0: {
                  this.$router.push('/');
                  break;
              }
              case 1: {
                  this.$router.push('/control');
                  break;
              }
              case 2: {
                  this.$router.push('/insert');
                  break;
              }
              case 3: {
                  this.$router.push('/attribute');
                  break;
              }
              case 4: {
                  this.$router.push('/position');
                  break;
              }
              case 5: {
                  this.$router.push('/animation');
                  break;
              }
          }
          this.activeIndex = index;
      },
      userLogin:function(val){//用户登录
        this.isShowLogin = val;
      }
  },
  computed:{
      //监听路由地址更新当前位置
        CurrentRoute:function(){
            switch(this.$route.path) {
                case '/':{this.activeIndex = 0; break;}
                case '/control':{this.activeIndex = 1; break;}
                case '/insert':{this.activeIndex = 2; break;}
                case '/attribute':{this.activeIndex = 3; break;}
                case '/position':{this.activeIndex = 4; break;}
                case '/animation':{this.activeIndex = 5; break;}
            }
            return this.$route.path;
        },
        isCreated:function(){
            return this.$store.state.isCreated;
        }
    },
     watch:{
        isCreated:function(){
            if(this.isCreated) {
                this.currentTools = this.currentTools.concat(this.tools);
            }
        }
    }
}
</script>

<style lang="less">
@import url('../assets/css/globalStyle.less');
p{
    margin: 0;
    padding: 0;
}
.Tool-wrapper {
    min-height: 1.7rem;
    background: #616161;
    color: #fff;
    .float-left {
        cursor: pointer;
        span {
            display: inline-block;
            width: 1.3rem;
        }
    }
}
.Tool-wrapper .tool-Title {
    color: #ffbb33;
}
.btn-group {
    height: 1.7rem;
    margin: 0;
    padding: 0;
}
.Tool-wrapper  .btn-border {
    .btn-hover
}

</style>

