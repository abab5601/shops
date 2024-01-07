<template>
    <div class="container d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 text-danger">404</h1>
            <p class="lead text-muted">抱歉，找不到此頁面</p>
            <RouterLink to="/" class="btn btn-primary">返回首頁</RouterLink>
        </div>
    </div>
</template>
<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap" 
import { RouterLink } from "vue-router";
</script>