<template>
  <div class="about">
    <h1>首页   全新楼盘</h1>
  </div>
</template>
<script>
import Qpe from './ Qpe.vue'
  export default {
    data(){
      return {
        state:[]
      }
    },
    components:{
      Qpe
    },
   watch:{
     '$route'(){
       this.$http.post('http://localhost:3000',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
     }
   },
    created(){
      this.$http.post('http://localhost:3000',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
    }
  }
</script>