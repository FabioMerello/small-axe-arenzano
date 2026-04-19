import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl tracking-widest text-primary">SMALL AXE</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Pub & cocktail bar nel cuore di Arenzano. Birra artigianale, musica dal vivo e atmosfera autentica.
          </p>
        </div>
        <div>
          <h4 className="font-display tracking-wider text-foreground mb-3">Dove siamo</h4>
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 text-primary" />
            Via Bocca 12, 16011 Arenzano (GE)
          </p>
          <p className="text-sm text-muted-foreground mt-2">Mar–Dom · 17:00 – 02:00</p>
          <a href="tel:+393737965678" className="text-sm text-primary hover:underline mt-2 inline-block">373 796 5678</a>
        </div>
        <div>
          <h4 className="font-display tracking-wider text-foreground mb-3">Seguici</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"><Facebook className="h-4 w-4" /></a>
          </div>
          <div className="mt-6 text-xs text-muted-foreground/70 flex gap-4">
            <Link to="/contatti" className="hover:text-primary">Contatti</Link>
            <Link to="/menu" className="hover:text-primary">Menu</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Small Axe Pub · Arenzano
      </div>
    </footer>
  );
}
