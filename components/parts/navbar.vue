<template>
  <div>
    <div class="navbar__wrap">
      <nuxt-link to="/">
        <Logo class="logo" size="30px" />
      </nuxt-link>
      <div>
        <ul class="navbar__list pc">
          <li
            v-for="location in locationList"
            :key="location.name"
            class="navbar__item"
          >
            <nuxt-link :to="location.path" exact-active-class="active">
              {{ location.name }}
            </nuxt-link>
          </li>
          <li>
            <button v-if="!user" @click="signinPopup()">
              Googleでログイン
            </button>
            <button v-else @click="logoff(auth)">ログオフ</button>
          </li>
        </ul>

        <button class="sp no_bg" @click="open = !open">
          <span class="material-symbols-outlined">
            {{ open ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </div>

    <div v-if="open" class="mob_menu">
      <ul class="navbar__list sp">
        <li
          v-for="location in locationList"
          :key="location.name"
          class="navbar__item"
        >
          <nuxt-link :to="location.path" exact-active-class="active">
            {{ location.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from 'firebase/auth'

import {
  useCurrentUser,
  useFirebaseAuth,
  useIsCurrentUserLoaded
} from 'vuefire'

import { AccountApi } from '@/api/generated'

import Logo from '@/components/parts/logo.vue'

const locationList = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

const open = ref(false)

const googleAuthProvider = new GoogleAuthProvider()

const error = ref<Error | null>(null)

const auth = useFirebaseAuth()!
const user = useCurrentUser()
function signinPopup() {
  error.value = null
  signInWithPopup(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed signinPopup', reason)
    error.value = reason
  })
}
const logoff = (auth: any) => {
  signOut(auth)
  location.href = '/'
}

const getUserInfo = async () => {
  const api = new AccountApi()
  const getToken = await auth.currentUser?.getIdToken()
  api.checkUser({
    headers: {
      Authorization: getToken as string
    }
  })
}

onMounted(() => {
  getRedirectResult(auth).catch((reason) => {
    console.error('Failed redirect result', reason)
    error.value = reason
  })
})

watch(user, () => {
  if (user.value) {
    getUserInfo()
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }

  &__list {
    display: flex;
    gap: 10px;
    padding: 0;
    list-style: none;

    @media (width >=768px) {
      li + li {
        &::before {
          padding-right: 5px;
          content: '/';
        }
      }
    }
  }

  &__item {
    a {
      padding: 5px;
      font-family: Jost, 'Noto Sans JP', sans-serif;
      font-weight: 700;
      color: #000;
      text-decoration: none;
      transition: 0.3s;

      @media (width <=768px) {
        display: block;
        padding: 10px 0;
      }

      &:hover {
        color: #445596;
      }

      &.active {
        color: #445596;
      }
    }
  }
}

.pc {
  display: flex;

  @media (width <=768px) {
    display: none;
  }
}

.sp {
  display: none;

  &.no_bg {
    background: none;
    border: none;
    outline: none;
  }

  @media (width <=768px) {
    display: block;
  }
}

.mob_menu {
  position: absolute;
  z-index: 100;
  display: none;
  width: calc(100% - 40px);
  padding: 10px 20px;
  background: #eee;

  @media (width <=768px) {
    display: block;
  }
}
</style>
