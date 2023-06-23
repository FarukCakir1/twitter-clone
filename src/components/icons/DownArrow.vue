<script setup lang="ts">
import type {IconPropInterface} from "@/stores/interfaces/IconPropInterface";

const props = defineProps<IconPropInterface>();
</script>
<template>
    <svg :width="size ? size : 50" :fill="color ? color : 'white'" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-10ptun7 r-13hce6t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"><g><path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></g></svg>
</template>


<style scoped>

</style>