// ============================================
// CORE TYPE DEFINITIONS
// Mirrors future Prisma schema
// ============================================

export type Language = "en" | "ar" | "ja";

export type SpecType = "gcc" | "import";

export type Condition = "new" | "certified" | "used";

export interface Car {
  id: string;
  // Bilingual fields
  titleEn: string;
  titleAr: string;
  titleJa: string;
  descriptionEn: string;
  descriptionAr: string;
  descriptionJa: string;
  // Core data
  make: string;
  model: string;
  year: number;
  price: number; // In AED, VAT included
  priceUSD: number; // In USD, for international buyers
  salePrice?: number; // Optional sale price in AED
  mileage: number; // in km
  // Specs
  specType: SpecType;
  condition: Condition;
  engine: string;
  transmission: "automatic" | "manual";
  fuelType: "petrol" | "hybrid" | "electric" | "diesel";
  drivetrain: "4wd" | "awd" | "rwd" | "fwd";
  color: string;
  // Media
  images: string[];
  // Status
  isOnSale: boolean;
  isFeatured: boolean;
  // VIN
  vin?: string;
  // Timestamps
  createdAt: string;
}

export interface CartItem {
  carId: string;
  quantity: number; // Always 1 for cars, but keeping for flexibility
  addedAt: string;
}

export interface InquiryItem {
  carId: string;
  message: string;
  createdAt: string;
}

export interface FilterState {
  make: string;
  model: string;
  yearFrom: number | null;
  yearTo: number | null;
  priceFrom: number | null;
  priceTo: number | null;
  specType: SpecType | "all";
  fuelType: string;
  search: string;
  vin: string;
}
