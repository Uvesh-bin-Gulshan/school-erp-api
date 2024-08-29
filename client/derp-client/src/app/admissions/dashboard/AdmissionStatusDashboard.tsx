"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartConfig = {
  views: {
    label: "Admissions Data",
  },
  applied: {
    label: "Applied",
    color: "hsl(var(--chart-1))",
  },
  approved: {
    label: "Approved",
    color: "hsl(var(--chart-2))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-3))",
  },
  left: {
    label: "Left",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

const AdmissionStatusDashboard = ({ dashboardData }: any) => {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("applied")

  // Map dashboardData to the chartData format
  const chartData = React.useMemo(() => {
    const years = [
      ...new Set([
        ...dashboardData.admission_applied_per_year.map((item: any) => item.year),
        ...dashboardData.admission_approved_per_year.map((item: any) => item.year),
        ...dashboardData.admission_pending_per_year.map((item: any) => item.year),
        ...dashboardData.admission_left_per_year.map((item: any) => item.year),
      ]),
    ].sort()

    return years.map((year) => ({
      date: `${year}-01-01`,
      applied:
        dashboardData.admission_applied_per_year.find((item: any) => item.year === year)?.count || 0,
      approved:
        dashboardData.admission_approved_per_year.find((item: any) => item.year === year)?.count || 0,
      pending:
        dashboardData.admission_pending_per_year.find((item: any) => item.year === year)?.count || 0,
      left:
        dashboardData.admission_left_per_year.find((item: any) => item.year === year)?.count || 0,
    }))
  }, [dashboardData])

  const total = React.useMemo(
    () => ({
      applied: chartData.reduce((acc, curr) => acc + curr.applied, 0),
      approved: chartData.reduce((acc, curr) => acc + curr.approved, 0),
      pending: chartData.reduce((acc, curr) => acc + curr.pending, 0),
      left: chartData.reduce((acc, curr) => acc + curr.left, 0),
    }),
    [chartData]
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Admission Status</CardTitle>
          <CardDescription>
            Showing admission status data by year
          </CardDescription>
        </div>
        <div className="flex">
          {["applied", "approved", "pending", "left"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[chart as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  year: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default AdmissionStatusDashboard
