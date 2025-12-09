<template>
    <Tabs default-value="overview">
        <TabsList class="flex gap-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger>Analytics</TabsTrigger>
            <TabsTrigger>Reports</TabsTrigger>
            <TabsTrigger>Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" class="pt-5">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                <Card v-for="fourcontent in fourCard" :key="fourcontent.id"
                    class="flex-1 sm:basis-1/3 md:basis-1/4 gap-2 ">
                    <CardHeader>
                        <CardTitle>{{ fourcontent.name }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span class="font-semibold text-xl">{{ fourcontent.price }}</span>
                        <CardDescription>
                            {{ fourcontent.change }}
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 pt-5 gap-5">
                <DashboardChart class="xl:col-span-3" />
                <Card class="h-full mt-5 xl:col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>You made 265 sales this month</CardDescription>
                    </CardHeader>
                    <CardContent class="gap-6 flex flex-col h-full">
                        <div v-for="recentsales in recentSales" :key="recentSales.id" class="flex items-center">
                            <Avatar>
                                <AvatarImage :src="recentsales.icon"></AvatarImage>
                            </Avatar>
                            <div class="flex flex-col pl-3 flex-wrap min-w-0 w-full">
                                <div class="text-sm">{{ recentsales.description1 }}</div>
                                <div class="text-sm text-muted-foreground">{{ recentsales.description2 }}</div>
                            </div>
                            <div class="ml-auto font-medium">{{ recentsales.price }}</div>
                        </div>
                    </CardContent>
                </Card>
            </div>


        </TabsContent>
    </Tabs>
</template>

<script setup>
import DashboardChart from './DashboardChart.vue'
import { ref } from 'vue'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'
let fourCard = ref([
    {
        id: 1,
        name: "Total Revenue",
        price: "$45,231.89",
        change: "+20.1% from last month",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" class="img1 font-c5">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6">
                                    </path>
                                </svg>`
    },
    {
        id: 2,
        name: "Subscriptions",
        price: "+2350",
        change: "+180.1% from last month",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" class="img1 font-c5">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>`
    },
    {
        id: 3,
        name: "Sales",
        price: "+12,234",
        change: "+19% from last month",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" class="img1 font-c5">
                                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                    <path d="M2 10h20"></path>
                                </svg>`
    },
    {
        id: 4,
        name: "Active Now",
        price: "+573",
        change: "+201 since last hour",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" class="img1 font-c5">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>`
    }
])

let recentSales = ref([
    {
        id: 1,
        icon: 'https://www.shadcn-vue.com/avatars/01.png',
        description1: "Olivia Marth",
        description2: "olivia.martin@email.com",
        price: "+$1,999.00",
    },
    {
        id: 2,
        icon: 'https://www.shadcn-vue.com/avatars/02.png',
        description1: "Jackson Lee",
        description2: "Jackson.lee@email.com",
        price: "+$39.00",
    },
    {
        id: 3,
        icon: 'https://www.shadcn-vue.com/avatars/03.png',
        description1: "Lsabella Nguyen",
        description2: "Lsabella.nguyenn@email.com",
        price: "+$299.00",
    },
    {
        id: 4,
        icon: 'https://www.shadcn-vue.com/avatars/04.png',
        description1: "William Kim",
        description2: "william.kim@email.com",
        price: "+$99.00",
    },
    {
        id: 5,
        icon: 'https://www.shadcn-vue.com/avatars/05.png',
        description1: "Sofia Davis",
        description2: "sofia.davis@email.com",
        price: "+$39.00",
    }
])
</script>