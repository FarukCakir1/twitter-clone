<script setup lang="ts">
import type {IconPropInterface} from "@/stores/interfaces/IconPropInterface";

const props = defineProps<IconPropInterface>();
</script>
<template>
    <svg :width="size ? size : 50" :fill="color ? color : 'white'" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style="color: rgb(239, 243, 244);"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
</template>


<style scoped>

</style>