import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Small Axe Pub Arenzano" },
      { name: "description", content: "Birre artigianali alla spina, cocktail d'autore, taglieri e finger food al Small Axe di Arenzano." },
      { property: "og:title", content: "Menu — Small Axe Pub" },
      { property: "og:description", content: "Birre, cocktail e cucina del pub Small Axe ad Arenzano." },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Birre alla spina",
    items: [
      { name: "Baladin Nazionale", desc: "Blonde ale italiana, 6.5%", price: "6€" },
      { name: "Brewfist Spaceman", desc: "American IPA, 7%", price: "7€" },
      { name: "Birrificio Italiano Tipopils", desc: "Pilsner, 5.2%", price: "6€" },
      { name: "Westmalle Tripel", desc: "Trappista belga, 9.5%", price: "8€" },
      { name: "Guinness Draught", desc: "Stout irlandese, 4.2%", price: "6€" },
      { name: "Toccalmatto Zona Cesarini", desc: "IPA agrumata, 6.6%", price: "7€" },
    ],
  },
  {
    title: "Cocktail d'autore",
    items: [
      { name: "Negroni Sbagliato", desc: "Bitter, vermouth rosso, prosecco", price: "8€" },
      { name: "Old Fashioned", desc: "Bourbon, zucchero, angostura, scorza d'arancia", price: "10€" },
      { name: "Penicillin", desc: "Whisky scozzese, miele, zenzero, limone", price: "11€" },
      { name: "Gin Tonic Mediterraneo", desc: "Gin botanico, tonica, rosmarino, oliva", price: "9€" },
      { name: "Espresso Martini", desc: "Vodka, caffè espresso, kahlùa", price: "9€" },
    ],
  },
  {
    title: "Dalla cucina",
    items: [
      { name: "Tagliere Small Axe", desc: "Salumi liguri, formaggi, focaccia di Recco", price: "16€" },
      { name: "Hamburger della casa", desc: "Manzo piemontese 200g, cheddar, bacon, patate", price: "14€" },
      { name: "Nachos & guacamole", desc: "Tortillas, salsa, jalapeños, sour cream", price: "9€" },
      { name: "Fish & chips", desc: "Merluzzo in pastella di birra, patate, salsa tartara", price: "13€" },
      { name: "Focaccia con stracchino", desc: "Specialità della riviera", price: "7€" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center mb-16">
        <span className="font-display tracking-[0.3em] text-primary text-sm">LA CARTA</span>
        <h1 className="mt-3 font-display text-6xl md:text-7xl text-foreground">Menu</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Selezione che cambia ogni stagione. Chiedi al bancone le novità del giorno.
        </p>
      </div>

      <div className="space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-serif italic text-3xl text-primary mb-8 border-b border-border pb-4">
              {section.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item) => (
                <div key={item.name} className="flex justify-between gap-4 group">
                  <div className="flex-1">
                    <div className="font-display tracking-wider text-foreground text-lg group-hover:text-primary transition">
                      {item.name}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                  </div>
                  <div className="font-display text-primary text-lg whitespace-nowrap">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
