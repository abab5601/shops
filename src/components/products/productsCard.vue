<template>
    <div class="card" :style="{ 'opacity': iserrorState ? 0.5 : 1 }">
        <div class="card-img-top d-flex justify-content-center" v-if="isload">
            <div class="spinner-grow m-5 gap-md-2" v-bind:class="Spinners" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <img v-else :src="carddata.img ? `products/${id}/${carddata.img}` : 'nocard.jpg'" class="card-img-top" :alt="carddata.img ? carddata.name : '無法預覽片'">
        <div class="card-body">
            <h5 class="card-title">{{ carddata.name ?? props.name }}</h5>
            <p class="card-text">{{ isload ? '載入中' : carddata.abrief ?? '沒有說明' }}</p>
            <p class="card-text text-warning" v-if="iserrorState">找不到商品</p>
            <p class="card-text" v-html="carddata.price??''+'元'"></p>
        </div>
        <div class="card-body">
            <router-link :to="'/productsinfo/' + props.id" v-bind:class="{ disabled: isload }" class="btn btn-outline-primary" role="button" to="/" v-bind:aria-disabled="isload" :tabindex="isload ? -1 : 0">查看詳細資料</router-link>
            <addstore btnclass="btn btn-outline-success" v-bind="props"></addstore>
        </div>
        <ul class="list-group list-group-flush bg-dark bg-opacity-50" v-if="carddata.type">
            <li class="list-group-item" v-for="(item, index) in carddata.type">{{ item }}</li>
        </ul>
    </div>
</template>
<script setup>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { defineProps, ref } from "vue";
import { RouterLink } from "vue-router";
import addstore from "./addstore.vue";
const props = defineProps({
    id: String,
    name: String,
    Spinners: String
})
const carddata = ref({})
const isload = ref(true);
const iserrorState = ref(false);
import ajax from "@/ajax";
ajax(`products/${props.id}.json`, 'GET').then((request) => request.json()).then((json) => {
    carddata.value = json;
    isload.value = false;
}).catch((error) => {
    console.error(error);
    iserrorState.value = true;
})
</script>
<style>

.card * {
    --bs-border-width: 0.5px;
}
.card {
    margin-bottom: 2px;
}
@media (min-width: 768px){
    .card {
        max-width: 200px;
    }
}
</style>