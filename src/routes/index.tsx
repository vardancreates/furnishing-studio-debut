import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CursorLayer } from "@/components/site/CursorLayer";
import { useReveal } from "@/components/site/useReveal";
import {
  CurtainDoodle,
  WallpaperDoodle,
  SofaDoodle,
  MattressDoodle,
} from "@/components/site/doodles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "The Furnishing Store (Singla's) — Curtains & Furniture, Jalandhar",
      },
      {
        name: "description",
        content:
          "Curtains, wallpaper, sofas and mattresses on Nakodar Road, Jalandhar. Fabric picked in person, stitched and fitted by our own team.",
      },
      {
        property: "og:title",
        content: "The Furnishing Store (Singla's) — Jalandhar",
      },
      {
        property: "og:description",
        content:
          "A furnishing house in Jalandhar for curtains, wallpaper, furniture and mattresses. Measured, stitched and fitted at your home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const HERO_WORDS = ["Rooms", "that", "hold", "a", "family's", "day."];

const PANELS = [
  {
    n: "01",
    title: "Curtains & drapes",
    body: "Sheers, blackouts and heavy drapes stitched to your window's exact drop — measured at your home, fitted by our own men.",
    bg: "bg-brick",
    fg: "text-ivory",
    Art: CurtainDoodle,
  },
  {
    n: "02",
    title: "Wallpaper",
    body: "Imported and Indian rolls, from quiet textures to bold florals. We match the pattern repeat so the seams disappear.",
    bg: "bg-ivory",
    fg: "text-ink",
    Art: WallpaperDoodle,
  },
  {
    n: "03",
    title: "Furniture",
    body: "Sofas, recliners and beds in fabric or leatherette. Choose the frame, then choose the cloth that goes over it.",
    bg: "bg-sage",
    fg: "text-ink",
    Art: SofaDoodle,
  },
  {
    n: "04",
    title: "Mattresses",
    body: "Spring, foam and orthopaedic, in every standard Indian size. Lie down on it here before you decide.",
    bg: "bg-walnut",
    fg: "text-ivory",
    Art: MattressDoodle,
  },
] as const;

type Swatch = { name: string; tint: string; fg: string; note: string };

const SWATCHES: Swatch[] = [
  { name: "Walnut", tint: "#1E1810", fg: "#F6EFE4", note: "Evening living rooms, heavy drapes." },
  { name: "Ivory", tint: "#F6EFE4", fg: "#211A12", note: "Sheers, north light, small rooms." },
  { name: "Sage", tint: "#8A9A7B", fg: "#211A12", note: "Bedrooms that need to stay calm." },
  { name: "Brass", tint: "#C9A24B", fg: "#211A12", note: "One wall, one cushion, nothing more." },
  { name: "Brick", tint: "#A6503A", fg: "#F6EFE4", note: "Dining rooms and formal seating." },
];

function Marquee({
  items,
  className,
  duration = "20s",
}: {
  items: string[];
  className?: string;
  duration?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`} aria-hidden>
      <div className="marquee-track" style={{ animationDuration: duration }}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {items.map((it, i) => (
              <span key={`${k}-${i}`} className="label-mono flex items-center whitespace-nowrap">
                <span className="px-5 py-1">{it}</span>
                <span className="opacity-50">—</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const [swatch, setSwatch] = useState<Swatch>(SWATCHES[2]!);

  return (
    <main className="grain bg-walnut text-ivory">
      <CursorLayer />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pt-7 sm:px-10">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <p className="min-w-0 truncate font-display text-[clamp(1.25rem,5.5vw,2rem)] font-semibold uppercase tracking-[0.08em] text-ivory sm:tracking-[0.12em]">
            The Furnishing Store · Singla&apos;s
          </p>
          <p className="label-mono shrink-0 text-ivory/50">Jalandhar</p>
        </header>

        <div className="py-16">
          <h1 className="max-w-[16ch] text-[clamp(2.5rem,11vw,6rem)] font-semibold">
            {HERO_WORDS.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <span
                  className={`rise-word ${w === "hold" ? "font-light italic text-brass" : ""}`}
                  style={{ animationDelay: `${120 + i * 80}ms` }}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="rise-word mt-8 max-w-[34ch] text-[clamp(1rem,4vw,1.25rem)] text-ivory/75"
            style={{ animationDelay: `${120 + HERO_WORDS.length * 80}ms` }}
          >
            Curtains, wallpaper, furniture and mattresses — chosen with you on Nakodar Road since
            the shop opened.
          </p>
          <a
            href="tel:+919115104010"
            data-magnetic
            className="magnetic rise-word mt-10 inline-flex min-h-[52px] items-center rounded-full bg-brass px-8 text-ink"
            style={{ animationDelay: `${200 + HERO_WORDS.length * 80}ms` }}
          >
            <span className="label-mono">Call the store</span>
          </a>
        </div>

        <div className="-mx-5 border-y border-ivory/15 py-3 sm:-mx-10">
          <Marquee
            items={["Curtains", "Wallpaper", "Sofas", "Mattresses", "Drapes"]}
            className="text-ivory/60"
            duration="19s"
          />
        </div>
      </section>

      {/* STACKED PANELS */}
      <section className="relative">
        {PANELS.map(({ n, title, body, bg, fg, Art }) => (
          <article
            key={n}
            className={`sticky top-0 flex min-h-[100svh] flex-col justify-between ${bg} ${fg} border-t border-current/15 px-5 py-12 sm:px-10`}
          >
            <span className="label-mono opacity-60">{n}</span>
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <h2 className="max-w-[12ch] text-[clamp(2.25rem,9vw,4.5rem)]">{title}</h2>
                <p className="mt-6 max-w-[42ch] text-[clamp(0.95rem,3.6vw,1.1rem)] opacity-80">
                  {body}
                </p>
              </div>
              <div className="w-[min(58vw,320px)] justify-self-start opacity-70 md:justify-self-end">
                <Art className="h-full w-full" />
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* LEGACY */}
      <section className="relative z-10 bg-walnut px-5 py-24 sm:px-10">
        <div className="reveal grid gap-12 md:grid-cols-2 md:items-stretch">
          <div
            className="min-h-[320px] rounded-2xl"
            style={{
              backgroundImage:
                "radial-gradient(120% 90% at 15% 10%, #A6503A 0%, transparent 55%), radial-gradient(100% 80% at 85% 25%, #C9A24B 0%, transparent 50%), linear-gradient(160deg, #8A9A7B 0%, #1E1810 70%), repeating-linear-gradient(94deg, rgba(246,239,228,0.07) 0 2px, transparent 2px 7px)",
            }}
            aria-hidden
          />
          <div className="flex flex-col justify-center">
            <p className="label-mono text-brass">On Nakodar Road</p>
            <blockquote className="mt-6 text-[clamp(1.6rem,6vw,2.75rem)] font-display font-light italic leading-tight">
              &ldquo;We don&apos;t sell curtains off a shelf. We measure the window, then we make the curtain.&rdquo;
            </blockquote>
            <p className="mt-8 max-w-[46ch] text-ivory/70">
              Every order starts with a visit — we measure the window, match the fabric to the room&apos;s
              light, and stitch it ourselves. Wallpaper gets matched pattern-to-pattern before it goes
              up. Nothing here comes ready-made.
            </p>
          </div>
        </div>
      </section>

      {/* SWATCHES */}
      <section
        className="relative z-10 px-5 py-24 transition-colors duration-700 sm:px-10"
        style={{ backgroundColor: swatch.tint, color: swatch.fg }}
      >
        <div className="reveal">
          <p className="label-mono opacity-60">Pick a mood</p>
          <h2 className="mt-5 max-w-[16ch] text-[clamp(2rem,7.5vw,3.5rem)]">
            Choose the shade, the room follows.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            {SWATCHES.map((s) => (
              <button
                key={s.name}
                onClick={() => setSwatch(s)}
                aria-pressed={swatch.name === s.name}
                data-magnetic
                className="magnetic flex min-h-[56px] items-center gap-3 rounded-full border border-current/30 px-5"
              >
                <span
                  className="h-7 w-7 shrink-0 rounded-full border border-current/25"
                  style={{ backgroundColor: s.tint }}
                />
                <span className="label-mono">{s.name}</span>
              </button>
            ))}
          </div>
          <p className="mt-8 max-w-[38ch] text-[clamp(1rem,4vw,1.15rem)] opacity-80">
            {swatch.note}
          </p>
        </div>
      </section>

      {/* RATING STRIP */}
      <div className="relative z-10 border-y border-ink/15 bg-ivory py-3 text-ink">
        <Marquee
          items={[
            "4.8 rating",
            "310+ reviews",
            "Nakodar Road, Jalandhar",
            "Home measurement",
            "Stitching in-house",
          ]}
          duration="22s"
        />
      </div>

      {/* FOOTER CTA */}
<footer className="relative z-10 bg-walnut px-5 py-24 sm:px-10">
  <div className="reveal">
    <h2 className="max-w-[14ch] text-[clamp(2.5rem,10vw,5.5rem)]">
      Let&apos;s finish <span className="font-light italic text-brass">the room.</span>
    </h2>
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="tel:+919115104010"
        data-magnetic
        className="magnetic inline-flex min-h-[60px] items-center rounded-full bg-brass px-10 text-ink"
      >
        <span className="label-mono">Call the store</span>
      </a>
      <a
        href="https://wa.me/919115104010"
        target="_blank"
        rel="noopener noreferrer"
        data-magnetic
        className="magnetic inline-flex min-h-[60px] items-center rounded-full border border-ivory/30 px-10 text-ivory"
      >
        <span className="label-mono">WhatsApp us</span>
      </a>
      <a
        href="https://maps.app.goo.gl/ZmfZxkmATmhA3w8q7"
        target="_blank"
        rel="noopener noreferrer"
        data-magnetic
        className="magnetic inline-flex min-h-[60px] items-center rounded-full border border-ivory/30 px-10 text-ivory"
      >
        <span className="label-mono">Get directions</span>
      </a>
      <a
        href="https://instagram.com/singlas.furnishing"
        target="_blank"
        rel="noopener noreferrer"
        data-magnetic
        className="magnetic inline-flex min-h-[60px] items-center rounded-full border border-ivory/30 px-10 text-ivory"
      >
        <span className="label-mono">Instagram</span>
      </a>
    </div>

    <address className="mt-14 grid gap-8 not-italic sm:grid-cols-2">
      <div>
        <p className="label-mono text-ivory/50">Address</p>
        <p className="mt-3 max-w-[28ch] text-ivory/85">
          Nakodar Road, opp. Nari Niketan, Jalandhar, Punjab 144001
        </p>
      </div>
      <div>
        <p className="label-mono text-ivory/50">Phone</p>
        <a
          href="tel:+919115104010"
          className="mt-3 inline-flex min-h-[44px] items-center text-ivory/85 underline decoration-brass/60 underline-offset-4"
        >
          +91 91151 04010
        </a>
      </div>
    </address>

    <p className="label-mono mt-16 text-ivory/35">
      The Furnishing Store (Singla&apos;s) · Jalandhar, Punjab
    </p>
  </div>
</footer>
    </main>
  );
}
