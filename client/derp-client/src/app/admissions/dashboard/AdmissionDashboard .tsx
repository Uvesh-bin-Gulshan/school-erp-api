"use client"
import React, {ReactNode, useEffect, useState } from 'react'
import { Bar, Line, XAxis, YAxis, Tooltip, Legend, LineChart, CartesianGrid, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartConfig: ChartConfig = {
  applied: { label: "Admissions Applied", color: "#2563eb" },
  approved: { label: "Admissions Approved", color: "#60a5fa" },
  pending: { label: "Admissions Pending", color: "#fbbf24" },
  left: { label: "Admissions Left", color: "#ef4444" },
  byCourse: { label: "Admissions by Course", color: "#10b981" },
  byDepartment: { label: "Admissions by Department", color: "#6b7280" },
  byCity: { label: "Admissions by City", color: "#f97316" },
  byState: { label: "Admissions by State", color: "#8b5cf6" },
  byCountry: { label: "Admissions by Country", color: "#3b82f6" },
  byAge: { label: "Admissions by Age", color: "#14b8a6" },
};

const AdmissionDashboard = ({dashboardData}: any) => {

  return (
    <div className="space-y-8">

      {/* Combined Line Chart for Admissions Trends */}
      <ChartContainer config={chartConfig} className="h-72 w-full">
        <LineChart data={dashboardData.admission_applied_per_year}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke={chartConfig.applied.color} name="Applied" />
          <Line type="monotone" dataKey="count" stroke={chartConfig.approved.color} name="Approved" />
          <Line type="monotone" dataKey="count" stroke={chartConfig.pending.color} name="Pending" />
          <Line type="monotone" dataKey="count" stroke={chartConfig.left.color} name="Left" />
        </LineChart>
      </ChartContainer>

      {/* Stacked Bar Chart for Admissions by Course and Department */}
      <ChartContainer config={chartConfig} className="h-72 w-full">
        <BarChart data={dashboardData.admission_filter_by_course}>
          <XAxis dataKey="applied_for" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byCourse.color} stackId="a" name="By Course" />
          <Bar dataKey="count" fill={chartConfig.byDepartment.color} stackId="a" name="By Department" />
        </BarChart>
      </ChartContainer>

      {/* Stacked Bar Chart for Admissions by Location */}
      <ChartContainer config={chartConfig} className="h-72 w-full">
        <BarChart data={dashboardData.admission_filter_by_city}>
          <XAxis dataKey="district" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byCity.color} stackId="b" name="By City" />
          <Bar dataKey="count" fill={chartConfig.byState.color} stackId="b" name="By State" />
          <Bar dataKey="count" fill={chartConfig.byCountry.color} stackId="b" name="By Country" />
        </BarChart>
      </ChartContainer>

      {/* Age Distribution by Course and Department */}
      <ChartContainer config={chartConfig} className="h-72 w-full">
        <BarChart data={dashboardData.age_per_course}>
          <XAxis dataKey="applied_for" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartConfig.byCourse.color} name="Age per Course" />
          <Bar dataKey="count" fill={chartConfig.byDepartment.color} name="Age per Department" />
        </BarChart>
      </ChartContainer>

    </div>
  )
}

export default AdmissionDashboard
