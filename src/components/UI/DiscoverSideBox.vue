<script setup lang="ts">


const props = defineProps<{
    title: string
}>()
</script>

<template>
    <div class="discover-box">
        <h1 class="title">{{title}}</h1>
        <div class="discover-box-body">
            <slot name="body"></slot>
        </div>
        <div class="discover-box-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>

</style>