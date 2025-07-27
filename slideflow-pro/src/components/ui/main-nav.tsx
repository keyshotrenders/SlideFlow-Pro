import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex items-center space-x-6 lg:space-x-8">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold">SlideFlow Pro</span>
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/editor"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Editor
      </Link>
      <Link
        href="/templates"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Templates
      </Link>
      <Link
        href="/library"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Library
      </Link>
      <Link
        href="/export"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Export
      </Link>
      <Link
        href="/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}