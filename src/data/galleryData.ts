export interface GalleryImage {
  id: string;
  title: string;
  category: "Store Front" | "Interior & Shelves" | "Medicines & Storage" | "Health Devices" | "Customer Service";
  url: string;
  alt: string;
  caption: string;
}

export const GALLERY_DATA: GalleryImage[] = [
  {
    id: "gal-01",
    title: "Store Exterior & Front View",
    category: "Store Front",
    url: "https://images.unsplash.com/photo-1586015555751-63c233145d55?q=80&w=1200&auto=format&fit=crop",
    alt: "New Ajay Medical Hall Store Front in Mallachak More, Jehanabad",
    caption: "Modern medical hall storefront with prominent cross signage and clean glass entrance at Mallachak More."
  },
  {
    id: "gal-02",
    title: "Organized Medicine Shelves",
    category: "Interior & Shelves",
    url: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1200&auto=format&fit=crop",
    alt: "Neatly arranged prescription medicines on clean storage racks",
    caption: "Categorized, climate-controlled medicine racks ensuring fast access and 100% stock management."
  },
  {
    id: "gal-03",
    title: "Cold Chain Storage & Refrigeration",
    category: "Medicines & Storage",
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
    alt: "Insulin and temperature sensitive vaccine refrigeration unit",
    caption: "Dedicated medical refrigeration unit ensuring 2°C–8°C storage for insulins, vaccines, and biotechs."
  },
  {
    id: "gal-04",
    title: "Health & Diagnostic Devices Counter",
    category: "Health Devices",
    url: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop",
    alt: "Blood pressure monitors and glucometer display at New Ajay Medical Hall",
    caption: "Demonstration counter featuring digital BP monitors, glucose meters, pulse oximeters, and nebulizers."
  },
  {
    id: "gal-05",
    title: "Registered Pharmacist Consultation",
    category: "Customer Service",
    url: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?q=80&w=1200&auto=format&fit=crop",
    alt: "Friendly pharmacist assisting customer with dosage instructions",
    caption: "Our expert pharmacist providing dosage guidance, prescription check, and medicine counseling."
  },
  {
    id: "gal-06",
    title: "Baby Care & Wellness Section",
    category: "Interior & Shelves",
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    alt: "Dedicated shelf for baby formulas, diapers, and infant hygiene",
    caption: "Comprehensive baby care zone stocked with trusted brands like Himalaya, Pampers, and Lactogen."
  },
  {
    id: "gal-07",
    title: "Surgical & Hospital Disposables",
    category: "Medicines & Storage",
    url: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200&auto=format&fit=crop",
    alt: "Surgical masks, gloves, and wound care dressings stock",
    caption: "Sterile surgical consumables, bandages, cotton rolls, and IV sets for home nursing & clinics."
  },
  {
    id: "gal-08",
    title: "WhatsApp Order Dispatch Counter",
    category: "Customer Service",
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
    alt: "Medicine packing station for local home delivery in Jehanabad",
    caption: "Fast order processing and double-verification packing for home deliveries across Jehanabad."
  }
];
