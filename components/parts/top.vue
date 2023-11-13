<template>
  <div>
    <div class="topbar">
      <span class="material-symbols-outlined"> verified_user </span>
      <p>このWebサイトはmizphsesが管理・運営しています。</p>
      <button class="justText" @click="changeHoverStatus">
        <span class="material-symbols-outlined">
          {{ hover ? 'expand_less' : 'expand_more' }}
        </span>
      </button>
    </div>
    <div v-if="hover" class="whyOfficial">
      <safetyAppeal icon="domain" class="safety_appeal">
        <h3>このページはmizphs.esドメインに構築されています。</h3>
        <p>
          https://mizphs.es
          にはmizphsesが運営するサービス以外が乗ることはありません。
        </p>
      </safetyAppeal>
      <safetyAppeal icon="lock" class="safety_appeal">
        <h3>このWEBサイトは安全です。</h3>
        <p>
          このウェブサイトはHTTPSを強制しており、サーバとお使いの端末間でやりとりしているデータは適切に暗号化されています。また、データの処理にあたっては<nuxt-link
            to="/safety"
            >プライバシーポリシー</nuxt-link
          >その他規定に則り、適切に処理しています。
        </p>
      </safetyAppeal>
    </div>
  </div>
</template>

<script setup>
import safetyAppeal from '@/components/parts/safetyAppeal.vue'

const hover = ref(false)
const changeHoverStatus = () => {
  hover.value = !hover.value
}
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  font-size: 0.8rem;
  color: #fff;
  background: #29335b;

  button.justText {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    transition: 0.3s;
  }
}

.whyOfficial {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: calc(100% - 40px);
  padding: 10px 20px;
  background: #fff2c2;
  border: 1px solid #a18d2f;

  .safety_appeal {
    h3 {
      margin: 0;
    }

    p {
      margin: 0;
    }
  }

  @media (width <= 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
