import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  FileText,
  BarChart3,
  Users,
  Building2,
  Lightbulb,
  ClipboardList,
  TrendingUp,
  Shield,
  Zap,
  Target,
  CheckCircle2,
  ChevronLeft,
  Globe,
  Briefcase,
  PenTool,
  FolderKanban,
  HandCoins,
  Eye,
  Rocket,
  Award,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: JazeelHomePage,
  head: () => ({
    meta: [
      { title: "جزيل — منصة متكاملة لكتابة المقترحات وإدارة المنح" },
      {
        name: "description",
        content:
          "منصة رقمية سعودية متكاملة لكتابة مقترحات المشاريع التنموية وإدارة فرص المنح، تخدم الجمعيات غير الربحية والجهات المانحة.",
      },
      { property: "og:title", content: "جزيل — منصة متكاملة لكتابة المقترحات وإدارة المنح" },
      {
        property: "og:description",
        content:
          "منصة رقمية سعودية متكاملة لكتابة مقترحات المشاريع التنموية وإدارة فرص المنح.",
      },
    ],
  }),
});

/* ─── Data ─── */
const stats = [
  { value: "٥٠٠+", label: "منظمة مسجلة" },
  { value: "١,٢٠٠+", label: "مقترح مشروع" },
  { value: "٣٥٠+", label: "فرصة منح" },
  { value: "٨٥٠+", label: "مشروع نشط" },
];

const capabilities = [
  {
    icon: PenTool,
    title: "كتابة مقترحات المشاريع",
    desc: "أدوات ذكية لكتابة مقترحات احترافية مع قوالب جاهزة، وموجّهات محتوى، ومراجعة تلقائية تضمن جودة المخرجات.",
    features: ["قوالب مقترحات جاهزة", "موجّهات كتابة ذكية", "مراجعة وتقييم تلقائي", "تصدير بصيغ متعددة"],
    accent: "from-jazeel-green/10 to-jazeel-mint",
    iconBg: "bg-jazeel-green/10 text-jazeel-green",
  },
  {
    icon: FolderKanban,
    title: "إدارة المشاريع التنموية",
    desc: "نظام متكامل لإدارة دورة حياة المشروع من التخطيط إلى التنفيذ والمتابعة وقياس الأثر بأدوات مرنة وتقارير دقيقة.",
    features: ["متابعة مراحل التنفيذ", "مؤشرات أداء حية", "إدارة الفرق والمهام", "تقارير أثر تفصيلية"],
    accent: "from-primary/5 to-primary/10",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: HandCoins,
    title: "إدارة فرص المنح",
    desc: "منصة تربط الجمعيات بالفرص المناسبة وتمكّن الجهات المانحة من نشر الفرص ومتابعة الطلبات وتقييم المقترحات بشفافية.",
    features: ["نشر وتصفح الفرص", "تقديم إلكتروني متكامل", "تقييم ومفاضلة ذكية", "متابعة مرحلية شاملة"],
    accent: "from-jazeel-green/5 to-jazeel-mint/50",
    iconBg: "bg-jazeel-green/10 text-jazeel-green",
  },
];

const journeySteps = [
  { num: "١", title: "اكتشف الفرصة", desc: "تصفّح فرص المنح المتاحة أو أنشئ فرصة جديدة", icon: Lightbulb },
  { num: "٢", title: "جهّز المقترح", desc: "اكتب مقترحك باحترافية باستخدام أدوات جزيل الذكية", icon: PenTool },
  { num: "٣", title: "أدِر المشروع", desc: "تابع مراحل التنفيذ والمهام والفريق بمرونة", icon: FolderKanban },
  { num: "٤", title: "قِس الأثر", desc: "حلّل النتائج وقدّم تقارير أثر واضحة ومقنعة", icon: BarChart3 },
];

const useCases = [
  {
    icon: Building2,
    title: "جمعية تبحث عن تمويل",
    desc: "تصفّح الفرص المتاحة، جهّز مقترحاً احترافياً، وقدّم إلكترونياً بخطوات واضحة.",
  },
  {
    icon: HandCoins,
    title: "جهة مانحة تريد نشر فرصة",
    desc: "أنشئ فرصة منح، استقبل الطلبات، وقيّم المقترحات بأدوات تقييم ذكية.",
  },
  {
    icon: Users,
    title: "فريق تنفيذي يتابع المشاريع",
    desc: "تابع تقدم المشاريع والمؤشرات والمهام من لوحة تحكم مركزية.",
  },
  {
    icon: Eye,
    title: "إدارة تريد رؤية شاملة",
    desc: "احصل على تقارير أداء وأثر شاملة لاتخاذ قرارات أفضل.",
  },
];

const blogPosts = [
  {
    title: "كيف تكتب مقترح مشروع ناجح؟",
    excerpt: "دليل عملي خطوة بخطوة لكتابة مقترحات مشاريع تنموية مقنعة واحترافية.",
    tag: "دليل عملي",
    date: "١٢ أبريل ٢٠٢٦",
  },
  {
    title: "أفضل ممارسات إدارة المنح",
    excerpt: "تعرّف على أبرز الممارسات التي تضمن شفافية وكفاءة عملية المنح.",
    tag: "إدارة المنح",
    date: "٨ أبريل ٢٠٢٦",
  },
  {
    title: "دور الجمعيات في تحقيق رؤية ٢٠٣٠",
    excerpt: "كيف يمكن للقطاع غير الربحي المساهمة الفعّالة في أهداف التنمية الوطنية.",
    tag: "رؤية ٢٠٣٠",
    date: "٣ أبريل ٢٠٢٦",
  },
];

/* ─── Page ─── */
function JazeelHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background" dir="rtl">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-8">
            <img src="/jazeel-logo.svg" alt="جزيل" className="h-9" />
            <nav className="hidden items-center gap-6 text-[0.8125rem] font-medium text-muted-foreground md:flex">
              <a href="#" className="text-foreground">الرئيسية</a>
              <a href="#" className="transition-colors hover:text-foreground">بوابة المانحين</a>
              <a href="#" className="transition-colors hover:text-foreground">بوابة الجمعيات</a>
              <a href="#" className="transition-colors hover:text-foreground">فرص المنح</a>
              <a href="#" className="transition-colors hover:text-foreground">باقات جزيل</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex" aria-label="English">
              <Globe className="h-4 w-4" />
            </button>
            <Button variant="ghost" size="sm" className="hidden text-[0.8125rem] sm:inline-flex">
              تسجيل الدخول
            </Button>
            <Button size="sm" className="gap-1.5 rounded-xl bg-jazeel-green px-5 text-[0.8125rem] font-semibold text-white shadow-sm hover:bg-jazeel-green/90">
              اطلب نسخة تجريبية
            </Button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-20 pt-20 lg:pb-28 lg:pt-24">
        {/* BG decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-jazeel-mint/60 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-jazeel-green/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text side */}
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-jazeel-green/20 bg-jazeel-mint px-4 py-1.5 text-xs font-semibold text-jazeel-green">
                <Rocket className="h-3.5 w-3.5" />
                منصة سعودية رائدة للقطاع غير الربحي
              </div>
              <h1 className="mb-6 text-[2.25rem] font-extrabold leading-[1.25] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                منصة متكاملة لكتابة
                <br />
                <span className="text-jazeel-green">المقترحات</span> وإدارة
                <br />
                <span className="text-jazeel-green">المنح</span> والمشاريع
              </h1>
              <p className="mb-8 text-base leading-[1.9] text-muted-foreground lg:text-lg">
                نمكّن الجمعيات غير الربحية من كتابة مقترحات احترافية، وإدارة مشاريعها التنموية، والتقديم على فرص المنح — ونمكّن الجهات المانحة من تنظيم الفرص ومتابعة الأثر بشفافية.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2 rounded-2xl bg-primary px-8 text-[0.9rem] font-bold shadow-lg shadow-primary/20 hover:bg-primary/90">
                  اطلب نسخة تجريبية
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-2xl border-border/60 px-8 text-[0.9rem] font-bold hover:bg-muted/50">
                  استكشف المنصة
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Visual side — Product scene */}
            <div className="relative hidden lg:block">
              {/* Main dashboard card */}
              <div className="rounded-3xl border border-border/40 bg-white p-6 shadow-2xl shadow-primary/5">
                {/* Top bar */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white">ج</div>
                    <div>
                      <div className="text-sm font-bold text-foreground">لوحة التحكم</div>
                      <div className="text-[11px] text-muted-foreground">نظرة عامة على المنصة</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-jazeel-green/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-jazeel-warning/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/30" />
                  </div>
                </div>

                {/* Mini stats row */}
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "مقترحات جديدة", val: "٢٤", color: "text-jazeel-green" },
                    { label: "مشاريع نشطة", val: "١٨", color: "text-primary" },
                    { label: "فرص متاحة", val: "٧", color: "text-jazeel-warning-foreground" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-muted/50 p-3 text-center">
                      <div className={`text-lg font-extrabold ${s.color}`}>{s.val}</div>
                      <div className="text-[10px] text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Fake chart area */}
                <div className="rounded-xl bg-muted/30 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground">تقدم المشاريع</span>
                    <span className="text-[10px] text-muted-foreground">آخر ٣٠ يوم</span>
                  </div>
                  <div className="flex items-end gap-1.5" style={{ height: 60 }}>
                    {[40, 55, 35, 70, 50, 80, 65, 90, 75, 60, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-jazeel-green/30"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-6 top-8 rounded-2xl border border-border/40 bg-white p-3.5 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-jazeel-green/10">
                    <PenTool className="h-4 w-4 text-jazeel-green" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-foreground">مقترح جديد</div>
                    <div className="text-[10px] text-muted-foreground">جاهز للإرسال</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-16 rounded-2xl border border-border/40 bg-white p-3.5 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-foreground">تقرير الأثر</div>
                    <div className="text-[10px] text-jazeel-green font-semibold">+٣٢٪ تحسّن</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 top-28 rounded-2xl border border-border/40 bg-white p-3.5 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-jazeel-mint">
                    <HandCoins className="h-4 w-4 text-jazeel-green" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-foreground">فرصة منح</div>
                    <div className="text-[10px] text-muted-foreground">٣ طلبات جديدة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip / Stats ── */}
      <section className="border-y border-border/40 bg-muted/20 py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            تعتمد عليها أكثر من <span className="font-bold text-foreground">٥٠٠ منظمة</span> في القطاع غير الربحي
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-foreground sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Jazeel Offers ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-jazeel-mint px-4 py-1.5 text-xs font-semibold text-jazeel-green">
              <Layers className="h-3.5 w-3.5" />
              منصة متكاملة
            </div>
            <h2 className="mb-4 text-2xl font-extrabold text-foreground sm:text-3xl">
              ماذا تقدم <span className="text-jazeel-green">جزيل</span>؟
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              ثلاث قدرات أساسية في منصة واحدة تغطي رحلة العمل المؤسسي من الفكرة إلى الأثر
            </p>
          </div>

          <div className="space-y-8">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`group overflow-hidden rounded-3xl bg-gradient-to-bl ${cap.accent} border border-border/30 p-8 transition-all duration-300 hover:shadow-lg lg:p-10`}
              >
                <div className={`grid items-center gap-8 ${i % 2 === 1 ? "lg:grid-cols-[1fr_auto]" : "lg:grid-cols-[auto_1fr]"}`}>
                  {/* Icon side */}
                  <div className={`flex flex-col items-center justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${cap.iconBg}`}>
                      <cap.icon className="h-8 w-8" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="mb-3 text-xl font-extrabold text-foreground">{cap.title}</h3>
                    <p className="mb-5 max-w-xl text-sm leading-[1.9] text-muted-foreground">{cap.desc}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {cap.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-jazeel-green" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="bg-muted/20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <Target className="h-3.5 w-3.5" />
              رحلة العمل
            </div>
            <h2 className="mb-4 text-2xl font-extrabold text-foreground sm:text-3xl">
              كيف تعمل <span className="text-jazeel-green">جزيل</span>؟
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
              أربع خطوات واضحة تنقلك من الفكرة إلى الأثر الملموس
            </p>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connector line (desktop) */}
            <div className="absolute left-8 right-8 top-[3.25rem] hidden h-px bg-border/60 lg:block" />
            
            {journeySteps.map((step) => (
              <div key={step.num} className="relative rounded-2xl border border-border/40 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-jazeel-green text-lg font-extrabold text-white shadow-sm">
                  {step.num}
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{step.title}</h3>
                <p className="text-xs leading-[1.8] text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portals Section ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-2xl font-extrabold text-foreground sm:text-3xl">
              بوابتان لخدمة <span className="text-jazeel-green">طرفين</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
              جزيل تخدم الجمعيات غير الربحية والجهات المانحة بتجربة مخصصة لكل طرف
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Associations Portal */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-jazeel-mint/50 to-white p-8 transition-all duration-300 hover:shadow-lg lg:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-jazeel-green/10">
                <Building2 className="h-7 w-7 text-jazeel-green" />
              </div>
              <h3 className="mb-3 text-xl font-extrabold text-foreground">بوابة الجمعيات</h3>
              <p className="mb-6 text-sm leading-[1.9] text-muted-foreground">
                تمكّن الجمعيات من كتابة مقترحات احترافية، التقديم على فرص المنح، وإدارة مشاريعها التنموية من مكان واحد.
              </p>
              <div className="mb-6 space-y-3">
                {["كتابة وإدارة المقترحات", "التقديم على فرص المنح", "متابعة المشاريع والتقارير", "تقارير أثر تفصيلية"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-jazeel-green" />
                    {f}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="gap-2 rounded-xl border-jazeel-green/20 text-jazeel-green hover:bg-jazeel-green/5">
                استكشف بوابة الجمعيات
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>

            {/* Donors Portal */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-primary/5 to-white p-8 transition-all duration-300 hover:shadow-lg lg:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-extrabold text-foreground">بوابة المانحين</h3>
              <p className="mb-6 text-sm leading-[1.9] text-muted-foreground">
                تمكّن الجهات المانحة من نشر فرص المنح، استقبال الطلبات، وتقييم المقترحات ومتابعة أثر التمويل بشفافية.
              </p>
              <div className="mb-6 space-y-3">
                {["نشر وإدارة فرص المنح", "تقييم ومفاضلة المقترحات", "متابعة صرف التمويل", "تقارير أثر شاملة"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="gap-2 rounded-xl border-primary/20 text-primary hover:bg-primary/5">
                استكشف بوابة المانحين
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Proposition — Why Jazeel ── */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
              لماذا <span className="text-jazeel-green">جزيل</span> بدلاً من الطرق التقليدية؟
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-primary-foreground/60">
              نقلة نوعية من العمل اليدوي المبعثر إلى نظام مؤسسي متكامل
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ClipboardList, title: "تنظيم أوضح", desc: "كل المعلومات في مكان واحد بدلاً من ملفات وإيميلات متفرقة" },
              { icon: TrendingUp, title: "متابعة أدق", desc: "مؤشرات أداء حية وتنبيهات تلقائية لضمان سير العمل" },
              { icon: PenTool, title: "مقترحات أفضل", desc: "أدوات وموجّهات ذكية ترفع جودة المقترحات واحتمال القبول" },
              { icon: Shield, title: "حوكمة شفافة", desc: "توثيق كامل لكل مرحلة من التقديم إلى التنفيذ والتقييم" },
              { icon: Zap, title: "كفاءة أعلى", desc: "أتمتة العمليات المتكررة وتقليل الوقت والجهد بشكل ملموس" },
              { icon: Award, title: "نضج مؤسسي", desc: "تجربة احترافية تعكس نضج المنظمة أمام الشركاء والمانحين" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all duration-300 hover:bg-primary-foreground/10">
                <item.icon className="mb-4 h-6 w-6 text-jazeel-green" />
                <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                <p className="text-sm leading-[1.8] text-primary-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-jazeel-mint px-4 py-1.5 text-xs font-semibold text-jazeel-green">
              <Briefcase className="h-3.5 w-3.5" />
              سيناريوهات واقعية
            </div>
            <h2 className="mb-4 text-2xl font-extrabold text-foreground sm:text-3xl">
              كيف يستخدمون <span className="text-jazeel-green">جزيل</span>؟
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="group rounded-2xl border border-border/40 bg-white p-6 shadow-sm transition-all duration-300 hover:border-jazeel-green/20 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-jazeel-mint text-jazeel-green transition-colors group-hover:bg-jazeel-green group-hover:text-white">
                  <uc.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-foreground">{uc.title}</h3>
                <p className="text-xs leading-[1.8] text-muted-foreground">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog / Knowledge ── */}
      <section className="bg-muted/20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">مدوّنة جزيل</h2>
              <p className="mt-1 text-sm text-muted-foreground">مقالات ودلائل عملية للقطاع غير الربحي</p>
            </div>
            <Button variant="ghost" className="gap-1.5 text-sm text-jazeel-green hover:text-jazeel-green/80">
              جميع المقالات
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="group overflow-hidden rounded-2xl border border-border/40 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-jazeel-mint to-jazeel-mint-dark">
                  <FileText className="h-10 w-10 text-jazeel-green/30" />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-jazeel-green/10 px-2.5 py-0.5 text-[11px] font-semibold text-jazeel-green">{post.tag}</span>
                    <span className="text-[11px] text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="mb-2 text-sm font-bold leading-relaxed text-foreground group-hover:text-jazeel-green transition-colors">{post.title}</h3>
                  <p className="text-xs leading-[1.8] text-muted-foreground">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-jazeel-green/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="mb-5 text-2xl font-extrabold text-primary-foreground sm:text-3xl lg:text-4xl">
            هل أنت مستعد لتحويل طريقة
            <br />
            عملك <span className="text-jazeel-green">المؤسسي</span>؟
          </h2>
          <p className="mb-8 text-sm leading-[1.9] text-primary-foreground/60 sm:text-base">
            انضم إلى مئات المنظمات التي تستخدم جزيل لكتابة مقترحات أفضل، وإدارة مشاريع أكثر كفاءة، ومتابعة أثر أوضح.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="gap-2 rounded-2xl bg-jazeel-green px-8 text-[0.9rem] font-bold text-white shadow-lg shadow-jazeel-green/20 hover:bg-jazeel-green/90">
              اطلب نسخة تجريبية مجانية
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 rounded-2xl border-primary-foreground/20 px-8 text-[0.9rem] font-bold text-primary-foreground hover:bg-primary-foreground/10">
              تواصل معنا
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-primary-foreground/10 bg-primary py-12 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div className="lg:col-span-1">
              <img src="/jazeel-logo.svg" alt="جزيل" className="mb-4 h-8 brightness-0 invert" />
              <p className="text-xs leading-[1.9] text-primary-foreground/50">
                منصة رقمية سعودية متكاملة لكتابة مقترحات المشاريع التنموية وإدارة فرص المنح وتحقيق أثر تنموي مستدام.
              </p>
            </div>
            {/* Links */}
            <div>
              <h4 className="mb-4 text-sm font-bold">المنصة</h4>
              <ul className="space-y-2.5 text-xs text-primary-foreground/50">
                <li><a href="#" className="transition-colors hover:text-primary-foreground">بوابة الجمعيات</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-foreground">بوابة المانحين</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-foreground">فرص المنح</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-foreground">باقات جزيل</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold">معلومات</h4>
              <ul className="space-y-2.5 text-xs text-primary-foreground/50">
                <li><a href="#" className="transition-colors hover:text-primary-foreground">عن جزيل</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-foreground">المدوّنة</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-foreground">سياسة الخصوصية</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-foreground">شروط الاستخدام</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold">تواصل معنا</h4>
              <ul className="space-y-2.5 text-xs text-primary-foreground/50">
                <li><a href="#" className="transition-colors hover:text-primary-foreground">info@jazeel.net.sa</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-foreground">تواصل معنا</a></li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/5 text-xs text-primary-foreground/50 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground">X</a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/5 text-xs text-primary-foreground/50 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground">In</a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-[11px] text-primary-foreground/30">
            © ٢٠٢٦ جزيل. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
