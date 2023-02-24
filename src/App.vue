<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">

    <RouterView />

    <header class="wrapper">
      <nav>
        <RouterLink class="tabs-item" to="/">首页</RouterLink>
        <RouterLink class="tabs-item" to="/mine">我的</RouterLink>
      </nav>
    </header>
  </div>
</template>

<style scoped> nav {
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   box-shadow: 0px -1px 1px #e6e6e6;
   background-color: #fff;
 }

 .tabs-item {
   padding: 5px 0;
   flex: 1;
   height: 40px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;

 }

 nav a.router-link-exact-active {
   color: var(--color-text);
 }

 nav a.router-link-exact-active:hover {
   background-color: transparent;
 }

 nav a {
   display: inline-block;
   padding: 0 1rem;
   border-left: 1px solid var(--color-border);
 }

 nav a:first-of-type {
   border: 0;
 }

 @media (min-width: 1024px) {
   header {
     display: flex;
     place-items: center;
     padding-right: calc(var(--section-gap) / 2);
   }

   header .wrapper {
     display: flex;
     place-items: flex-start;
     flex-wrap: wrap;
   }

   nav {
     text-align: left;
     margin-left: -1rem;
     font-size: 1rem;

     padding: 1rem 0;
     margin-top: 1rem;
   }
 }
</style> -->





<template>
  <div class="bottom">
    <div class="item" @click="clickItem('/')" :class="{ active: $route.path === '/' }">
      <img src="../assets/img/tabbar/home.jpeg" alt="">
      <p>首页</p>
    </div>

    <div class="item" @click="clickItem('/mine')" :class="{ active: $route.path === '/mine' }">
      <img src="../assets/img/tabbar/my.jpeg" alt="">
      <p>我的</p>
    </div>


  </div>
</template>
 
<script>


export default {
  name: "bottom",
  methods: {
    clickItem: function (path) {
      this.$router.push(path);
    }
  },
  data() {

  }

}
</script>
 
<style scoped>
/* @import "./../icon/iconfont.css"; */

.bottom {
  position: fixed;
  bottom: 0px;
  border-top: 1px solid #d2d2d2;
  background-color: #f2f2f2;
  width: 100%;
  height: 60px;
}

.item {
  margin: 10px 20%;
  float: left;
}

.item p {
  margin: 2px;
  font-size: 15px;
}

/* 
.item img {
  margin: 2px;
  height: 5px;
} */

.active {
  color: #108b70;
}
</style>
 