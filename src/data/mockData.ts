// ============================================
// MOCK DATA FOR EASYPARCEL CLONE
// ============================================

export interface Courier {
  id: string;
  name: string;
  logo: string;
  category: string[];
  rating: number;
}

export const couriers: Courier[] = [
  { id: "1", name: "SPX Express", logo: "https://via.placeholder.com/120x60/FF6B35/fff?text=SPX", category: ["domestic", "cod", "next-day"], rating: 4.3 },
  { id: "2", name: "TracX Logis", logo: "https://via.placeholder.com/120x60/2E86AB/fff?text=TracX", category: ["domestic", "international"], rating: 4.1 },
  { id: "3", name: "J&T Express", logo: "https://via.placeholder.com/120x60/FF4500/fff?text=J%26T", category: ["domestic", "cod", "same-day"], rating: 4.2 },
  { id: "4", name: "Ninja Van", logo: "https://via.placeholder.com/120x60/FFD700/333?text=Ninja+Van", category: ["domestic", "on-demand", "paperless"], rating: 4.3 },
  { id: "5", name: "Singapore Post", logo: "https://via.placeholder.com/120x60/DC143C/fff?text=SingPost", category: ["domestic", "international", "paperless"], rating: 4.5 },
  { id: "6", name: "SF Express", logo: "https://via.placeholder.com/120x60/000000/fff?text=SF+Express", category: ["domestic", "international", "next-day"], rating: 4.4 },
  { id: "7", name: "Park N Parcel", logo: "https://via.placeholder.com/120x60/4ECDC4/fff?text=P%26P", category: ["domestic", "on-demand"], rating: 4.0 },
  { id: "8", name: "Aramex", logo: "https://via.placeholder.com/120x60/F39C12/fff?text=Aramex", category: ["international", "paperless"], rating: 4.3 },
  { id: "9", name: "Grab", logo: "https://via.placeholder.com/120x60/00B14F/fff?text=Grab", category: ["on-demand", "same-day"], rating: 4.6 },
  { id: "10", name: "Janio", logo: "https://via.placeholder.com/120x60/6C5CE7/fff?text=Janio", category: ["international", "paperless"], rating: 4.2 },
  { id: "11", name: "FedEx", logo: "https://via.placeholder.com/120x60/4B0082/fff?text=FedEx", category: ["international", "domestic", "next-day"], rating: 4.6 },
  { id: "12", name: "UPS", logo: "https://via.placeholder.com/120x60/3C2415/FFD700?text=UPS", category: ["international", "paperless"], rating: 4.4 },
  { id: "13", name: "Teleport Pink", logo: "https://via.placeholder.com/120x60/FF69B4/fff?text=Teleport", category: ["domestic", "same-day", "on-demand"], rating: 4.1 },
  { id: "14", name: "uParcel", logo: "https://via.placeholder.com/120x60/00CEC9/fff?text=uParcel", category: ["on-demand", "same-day"], rating: 4.0 },
  { id: "15", name: "Lalamove", logo: "https://via.placeholder.com/120x60/E84393/fff?text=Lalamove", category: ["on-demand", "same-day"], rating: 4.5 },
  { id: "16", name: "City-Link", logo: "https://via.placeholder.com/120x60/0984E3/fff?text=City-Link", category: ["domestic", "next-day"], rating: 4.2 },
  { id: "17", name: "PandaGo", logo: "https://via.placeholder.com/120x60/636E72/fff?text=PandaGo", category: ["on-demand", "same-day"], rating: 4.1 },
  { id: "18", name: "Goodie Gift Delivery", logo: "https://via.placeholder.com/120x60/FDCB6E/333?text=Goodie", category: ["on-demand", "same-day"], rating: 4.3 },
];

export interface Integration {
  id: string;
  name: string;
  logo: string;
}

export const integrations: Integration[] = [
  { id: "1", name: "Shopify", logo: "https://via.placeholder.com/140x50/95BF47/fff?text=Shopify" },
  { id: "2", name: "WooCommerce", logo: "https://via.placeholder.com/140x50/96588A/fff?text=WooCommerce" },
  { id: "3", name: "Shopee", logo: "https://via.placeholder.com/140x50/EE4D2D/fff?text=Shopee" },
  { id: "4", name: "Lazada", logo: "https://via.placeholder.com/140x50/0F146D/fff?text=Lazada" },
  { id: "5", name: "TikTok Shop", logo: "https://via.placeholder.com/140x50/000000/fff?text=TikTok+Shop" },
  { id: "6", name: "Magento", logo: "https://via.placeholder.com/140x50/F26322/fff?text=Magento" },
  { id: "7", name: "PrestaShop", logo: "https://via.placeholder.com/140x50/DF0067/fff?text=PrestaShop" },
  { id: "8", name: "OpenCart", logo: "https://via.placeholder.com/140x50/23A7D5/fff?text=OpenCart" },
  { id: "9", name: "BigCommerce", logo: "https://via.placeholder.com/140x50/34313F/fff?text=BigCommerce" },
  { id: "10", name: "Wix", logo: "https://via.placeholder.com/140x50/0C6EFC/fff?text=Wix" },
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I send a parcel with EasyParcel?",
    answer: "Simply enter your parcel details in our quote widget, compare prices from multiple couriers, select your preferred option, and book your shipment. We'll arrange pickup from your doorstep!"
  },
  {
    id: "2",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, AMEX), PayPal, bank transfers, and FPX online banking for Singapore customers."
  },
  {
    id: "3",
    question: "How long does delivery take?",
    answer: "Domestic deliveries typically take 1-3 business days. International deliveries vary by destination, ranging from 3-14 business days depending on the courier and service selected."
  },
  {
    id: "4",
    question: "Can I track my parcel?",
    answer: "Yes! All shipments booked through EasyParcel come with real-time tracking. You'll receive a tracking number via email and can monitor your parcel's journey on our website or app."
  },
  {
    id: "5",
    question: "Do you offer insurance for parcels?",
    answer: "Yes, we offer parcel protection up to S$200 for domestic shipments and up to S$5,000 for international shipments. You can add this during checkout for peace of mind."
  },
  {
    id: "6",
    question: "What if my parcel is damaged or lost?",
    answer: "In the rare event of damage or loss, our dedicated support team will assist you with the claims process. If you've purchased parcel protection, you'll be compensated according to your coverage."
  },
  {
    id: "7",
    question: "Is there a minimum or maximum parcel size?",
    answer: "Each courier has different size and weight restrictions. Generally, parcels can weigh up to 30kg for domestic and 70kg for international. Our quote widget will show you available options based on your parcel dimensions."
  },
  {
    id: "8",
    question: "Do you integrate with e-commerce platforms?",
    answer: "Absolutely! EasyParcel integrates with Shopify, WooCommerce, Shopee, Lazada, TikTok Shop, Magento, and many more. You can sync orders and auto-generate shipping labels directly from your store."
  },
];

export const announcementMessages = [
  { text: "🎉 New User Special: Get S$5 off your first shipment!", cta: "Claim Now" },
  { text: "🚀 Free pickup for all domestic shipments above S$10", cta: "Learn More" },
  { text: "📦 Ship internationally to 220+ countries from S$12.90", cta: "Check Rates" },
  { text: "⭐ Join 500,000+ happy shippers on EasyParcel", cta: "Sign Up Free" },
];

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&q=80",
    title: "Ship Smarter, Not Harder",
    subtitle: "Compare 20+ couriers and find the cheapest rates in Singapore"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
    title: "International Shipping Made Easy",
    subtitle: "Send parcels to 220+ countries with door-to-door service"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc44d0?w=1920&q=80",
    title: "Same-Day & On-Demand Delivery",
    subtitle: "Urgent parcel? We've got you covered with express options"
  },
];

export const countries = [
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
];

export const courierCategories = [
  { id: "all", label: "All Couriers" },
  { id: "domestic", label: "Domestic Delivery" },
  { id: "international", label: "International Delivery" },
  { id: "on-demand", label: "On-Demand" },
  { id: "cod", label: "Cash On Delivery" },
];
