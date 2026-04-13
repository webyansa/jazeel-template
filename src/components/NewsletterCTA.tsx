import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCTA() {
  return (
    <section className="bg-jazeel-mint">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          لا تفوّت فرص المنح الجديدة
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          اشترك ليصلك إشعار فوري بكل فرصة منح جديدة تناسب مجال عملك
        </p>
        <div className="mx-auto flex max-w-md gap-2">
          <Input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="h-11 rounded-xl border-border/60 bg-background"
          />
          <Button className="h-11 gap-2 rounded-xl bg-primary px-6 hover:bg-primary/90">
            <Send className="h-4 w-4" />
            اشتراك
          </Button>
        </div>
      </div>
    </section>
  );
}
