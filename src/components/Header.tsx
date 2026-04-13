import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "فرص المنح", to: "/" },
  { label: "مكتبة القوالب", to: "/templates" },
  { label: "بوابة المانحين", to: "/" },
  { label: "باقات جزيل", to: "/" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/jazeel-logo.svg" alt="جزيل" className="h-9" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "text-foreground bg-accent" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="icon" aria-label="تغيير اللغة">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <LogIn className="h-4 w-4" />
            تسجيل الدخول
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden rounded-lg p-2 text-muted-foreground hover:bg-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="القائمة"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background px-4 pb-4 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-2 border-t border-border/40 pt-3">
            <Button variant="outline" size="sm" className="flex-1 gap-2">
              <LogIn className="h-4 w-4" />
              تسجيل الدخول
            </Button>
            <Button variant="ghost" size="icon" aria-label="تغيير اللغة">
              <Globe className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
