<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/">
            <span class="navbar-brand order-0" style="color: #361401;"><span class="material-symbols-outlined">
                    local_cafe
                </span>綻咖啡</span>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">功能列表</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <!-- Offcanvas content -->
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">首頁</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">資訊</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
</script>
<style>

</style>