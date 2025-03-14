<template>
  <main>
    <section id="hero" class="mb-10 bg-white" ref="hero">
      <div class="absolute inset-0 top-14 h-full bg-black/10 backdrop-blur-sm"></div>

      <div class="hero-content relative z-10">
        <div class="hero-content-section">
          <button class="mb-5 cursor-pointer" @click="scrollToTop">
            <img src="../assets/hacker.png" class="w-15 invert" />
          </button>
          <span class="hero-text text-5xl text-white">Elio Wei</span>
        </div>
      </div>
    </section>

    <section id="about" class="flex flex-col items-center justify-center p-10">
      <h2 class="mb-4 text-3xl font-semibold">關於我</h2>
      <div class="max-w-md rounded-lg p-6 text-center shadow-lg">
        <img
          src="../assets/profile.jpg"
          alt="個人照片"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <p>
          你好，我是李柏偉。近期完成泰山職訓局的前端培訓，對前端開發充滿熱情，學習了 Vue.js
          與相關前端技術，並透過專題開發累積實作經驗。目前正持續精進技術，期待未來能在業界發揮所長。
        </p>
      </div>
    </section>

    <section id="projects" class="mb-10 bg-white p-10 text-center">
      <h2 class="mb-4 text-3xl font-semibold">作品集</h2>
      <div class="flex w-full">
        <div class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <template v-for="(card, index) of cards" :key="index">
            <div
              class="group relative h-[350px] w-full cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg"
              :class="{ 'pointer-events-none': dialog }"
              @click="onCardClick(card)"
            >
              <img
                :src="card.image"
                :alt="card.title"
                class="h-70 w-full rounded-t-lg object-cover transition-all duration-500 group-hover:h-50"
              />
              <div
                class="absolute inset-x-6 top-[305px] transition-transform duration-500 group-hover:-translate-y-24"
              >
                <h3 class="text-2xl font-bold text-gray-800">{{ card.title }}</h3>
                <p class="mt-2 text-gray-600">{{ card.description }}</p>
                <a
                  :href="card.github"
                  target="_blank"
                  class="relative mt-4 inline-block font-medium text-blue-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transform-gpu after:bg-blue-500 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                  >查看 GitHub</a
                >
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="relative flex items-center justify-center bg-white p-10"
      ref="contact"
    >
      <div
        class="contact-content relative z-5 w-full max-w-xl border-1 bg-white p-10 shadow-lg sm:mx-5 md:mx-10 lg:mx-auto"
      >
        <h2 class="mb-5 text-3xl font-semibold">聯絡我</h2>

        <form @submit.prevent="sendEmail" class="space-y-4">
          <div>
            <label class="text-sx block font-medium text-gray-700">姓名</label>
            <input
              v-model="form.name"
              type="text"
              class="mt-1 h-10 w-full border border-gray-300 pl-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:invalid:border-red-600 focus:invalid:ring-red-600"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="focus:invalid:border-red mt-1 h-10 w-full border border-gray-300 pl-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:invalid:border-red-600 focus:invalid:ring-red-600"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">訊息</label>
            <textarea
              v-model="form.message"
              rows="4"
              class="mt-1 mb-7 block w-full border border-gray-300 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:invalid:border-red-600 focus:invalid:ring-red-600"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full border-1 border-blue-600 px-4 py-2 font-bold text-blue-600 transition-colors duration-200 hover:bg-blue-500 hover:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            :disabled="loading"
            :class="{
              'bg-blue-600': loading,
              'cursor-pointer': !loading,
              'pointer-events-none': loading,
            }"
          >
            <div class="flex items-center justify-center">
              <div
                class="h-5 w-5 animate-spin rounded-full border-4 border-solid border-white border-t-transparent"
                v-if="loading"
              ></div>
              <div class="ml-2" :class="{ 'text-white': loading }">
                {{ loading ? '傳送中...' : '傳送訊息' }}
              </div>
            </div>
          </button>
        </form>
      </div>
      <div class="contact-filter absolute inset-0 h-full bg-black/10 backdrop-blur-sm"></div>
    </section>

    <div
      id="modal"
      class="fixed inset-0 flex items-center justify-center bg-black/40"
      v-if="dialog"
      @click="dialog = false"
    >
      <div class="relative w-full max-w-4xl rounded-lg bg-white py-6 pt-3 shadow-lg" @click.stop>
        <!-- 關閉按鈕 -->
        <div class="grid grid-cols-12">
          <button
            type="button"
            class="col-span-1 col-start-12 w-12 rounded-md p-2.5 text-gray-700 transition-all duration-300 hover:cursor-pointer hover:rounded-4xl hover:bg-gray-400/10"
            @click="dialog = false"
          >
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Modal 內容 -->
        <div class="ml-6 grid h-[444px] grid-cols-1 gap-6 overflow-auto md:grid-cols-2">
          <!-- 左側：預覽圖片 -->
          <div class="h-[400px]">
            <!-- 設定固定容器高度 -->

            <Swiper
              :spaceBetween="30"
              :effect="'fade'"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="max-h-[400px]"
              :fadeEffect="{
                crossFade: true,
              }"
            >
              <swiper-slide
                v-for="(card, index) of data.swiper"
                :key="index"
                class="!flex items-center justify-center"
              >
                <img
                  :src="card"
                  alt="圖片預覽"
                  class="max-h-[400px] w-auto rounded-lg object-contain shadow-md hover:cursor-pointer"
                  @click="openLightbox(card, index)"
                />
              </swiper-slide>
            </Swiper>
          </div>

          <!-- 右側：作品資訊 -->
          <div class="pr-10">
            <h3 id="modal-title" class="text-2xl font-bold">{{ data.title }}</h3>
            <h4 class="mt-4 text-lg font-semibold">說明</h4>
            <p id="modal-description" class="mt-2 ml-4 text-gray-700" v-html="data.details"></p>

            <h4 class="mt-4 text-lg font-semibold">功能</h4>

            <template v-for="(feature, index) in data.features" :key="index">
              <h4
                class="mt-2 ml-4 flex cursor-pointer items-center gap-2 text-lg font-semibold hover:bg-gray-50"
                @click="toggleFeatures(index)"
              >
                {{ index }}
                <!-- 添加箭頭圖示 -->
                <svg
                  class="h-4 w-4 transition-transform duration-300"
                  :class="{ 'rotate-180': expandedFeatures[index] }"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </h4>
              <div
                class="ml-8 overflow-hidden transition-all duration-300"
                :class="expandedFeatures[index] ? 'max-h-[500px]' : 'max-h-0'"
              >
                <ul class="mt-2 list-disc space-y-2 pl-5">
                  <li
                    v-for="(featureInfo, Infoindex) in feature"
                    :key="Infoindex"
                    class="text-gray-600"
                  >
                    {{ featureInfo }}
                  </li>
                </ul>
              </div>
            </template>

            <template v-for="(capabilitie, index) in data.capabilities" :key="index">
              <ul class="mt-2 ml-4 list-disc space-y-2 pl-5">
                <li class="text-gray-600">
                  {{ capabilitie }}
                </li>
              </ul>
            </template>

            <!-- 前往作品按鈕 -->
            <a
              id="modal-link"
              :href="data.page"
              target="_blank"
              class="group relative mt-4 mr-4 inline-block overflow-hidden rounded border border-gray-200 px-12 py-3 text-sm font-medium text-slate-800 transition-all duration-300 hover:text-slate-600 focus:outline-none active:bg-black active:text-white"
              v-if="data.show"
            >
              <span
                class="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-900 transition-all duration-200 group-hover:w-full"
              ></span>
              <span
                class="ease absolute top-0 right-0 h-0 w-0 border-r-2 border-gray-900 transition-all duration-200 group-hover:h-full"
              ></span>
              <span
                class="ease absolute right-0 bottom-0 h-0 w-0 border-b-2 border-gray-900 transition-all duration-200 group-hover:w-full"
              ></span>
              <span
                class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-gray-900 transition-all duration-200 group-hover:h-full"
              ></span>
              前往作品</a
            >
            <a
              id="modal-link"
              :href="data.github"
              target="_blank"
              class="group relative mt-4 inline-block overflow-hidden rounded border border-gray-200 px-12 py-3 text-sm font-medium text-slate-800 transition-all duration-300 hover:text-slate-600 focus:outline-none active:bg-black active:text-white"
            >
              <span
                class="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-900 transition-all duration-200 group-hover:w-full"
              ></span>
              <span
                class="ease absolute top-0 right-0 h-0 w-0 border-r-2 border-gray-900 transition-all duration-200 group-hover:h-full"
              ></span>
              <span
                class="ease absolute right-0 bottom-0 h-0 w-0 border-b-2 border-gray-900 transition-all duration-200 group-hover:w-full"
              ></span>
              <span
                class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-gray-900 transition-all duration-200 group-hover:h-full"
              ></span>
              Github</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 燈箱背景 -->
    <div
      v-if="isLightbox"
      class="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/90 transition-all duration-300"
      @click="closeLightbox"
    >
      <!-- 關閉按鈕 -->
      <button
        class="absolute top-4 right-4 text-white transition-colors hover:text-gray-300"
        @click="closeLightbox"
      >
        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- 圖片容器 -->
      <img
        :src="currentImage"
        :alt="data.title"
        class="max-h-[90vh] max-w-[90vw] object-contain"
        @click.stop
      />

      <!-- 導航按鈕 -->
      <button
        class="absolute left-4 text-white transition-colors hover:text-gray-300"
        @click.stop="prevImage"
      >
        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        class="absolute right-4 text-white transition-colors hover:text-gray-300"
        @click.stop="nextImage"
      >
        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <!-- 側邊導覽選單 -->
    <div class="fixed top-30 right-8 z-40 flex h-45 flex-col justify-around">
      <button
        class="group h-3 w-3 cursor-pointer rounded-full border-2 border-gray-700 transition-all duration-300 hover:bg-gray-700"
        v-for="(section, index) in sections"
        :key="index"
        @click="scrollToSection(section.id)"
      >
        <span
          class="pointer-events-none absolute right-7 -translate-y-1/2 text-sm whitespace-nowrap text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          {{ section.name }}
        </span>
      </button>
    </div>
  </main>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

#hero {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0%; /* 確保初始位置正確 */
  background-image: url('../assets/hero.jpg');
  transition: background-position 0.3s ease; /* 添加平滑過渡 */
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 100%;
  background-image: url('../assets/form.jpg');
}
</style>

<style scoped>
.group:hover {
  z-index: 10;
}
</style>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import emailjs from 'emailjs-com'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const modules = [Autoplay, EffectFade, Pagination]

const hero = ref(null)
const contact = ref(null)

const dialog = ref(false)

const cards = ref([
  {
    title: '前端-遊戲揪團平台',
    description: '使用Vue 3 + Vuetify 開發的的前端專案',
    details:
      '整合性的遊戲揪團平台，幫助玩家快速找到志同道合的朋友，一起參與遊戲相關的線上或線下活動。透過這個平台，玩家可以輕鬆創建活動、尋找參與者，並與其他遊戲愛好者互動交流，從而提升遊戲體驗。',
    image: new URL('@/assets/gameTogeter_1.png', import.meta.url).href,
    swiper: [
      new URL('@/assets/gameTogeter_1.png', import.meta.url).href,
      new URL('@/assets/gameTogeter_2.png', import.meta.url).href,
      new URL('@/assets/gameTogeter_3.png', import.meta.url).href,
    ],
    github: 'https://github.com/eliowei/game-together',
    page: 'https://eliowei.github.io/game-together/#/',
    features: {
      參加者: [
        '瀏覽所有揪團',
        '關鍵字搜尋、地區搜尋、標籤搜尋、日期搜尋、排序',
        '觀看詳細揪團資訊，參加別人主辦的揪團',
        '揪團留言板',
        '參加及收藏揪團',
        '揪團的即時聊天室',
        '管理已參加及收藏的揪團',
        '管理個人資訊',
      ],
      主辦者: [
        '根據網站提供步驟主辦揪團',
        '主辦者管理自己主辦的揪團、編輯揪團資訊',
        '主辦者管理揪團的留言板',
      ],
      管理者: [
        '管理揪團，新增、編輯、刪除揪團',
        '管理會員，新增、編輯、刪除會員',
        '管理聯絡表單，查看、編輯聯絡表單',
      ],
    },
    show: true,
  },
  {
    title: '後端-遊戲揪團平台',
    description: '使用Node.js + Express + MongoDB 開發的後端',
    details: '整合性的遊戲揪團平台後端，使用Node.js + Express + MongoDB開發',
    image: new URL('@/assets/logo.png', import.meta.url).href,
    swiper: [new URL('@/assets/logo.png', import.meta.url).href],
    github: 'https://github.com/eliowei/game-together-back',
    page: 'https://github.com/eliowei/game-together-back',
    features: {
      API: [
        '註冊 & 登入 - 使用者註冊、登入系統',
        '身份驗證 - JWT 驗證、權限管理',
        '揪團 - 查詢、搜尋篩選、主辦活動、參加、收藏',
        '留言 - 發表留言、回覆留言、編輯留言',
        '聊天室 - 即時聊天、訊息記錄',
        '管理 - 使用者管理、會員管理、聯絡表單管理',
      ],
    },
    show: false,
  },
  {
    title: '番茄鐘',
    description: '使用Vue 3 + Vuetify 開發的作品',
    details:
      '番茄鐘計時器旨在幫助您保持專注，與番茄工作法高度整合。<br>Pomodoro循環在專注的工作階段和休息中交替進行。工作25分鐘，然後休息5分鐘',
    image: new URL('@/assets/pomodoro_1.png', import.meta.url).href,
    swiper: [
      new URL('@/assets/pomodoro_1.png', import.meta.url).href,
      new URL('@/assets/pomodoro_2.png', import.meta.url).href,
      new URL('@/assets/pomodoro_3.png', import.meta.url).href,
    ],
    github: 'https://github.com/eliowei/pomodoro',
    page: 'https://eliowei.github.io/pomodoro/#/',
    features: {},
    capabilities: ['番茄鐘倒數', '可過濾未完成、已完成事項', '鈴聲切換', '切換風格'],
    show: true,
  },
  {
    title: '天氣 Bike 小幫手',
    description: '使用Node.js + Line Bot API開發的聊天機器人',
    details:
      '天氣 Bike 小幫手，是在 LINE 上的聊天機器人。<br>可以透過功能選單或是使用特定的「關鍵字」觸發「機器人功能」。<br>希望在任何地方都能知道 YouBike 地點跟天氣狀況才做的機器人。<br>能知道離自己最近的 2 個 Youbke 地點，支援新北市、台北市、桃園市地區。<br>以及目前跟 3 小時後、未來 3 天、未來 1 週的天氣預報。',
    image: new URL('@/assets/lineMessage_logo.png', import.meta.url).href,
    swiper: [
      new URL('@/assets/lineMessage_logo.png', import.meta.url).href,
      new URL('@/assets/lineMessage_1.png', import.meta.url).href,
      new URL('@/assets/lineMessage_2.png', import.meta.url).href,
      new URL('@/assets/lineMessage_3.png', import.meta.url).href,
      new URL('@/assets/lineMessage_4.png', import.meta.url).href,
      new URL('@/assets/lineMessage_5.png', import.meta.url).href,
      new URL('@/assets/lineMessage_6.png', import.meta.url).href,
      new URL('@/assets/lineMessage_7.png', import.meta.url).href,
    ],
    github: 'https://github.com/eliowei/linebot',
    page: 'https://github.com/eliowei/linebot',
    features: {},
    capabilities: [
      'YouBike 查詢(新北市、台北市、桃園市)',
      '天氣預報查詢(現在、未來3小時、未來3天、未來1週)',
    ],
    show: false,
  },
  {
    title: '卡牌遊戲',
    description: '使用HTML + CSS + jQuery開發的作品',
    details:
      '翻卡牌遊戲，按下OK後，過5秒卡牌會自動翻面，顯示遊戲開始，將所有相同花色數字卡牌翻面配對成功',
    image: new URL('@/assets/card_2.png', import.meta.url).href,
    swiper: [
      new URL('@/assets/card_1.png', import.meta.url).href,
      new URL('@/assets/card_2.png', import.meta.url).href,
      new URL('@/assets/card_3.png', import.meta.url).href,
    ],
    github: 'https://github.com/eliowei/Cards',
    page: 'https://eliowei.github.io/Cards/',
    features: {},
    capabilities: [
      '卡牌花色改變',
      '卡牌背面顏色 - 即時改變',
      '透視模式',
      '難度選擇 - 卡牌數量上限、次數限制',
      '風格 - 夜、日模式',
    ],
    show: true,
  },
  {
    title: '時鐘顯示與貪食蛇',
    details: '以FF系列為風格的時鐘，可透過按鈕切換時區、拖曳、影片以及貪食蛇遊戲',
    description: '使用HTML + CSS + JavaScript開發的作品',
    image: new URL('@/assets/clock_1.png', import.meta.url).href,
    swiper: [
      new URL('@/assets/clock_1.png', import.meta.url).href,
      new URL('@/assets/clock_2.png', import.meta.url).href,
      new URL('@/assets/clock_3.png', import.meta.url).href,
    ],
    github: 'https://github.com/eliowei/Clock',
    page: 'https://eliowei.github.io/Clock/',
    features: {},
    capabilities: ['時區切換(7個地區)', '時鐘樣式切換', '拖曳切換', '貪食蛇遊戲切換', '影片切換'],
    show: true,
  },
])

const data = ref([])

const expandedFeatures = reactive({})

const isLightbox = ref(false)
const currentImageIndex = ref(0)
const currentImage = ref('')
const sections = ref([
  { id: 'hero', name: '首頁' },
  { id: 'about', name: '關於我' },
  { id: 'projects', name: '作品集' },
  { id: 'contact', name: '聯絡我' },
])

const form = ref({
  name: '',
  email: '',
  message: '',
})
const loading = ref(false)

const scrollToSection = (id) => {
  if (id === 'hero') {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: 0,
      },
      ease: 'power2.inOut',
    })
    return
  }

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: `#${id}`,
    },
    ease: 'power2.inOut',
  })
}

const openLightbox = (image, index) => {
  isLightbox.value = true
  currentImage.value = image
  currentImageIndex.value = index
}

const closeLightbox = () => {
  isLightbox.value = false
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % data.value.swiper.length
  currentImage.value = data.value.swiper[currentImageIndex.value]
}

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + data.value.swiper.length) % data.value.swiper.length
  currentImage.value = data.value.swiper[currentImageIndex.value]
}

const toggleFeatures = (featureKey) => {
  expandedFeatures[featureKey] = !expandedFeatures[featureKey]
}

const onCardClick = (value) => {
  dialog.value = true
  data.value = value
}

const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: 0,
    },
    ease: 'power2.inOut',
  })
}
onMounted(() => {
  gsap.fromTo(
    hero.value,
    {
      backgroundPosition: '50% 0%', // 初始位置
    },
    {
      scrollTrigger: {
        trigger: hero.value,
        start: 'top top', // 改為從頂部開始
        end: 'bottom top',
        scrub: 1, // 添加平滑效果
        markers: false,
        invalidateOnRefresh: true, // 確保重新整理時重新計算
      },
      backgroundPosition: '50% 100%', // 結束位置
      ease: 'none',
    },
  )

  gsap.to(contact.value, {
    scrollTrigger: {
      trigger: contact.value,
      start: 'top 50%',
      end: 'bottom 0%',
      scrub: true,
      markers: false,
    },
    backgroundPosition: '50% -200%',
    ease: 'none',
  })

  gsap.to('.hero-content-section img', {
    scrollTrigger: {
      trigger: '.hero-content-section img',
      start: 'top 50%',
      end: 'bottom 0%',
      scrub: true,
      markers: false,
    },
    scale: 1.5,
    ease: 'none',
  })

  // 使用 ScrollTrigger.create 來設定滾動觸發
  // 關於我
  ScrollTrigger.create({
    trigger: '#about',
    start: '-50% center',
    markers: false,
    once: true,
    onEnter: () => {
      const groupTl = gsap.timeline()

      groupTl.from('#about div', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })
    },
  })
  // 作品集
  ScrollTrigger.create({
    trigger: '#projects',
    start: '-35% center',
    markers: false,
    once: true,
    onEnter: () => {
      const groupTl = gsap.timeline()

      groupTl.from('#projects>h2', {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
      groupTl.from('#projects>div', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })
    },
  })
  // 聯絡我
  ScrollTrigger.create({
    trigger: '#contact',
    start: '-50% center',
    markers: false,
    once: true,
    onEnter: () => {
      const groupTl = gsap.timeline()

      groupTl.from('#contact .contact-filter', {
        opacity: 1,
        background: 'rgba(0, 0, 0)',
        duration: 1,
      })
      groupTl.from('#contact>.contact-content', {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    },
  })

  emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY)
})

const sendEmail = async () => {
  loading.value = true
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
        to_email: import.meta.env.VITE_TO_EMAIL_ID,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    )
    alert('訊息已成功送出!')
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Error:', error)
    alert('發送失敗，請稍後再試')
  } finally {
    loading.value = false
  }
}
</script>
