<template>
  <div>
    <h2>登壇検索システム</h2>
    <p>本イベントの登壇者を以下から検索していただけます。</p>
    <div v-for="item in allArray" :key="item.id">
      <h3>{{ item.title }}</h3>
      <p>{{ item._abstract }}</p>
      <p>{{ item.speakers }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProposalApi, type EventSpeechProposalAllReturn } from '~/api/generated'
const api = new ProposalApi()

const allArray: Ref<EventSpeechProposalAllReturn> = ref({})

onMounted(async () => {
  try {
    const response = await api.checkAllProposal()
    allArray.value = response.item
  } catch (e) {
    console.error(e)
  }
})
</script>
