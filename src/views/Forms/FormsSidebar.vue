<template>
    <div class="@container w-full">
        <div class="hidden @2xl:flex gap-7 w-full">
            <div class="flex">
                <Sidebar class=" bg-white @lg:w-45" collapsible="none">
                    <SidebarContent>
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
            <div class="w-full pr-10 xl:pr-60 pb-4">
                <RouterView></RouterView>
            </div>
        </div>
        <div class="@2xl:hidden block">
            <Tabs :model-value="activeTab" @update:model-value="navigateToTab">
                <TabsList>
                    <TabsTrigger v-for="item in FormsSidebar" :key="item.id" :value="item.value">
                        {{ item.content }}
                    </TabsTrigger>
                    <!-- <TabsTrigger value="priority">Priority</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="notification">Notification</TabsTrigger>
                <TabsTrigger value="display">Display</TabsTrigger> -->
                </TabsList>
                <TabsContent v-for="item in FormsSidebar" :key="`content-${item.id}`" :value="item.value"
                    class="pt-3 pl-1 pr-10">
                    <RouterView />
                </TabsContent>
            </Tabs>
        </div>
    </div>

</template>
<script setup>
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import { computed } from 'vue';

let FormsSidebar = ref([
    {
        id: 1,
        content: 'Priority',
        value: 'priority',
        url: 'Priority'
    },
    {
        id: 2,
        content: 'Account',
        value: 'account',
        url: 'Account'
    },
    {
        id: 3,
        content: 'Appearance',
        value: 'appearance',
        url: 'Appearance'
    },
    {
        id: 4,
        content: 'Notification',
        value: 'notification',
        url: 'Notification'
    },
    {
        id: 5,
        content: 'Display',
        value: 'display',
        url: 'Display'
    }
])

const route = useRoute()
const router = useRouter()

const activeTab = computed(() => {
    const routeName = route.name
    const item = FormsSidebar.value.find(item => item.url === routeName)
    return item?.value || 'priority'
})

const navigateToTab = (tabValue) => {
    const item = FormsSidebar.value.find(item => item.value === tabValue)
    if (item) {
        router.push({ name: item.url })
    }
}

</script>

<style scoped>
.sidebar {
    background-color: rgb(240, 240, 240)
}

.sidebar:hover {
    background-color: rgb(240, 240, 240)
}
</style>