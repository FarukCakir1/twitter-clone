<script setup lang="ts">
import FeedHeader from "@/components/views/feed/components/FeedHeader.vue";
import ShareTweetForm from "@/components/views/feed/components/ShareTweetForm.vue";
import Tweet from "@/components/UI/Tweet.vue";
import {ref, onMounted, reactive, watch} from "vue";
import {apiService} from '../../../utils/appAxios.js'
import {TweetModel} from "@/stores/models/TweetModel";
import {ITweetFetch} from "@/stores/interfaces/ITweetFetch";
import {useTweetStore} from "@/stores/tweets";
import _ from 'lodash'
import ButtonEl from "@/components/UI/ButtonEl.vue";
import MobileNav from "@/components/views/feed/components/MobileNav.vue";
import MobileSidebar from "@/components/views/feed/components/MobileSidebar.vue";


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
const mobileSidebar = ref<any>()
const shareTweet = async (e) => {
    const newTweet = {
        id: Math.random() * 100000,
        user: {full_name: 'startupcentrum', user_name: '@startupcentrum', avatar: '/src/assets/image/avatar.png'},
        tweet: e,
        media: null,
        fav: 0,
        retweet: 0,
        comment: 0,
        comments: null,
        created_at: new Date()
    }
    tweets.value = [new TweetModel(newTweet), ...tweets.value]
    await store.postTweet(newTweet)
}
const scrollDiscoverBox = () => {
    const discoverSide = document.querySelector('.discover-side-wrapper')
    discoverSide.scrollTop = tweetsWrapper.value.scrollTop
}

const openSideMenu = () => {
    mobileSidebar.value.isOpen = true
}
</script>

<template>
    <div class="feed-wrapper" ref="tweetsWrapper" @scroll="scrollDiscoverBox">
        <FeedHeader :options="['Sana Özel', 'Takip Ettiklerin']" @openSide="openSideMenu"/>
        <share-tweet-form @shareTweet="shareTweet" :is-in-comment="false"/>
        <div class="tweets-wrapper" >
            <Tweet
                v-for="(tweet, index) in tweets"
                :key="index"
                :user="tweet.user"
                :id="tweet.id"
                :media="tweet.media"
                :fav="tweet.fav"
                :retweet="tweet.retweet"
                :comment="tweet.comment"
                :comments="tweet.comments"
                :created_at="tweet.created_at"
            >
                <template v-slot:tweet>
                    {{tweet.tweet}}
                </template>
            </Tweet>
        </div>
        <div class="fixed w-full bottom-0 block mobile:hidden">
            <button-el :icon="true" text="" type="blue" :height="56" class="!w-[56px] ml-auto mr-3 mb-5"/>
            <mobile-nav />
        </div>
        <MobileSidebar ref="mobileSidebar"/>
    </div>
</template>

<style scoped>

</style>