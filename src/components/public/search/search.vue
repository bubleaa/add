<template>
    <div class="search-container">
        <input type="text" class="search-edit" v-model="searchval" v-bind:placeholder="placeholder" @keydown.enter="gotoSearch"  />
        <a href="javascript:void(0)" class="close-btn" v-show="searchval.length != 0 && clear" @click="clearVal"></a>
    </div>
</template>
<script>

    export default{
        data(){
            return {
                searchval:''
            }
        },
 created(){
 

 },
 methods:{
            clearVal(){
                this.searchval = '';
            },
            gotoSearch(){
            var tiem=new Date().getTime();


            this.$router.push({path:'/shou',query:{text:this.searchval,t:tiem}});
        }

        },
        props:{
            clear:{
                type:[Boolean],
                default:false
            },
            placeholder:{
                type:[String],
                default:'请输入想搜索的内容'
            }
        }
    }

</script>
<style scoped>
    .search-container{
        position:relative;
        width:100%;
        height:1.706rem;
    }
    .search-container .close-btn{
        display:block;
        position:absolute;
        right:0.426rem;
        top:50%;
        margin-top:-0.4rem;
        height:0.8rem;
        width:0.8rem;
        background-image:url('./icons/close-icon.png');
         background-repeat:no-repeat;
        background-size:0.8rem; 
    }
    .search-container:before{
        content:"";
        display:block;
        position:absolute;
        z-index:10;
        left:0.426rem;
        top:30%;
      
        width:1rem;
        height:1rem;
        background-image:url('./icons/search.png');
        background-repeat:no-repeat;
        background-size:0.8rem; 

    }
    .search-edit{
        box-sizing:border-box;
        display:block;
        padding-left:2.346rem;
        width:100%;
        height:1.706rem;
        border:none;
        background-color:#f2f2f2;
        font-size:0.64rem;
        line-height:1.706rem;
        color:#777;
    }
</style>