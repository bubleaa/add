<template>
 <div>
   <my-head v-bind:title="'搜索'" v-bind:back="true"></my-head>
  <my-search ></my-search>
   <div class="div-body">
        <my-body-li v-for="(a,b) in shouarr" v-bind:imgx="a"></my-body-li>
       </div>
</div>

</template>
<script>
import head from '../public/head/head.vue';
import search from '../public/search/search.vue';
import body_li from "../public/body/body-li.vue" ;
import axios from 'axios';
 export default{
      data(){
          return{
              shouarr:[],
               shoutext:''
          }
      },

      beforeRouteUpdate:function(to,from,next){
			
			 var _this = this;

            var val = this.$route.query.text;
            this.shoutext=val;
  this.getmeida(val,function(res){
               
                  _this.shouarr = res;
              
            });
				next();
              
			},

 created(){
  var _this = this;

            var val = this.$route.query.text;
            this.shoutext=val;
  this.getmeida(val,function(res){
               
                  _this.shouarr = res;
              
            });
   
  },
methods:{
getmeida:function(val,callback){
    var _this = this;
axios.get('/base/v2/movie/search', {
                    params: {
                        q:val
                    }
                })
.then(function (response) {
var movieData = response.data.subjects;
 callback && callback(movieData)

console.log(movieData);

})
.catch(function (error) {
   console.log(error); 
})
    }
}   ,

 components:{
            'my-head':head,
            'my-search':search,
            "my-body-li":body_li
       }
 }
</script>
<style scoped>
.div-body{
    
    padding:0.101rem 0.501rem ;
     background-color:rgba(255, 255, 255, 0.5)
}
</style>