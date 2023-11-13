<template>
  <div>
    {{ error }}
  </div>
</template>
<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>
