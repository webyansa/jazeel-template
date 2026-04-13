import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Clock, ArrowLeft } from "lucide-react";
import type { Grant } from "@/lib/grants-data";

function StatusBadge({ status }: { status: Grant["status"] }) {
  const styles = {
    open: "bg-jazeel-mint text-jazeel-green",
    closing_soon: "bg-jazeel-warning/15 text-jazeel-warning-foreground",
    closed: "bg-muted text-muted-foreground",
  };
  const labels = { open: "مفتوحة", closing_soon: "تغلق قريباً", closed: "مغلقة" };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status]}`}>
      <span className={`me-1.5 inline-block h-1.5 w-1.5 rounded-full ${
        status === "open" ? "bg-jazeel-green" : status === "closing_soon" ? "bg-jazeel-warning" : "bg-muted-foreground"
      }`} />
      {labels[status]}
    </span>
  );
}

function ExtraBadge({ label }: { label: string }) {
  const color = label === "جديد"
    ? "bg-jazeel-green/10 text-jazeel-green border-jazeel-green/20"
    : label === "إقبال مرتفع"
    ? "bg-chart-4/10 text-jazeel-warning-foreground border-chart-4/20"
    : "bg-jazeel-warning/10 text-jazeel-warning-foreground border-jazeel-warning/20";
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${color}`}>
      {label}
    </span>
  );
}

export function GrantCard({ grant }: { grant: Grant }) {
  return (
    <Link
      to="/grants/$grantId"
      params={{ grantId: grant.id }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 hover:border-jazeel-green/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jazeel-green focus-visible:ring-offset-2"
    >
      {/* Top bar with donor logo */}
      <div className="flex items-center gap-3 border-b border-border/40 p-4 pb-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-background p-1.5 transition-transform duration-300 group-hover:scale-105">
          <img
            src={grant.donorLogo}
            alt={grant.donor}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-muted-foreground">{grant.donor}</p>
        </div>
        <StatusBadge status={grant.status} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 pt-3">
        <h3 className="mb-2 text-base font-bold leading-snug text-foreground line-clamp-2 transition-colors duration-200 group-hover:text-jazeel-green">
          {grant.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {grant.description}
        </p>

        {/* Badges */}
        {grant.badges.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {grant.badges.map((b) => (
              <ExtraBadge key={b} label={b} />
            ))}
          </div>
        )}

        {/* Meta */}
        <div className="mt-auto space-y-2 text-xs text-muted-foreground">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {grant.closingDate}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {grant.daysRemaining > 0 ? `متبقي ${grant.daysRemaining} يوم` : "انتهى"}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {grant.region}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {grant.fields.map((f) => (
              <span key={f} className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium transition-colors duration-200 group-hover:bg-jazeel-mint group-hover:text-jazeel-green">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 border-t border-border/40 bg-muted/20 p-4 pt-3 transition-colors duration-200 group-hover:bg-jazeel-mint/30">
        <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 group-hover:bg-jazeel-green group-hover:shadow-md">
          عرض التفاصيل
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
        </span>
        {grant.status !== "closed" && (
          <span className="rounded-xl border border-jazeel-green/30 bg-jazeel-green/5 px-4 py-2.5 text-sm font-semibold text-jazeel-green transition-colors duration-200 group-hover:bg-jazeel-green/15">
            بدء التقديم
          </span>
        )}
      </div>
    </Link>
  );
}
