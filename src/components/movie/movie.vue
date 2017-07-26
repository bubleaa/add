<template>
<div>

   
   <my-head v-bind:title="ms"></my-head>
  <my-search v-bind:placeholder="'变形金钢5、喜洋洋'" ></my-search>
   <my-bodyA v-bind:srca="'v2/movie/in_theaters'"></my-bodyA>
   <my-bodyA v-bind:srca="'v2/movie/coming_soon'"></my-bodyA>
   <my-bodyA v-bind:srca="'v2/movie/top250'"></my-bodyA>
   
</div>

</template>
<script>
import head from '../public/head/head.vue';

import search from '../public/search/search.vue';
import bodyA from '../public/body/bodyA.vue';


    export default{
        name:'movie',
        data(){
            return{
                ms:'首页'
            }
        },
        components:{
            'my-head':head,
            
            'my-search':search,
             'my-bodyA':bodyA
       }
    }
</script>
