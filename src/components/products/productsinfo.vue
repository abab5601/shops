<template>
    <div v-if="isload" class="card-img-top d-flex justify-content-center" bis_skin_checked="1">
        <div class="spinner-grow m-5 gap-md-2 text-secondary" role="status" bis_skin_checked="1"><span class="visually-hidden">Loading...</span></div>
    </div>
    <NotFound v-else-if="iserrorState" :code="400" msg="找不到商品"></NotFound>
    <div v-else class="container-fluid">
        <carouselImg :imgs="carimgs" v-bind:showimgbox="true" @click="() => Modalshow.click()" height="50vh"></carouselImg>
        <button style="display: none;" type="button" ref="Modalshow" data-bs-toggle="modal" data-bs-target="#myModal"></button>
        <h5 class="mt-1 fw-bold">{{ carddata.name }}</h5>
        <h6 v-html="carddata.price??''+'元'"></h6>
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
            <button class="btn btn-danger w-50" type="button" ref="Modalshow" data-bs-toggle="modal" data-bs-target="#likemodal">購買</button>
        </div>
    </div>

    <div id="myModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <carouselImg :imgs="carimgs" v-bind:showimgbox="true" height="80vh"></carouselImg>
                </div>
            </div>
        </div>
    </div>
    <div id="likemodal" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">加入好友聊天訂購</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-check">
                        <input class="form-check-input" id="flexRadioDefault1" type="radio" v-model="msgtype" :value="'請問這個商品還有嗎?\n' + location">
                        <label class="form-check-label" for="flexRadioDefault1">
                            請問商品還有嗎?
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="flexRadioDefault2" v-model="msgtype" :value="'請問下單後商品最快什麼時候到貨?\n' + location">
                        <label class="form-check-label" for="flexRadioDefault2">
                            請問多久可以出貨?
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="flexRadioDefault3" v-model="msgtype" :value="'我想立即下訂單!數量需要?個\n' + location">
                        <label class="form-check-label" for="flexRadioDefault3">
                            我想立即下訂單
                        </label>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">建議訊息內容</label>
                        <textarea ref="textarea" class="form-control" id="validationTextarea" placeholder="可以自行變更訊息內容" v-model="msgtype"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" @click="copy"><i class="bi bi-copy"></i> 複製訊息內容</button>
                    <a href="https://lin.ee/PgHNmwA"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36" border="0"></a>
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
const msgtype = ref();
const textarea = ref(null);
function copy() {
    textarea.value.select(); document.execCommand('copy');
}
</script>
<style></style>plugins/socialShare