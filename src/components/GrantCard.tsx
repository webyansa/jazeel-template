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
      {labels[status]}
    </span>
  );
}

function ExtraBadge({ label }: { label: string }) {
  const color = label === "جديد"
    ? "bg-jazeel-green/10 text-jazeel-green"
    : label === "إقبال مرتفع"
    ? "bg-chart-4/15 text-jazeel-warning-foreground"
    : "bg-jazeel-warning/15 text-jazeel-warning-foreground";
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${color}`}>
      {label}
    </span>
  );
}

export function GrantCard({ grant }: { grant: Grant }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-border/40 p-4 pb-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-jazeel-mint text-xl">
          {grant.donorLogo}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-muted-foreground">{grant.donor}</p>
        </div>
        <StatusBadge status={grant.status} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 pt-3">
        <h3 className="mb-2 text-base font-bold leading-snug text-foreground line-clamp-2">
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
              <span key={f} className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 border-t border-border/40 p-4 pt-3">
        <Link
          to="/grants/$grantId"
          params={{ grantId: grant.id }}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          عرض التفاصيل
          <ArrowLeft className="h-4 w-4" />
        </Link>
        {grant.status !== "closed" && (
          <button className="rounded-xl border border-jazeel-green/30 bg-jazeel-green/5 px-4 py-2.5 text-sm font-semibold text-jazeel-green transition-colors hover:bg-jazeel-green/10">
            بدء التقديم
          </button>
        )}
      </div>
    </div>
  );
}
