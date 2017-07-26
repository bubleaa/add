<template>
    <div class="body">
        
        <div class="div_hade">
            <h6>{{imgA.title}}</h6>
        </div>
       <div class="div-body clearfix">
        <my-body-li v-for="(a,b) in imgA.subjects" v-bind:imgx="a"></my-body-li>
       </div>
       
    </div>
</template>
<script>
import axios from 'axios';
import body_li from "../body/body-li" ;
    export default{
       components:{
           "my-body-li":body_li
       },
    data(){
        return{
         imgA:[]
         

        }
    },
  created(){
  
  this.getmeida(this.srca);
  },
methods:{
getmeida:function(src){
    var _this = this;
 axios.get('/base/'+src)
.then(function (response) {

_this.imgA=response.data;

console.log(response);

})
.catch(function (error) {
   console.log(error); 
})
    }
}   ,
  props:{
      srca:{ 
          type:[String],
            required:true

          }
  }

    }
</script>
<style scoped>
.body{
    width:100%;
    
    
   padding:0 0.101rem ;
}
.div_hade{
 width:100%;
font-size:0.4rem ;
 padding:0 0.101rem ;
 color: #666;
 
}
.div-body{
    
    padding:0.101rem 0.501rem ;
     background-color:rgba(255, 255, 255, 0.5)
}
</style>