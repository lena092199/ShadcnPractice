<template>
    <div class="flex border-b p-3 px-5 items-center">
        <DashBoardListMenu />
        <div class="hidden lg:flex gap-3 items-center px-5">
            <span v-for="(navC, index) in navContent" :key="index" :class="index === 0 ? 'text-red' : 'text-black/50'"
                class="text-sm">{{ navC }}</span>
        </div>
        <div class="flex lg:hidden px-5 ">
            <DropdownMenu>
                <DropdownMenuTrigger class="cursor-pointer">
                    <List class="stroke-black/70"></List>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup class="space-y-1">
                        <DropdownMenuItem v-for="(navC, index) in navContent" :key="index" class="text-sm "
                            :class="index === 0 ? 'bg-stone-200/50' : ''">
                            <span>
                                {{ navC }}
                            </span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div class="ml-auto flex gap-3 items-center">
            <Input placeholder="Search..." class="sm:block hidden">Search...</Input>
            <Avatar>
                <AvatarImage src="https://www.shadcn-vue.com/avatars/01.png"></AvatarImage>
            </Avatar>
        </div>
    </div>
    <div class="p-5 flex flex-col gap-3">
        <div class="flex flex-col">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-semibold">Dashboard</h1>
                <div class="gap-3 flex">
                    <DashboardRangeCalendar />
                    <Button>Download</Button>
                </div>
            </div>
        </div>
        <div class="h-full pt-4">
            <DashboardTabs />
        </div>
    </div>
</template>

<script setup>
import DashBoardListMenu from './DashBoardListMenu.vue'
import DashboardTabs from './DashBoardTabs.vue';
import DashboardRangeCalendar from './DashBoardRangeCalendar.vue'
import Button from '@/components/ui/button/Button.vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup } from '@/components/ui/dropdown-menu';
import { List } from 'lucide-vue-next';
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