<template>
  <div class="home">
    
    
    <ul class="ul">
      <li><img src="../assets/1.jpg.jpg"></li>
      <li><img src="../assets/3.jpg.jpg"></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
}
home{
  width: auto;
  height: auto;
}
ul li img{
  width: 1280px;
    min-height: 200px;
    max-width: 100%
    
    
}
 li img{
 width: auto;
  height: auto;
}


</style>
