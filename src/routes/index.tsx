import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye, FileText, Layers, ExternalLink, CheckCircle, Clock, Home, ListFilter, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { templatePages, templateCategories } from "@/lib/template-pages-data";
import type { TemplatePage } from "@/lib/template-pages-data";

export const Route = createFileRoute("/")({
  component: TemplateShowcasePage,
  head: () => ({
    meta: [
      { title: "قالب جزيل — قوالب احترافية للقطاع غير الربحي" },
      { name: "description", content: "قالب جزيل الاحترافي لمنصات المنح والقطاع غير الربحي. صفحات HTML جاهزة بتصميم عربي حديث." },
    ],
  }),
});

const readyPages = templatePages.filter((p) => p.status === "ready");

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
  home: <Home className="h-8 w-8" />,
  grants: <ListFilter className="h-8 w-8" />,
  "grant-details": <FileSearch className="h-8 w-8" />,
  pricing: <Layers className="h-8 w-8" />,
  about: <FileText className="h-8 w-8" />,
  contact: <FileText className="h-8 w-8" />,
};

function StatusBadge({ status }: { status: TemplatePage["status"] }) {
  if (status === "ready") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-jazeel-green/10 px-2.5 py-1 text-[11px] font-semibold text-jazeel-green">
        <CheckCircle className="h-3 w-3" />
        جاهز
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
      <Clock className="h-3 w-3" />
      تحت التطوير
    </span>
  );
}

function TemplateShowcasePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/jazeel-logo.svg" alt="جزيل" className="h-9" />
            <div className="hidden h-5 w-px bg-border sm:block" />
            <span className="hidden text-sm font-medium text-muted-foreground sm:inline">مكتبة القوالب</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 rounded-xl" onClick={() => window.open("/jazeel/pages/home.html", "_blank")}>
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">عرض القالب</span>
            </Button>
            <Button size="sm" className="gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleDownloadAll}>
              <Download className="h-4 w-4" />
              تحميل القالب
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-background pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--jazeel-mint))_0%,_transparent_50%)] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Text */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Layers className="h-3.5 w-3.5 text-jazeel-green" />
                قالب HTML احترافي • {readyPages.length} صفحات جاهزة
              </div>
              <h1 className="mb-5 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                قالب <span className="text-jazeel-green">جزيل</span> لمنصات المنح
                <br className="hidden sm:block" />
                والقطاع غير الربحي
              </h1>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
                قالب احترافي عالي الجودة مصمم خصيصاً لمنصات المنح والجمعيات.
                يشمل صفحات جاهزة بتصميم عربي حديث ومتجاوب بالكامل.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2.5 rounded-2xl bg-primary px-8 text-primary-foreground shadow-lg hover:bg-primary/90" onClick={handleDownloadAll}>
                  <Download className="h-5 w-5" />
                  تحميل القالب كاملاً
                </Button>
                <Button size="lg" variant="outline" className="gap-2.5 rounded-2xl px-8" onClick={() => window.open("/jazeel/pages/home.html", "_blank")}>
                  <ExternalLink className="h-5 w-5" />
                  معاينة مباشرة
                </Button>
              </div>
              {/* Stats */}
              <div className="mt-10 flex gap-10">
                <div>
                  <div className="text-2xl font-extrabold text-foreground">{readyPages.length}</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">صفحات جاهزة</p>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-foreground">{templatePages.length}</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">إجمالي الصفحات</p>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-jazeel-green">RTL</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">دعم عربي كامل</p>
                </div>
              </div>
            </div>

            {/* Browser Mockup */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl border border-border/60 bg-background p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-jazeel-warning/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-jazeel-green/60" />
                  <span className="mr-3 text-[10px] text-muted-foreground"><span className="mr-3 text-[10px] text-muted-foreground">jazeel/pages/home.html</span></span>
                </div>
                {/* Clean placeholder instead of AI image */}
                <div className="flex aspect-[16/10] flex-col rounded-xl bg-gradient-to-b from-primary to-primary/80 p-6 text-primary-foreground">
                  {/* Fake nav */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-14 rounded bg-primary-foreground/20" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-3 w-10 rounded bg-primary-foreground/15" />
                      <div className="h-3 w-10 rounded bg-primary-foreground/15" />
                      <div className="h-3 w-10 rounded bg-primary-foreground/15" />
                    </div>
                  </div>
                  {/* Fake hero */}
                  <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                    <div className="h-4 w-48 rounded bg-primary-foreground/25" />
                    <div className="h-3 w-36 rounded bg-primary-foreground/15" />
                    <div className="mt-2 flex gap-2">
                      <div className="h-6 w-20 rounded-lg bg-jazeel-green/80" />
                      <div className="h-6 w-20 rounded-lg bg-primary-foreground/15" />
                    </div>
                  </div>
                  {/* Fake cards */}
                  <div className="mt-auto grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-primary-foreground/10 p-3">
                      <div className="mb-2 h-2 w-12 rounded bg-primary-foreground/20" />
                      <div className="h-1.5 w-full rounded bg-primary-foreground/10" />
                    </div>
                    <div className="rounded-lg bg-primary-foreground/10 p-3">
                      <div className="mb-2 h-2 w-12 rounded bg-primary-foreground/20" />
                      <div className="h-1.5 w-full rounded bg-primary-foreground/10" />
                    </div>
                    <div className="rounded-lg bg-primary-foreground/10 p-3">
                      <div className="mb-2 h-2 w-12 rounded bg-primary-foreground/20" />
                      <div className="h-1.5 w-full rounded bg-primary-foreground/10" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-border/60 bg-background p-3 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <FileText className="h-4 w-4 text-jazeel-green" />
                  {readyPages.length} صفحات جاهزة للتحميل
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pages Grid */}
      <main className="flex-1 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">صفحات القالب</h2>
              <p className="mt-1 text-sm text-muted-foreground">استعرض جميع صفحات القالب وحمّل ما تحتاج</p>
            </div>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {templatePages.length} صفحات
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {templatePages.map((page) => (
              <PageCard key={page.id} page={page} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-primary py-8 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <img src="/jazeel-logo.svg" alt="جزيل" className="mx-auto mb-3 h-8 brightness-0 invert" />
          <p className="text-sm text-primary-foreground/60">
            قالب جزيل — قوالب احترافية للقطاع غير الربحي
          </p>
          <p className="mt-2 text-xs text-primary-foreground/40">
            © 2026 جزيل. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}

function PageCard({ page }: { page: TemplatePage }) {
  const cat = templateCategories[page.category];
  const isReady = page.status === "ready";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:border-border hover:shadow-lg">
      {/* Placeholder Preview */}
      <div className="relative flex aspect-[16/10] items-center justify-center bg-muted/50">
        <div className="flex flex-col items-center gap-3 text-muted-foreground/40">
          {pageIcons[page.id] || <FileText className="h-8 w-8" />}
          <span className="text-xs font-medium">{page.fileName}</span>
        </div>

        {/* Hover overlay */}
        {isReady && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-foreground/5 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
            <Button
              size="sm"
              variant="outline"
              className="rounded-xl bg-background/90 shadow-sm backdrop-blur-sm"
              onClick={() => window.open(page.path, "_blank")}
            >
              <Eye className="mr-1.5 h-3.5 w-3.5" />
              معاينة
            </Button>
            <Button
              size="sm"
              className="rounded-xl bg-primary text-primary-foreground shadow-sm"
              onClick={() => handleDownloadPage(page)}
            >
              <Download className="mr-1.5 h-3.5 w-3.5" />
              تحميل
            </Button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="border-t border-border/40 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-bold text-foreground">{page.name}</h3>
          <StatusBadge status={page.status} />
        </div>
        <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{page.description}</p>
        <div className="flex items-center justify-between">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${cat.color}`}>
            {cat.label}
          </span>
          <span className="text-[10px] text-muted-foreground">{page.fileName}</span>
        </div>
      </div>
    </div>
  );
}
