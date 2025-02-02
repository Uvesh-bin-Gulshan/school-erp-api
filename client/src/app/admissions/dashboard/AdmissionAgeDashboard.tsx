"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import React from "react"

const chartConfig = {
  age_per_course: {
    label: "Age by Course",
    color: "hsl(var(--chart-1))",
  },
  age_per_department: {
    label: "Age by Department",
    color: "hsl(var(--chart-2))",
  },
  admission_filter_by_age: {
    label: "Age Distribution",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

const AdmissionAgeDashboard = ({ dashboardData }: any) => {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("admission_filter_by_age")

  // Map dashboardData to the chartData format
  const chartData = React.useMemo(() => {
    switch (activeChart) {
      case "age_per_course":
        return dashboardData.age_per_course.map((item: any) => ({
          age: item.age,
          count: item.count,
        }))
        
      case "age_per_department":
        return dashboardData.age_per_department.map((item: any) => ({
          age: item.age,
          count: item.count,
        }))

      case "admission_filter_by_age":
        return dashboardData.admission_filter_by_age.map((item: any) => ({
          age: item.age,
          count: item.count,
        }))

      default:
        return []
    }
  }, [dashboardData, activeChart])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Age Distribution</CardTitle>
        <CardDescription>
          Showing age distribution for different categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer  config={chartConfig} className=" h-56 w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 2,
              right: 2,
            }}
            
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="age"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="count"
              type="natural"
              fill={`var(--color-${activeChart})`}
              fillOpacity={0.4}
              stroke={`var(--color-${activeChart})`}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full  items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Data for this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Age Distribution Data
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default AdmissionAgeDashboard
