"use client"

import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects"

export function ProjectsSection() {
  return (
    <div className="space-y-12 sm:space-y-16 relative z-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>
        <div className="text-sm text-muted-foreground font-mono">2023 — 2024</div>
      </div>

      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="group block relative z-30">
            <article className="space-y-6 cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <svg
                      className="w-4 h-4 text-muted-foreground transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">{project.year}</div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-muted-foreground border border-border rounded group-hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Added view more button to link to all projects page */}
      <div className="flex justify-center pt-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-6 py-3 text-sm border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
        >
          <span>View All Projects</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
