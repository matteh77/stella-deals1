import type { RegionCode } from "./locales";

type ProductRegion = { title: string; description: string; amazonUrl: string };
type Product = { id: string; category: string; emoji: string; regions: Partial<Record<RegionCode, ProductRegion>> };

function regionUrl(region: RegionCode, query: string) {
  const domains: Record<RegionCode, string> = {
    it: "https://www.amazon.it",
    de: "https://www.amazon.de",
    fr: "https://www.amazon.fr",
    es: "https://www.amazon.es",
    uk: "https://www.amazon.co.uk"
  };
  return `${domains[region]}/s?k=${encodeURIComponent(query)}`;
}

function product(
  id: string,
  category: string,
  emoji: string,
  query: string,
  regions: Record<RegionCode, Omit<ProductRegion, "amazonUrl">>
): Product {
  return {
    id,
    category,
    emoji,
    regions: {
      it: { ...regions.it, amazonUrl: regionUrl("it", query) },
      de: { ...regions.de, amazonUrl: regionUrl("de", query) },
      fr: { ...regions.fr, amazonUrl: regionUrl("fr", query) },
      es: { ...regions.es, amazonUrl: regionUrl("es", query) },
      uk: { ...regions.uk, amazonUrl: regionUrl("uk", query) }
    }
  };
}

export const products: Product[] = [
  product("powerbank", "Tech", "PB", "compact usb c power bank 10000mah", {
    it: {
      title: "Powerbank compatta USB-C",
      description:
        "Una powerbank compatta e utile quando usi il telefono per mappe, biglietti digitali, foto e messaggi durante giornate lunghe fuori casa. Prima di scegliere, verifica capacita in mAh, peso, porte USB-C disponibili e compatibilita con i tuoi dispositivi direttamente su Amazon."
    },
    de: {
      title: "Kompakte USB-C-Powerbank",
      description:
        "Eine kompakte Powerbank hilft Pendlern, Reisenden und Studierenden, wenn Smartphone, Kopfhoerer oder E-Reader unterwegs durchhalten muessen. Pruefe bei Amazon Kapazitaet in mAh, Gewicht, USB-C-Ein- und Ausgaenge, Ladeleistung und Kompatibilitaet mit deinen Geraeten."
    },
    fr: {
      title: "Batterie externe USB-C compacte",
      description:
        "Une batterie externe compacte sert aux trajets, voyages et longues journees ou le telephone gere plans, billets et messages. Avant de choisir, verifiez sur Amazon la capacite en mAh, le poids, les ports USB-C, la puissance de charge et la compatibilite avec vos appareils."
    },
    es: {
      title: "Powerbank USB-C compacta",
      description:
        "Una powerbank compacta resulta util para viajes, universidad y jornadas largas en las que el movil se usa para mapas, pagos y comunicacion. Comprueba en Amazon capacidad en mAh, peso, puertos USB-C, potencia de carga y compatibilidad con tus dispositivos."
    },
    uk: {
      title: "Compact USB-C power bank",
      description:
        "A compact power bank is useful for commuters, travellers and students who rely on a phone for maps, tickets, photos and messages. Check capacity in mAh, weight, USB-C ports, charging output and device compatibility directly on Amazon before choosing."
    }
  }),
  product("cable-organizer", "Travel", "USB", "travel cable organizer electronics", {
    it: {
      title: "Organizer per cavi da viaggio",
      description:
        "Un organizer per cavi raccoglie caricatore, adattatori, auricolari, schede e piccoli accessori in un solo punto della borsa. E indicato per viaggio, studio e lavoro mobile; su Amazon controlla dimensioni interne, tasche elastiche, chiusura, materiale e spazio per alimentatori piu spessi."
    },
    de: {
      title: "Kabelorganizer fuer Reisen",
      description:
        "Ein Kabelorganizer haelt Ladegeraet, Adapter, Ohrhoerer, Speicherkarten und kurze Kabel zusammen, damit sie nicht lose im Rucksack liegen. Er passt zu Reise, Studium und mobilem Arbeiten; pruefe bei Amazon Innenaufteilung, Reissverschluss, Material und Platz fuer groessere Netzteile."
    },
    fr: {
      title: "Organiseur de cables de voyage",
      description:
        "Un organiseur de cables regroupe chargeur, adaptateurs, ecouteurs, cartes memoire et petits accessoires dans une seule pochette. Il convient aux voyages et au travail mobile; verifiez sur Amazon les dimensions, les poches elastiques, la fermeture et la place pour les chargeurs."
    },
    es: {
      title: "Organizador de cables de viaje",
      description:
        "Un organizador de cables mantiene cargador, adaptadores, auriculares, tarjetas y cables cortos en un mismo estuche. Es util para viajar, estudiar o trabajar fuera de casa; revisa en Amazon medidas, bolsillos, cremallera, material y espacio para cargadores voluminosos."
    },
    uk: {
      title: "Travel cable organizer",
      description:
        "A travel cable organizer keeps chargers, adapters, earbuds, memory cards and short cables together instead of loose in a backpack. It suits travel, study and mobile work; check internal dimensions, elastic pockets, closure quality, material and room for bulkier plugs on Amazon."
    }
  }),
  product("packing-cubes", "Travel", "BAG", "packing cubes suitcase organizer", {
    it: {
      title: "Organizer per valigia",
      description:
        "I packing cubes separano vestiti, intimo e capi usati, rendendo piu semplice trovare cio che serve senza svuotare la valigia. Sono utili per weekend, viaggi di lavoro e famiglie; su Amazon verifica misure, numero di pezzi, zip, tessuto traspirante e compatibilita con il bagaglio."
    },
    de: {
      title: "Packwuerfel fuer Koffer",
      description:
        "Packwuerfel trennen Kleidung, Waesche und getragene Teile, sodass der Koffer auf Reisen uebersichtlicher bleibt. Sie eignen sich fuer Wochenenden, Geschaeftsreisen und Familien; pruefe bei Amazon Groessen, Setumfang, Reissverschluesse, Netzbereiche und Passform fuer dein Gepaeck."
    },
    fr: {
      title: "Pochettes de rangement pour valise",
      description:
        "Les packing cubes separent vetements, linge et pieces utilisees pour retrouver rapidement ce dont vous avez besoin. Ils conviennent aux week-ends, voyages professionnels et familles; verifiez sur Amazon les tailles, le nombre de pochettes, les fermetures et le tissu."
    },
    es: {
      title: "Organizadores para maleta",
      description:
        "Los packing cubes separan ropa, ropa interior y prendas usadas para que la maleta sea mas facil de manejar. Sirven para escapadas, viajes de trabajo y familias; comprueba en Amazon medidas, cantidad de piezas, cremalleras, tejido transpirable y ajuste a tu equipaje."
    },
    uk: {
      title: "Suitcase packing cubes",
      description:
        "Packing cubes separate clothing, underwear and used items so a suitcase stays easier to search and repack. They suit weekends, work trips and family travel; check cube sizes, set contents, zips, breathable panels and compatibility with your luggage on Amazon."
    }
  }),
  product("desk-lamp", "Home Office", "LED", "dimmable led desk lamp", {
    it: {
      title: "Lampada LED da scrivania",
      description:
        "Una lampada LED da scrivania illumina tastiera, quaderni e documenti senza dipendere solo dalla luce della stanza. E indicata per home office, studio e lettura serale; su Amazon controlla regolazione, temperatura colore, ingombro, alimentazione e possibilita di orientare il braccio."
    },
    de: {
      title: "LED-Schreibtischlampe",
      description:
        "Eine LED-Schreibtischlampe beleuchtet Tastatur, Notizen und Dokumente gezielt, wenn Raumlicht nicht ausreicht. Sie passt zu Homeoffice, Lernen und Lesen; pruefe bei Amazon Helligkeitsstufen, Farbtemperatur, Standflaeche, Stromversorgung und Verstellbarkeit des Arms."
    },
    fr: {
      title: "Lampe de bureau LED",
      description:
        "Une lampe de bureau LED eclaire clavier, cahiers et documents sans dependre uniquement du plafonnier. Elle convient au teletravail, aux etudes et a la lecture; verifiez sur Amazon les niveaux de luminosite, la temperature de couleur, la base et l'orientation."
    },
    es: {
      title: "Lampara LED de escritorio",
      description:
        "Una lampara LED de escritorio mejora la luz sobre teclado, apuntes y documentos cuando la iluminacion de la habitacion no basta. Es adecuada para teletrabajo, estudio y lectura; revisa en Amazon intensidad, temperatura de color, base, alimentacion y brazo ajustable."
    },
    uk: {
      title: "LED desk lamp",
      description:
        "An LED desk lamp lights notebooks, keyboards and documents when room lighting is not enough for focused work. It suits home offices, study desks and evening reading; check brightness levels, colour temperature, footprint, power method and arm adjustment on Amazon."
    }
  }),
  product("tracker", "Tech", "TAG", "bluetooth tracker keys luggage", {
    it: {
      title: "Tracker Bluetooth",
      description:
        "Un tracker Bluetooth aiuta a ritrovare chiavi, zaino, valigia o portafoglio tramite l'app compatibile del telefono. E utile per pendolari e viaggiatori; su Amazon verifica ecosistema supportato, dimensioni, batteria sostituibile o ricaricabile, metodo di fissaggio e funzioni privacy."
    },
    de: {
      title: "Bluetooth-Tracker",
      description:
        "Ein Bluetooth-Tracker hilft, Schluessel, Rucksack, Koffer oder Geldboerse ueber eine passende Smartphone-App wiederzufinden. Er ist fuer Pendler und Reisende sinnvoll; pruefe bei Amazon Plattformkompatibilitaet, Groesse, Batterieart, Befestigung und Datenschutzfunktionen."
    },
    fr: {
      title: "Traceur Bluetooth",
      description:
        "Un traceur Bluetooth aide a localiser cles, sac, valise ou portefeuille avec l'application compatible du telephone. Il convient aux navetteurs et voyageurs; verifiez sur Amazon l'ecosysteme pris en charge, la taille, le type de batterie, la fixation et les fonctions de confidentialite."
    },
    es: {
      title: "Localizador Bluetooth",
      description:
        "Un localizador Bluetooth ayuda a encontrar llaves, mochila, maleta o cartera mediante la app compatible del movil. Es util para viajes y desplazamientos diarios; comprueba en Amazon ecosistema compatible, tamano, bateria, forma de sujecion y funciones de privacidad."
    },
    uk: {
      title: "Bluetooth tracker",
      description:
        "A Bluetooth tracker helps locate keys, bags, luggage or wallets through a compatible phone app. It suits commuters, travellers and anyone who misplaces essentials; check phone ecosystem support, size, battery type, attachment method and privacy features on Amazon."
    }
  }),
  product("tripod", "Creator", "TRI", "smartphone tripod bluetooth remote", {
    it: {
      title: "Treppiede smartphone",
      description:
        "Un treppiede per smartphone stabilizza video, foto, videochiamate e riprese verticali senza tenere il telefono in mano. E indicato per creator, lezioni online e contenuti di viaggio; su Amazon controlla altezza, morsetto, rotazione, telecomando Bluetooth e peso supportato."
    },
    de: {
      title: "Smartphone-Stativ",
      description:
        "Ein Smartphone-Stativ stabilisiert Videos, Fotos, Videoanrufe und Hochformat-Aufnahmen, ohne das Telefon in der Hand zu halten. Es passt zu Creators, Online-Unterricht und Reisen; pruefe bei Amazon Hoehe, Klemme, Drehung, Bluetooth-Fernausloeser und Traglast."
    },
    fr: {
      title: "Trepied smartphone",
      description:
        "Un trepied smartphone stabilise videos, photos, appels et prises verticales sans tenir le telephone. Il convient aux createurs, cours en ligne et contenus de voyage; verifiez sur Amazon la hauteur, la pince, la rotation, la telecommande Bluetooth et la charge supportee."
    },
    es: {
      title: "Tripode para smartphone",
      description:
        "Un tripode para smartphone estabiliza videos, fotos, videollamadas y tomas verticales sin sujetar el movil. Es adecuado para creadores, clases online y viajes; revisa en Amazon altura, pinza, rotacion, mando Bluetooth y peso soportado."
    },
    uk: {
      title: "Smartphone tripod",
      description:
        "A smartphone tripod stabilizes photos, videos, calls and vertical clips without holding the phone by hand. It suits creators, online lessons and travel content; check height, phone clamp width, rotation, Bluetooth remote and supported weight on Amazon."
    }
  }),
  product("bottle", "Everyday", "BOT", "insulated stainless steel water bottle", {
    it: {
      title: "Borraccia termica",
      description:
        "Una borraccia termica mantiene bevande a portata di mano durante lavoro, studio, palestra o spostamenti. E utile per chi vuole ridurre bottiglie monouso; su Amazon verifica capacita, tenuta del tappo, larghezza dell'apertura, compatibilita con portabicchieri e istruzioni di pulizia."
    },
    de: {
      title: "Isolierte Trinkflasche",
      description:
        "Eine isolierte Trinkflasche haelt Getraenke bei Arbeit, Studium, Sport oder Pendeln griffbereit. Sie eignet sich fuer alle, die weniger Einwegflaschen nutzen moechten; pruefe bei Amazon Fassungsvermoegen, Deckeldichtung, Oeffnung, Becherhalter-Passform und Reinigungshinweise."
    },
    fr: {
      title: "Gourde isotherme",
      description:
        "Une gourde isotherme garde une boisson accessible au bureau, a l'universite, au sport ou dans les transports. Elle convient a ceux qui veulent limiter les bouteilles jetables; verifiez sur Amazon la capacite, le bouchon, l'ouverture, le format et l'entretien."
    },
    es: {
      title: "Botella termica",
      description:
        "Una botella termica mantiene la bebida a mano durante trabajo, estudio, gimnasio o desplazamientos. Es util para reducir botellas desechables; comprueba en Amazon capacidad, cierre de la tapa, ancho de boca, compatibilidad con portavasos e instrucciones de limpieza."
    },
    uk: {
      title: "Insulated water bottle",
      description:
        "An insulated bottle keeps drinks within reach during work, study, commuting or exercise. It suits people who want a reusable daily bottle; check capacity, lid seal, mouth width, cup-holder fit, cleaning guidance and replacement seal availability on Amazon."
    }
  }),
  product("laptop-stand", "Home Office", "LAP", "adjustable laptop stand", {
    it: {
      title: "Supporto laptop",
      description:
        "Un supporto laptop solleva lo schermo e libera spazio sulla scrivania, soprattutto con tastiera e mouse esterni. E indicato per home office, studio e postazioni ibride; su Amazon verifica dimensioni compatibili, stabilita, regolazione, ventilazione, grip e peso massimo supportato."
    },
    de: {
      title: "Laptopstaender",
      description:
        "Ein Laptopstaender hebt den Bildschirm an und schafft Platz auf dem Schreibtisch, besonders mit externer Tastatur und Maus. Er passt zu Homeoffice und Lernen; pruefe bei Amazon Laptopgroessen, Stabilitaet, Verstellung, Belueftung, Rutschschutz und maximale Traglast."
    },
    fr: {
      title: "Support pour ordinateur portable",
      description:
        "Un support pour ordinateur portable sureleve l'ecran et libere de l'espace, surtout avec clavier et souris externes. Il convient au teletravail et aux etudes; verifiez sur Amazon les tailles compatibles, la stabilite, le reglage, la ventilation, les patins et la charge."
    },
    es: {
      title: "Soporte para portatil",
      description:
        "Un soporte para portatil eleva la pantalla y libera espacio en el escritorio, especialmente con teclado y raton externos. Es adecuado para teletrabajo y estudio; revisa en Amazon tamanos compatibles, estabilidad, ajuste, ventilacion, agarre y peso maximo."
    },
    uk: {
      title: "Laptop stand",
      description:
        "A laptop stand raises the screen and frees desk space, especially when paired with an external keyboard and mouse. It suits home offices, study desks and hybrid setups; check compatible laptop sizes, stability, adjustability, ventilation, grips and maximum load on Amazon."
    }
  }),
  product("gan-charger", "Tech", "GAN", "usb c gan charger 65w", {
    it: {
      title: "Caricatore USB-C GaN",
      description:
        "Un caricatore GaN USB-C puo alimentare telefono, tablet e alcuni laptop con un corpo piu compatto rispetto a molti alimentatori tradizionali. E utile per scrivania e viaggio; su Amazon verifica watt totali, potenza per porta, standard Power Delivery, spina e cavi inclusi."
    },
    de: {
      title: "USB-C-GaN-Ladegeraet",
      description:
        "Ein USB-C-GaN-Ladegeraet kann Smartphone, Tablet und manche Laptops mit einem kompakten Gehaeuse versorgen. Es eignet sich fuer Schreibtisch und Reise; pruefe bei Amazon Gesamtleistung, Leistung pro Port, Power-Delivery-Standard, Stecker und enthaltene Kabel."
    },
    fr: {
      title: "Chargeur USB-C GaN",
      description:
        "Un chargeur USB-C GaN peut alimenter telephone, tablette et certains ordinateurs portables dans un format compact. Il sert au bureau comme en voyage; verifiez sur Amazon la puissance totale, la puissance par port, Power Delivery, la prise et les cables inclus."
    },
    es: {
      title: "Cargador USB-C GaN",
      description:
        "Un cargador USB-C GaN puede alimentar movil, tablet y algunos portatiles con un formato compacto. Es util para escritorio y viajes; comprueba en Amazon potencia total, potencia por puerto, Power Delivery, tipo de enchufe y cables incluidos."
    },
    uk: {
      title: "USB-C GaN charger",
      description:
        "A USB-C GaN charger can power a phone, tablet and some laptops from a compact body. It suits desks and travel bags; check total wattage, per-port output, Power Delivery support, plug type, safety information and included cables on Amazon."
    }
  }),
  product("toiletry-bag", "Travel", "KIT", "hanging toiletry bag travel", {
    it: {
      title: "Beauty case da viaggio",
      description:
        "Un beauty case da viaggio tiene separati spazzolino, flaconi, rasoi e prodotti piccoli, riducendo il rischio di perdite nella valigia. E utile per hotel, palestra e weekend; su Amazon controlla gancio, rivestimento lavabile, scomparti, dimensioni e chiusura."
    },
    de: {
      title: "Kulturbeutel fuer Reisen",
      description:
        "Ein Reise-Kulturbeutel trennt Zahnbuerste, Flaschen, Rasierer und kleine Pflegeprodukte, damit der Koffer sauberer bleibt. Er passt zu Hotel, Sport und Wochenenden; pruefe bei Amazon Haken, abwischbares Futter, Faecher, Groesse und Verschluss."
    },
    fr: {
      title: "Trousse de toilette de voyage",
      description:
        "Une trousse de toilette de voyage separe brosse a dents, flacons, rasoirs et petits soins pour limiter les fuites dans le bagage. Elle convient aux hotels, au sport et aux week-ends; verifiez sur Amazon le crochet, la doublure lavable, les compartiments et la taille."
    },
    es: {
      title: "Neceser de viaje",
      description:
        "Un neceser de viaje separa cepillo, botes, maquinillas y pequenos productos para evitar derrames en la maleta. Sirve para hotel, gimnasio y escapadas; revisa en Amazon gancho, forro lavable, compartimentos, medidas y cierre."
    },
    uk: {
      title: "Travel toiletry bag",
      description:
        "A travel toiletry bag separates toothbrushes, bottles, razors and small grooming items so luggage stays cleaner. It suits hotels, gym bags and weekend trips; check hanging hook, wipe-clean lining, compartments, dimensions and closure quality on Amazon."
    }
  }),
  product("travel-adapter", "Travel", "PLUG", "universal travel adapter usb c", {
    it: {
      title: "Adattatore universale da viaggio",
      description:
        "Un adattatore universale permette di collegare caricabatterie compatibili in paesi con prese diverse. E pensato per viaggi internazionali, non per sostituire trasformatori di tensione; su Amazon verifica paesi supportati, porte USB-C, limiti di potenza, fusibili e avvertenze."
    },
    de: {
      title: "Universeller Reiseadapter",
      description:
        "Ein universeller Reiseadapter verbindet kompatible Ladegeraete mit Steckdosen in Laendern mit anderen Steckertypen. Er ist fuer internationale Reisen gedacht; pruefe bei Amazon unterstuetzte Laender, USB-C-Ports, Leistungsgrenzen, Sicherungen und Hinweise zur Spannung."
    },
    fr: {
      title: "Adaptateur universel de voyage",
      description:
        "Un adaptateur universel permet de brancher des chargeurs compatibles dans des pays aux prises differentes. Il sert aux voyages internationaux et ne remplace pas toujours un convertisseur; verifiez sur Amazon les pays, ports USB-C, limites de puissance et fusibles."
    },
    es: {
      title: "Adaptador universal de viaje",
      description:
        "Un adaptador universal permite conectar cargadores compatibles en paises con enchufes diferentes. Esta pensado para viajes internacionales, no siempre como convertidor de voltaje; comprueba en Amazon paises compatibles, USB-C, limites de potencia, fusibles y advertencias."
    },
    uk: {
      title: "Universal travel adapter",
      description:
        "A universal travel adapter lets compatible chargers connect to different plug types when travelling internationally. It is not always a voltage converter; check supported countries, USB-C ports, power limits, fuse design, safety notes and device compatibility on Amazon."
    }
  }),
  product("wireless-charger", "Tech", "QI", "wireless charging stand phone", {
    it: {
      title: "Supporto ricarica wireless",
      description:
        "Un supporto di ricarica wireless mantiene il telefono visibile su scrivania o comodino mentre si ricarica senza collegare ogni volta il cavo. E utile per telefoni compatibili; su Amazon verifica standard supportato, alimentatore richiesto, spessore custodia, angolo e stabilita."
    },
    de: {
      title: "Kabelloser Ladestaender",
      description:
        "Ein kabelloser Ladestaender haelt das Smartphone sichtbar auf Schreibtisch oder Nachttisch, waehrend es ohne Kabelanschluss laedt. Er eignet sich fuer kompatible Telefone; pruefe bei Amazon Ladestandard, benoetigtes Netzteil, Huellendicke, Winkel und Stabilitaet."
    },
    fr: {
      title: "Support de recharge sans fil",
      description:
        "Un support de recharge sans fil garde le telephone visible sur bureau ou table de nuit pendant la charge. Il convient aux telephones compatibles; verifiez sur Amazon la norme prise en charge, l'adaptateur requis, l'epaisseur de coque, l'angle et la stabilite."
    },
    es: {
      title: "Soporte de carga inalambrica",
      description:
        "Un soporte de carga inalambrica mantiene el movil visible en escritorio o mesita mientras se carga sin conectar el cable cada vez. Es util para moviles compatibles; revisa en Amazon estandar soportado, adaptador necesario, grosor de funda, angulo y estabilidad."
    },
    uk: {
      title: "Wireless charging stand",
      description:
        "A wireless charging stand keeps a compatible phone visible on a desk or bedside table while it charges without plugging in each time. Check supported charging standard, required power adapter, case thickness limits, viewing angle and stand stability on Amazon."
    }
  })
];
