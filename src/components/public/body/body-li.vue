<template>

        <div class="div-img">
             <router-link v-bind:to="{path:'/movieA',query:{movieid:imgx.id}}">
            <img :src="imgx.images.large" :alt="imgx.id">
            </router-link>
            <p class="div-p1" >{{imgx.title}}</p>
            <p class="div-p">
                <span v-for="(itme,index) in [{},{},{},{},{}]" v-bind:class="{atr:index*2<sp}" ></span>
     {{sp}}
                 
              </p>
              </router-link >
        </div>
 
       


</template>
<script>


export default{
    data(){
       return{
        
        sp:0
        
       } 
    },
   //imgx.rating.average
   created(){
 this.sp=this.imgx.rating.average


   },

 props:{
     imgx:{
         type:[Object],
         required:true

     }
 }


}

</script>
<style scopes>

.div-img{
   float: left; 
    margin-left:0.601rem ;
    width:3rem;
   text-align:center; 
   font-size: 0.201rem;
   height:6rem ;
}
.div-img img{
    width:3rem;
     height:4rem ;
}
.div-p1{
    padding-top: 0.3rem;
     height:0.51rem ;
  
   font-size:0.212rem; 
}
.div-p>span{
  display: block ;
  float: left;
  width: 0.401rem;
  height: 0.401rem;
  margin-right: 0.101rem;
  background-image:url('./icons/none-star.png') ;
  background-size:0.401rem ;
}
.div-p .atr{
    background-image:url('./icons/star.png') ;
}
.div-p{
    line-height:0.401rem ;
}
</style>