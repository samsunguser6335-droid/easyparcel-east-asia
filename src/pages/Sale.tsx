import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { getCarsOnSale } from "../data/cars";
import { CarCard } from "../components/CarCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export function Sale() {
  const { t, isRTL } = useLanguage();
  const saleCars = getCarsOnSale();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(saleCars.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCars = saleCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-sm font-medium">{t({ en: "Limited Time Offers", ar: "عروض محدودة", ja: "期間限定オファー" })}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-3">{t(translations.sale.title)}</h1>
          <p className="text-secondary/50 text-lg">{t(translations.sale.subtitle)}</p>
        </div>

        {paginatedCars.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paginatedCars.map((car) => (<CarCard key={car.id} car={car} />))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-4">
                <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="flex items-center gap-1 px-4 py-2 border border-accent/20 text-secondary/60 rounded-lg disabled:opacity-30 hover:border-accent/40 hover:text-accent transition-colors text-sm">
                  <ChevronLeft size={16} className={isRTL ? "rotate-180" : ""} />{t(translations.sale.previous)}
                </button>
                <span className="text-secondary/50 text-sm">{t(translations.sale.page)} {currentPage} {t(translations.sale.of)} {totalPages}</span>
                <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="flex items-center gap-1 px-4 py-2 border border-accent/20 text-secondary/60 rounded-lg disabled:opacity-30 hover:border-accent/40 hover:text-accent transition-colors text-sm">
                  {t(translations.sale.next)}<ChevronRight size={16} className={isRTL ? "rotate-180" : ""} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-primary border border-accent/10 rounded-2xl">
            <p className="text-6xl mb-4">🏷️</p>
            <p className="text-secondary/50 text-lg">{t(translations.sale.noSale)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
