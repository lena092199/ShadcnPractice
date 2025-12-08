<script setup lang="ts">
import { type Table } from '@tanstack/vue-table'
import { type Task } from './TasksData.vue'
import { ChevronLeft } from 'lucide-vue-next'
import { ChevronRight } from 'lucide-vue-next'
import { ChevronsLeft } from 'lucide-vue-next'
import { ChevronsRight } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface DataTablePaginationProps {
    table: Table<Task>
}
defineProps<DataTablePaginationProps>()
</script>

<template>
    <div class="flex items-center">
        <!-- <div class="flex-1 text-sm text-muted-foreground">
            {{ table.getFilteredSelectedRowModel().rows.length }} of
            {{ table.getFilteredRowModel().rows.length }} row(s) selected.
        </div> -->
        <div class="flex-col flex md:flex-row md:items-center items-end gap-3 md:gap-4">
            <div class="flex items-center space-x-3 m-0">
                <div class="flex items-center justify-center text-sm font-medium">
                    Page {{ table.getState().pagination.pageIndex + 1 }} of
                    {{ table.getPageCount() }}
                </div>
                <div class="flex items-center space-x-2 ">
                    <Button variant="outline" class="w-9 h-9 p-0 lg:flex" :disabled="!table.getCanPreviousPage()"
                        @click="table.setPageIndex(0)">
                        <span class="sr-only">Go to first page</span>
                        <ChevronsLeft class="w-4 h-4" />
                    </Button>
                    <Button variant="outline" class="w-9 h-9 p-0" :disabled="!table.getCanPreviousPage()"
                        @click="table.previousPage()">
                        <span class="sr-only">Go to previous page</span>
                        <ChevronLeft class="w-4 h-4" />
                    </Button>
                    <Button variant="outline" class="w-9 h-9 p-0" :disabled="!table.getCanNextPage()"
                        @click="table.nextPage()">
                        <span class="sr-only">Go to next page</span>
                        <ChevronRight class="w-4 h-4" />
                    </Button>
                    <Button variant="outline" class="w-9 h-9 p-0 lg:flex" :disabled="!table.getCanNextPage()"
                        @click="table.setPageIndex(table.getPageCount() - 1)">
                        <span class="sr-only">Go to last page</span>
                        <ChevronsRight class="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <p class="text-sm font-medium">
                    Rows per page
                </p>
                <Select :model-value="`${table.getState().pagination.pageSize}`"
                    @update:model-value="table.setPageSize">
                    <SelectTrigger class="px-3 flex gap-4">
                        <SelectValue :placeholder="`${table.getState().pagination.pageSize}`" />
                    </SelectTrigger>
                    <SelectContent side="top">
                        <SelectItem v-for="pageSize in [10, 20, 30, 40, 50]" :key="pageSize" :value="`${pageSize}`">
                            {{ pageSize }}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>


        </div>
    </div>
</template>
