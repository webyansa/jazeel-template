import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CalendarDays, Clock, MapPin, Share2, Bookmark, Send,
  CheckCircle2, ChevronLeft, FileText, Building2
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GrantCard } from "@/components/GrantCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { grantsData, type Grant } from "@/lib/grants-data";

export const Route = createFileRoute("/grants/$grantId")({
  component: GrantDetailPage,
  notFoundComponent: GrantNotFound,
  head: ({ params }) => {
    const grant = grantsData.find((g) => g.id === params.grantId);
    return {
      meta: [
        { title: grant ? `${grant.title} — جزيل` : "فرصة المنحة — جزيل" },
        { name: "description", content: grant?.description ?? "" },
      ],
    };
  },
});

function GrantNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">الفرصة غير موجودة</h1>
      <Link to="/" className="mt-4 text-jazeel-green hover:underline">العودة لفرص المنح</Link>
    </div>
  );
}

function StatusBadge({ status }: { status: Grant["status"] }) {
  const styles = {
    open: "bg-jazeel-mint text-jazeel-green",
    closing_soon: "bg-jazeel-warning/15 text-jazeel-warning-foreground",
    closed: "bg-muted text-muted-foreground",
  };
  const labels = { open: "مفتوحة", closing_soon: "تغلق قريباً", closed: "مغلقة" };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
      <span className="h-5 w-1 rounded-full bg-jazeel-green" />
      {children}
    </h2>
  );
}

function GrantDetailPage() {
  const { grantId } = Route.useParams();
  const grant = grantsData.find((g) => g.id === grantId);

  if (!grant) {
    return <GrantNotFound />;
  }

  const relatedGrants = grantsData.filter((g) => g.id !== grant.id && g.status !== "closed").slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <Link to="/" className="hover:text-foreground transition-colors">فرص المنح</Link>
          <ChevronLeft className="h-3 w-3" />
          <span className="text-foreground font-medium truncate">{grant.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-bl from-jazeel-mint/60 via-background to-jazeel-mint/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-background p-2 shadow-sm border border-border/40">
                  <img src={grant.donorLogo} alt={grant.donor} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{grant.donor}</p>
                  <StatusBadge status={grant.status} />
                </div>
              </div>
              <h1 className="mb-3 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                {grant.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {grant.description}
              </p>

              {/* Quick meta */}
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-jazeel-green" />
                  آخر موعد: {grant.closingDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-jazeel-green" />
                  {grant.daysRemaining > 0 ? `متبقي ${grant.daysRemaining} يوم` : "انتهت المدة"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-jazeel-green" />
                  {grant.region}
                </span>
              </div>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
              {grant.status !== "closed" && (
                <Button className="gap-2 rounded-xl bg-jazeel-green px-6 text-jazeel-green-foreground hover:bg-jazeel-green/90">
                  <Send className="h-4 w-4" />
                  التقديم على المنحة
                </Button>
              )}
              <Button variant="outline" className="gap-2 rounded-xl">
                <FileText className="h-4 w-4" />
                إعداد المشروع
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-xl" aria-label="مشاركة">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl" aria-label="حفظ">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main column */}
          <div className="flex-1 space-y-10">
            {/* About */}
            {grant.fullDescription && (
              <section>
                <SectionTitle>نبذة عن الفرصة</SectionTitle>
                <p className="text-sm leading-loose text-muted-foreground">{grant.fullDescription}</p>
              </section>
            )}

            {/* Objectives */}
            {grant.objectives && grant.objectives.length > 0 && (
              <section>
                <SectionTitle>أهداف المنحة</SectionTitle>
                <ul className="space-y-2">
                  {grant.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-jazeel-green" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Eligibility */}
            {grant.eligibility && grant.eligibility.length > 0 && (
              <section>
                <SectionTitle>معايير القبول</SectionTitle>
                <div className="space-y-2">
                  {grant.eligibility.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-border/40 bg-muted/30 p-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Requirements */}
            {grant.requirements && grant.requirements.length > 0 && (
              <section>
                <SectionTitle>شروط التقديم</SectionTitle>
                <ul className="space-y-2">
                  {grant.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Target fields */}
            <section>
              <SectionTitle>المجالات المستهدفة</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {grant.fields.map((f) => (
                  <span key={f} className="rounded-xl bg-jazeel-mint px-4 py-2 text-sm font-medium text-jazeel-green">
                    {f}
                  </span>
                ))}
              </div>
            </section>

            {/* Target groups */}
            {grant.targetGroups && grant.targetGroups.length > 0 && (
              <section>
                <SectionTitle>الفئات المستهدفة</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {grant.targetGroups.map((g) => (
                    <span key={g} className="rounded-xl border border-border/60 bg-background px-4 py-2 text-sm text-muted-foreground">
                      {g}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Application steps */}
            {grant.applicationSteps && grant.applicationSteps.length > 0 && (
              <section>
                <SectionTitle>آلية التقديم</SectionTitle>
                <div className="relative space-y-4 pr-4">
                  <div className="absolute right-[7px] top-2 bottom-2 w-0.5 bg-border" />
                  {grant.applicationSteps.map((step, i) => (
                    <div key={i} className="relative flex items-start gap-4">
                      <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-jazeel-green text-xs font-bold text-jazeel-green-foreground">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-sm text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {grant.faq && grant.faq.length > 0 && (
              <section>
                <SectionTitle>الأسئلة الشائعة</SectionTitle>
                <Accordion type="single" collapsible className="w-full">
                  {grant.faq.map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border/40 mb-2 px-4">
                      <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-80 lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-4">
              {/* Quick info card */}
              <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                <h3 className="mb-4 text-sm font-bold text-foreground">معلومات سريعة</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1.5 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      الجهة المانحة
                    </dt>
                    <dd className="font-medium text-foreground">{grant.donor}</dd>
                  </div>
                  <div className="h-px bg-border/40" />
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1.5 text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      آخر موعد
                    </dt>
                    <dd className="font-medium text-foreground">{grant.closingDate}</dd>
                  </div>
                  <div className="h-px bg-border/40" />
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">الحالة</dt>
                    <dd><StatusBadge status={grant.status} /></dd>
                  </div>
                  <div className="h-px bg-border/40" />
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">المدة المتبقية</dt>
                    <dd className="font-medium text-foreground">
                      {grant.daysRemaining > 0 ? `${grant.daysRemaining} يوم` : "انتهت"}
                    </dd>
                  </div>
                  <div className="h-px bg-border/40" />
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">النطاق</dt>
                    <dd className="font-medium text-foreground">{grant.region}</dd>
                  </div>
                  <div className="h-px bg-border/40" />
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">نوع الدعم</dt>
                    <dd className="font-medium text-foreground">{grant.supportType}</dd>
                  </div>
                </dl>
              </div>

              {/* Action buttons */}
              <div className="space-y-2">
                {grant.status !== "closed" && (
                  <Button className="w-full gap-2 rounded-xl bg-jazeel-green text-jazeel-green-foreground hover:bg-jazeel-green/90">
                    <Send className="h-4 w-4" />
                    التقديم على المنحة
                  </Button>
                )}
                <Button variant="outline" className="w-full gap-2 rounded-xl">
                  <FileText className="h-4 w-4" />
                  إعداد المشروع
                </Button>
                <Button variant="ghost" className="w-full gap-2 rounded-xl text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                  مشاركة الفرصة
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Grants */}
      {relatedGrants.length > 0 && (
        <section className="border-t border-border/40 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-foreground">فرص مشابهة</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGrants.map((g) => (
                <GrantCard key={g.id} grant={g} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <h2 className="mb-3 text-2xl font-bold text-primary-foreground">
            هل تحتاج إلى تجهيز مشروعك قبل التقديم؟
          </h2>
          <p className="mb-6 text-sm text-primary-foreground/70">
            ابدأ إعداد مشروعك عبر أدوات جزيل المتكاملة لزيادة فرص قبولك
          </p>
          <Button className="gap-2 rounded-xl bg-jazeel-green px-8 py-3 text-base font-bold text-jazeel-green-foreground hover:bg-jazeel-green/90">
            ابدأ إعداد مشروعك
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
