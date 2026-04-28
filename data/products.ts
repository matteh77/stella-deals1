import type { RegionCode } from "./locales";

type ProductRegion = { title: string; description: string; amazonUrl: string };
type Product = { id: string; category: string; emoji: string; regions: Partial<Record<RegionCode, ProductRegion>> };

const descriptions: Record<RegionCode, string> = {
  it: "Prodotto pratico da verificare direttamente su Amazon per prezzo, disponibilità e dettagli.",
  de: "Praktisches Produkt. Preis, Verfügbarkeit und Details bitte direkt bei Amazon prüfen.",
  fr: "Produit pratique. Prix, disponibilité et détails à vérifier directement sur Amazon.",
  es: "Producto práctico. Precio, disponibilidad y detalles a verificar directamente en Amazon.",
  uk: "Practical product idea. Check price, availability and details directly on Amazon."
};

function makeProduct(id: string, category: string, emoji: string, title: string, query: string): Product {
  return {
    id,
    category,
    emoji,
    regions: {
      it: { title, description: descriptions.it, amazonUrl: `https://www.amazon.it/s?k=${encodeURIComponent(query)}` },
      de: { title, description: descriptions.de, amazonUrl: `https://www.amazon.de/s?k=${encodeURIComponent(query)}` },
      fr: { title, description: descriptions.fr, amazonUrl: `https://www.amazon.fr/s?k=${encodeURIComponent(query)}` },
      es: { title, description: descriptions.es, amazonUrl: `https://www.amazon.es/s?k=${encodeURIComponent(query)}` },
      uk: { title, description: descriptions.uk, amazonUrl: `https://www.amazon.co.uk/s?k=${encodeURIComponent(query)}` }
    }
  };
}

export const products: Product[] = [
  makeProduct("powerbank", "Tech", "🔋", "Powerbank compatto USB-C", "compact usb c power bank 10000mah"),
  makeProduct("cable-organizer", "Travel", "🎒", "Organizer per cavi da viaggio", "travel cable organizer electronics"),
  makeProduct("packing-cubes", "Travel", "🧳", "Organizer per valigia", "packing cubes suitcase organizer"),
  makeProduct("desk-lamp", "Home Office", "💡", "Lampada LED da scrivania", "dimmable led desk lamp"),
  makeProduct("tracker", "Tech", "📍", "Tracker Bluetooth", "bluetooth tracker keys luggage"),
  makeProduct("tripod", "Creator", "📸", "Treppiede smartphone", "smartphone tripod bluetooth remote"),
  makeProduct("bottle", "Everyday", "🥤", "Borraccia termica", "insulated stainless steel water bottle"),
  makeProduct("laptop-stand", "Home Office", "💻", "Supporto laptop", "adjustable laptop stand"),
  makeProduct("gan-charger", "Tech", "⚡", "Caricatore USB-C GaN", "usb c gan charger 65w"),
  makeProduct("toiletry-bag", "Travel", "🧼", "Beauty case viaggio", "hanging toiletry bag travel"),
  makeProduct("travel-adapter", "Travel", "🔌", "Adattatore viaggio", "universal travel adapter usb c"),
  makeProduct("wireless-charger", "Tech", "📱", "Ricarica wireless", "wireless charging stand phone")
];
