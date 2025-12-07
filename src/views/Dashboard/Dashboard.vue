<template>
    <div class="flex border-b p-3 items-center min-w-[700px]">
        <DashboardAlicia />
        <div class="flex gap-3 items-center pl-5">
            <span v-for="(navC, index) in navContent" :key="index" :class="index === 0 ? 'text-red' : 'text-black/50'"
                class="text-sm">{{ navC }}</span>
        </div>
        <div class="ml-auto flex gap-3 items-center">
            <Input placeholder="Search...">Search...</Input>
            <Avatar>
                <AvatarImage src="https://www.shadcn-vue.com/avatars/01.png"></AvatarImage>
            </Avatar>
        </div>

    </div>
    <div class="p-4 flex flex-col gap-3 min-w-[700px]">
        <div class="flex flex-col">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-semibold">Dashboard</h1>
                <div class="gap-3 flex">
                    <DashboardRangeCalendar />
                    <Button>Download</Button>
                </div>
            </div>
        </div>
        <div class="h-full">
            <DashboardTabs />
        </div>
    </div>
</template>

<script setup>
import DashboardAlicia from './DashboardAlicia.vue'
import DashboardTabs from './DashboardTabs.vue';
import DashboardRangeCalendar from './DashbpardRangeCalendar.vue'
import Button from '@/components/ui/button/Button.vue';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'

const navContent = ref([
    'Overview', 'Customers', 'Products', 'Settings'
])

</script>