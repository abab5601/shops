<template>
    <carouselImg />
    <br/>
    <img class="w-100" src="314893.jpg" alt="" style="margin: auto;display: block;max-width: 700px;">
    <div class="d-flex justify-content-center">
        <video muted autoplay src="/main.mp4" style="width: 100%; max-width: 500px;" controls></video>
    </div>
    <articleList></articleList>
    <br/>
    <productsList :name="item.name" :data="item.list" v-for="(item,index) in productsListdata" :key="item.name"/>
</template>
<script setup>
import carouselImg from "../components/carouselImg.vue";
import productsList from "../components/products/productsList.vue";
import articleList from "../components/article/articleList.vue"
import { ref } from "vue";
import ajax from "../ajax";
const productsListdata = ref([]);
var timestamp = new Date().getTime();
ajax('/productsList.json?'+timestamp, 'GET').then((require) => require.json()).then((json) => {
    productsListdata.value = json;
})
</script>