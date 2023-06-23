<script setup lang="ts">
import FeedHeader from "@/components/views/feed/components/FeedHeader.vue";
import ShareTweetForm from "@/components/views/feed/components/ShareTweetForm.vue";
import Tweet from "@/components/UI/Tweet.vue";
import {ref} from "vue";
const tweetsWrapper = ref<HTMLDivElement>()
const scrollDiscoverBox = () => {
    const discoverSide = document.querySelector('.discover-side-wrapper')
    discoverSide.scrollTop = tweetsWrapper.value.scrollTop
}
</script>

<template>
    <div class="feed-wrapper" ref="tweetsWrapper" @scroll="scrollDiscoverBox">
        <FeedHeader :options="['Sana Özel', 'Takip Ettiklerin']"/>
        <share-tweet-form />
        <div class="tweets-wrapper" >
            <Tweet v-for="i in 5">
                <template v-slot:tweet>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolore laudantium numquam rem. Adipisci consequatur culpa distinctio eum exercitationem iste laborum repudiandae sapiente! Ad debitis, distinctio id pariatur saepe veniam.
                </template>
            </Tweet>
        </div>
    </div>
</template>

<style scoped>

</style>