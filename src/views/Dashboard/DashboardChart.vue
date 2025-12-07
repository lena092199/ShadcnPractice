<template>
    <ChartContainer :config="chartConfig">
        <VisXYContainer :data="chartData">
            <VisGroupedBar :x="(d: Data) => d.date" :y="(d: Data) => d.total" :rounded-corners="4" bar-padding="0"
                group-padding="0" :color="chartConfig.total.color">
            </VisGroupedBar>
            <VisAxis type="x" :tick-line="false" :domain-line="false" :grid-line="false" :tick-format="(date: Date) => {
                return date.toLocaleDateString('en-US', {
                    month: 'short',
                })
            }" :tick-values="chartData.map(d => d.date)" />
            <VisAxis type="y" :tick-line="false" :domain-line="false" :grid-line="true" />
            <ChartTooltip />
            <ChartCrosshair :template="componentToString(chartConfig, ChartTooltipContent, {
                labelFormatter(d) {
                    return new Date(d).toLocaleDateString('en-US', {
                        month: 'long',
                    })
                },
            })" />
        </VisXYContainer>
    </ChartContainer>
</template>

<script setup lang="ts">
import type { ChartConfig } from '@/components/ui/chart'
import { VisAxis, VisGroupedBar, VisXYContainer } from '@unovis/vue'
import { ChartContainer, ChartTooltip, ChartTooltipContent, componentToString, ChartCrosshair } from '@/components/ui/chart'
const chartData = [
    { date: new Date('2024-01-01'), total: 2523 },
    { date: new Date('2024-02-01'), total: 3087 },
    { date: new Date('2024-03-01'), total: 5943 },
    { date: new Date('2024-04-01'), total: 2025 },
    { date: new Date('2024-05-01'), total: 2122 },
    { date: new Date('2024-06-01'), total: 1907 },
    { date: new Date('2024-07-01'), total: 5843 },
    { date: new Date('2024-08-01'), total: 4023 },
    { date: new Date('2024-09-01'), total: 3111 },
    { date: new Date('2024-10-01'), total: 1624 },
    { date: new Date('2024-11-01'), total: 4017 },
    { date: new Date('2024-12-01'), total: 3253 },
]
type Data = typeof chartData[number]
const chartConfig = {
    total: {
        label: 'Total',
        color: '#000000',
    }
} satisfies ChartConfig

</script>