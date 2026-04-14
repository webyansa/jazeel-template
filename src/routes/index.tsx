import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download, Eye, ExternalLink, Layers, CheckCircle, Clock,
  Home, ListFilter, FileSearch, Building2, Users, CreditCard, BookOpen,
  FileText, Phone, ArrowLeft, Sparkles, Globe, Palette, Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { templatePages, templateCategories } from "@/lib/template-pages-data";
import type { TemplatePage } from "@/lib/template-pages-data";

export const Route = createFileRoute("/")({
  component: TemplateShowcasePage,
  head: () => ({
    meta: [
      { title: "قالب جزيل — قوالب احترافية لمنصات المنح والقطاع غير الربحي" },
      { name: "description", content: "قالب جزيل الاحترافي لمنصات المنح والقطاع غير الربحي. صفحات HTML جاهزة بتصميم عربي حديث ومتجاوب." },
    ],
  }),
});

const readyPages = templatePages.filter((p) => p.status === "ready");

const previewImages: Record<string, string> = {
  home: "/jazeel/previews/home.png",
  grants: "/jazeel/previews/grants.png",
  "grant-details": "/jazeel/previews/grants.png",
  "donor-portal": "/jazeel/previews/donor-portal.png",
  "ngo-portal": "/jazeel/previews/ngo-portal.png",
  pricing: "/jazeel/previews/pricing.png",
  "donors-directory": "/jazeel/previews/donors-directory.png",
};

function handleDownloadAll() {
  readyPages.forEach((page) => {
    const a = document.createElement("a");
    a.href = page.path;
    a.download = page.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}

function handleDownloadPage(page: TemplatePage) {
  const a = document.createElement("a");
  a.href = page.path;
  a.download = page.fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const pageIcons: Record<string, React.ReactNode> = {
  home: <Home className="h-5 w-5" />,
  grants: <ListFilter className="h-5 w-5" />,
  "grant-details": <FileSearch className="h-5 w-5" />,
  "donor-portal": <Building2 className="h-5 w-5" />,
  "ngo-portal": <Users className="h-5 w-5" />,
  pricing: <CreditCard className="h-5 w-5" />,
  "donors-directory": <BookOpen className="h-5 w-5" />,
  about: <FileText className="h-5 w-5" />,
  contact: <Phone className="h-5 w-5" />,
};

function StatusBadge({ status }: { status: TemplatePage["status"] }) {
  if (status === "ready") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
        <CheckCircle className="h-3 w-3" />
        جاهز
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
      <Clock className="h-3 w-3" />
      قريباً
    </span>
  );
}

function TemplateShowcasePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPages = activeCategory === "all"
    ? templatePages
    : templatePages.filter(p => p.category === activeCategory);

  const categoryKeys = Object.keys(templateCategories) as Array<keyof typeof templateCategories>;

  return (
    <div className="flex min-h-screen flex-col" style={{ fontFamily: "'Tajawal', sans-serif", direction: "rtl" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <img src="/jazeel-logo.svg" alt="جزيل" className="h-9" />
            <div className="hidden h-5 w-px bg-border/60 sm:block" />
            <span className="hidden text-sm font-medium text-muted-foreground sm:inline">مكتبة القوالب</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-xl border-border/60 text-xs"
              onClick={() => window.open("/jazeel/home.html", "_blank")}
            >
              <Eye className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">معاينة مباشرة</span>
            </Button>
            <Button
              size="sm"
              className="gap-2 rounded-xl bg-[#07133F] text-white hover:bg-[#0d1f5c] text-xs"
              onClick={handleDownloadAll}
            >
              <Download className="h-3.5 w-3.5" />
              تحميل القالب
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-[#07133F] via-[#0d1f5c] to-[#132a6e] pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#19B58B]/[0.06] blur-[100px]" />
          <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-[#19B58B]/[0.04] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-2 text-xs font-medium text-white/50">
                <Sparkles className="h-3.5 w-3.5 text-[#19B58B]" />
                قالب HTML احترافي • {readyPages.length} صفحات جاهزة
              </div>
              <h1 className="mb-5 text-3xl font-extrabold leading-[1.25] text-white sm:text-4xl lg:text-[2.75rem]">
                منصة موحدة لتنمية الموارد المالية
                <br className="hidden sm:block" />
                وإدارة فرص <span className="text-[#19B58B]">المنح</span>
              </h1>
              <p className="mb-8 max-w-lg text-[0.9375rem] leading-relaxed text-white/45">
                قالب احترافي عالي الجودة مصمم خصيصاً لمنصات المنح والجمعيات.
                يشمل صفحات جاهزة بتصميم عربي حديث ومتجاوب بالكامل.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Button
                  size="lg"
                  className="gap-2.5 rounded-2xl bg-[#19B58B] hover:bg-[#149572] text-white px-8 shadow-lg shadow-[#19B58B]/20"
                  onClick={handleDownloadAll}
                >
                  <Download className="h-5 w-5" />
                  تحميل القالب كاملاً
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2.5 rounded-2xl px-8 border-white/15 text-white/80 hover:bg-white/[0.06] hover:text-white"
                  onClick={() => window.open("/jazeel/home.html", "_blank")}
                >
                  <ExternalLink className="h-5 w-5" />
                  معاينة مباشرة
                </Button>
              </div>

              {/* Features row */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Globe className="h-4 w-4 text-[#19B58B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{readyPages.length} صفحات</div>
                    <div className="text-[11px] text-white/35">جاهزة للاستخدام</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Palette className="h-4 w-4 text-[#19B58B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">RTL</div>
                    <div className="text-[11px] text-white/35">تصميم عربي كامل</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Code2 className="h-4 w-4 text-[#19B58B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Tailwind</div>
                    <div className="text-[11px] text-white/35">CSS حديث ومتجاوب</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Mockup with screenshot */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-2 shadow-2xl">
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="flex items-center justify-center gap-1.5 rounded-md bg-white/[0.06] px-3 py-1">
                      <svg className="h-2.5 w-2.5 text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      <span className="text-[10px] text-white/30 font-mono">jazeel.sa</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-b-xl overflow-hidden">
                  <img
                    src="/jazeel/previews/home.png"
                    alt="معاينة الصفحة الرئيسية"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-xl border border-border/50 bg-background p-3.5 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">{readyPages.length} صفحات جاهزة</div>
                    <div className="text-[10px] text-muted-foreground">للتحميل والاستخدام</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 border-b border-border/50 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-[#07133F] text-white shadow-sm"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted"
              }`}
            >
              جميع الصفحات ({templatePages.length})
            </button>
            {categoryKeys.map((key) => {
              const count = templatePages.filter(p => p.category === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    activeCategory === key
                      ? "bg-[#07133F] text-white shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {templateCategories[key].label} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pages Grid */}
      <main className="flex-1 bg-muted/20">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">صفحات القالب</h2>
              <p className="mt-1 text-sm text-muted-foreground">استعرض ومعاينة جميع الصفحات المتوفرة في القالب</p>
            </div>
            <span className="rounded-full bg-[#07133F] px-3 py-1 text-[11px] font-bold text-white">
              {filteredPages.length} صفحة
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPages.map((page) => (
              <PageCard key={page.id} page={page} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-[#07133F] py-10 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <img src="/jazeel-logo.svg" alt="جزيل" className="mx-auto mb-4 h-9 brightness-0 invert" />
          <p className="text-sm text-white/50">قالب جزيل — قوالب احترافية للقطاع غير الربحي</p>
          <p className="mt-2 text-xs text-white/30">© 2026 جزيل. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}

function PageCard({ page }: { page: TemplatePage }) {
  const cat = templateCategories[page.category];
  const isReady = page.status === "ready";
  const preview = previewImages[page.id];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#19B58B]/25">
      {/* Preview Image */}
      <div className="relative overflow-hidden border-b border-border/30">
        {preview ? (
          <div className="aspect-[16/10] overflow-hidden bg-muted/30">
            <img
              src={preview}
              alt={page.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center bg-muted/30">
            <div className="flex flex-col items-center gap-2 text-muted-foreground/30">
              {pageIcons[page.id] || <FileText className="h-8 w-8" />}
              <span className="text-[11px] font-medium">قريباً</span>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        {isReady && (
          <div className="absolute inset-0 flex items-center justify-center gap-2.5 bg-[#07133F]/60 backdrop-blur-[3px] opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Button
              size="sm"
              className="rounded-xl bg-white text-[#07133F] shadow-lg hover:bg-white/90 text-xs gap-1.5"
              onClick={() => window.open(page.path, "_blank")}
            >
              <Eye className="h-3.5 w-3.5" />
              معاينة
            </Button>
            <Button
              size="sm"
              className="rounded-xl bg-[#19B58B] text-white shadow-lg hover:bg-[#149572] text-xs gap-1.5"
              onClick={() => handleDownloadPage(page)}
            >
              <Download className="h-3.5 w-3.5" />
              تحميل
            </Button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60 text-muted-foreground group-hover:bg-[#19B58B]/10 group-hover:text-[#19B58B] transition-colors">
              {pageIcons[page.id] || <FileText className="h-5 w-5" />}
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">{page.name}</h3>
              <span className="text-[11px] font-mono text-muted-foreground">{page.fileName}</span>
            </div>
          </div>
          <StatusBadge status={page.status} />
        </div>
        <p className="mb-4 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{page.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${cat.color}`}>
            {cat.label}
          </span>
          {isReady && (
            <button
              onClick={() => window.open(page.path, "_blank")}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#19B58B] hover:text-[#149572] transition-colors"
            >
              فتح الصفحة
              <ArrowLeft className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
