<template>
  <div class="footer">
    <div class="minimal">
      <p>©2023- Fuminori Ogawa</p>
      <p>
        <nuxt-link to="/legal/privacy">プライバシーポリシー</nuxt-link>・
        <nuxt-link to="/legal/jpn_tokushouhou"
          >特定商取引法に基づく表示</nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 20px;
  margin-top: 10px;
  color: #333;
  background-color: #eee;

  .minimal {
    font-size: 0.8rem;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
