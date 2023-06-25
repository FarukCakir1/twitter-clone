<script setup lang="ts">
  import ProfilePhoto from "@/components/UI/ProfilePhoto.vue";
  import TwitterBird from "@/components/icons/TwitterBird.vue";

  const props = defineProps<{
      options:Array<string>
  }>()
</script>
<template>
    <div class="feed-header">
        <div class="flex w-1/2 justify-between">
            <h2 class="hidden mobile:block">Ana Sayfa</h2>
            <profile-photo source="/src/assets/image/avatar.png" :size="32" class="block mobile:hidden mt-3" @click="this.$emit('openSide')"/>
            <div class="block mobile:hidden mt-3 pl-3">
                <twitter-bird :size="24" color="#1DA1F2"/>
            </div>
        </div>
        <div class="content-options">
            <div v-for="(option, i) in options" class="option" :class="i === 1 ? 'active' : ''">
                <span>{{option}}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>