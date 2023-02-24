<template>
    <div class="recommend">
        <h2>推荐</h2>
        <ul class="ul" v-for="(item, key) in recommendList">
            <goods-cell :goodsItem="item" :key="key"></goods-cell>
        </ul>
    </div>
</template>

<script>


import api from "../axios/api.js"
import GoodsCell from './GoodsCell.vue'
export default {
    name: "recommend",
    data() {
        return {
            recommendList: []
        }
    },
    components: {
        GoodsCell
    },
    created() {
        this.setNewApi();
    },
    methods: {
        setNewApi: function () {
            api.JH_news('/recommends', 'type=top&key=123456')
                .then(res => {
                    console.log("recommends:", res);
                    this.recommendList = res.articles;
                })
        }
    }
}
</script>

<style scoped>
.topNav {
    width: 100%;
    background: #ED4040;
    position: fixed;
    top: 0rem;
    left: 0;
    z-index: 10;
}

.simpleNav {
    width: 100%;
    line-height: 1rem;
    overflow: hidden;
    overflow-x: auto;
    text-align: center;
    font-size: 0;
    font-family: '微软雅黑';
    white-space: nowrap;
}

.simpleNav::-webkit-scrollbar {
    height: 0px
}

.simpleNavBar {
    display: inline-block;
    width: 1.2rem;
    color: #fff;
    font-size: 0.3rem;
}

.navActive {
    color: #000;
    border-bottom: 0.05rem solid #000;
}

.placeholder {
    width: 100%;
    height: 1rem;
}

.ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}

.recommend {
    margin-top: 40px;
    margin-bottom: 40px;
}
</style>