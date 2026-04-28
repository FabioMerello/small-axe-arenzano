import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md shadow-2xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo tuo consenso, cookie analitici per migliorare l'esperienza.
          Consulta la <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link> e la <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={() => decide("rejected")}>Rifiuta</Button>
          <Button size="sm" onClick={() => decide("accepted")}>Accetta</Button>
        </div>
      </div>
    </div>
  );
}
