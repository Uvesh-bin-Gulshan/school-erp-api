"use client"
import React from 'react'
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartConfig = {
  applied: {
    label: "Admissions Applied",
    color: "#2563eb",
  },
  approved: {
    label: "Admissions Approved",
    color: "#60a5fa",
  },
} satisfies ChartConfig

const AdmissionDashboard = ({ dashboard_data }: any) => {
  // Assuming dashboard_data contains keys like admission_applied_per_year and admission_approved_per_year
  const chartData = dashboard_data.admission_applied_per_year.map((item: any) => ({
    year: item.year,
    applied: item.count,
    approved: dashboard_data.admission_approved_per_year.find((appr: any) => appr.year === item.year) || 0,
  }));

  return (
    <ChartContainer config={chartConfig} className="h-56 w-full">
      <BarChart data={chartData}>
  <Bar dataKey="applied" fill="var(--color-applied)" radius={4} />
  <Bar dataKey="approved" fill="var(--color-approved)" radius={4} />
</BarChart>
    </ChartContainer>
  )
}

export default AdmissionDashboard
