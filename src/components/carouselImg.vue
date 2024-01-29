<template>
    <div :id="uniqueId" style="max-height: none;" class="carousel slide" data-bs-ride="carousel" @click="$emit('click', $event)">
        <div class="carousel-indicators" v-if="!showimgbox">
            <button type="button" :data-bs-target="`#${uniqueId}`" :data-bs-slide-to="index" class="active" aria-current="true" aria-label="Slide 1" v-for="(item, index) in imgdata" :key="item.src"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item" v-bind:class="{ active: index == 0 }" data-bs-interval="10000" v-for="(item, index) in imgdata" :key="item.src">
                <div :style="{ backgroundImage: `url('${item.src}')`, height }" :alt="item.alt"></div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="`#${uniqueId}`" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="`#${uniqueId}`" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="w-100 d-flex gap-1 flex-row flex-nowrap overflow-auto border border-secondary p-1" v-if="showimgbox">
        <button style="height: 4rem;  background-size: cover;       background-repeat: no-repeat;    background-position: center; flex: 0 0 4rem;" type="button" :data-bs-target="`#${uniqueId}`" :data-bs-slide-to="index" class="active border-0" aria-current="true" aria-label="Slide 1"
            v-for="(item, index) in imgdata" :key="item.src" :style="{ backgroundImage: `url('${item.src}')` }" :alt="item.alt"> </button>
    </div>
</template>
<script setup>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { computed, ref, defineEmits } from "vue";
const props = defineProps({
    imgs: {
        type: Array,
        default: null
    },
    showimgbox: {
        type: Boolean,
        default: false
    },
    height: {
        type: String,
        default: '30vh'
    }
})
const uniqueId = ref('component_' + Math.random().toString(36).substring(2, 7))
defineEmits(['click']);
const defdata = ref([])
for (let index = 1; index < 9; index++) {
    defdata.value.push({
        src: `carousel/show (${index}).jpg`,
        alt: `輪播圖${index}`
    })
}
const imgdata = computed(() => {
    return props.imgs ?? defdata.value
})

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