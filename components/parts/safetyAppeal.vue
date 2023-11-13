<template>
  <div class="why_inde">
    <p class="icon material-symbols-outlined">{{ icon }}</p>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.why_inde {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;

  .icon {
    font-size: 3rem;
  }
}
</style>
