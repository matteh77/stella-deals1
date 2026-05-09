import type { RegionCode } from "./locales";

type ProductRegion = {
  title: string;
  description: string;
  amazonUrl: string;
};

type Product = {
  id: string;
  category: string;
  emoji: string;
  regions: Partial<Record<RegionCode, ProductRegion>>;
};

const amazonDomains: Record<RegionCode, string> = {
  it: "it",
  de: "de",
  fr: "fr",
  es: "es",
  uk: "co.uk"
};

function amazonSearch(region: RegionCode, query: string) {
  return `https://www.amazon.${amazonDomains[region]}/s?k=${encodeURIComponent(
    query
  )}`;
}

export const products: Product[] = [
  {
    id: "anker-style-powerbank",
    category: "Tech",
    emoji: "PB",
    regions: {
      it: {
        title: "Powerbank compatta USB-C",
        description:
          "Una powerbank compatta è utile quando usi il telefono per mappe, biglietti digitali, foto e messaggi durante giornate lunghe fuori casa. Prima di scegliere, verifica capacità in mAh, peso, porte USB-C disponibili e compatibilità con i tuoi dispositivi direttamente su Amazon.",
        amazonUrl: "https://www.amazon.it/dp/B0FHGTGHRH"
      },
      de: {
        title: "Kompakte USB-C Powerbank",
        description:
          "Eine kompakte Powerbank ist praktisch für Reisen, Universität, Arbeit und lange Tage unterwegs. Vor dem Kauf sollten Kapazität, Gewicht, USB-C-Anschlüsse und Kompatibilität mit den eigenen Geräten direkt auf Amazon geprüft werden.",
        amazonUrl: amazonSearch("de", "kompakte powerbank usb c 10000mah")
      },
      fr: {
        title: "Batterie externe USB-C compacte",
        description:
          "Une batterie externe compacte est utile lors des voyages, des journées d’étude ou des déplacements prolongés. Avant de choisir, il est conseillé de vérifier la capacité, le poids, les ports USB-C et la compatibilité directement sur Amazon.",
        amazonUrl: amazonSearch("fr", "batterie externe compacte usb c 10000mah")
      },
      es: {
        title: "Powerbank USB-C compacta",
        description:
          "Una powerbank compacta es útil para viajes, universidad, trabajo y días largos fuera de casa. Antes de elegir, conviene comprobar capacidad, peso, puertos USB-C y compatibilidad directamente en Amazon.",
        amazonUrl: amazonSearch("es", "powerbank compacta usb c 10000mah")
      },
      uk: {
        title: "Compact USB-C power bank",
        description:
          "A compact power bank is useful for travel, commuting, study days and long days away from home. Before choosing one, check capacity, weight, USB-C ports and device compatibility directly on Amazon.",
        amazonUrl: amazonSearch("uk", "compact usb c power bank 10000mah")
      }
    }
  },
  {
    id: "cable-organizer",
    category: "Travel",
    emoji: "USB",
    regions: {
      it: {
        title: "Organizer per cavi da viaggio",
        description:
          "Un organizer per cavi aiuta a tenere ordinati caricabatterie, adattatori, powerbank, auricolari e piccoli accessori elettronici. È indicato per chi viaggia spesso o porta molti dispositivi nello zaino; prima di scegliere, verifica dimensioni, numero di scomparti e tipo di chiusura su Amazon.",
        amazonUrl: amazonSearch("it", "organizer cavi viaggio elettronica")
      },
      de: {
        title: "Reise-Organizer für Kabel",
        description:
          "Ein Kabel-Organizer hilft dabei, Ladegeräte, Adapter, Powerbanks und kleine Elektronikzubehörteile geordnet aufzubewahren. Besonders nützlich ist er für Reisen, Studium oder Arbeit; vor dem Kauf sollten Größe, Fächer und Verschluss geprüft werden.",
        amazonUrl: amazonSearch("de", "kabel organizer reise elektronik")
      },
      fr: {
        title: "Organisateur de câbles de voyage",
        description:
          "Un organisateur de câbles permet de ranger chargeurs, adaptateurs, batteries externes et petits accessoires électroniques. Il convient aux voyages et aux sacs de travail; vérifiez la taille, les compartiments et la fermeture sur Amazon.",
        amazonUrl: amazonSearch("fr", "organisateur cables voyage electronique")
      },
      es: {
        title: "Organizador de cables de viaje",
        description:
          "Un organizador de cables ayuda a guardar cargadores, adaptadores, powerbanks y pequeños accesorios electrónicos. Es útil para viajar, estudiar o trabajar fuera de casa; revisa tamaño, compartimentos y cierre en Amazon.",
        amazonUrl: amazonSearch("es", "organizador cables viaje electronica")
      },
      uk: {
        title: "Travel cable organizer",
        description:
          "A travel cable organizer keeps chargers, adapters, power banks and small electronics in one place. It is useful for travel bags, backpacks and work setups; check size, compartments and closure type on Amazon.",
        amazonUrl: amazonSearch("uk", "travel cable organizer electronics")
      }
    }
  },
  {
    id: "packing-cubes",
    category: "Travel",
    emoji: "BAG",
    regions: {
      it: {
        title: "Organizer per valigia",
        description:
          "Gli organizer per valigia aiutano a separare vestiti, intimo, accessori e piccoli oggetti durante un viaggio. Sono utili per chi vuole preparare il bagaglio in modo più ordinato; su Amazon conviene verificare numero di pezzi, misure e materiale.",
        amazonUrl: amazonSearch("it", "organizer valigia packing cubes")
      },
      de: {
        title: "Koffer-Organizer",
        description:
          "Packing Cubes helfen dabei, Kleidung, Wäsche und Zubehör im Koffer zu trennen. Sie sind praktisch für kurze und lange Reisen; vor dem Kauf sollten Anzahl, Größen und Material geprüft werden.",
        amazonUrl: amazonSearch("de", "packing cubes koffer organizer")
      },
      fr: {
        title: "Organisateurs pour valise",
        description:
          "Les organisateurs de valise permettent de séparer vêtements, sous-vêtements et accessoires pendant un voyage. Ils sont pratiques pour garder un bagage ordonné; vérifiez le nombre de pièces, les dimensions et le tissu sur Amazon.",
        amazonUrl: amazonSearch("fr", "packing cubes organiseur valise")
      },
      es: {
        title: "Organizadores para maleta",
        description:
          "Los organizadores de maleta ayudan a separar ropa, ropa interior y accesorios durante un viaje. Son útiles para mantener el equipaje ordenado; revisa cantidad de piezas, tamaños y material en Amazon.",
        amazonUrl: amazonSearch("es", "packing cubes organizador maleta")
      },
      uk: {
        title: "Packing cubes for luggage",
        description:
          "Packing cubes help separate clothes, underwear and accessories inside a suitcase or backpack. They are useful for keeping luggage organised; check set size, dimensions and material on Amazon.",
        amazonUrl: amazonSearch("uk", "packing cubes suitcase organizer")
      }
    }
  },
  {
    id: "led-desk-lamp",
    category: "Home Office",
    emoji: "LED",
    regions: {
      it: {
        title: "Lampada LED da scrivania",
        description:
          "Una lampada LED da scrivania può migliorare la visibilità durante studio, lavoro da casa o lettura serale. Prima di scegliere, verifica luminosità regolabile, temperatura colore, tipo di alimentazione e spazio occupato sulla scrivania.",
        amazonUrl: amazonSearch("it", "lampada led scrivania dimmerabile")
      },
      de: {
        title: "LED-Schreibtischlampe",
        description:
          "Eine LED-Schreibtischlampe kann beim Lernen, Arbeiten oder Lesen am Abend helfen. Vor dem Kauf sollten Helligkeitsstufen, Farbtemperatur, Stromversorgung und Platzbedarf geprüft werden.",
        amazonUrl: amazonSearch("de", "led schreibtischlampe dimmbar")
      },
      fr: {
        title: "Lampe de bureau LED",
        description:
          "Une lampe de bureau LED peut améliorer le confort visuel pour étudier, travailler ou lire. Avant de choisir, vérifiez la luminosité réglable, la température de couleur, l’alimentation et l’encombrement.",
        amazonUrl: amazonSearch("fr", "lampe bureau led dimmable")
      },
      es: {
        title: "Lámpara LED de escritorio",
        description:
          "Una lámpara LED de escritorio puede mejorar la visibilidad al estudiar, trabajar o leer por la noche. Conviene comprobar brillo regulable, temperatura de color, alimentación y espacio que ocupa.",
        amazonUrl: amazonSearch("es", "lampara escritorio led regulable")
      },
      uk: {
        title: "LED desk lamp",
        description:
          "An LED desk lamp can improve visibility for studying, working from home or reading in the evening. Check brightness levels, colour temperature, power source and desk footprint on Amazon.",
        amazonUrl: amazonSearch("uk", "dimmable led desk lamp")
      }
    }
  },
  {
    id: "smart-tracker",
    category: "Tech",
    emoji: "TAG",
    regions: {
      it: {
        title: "Tracker Bluetooth per chiavi e bagagli",
        description:
          "Un tracker Bluetooth può aiutare a ritrovare chiavi, zaini, valigie o piccoli oggetti importanti. È utile per viaggiatori e persone che si spostano spesso; verifica compatibilità con smartphone, autonomia e modalità di aggancio su Amazon.",
        amazonUrl: amazonSearch("it", "localizzatore bluetooth chiavi bagaglio")
      },
      de: {
        title: "Bluetooth-Tracker für Schlüssel und Gepäck",
        description:
          "Ein Bluetooth-Tracker kann helfen, Schlüssel, Taschen oder Gepäck schneller wiederzufinden. Er ist nützlich für Reisen und Alltag; prüfen Sie Smartphone-Kompatibilität, Batterielaufzeit und Befestigungsmöglichkeiten.",
        amazonUrl: amazonSearch("de", "bluetooth tracker schluessel gepaeck")
      },
      fr: {
        title: "Traceur Bluetooth pour clés et bagages",
        description:
          "Un traceur Bluetooth peut aider à retrouver des clés, sacs ou bagages. Il convient aux voyages et au quotidien; vérifiez la compatibilité smartphone, l’autonomie et le système d’attache sur Amazon.",
        amazonUrl: amazonSearch("fr", "traceur bluetooth cles bagage")
      },
      es: {
        title: "Localizador Bluetooth para llaves y equipaje",
        description:
          "Un localizador Bluetooth puede ayudar a encontrar llaves, mochilas o maletas. Es útil para viajes y uso diario; revisa compatibilidad con el móvil, autonomía y sistema de sujeción.",
        amazonUrl: amazonSearch("es", "localizador bluetooth llaves equipaje")
      },
      uk: {
        title: "Bluetooth tracker for keys and luggage",
        description:
          "A Bluetooth tracker can help locate keys, bags, luggage or other small essentials. It is useful for travel and daily routines; check phone compatibility, battery life and attachment options on Amazon.",
        amazonUrl: amazonSearch("uk", "bluetooth tracker keys luggage")
      }
    }
  },
  {
    id: "phone-tripod",
    category: "Creator",
    emoji: "TRI",
    regions: {
      it: {
        title: "Treppiede per smartphone",
        description:
          "Un treppiede per smartphone è utile per foto, video, videochiamate e contenuti social con inquadratura stabile. Prima di scegliere, verifica altezza regolabile, compatibilità con il telefono, telecomando Bluetooth e stabilità della base.",
        amazonUrl: amazonSearch("it", "treppiede smartphone telecomando bluetooth")
      },
      de: {
        title: "Smartphone-Stativ",
        description:
          "Ein Smartphone-Stativ ist praktisch für Fotos, Videos, Videoanrufe und Social Content. Vor dem Kauf sollten Höhe, Smartphone-Kompatibilität, Bluetooth-Fernbedienung und Stabilität geprüft werden.",
        amazonUrl: amazonSearch("de", "smartphone stativ bluetooth fernbedienung")
      },
      fr: {
        title: "Trépied pour smartphone",
        description:
          "Un trépied pour smartphone est utile pour photos, vidéos, appels vidéo et contenus sociaux. Vérifiez la hauteur réglable, la compatibilité, la télécommande Bluetooth et la stabilité de la base.",
        amazonUrl: amazonSearch("fr", "trepied smartphone telecommande bluetooth")
      },
      es: {
        title: "Trípode para smartphone",
        description:
          "Un trípode para smartphone es útil para fotos, vídeos, videollamadas y contenido social. Comprueba altura regulable, compatibilidad, mando Bluetooth y estabilidad de la base.",
        amazonUrl: amazonSearch("es", "tripode movil mando bluetooth")
      },
      uk: {
        title: "Smartphone tripod",
        description:
          "A smartphone tripod is useful for photos, videos, video calls and social content with a stable frame. Check adjustable height, phone compatibility, Bluetooth remote and base stability on Amazon.",
        amazonUrl: amazonSearch("uk", "smartphone tripod bluetooth remote")
      }
    }
  },
  {
    id: "stainless-bottle",
    category: "Everyday",
    emoji: "BOT",
    regions: {
      it: {
        title: "Borraccia termica in acciaio",
        description:
          "Una borraccia termica in acciaio è utile per palestra, lavoro, università, viaggi e giornate fuori casa. Prima di scegliere, verifica capacità, isolamento termico dichiarato, tipo di tappo, peso e facilità di pulizia.",
        amazonUrl: amazonSearch("it", "borraccia termica acciaio inox")
      },
      de: {
        title: "Isolierte Edelstahlflasche",
        description:
          "Eine isolierte Edelstahlflasche ist praktisch für Sport, Arbeit, Universität und Reisen. Vor dem Kauf sollten Fassungsvermögen, Isolierleistung, Verschluss, Gewicht und Reinigung geprüft werden.",
        amazonUrl: amazonSearch("de", "edelstahl trinkflasche isoliert")
      },
      fr: {
        title: "Gourde isotherme en acier",
        description:
          "Une gourde isotherme en acier est utile pour le sport, le travail, les études et les voyages. Vérifiez la capacité, l’isolation, le bouchon, le poids et la facilité de nettoyage.",
        amazonUrl: amazonSearch("fr", "gourde isotherme acier inoxydable")
      },
      es: {
        title: "Botella térmica de acero",
        description:
          "Una botella térmica de acero es útil para gimnasio, trabajo, universidad y viajes. Revisa capacidad, aislamiento, tipo de tapa, peso y facilidad de limpieza.",
        amazonUrl: amazonSearch("es", "botella termica acero inoxidable")
      },
      uk: {
        title: "Insulated stainless steel bottle",
        description:
          "An insulated stainless steel bottle is useful for the gym, work, study and travel. Check capacity, insulation claims, lid type, weight and cleaning instructions on Amazon.",
        amazonUrl: amazonSearch("uk", "insulated stainless steel water bottle")
      }
    }
  },
  {
    id: "laptop-stand",
    category: "Home Office",
    emoji: "LAP",
    regions: {
      it: {
        title: "Supporto regolabile per laptop",
        description:
          "Un supporto regolabile per laptop può aiutare a sollevare lo schermo e rendere la postazione più ordinata. È indicato per studio e lavoro da casa; verifica peso supportato, angolazione, stabilità e compatibilità con la dimensione del portatile.",
        amazonUrl: amazonSearch("it", "supporto laptop regolabile")
      },
      de: {
        title: "Verstellbarer Laptop-Ständer",
        description:
          "Ein verstellbarer Laptop-Ständer kann den Bildschirm anheben und den Arbeitsplatz ordentlicher machen. Prüfen Sie Tragfähigkeit, Winkel, Stabilität und Kompatibilität mit der Laptopgröße.",
        amazonUrl: amazonSearch("de", "laptop staender verstellbar")
      },
      fr: {
        title: "Support réglable pour ordinateur portable",
        description:
          "Un support réglable pour ordinateur portable peut surélever l’écran et organiser le bureau. Vérifiez la charge supportée, l’angle, la stabilité et la compatibilité avec la taille de l’ordinateur.",
        amazonUrl: amazonSearch("fr", "support ordinateur portable reglable")
      },
      es: {
        title: "Soporte ajustable para portátil",
        description:
          "Un soporte ajustable para portátil puede elevar la pantalla y mejorar el orden del escritorio. Revisa peso soportado, ángulo, estabilidad y compatibilidad con el tamaño del portátil.",
        amazonUrl: amazonSearch("es", "soporte portatil ajustable")
      },
      uk: {
        title: "Adjustable laptop stand",
        description:
          "An adjustable laptop stand can raise the screen and make a desk setup feel more organised. Check supported weight, angle adjustment, stability and laptop size compatibility on Amazon.",
        amazonUrl: amazonSearch("uk", "adjustable laptop stand")
      }
    }
  },
  {
    id: "gan-charger",
    category: "Tech",
    emoji: "GAN",
    regions: {
      it: {
        title: "Caricatore USB-C GaN",
        description:
          "Un caricatore USB-C GaN è utile per ridurre il numero di alimentatori da portare in viaggio o tenere sulla scrivania. Prima di scegliere, verifica wattaggio, numero di porte, supporto Power Delivery e compatibilità con smartphone, tablet o laptop.",
        amazonUrl: amazonSearch("it", "caricatore usb c gan 65w")
      },
      de: {
        title: "USB-C GaN-Ladegerät",
        description:
          "Ein USB-C GaN-Ladegerät kann mehrere Ladegeräte im Alltag oder auf Reisen ersetzen. Prüfen Sie Wattzahl, Anschlüsse, Power Delivery und Kompatibilität mit Smartphone, Tablet oder Laptop.",
        amazonUrl: amazonSearch("de", "usb c gan ladegeraet 65w")
      },
      fr: {
        title: "Chargeur USB-C GaN",
        description:
          "Un chargeur USB-C GaN peut réduire le nombre d’adaptateurs à transporter. Vérifiez la puissance, le nombre de ports, Power Delivery et la compatibilité avec smartphone, tablette ou ordinateur.",
        amazonUrl: amazonSearch("fr", "chargeur usb c gan 65w")
      },
      es: {
        title: "Cargador USB-C GaN",
        description:
          "Un cargador USB-C GaN puede reducir el número de adaptadores necesarios en casa o de viaje. Comprueba potencia, número de puertos, Power Delivery y compatibilidad con móvil, tablet o portátil.",
        amazonUrl: amazonSearch("es", "cargador usb c gan 65w")
      },
      uk: {
        title: "USB-C GaN charger",
        description:
          "A USB-C GaN charger can reduce the number of adapters needed for travel or desk setups. Check wattage, port count, Power Delivery support and compatibility with phones, tablets or laptops on Amazon.",
        amazonUrl: amazonSearch("uk", "usb c gan charger 65w")
      }
    }
  },
  {
    id: "toiletry-bag",
    category: "Travel",
    emoji: "KIT",
    regions: {
      it: {
        title: "Beauty case da viaggio appendibile",
        description:
          "Un beauty case appendibile aiuta a tenere ordinati prodotti da bagno, skincare e piccoli accessori durante un viaggio. È utile quando il bagno ha poco spazio; verifica dimensioni, tasche interne, gancio e materiale lavabile.",
        amazonUrl: amazonSearch("it", "beauty case viaggio appendibile")
      },
      de: {
        title: "Aufhängbarer Kulturbeutel",
        description:
          "Ein aufhängbarer Kulturbeutel hilft, Pflegeprodukte und kleine Accessoires auf Reisen zu ordnen. Prüfen Sie Größe, Innenfächer, Haken und waschbares Material.",
        amazonUrl: amazonSearch("de", "kulturbeutel reise aufhaengbar")
      },
      fr: {
        title: "Trousse de toilette suspendue",
        description:
          "Une trousse de toilette suspendue permet de ranger produits de bain, skincare et petits accessoires. Vérifiez les dimensions, les poches, le crochet et le matériau lavable.",
        amazonUrl: amazonSearch("fr", "trousse de toilette voyage suspendue")
      },
      es: {
        title: "Neceser de viaje colgante",
        description:
          "Un neceser colgante ayuda a organizar productos de baño, skincare y accesorios pequeños. Revisa tamaño, bolsillos interiores, gancho y material lavable.",
        amazonUrl: amazonSearch("es", "neceser viaje colgante")
      },
      uk: {
        title: "Hanging travel toiletry bag",
        description:
          "A hanging toiletry bag helps organise bathroom products, skincare and small accessories while travelling. Check size, internal pockets, hanging hook and washable material on Amazon.",
        amazonUrl: amazonSearch("uk", "hanging toiletry bag travel")
      }
    }
  },
  {
    id: "travel-adapter",
    category: "Travel",
    emoji: "PLG",
    regions: {
      it: {
        title: "Adattatore universale da viaggio",
        description:
          "Un adattatore universale da viaggio è utile quando visiti paesi con prese diverse da quelle di casa. Prima di scegliere, verifica paesi compatibili, porte USB, supporto USB-C e limiti di potenza indicati su Amazon.",
        amazonUrl: amazonSearch("it", "adattatore universale viaggio usb c")
      },
      de: {
        title: "Universeller Reiseadapter",
        description:
          "Ein universeller Reiseadapter ist praktisch für Länder mit unterschiedlichen Steckdosen. Prüfen Sie Länderkompatibilität, USB-Anschlüsse, USB-C-Unterstützung und Leistungsgrenzen.",
        amazonUrl: amazonSearch("de", "weltreiseadapter usb c")
      },
      fr: {
        title: "Adaptateur universel de voyage",
        description:
          "Un adaptateur universel est utile lors de voyages dans des pays avec différentes prises. Vérifiez les pays compatibles, les ports USB, l’USB-C et les limites de puissance.",
        amazonUrl: amazonSearch("fr", "adaptateur universel voyage usb c")
      },
      es: {
        title: "Adaptador universal de viaje",
        description:
          "Un adaptador universal es útil al viajar a países con enchufes diferentes. Comprueba países compatibles, puertos USB, USB-C y límites de potencia.",
        amazonUrl: amazonSearch("es", "adaptador universal viaje usb c")
      },
      uk: {
        title: "Universal travel adapter",
        description:
          "A universal travel adapter is useful when visiting countries with different plug types. Check country compatibility, USB ports, USB-C support and power limits on Amazon.",
        amazonUrl: amazonSearch("uk", "universal travel adapter usb c")
      }
    }
  },
  {
    id: "wireless-charging-stand",
    category: "Tech",
    emoji: "CHG",
    regions: {
      it: {
        title: "Supporto di ricarica wireless",
        description:
          "Un supporto di ricarica wireless è comodo su scrivania o comodino perché tiene il telefono visibile mentre si ricarica. Prima di scegliere, verifica compatibilità Qi, potenza supportata, alimentatore richiesto e stabilità del supporto.",
        amazonUrl: amazonSearch("it", "supporto ricarica wireless smartphone")
      },
      de: {
        title: "Kabelloser Ladeständer",
        description:
          "Ein kabelloser Ladeständer ist praktisch auf Schreibtisch oder Nachttisch, weil das Smartphone sichtbar bleibt. Prüfen Sie Qi-Kompatibilität, Ladeleistung, benötigtes Netzteil und Stabilität.",
        amazonUrl: amazonSearch("de", "kabellose ladestation smartphone staender")
      },
      fr: {
        title: "Support de charge sans fil",
        description:
          "Un support de charge sans fil est pratique sur un bureau ou une table de nuit pour garder le téléphone visible. Vérifiez la compatibilité Qi, la puissance, l’alimentation requise et la stabilité.",
        amazonUrl: amazonSearch("fr", "support chargeur sans fil smartphone")
      },
      es: {
        title: "Soporte de carga inalámbrica",
        description:
          "Un soporte de carga inalámbrica es práctico en el escritorio o la mesita porque mantiene el móvil visible mientras carga. Revisa compatibilidad Qi, potencia, cargador necesario y estabilidad.",
        amazonUrl: amazonSearch("es", "soporte carga inalambrica movil")
      },
      uk: {
        title: "Wireless charging stand",
        description:
          "A wireless charging stand is useful on a desk or bedside table because it keeps the phone visible while charging. Check Qi compatibility, supported power, required adapter and stand stability on Amazon.",
        amazonUrl: amazonSearch("uk", "wireless charging stand phone")
      }
    }
  }
];
