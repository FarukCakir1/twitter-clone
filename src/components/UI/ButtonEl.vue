<script setup lang="ts">

  const props = defineProps<{
      text: string,
      type: string,
      height: number
  }>()
</script>

<template>
    <button :style="{height: `${height}px`}" class="btn" :class="type">
        {{ text }}
    </button>
</template>

<style scoped>

</style>