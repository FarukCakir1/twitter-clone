<script setup lang="ts">

  const props = defineProps<{
      source?: string,
      size: number
  }>()
</script>

<template>
    <div class="img-wrapper">
        <img :style="{width: `${size}px`, height: `${size}px`}" :src="source" alt="">
    </div>
</template>

<style scoped>

</style>