import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useCartStore } from "../store/cartStore";
import { translations } from "../i18n/translations";
import { getCarById } from "../data/cars";
import { Lock, ArrowLeft, CreditCard, Shield } from "lucide-react";

export function Checkout() {
  const { t, lang } = useLanguage();
  const items = useCartStore((s) => s.items);
  const cartCars = items.map((item) => getCarById(item.carId)).filter(Boolean);
  const total = cartCars.reduce((sum, car) => sum + (car?.price || 0), 0);
  const deposit = Math.round(total * 0.10);
  const formatPrice = (price: number) => new Intl.NumberFormat(lang === "ar" ? "ar-AE" : lang === "ja" ? "ja-JP" : "en-AE").format(price);

  if (cartCars.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-secondary/50 text-lg mb-4">{t(translations.cart.empty)}</p>
        <Link to="/shop" className="text-accent hover:text-accent-light">{t(translations.cart.browseCars)}</Link>
      </div>
    );
  }

  const handleCheckout = () => {
    alert(t({ en: "Stripe integration coming soon! For now, please contact us via the inquiry form to complete your deposit.", ar: "تكامل Stripe قريباً! في الوقت الحالي، يرجى التواصل معنا عبر نموذج الاستفسار لإتمام العربون.", ja: "Stripe連携は近日公開予定です。現在は、お問い合わせフォームから手付金のお支払いについてご連絡ください。" }));
  };

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/cart" className="inline-flex items-center gap-2 text-secondary/50 hover:text-accent transition-colors mb-8 text-sm">
          <ArrowLeft size={16} />{t(translations.checkout.back)}
        </Link>
        <h1 className="text-3xl font-bold text-secondary mb-8">{t(translations.checkout.title)}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="p-6 bg-primary border border-accent/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><CreditCard size={20} className="text-accent" /></div>
                <div>
                  <h2 className="text-secondary font-semibold">{t(translations.checkout.paymentInfo)}</h2>
                  <p className="text-secondary/50 text-sm">{t(translations.checkout.paymentDesc)}</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-secondary/60 text-xs font-medium mb-1.5 uppercase tracking-wider">{t({ en: "Full Name", ar: "الاسم الكامل", ja: "お名前" })}</label>
                  <input type="text" placeholder={t({ en: "Enter your name", ar: "أدخل اسمك", ja: "お名前を入力" })} className="w-full px-4 py-3 bg-secondary/5 border border-accent/10 rounded-xl text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-accent/30 transition-colors" />
                </div>
                <div>
                  <label className="block text-secondary/60 text-xs font-medium mb-1.5 uppercase tracking-wider">{t({ en: "Email", ar: "البريد الإلكتروني", ja: "メールアドレス" })}</label>
                  <input type="email" placeholder={t({ en: "Enter your email", ar: "أدخل بريدك الإلكتروني", ja: "メールアドレスを入力" })} className="w-full px-4 py-3 bg-secondary/5 border border-accent/10 rounded-xl text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-accent/30 transition-colors" />
                </div>
                <div>
                  <label className="block text-secondary/60 text-xs font-medium mb-1.5 uppercase tracking-wider">{t({ en: "Phone Number", ar: "رقم الهاتف", ja: "電話番号" })}</label>
                  <input type="tel" placeholder="+971 50 XXX XXXX" className="w-full px-4 py-3 bg-secondary/5 border border-accent/10 rounded-xl text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-accent/30 transition-colors" />
                </div>
                <div>
                  <label className="block text-secondary/60 text-xs font-medium mb-1.5 uppercase tracking-wider">{t({ en: "Card Number", ar: "رقم البطاقة", ja: "カード番号" })}</label>
                  <input type="text" placeholder="4242 4242 4242 4242" disabled className="w-full px-4 py-3 bg-secondary/5 border border-accent/10 rounded-xl text-secondary/30 placeholder:text-secondary/20 cursor-not-allowed" />
                  <p className="text-secondary/30 text-xs mt-1">{t({ en: "Stripe test mode — real payments coming soon", ar: "وضع اختبار Stripe — الدفع الحقيقي قريباً", ja: "Stripeテストモード — 本格決済は近日公開" })}</p>
                </div>
              </div>
              <button onClick={handleCheckout} className="w-full py-4 bg-accent text-primary font-bold text-lg rounded-xl hover:bg-accent-light transition-colors flex items-center justify-center gap-2">
                <Lock size={18} />{t(translations.checkout.placeOrder)} — {formatPrice(deposit)} {t({ en: "AED", ar: "د.إ", ja: "AED" })}
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 text-secondary/40 text-xs"><Shield size={12} />{t(translations.checkout.secure)}</div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="sticky top-28 p-6 bg-primary border border-accent/10 rounded-2xl">
              <h3 className="text-secondary font-semibold text-lg mb-4">{t(translations.checkout.summary)}</h3>
              <div className="space-y-3 mb-6">
                {cartCars.map((car) => (
                  <div key={car!.id} className="flex items-center gap-3">
                    <img src={car!.images[0]} alt="" className="w-14 h-10 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="text-secondary text-sm font-medium truncate">{lang === "ar" ? car!.titleAr : lang === "ja" ? car!.titleJa : car!.titleEn}</p>
                      <p className="text-accent text-sm">{formatPrice(car!.price)} {t({ en: "AED", ar: "د.إ", ja: "AED" })}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-accent/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm"><span className="text-secondary/50">{t(translations.cart.total)}</span><span className="text-secondary font-medium">{formatPrice(total)} {t({ en: "AED", ar: "د.إ", ja: "AED" })}</span></div>
                <div className="flex justify-between text-sm"><span className="text-secondary/50">{t(translations.cart.deposit)}</span><span className="text-accent font-bold text-lg">{formatPrice(deposit)} {t({ en: "AED", ar: "د.إ", ja: "AED" })}</span></div>
                <p className="text-secondary/40 text-xs pt-2">{t(translations.detail.vatNote)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
