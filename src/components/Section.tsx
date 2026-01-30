interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "mint-cream" | "mint-light" | "mint" | "white" | "sage" | "forest" | "cream";
  padding?: "none" | "sm" | "md" | "lg";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "mint-cream",
  padding = "lg",
  id,
}: SectionProps) {
  // Original earth-tone palette backgrounds
  const backgrounds: Record<string, string> = {
    "mint-cream": "bg-mint-cream text-charcoal",      /* Warm cream background */
    "mint-light": "bg-mint-light text-charcoal",      /* Light sage sections */
    "mint": "bg-mint text-charcoal",                  /* Card backgrounds */
    "white": "bg-cream text-charcoal",                /* Pure white/cream */
    "cream": "bg-cream text-charcoal",                /* Same as white */
    "sage": "bg-sage text-cream",                     /* Sage green sections */
    "forest": "bg-forest text-cream",                 /* Dark green sections */
  };

  const paddings = {
    none: "",
    sm: "py-8 md:py-12 lg:py-16",
    md: "py-12 md:py-16 lg:py-20",
    lg: "py-16 md:py-20 lg:py-28",
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
