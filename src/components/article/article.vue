<template>
    <p v-html="text" class="p-2"></p>
</template>
<script setup>
const props = defineProps(["id"]);
import ajax from '@/ajax';
import { ref, defineOptions } from 'vue';
const text = ref("");
ajax(`${props.id}.txt`, 'GET').then((request) => request.text()).then((json) => {
    text.value = json
}).catch((error) => {
    console.error(error);
})

</script>