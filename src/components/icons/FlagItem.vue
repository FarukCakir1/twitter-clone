<script setup lang="ts">
import type {IconPropInterface} from "@/stores/interfaces/IconPropInterface";

const props = defineProps<IconPropInterface>();
</script>
<template>
    <svg :width="size ? size : 50" :fill="color ? color : 'white'" viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"></path></g></svg>
</template>


<style scoped>

</style>