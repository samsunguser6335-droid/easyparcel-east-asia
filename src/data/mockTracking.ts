// Sophisticated mock tracking data for East Asia shipping scenarios

export interface TimelineEvent {
  date: string;
  time: string;
  status: string;
  location: string;
  completed: boolean;
  icon: 'package' | 'truck' | 'plane' | 'map-pin' | 'check-circle';
}

export interface TrackingInfo {
  trackingNumber: string;
  status: 'delivered' | 'in-transit' | 'out-for-delivery' | 'order-placed' | 'processing';
  statusColor: 'green' | 'blue' | 'yellow' | 'gray';
  courier: string;
  courierLogo?: string;
  origin: string;
  originCountry: string;
  destination: string;
  destinationCountry: string;
  estimatedDelivery: string;
  weight: string;
  dimensions: string;
  serviceType: string;
  timeline: TimelineEvent[];
}

export const mockTrackingData: Record<string, TrackingInfo> = {
  "EP-123456789": {
    trackingNumber: "EP-123456789",
    status: "in-transit",
    statusColor: "blue",
    courier: "SF Express",
    origin: "Singapore",
    originCountry: "SG",
    destination: "Tokyo, Japan",
    destinationCountry: "JP",
    estimatedDelivery: "2026-10-15",
    weight: "2.5 kg",
    dimensions: "30 x 20 x 15 cm",
    serviceType: "Express International",
    timeline: [
      { 
        date: "2026-10-10", 
        time: "09:00", 
        status: "Order Placed", 
        location: "Singapore Warehouse",
        completed: true,
        icon: 'package'
      },
      { 
        date: "2026-10-10", 
        time: "14:30", 
        status: "Picked Up", 
        location: "Singapore Warehouse",
        completed: true,
        icon: 'truck'
      },
      { 
        date: "2026-10-11", 
        time: "08:00", 
        status: "Departed Facility", 
        location: "Singapore Changi Hub",
        completed: true,
        icon: 'plane'
      },
      { 
        date: "2026-10-12", 
        time: "16:00", 
        status: "In Transit", 
        location: "Osaka Transit Hub, Japan",
        completed: true,
        icon: 'plane'
      },
      { 
        date: "2026-10-13", 
        time: "10:00", 
        status: "Arrived at Destination", 
        location: "Tokyo Distribution Center",
        completed: false,
        icon: 'map-pin'
      },
      { 
        date: "2026-10-13", 
        time: "18:00", 
        status: "Delivered", 
        location: "Tokyo, Japan",
        completed: false,
        icon: 'check-circle'
      },
    ]
  },
  "EP-987654321": {
    trackingNumber: "EP-987654321",
    status: "delivered",
    statusColor: "green",
    courier: "Yamato Transport",
    origin: "Singapore",
    originCountry: "SG",
    destination: "Seoul, South Korea",
    destinationCountry: "KR",
    estimatedDelivery: "2026-10-08",
    weight: "1.8 kg",
    dimensions: "25 x 18 x 12 cm",
    serviceType: "Standard International",
    timeline: [
      { 
        date: "2026-10-05", 
        time: "10:00", 
        status: "Order Placed", 
        location: "Singapore Warehouse",
        completed: true,
        icon: 'package'
      },
      { 
        date: "2026-10-05", 
        time: "15:00", 
        status: "Picked Up", 
        location: "Singapore Warehouse",
        completed: true,
        icon: 'truck'
      },
      { 
        date: "2026-10-06", 
        time: "09:00", 
        status: "Departed Facility", 
        location: "Singapore Hub",
        completed: true,
        icon: 'plane'
      },
      { 
        date: "2026-10-07", 
        time: "14:00", 
        status: "Arrived at Destination", 
        location: "Incheon Airport Hub, South Korea",
        completed: true,
        icon: 'plane'
      },
      { 
        date: "2026-10-08", 
        time: "11:00", 
        status: "Out for Delivery", 
        location: "Seoul Distribution Center",
        completed: true,
        icon: 'truck'
      },
      { 
        date: "2026-10-08", 
        time: "16:30", 
        status: "Delivered", 
        location: "Seoul, South Korea",
        completed: true,
        icon: 'check-circle'
      },
    ]
  },
  "EP-111222333": {
    trackingNumber: "EP-111222333",
    status: "order-placed",
    statusColor: "gray",
    courier: "CJ Logistics",
    origin: "Singapore",
    originCountry: "SG",
    destination: "Hong Kong",
    destinationCountry: "HK",
    estimatedDelivery: "2026-10-20",
    weight: "3.2 kg",
    dimensions: "35 x 25 x 20 cm",
    serviceType: "Economy International",
    timeline: [
      { 
        date: "2026-10-12", 
        time: "11:00", 
        status: "Order Placed", 
        location: "Singapore Warehouse",
        completed: true,
        icon: 'package'
      },
      { 
        date: "2026-10-12", 
        time: "16:00", 
        status: "Picked Up", 
        location: "Singapore Warehouse",
        completed: false,
        icon: 'truck'
      },
      { 
        date: "2026-10-13", 
        time: "09:00", 
        status: "Departed Facility", 
        location: "Singapore Hub",
        completed: false,
        icon: 'plane'
      },
      { 
        date: "2026-10-15", 
        time: "14:00", 
        status: "Arrived at Destination", 
        location: "Hong Kong International Airport",
        completed: false,
        icon: 'plane'
      },
      { 
        date: "2026-10-16", 
        time: "11:00", 
        status: "Out for Delivery", 
        location: "Hong Kong Distribution Center",
        completed: false,
        icon: 'truck'
      },
      { 
        date: "2026-10-16", 
        time: "18:00", 
        status: "Delivered", 
        location: "Hong Kong",
        completed: false,
        icon: 'check-circle'
      },
    ]
  },
  "EP-555666777": {
    trackingNumber: "EP-555666777",
    status: "out-for-delivery",
    statusColor: "yellow",
    courier: "Sagawa Express",
    origin: "Tokyo, Japan",
    originCountry: "JP",
    destination: "Taipei, Taiwan",
    destinationCountry: "TW",
    estimatedDelivery: "2026-10-14",
    weight: "0.8 kg",
    dimensions: "20 x 15 x 10 cm",
    serviceType: "Priority International",
    timeline: [
      { 
        date: "2026-10-11", 
        time: "08:00", 
        status: "Order Placed", 
        location: "Tokyo Warehouse",
        completed: true,
        icon: 'package'
      },
      { 
        date: "2026-10-11", 
        time: "12:00", 
        status: "Picked Up", 
        location: "Tokyo Warehouse",
        completed: true,
        icon: 'truck'
      },
      { 
        date: "2026-10-12", 
        time: "06:00", 
        status: "Departed Facility", 
        location: "Narita Airport Hub",
        completed: true,
        icon: 'plane'
      },
      { 
        date: "2026-10-12", 
        time: "10:00", 
        status: "Arrived at Destination", 
        location: "Taiwan Taoyuan International Airport",
        completed: true,
        icon: 'plane'
      },
      { 
        date: "2026-10-14", 
        time: "09:00", 
        status: "Out for Delivery", 
        location: "Taipei Distribution Center",
        completed: false,
        icon: 'truck'
      },
      { 
        date: "2026-10-14", 
        time: "17:00", 
        status: "Delivered", 
        location: "Taipei, Taiwan",
        completed: false,
        icon: 'check-circle'
      },
    ]
  }
};

// Helper function to get status badge color
export const getStatusBadgeColor = (status: string): string => {
  switch (status) {
    case 'delivered':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'in-transit':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'out-for-delivery':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'order-placed':
    case 'processing':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

// Helper function to format status for display
export const formatStatus = (status: string): string => {
  return status.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};
