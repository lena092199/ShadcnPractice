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
            <div class="h-screen">
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
import { ref, watch } from 'vue';
const items = ref(
    [
        {
            title: "Tasks",
            url: "/main/tasks",
            icon: Home,
        },
        {
            title: "Forms",
            url: "/main/forms",
            icon: Inbox,
            bg: false
        },
        {
            title: "Music",
            url: "/main/music",
            icon: Disc3,
        },
        {
            title: "Dashboard",
            url: "/main/dashboard",
            icon: Calendar,
        },
        // {
        //     title: "Authentication",
        //     url: "/main/authentication",
        //     icon: Key,
        // }
    ]
)

const route = useRoute()
const activeNav = (url) => {
    return route.path.startsWith(url)
}

watch(() => route.path, (newPath, oldPath) => {
    console.log(`路由从${oldPath}变化到${newPath}`);
});
</script>