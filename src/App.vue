<template>
  <div id="app">
    <transition name="scene">
       <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app{
  perspective:2000px;
-webkit-perspective:2000px;
}
.scene-enter{
  position:absolute;
  z-index:100;
  left:0;
  top:0;

  transform: translateX(-100%) 
}
.scene-enter-active,.scene-leave-active{
  transition:all 1s ;
}
.scene-leave-to{
  position:absolute;
  z-index:100;
  left:0;
  top:0;
  
	transform: translateX(100%)
}

</style>
