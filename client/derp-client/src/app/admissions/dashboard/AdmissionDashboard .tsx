"use client"
import React, {ReactNode, useEffect, useState } from 'react'
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartConfig: ChartConfig = {
  applied: {
    label: "Admissions Applied Per Year" as ReactNode,
    color: "#2563eb",
  },
  approved: {
    label: "Admissions Approved Per Year" as ReactNode,
    color: "#60a5fa",
  },
  pending: {
    label: "Admissions Pending Per Year" as ReactNode,
    color: "#fbbf24",
  },
  left: {
    label: "Admissions Left Per Year" as ReactNode,
    color: "#ef4444",
  },
  byCourse: {
    label: "Admissions by Course" as ReactNode,
    color: "#10b981",
  },
  byDepartment: {
    label: "Admissions by Department" as ReactNode,
    color: "#6b7280",
  },
  byCity: {
    label: "Admissions by City" as ReactNode,
    color: "#f97316",
  },
  byState: {
    label: "Admissions by State" as ReactNode,
    color: "#8b5cf6",
  },
  byCountry: {
    label: "Admissions by Country" as ReactNode,
    color: "#3b82f6",
  },
  byAge: {
    label: "Admissions by Age" as ReactNode,
    color: "#14b8a6",
  },
} as const;

const AdmissionDashboard = ({dashboardData}:any) => {
  
  return (
    <div className="space-y-8 absolute">
      {/* Admissions Applied vs Approved */}
      <ChartContainer config={chartConfig.applied} className="h-56 w-full">
        <BarChart data={dashboardData.admission_applied_per_year}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.applied.color} radius={4} name="Applied" />
        </BarChart>
      </ChartContainer>

      <ChartContainer config={chartConfig.approved} className="h-56 w-full">
        <BarChart data={dashboardData.admission_approved_per_year}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.approved.color} radius={4} name="Approved" />
        </BarChart>
      </ChartContainer>

      {/* Admissions Pending vs Left */}
      <ChartContainer config={chartConfig.pending} className="h-56 w-full">
        <BarChart data={dashboardData.admission_pending_per_year}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.pending.color} radius={4} name="Pending" />
        </BarChart>
      </ChartContainer>

      <ChartContainer config={chartConfig.left} className="h-56 w-full">
        <BarChart data={dashboardData.admission_left_per_year}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.left.color} radius={4} name="Left" />
        </BarChart>
      </ChartContainer>

      {/* Admissions by Course */}
      <ChartContainer config={chartConfig.byCourse} className="h-56 w-full">
        <BarChart data={dashboardData.admission_filter_by_course}>
          <XAxis dataKey="applied_for" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byCourse.color} radius={4} name="By Course" />
        </BarChart>
      </ChartContainer>

      {/* Admissions by Department */}
      <ChartContainer config={chartConfig.byDepartment} className="h-56 w-full">
        <BarChart data={dashboardData.admission_filter_by_department}>
          <XAxis dataKey="previous_education" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byDepartment.color} radius={4} name="By Department" />
        </BarChart>
      </ChartContainer>

      {/* Admissions by City */}
      <ChartContainer config={chartConfig.byCity} className="h-56 w-full">
        <BarChart data={dashboardData.admission_filter_by_city}>
          <XAxis dataKey="district" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byCity.color} radius={4} name="By City" />
        </BarChart>
      </ChartContainer>

      {/* Admissions by State */}
      <ChartContainer config={chartConfig.byState} className="h-56 w-full">
        <BarChart data={dashboardData.admission_filter_by_state}>
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byState.color} radius={4} name="By State" />
        </BarChart>
      </ChartContainer>

      {/* Admissions by Country */}
      <ChartContainer config={chartConfig.byCountry} className="h-56 w-full">
        <BarChart data={dashboardData.admission_filter_by_country}>
          <XAxis dataKey="locality" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byCountry.color} radius={4} name="By Country" />
        </BarChart>
      </ChartContainer>

      {/* Admissions by Age */}
      <ChartContainer config={chartConfig.byAge} className="h-56 w-full">
        <BarChart data={dashboardData.admission_filter_by_age}>
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byAge.color} radius={4} name="By Age" />
        </BarChart>
      </ChartContainer>

      {/* Age per Course */}
      <ChartContainer config={chartConfig.byCourse} className="h-56 w-full">
        <BarChart data={dashboardData.age_per_course}>
          <XAxis dataKey="applied_for" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byCourse.color} radius={4} name="Age per Course" />
        </BarChart>
      </ChartContainer>

      {/* Age per Department */}
      <ChartContainer config={chartConfig.byDepartment} className="h-56 w-full">
        <BarChart data={dashboardData.age_per_department}>
          <XAxis dataKey="previous_education" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byDepartment.color} radius={4} name="Age per Department" />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default AdmissionDashboard
