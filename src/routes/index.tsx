import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, Building2, Target, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GrantCard } from "@/components/GrantCard";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { grantsData } from "@/lib/grants-data";

export const Route = createFileRoute("/")({
  component: GrantsListingPage,
  head: () => ({
    meta: [
      { title: "فرص المنح — جزيل" },
      { name: "description", content: "استكشف فرص المنح المتاحة للجمعيات والمنظمات غير الربحية عبر منصة جزيل" },
    ],
  }),
});

const fieldOptions = ["التنمية المجتمعية", "الأمن الغذائي", "التحول الرقمي", "الصحة", "تمكين المرأة", "البيئة", "التعليم", "الابتكار الاجتماعي"];
const regionOptions = ["جميع المناطق", "المنطقة الوسطى", "المنطقة الغربية", "المنطقة الشرقية", "المناطق النائية"];
const statusOptions = [
  { value: "all", label: "الكل" },
  { value: "open", label: "مفتوحة" },
  { value: "closing_soon", label: "تغلق قريباً" },
  { value: "closed", label: "مغلقة" },
];

function GrantsListingPage() {
  const [search, setSearch] = useState("");
  const [fieldFilter, setFieldFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return grantsData.filter((g) => {
      if (search && !g.title.includes(search) && !g.donor.includes(search)) return false;
      if (fieldFilter && !g.fields.some((f) => f.includes(fieldFilter))) return false;
      if (regionFilter && g.region !== regionFilter) return false;
      if (statusFilter !== "all" && g.status !== statusFilter) return false;
      return true;
    });
  }, [search, fieldFilter, regionFilter, statusFilter]);

  const hasFilters = search || fieldFilter || regionFilter || statusFilter !== "all";

  const resetFilters = () => {
    setSearch("");
    setFieldFilter("");
    setRegionFilter("");
    setStatusFilter("all");
  };

  const stats = {
    active: grantsData.filter((g) => g.status !== "closed").length,
    donors: new Set(grantsData.map((g) => g.donor)).size,
    fields: new Set(grantsData.flatMap((g) => g.fields)).size,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-jazeel-mint via-background to-jazeel-mint/40 pb-8 pt-12 sm:pb-12 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--jazeel-mint-dark)_0%,_transparent_60%)] opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            استكشف فرص المنح المناسبة <br className="hidden sm:block" />
            <span className="text-jazeel-green">لمشاريعك التنموية</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            منصة جزيل تربط بين المانحين والجمعيات لتسهيل الوصول إلى فرص التمويل والدعم المناسبة
          </p>

          {/* Stats */}
          <div className="mx-auto mb-8 flex max-w-lg justify-center gap-6 sm:gap-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-2xl font-extrabold text-primary sm:text-3xl">
                <Target className="h-5 w-5 text-jazeel-green" />
                {stats.active}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">فرصة نشطة</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-2xl font-extrabold text-primary sm:text-3xl">
                <Building2 className="h-5 w-5 text-jazeel-green" />
                {stats.donors}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">جهة مانحة</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-2xl font-extrabold text-primary sm:text-3xl">
                <Users className="h-5 w-5 text-jazeel-green" />
                {stats.fields}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">مجال متاح</p>
            </div>
          </div>

          {/* Search */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث بعنوان الفرصة أو اسم الجهة المانحة..."
                className="h-12 rounded-2xl border-border/60 bg-background pe-4 ps-12 text-sm shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 rounded-xl"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            الفلاتر
          </Button>

          {/* Quick status filters */}
          <div className="flex flex-1 gap-1.5 overflow-x-auto">
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setStatusFilter(opt.value)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  statusFilter === opt.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="gap-1 text-xs text-muted-foreground">
              <X className="h-3.5 w-3.5" />
              إعادة تعيين
            </Button>
          )}
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="border-t border-border/40 bg-background">
            <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:grid-cols-3 sm:px-6 lg:px-8">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">المجال</label>
                <select
                  value={fieldFilter}
                  onChange={(e) => setFieldFilter(e.target.value)}
                  className="h-9 w-full rounded-xl border border-input bg-background px-3 text-sm"
                >
                  <option value="">جميع المجالات</option>
                  {fieldOptions.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">المنطقة</label>
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="h-9 w-full rounded-xl border border-input bg-background px-3 text-sm"
                >
                  <option value="">جميع المناطق</option>
                  {regionOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">نوع الدعم</label>
                <select className="h-9 w-full rounded-xl border border-input bg-background px-3 text-sm">
                  <option value="">جميع الأنواع</option>
                  <option>مالي</option>
                  <option>فني وتدريبي</option>
                  <option>مالي وفني</option>
                  <option>مالي وإرشادي</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Results */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              عرض <span className="font-bold text-foreground">{filtered.length}</span> فرصة
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((grant) => (
                <GrantCard key={grant.id} grant={grant} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/30 px-6 py-20 text-center">
              <Search className="mb-4 h-12 w-12 text-muted-foreground/40" />
              <h3 className="mb-2 text-lg font-bold text-foreground">لم يتم العثور على نتائج</h3>
              <p className="mb-4 max-w-sm text-sm text-muted-foreground">
                جرّب تعديل معايير البحث أو الفلاتر للعثور على فرص المنح المناسبة
              </p>
              <Button variant="outline" size="sm" onClick={resetFilters} className="rounded-xl">
                إعادة تعيين الفلاتر
              </Button>
            </div>
          )}

          {/* Pagination placeholder */}
          {filtered.length > 0 && (
            <div className="mt-10 flex items-center justify-center gap-1.5">
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium transition-colors ${
                    p === 1
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      <NewsletterCTA />
      <Footer />
    </div>
  );
}
