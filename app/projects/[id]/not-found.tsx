import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-light">404</h1>
          <h2 className="text-xl text-muted-foreground">Project Not Found</h2>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          The project you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </div>
  )
}
