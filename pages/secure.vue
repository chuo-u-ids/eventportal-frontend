<template>
  <p>Secure</p>
  <p>{{ user }}</p>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
})
const user = useCurrentUser()

</script>