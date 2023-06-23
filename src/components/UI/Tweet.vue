<script setup lang="ts">

import ProfilePhoto from "@/components/UI/ProfilePhoto.vue";
import ThreeDot from "@/components/icons/ThreeDot.vue";
import CommentIcon from "@/components/icons/CommentIcon.vue";
import ReTweetIcon from "@/components/icons/ReTweetIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import StatisticsIcon from "@/components/icons/StatisticsIcon.vue";
import SendIcon from "@/components/icons/SendIcon.vue";
</script>

<template>
    <div class="tweet-wrapper">
        <ProfilePhoto :size="40" source="/src/assets/image/avatar.png" />
        <div class="tweet">
            <div class="tweet-owner-info">
                <span class="name">StartupCentrum</span>
                <span class="nickname">@startupcentrum</span>
                <span class="time">2s</span>
                <div class="svg-wrapper">
                    <three-dot :size="18" color="#71767B"/>
                </div>
            </div>
            <slot name="tweet"></slot>
            <div v-if="true" class="tweet-image">
                <img src="/src/assets/image/legolas.JPG" alt="">
            </div>
            <div class="actions">
              <div class="comment">
                  <CommentIcon :size="19" color="#71767B"/>
                  <span class="text-[#71767B] text-[13px]">17</span>
              </div>
                <div class="retweet">
                    <ReTweetIcon :size="19" color="#71767B"/>
                    <span class="text-[#71767B] text-[13px]">17</span>
                </div>
                <div class="like">
                    <HeartIcon :size="19" color="#71767B"/>
                    <span class="text-[#71767B] text-[13px]">17</span>
                </div>
                <div class="stats">
                    <StatisticsIcon :size="19" color="#71767B"/>
                    <span class="text-[#71767B] text-[13px]">17</span>
                </div>
                <div class="stats">
                    <SendIcon :size="19" color="#71767B"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>