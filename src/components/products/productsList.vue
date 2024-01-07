<template>
    <div class="container-fluid p-2">
        <p class="fs-3">{{ name }}</p>
        <div class="row border border-secondary rounded mb-1 justify-content-center " v-for="(item,index) in data" :key="item.name">
            <p class="fs-4">{{ item.name }}</p>
            <div class="col row m-0 custom-padding-md" v-if="item.list.length>0" style="padding: 0.5px;">
                <productsCard :Spinners="getSpC()" class="col-6" :id="card.id" :name="card.name" v-for="(card,index2) in item.list" :key="card.id"/>
            </div>
            <div v-else class="col-12"><p>暫無商品</p></div>
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