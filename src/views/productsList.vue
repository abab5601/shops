<template>
    <carouselImg />
    <br/>
    <img class="w-100" src="314893.jpg" alt="">
    <br/>
    <productsList :name="item.name" :data="item.list" v-for="(item,index) in productsListdata" :key="item.name"/>
</template>
<script setup>
import carouselImg from "../components/carouselImg.vue";
import productsList from "../components/products/productsList.vue";
import { ref } from "vue";
import ajax from "../ajax";
const productsListdata = ref([]);
ajax('/productsList.json', 'GET').then((require) => require.json()).then((json) => {
    productsListdata.value = json;
})
</script>