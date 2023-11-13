<template>
  <div class="top__wrap">
    <div
      class="top__hero"
      :class="small ? 'small' : null"
      :style="{
        background:
          backgroundImage === ''
            ? '#ccc'
            : `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: backgroundImage === '' ? '#000' : '#fff'
      }"
    >
      <div class="hero_flex">
        <div class="description">
          <h2>{{ title }}</h2>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GtmSupport } from '@gtm-support/core'
import { loadDefaultJapaneseParser } from 'budoux'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  small: {
    type: Boolean,
    required: false,
    default: true
  },
  backgroundImage: {
    type: String,
    required: false,
    default: ''
  }
})

const gtm = useGtm() as GtmSupport
const parser = loadDefaultJapaneseParser()

const parseText = (text: string) => {
  const parsedText = parser.parse(text)
  const result = parsedText
    .map((text, index) => {
      if (index === parsedText.length - 1) {
        return text
      }
      return text + '<wbr>'
    })
    .join('')
  return result
}
</script>

<style lang="scss" scoped>
.top {
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;
  }

  &__hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: calc(100vw - 40px);
    height: 80vh;
    margin: 20px 0 0;
    color: inherit;
    text-decoration: none;
    user-select: none;
    border-radius: 10px 0 0 10px;

    &.small {
      height: 30vh;
    }

    .hero_flex {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      @media (width <=768px) {
        flex-direction: column;
        align-items: flex-end;
      }

      .description {
        padding: 50px 30px;
        margin: 0 auto 0 0;
        font-family: Inter, 'Noto Sans JP', sans-serif;

        h2 {
          padding: 0 20px;
          margin: 0;
          font-size: 3rem;
          font-weight: 400;

          @media (width <=768px) {
            font-size: 1.8rem;
          }
        }

        p {
          padding: 0 20px;
          margin: 0;
          font-size: 2rem;
          word-break: keep-all;

          @media (width <=768px) {
            font-size: 0.8rem;
          }
        }
      }

      .link_to_page {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        font-family: Inter, 'Noto Sans JP', sans-serif;

        @media (width <=768px) {
          margin-bottom: 20px;
        }

        p {
          margin: 0;
          font-size: 2rem;
          font-weight: 400;

          @media (width <=768px) {
            font-size: 1rem;
          }
        }

        .bar {
          width: 5rem;
          height: 1px;
          border-bottom: 1px solid #000;

          @media (width <=768px) {
            width: 3rem;
          }
        }
      }
    }
  }
}
</style>
