import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye, FileText, Layers, ExternalLink, CheckCircle, Clock } from "lucide-react";
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
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/jazeel-logo.svg" alt="جزيل" className="h-9" />
            <span className="hidden text-sm font-medium text-muted-foreground sm:inline">مكتبة القوالب</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 rounded-xl" onClick={() => window.open("/jazeel/pages/home.html", "_blank")}>
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">عرض القالب</span>
            </Button>
            <Button size="sm" className="gap-2 rounded-xl bg-jazeel-green text-white hover:bg-jazeel-green/90" onClick={handleDownloadAll}>
              <Download className="h-4 w-4" />
              تحميل القالب
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-bl from-jazeel-mint via-background to-jazeel-mint/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--jazeel-green)/0.08)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Text */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-jazeel-green/20 bg-jazeel-green/5 px-4 py-1.5 text-xs font-semibold text-jazeel-green">
                <Layers className="h-3.5 w-3.5" />
                قالب HTML احترافي
              </div>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                قالب <span className="text-jazeel-green">جزيل</span> لمنصات
                <br />المنح والقطاع غير الربحي
              </h1>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                قالب احترافي عالي الجودة مصمم خصيصاً لمنصات المنح والجمعيات غير الربحية.
                يشمل {readyPages.length} صفحات جاهزة بتصميم عربي حديث ومتجاوب بالكامل.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2.5 rounded-2xl bg-jazeel-green px-8 text-white shadow-lg shadow-jazeel-green/25 hover:bg-jazeel-green/90" onClick={handleDownloadAll}>
                  <Download className="h-5 w-5" />
                  تحميل القالب كاملاً
                </Button>
                <Button size="lg" variant="outline" className="gap-2.5 rounded-2xl px-8" onClick={() => window.open("/jazeel/pages/home.html", "_blank")}>
                  <ExternalLink className="h-5 w-5" />
                  معاينة مباشرة
                </Button>
              </div>

              {/* Quick stats */}
              <div className="mt-10 flex gap-8">
                <div>
                  <div className="text-2xl font-extrabold text-foreground">{readyPages.length}</div>
                  <p className="text-xs text-muted-foreground">صفحات جاهزة</p>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-foreground">{templatePages.length}</div>
                  <p className="text-xs text-muted-foreground">إجمالي الصفحات</p>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-foreground">RTL</div>
                  <p className="text-xs text-muted-foreground">دعم عربي كامل</p>
                </div>
              </div>
            </div>

            {/* Hero Preview */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl border border-border/60 bg-background p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="mr-3 text-[10px] text-muted-foreground">jazeel/pages/home.html</span>
                </div>
                <img
                  src="/jazeel/images/preview-home.jpg"
                  alt="معاينة الصفحة الرئيسية"
                  className="w-full rounded-xl"
                  width={1280}
                  height={800}
                />
              </div>
              {/* Floating card */}
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
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-extrabold text-foreground sm:text-3xl">صفحات القالب</h2>
            <p className="text-sm text-muted-foreground">استعرض جميع صفحات القالب وحمّل ما تحتاج</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:border-jazeel-green/30 hover:shadow-xl hover:shadow-jazeel-green/5">
      {/* Preview Image */}
      <div className="relative overflow-hidden">
        <img
          src={page.previewImage}
          alt={page.name}
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={1280}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Hover actions overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
          {isReady && (
            <>
              <Button
                size="sm"
                className="rounded-xl bg-white/95 text-foreground shadow-lg backdrop-blur-sm hover:bg-white"
                onClick={() => window.open(page.path, "_blank")}
              >
                <Eye className="mr-1.5 h-4 w-4" />
                معاينة
              </Button>
              <Button
                size="sm"
                className="rounded-xl bg-jazeel-green text-white shadow-lg hover:bg-jazeel-green/90"
                onClick={() => handleDownloadPage(page)}
              >
                <Download className="mr-1.5 h-4 w-4" />
                تحميل
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
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
