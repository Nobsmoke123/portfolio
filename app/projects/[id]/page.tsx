"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, use } from "react";
import { projects } from "@/lib/projects";
import { ImageSlider } from "@/components/image-slider";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Navigation */}
        <nav className="py-8 sm:py-12 flex justify-between items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>

          <button
            onClick={toggleTheme}
            className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Project Header */}
        <header className="space-y-8 sm:space-y-12 pb-12 sm:pb-16">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
                {project.title}
              </h1>
              <div className="text-sm text-muted-foreground font-mono">
                {project.year} / {project.category}
              </div>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Banner Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
            <Image
              src={project.bannerImage || "/placeholder.svg"}
              alt={`${project.title} banner`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-12 sm:gap-16 pb-20 sm:pb-32">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 sm:space-y-16">
            {/* Description */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-light">Overview</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>{project.longDescription}</p>
              </div>
            </section>

            {/* Image Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light">Gallery</h2>
                <ImageSlider images={project.gallery} alt={project.title} />
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8 sm:space-y-12">
            {/* Technologies */}
            <section className="space-y-4">
              <h3 className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Links */}
            <section className="space-y-4">
              <h3 className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                Links
              </h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span>Live Website</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}

                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span>Source Code</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </section>
          </div>
        </div>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Donald Chimezie Akobundu. All
                rights reserved.
              </div>
              <div className="text-xs text-muted-foreground">
                Built with v0.dev
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
