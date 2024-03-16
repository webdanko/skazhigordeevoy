<script setup lang="ts">
defineProps({
  title: {
    type: String, required: true
  },
  show: {
    type: Boolean, default: false
  }
})
</script>

<template>
  <div :class="{
    'spoiler': true,
    'show': show
  }">
    <h4 :class="['spoiler__title']" @click="show = !show">
      {{ show ? 'Свернуть' : title }}
    </h4>
    <div class="spoiler__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.spoiler{
  @apply border-2 border-dashed rounded-2xl p-2 mb-8 overflow-hidden;
}

.spoiler .spoiler__title{
  @apply rounded-xl bg-gray-100 font-bold text-center p-4;
}

.spoiler .spoiler__content{
  @apply h-0 p-2 hidden;
  transition: height 300ms ease-in-out;
}

.spoiler.show .spoiler__content{
  @apply block h-auto;
}
</style>