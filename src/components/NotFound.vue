<template>
    <div class="container d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 text-danger">{{ code }}</h1>
            <p class="lead text-muted">{{ msg }}</p>
            <RouterLink to="/" class="btn btn-primary">返回首頁</RouterLink>
        </div>
    </div>
</template>
<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import { RouterLink } from "vue-router";
const props = defineProps({
    code: {
        default: 404
    },
    msg: {
        type: String,
        default: "抱歉，找不到此頁面"
    }
})
</script>