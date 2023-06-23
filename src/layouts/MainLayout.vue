<script setup lang="ts">
// Icons
import Bookmark from "@/components/icons/Bookmark.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import BellIcon from "@/components/icons/BellIcon.vue";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
import ListIcon from "@/components/icons/ListIcon.vue";
import CommunityIcon from "@/components/icons/CommunityIcon.vue";
import ApprovedIcon from "@/components/icons/ApprovedIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";
import MoreIcon from "@/components/icons/MoreIcon.vue";
// Components
import SidebarEl from "@/components/shared/SidebarEl.vue";
// Interfaces
import type {MenuItemsInterface} from "@/stores/interfaces/MenuItemsInterface";
// Vue helpers
import {ref} from "vue";
import DiscoverSide from "@/components/shared/DiscoverSide.vue";


// variables
const menuItems = ref<Array<MenuItemsInterface>>([
    {
        title: 'Ana sayfa',
        route: '/',
        icon: HomeIcon,
    },
    {
        title: 'Keşfet',
        route: '/',
        icon: SearchIcon,
    },
    {
        title: 'Bildirimler',
        route: '/',
        icon: BellIcon,
    },
    {
        title: 'Mesajlar',
        route: '/',
        icon: EnvelopeIcon,
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
    {
        title: 'Onaylanmış',
        route: '/',
        icon: ApprovedIcon,
    },
    {
        title: 'Profil',
        route: '/',
        icon: ProfileIcon,
    },
    {
        title: 'Daha Fazlası',
        route: '/',
        icon: MoreIcon,
    },
])
</script>

<template>
    <div class="w-screen h-screen bg-black overflow-hidden">
        <div class="main-layout mx-auto px-10">
            <sidebar-el :menu-items="menuItems" />
            <router-view></router-view>
            <discover-side />
        </div>
    </div>
</template>

<style scoped>

</style>