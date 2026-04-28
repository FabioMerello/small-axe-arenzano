import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl tracking-wider text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sembra che ti sia perso. Torna al bar.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-amber px-6 py-3 font-display tracking-wider text-primary-foreground hover:opacity-90 transition"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Small Axe — Pub & Cocktail Bar ad Arenzano" },
      { name: "description", content: "Small Axe, pub di Arenzano. Birre artigianali, cocktail, musica dal vivo e atmosfera autentica sulla riviera ligure." },
      { name: "author", content: "Small Axe" },
      { property: "og:title", content: "Small Axe — Pub & Cocktail Bar ad Arenzano" },
      { property: "og:description", content: "Small Axe, pub di Arenzano. Birre artigianali, cocktail, musica dal vivo e atmosfera autentica sulla riviera ligure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Small Axe — Pub & Cocktail Bar ad Arenzano" },
      { name: "twitter:description", content: "Small Axe, pub di Arenzano. Birre artigianali, cocktail, musica dal vivo e atmosfera autentica sulla riviera ligure." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/824e5039-e8c8-4c7d-9d65-b83d3cad8dd7/id-preview-310c7b91--9b5c3833-40b1-4764-9169-cfbe32708280.lovable.app-1777364970368.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/824e5039-e8c8-4c7d-9d65-b83d3cad8dd7/id-preview-310c7b91--9b5c3833-40b1-4764-9169-cfbe32708280.lovable.app-1777364970368.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
