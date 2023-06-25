<script setup lang="ts">

  import ShareTweetIcon from "@/components/icons/ShareTweetIcon.vue";

  const props = defineProps<{
      text: string,
      type: string,
      height: number,
      icon?:boolean
  }>()
</script>

<template>
    <button :style="{height: `${height}px`}" class="btn" :class="type">
        <i v-if="icon" class="icon-wrapper">
            <ShareTweetIcon :size="24"/>
        </i>
        <span class="btn-text">
            {{ text }}
        </span>
    </button>
</template>

<style scoped>

</style>