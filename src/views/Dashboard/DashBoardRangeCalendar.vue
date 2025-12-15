<script setup lang="ts">
import type { DateRange } from 'reka-ui'
import { getLocalTimeZone, today } from '@internationalized/date'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { ref, type Ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const dateRange = ref({
  start,
  end,
}) as Ref<DateRange>
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <Button variant="outline">Calendar</Button>
    </PopoverTrigger>
    <PopoverContent class="w-fit p-0">
      <RangeCalendar v-model="dateRange" class="rounded-md border shadow-sm" :number-of-months="2"
        disable-days-outside-current-view />
    </PopoverContent>
  </Popover>

</template>
