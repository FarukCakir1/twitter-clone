<script setup lang="ts">
import FeedHeader from "@/components/views/feed/components/FeedHeader.vue";
import ShareTweetForm from "@/components/views/feed/components/ShareTweetForm.vue";
import Tweet from "@/components/UI/Tweet.vue";
import {onMounted, ref} from "vue";
import {apiService} from '../../../utils/appAxios.js'
import {TweetModel} from "@/stores/models/TweetModel";
import {ITweetFetch} from "@/stores/interfaces/ITweetFetch";
import {useTweetStore} from "@/stores/tweets";

const tweetsWrapper = ref<HTMLDivElement>()
const loading = ref<boolean>(true)
const store = useTweetStore()
const tweets = ref<Array<TweetModel>>([])
onMounted(async () => {
    loading.value = true
    await store.fetchTweets()
    tweets.value = store.getTweets
    loading.value = false
})
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
            <Tweet
                v-for="tweet in tweets"
                :user="tweet.user"
                :id="tweet.id"
                :media="tweet.media"
                :fav="tweet.fav"
                :retweet="tweet.retweet"
                :comment="tweet.comment"
                :comments="tweet.comments"
            >
                <template v-slot:tweet>
                    {{tweet.tweet}}
                </template>
            </Tweet>
        </div>
    </div>
</template>

<style scoped>

</style>