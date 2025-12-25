<template>
    <FieldSet>
        <FieldLegend>Display</FieldLegend>
        <FieldDescription>Turn items on or off to control what's displayed in the app.</FieldDescription>
        <FieldSeparator></FieldSeparator>
        <Field>
            <FieldLabel>Sidebar</FieldLabel>
            <FieldDescription>Select the items you want to display in the sidebar.</FieldDescription>
            <div class="space-y-2">
                <div class="flex gap-2 items-center" v-for="sidebar in sidebarContent" :key="sidebar.id">
                    <Checkbox id="sidebar.text" :default-value="(sidebar.id === 1 || sidebar.id === 2) ? true : false">
                    </Checkbox>
                    <Label>{{ sidebar.text }}</Label>
                </div>
            </div>
        </Field>
        <Field orientation="responsive">
            <Button>
                Update display
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
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
const sidebarContent = ref([
    {
        id: 1,
        text: 'Recents'
    },
    {
        id: 2,
        text: 'Home'
    },
    {
        id: 3,
        text: 'Applications'
    },
    {
        id: 4,
        text: 'Desktop'
    },
    {
        id: 5,
        text: 'Downloads'
    },
    {
        id: 6,
        text: 'Documents'
    }
])
</script>