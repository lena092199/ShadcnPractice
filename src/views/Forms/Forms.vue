<template>
    <div class="flex pt-3">
        <div class="pl-2">
            <SidebarTrigger />
        </div>
        <div class="w-full pl-2">
            <FieldSet>
                <div>
                    <FieldLegend class="text-2xl font-semibold">Settings</FieldLegend>
                    <FieldDescription>Manage your account settings and set e-mail preferences</FieldDescription>
                </div>
                <FieldSeparator></FieldSeparator>
                <FieldGroup>
                    <Field>
                        <FormsSidebar />
                    </Field>
                </FieldGroup>
            </FieldSet>
        </div>
    </div>



</template>
<script setup>
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from '@/components/ui/field'
import SidebarTrigger from '@/components/ui/sidebar/SidebarTrigger.vue';
import Separator from '@/components/ui/separator/Separator.vue';
import FormsSidebar from './FormsSidebar.vue';
</script>