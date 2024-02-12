<template>
    <div class="container-fluid p-2">
        <p class="fs-3" style="text-align: center;">{{ name }}</p>
        <div class="border border-secondary rounded mb-1" v-for="(item, index) in data" :key="item.name">
            <p class="fs-4" style="text-align: center;">{{ item.name }}</p>
            <div class="row custom-padding-md m-0" v-if="item.list.length > 0" style="justify-content: center; padding: 0.5px;">
                <productsCard :Spinners="getSpC()" class="col-md-6 col-12" :id="card.id" :name="card.name" v-for="(card, index2) in item.list" :key="card.id" />
                <div v-if="item.list.length % 2 == 1" class="card col-md-6 col-12" style="opacity: 0;"></div>
            </div>
            <div v-else class="col-12">
                <p>暫無商品</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from "vue";
import productsCard from "./productsCard.vue";
const props = defineProps({
    id: String,
    depth: {
        type: Number,
        default: 0
    },
    name: String,
    data: Array
});
const Spinnersclass = [
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-dark"
];
let i = 0;
function getSpC() {
    if (i > Spinnersclass.length)
        i = 0;
    return Spinnersclass[i++];
}
</script>
<style>
@media (min-width: 768px) {
    .custom-padding-md {
        padding: 8px !important;
    }
}
</style>