import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { cars, getAllMakes } from "../data/cars";
import { CarCard } from "../components/CarCard";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { FilterState, SpecType } from "../types";

export function Shop() {
  const { t, lang } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    make: "",
    model: "",
    yearFrom: null,
    yearTo: null,
    priceFrom: null,
    priceTo: null,
    specType: "all",
    fuelType: "",
    search: "",
    vin: "",
  });

  const makes = getAllMakes();

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      // Search by title
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const titleMatch = car.titleEn.toLowerCase().includes(searchLower) ||
          car.titleAr.includes(filters.search);
        if (!titleMatch) return false;
      }

      // VIN search
      if (filters.vin && car.vin) {
        if (!car.vin.toLowerCase().includes(filters.vin.toLowerCase())) return false;
      }

      // Make filter
      if (filters.make && car.make !== filters.make) return false;

      // Spec type filter
      if (filters.specType !== "all" && car.specType !== filters.specType) return false;

      // Fuel type filter
      if (filters.fuelType && car.fuelType !== filters.fuelType) return false;

      // Year range
      if (filters.yearFrom && car.year < filters.yearFrom) return false;
      if (filters.yearTo && car.year > filters.yearTo) return false;

      // Price range
      if (filters.priceFrom && car.price < filters.priceFrom) return false;
      if (filters.priceTo && car.price > filters.priceTo) return false;

      return true;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      make: "", model: "", yearFrom: null, yearTo: null,
      priceFrom: null, priceTo: null, specType: "all",
      fuelType: "", search: "", vin: "",
    });
  };

  const hasActiveFilters = filters.make || filters.specType !== "all" ||
    filters.fuelType || filters.search || filters.vin ||
    filters.yearFrom || filters.priceFrom;

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-3">
            {t(translations.shop.title)}
          </h1>
          <p className="text-secondary/50 text-lg">
            {t(translations.shop.subtitle)}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={18} className="absolute top-1/2 -translate-y-1/2 start-4 text-secondary/40" />
            <input
              type="text"
              placeholder={t(translations.shop.search)}
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full ps-11 pe-4 py-3 bg-primary border border-accent/20 rounded-xl text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder={t(translations.shop.vinSearch)}
              value={filters.vin}
              onChange={(e) => setFilters({ ...filters, vin: e.target.value })}
              className="w-full sm:w-56 px-4 py-3 bg-primary border border-accent/20 rounded-xl text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-accent/50 transition-colors text-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-colors ${
              showFilters ? "bg-accent/10 border-accent/50 text-accent" : "border-accent/20 text-secondary/60 hover:border-accent/40"
            }`}
          >
            <SlidersHorizontal size={18} />
            <span className="text-sm font-medium">{t(translations.shop.filters)}</span>
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-8 p-6 bg-primary border border-accent/10 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Make */}
              <div>
                <label className="block text-secondary/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                  {t(translations.filter.make)}
                </label>
                <select
                  value={filters.make}
                  onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                  className="w-full px-3 py-2.5 bg-secondary/5 border border-accent/10 rounded-lg text-secondary text-sm focus:outline-none focus:border-accent/30"
                >
                  <option value="">{t(translations.filter.all)}</option>
                  {makes.map((make) => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              {/* Spec Type */}
              <div>
                <label className="block text-secondary/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                  {t(translations.filter.specs)}
                </label>
                <select
                  value={filters.specType}
                  onChange={(e) => setFilters({ ...filters, specType: e.target.value as SpecType | "all" })}
                  className="w-full px-3 py-2.5 bg-secondary/5 border border-accent/10 rounded-lg text-secondary text-sm focus:outline-none focus:border-accent/30"
                >
                  <option value="all">{t(translations.filter.allSpecs)}</option>
                  <option value="gcc">{t(translations.filter.gccSpecs)}</option>
                  <option value="import">{t(translations.filter.japaneseImport)}</option>
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-secondary/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                  {t(translations.filter.fuel)}
                </label>
                <select
                  value={filters.fuelType}
                  onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-secondary/5 border border-accent/10 rounded-lg text-secondary text-sm focus:outline-none focus:border-accent/30"
                >
                  <option value="">{t(translations.filter.all)}</option>
                  <option value="petrol">{t({ en: "Petrol", ar: "بنزين", ja: "ガソリン" })}</option>
                  <option value="hybrid">{t({ en: "Hybrid", ar: "هجين", ja: "ハイブリッド" })}</option>
                  <option value="electric">{t({ en: "Electric", ar: "كهربائي", ja: "電気" })}</option>
                  <option value="diesel">{t({ en: "Diesel", ar: "ديزل", ja: "ディーゼル" })}</option>
                </select>
              </div>

              {/* Year Range */}
              <div>
                <label className="block text-secondary/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                  {t(translations.filter.year)}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="From"
                    value={filters.yearFrom || ""}
                    onChange={(e) => setFilters({ ...filters, yearFrom: e.target.value ? Number(e.target.value) : null })}
                    className="w-1/2 px-3 py-2.5 bg-secondary/5 border border-accent/10 rounded-lg text-secondary text-sm focus:outline-none focus:border-accent/30"
                  />
                  <input
                    type="number"
                    placeholder="To"
                    value={filters.yearTo || ""}
                    onChange={(e) => setFilters({ ...filters, yearTo: e.target.value ? Number(e.target.value) : null })}
                    className="w-1/2 px-3 py-2.5 bg-secondary/5 border border-accent/10 rounded-lg text-secondary text-sm focus:outline-none focus:border-accent/30"
                  />
                </div>
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 flex items-center gap-1.5 text-accent text-sm hover:text-accent-light transition-colors"
              >
                <X size={14} />
                {t(translations.shop.clearFilters)}
              </button>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-secondary/50 text-sm">
            <span className="text-accent font-semibold">{filteredCars.length}</span>{" "}
            {t(translations.shop.results)}
          </p>
        </div>

        {/* Car Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-secondary/40 text-lg mb-4">
              {t(translations.shop.noResults)}
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 border border-accent/30 text-accent rounded-full hover:bg-accent/10 transition-colors text-sm font-medium"
            >
              {t(translations.shop.clearFilters)}
            </button>
          </div>
        )}

        {/* Custom Sourcing CTA */}
        <div className="mt-16 p-8 md:p-12 bg-primary border border-accent/20 rounded-2xl text-center">
          <p className="text-secondary/70 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            {t(translations.shop.customSourcingText)}
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-colors"
          >
            {t(translations.shop.customSourcingBtn)}
          </Link>
        </div>
      </div>
    </div>
  );
}
