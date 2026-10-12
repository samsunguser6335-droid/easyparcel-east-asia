import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useCartStore } from "../store/cartStore";
import { translations } from "../i18n/translations";
import type { Car } from "../types";
import { Gauge, Fuel, Calendar, Check } from "lucide-react";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { t, lang } = useLanguage();
  const isInCart = useCartStore((s) => s.isInCart(car.id));
  const addItem = useCartStore((s) => s.addItem);

  const title = lang === "ar" ? car.titleAr : lang === "ja" ? car.titleJa : car.titleEn;
  const description = lang === "ar" ? car.descriptionAr : lang === "ja" ? car.descriptionJa : car.descriptionEn;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(lang === "ar" ? "ar-AE" : lang === "ja" ? "ja-JP" : "en-AE").format(price);
  };

  return (
    <div className="group bg-primary border border-accent/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.images[0]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {car.isOnSale && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              {t({ en: "ON SALE", ar: "تخفيض", ja: "セール中" })}
            </span>
          )}
          {car.specType === "import" ? (
            <span className="px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full">
              {t({ en: "JDM Import", ar: "وارد ياباني", ja: "日本輸入車" })}
            </span>
          ) : (
            <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full backdrop-blur-sm">
              {t({ en: "GCC Specs", ar: "مواصفات خليجية", ja: "GCC仕様" })}
            </span>
          )}
        </div>
        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-primary/80 text-accent text-xs font-medium rounded backdrop-blur-sm">
            {car.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-secondary font-bold text-lg mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-secondary/50 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Quick Specs */}
        <div className="flex items-center gap-4 mb-4 text-secondary/60 text-xs">
          <span className="flex items-center gap-1">
            <Gauge size={12} />
            {formatPrice(car.mileage)} {t({ en: "km", ar: "كم", ja: "km" })}
          </span>
          <span className="flex items-center gap-1">
            <Fuel size={12} />
            {car.fuelType}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {car.year}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mb-4">
          <div>
            {car.isOnSale && car.salePrice ? (
              <>
                <p className="text-accent font-bold text-xl">
                  {formatPrice(car.salePrice)}{" "}
                  <span className="text-sm font-normal text-secondary/50">
                    {t({ en: "AED", ar: "د.إ", ja: "AED" })}
                  </span>
                </p>
                <p className="text-secondary/40 text-sm line-through">
                  {formatPrice(car.price)} AED
                </p>
                <p className="text-secondary/60 text-sm font-medium">
                  ${formatPrice(Math.round(car.salePrice / 3.67))}{" "}
                  <span className="text-xs font-normal text-secondary/40">USD</span>
                </p>
              </>
            ) : (
              <>
                <p className="text-accent font-bold text-xl">
                  {formatPrice(car.price)}{" "}
                  <span className="text-sm font-normal text-secondary/50">
                    {t({ en: "AED", ar: "د.إ", ja: "AED" })}
                  </span>
                </p>
                <p className="text-secondary/60 text-sm font-medium">
                  ${formatPrice(car.priceUSD)}{" "}
                  <span className="text-xs font-normal text-secondary/40">USD</span>
                </p>
              </>
            )}
            <p className="text-secondary/40 text-xs">
              {t({ en: "incl. 5% VAT", ar: "شامل 5% ضريبة", ja: "5% VAT込" })}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            to={`/car/${car.id}`}
            className="flex-1 py-2.5 text-center bg-accent/10 text-accent text-sm font-semibold rounded-xl hover:bg-accent/20 transition-colors border border-accent/20"
          >
            {t({ en: "View Details", ar: "عرض التفاصيل", ja: "詳細を見る" })}
          </Link>
          <Link
            to={`/contact?car=${encodeURIComponent(title)}`}
            className="flex-1 py-2.5 text-center bg-accent text-primary text-sm font-semibold rounded-xl hover:bg-accent-light transition-colors"
          >
            {t(translations.common.inquireNow)}
          </Link>
        </div>

        {/* Add to inquiry */}
        <button
          onClick={() => !isInCart && addItem(car.id)}
          disabled={isInCart}
          className={`w-full mt-3 py-2 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
            isInCart
              ? "bg-accent/10 text-accent cursor-default"
              : "bg-secondary/5 text-secondary/60 hover:bg-accent/10 hover:text-accent"
          }`}
        >
          {isInCart ? (
            <>
              <Check size={12} />
              {t({ en: "Added to Inquiry List", ar: "أُضيف لقائمة الاستفسار", ja: "お問い合わせリストに追加済み" })}
            </>
          ) : (
            t({ en: "Add to Inquiry List", ar: "أضف لقائمة الاستفسار", ja: "お問い合わせリストに追加" })
          )}
        </button>
      </div>
    </div>
  );
}
