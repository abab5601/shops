<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img src="/favicon.svg" alt="綻咖啡 Logo" class="img-fluid" style="height: 100px;">
        <h2>關於綻咖啡</h2>
        <p>歡迎來到綻咖啡，我們致力於提供最優質的咖啡體驗。</p>
      </div>
      <div class="col-md-6">
        <h2>聯絡我們</h2>
        <p>有任何問題或建議？歡迎隨時與我們聯繫：</p>
        <ul class="list-unstyled">
          <li><strong>Email：</strong> info@zanacoffee.com</li>
          <li><strong>電話：</strong> +123 456 7890</li>
          <li><strong>地址：</strong> 台灣某地</li>
          <li><strong>Line：</strong> <a href="https://line.me/ti/p/@yourlineid" target="_blank">綻咖啡Line</a></li>
          <li><strong>Instagram：</strong> <a href="https://www.instagram.com/yourinstagram" target="_blank">綻咖啡IG</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.logo-container {
  max-width: 50%;
  margin-right: auto;
}

/* 在這裡可以添加一些組件特定的樣式，並使用 scoped 來保護全局樣式影響 */
</style>
