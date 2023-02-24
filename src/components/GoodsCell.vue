<template>
    <li class="listItem" v-on:click.stop="toDetail(goodsItem.url)">
        <aside>
            <h2>{{ goodsItem.title }}</h2>
            <p class="authorInf">
                <span class='date'>{{ goodsItem.date }}</span>
                <span class="authorInf">&nbsp;&nbsp;{{ goodsItem.author_name }}</span>
            </p>
        </aside>
        <aside>
            <img :src="goodsItem.imgURL">
        </aside>
    </li>
</template>
   
<script>
export default {
    name: 'GoodsCell',
    props: {
        goodsItem: Object
    },
    data() {
        return {}
    },
    methods: {
        toDetail: function (data) {
            console.log("toDetail:", data)

            // this.$router.replace('/goods')
            window.location.href = data
        }
    }
}
</script>
   
<style scoped>
.listItem {
    width: 100%-0.8rem;
    font-size: 0.6rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 0.4rem;
    border-top: 1px solid #eaeaea;
    padding: .5rem;
    text-align: left;


}

.listItem aside:first-child {
    padding-right: .5rem;
}

.date {
    color: #999;
}

.authorInf {
    font-size: 0.6rem;
}

aside>img {
    border-radius: .2rem;
    height: 40px;
    /* line-height: 38px; */
    /* text-indent: 30px; */
}
</style>