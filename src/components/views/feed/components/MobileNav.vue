<script setup lang="ts">

import HomeIcon from "@/components/icons/HomeIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import BellIcon from "@/components/icons/BellIcon.vue";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
</script>

<template>
    <div class="w-full bg-black border-t border-t-white border-opacity-20 h-[53px] flex justify-evenly">
        <HomeIcon :size="26" />
        <search-icon :size="26" />
        <BellIcon :size="26" />
        <EnvelopeIcon :size="26" />
    </div>
</template>

<style scoped>

</style>