<template>
    <div v-if="isload" class="card-img-top d-flex justify-content-center" bis_skin_checked="1">
        <div class="spinner-grow m-5 gap-md-2 text-secondary" role="status" bis_skin_checked="1"><span class="visually-hidden">Loading...</span></div>
    </div>
    <NotFound v-else-if="iserrorState" :code="400" msg="找不到商品"></NotFound>
    <div v-else class="container-fluid" style="padding-bottom: 50px;">
        <carouselImg :imgs="carimgs" v-bind:showimgbox="true" @click="() => Modalshow.click()" height="50vh"></carouselImg>
        <button style="display: none;" type="button" ref="Modalshow" data-bs-toggle="modal" data-bs-target="#myModal"></button>
        <h5 class="mt-1 fw-bold">{{ carddata.name }}</h5>
        <h6 v-html="carddata.price ?? '' + '元'"></h6>
        <strong>商品詳情</strong>
        <div v-html="carddata.description"></div>
        <strong v-if="carddata.usage" class="d-block mt-3">商品詳情</strong>
        <div v-if="carddata.usage" v-html="carddata.usage"></div>
        <div class="fixed-bottom btn-group" role="group" style="height: 3em;">
            <div class="fb-share-button w-25" :data-href="location" data-layout="" data-size="">
                <a class="fb-xfbml-parse-ignore btn btn-primary w-100 h-100" target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location)}&src=sdkpreparse`"><i class="bi bi-facebook"></i> 分享</a>
            </div>
            <a class="btn btn-primary w-25" role="button" style="color: #fff;background-color: #00b900; border-color: #00b900;" :href="`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(location)}`" target="_blank">
                <i class="bi bi-line"></i> LINE 分享
            </a>
            <addstore class="w-50 h-100" v-bind:id="props.id" v-bind="carddata" btnclass="btn btn-danger">購買</addstore>
        </div>
    </div>
    <div id="myModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="padding: 0 10px;">
                    <carouselImg :imgs="carimgs" v-bind:showimgbox="true" height="80vh"></carouselImg>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import NotFound from "../NotFound.vue";
import carouselImg from "../carouselImg.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ajax from "@/ajax";
import "bootstrap-icons/font/bootstrap-icons.css";
import addstore from "./addstore.vue";
const location = window.location.href
const props = defineProps({
    id: {
        type: String,
    }
})
const iserrorState = ref();
const isload = ref();
const carddata = ref({});
const carimgs = ref([]);
ajax(`/products/${props.id}.json`, 'GET').then((request) => request.json()).then((json) => {
    carddata.value = json;
    carimgs.value = json.imgs.map((url) => { return { src: `../products/${props.id}/${url}` } })
    isload.value = false;
    document.querySelectorAll('meta[name="description"]').forEach((DOM) => {
        DOM.textContent = json.description;
    })
    document.querySelectorAll('meta[name="title"]').forEach((DOM) => {
        document.title = json.name;
        DOM.textContent = json.name;
    })
}).catch((error) => {
    console.error(error);
    iserrorState.value = true;

})
const Modalshow = ref(false);

</script>
<style></style>plugins/socialShare