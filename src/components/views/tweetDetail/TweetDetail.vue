<script setup lang="ts">
import ThreeDot from "@/components/icons/ThreeDot.vue";
import {ref} from "vue";
import SadFace from "@/components/icons/SadFace.vue";
import FollowIcon from "@/components/icons/FollowIcon.vue";
import AddListIcon from "@/components/icons/AddListIcon.vue";
import MuteIcon from "@/components/icons/MuteIcon.vue";
import BlockItem from "@/components/icons/BlockItem.vue";
import TagItem from "@/components/icons/TagItem.vue";
import FlagItem from "@/components/icons/FlagItem.vue";
import ProfilePhoto from "@/components/UI/ProfilePhoto.vue";

const isDropOpen = ref<boolean>()
const transactionArr = ref<Array<{icon:any, title:string}>>([
    {
        icon: SadFace,
        title: 'Bu tweet ilgimi çekmiyor'
    },
    {
        icon: FollowIcon,
        title: '@vuejs adlı kullanıcıyı takip et'
    },
    {
        icon: AddListIcon,
        title: '@js adlı kişiyi listelere ekle / listelerden kaldır'
    },
    {
        icon: MuteIcon,
        title: '@angularjs adlı kullanıcıyı sustur'
    },
    {
        icon: BlockItem,
        title: '@jquery adlı kullanıcıyı engelle'
    },
    {
        icon: TagItem,
        title: 'Tweeti katıştır'
    },
    {
        icon: FlagItem,
        title: 'Tweeti bildir'
    }
])
</script>

<template>
    <div class="tweet-detail-wrapper">
        <div class="turn-back-wrapper">
            <span>b</span>
            <h2>Tweet</h2>
        </div>
        <div class="main-tweet">
            <ProfilePhoto :size="40" source="/src/assets/image/avatar.png" />
            <div class="tweet">
                <div class="tweet-owner-info">
                    <div class="flex flex-col">
                        <span class="name">Faruk</span>
                        <span class="nickname">@faruk</span>
                    </div>
                    <div class="relative ml-auto transactions-wrapper" ref="dropdown">
                        <div class="svg-wrapper" @click="isDropOpen=true">
                            <three-dot :size="18" color="#71767B"/>
                        </div>
                        <div class="tweet-transactions"  :class="isDropOpen ? 'open': ''">
                            <ul class="transactions">
                                <li v-for="(item, index) in transactionArr" class="transaction">
                                    <div class="svg-wrapper">
                                        <component :is="item.icon" :size="17"></component>
                                    </div>
                                    <span class="text-white font-semibold">{{item.title}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos illum incidunt nobis quasi! Accusantium at aut eaque eligendi eveniet illum iusto non placeat quos saepe suscipit, velit? Assumenda, deleniti.</p>
                <div v-if="true" class="tweet-image">
                    <img src="/src/assets/image/legolas.JPG" alt="">
                </div>
                <div class="footer">
                    <span>ÖÖ 13:50</span>
                    <span>24 haz 2023</span>
                    <span> <span class="display-count">12.4B</span> görüntülenme</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>