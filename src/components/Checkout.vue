<template>
    <div id="likemodal" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">加入好友聊天訂購</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table w-100">
                        <thead>
                            <tr>
                                <th scope="col" style="width: 35%;">商品</th>
                                <th scope="col" style="width: 15%;">單價</th>
                                <th scope="col" style="width: 35%;">數量</th>
                                <th scope="col" style="width: 15%;">金額</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(item, key) in store.getters.car" :key="key">
                                <tr v-if="Pricedata[key] && item > 0">
                                    <td scope="row">{{ Pricedata[key].name }}</td>
                                    <td scope="row">{{ Pricedata[key].value }}</td>
                                    <td scope="row">
                                        <addstore :id="key"></addstore>
                                    </td>
                                    <td scope="row">{{ Pricedata[key].value * item }}</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                    <span class="fs-1 text-end">總金額：{{ sum_ }}</span>
                    <div class="form-check">
                        <input class="form-check-input" id="flexRadioDefault1" type="radio" v-model="msgtype" :value="'請問這個商品還有嗎?\n' + msglist">
                        <label class="form-check-label" for="flexRadioDefault1">
                            請問商品還有嗎?
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="flexRadioDefault2" v-model="msgtype" :value="'請問下單後商品最快什麼時候到貨?\n' + msglist">
                        <label class="form-check-label" for="flexRadioDefault2">
                            請問多久可以出貨?
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="flexRadioDefault3" v-model="msgtype" :value="'我想立即下訂單!數量需要?個\n' + msglist">
                        <label class="form-check-label" for="flexRadioDefault3">
                            我想立即下訂單
                        </label>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">建議訊息內容</label>
                        <textarea ref="textarea" class="form-control" id="validationTextarea" placeholder="可以自行變更訊息內容" v-model="msgtype" style="height: 200px;"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" @click="copy"><i class="bi bi-copy"></i> 複製訊息內容</button>
                    <a href="https://lin.ee/PgHNmwA"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36" border="0"></a>
                </div>
            </div>
        </div>
    </div>
    <button title="購物車" class="btn btn-warning position-fixed rounded-circle fs-6 p-2" style="bottom: 10%; right: 10%; z-index: 1050;" type="button" ref="Modalshow" data-bs-toggle="modal" data-bs-target="#likemodal">
        <i class="bi bi-basket fs-3"></i>
        <br>&nbsp;購物車&nbsp;
        <!-- <i class="bi bi-basket"></i> -->
    </button>
</template>
<script setup>
import { computed, ref } from 'vue';
import "bootstrap-icons/font/bootstrap-icons.css";
import addstore from './products/addstore.vue';
const msgtype = ref();
const textarea = ref(null);
function copy() {
    textarea.value.select(); document.execCommand('copy');
}
const Pricedata = ref({})
import ajax from "@/ajax";
ajax(`/products/Price.json`, 'GET').then((request) => request.json()).then((json) => {
    Pricedata.value = json;
}).catch((error) => {
    console.error(error);
})
import { useStore } from 'vuex';
const store = useStore();
const sum_ = computed(() => {
    let sum = 0;
    Object.keys(store.getters.car).forEach((key) => {
        const quantity = store.getters.car[key];
        const item = Pricedata.value[key];
        if (item) {
            sum += item.value * quantity
        }
    })
    return sum;
})
const msglist = computed(() => {
    let sum = "";
    Object.keys(store.getters.car).forEach((key) => {
        const quantity = store.getters.car[key];
        const item = Pricedata.value[key];
        if (item) {
            sum += item.name + "*" + quantity + "=" + (item.value * quantity) + "\n"
        }
    })
    sum += "總計：" + sum_.value
    return sum;
})
</script>