<template>
    <div class="goods">
        <h1>{{ title }}</h1>
        <article>{{ goodsData }}</article>
    </div>
</template>

<script>
import api from "./../axios/api.js"
export default {
    name: "Goods",
    data() {
        return {
            title: "titelxxxxxxxxxxxx",
            goodsData: "goodsDatasssss"
        }
    },
    created() {
        this.getgoodsDetail();
    },
    methods: {
        getgoodsDetail: function () {
            api.JH_news('/goods', 'type=top&key=123456')
                .then(res => {
                    console.log(res);
                    this.title = res.title;
                    this.goodsData = res.goodss;
                })
        }
    }

}
</script>

<style>
.goods {
    margin-top: 40px;
    margin-bottom: 40px;
}
</style>