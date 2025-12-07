<template>
    <div class="flex h-full min-w-[1000px]">
        <SidebarTrigger class="cursor-pointer " />
        <div class="bg-black h-full text-white flex-1 p-6 flex flex-col">

            <p>Acme Inc</p>
            <div class="mt-auto">
                <p>
                    This library has saved me countless hours of work and helped me deliver stunning designs to my
                    clients faster than ever before.
                </p>
                <footer>Sofia Davis</footer>
            </div>
        </div>

        <div class="flex flex-col flex-1">
            <div class="start-0 w-full flex justify-end px-3 pt-2">
                <Button variant="ghost">Login</Button>
            </div>
            <div class="flex items-center w-full h-full justify-center">
                <Card class="w-full max-w-sm">
                    <CardHeader class="w-full">
                        <CardTitle class="w-full text-2xl flex justify-center cursor-default">Create an account
                        </CardTitle>
                        <CardDescription class="text-zinc-500 flex justify-center cursor-default">
                            Enter your email below to create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form class="flex flex-col gap-3">
                            <Input type="text" placeholder="name@example.com" class="py-1 px-3 w-full" />
                            <Button>Sign In with Email</Button>
                            <div class="flex items-center w-full">
                                <Separator class="my-4 w-full flex flex-1" />
                                <span class="text-sm text-gray-500 px-2 cursor-default">OR CONTENT WITH</span>
                                <Separator class="my-4 w-full flex flex-1" />
                            </div>
                            <Button variant="outline">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                    alt="GitHub" class="w-5 h-5 mr-2" />
                                GitHub</Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <CardDescription class="text-zinc-500 cursor-default">
                            By clicking continue,you agree to our
                            <span class="underline font-medium cursor-pointer">Terms of Service</span> and
                            <span class="underline font-medium cursor-pointer">Privacy Policy</span>
                        </CardDescription>
                    </CardFooter>
                </Card>
            </div>

        </div>
    </div>

</template>
<script setup>
import Button from '@/components/ui/button/Button.vue';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar'
</script>