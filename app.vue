<template>
  <div>
    <div class="marquee-items-wrap font-mono text-md md:text-2xl text-gray-300 !sticky top-0 z-10 bg-[#1f1f23]">
      <div class="marquee-items marquee">
        <div class="marquee-item">
          18+ НАСТОЯЩИЙ МАТЕРИАЛ (ИНФОРМАЦИЯ) ПРОИЗВЕДЕН, РАСПРОСТРАНЕН ИНОСТРАННЫМ АГЕНТОМ КАТЕРИНОЙ ВЛАДИМИРОВНОЙ
          ГОРДЕЕВОЙ
        </div>
      </div>
      <div
        aria-hidden="true"
        class="marquee-items marquee"
      >
        <div class="marquee-item">
          18+ НАСТОЯЩИЙ МАТЕРИАЛ (ИНФОРМАЦИЯ) ПРОИЗВЕДЕН, РАСПРОСТРАНЕН ИНОСТРАННЫМ АГЕНТОМ КАТЕРИНОЙ ВЛАДИМИРОВНОЙ
          ГОРДЕЕВОЙ
        </div>
      </div>
    </div>

    <header class="flex flex-col justify-center items-center md:mb-8 bg-[#1f1f23]">
      <div class="!hidden max-w-screen-sm p-2">
        <p class="font-mono text-center text-md md:text-lg text-gray-300">
          18+ НАСТОЯЩИЙ МАТЕРИАЛ (ИНФОРМАЦИЯ) ПРОИЗВЕДЕН, РАСПРОСТРАНЕН ИНОСТРАННЫМ АГЕНТОМ КАТЕРИНОЙ ВЛАДИМИРОВНОЙ
          ГОРДЕЕВОЙ
        </p>
      </div>
      <div class="cover">
        <NuxtPicture
          src="/images/gordeeva_cover.png"
          densities="x1 x2"
          sizes="xs:640px sm:760px md:1024px lg:1280px xl:1536px '2xl':1920px '3xl':3072px"
          :imgAttrs="{ class: 'cover__image' }"
        />
      </div>
    </header>

    <main class="container max-w-screen-lg m-auto p-5">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
  useHead({
    title: 'Фандрайзинг – «Скажи Гордеевой»'
  })
</script>

<style lang="postcss">
  @import url("~/assets/css/styles.css");

  html {
    font-size: 18px;
  }

  p {
    @apply mb-2;
  }

  .marquee-items-wrap {
    position: relative;
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: 20px;
  }

  .marquee-items {
    flex-shrink: 0;
    display: flex;
    gap: 20px;
    counter-reset: item;
    justify-content: space-around;
    min-width: 100%;
  }

  .marquee-item {
    flex: 0 0 auto;
    counter-increment: item;
    border-radius: 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    transition: all 0.1s ease-in-out;
  }

  .marquee {
    animation: scroll 20s linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(calc(-100% - 20px));
    }
  }
</style>