<script setup lang="ts">
  const props = defineProps<{
      options:Array<string>
  }>()
</script>
<template>
    <div class="feed-header">
      <h2>Ana Sayfa</h2>
        <div class="content-options">
            <div v-for="(option, i) in options" class="option" :class="i === 1 ? 'active' : ''">
                <span>{{option}}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>