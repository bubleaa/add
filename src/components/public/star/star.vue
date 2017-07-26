<template>
    <div class="star-container">
        <span class="star-item" v-for="(item,index) in starlist" v-bind:class="item"></span>
        <em class="star-num">{{score}}</em>
    </div>
</template>

<script>
    export default{
        props:{
            score:{
                type:[Number,String],
                default:0
            },
            star:{
                type:[Number,String],
                default:0
            }
        },
        computed:{
            starlist:function(){
                /*要显示的星星的数量*/
                var showLen = this.star;
                /*星星的配置*/
                var starLen = 5,
                    show_class = "star",
                    none_class = "none";
                
                /*用来保存结果的数组*/
                var result = [];

                for(var i = 0;i<showLen;i++){
                    result.push(show_class);
                }

                while(result.length < starLen){
                    result.push(none_class);
                }
                return result;
            }
        }
    }
</script>

<style scoped>
.star-container{
    font-size:0px;
}
.star-container .star-item{
    margin-right:1px;
    display:inline-block;
    width:0.512rem;
    height:0.512rem;
    background-repeat:no-repeat;
    background-size:0.512rem;
}
.star-container .star-item.star{
    background-image:url('./icons/star.png');
}
.star-container .star-item.none{
    background-image:url('./icons/none-star.png');
}
.star-container .star-num{
    padding-left:0.201rem;
    font-size:0.512rem;
    color:#44557d;
}
</style>