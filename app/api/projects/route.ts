import { NextResponse } from "next/server";
import { getAllProjects } from "@/lib/projects";

export const runtime = "nodejs";

export async function GET() {
  const projects = getAllProjects();
  return NextResponse.json(projects);
}
