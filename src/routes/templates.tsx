import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Search, Eye, ExternalLink, Download, Layers, FolderOpen,
  Calendar, FileCode2, ChevronLeft, X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  templatePages,
  templateCategories,
  type TemplatePage,
} from "@/lib/template-pages-data";

export const Route = createFileRoute("/templates")({
  component: TemplateExplorerPage,
  head: () => ({
    meta: [
      { title: "مكتبة صفحات جزيل — قوالب HTML" },
      { name: "description", content: "استعرض وحمّل صفحات قالب جزيل الجاهزة بصيغة HTML" },
    ],
  }),
});

const categoryKeys = Object.keys(templateCategories) as Array<keyof typeof templateCategories>;

function StatusBadge({ status }: { status: TemplatePage["status"] }) {
  const map = {
    ready: { label: "جاهز", cls: "bg-jazeel-mint text-jazeel-green" },
    new: { label: "جديد", cls: "bg-jazeel-green/10 text-jazeel-green" },
    development: { label: "تحت التطوير", cls: "bg-jazeel-warning/15 text-jazeel-warning-foreground" },
  };
  const s = map[status];
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${s.cls}`}>{s.label}</span>;
}

function handleDownload(page: TemplatePage) {
  const a = document.createElement("a");
  a.href = page.path;
  a.download = page.fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function TemplateExplorerPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [previewPage, setPreviewPage] = useState<TemplatePage | null>(null);

  const filtered = useMemo(() => {
    return templatePages.filter((p) => {
      if (search && !p.name.includes(search) && !p.description.includes(search) && !p.fileName.includes(search)) return false;
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      return true;
    });
  }, [search, categoryFilter]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const k of categoryKeys) counts[k] = templatePages.filter((p) => p.category === k).length;
    return counts;
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Preview Modal */}
      {previewPage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-border/60 bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
              <div className="flex items-center gap-3">
                <FileCode2 className="h-5 w-5 text-jazeel-green" />
                <span className="font-bold text-foreground">{previewPage.name}</span>
                <span className="text-xs text-muted-foreground">{previewPage.fileName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1.5 rounded-xl text-xs" onClick={() => window.open(previewPage.path, "_blank")}>
                  <ExternalLink className="h-3.5 w-3.5" /> فتح
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5 rounded-xl text-xs" onClick={() => handleDownload(previewPage)}>
                  <Download className="h-3.5 w-3.5" /> تحميل
                </Button>
                <button onClick={() => setPreviewPage(null)} className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <iframe src={previewPage.path} className="flex-1 border-0 bg-white" title={previewPage.name} />
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <a href="/" className="hover:text-foreground transition-colors">الرئيسية</a>
          <ChevronLeft className="h-3 w-3" />
          <span className="font-medium text-foreground">مكتبة صفحات جزيل</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-jazeel-mint via-background to-jazeel-mint/40 pb-6 pt-10 sm:pb-10 sm:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--jazeel-mint-dark)_0%,_transparent_60%)] opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Layers className="h-3.5 w-3.5" />
            مكتبة القوالب
          </div>
          <h1 className="mb-3 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-4xl">
            مكتبة صفحات <span className="text-jazeel-green">جزيل</span>
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-sm text-muted-foreground sm:text-base">
            استعرض جميع صفحات قالب جزيل الجاهزة. يمكنك معاينة كل صفحة أو فتحها مباشرة أو تحميلها كملف HTML مستقل.
          </p>

          {/* Search */}
          <div className="mx-auto max-w-lg">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث في الصفحات..."
                className="h-11 rounded-2xl border-border/60 bg-background pe-4 ps-12 text-sm shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          <button
            onClick={() => setCategoryFilter("all")}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              categoryFilter === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            الكل ({templatePages.length})
          </button>
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setCategoryFilter(key)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                categoryFilter === key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {templateCategories[key].label} ({categoryCounts[key]})
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              عرض <span className="font-bold text-foreground">{filtered.length}</span> صفحة
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((page) => (
                <div
                  key={page.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 hover:border-jazeel-green/30"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 border-b border-border/40 bg-gradient-to-l from-jazeel-mint/30 to-transparent px-4 py-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-jazeel-mint text-jazeel-green">
                      <FolderOpen className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-foreground">{page.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{page.fileName}</p>
                    </div>
                    <StatusBadge status={page.status} />
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-4">
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">{page.description}</p>

                    <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${templateCategories[page.category].color}`}>
                        {templateCategories[page.category].label}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {page.lastModified}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 border-t border-border/40 bg-muted/20 px-4 py-3 transition-colors group-hover:bg-jazeel-mint/20">
                    {page.status === "ready" ? (
                      <>
                        <Button
                          size="sm"
                          variant="default"
                          className="flex-1 gap-1.5 rounded-xl bg-primary text-xs hover:bg-jazeel-green transition-colors"
                          onClick={() => setPreviewPage(page)}
                        >
                          <Eye className="h-3.5 w-3.5" />
                          معاينة
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1.5 rounded-xl text-xs"
                          onClick={() => window.open(page.path, "_blank")}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          فتح
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1.5 rounded-xl text-xs"
                          onClick={() => handleDownload(page)}
                        >
                          <Download className="h-3.5 w-3.5" />
                          تحميل
                        </Button>
                      </>
                    ) : (
                      <span className="flex-1 text-center text-xs text-muted-foreground py-1">قريباً...</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/30 px-6 py-20 text-center">
              <Search className="mb-4 h-12 w-12 text-muted-foreground/40" />
              <h3 className="mb-2 text-lg font-bold text-foreground">لم يتم العثور على نتائج</h3>
              <p className="mb-4 max-w-sm text-sm text-muted-foreground">جرّب تعديل معايير البحث</p>
              <Button variant="outline" size="sm" onClick={() => { setSearch(""); setCategoryFilter("all"); }} className="rounded-xl">إعادة تعيين</Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
