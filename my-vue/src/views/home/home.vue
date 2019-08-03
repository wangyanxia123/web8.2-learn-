<template>
  <div class="wrap">
   <div class="header" @click={{}}>
  
   <span> <i class="iconfont icon-dingwei"></i>
   送至：八维学校篮球场</span>
   <span class="iconfont icon-fangdajing"></span>
   <span class="iconfont icon-yonghu"></span>

   </div>
    
    <div class="main">
      <router-view></router-view>
    </div>

    <div class="footer">
      <router-link to="/home/peisong" tag="span">配送</router-link>
      <router-link to="/home/vip" tag="span">会员</router-link>
      <router-link to="/home/classify" tag="span">分类</router-link>
      <router-link to="/home/car" tag="span">购物车</router-link>
      <router-link to="/my" tag="span">我的</router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: "",
  data(){
    return{
    
    }
  },
  methods:{

  },
  components: {
 
  },
  
};
</script>

<style lang="scss" scoped>
 *{
   padding:0;
   margin:0;
   box-sizing: border-box;
 }

 .wrap{
   width:100%;
   height:100%;
   display:flex;
   flex-direction: column;
  .header{
    width:100%;
    height: 50px;
    line-height:50px;
    text-align:center;
    display:flex;
    justify-content:space-around;
    background:#eee;
}
   .main{
     flex:1
   }
   .footer{
     width:100%;
     height:50px;
     border-top:1px solid #ccc;
     display:flex;
     justify-content:space-around;
     align-items: center;
   }
 }

 



</style>

