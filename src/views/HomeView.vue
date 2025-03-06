<template>
  <main>
    <section id="about" class="p-10 flex justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h2 class="text-3xl font-semibold mb-4">關於我</h2>
        <img
          src="https://picsum.photos/300/200/?random=10"
          alt="個人照片"
          class="w-32 h-32 mx-auto rounded-full mb-4"
        />
        <p>
          你好，我是 李柏偉 ，一名熱愛前端開發，剛受完泰山職訓的程式小白，擅長 Vue.js 和 Bootstrap
          CSS。
        </p>
        <button
          class="hover:cursor-pointer hover:bg-gradient-to-tr hover:from-[#ff80b5c] hover:to-[#a998e6] p-2 rounded-lg border border-gray-200 mt-5 duration-300 ease-in-out"
        >
          查看更多...
        </button>
      </div>
    </section>

    <section id="projects" class="p-10 bg-white text-center">
      <h2 class="text-3xl font-semibold mb-4">專案作品</h2>

      <div class="flex">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <!-- 🔹 前端專題卡片 -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <img
              src="https://picsum.photos/300/200/?random=1"
              alt="前端專題"
              class="w-full h-40 object-cover rounded-lg"
            />
            <h3 class="text-2xl font-bold text-gray-800">前端專題</h3>
            <p class="text-gray-600 mt-2">使用 Vue 3 + Vuetify 製作的前端專案。</p>
            <a
              href="https://github.com/eliowei/game-together"
              target="_blank"
              class="text-blue-500 font-medium mt-4 block"
              >查看 GitHub</a
            >
          </div>

          <!-- 🔹 後端專題卡片 -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <img
              src="https://picsum.photos/300/200/?random=2"
              alt="前端專題"
              class="w-full h-40 object-cover rounded-lg"
            />
            <h3 class="text-2xl font-bold text-gray-800">後端專題</h3>
            <p class="text-gray-600 mt-2">使用 Node.js + Express + MongoDB 開發的 API。</p>
            <a
              href="https://github.com/eliowei/game-together-back"
              target="_blank"
              class="text-blue-500 font-medium mt-4 block"
              >查看 GitHub</a
            >
          </div>

          <!-- 🔹 LINE 機器人卡片 -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <img
              src="https://picsum.photos/300/200/?random=3"
              alt="前端專題"
              class="w-full h-40 object-cover rounded-lg"
            />
            <h3 class="text-2xl font-bold text-gray-800">LINE 機器人</h3>
            <p class="text-gray-600 mt-2">使用 Line Bot API + Node.js 開發的聊天機器人。</p>
            <a
              href="https://github.com/eliowei/linebot"
              target="_blank"
              class="text-blue-500 font-medium mt-4 block"
              >查看 GitHub</a
            >
          </div>
        </div>
      </div>
    </section>

    <section id="resume" class="p-10 flex justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h2 class="text-3xl font-semibold mb-4">履歷</h2>
        <p>技能：Vue.js, JavaScript, Bootstrap, Node.js</p>
        <p>教育背景：健行科技大學 - 資訊管理</p>
      </div>
    </section>

    <section id="contact" class="p-10 bg-white flex justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h2 class="text-3xl font-semibold mb-4">聯絡方式</h2>
        <p>Email: zxc160604@gmail.com</p>
        <p>GitHub: <a href="https://github.com/eliowei" class="text-blue-500">你的 GitHub</a></p>
      </div>
    </section>
  </main>
</template>
