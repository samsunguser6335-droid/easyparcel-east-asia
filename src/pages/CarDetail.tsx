import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useCartStore } from "../store/cartStore";
import { translations } from "../i18n/translations";
import { siteConfig } from "../config/site";
import { getCarById } from "../data/cars";
import { useState } from "react";
import { ArrowLeft, Gauge, Fuel, Calendar, Settings, Palette, Shield, ShoppingCart, ChevronLeft, ChevronRight, Check, Send } from "lucide-react";

export function CarDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang, isRTL } = useLanguage();
  const car = getCarById(id || "");
  const [activeImage, setActiveImage] = useState(0);
  const isInCart = useCartStore((s) => s.isInCart(id || ""));
  const addItem = useCartStore((s) => s.addItem);

  if (!car) {
    return (
      <div className="py-20 text-center">
        <p className="text-secondary/50 text-lg">{t({ en: "Vehicle not found", ar: "السيارة غير موجودة", ja: "車両が見つかりません" })}</p>
        <Link to="/shop" className="mt-4 inline-block text-accent hover:text-accent-light">{t({ en: "← Back to Shop", ar: "→ العودة للمتجر", ja: "← 車両一覧に戻る" })}</Link>
      </div>
    );
  }

  const title = lang === "ar" ? car.titleAr : lang === "ja" ? car.titleJa : car.titleEn;
  const description = lang === "ar" ? car.descriptionAr : lang === "ja" ? car.descriptionJa : car.descriptionEn;

  const formatPrice = (price: number) => new Intl.NumberFormat(lang === "ar" ? "ar-AE" : lang === "ja" ? "ja-JP" : "en-AE").format(price);
  const deposit = Math.round((car.isOnSale && car.salePrice ? car.salePrice : car.price) * siteConfig.business.depositPercentage);

  const specs = [
    { icon: Calendar, label: t(translations.detail.year), value: car.year.toString() },
    { icon: Settings, label: t(translations.detail.engine), value: car.engine },
    { icon: Gauge, label: t(translations.detail.mileage), value: `${formatPrice(car.mileage)} ${t(translations.detail.km)}` },
    { icon: Fuel, label: t(translations.detail.fuelType), value: car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1) },
    { icon: Palette, label: t(translations.detail.color), value: car.color },
    { icon: Shield, label: t(translations.detail.specType), value: car.specType === "gcc" ? t(translations.detail.gcc) : t(translations.detail.import) },
    { icon: Settings, label: t(translations.detail.transmission), value: car.transmission === "automatic" ? t(translations.detail.automatic) : t(translations.detail.manual) },
    { icon: Gauge, label: t(translations.detail.drivetrain), value: car.drivetrain.toUpperCase() },
    { icon: Check, label: t(translations.detail.condition), value: car.condition === "new" ? t(translations.detail.new) : car.condition === "certified" ? t(translations.detail.certified) : t(translations.detail.used) },
  ];

  const nextImage = () => setActiveImage((i) => (i + 1) % car.images.length);
  const prevImage = () => setActiveImage((i) => (i - 1 + car.images.length) % car.images.length);

  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-secondary/50 hover:text-accent transition-colors mb-6 text-sm">
          <ArrowLeft size={16} className={isRTL ? "rotate-180" : ""} />
          {t({ en: "Back to Shop", ar: "العودة للمتجر", ja: "車両一覧に戻る" })}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary border border-accent/10">
              <img src={car.images[activeImage]} alt={title} className="w-full h-full object-cover" />
              {car.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute top-1/2 -translate-y-1/2 start-3 p-2 bg-primary/80 rounded-full text-secondary hover:bg-accent hover:text-primary transition-colors">
                    <ChevronLeft size={20} className={isRTL ? "rotate-180" : ""} />
                  </button>
                  <button onClick={nextImage} className="absolute top-1/2 -translate-y-1/2 end-3 p-2 bg-primary/80 rounded-full text-secondary hover:bg-accent hover:text-primary transition-colors">
                    <ChevronRight size={20} className={isRTL ? "rotate-180" : ""} />
                  </button>
                </>
              )}
              <div className="absolute top-4 start-4 flex gap-2">
                {car.specType === "import" ? (
                  <span className="px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full">{t({ en: "JDM Import", ar: "وارد ياباني", ja: "日本輸入車" })}</span>
                ) : (
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full backdrop-blur-sm">{t({ en: "GCC Specs", ar: "مواصفات خليجية", ja: "GCC仕様" })}</span>
                )}
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              {car.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)} className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${i === activeImage ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-2">{title}</h1>
              {car.isOnSale && (
                <div className="mb-3">
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                    {t({ en: "ON SALE", ar: "تخفيض", ja: "セール中" })}
                  </span>
                </div>
              )}
              <div className="flex flex-col gap-2 mb-4">
                {car.isOnSale && car.salePrice ? (
                  <>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-accent font-bold text-3xl">{formatPrice(car.salePrice)} <span className="text-lg font-normal text-secondary/50">{t({ en: "AED", ar: "د.إ", ja: "AED" })}</span></span>
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">{t(translations.common.vatIncluded)}</span>
                    </div>
                    <p className="text-secondary/40 text-lg line-through">
                      {formatPrice(car.price)} AED
                    </p>
                    <p className="text-secondary/70 text-lg font-medium">
                      ${formatPrice(Math.round(car.salePrice / 3.67))} <span className="text-sm font-normal text-secondary/50">USD</span>
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-accent font-bold text-3xl">{formatPrice(car.price)} <span className="text-lg font-normal text-secondary/50">{t({ en: "AED", ar: "د.إ", ja: "AED" })}</span></span>
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">{t(translations.common.vatIncluded)}</span>
                    </div>
                    <p className="text-secondary/70 text-lg font-medium">
                      ${formatPrice(car.priceUSD)} <span className="text-sm font-normal text-secondary/50">USD</span>
                    </p>
                  </>
                )}
              </div>
              <p className="text-secondary/50 text-sm">{t(translations.detail.vatNote)} • {t(translations.detail.depositNote)}</p>
            </div>

            <div className="mb-6 p-4 bg-secondary/[0.03] rounded-xl border border-accent/10">
              <h3 className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">{t(translations.detail.overview)}</h3>
              <p className="text-secondary/70 leading-relaxed">{description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">{t(translations.detail.specifications)}</h3>
              <div className="grid grid-cols-2 gap-3">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-secondary/[0.03] rounded-lg border border-accent/5">
                    <spec.icon size={16} className="text-accent shrink-0" />
                    <div>
                      <p className="text-secondary/40 text-xs">{spec.label}</p>
                      <p className="text-secondary text-sm font-medium">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-secondary/5 border border-accent/10 rounded-lg text-secondary/70 text-sm">{car.transmission === "automatic" ? t(translations.detail.automatic) : t(translations.detail.manual)}</span>
              <span className="px-3 py-1.5 bg-secondary/5 border border-accent/10 rounded-lg text-secondary/70 text-sm uppercase">{car.drivetrain}</span>
              <span className="px-3 py-1.5 bg-secondary/5 border border-accent/10 rounded-lg text-secondary/70 text-sm">{car.condition === "new" ? t(translations.detail.new) : car.condition === "certified" ? t(translations.detail.certified) : t(translations.detail.used)}</span>
            </div>

            <div className="space-y-3">
              <Link
                to={`/contact?car=${encodeURIComponent(title)}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-light transition-colors"
              >
                <Send size={18} />
                {t(translations.common.inquireNow)}
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => !isInCart && addItem(car.id)} disabled={isInCart} className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors ${isInCart ? "bg-accent/10 text-accent border border-accent/20" : "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"}`}>
                  {isInCart ? <Check size={16} /> : <ShoppingCart size={16} />}
                  {isInCart ? t({ en: "Added", ar: "أُضيف", ja: "追加済み" }) : t(translations.detail.addToInquiry)}
                </button>
                <Link to="/checkout" className="flex items-center justify-center gap-2 py-3 bg-secondary/10 text-secondary font-semibold rounded-xl hover:bg-secondary/20 transition-colors text-sm border border-accent/20">
                  {t(translations.detail.callDeposit)} <span className="text-xs opacity-70">({formatPrice(deposit)} {t({ en: "AED", ar: "د.إ", ja: "AED" })})</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
