import { UsersIcon } from "@/components/icons";

const outerDots = [
  { top: "8%", left: "48%", size: 42, color: "rgba(192,132,252,0.92)" },
  { top: "24%", right: "8%", size: 36, color: "rgba(244,114,182,0.92)" },
  { bottom: "18%", right: "12%", size: 36, color: "rgba(129,140,248,0.92)" },
  { bottom: "8%", left: "44%", size: 34, color: "rgba(167,139,250,0.92)" },
  { top: "26%", left: "10%", size: 34, color: "rgba(74,222,128,0.92)" }
];

const innerDots = [
  { top: "18%", left: "46%", size: 30, color: "rgba(255,255,255,0.9)" },
  { top: "48%", right: "8%", size: 28, color: "rgba(192,132,252,0.9)" },
  { bottom: "18%", left: "14%", size: 28, color: "rgba(244,114,182,0.9)" }
];

export function HeroOrbits() {
  return (
    <div className="orbit-grid" aria-hidden="true">
      <div className="orbit-ring" data-size="lg" />
      <div className="orbit-ring" data-size="sm" />
      <div
        className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "rgba(110,60,200,0.35)",
          filter: "blur(32px)"
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30"
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 40px rgba(110,60,200,0.6)"
        }}
      >
        <UsersIcon className="text-white" size={34} />
      </div>
      {outerDots.map((dot, index) => (
        <div
          key={`outer-${index}`}
          className="orbit-dot"
          style={{
            width: dot.size,
            height: dot.size,
            background: dot.color,
            ...dot
          }}
        >
          <UsersIcon size={12} strokeWidth={2.1} />
        </div>
      ))}
      {innerDots.map((dot, index) => (
        <div
          key={`inner-${index}`}
          className="orbit-dot"
          style={{
            ...dot,
            width: dot.size,
            height: dot.size,
            background: dot.color,
            color: dot.color === "rgba(255,255,255,0.9)" ? "#6E3CC8" : "#fff"
          }}
        >
          <UsersIcon size={11} strokeWidth={2.1} />
        </div>
      ))}
    </div>
  );
}
