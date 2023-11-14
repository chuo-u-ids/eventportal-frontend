<template>
  <div class="content">
    <h2>登壇検索システム</h2>
    <p>本イベントの登壇情報を以下から検索していただけます。</p>
    <div v-for="item in allArray" :key="item.id" class="proposals">
      <h3>{{ item.title }}</h3>
      <p>発表者所属: {{ item.seminar }}</p>
      <p>
        発表者：<span v-for="speaker in item.speakers" :key="speaker.name"
          >{{ speaker.name }},
        </span>
      </p>
      <p>
        概要:
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="item._abstract?.replace(/\r?\n/g, '<br />')"></span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ProposalApi,
  type EventSpeechProposalReturnItem
} from '~/api/generated'
const api = new ProposalApi()

const allArray: Ref<Array<EventSpeechProposalReturnItem> | undefined> = ref([
  {}
])

onMounted(async () => {
  try {
    const response = await api.checkAllProposal()
    allArray.value = response.item
  } catch (e) {
    console.error(e)
  }
})
</script>

<style lang="scss" scoped>
.proposals {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
</style>
