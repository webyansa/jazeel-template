import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <img src="/jazeel-logo.svg" alt="جزيل" className="mb-4 h-8 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              منصة رقمية سعودية تربط بين المانحين والجمعيات غير الربحية لتسهيل عملية المنح وتحقيق أثر تنموي مستدام.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">الرئيسية</Link></li>
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">فرص المنح</Link></li>
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">بوابة المانحين</Link></li>
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">بوابة الجمعيات</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-bold">معلومات</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">عن جزيل</Link></li>
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">سياسة الخصوصية</Link></li>
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">شروط الاستخدام</Link></li>
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-bold">تابعنا</h3>
            <div className="flex gap-3">
              {["X", "In", "f"].map((icon) => (
                <span
                  key={icon}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-xs font-bold text-primary-foreground/70 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} جزيل. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
