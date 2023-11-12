<template>
  <div>
    <p>Secure</p>
    <p>{{ user }}</p>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
})
const user = useCurrentUser()
</script>
