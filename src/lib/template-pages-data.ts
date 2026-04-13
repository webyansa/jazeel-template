/* بيانات صفحات قوالب جزيل */

export interface TemplatePage {
  id: string;
  name: string;
  fileName: string;
  description: string;
  category: "main" | "grants" | "info" | "cta" | "support";
  status: "ready" | "new" | "development";
  lastModified: string;
  path: string;
}

export const templateCategories = {
  main: { label: "الصفحات الرئيسية", color: "bg-primary text-primary-foreground" },
  grants: { label: "صفحات فرص المنح", color: "bg-jazeel-green text-jazeel-green-foreground" },
  info: { label: "صفحات تعريفية", color: "bg-secondary text-secondary-foreground" },
  cta: { label: "صفحات CTA / Landing", color: "bg-jazeel-warning text-jazeel-warning-foreground" },
  support: { label: "صفحات مساندة", color: "bg-muted text-muted-foreground" },
} as const;

export const templatePages: TemplatePage[] = [
  {
    id: "home",
    name: "الصفحة الرئيسية",
    fileName: "home.html",
    description: "صفحة الهبوط الرئيسية لمنصة جزيل مع عرض المميزات والشركاء والإحصائيات وأزرار الإجراء",
    category: "main",
    status: "ready",
    lastModified: "2026-04-14",
    path: "/jazeel/home.html",
  },
  {
    id: "grants",
    name: "فرص المنح",
    fileName: "grants.html",
    description: "صفحة عرض جميع فرص المنح المتاحة مع فلاتر البحث والتصنيف وبطاقات الفرص",
    category: "grants",
    status: "ready",
    lastModified: "2026-04-14",
    path: "/jazeel/grants.html",
  },
  {
    id: "grant-details",
    name: "تفاصيل فرصة المنح",
    fileName: "grant-details.html",
    description: "صفحة تفاصيل فرصة المنح مع معلومات الجهة المانحة والأهداف ومعايير القبول وآلية التقديم",
    category: "grants",
    status: "ready",
    lastModified: "2026-04-14",
    path: "/jazeel/grant-details.html",
  },
  {
    id: "donor-portal",
    name: "بوابة الجهات المانحة",
    fileName: "donor-portal.html",
    description: "صفحة تسويقية احترافية للجهات المانحة تعرض نماذج الاستخدام والقدرات التشغيلية وخيار النظام المخصص",
    category: "main",
    status: "ready",
    lastModified: "2026-04-14",
    path: "/jazeel/donor-portal.html",
  },
  {
    id: "ngo-portal",
    name: "بوابة الجمعيات",
    fileName: "ngo-portal.html",
    description: "صفحة تسويقية احترافية للجمعيات غير الربحية تعرض المنظومة المتكاملة لإدارة المشاريع والمقترحات وفرص المنح",
    category: "main",
    status: "ready",
    lastModified: "2026-04-14",
    path: "/jazeel/ngo-portal.html",
  },
  {
    id: "pricing",
    name: "باقات الاشتراك",
    fileName: "pricing.html",
    description: "صفحة عرض باقات الاشتراك والأسعار مع مقارنة المميزات وجدول المقارنة التفصيلي",
    category: "cta",
    status: "ready",
    lastModified: "2026-04-14",
    path: "/jazeel/pricing.html",
  },
  {
    id: "donors-directory",
    name: "دليل المانحين",
    fileName: "donors-directory.html",
    description: "صفحة دليل الجهات المانحة مع بطاقات احترافية وفلاتر بحث وتصنيف حسب التخصص",
    category: "info",
    status: "ready",
    lastModified: "2026-04-14",
    path: "/jazeel/donors-directory.html",
  },
  {
    id: "about",
    name: "عن جزيل",
    fileName: "about.html",
    description: "صفحة تعريفية عن منصة جزيل ورؤيتها ورسالتها وفريق العمل",
    category: "info",
    status: "development",
    lastModified: "2026-04-14",
    path: "/jazeel/about.html",
  },
  {
    id: "contact",
    name: "تواصل معنا",
    fileName: "contact.html",
    description: "صفحة نموذج التواصل ومعلومات الاتصال بمنصة جزيل",
    category: "support",
    status: "development",
    lastModified: "2026-04-14",
    path: "/jazeel/contact.html",
  },
];
