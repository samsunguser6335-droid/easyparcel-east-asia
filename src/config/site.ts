// ============================================
// CENTRAL SITE CONFIGURATION
// Easy to change in ONE place
// ============================================

export const siteConfig = {
  // Company Names
  name: {
    en: "Aura Motors",
    ar: "أورا موتورز",
    ja: "アウラモーターズ",
  },

  // Taglines
  tagline: {
    en: "The Art of Japanese Luxury",
    ar: "فن الرفاهية اليابانية",
    ja: "日本製のラグジュアリーの芸術",
  },

  // Brand Colors (also defined in Tailwind theme)
  colors: {
    primary: "#1A1A1D",    // Dark Charcoal
    secondary: "#F5F1E8",  // Cream/Off-White
    accent: "#C6A664",     // Premium Gold
  },

  // Contact Information
  contact: {
    whatsapp: "+971501234567",       // Easy to change
    whatsappDisplay: "+971 50 123 4567",
    email: "aura.drive@hotmail.com",
    address: {
      en: "Aura Motor stand, Al Aweer Auto Market, Dubai, UAE",
      ar: "موقف أورا موتورز، سوق العوير للسيارات، دبي، الإمارات العربية المتحدة",
      ja: "アウラモーターズスタンド、アラウェール自動車市場、ドバイ、UAE",
    },
  },

  // Social Media (add later)
  social: {
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },

  // Business Details
  business: {
    vatRate: 0.05, // 5% VAT
    currency: "AED",
    currencySymbol: "د.إ",
    depositPercentage: 0.10, // 10% deposit via Stripe
  },

  // Car Niche Description
  niche: {
    en: "Luxury Japanese automobiles, Off-road 4x4s, Certified pre-owned and curated JDM luxury SUVs & executive sedans for the GCC.",
    ar: "سيارات يابانية فاخرة، مركبات دفع رباعي، معتمدة مسبقاً ومختارة بعناية من سيارات JDM الفاخرة وسيدان تنفيذية للخليج.",
    ja: "高級日本車、オフロード4x4、認定中古車、厳選されたJDM高級SUVおよびエグゼクティブセダン。GCC向け。",
  },

  // WhatsApp message template
  whatsappMessage: (carTitle: string) =>
    `Hello Aura Motors, I'm interested in the ${carTitle}. Could you provide more details?`,

  // Language display names (for the language switcher)
  languageNames: {
    en: { label: "English", native: "English", flag: "🇬🇧" },
    ar: { label: "Arabic", native: "العربية", flag: "🇦🇪" },
    ja: { label: "Japanese", native: "日本語", flag: "🇯🇵" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
