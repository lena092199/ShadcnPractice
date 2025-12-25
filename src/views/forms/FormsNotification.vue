<template>
    <FieldSet>
        <FieldLegend>Notifications</FieldLegend>
        <FieldDescription>Configure how you receive notifications.</FieldDescription>
        <FieldSeparator></FieldSeparator>
        <Field>
            <FieldLabel>Notify me about...</FieldLabel>
            <RadioGroup default-value="default">
                <div class="flex items-center space-x-3">
                    <RadioGroupItem id="r1" value="default" />
                    <Label for="r1">All new messages</Label>
                </div>
                <div class="flex items-center space-x-3">
                    <RadioGroupItem id="r1" value="mentions" />
                    <Label for="r1">Direct messages and mentions</Label>
                </div>
                <div class="flex items-center space-x-3">
                    <RadioGroupItem id="r1" value="nothing" />
                    <Label for="r1">Nothing</Label>
                </div>
            </RadioGroup>
        </Field>
        <Field>
            <FieldLabel>Email Notifications</FieldLabel>
            <div class="py-4 px-5 border rounded-lg" v-for="text in content" :key="text.id">
                <div class="flex items-center">
                    <div class="space-y-1">
                        <FieldLabel>{{ text.content1 }}</FieldLabel>
                        <FieldDescription>{{ text.content2 }}</FieldDescription>
                    </div>
                    <div class="ml-auto">
                        <Switch :default-value="(text.id === 3 || text.id === 4) ? true : false"></Switch>
                    </div>
                </div>
            </div>
        </Field>
        <Field>
            <div class="flex gap-3">
                <Checkbox></Checkbox>
                <div class="flex flex-col gap-2">
                    <Label>Use different settings for my mobile devices</Label>
                    <p class="text-muted-foreground text-sm">
                        You can manage your mobile notifications in the mobile settings page.</p>
                </div>
            </div>
        </Field>
        <Field orientation="responsive">
            <Button>
                Update notifications
            </Button>
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
    FieldError,
    FieldTitle,
    FieldContent
} from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
    RadioGroup,
    RadioGroupItem,
} from '@/components/ui/radio-group'
import { Card } from '@/components/ui/card'
import { Option } from 'lucide-vue-next'

let content = ref([
    {
        id: 1,
        content1: "Communication emails",
        content2: "Receive emails about your account activity.",
        active: false
    },
    {
        id: 2,
        content1: "Marketing emails",
        content2: "Receive emails about your account activity.",
        active: false
    },
    {
        id: 3,
        content1: "Social emails",
        content2: "Receive emails for friend requests, follows, and more.",
        active: true
    },
    {
        id: 4,
        content1: "Security emails",
        content2: "Receive emails about your account activity and security.",
        active: true
    }
])
</script>