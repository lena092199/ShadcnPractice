<template>
    <div class="flex min-w-[600px] gap-7">
        <div class="flex w-60">
            <Sidebar collapsible="none">
                <SidebarContent class="bg-white">
                    <SidebarMenu>
                        <SidebarMenuItem v-for="sidebarContent in FormsSidebar" :key="sidebarContent.id">
                            <SidebarMenuButton class="mt-2 cursor-pointer"
                                :class="route.name === sidebarContent.url ? 'sidebar' : ''">
                                <RouterLink :to="{ name: sidebarContent.url }">
                                    {{ sidebarContent.content }}
                                </RouterLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
        </div>
        <div class="w-full pr-60 pb-4">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script setup>
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

let FormsSidebar = ref([
    {
        id: 1,
        content: 'Priority',
        url: 'Priority'
    },
    {
        id: 2,
        content: 'Account',
        url: 'Account'
    },
    {
        id: 3,
        content: 'Appearance',
        url: 'Appearance'
    },
    {
        id: 4,
        content: 'Notification',
        url: 'Notification'
    },
    {
        id: 5,
        content: 'Display',
        url: 'Display'
    }
])
const route = useRoute()
</script>

<style scoped>
.sidebar {
    background-color: rgb(240, 240, 240)
}

.sidebar:hover {
    background-color: rgb(240, 240, 240)
}
</style>