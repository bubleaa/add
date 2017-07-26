<template>
    <div class="head-div">
        {{txt}}
    </div>

</template>
<script>
export default{
    props:{
        txt:[String],
        required:true
    }
}


</script>
<style scoped>
    .head-div{
         width:100%;
         height: 1.8rem;
         background-color: #f8f8f8;
         border: 1px solid #000000;
         line-height: 1.4rem;
         text-align: center;
         color: #666;
         font-size: 0.8rem;   
    }
</style>