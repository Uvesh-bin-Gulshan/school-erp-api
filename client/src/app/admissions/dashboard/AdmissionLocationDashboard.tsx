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
  city: {
    label: "City",
    color: "hsl(var(--chart-1))",
  },
  state: {
    label: "State",
    color: "hsl(var(--chart-2))",
  },
  country: {
    label: "Country",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

const AdmissionLocationDashboard = ({ dashboardData }: any) => {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("city")

  const chartData = React.useMemo(() => {
    let data = [];
  
    switch (activeChart) {
      case "city":
        data = dashboardData.admission_filter_by_city.map((item: any) => ({
          category: item.district,
          count: item.count,
        }));
        break;
  
      case "state":
        data = dashboardData.admission_filter_by_state.map((item: any) => ({
          category: item.state,
          count: item.count,
        }));
        break;
  
      case "country":
        data = dashboardData.admission_filter_by_country.map((item: any) => ({
          category: item.locality,
          count: item.count,
        }));
        break;
  
      default:
        break;
    }
  
    return data;
  }, [dashboardData, activeChart]);
  

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Admission Data By City</CardTitle>
          <CardDescription>Showing admission data by {chartConfig[activeChart].label}</CardDescription>
        </div>
        <div className="flex">
          {["city", "state", "country"].map((key) => {
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
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="count"
                />
              }
            />
            <Bar dataKey="count" fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default AdmissionLocationDashboard
