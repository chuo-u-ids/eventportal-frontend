<template>
  <div>
    <p>展示・発表内容の確認</p>
    <hr />
    <p>発表タイトル: {{ dataToDisplay?.title }}</p>
    <p>登録番号: {{ id }}</p>
    <p>
      発表方法: {{ checkPresentationType(dataToDisplay?.presentationType) }}
    </p>
    <p>発表概要</p>
    <p>{{ dataToDisplay?._abstract }}</p>
    <p>
      発表者:
      <span v-for="speaker in dataToDisplay?.speakers" :key="speaker"
        >{{ speaker }}
      </span>
      （{{ dataToDisplay?.seminar }}より）
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import {
  ProposalApi,
  type CheckProposalRequest,
  type EventSpeechProposalReturnItem
} from '~/api/generated'
const id = useRoute().params.id
const dataToDisplay: Ref<EventSpeechProposalReturnItem | undefined> = ref({})
const api = new ProposalApi()

onMounted(async () => {
  const request: CheckProposalRequest = {
    id: id as string
  }
  try {
    const response = await api.checkProposal(request)
    dataToDisplay.value = response.item
  } catch (e) {
    console.error(e)
    location.href = '/speakers/notFound'
  }
})

const checkPresentationType = (type: string) => {
  switch (type) {
    case 'presentation':
      return '口頭発表'
    case 'poster':
      return 'ポスターセッション'
    default:
      return '...'
  }
}
</script>
