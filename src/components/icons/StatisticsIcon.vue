<script setup lang="ts">
import type {IconPropInterface} from "@/stores/interfaces/IconPropInterface";

const props = defineProps<IconPropInterface>();
</script>
<template>
    <svg :width="size ? size : 50" :fill="color ? color : 'white'" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>
</template>


<style scoped>

</style>