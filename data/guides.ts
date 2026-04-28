export type Guide = { slug: string; category: string; title: string; excerpt: string; date: string; readTime: string; sections: { heading: string; body: string }[] };

const commonSections = [
  { heading: "Start from real needs", body: "The best products are the ones that solve repeated practical problems. Before buying anything, it helps to understand where the item will be used and whether it will be useful more than once." },
  { heading: "Keep the setup simple", body: "A practical setup should not become complicated. Small, reusable and easy-to-carry items are usually better than accessories that look impressive but are rarely used." },
  { heading: "Check details directly", body: "Prices, delivery options, availability and compatibility can change frequently. Product details should always be verified directly on Amazon before making a final purchase." },
  { heading: "Avoid overbuying", body: "A useful buying rule is to choose products that work in more than one context, such as travel, study, work, home organisation or daily routines." }
];

export const guides: Guide[] = [
  { slug: "travel-essentials", category: "Travel", title: "Travel essentials: what to pack before a short trip", excerpt: "A practical guide to small accessories that can make short trips easier, cleaner and more organised.", date: "2026-04-27", readTime: "5 min read", sections: commonSections },
  { slug: "home-office-setup", category: "Home Office", title: "Home office setup: simple upgrades that improve a desk", excerpt: "A clean desk does not need expensive gear. A few practical accessories can improve comfort and focus.", date: "2026-04-27", readTime: "6 min read", sections: commonSections },
  { slug: "usb-c-accessories", category: "Tech", title: "USB-C accessories: what is actually useful", excerpt: "USB-C accessories are everywhere, but only a few categories are useful for most people.", date: "2026-04-27", readTime: "5 min read", sections: commonSections },
  { slug: "creator-setup", category: "Creator", title: "Creator setup: small accessories for better photos and videos", excerpt: "A basic creator setup can start with a tripod, better light and a more organised charging routine.", date: "2026-04-27", readTime: "5 min read", sections: commonSections },
  { slug: "smart-travel", category: "Travel", title: "Smart travel: how to reduce small problems during a trip", excerpt: "The best travel accessories are the ones that prevent common problems before they happen.", date: "2026-04-27", readTime: "5 min read", sections: commonSections },
  { slug: "everyday-carry", category: "Everyday", title: "Everyday carry: useful items for daily routines", excerpt: "A practical everyday carry setup focuses on small items that solve real daily problems.", date: "2026-04-27", readTime: "4 min read", sections: commonSections },
  { slug: "desk-organization", category: "Home Office", title: "Desk organisation: how to make a workspace easier to use", excerpt: "A better desk is often the result of removing friction, not buying more equipment.", date: "2026-04-27", readTime: "5 min read", sections: commonSections },
  { slug: "student-tech", category: "Tech", title: "Student tech: practical accessories for study days", excerpt: "Students often need portable, affordable and useful tech accessories more than expensive devices.", date: "2026-04-27", readTime: "5 min read", sections: commonSections },
  { slug: "power-and-charging", category: "Tech", title: "Power and charging: how to choose a simple charging setup", excerpt: "A good charging setup should be compact, compatible and easy to carry.", date: "2026-04-27", readTime: "6 min read", sections: commonSections },
  { slug: "budget-useful-products", category: "Everyday", title: "Budget useful products: how to choose practical items without overbuying", excerpt: "Not every useful product needs to be expensive. The key is choosing items that solve frequent problems.", date: "2026-04-27", readTime: "5 min read", sections: commonSections }
];

export function getGuideBySlug(slug: string) { return guides.find((guide) => guide.slug === slug); }
