import type React from "react"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function StudyPlannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthGuard>{children}</AuthGuard>
}
