<template>
    <SidebarProvider>
        <Sidebar collapsible="offcanvas">
            <SidebarHeader class="px-4">
                Shadcn Practice
            </SidebarHeader>
            <SidebarContent class="px-2">
                <SidebarMenu>
                    <SidebarMenuItem v-for="item in items" :key="item.title">
                        <SidebarMenuButton as-child :is-active="activeNav(item.url)">
                            <RouterLink :to="item.url">
                                <component :is="item.icon" />
                                <span>{{ item.title }}</span>
                            </RouterLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
        <div class="flex flex-col w-full">
            <div class=" h-screen">
                <RouterView></RouterView>
            </div>
        </div>

    </SidebarProvider>


</template>
<script setup>
import { SidebarProvider, SidebarTrigger, Sidebar, SidebarHeader, SidebarContent, } from '@/components/ui/sidebar'
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from '@/components/ui/sidebar'
import { Calendar, Home, Inbox, Disc3, Key } from 'lucide-vue-next'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref } from 'vue';
const items = ref(
    [
        {
            title: "Authentication",
            url: "/Authentication",
            icon: Key,
        },
        {
            title: "Tasks",
            url: "/Tasks",
            icon: Home,
        },
        {
            title: "Forms",
            url: "/Forms",
            icon: Inbox,
            bg: false
        },
        {
            title: "Music",
            url: "/Music",
            icon: Disc3,
        },
        {
            title: "Dashboard",
            url: "/Dashboard",
            icon: Calendar,
        }
    ]
)

const route = useRoute()
const activeNav = (url) => {
    return route.path.startsWith(url)
}
</script>s