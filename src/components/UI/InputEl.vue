<script setup lang="ts">

import SearchIcon from "@/components/icons/SearchIcon.vue";
const props = defineProps<{
    placeholder: string
}>()
</script>

<template>
    <div class="input-wrapper">
        <div class="icon-wrapper">
          <SearchIcon :size="18" color="#71767B"/>
        </div>
        <input type="text" class="custom-input" :placeholder="placeholder">
    </div>
</template>

<style lang="css">
</style>