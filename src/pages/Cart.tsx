import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useCartStore } from "../store/cartStore";
import { translations } from "../i18n/translations";
import { getCarById } from "../data/cars";
import { Trash2, ShoppingCart, ArrowRight } from "lucide-react";

export function Cart() {
  const { t, lang, isRTL } = useLanguage();
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);

  const cartCars = items.map((item) => { const car = getCarById(item.carId); return car ? { ...car, addedAt: item.addedAt } : null; }).filter(Boolean);
  const total = cartCars.reduce((sum, car) => sum + (car?.price || 0), 0);
  const deposit = Math.round(total * 0.10);
  const formatPrice = (price: number) => new Intl.NumberFormat(lang === "ar" ? "ar-AE" : lang === "ja" ? "ja-JP" : "en-AE").format(price);

  if (cartCars.length === 0) {
    return (
      <div className="py-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center"><ShoppingCart size={32} className="text-accent" /></div>
          <h1 className="text-2xl font-bold text-secondary mb-3">{t(translations.cart.empty)}</h1>
          <p className="text-secondary/50 mb-8">{t(translations.cart.emptyDesc)}</p>
          <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-colors">
            {t(translations.cart.browseCars)}<ArrowRight size={18} className={isRTL ? "rotate-180" : ""} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-secondary">{t(translations.cart.title)}</h1>
          <span className="text-secondary/50 text-sm">{cartCars.length} {t(translations.cart.items)}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartCars.map((car) => (
              <div key={car!.id} className="flex gap-4 p-4 bg-primary border border-accent/10 rounded-xl hover:border-accent/20 transition-colors">
                <Link to={`/car/${car!.id}`} className="shrink-0">
                  <img src={car!.images[0]} alt={lang === "ar" ? car!.titleAr : lang === "ja" ? car!.titleJa : car!.titleEn} className="w-28 h-20 object-cover rounded-lg" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/car/${car!.id}`} className="text-secondary font-semibold hover:text-accent transition-colors line-clamp-1">{lang === "ar" ? car!.titleAr : lang === "ja" ? car!.titleJa : car!.titleEn}</Link>
                  <p className="text-secondary/50 text-sm mt-1">{car!.year} • {car!.specType === "gcc" ? t(translations.detail.gcc) : t(translations.detail.import)}</p>
                  <p className="text-accent font-bold mt-2">{formatPrice(car!.price)} {t({ en: "AED", ar: "د.إ", ja: "AED" })}</p>
                </div>
                <button onClick={() => removeItem(car!.id)} className="shrink-0 p-2 text-secondary/30 hover:text-red-400 transition-colors self-start" title={t(translations.cart.remove)}><Trash2 size={18} /></button>
              </div>
            ))}
            <button onClick={clearCart} className="text-secondary/40 text-sm hover:text-red-400 transition-colors">{t({ en: "Clear all", ar: "مسح الكل", ja: "すべてクリア" })}</button>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-6 bg-primary border border-accent/10 rounded-2xl">
              <h3 className="text-secondary font-semibold text-lg mb-4">{t({ en: "Summary", ar: "الملخص", ja: "概要" })}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm"><span className="text-secondary/50">{t(translations.cart.total)}</span><span className="text-secondary font-medium">{formatPrice(total)} {t({ en: "AED", ar: "د.إ", ja: "AED" })}</span></div>
                <div className="flex justify-between text-sm"><span className="text-secondary/50">{t(translations.cart.deposit)}</span><span className="text-accent font-bold">{formatPrice(deposit)} {t({ en: "AED", ar: "د.إ", ja: "AED" })}</span></div>
                <div className="border-t border-accent/10 pt-3"><p className="text-secondary/40 text-xs">{t(translations.detail.vatNote)}</p></div>
              </div>
              <Link to="/checkout" className="block w-full py-3 text-center bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors">{t(translations.cart.proceedCheckout)}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
