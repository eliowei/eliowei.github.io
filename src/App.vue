<template>
  <transition name="fade">
    <section
      class="loading-overlay fixed inset-0 z-[9999] flex h-full w-full items-center justify-center bg-black"
      v-if="isFirstLoad || !isPageReady"
    >
      <div
        class="absolute top-1/2 left-1/2 z-100000 flex -translate-x-1/2 -translate-y-1/2 transform-gpu flex-wrap"
      >
        <div class="loader">
          <span style="--n: 1">l</span>
          <span style="--n: 2">o</span>
          <span style="--n: 3">a</span>
          <span style="--n: 4">d</span>
          <span style="--n: 5">i</span>
          <span style="--n: 6">n</span>
          <span style="--n: 7">g</span>
        </div>
      </div>
    </section>
  </transition>
  <div class="bg-white" v-if="!isFirstLoad && isPageReady">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span>Elio Wei</span>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-all duration-300 hover:cursor-pointer hover:bg-gray-400/10"
            @click="showMenu = true"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="mr-10 hidden lg:flex lg:gap-x-12">
          <a
            href="#about"
            class="relative text-sm/6 font-semibold text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transform-gpu after:bg-gray-900 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            @click.prevent="scrollTo('about')"
            >關於我</a
          >
          <a
            href="#projects"
            class="relative text-sm/6 font-semibold text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transform-gpu after:bg-gray-900 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            @click.prevent="scrollTo('projects')"
            >作品集</a
          >
          <a
            href="#contact"
            class="relative text-sm/6 font-semibold text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transform-gpu after:bg-gray-900 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            @click.prevent="scrollTo('contact')"
            >聯絡我</a
          >
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="lg:hidden" role="dialog" aria-modal="true" v-show="showMenu">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>
        <div
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5" @click="showMenu = false">
              <span>Elio Wei</span>
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700 transition-all duration-300 hover:cursor-pointer hover:rounded-4xl hover:bg-gray-400/10"
              @click="showMenu = false"
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
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  href="#about"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  @click.prevent="scrollTo('about')"
                  >關於我</a
                >
                <a
                  href="#projects"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  @click.prevent="scrollTo('projects')"
                  >作品集</a
                >
                <a
                  href="#contact"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  @click.prevent="scrollTo('contact')"
                  >聯絡我</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5c] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>
    </div>
  </div>
  <RouterView v-if="!isFirstLoad && isPageReady" />
  <footer
    class="flex h-[100px] flex-col items-center justify-center"
    v-if="!isFirstLoad && isPageReady"
  >
    <a href="https://github.com/eliowei"
      ><img src="./assets/github-icon.svg" class="mb-3 w-10"
    /></a>
    <span class="text-xs">©2025 by Elio Wei rights reserved.</span>
  </footer>
</template>

<style>
/* 淡入淡出效果 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(8px);
  background: black;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  backdrop-filter: blur(0);
  background: black;
}

.loader {
  color: dodgerblue;
  font-size: 1.5em;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 40em;
  height: 3em;
  animation: change-color 10s linear infinite;
}

.loader span {
  animation: moving 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

@keyframes change-color {
  to {
    filter: hue-rotate(1turn);
  }
}

@keyframes moving {
  0% {
    filter: opacity(0);
    transform: rotate(-180deg);
    left: 100%;
  }

  33% {
    filter: opacity(1);
    transform: rotate(0deg);
    left: 60%;
  }

  66% {
    filter: opacity(1);
    transform: rotate(0deg);
    left: 40%;
  }

  100% {
    filter: opacity(0);
    transform: rotate(180deg);
    left: 0;
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const showMenu = ref(false)
const router = useRouter()
const isFirstLoad = ref(true)
const isPageReady = ref(false)

const scrollTo = (id) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: `#${id}`,
      autoKill: true,
    },
    ease: 'power2.inOut',
  })
  showMenu.value = false
}

onMounted(() => {
  if (isFirstLoad.value) {
    // 監聽路由是否完成載入
    router.isReady().then(() => {
      isPageReady.value = true

      setTimeout(() => {
        isFirstLoad.value = false
      }, 1500)
    })
  }
})
</script>
