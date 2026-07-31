import { BadgeCheck } from "lucide-react";
import { trustBadges } from "@/lib/data";

/** Infinite marquee of trust signals, shown directly under the hero. */
export default function TrustBadges() {
  const items = [...trustBadges, ...trustBadges];

  return (
    <div className="overflow-hidden border-y border-charcoal-100 bg-white py-5">
      <div className="flex w-max animate-marquee gap-10 will-change-transform hover:[animation-play-state:paused]">
        {items.map((badge, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-charcoal-500"
            aria-hidden={i >= trustBadges.length}
          >
            <BadgeCheck className="h-4 w-4 text-accent-600" aria-hidden />
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
