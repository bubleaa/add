<template>
    <div class="wrap-container">
        <my-headr v-bind:title="'电影详情'" v-bind:back="true"></my-headr>
        <div class="info-container">
            <div class="back-img">
                <img :src="info.images.large" v-if="info">
            </div>
            <div class="banner-img">
                <img :src="info.images.large" v-if="info">
            </div>
            <div class="name">{{info.title}}</div>
            <div class="year">{{info.year}}·{{info.countries}}</div>
            <div class="status">
                <span>{{info.wish_count}}</span>
                <em>人喜欢</em>
                <span>{{info.ratings_count}}</span>
                <em>条评论</em>
            </div>
        </div>
        <div class="infolist-container">
            <div class="name">{{info.original_title}}</div>
            <div class="info">
                <ul>
                    <li class="info-item">
                        <em>评分</em>
                        <span>{{info.rating.average}}</span>
                    </li>
                    <li class="info-item">
                        <em>导演</em>
                        <span>{{info.directors[0].name}}</span>
                    </li>
                    <li class="info-item">
                        <em>影人</em>
                        <span>
                            <span v-for="(item,index) in info.casts">{{item.name}}<i v-show="index != info.casts.length -1">/</i></span>
                        </span>
                    </li>
                     <li class="info-item">
                        <em>类型</em>
                        <span>
                             <span v-for="(item,index) in info.genres">{{item}}<i v-show="index != info.genres.length -1">、</i></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-container">
            <div class="caption">
                剧情介绍
            </div>
            <div class="content">
                <P>{{info.summary}}</P>
            </div>
        </div>
        <div class="caa">
             <div class="caa-div">
                演员列表
            </div>
            <ul class="caa-ul .clearfix ">
                <li class="caa-li" v-for="(a,b) in info.casts">
                   <img :src="a.avatars.large" alt=""> 
                   <p>{{a.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

    /*引入头部组件*/
    import headr from '../public/head/head.vue';

    /*引入ajax库*/
    import axios from 'axios';

    export default {
        data(){
            return {
                info:{}
            }
        },
        components:{
             "my-headr":headr
        },
        created(){
            var id = this.$route.query.movieid;
            this.getData(id);
        },
        methods:{
            getData(id){
                var self = this;
                axios.get('/base/v2/movie/subject/'+id+'')
                .then(function (res) {
                   console.log(res)
                   self.info = res.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
<style scoped>
.wrap-container{
    width:16rem;
}
.info-container{
    position:relative;
    padding:0 0.826rem;
    height:6.826rem;
    color:#fff;
}
.info-container .banner-img{
    position:absolute;
    right:0.826rem;
    bottom:-1.706rem;
    z-index:10;
    width:3.733rem;
    height:5.12rem;
}
.info-container .banner-img img{
    display:block;
    width:3.733rem;
    height:5.12rem;
}
.info-container .back-img{
    overflow:hidden;
    position:absolute;
    z-index:-1; 
    left:0;
    top:0;
    width:100%;
    height:6.826rem;
}
.info-container .back-img img{
    display:block;
    width:100%;
    filter: blur(8px);
}
.info-container .name{
    height:3.029rem;
    font-size:0.768rem;
    line-height:3.029rem;
    font-weight:bold;
}
.info-container .year{
    height: 2.176rem;
    font-size:0.597rem;
}
.info-container .status{
    font-size:0.512rem;
}
.info-container .status span{
    color:#ef1647;
}
.info-container .status em{
    padding:0 0.853rem;
    color:#666666;
}
.infolist-container,.text-container{
    padding:0 0.826rem 1.28rem;
    border-bottom:1px solid #d9d9d9; 
    font-size:0.512rem;
}
.infolist-container .name{
    height:2.474rem;
    line-height:2.474rem;
    font-weight:600;
    color:#666666;

}
.infolist-container .info-item{
    padding-bottom:0.682rem;
}
.infolist-container .info-item em{
    color:#999;
    padding-right:0.682rem;
}
.infolist-container .info-item span{
    color:#676767;
}
.text-container .caption{
    height:2.346rem;
    line-height:2.346rem;
    color:#9f9f9f;
}
.text-container .content{
    line-height:0.938rem;
    text-align:justify;
    color:#666666;
}
.caa{
    overflow: hidden;
}
.caa-ul{
   overflow:auto ;
}
.caa-div{
    font-size:0.401rem ; color:#d9d9d9 ;
    padding: 0.301rem;
}
.caa-li{font-size:0.301rem ;text-align: center;
 float:left; margin-left:0.201rem ;
}
.caa-li>img{
 width:3rem ;
 height: 4rem;

}
</style>