<script setup lang="ts">

import ProfilePhoto from "@/components/UI/ProfilePhoto.vue";
import {ref} from "vue";
import ListIcon from "@/components/icons/ListIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";
import Bookmark from "@/components/icons/Bookmark.vue";
import CommunityIcon from "@/components/icons/CommunityIcon.vue";
import TwitterBlueIcon from "@/components/icons/TwitterBlueIcon.vue";
import DownArrow from "@/components/icons/DownArrow.vue";
import {detectOutsideClick} from "@/helpers/detectOutsideClick";

const menuItems = ref<Array<{
    title: string,
    route: string,
    icon: any
}>>([
    {
        title: 'Profil',
        route: '/',
        icon: ProfileIcon,
    },
    {
        title: 'Twitter Blue',
        route: '/',
        icon: TwitterBlueIcon,
    },
    {
        title: 'Listeler',
        route: '/',
        icon: ListIcon,
    },
    {
        title: 'Yer İşaretleri',
        route: '/',
        icon: Bookmark,
    },
    {
        title: 'Topluluklar',
        route: '/',
        icon: CommunityIcon,
    },
])
const isOpen = ref<boolean>(false)
const sidebar = ref<HTMLDivElement>();

detectOutsideClick(sidebar.value, () => {
    console.log('detected')
    isOpen.value = false
})

defineExpose({
    isOpen
})
</script>

<template>
    <div class="w-screen h-screen absolute bg-white bg-opacity-20 z-[100]" @click="isOpen = false" v-if="isOpen">
    </div>
    <div ref="sidebar" class="w-2/3 min-w-[270px] bg-black h-full duration-300 absolute z-[9999]" :class="isOpen ? 'translate-x-0' : 'translate-x-[-1000px]'">
        <div class="h-[53px] px-4 flex items-center justify-between">
            <h2 class="text-white font-semibold">Hesap Bilgileri</h2>
            <span class="text-white text-[18px] font-light pr-4" @click="isOpen = false">X</span>
        </div>
        <div class="p-4 flex flex-col">
            <div class="flex gap-3 justify-between">
                <profile-photo source="/src/assets/image/avatar.png" :size="40" />
                <div class="h-[40px] w-[40px] flex items-center justify-center rounded-full border border-white border-opacity-30">
                    <span class="text-white text-2xl">+</span>
                </div>
            </div>
            <div class="flex flex-col mt-2">
                <span class="text-white text-[17px] font-semibold">Faruk Çakır</span>
                <span class="text-[#71767B] text-[14px]">@ffdev</span>
            </div>
            <div class="w-full flex gap-5 items-center mt-3">
                <span class="text-[#71767B] text-[14px]"><span class="text-white font-semibold mr-1">78</span>Takip edilen</span>
                <span class="text-[#71767B] text-[14px]"><span class="text-white font-semibold mr-1">95</span>Takipçi</span>
            </div>
        </div>
        <div class="flex w-full">
            <ul class="w-full flex flex-col">
                <li class="w-full" v-for="(item, index) in menuItems" :key="index">
                    <router-link :to="item.route" class="w-full flex p-4 gap-6">
                        <component :is="item.icon" :size="24"/>
                        <span class="text-white text-[20px] font-semibold">
                              {{item.title}}
                          </span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="w-full flex flex-col">
            <ul class="w-full px-4 ">
                <li class="border-t border-t-white border-opacity-20 w-full flex py-4 justify-between">
                      <span class="text-white text-[15px] font-semibold">
                          İçerik üreticisi Stüdyosu
                      </span>
                    <DownArrow :size="20"/>
                </li>
                <li class="w-full flex py-4 justify-between">
                      <span class="text-white text-[15px] font-semibold">
                          Profesyonel Araçlar
                      </span>
                    <DownArrow :size="20"/>
                </li>
                <li class="w-full flex py-4 justify-between">
                      <span class="text-white text-[15px] font-semibold">
                          Ayarlar Ve Destek
                      </span>
                    <DownArrow :size="20"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>