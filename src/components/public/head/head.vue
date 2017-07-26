<template>
    <div class="header-container"
     v-on:click="goToback"
     v-bind:class="{arrow:back}">
        {{title}}
    </div>
</template>
<script>
    export default{
        props:{
            title:{
                type:[String],
                required:true
            },
            back:{
                type:[Boolean],
                default:false
            }
        },
        methods:{
            goToback:function(){
                /*查看是否头部启用了返回功能*/
                var isBack = this.back;
                if(isBack){
                    this.$router.go(-1);
                }

            }
        }
    }
</script>
<style scoped>
.header-container{
    width:100%;
    height:1.806rem;
    background-color:#405f80;
    font-size:0.725rem;
    line-height: 1.806rem;
    text-align:center;
    color:#fff;
}
.header-container.arrow{
    background-image:url('./icons/arrow-icon.png');
    background-repeat:no-repeat;
    background-position:0.853rem center;
    background-size:0.426rem 0.81rem;
}
</style>