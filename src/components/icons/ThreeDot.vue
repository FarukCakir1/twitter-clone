<script setup lang="ts">
import type {IconPropInterface} from "@/stores/interfaces/IconPropInterface";

const props = defineProps<IconPropInterface>();
</script>
<template>
    <svg :width="size ? size : 50" :fill="color ? color : 'white'" viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
</template>


<style scoped>

</style>