<template>
    <FieldSet>
        <FieldLegend>Appearance</FieldLegend>
        <FieldDescription>Customize the appearance of the app. Automatically switch between day and night themes.
        </FieldDescription>
        <FieldSeparator></FieldSeparator>
        <Field>
            <FieldLabel>Font</FieldLabel>
            <div class="w-100">
                <NativeSelect>
                    <NativeSelectOption value="">Inter</NativeSelectOption>
                    <NativeSelectOption value="manrope">Manrope</NativeSelectOption>
                    <NativeSelectOption value="system">System</NativeSelectOption>
                </NativeSelect>
            </div>
            <FieldDescription>Set the font you want to use in the dashboard.</FieldDescription>
        </Field>
        <Field>
            <FieldLabel>Theme</FieldLabel>
            <FieldDescription>Select the theme for the dashboard.</FieldDescription>
            <Field orientation="horizontal">
                <div class="space-y-3 box-border">
                    <Card class="p-2 " :class="selectedTheme === 'light' ? 'border border-primary' : 'border-border'"
                        @click="selectedTheme = 'light'">
                        <CardContent class="p-0">
                            <div class="Light space-y-3 p-3" id="Light">
                                <div class="flex items-center space-x-4 bg-white rounded-xl">
                                    <div class="space-y-2 p-3">
                                        <div class="h-3 w-[250px] Light"></div>
                                        <div class="h-3 w-[200px] Light"></div>
                                    </div>
                                </div>
                                <div class="bg-white rounded-xl">
                                    <div class="flex items-center p-3 space-x-4">
                                        <div class="h-6 w-6 rounded-full bg-primary/10"></div>
                                        <div class="h-3 w-[200px] Light"></div>
                                    </div>
                                </div>
                                <div class="bg-white rounded-xl">
                                    <div class="flex items-center p-3 space-x-4">
                                        <div class="h-6 w-6 rounded-full bg-primary/10"></div>
                                        <div class="h-3 w-[200px] Light"></div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <span class="flex justify-center">Light</span>
                </div>

                <div class="space-y-3 box-border">
                    <Card class="p-2" :class="selectedTheme === 'dark' ? 'border border-primary' : 'border-border'"
                        @click="selectedTheme = 'dark'">
                        <CardContent class=" p-0">
                            <div class="Dark space-y-3 p-3" id="Dark">
                                <div class="flex items-center space-x-4 Dark-Bg-Color rounded-xl">
                                    <div class="space-y-2 p-3">
                                        <div class="h-3 w-[250px] Dark"></div>
                                        <div class="h-3 w-[200px] Dark"></div>
                                    </div>
                                </div>
                                <div class="Dark-Bg-Color rounded-xl">
                                    <div class="flex items-center p-3 space-x-4">
                                        <div class="h-6 w-6 rounded-full Dark-Content-Color"></div>
                                        <div class="h-3 w-[200px] Dark"></div>
                                    </div>
                                </div>
                                <div class="Dark-Bg-Color rounded-xl">
                                    <div class="flex items-center p-3 space-x-4">
                                        <div class="h-6 w-6 rounded-full Dark-Content-Color"></div>
                                        <div class="h-3 w-[200px] Dark"></div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <span class="flex justify-center">Dark</span>
                </div>
            </Field>
        </Field>
        <Field orientation="responsive">
            <Button>Update preferences</Button>
        </Field>
    </FieldSet>
</template>

<script setup>
import {
    Field,
    FieldDescription,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldError
} from '@/components/ui/field'
import {
    NativeSelect,
    NativeSelectOption,
} from '@/components/ui/native-select'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ref } from 'vue'
const selectedTheme = ref('light')
</script>

<style scoped>
.Light {
    border-radius: 14px;
    background-color: color-mix(in oklab, var(--primary) 10%, transparent);
}

.Dark {
    border-radius: 14px;
    background-color: #979daa;
}

.Dark-Bg-Color {
    background-color: #1c2444;
}

.Dark-Content-Color {
    background-color: #979daa;
}
</style>