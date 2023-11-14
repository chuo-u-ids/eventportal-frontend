<template>
  <div class="page__wrap">
    <div
      v-if="statusMessage.value !== ''"
      id="status_message"
      class="status"
      :class="statusMessage.type"
    >
      {{ statusMessage.value }}
    </div>
    <div class="form__wrap">
      <h2>登壇登録</h2>
      <div>
        <label for="presentationType"> 発表種別 </label>

        <select
          v-model="proposalRequestData.presentationType"
          name="presentationType"
        >
          <option value="presentation">口頭発表</option>
          <option value="poster">ポスター</option>
        </select>
      </div>
      <div>
        <label for="seminar"> ゼミ・団体名 </label>
        <input
          v-model="proposalRequestData.seminar"
          type="text"
          name="seminar"
        />
      </div>
      <div>
        <label for="title"> タイトル </label>

        <input v-model="proposalRequestData.title" type="text" name="title" />
      </div>
      <div>
        <label for="abstract"> 概要 </label>
        <textarea v-model="proposalRequestData._abstract" name="abstract" />
      </div>
      <div>
        <label>登壇者一覧</label>
        <div
          v-for="(speaker, index) in proposalRequestData.speakers"
          :key="index"
        >
          <div class="speaker">
            <label :for="`username_${index}`"> 氏名 </label>
            <input
              v-model="speaker.name"
              type="text"
              :name="`username_${index}`"
            />
            <label :for="`email_${index}`"> メールアドレス </label>
            <input
              v-model="speaker.email"
              type="text"
              :name="`email_${index}`"
              :disabled="index === 0"
            />
            <button v-if="index > 0" @click="delSpeaker(index)">削除</button>
          </div>
        </div>
        <button @click="addSpeaker">登壇者を追加</button>
        <hr />
        <button style="width: 100%" @click="submit">登録</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ProposalApi,
  Configuration,
  type EventSpeechProposal
} from '~/api/generated'

const auth = useFirebaseAuth()!
const getToken = await auth.currentUser?.getIdToken()

const config = new Configuration({
  apiKey: getToken ? () => getToken : undefined
})

const api = new ProposalApi(config)
const user = useCurrentUser()
const router = useRouter()

const proposalRequestData: Ref<EventSpeechProposal> = ref({
  presentationType: 'presentation',
  title: '',
  description: '',
  _abstract: '',
  estimatedTime: 0,
  seminar: '',
  speakers: [
    {
      name: user.value?.displayName,
      email: user.value?.email
    }
  ]
})

const addSpeaker = () => {
  proposalRequestData.value.speakers?.push({
    name: '',
    email: ''
  })
}
const delSpeaker = (index: number) => {
  proposalRequestData.value.speakers?.splice(index, 1)
}

const statusMessage = ref({
  value: '',
  type: 'error'
})

const submit = async () => {
  // validate
  if (!proposalRequestData.value.title) {
    statusMessage.value.value = 'タイトルを入力してください'
    router.push('#status_message')
    return
  }
  if (!proposalRequestData.value._abstract) {
    statusMessage.value.value = '概要を入力してください'
    router.push('#status_message')
    return
  }
  if (!proposalRequestData.value.seminar) {
    statusMessage.value.value = 'ゼミ・団体名を入力してください'
    router.push('#status_message')
    return
  }
  if (!proposalRequestData.value.speakers) {
    statusMessage.value.value = '登壇者を入力してください'
    router.push('#status_message')
    return
  }
  if (!proposalRequestData.value.speakers[0].name) {
    statusMessage.value.value = '登壇者の氏名を入力してください'
    router.push('#status_message')
    return
  }
  if (!proposalRequestData.value.speakers[0].email) {
    statusMessage.value.value = '登壇者のメールアドレスを入力してください'
    router.push('#status_message')
    return
  }
  await api
    .addProposal({
      eventSpeechProposal: proposalRequestData.value
    })
    .then((response) => {
      statusMessage.value.value = '登録が完了しました' + response.item[0]
      statusMessage.value.type = 'success'
      router.push('#status_message')
    })
    .catch((e) => {
      statusMessage.value.value = '登録に失敗しました'
      router.push('#status_message')
    })
}

definePageMeta({
  middleware: ['auth']
})
</script>

<style lang="scss" scoped>
.page__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  padding: 10px;
  background: #eee;
}

.form__wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;

  div {
    margin-bottom: 20px;

    .speaker {
      padding: 10px;
      margin: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin: 5px 0;
  }

  input,
  textarea {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    height: 200px;
  }

  button {
    padding: 10px 20px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    background-color: rgb(0 66 102);
    border: 1px solid rgb(0 66 102);
    border-radius: 5px;

    &:hover {
      background-color: rgb(0 66 102 / 80%);
    }
  }
}

.status {
  width: 100%;
  padding: 20px 10px;
  margin-top: -10px;
  margin-bottom: 20px;
  color: #fff;

  &.success {
    background-color: #4caf50;
  }

  &.error {
    background-color: #f44336;
  }
}
</style>
