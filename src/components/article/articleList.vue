<template>
    <h3 class="fs-3 text-center">推薦文章</h3>
    <div class="list-group" style="flex-wrap: wrap; flex-direction: row;justify-content: center;">
        <template v-for="(item, index) in  showlist " :key="item.id">
            <router-link :to="{ name: 'article', params: { id: item.id } }" class="list-group-item list-group-item-action m-1" aria-current="true" style="max-width: 700px;">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ item.name }}</h5>
                    <small>{{ formatDate(item.addtime) }}</small>
                </div>
                <small>作者：{{ item.author }}</small>
                <p class="mb-1 w-100 d-inline-block text-truncate">{{ item.directions }}</p>
            </router-link>
        </template>
    </div>
</template>
<script setup>
import ajax from "@/ajax";
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
const list = ref([]);
ajax(`article/list.json`, 'GET').then((request) => request.json()).then((json) => {
    json.forEach(item => {
        if (item.addtime)
            item.addtime = new Date(item.addtime)
    });
    json.sort((a, b) => b.addtime - a.addtime);
    list.value = json;
}).catch((error) => {
    console.error(error);
})
const today = new Date();
const showlist = computed(() => {
    const index = list.value.findIndex((item) => item.addtime <= today);
    return list.value.slice(index, index + 6);
})
function formatDate(date) {
    const now = new Date();
    const timeDiff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (timeDiff == 0) {
        return "今天" // 返回格式化后的日期字符串
    } else if (timeDiff > 7) {
        return date.toLocaleDateString(); // 返回格式化后的日期字符串
    } else {
        // 否则显示X天前
        return `${timeDiff}天前`;
    }
}
</script>