<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" class="active" aria-current="true" aria-label="Slide 1" v-for="(item, index) in imgdata" :key="item.src"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item" v-bind:class="{ active: index == 0 }" data-bs-interval="10000" v-for="(item, index) in imgdata" :key="item.src">
                <div :style="{ backgroundImage: `url('${item.src}')` }" :alt="item.alt"></div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script setup>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ref } from "vue";
const imgdata = ref([])
for (let index = 1; index < 9; index++) {
    imgdata.value.push({
        src: `carousel/show (${index}).jpg`,
        alt: `輪播圖${index}`
    })
}
</script>
<style>
.carousel {
    max-height: 30vh;
    overflow: hidden;
}


.carousel .carousel-item>div {
    height: 30vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>