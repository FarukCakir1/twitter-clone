<script setup lang="ts">
    import type {Component} from "vue";;
    import type {MenuItemsInterface} from "@/stores/interfaces/MenuItemsInterface";
    import TwitterBird from "@/components/icons/TwitterBird.vue";
    // If we wanted to use this component in more than one layout with different options, we would need such an array (menuItems). This may not be a requirement for this scenario.
    const props = defineProps<{
        menuItems: Array<MenuItemsInterface>
    }>()
</script>
<template>
    <div class="sidebar-container">
        <div class="logo">
            <TwitterBird :is-active="true" :size="30" color="#D6D9DB"/>
        </div>
        <div class="routes">
            <ul class="routes-list">
                <li v-for="(item, index) in menuItems">
                    <router-link class="single-route" :to="item.route">
                        <div class="icon-wrapper">
                            <component :is="item.icon" :size="27" :isActive="false"/>
                        </div>
                        <span class="route-title">{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <button>button komponenti buraya gelecek</button>
        <div class="profile-detail">

        </div>
    </div>
</template>


<style scoped>

</style>