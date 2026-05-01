// Hero illustration. Stylized market structure with candlesticks + trend.
// Pure SVG, no external deps. Colors via Tailwind/CSS variables.

export default function HeroChart({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D9E75" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D9E75" stopOpacity="0" />
          <stop offset="20%" stopColor="#1D9E75" stopOpacity="1" />
          <stop offset="100%" stopColor="#1D9E75" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Grid */}
      <g stroke="#1F2940" strokeWidth="0.5" opacity="0.6">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`h${i}`} x1="0" y1={80 + i * 70} x2="800" y2={80 + i * 70} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={`v${i}`} x1={i * 100} y1="60" x2={i * 100} y2="440" />
        ))}
      </g>

      {/* Glow under price action */}
      <path
        d="M 0 440 L 60 380 L 130 360 L 200 320 L 280 340 L 360 280 L 440 220 L 520 240 L 600 180 L 680 140 L 760 160 L 800 120 L 800 440 Z"
        fill="url(#glow)"
      />

      {/* Trend line through structure */}
      <path
        d="M 60 380 L 130 360 L 200 320 L 280 340 L 360 280 L 440 220 L 520 240 L 600 180 L 680 140 L 760 160"
        stroke="url(#lineFade)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Candlesticks (varying heights, mostly bullish for an uptrend feel) */}
      {[
        { x: 60, o: 400, c: 380, h: 370, l: 410 },
        { x: 100, o: 380, c: 370, h: 360, l: 390 },
        { x: 140, o: 370, c: 350, h: 340, l: 380 },
        { x: 180, o: 350, c: 340, h: 330, l: 360 },
        { x: 220, o: 340, c: 320, h: 310, l: 350 },
        { x: 260, o: 320, c: 335, h: 310, l: 345 },
        { x: 300, o: 335, c: 325, h: 315, l: 345 },
        { x: 340, o: 325, c: 305, h: 290, l: 335 },
        { x: 380, o: 305, c: 285, h: 275, l: 315 },
        { x: 420, o: 285, c: 270, h: 260, l: 295 },
        { x: 460, o: 270, c: 240, h: 225, l: 280 },
        { x: 500, o: 240, c: 245, h: 225, l: 260 },
        { x: 540, o: 245, c: 230, h: 215, l: 260 },
        { x: 580, o: 230, c: 200, h: 190, l: 245 },
        { x: 620, o: 200, c: 185, h: 175, l: 215 },
        { x: 660, o: 185, c: 165, h: 155, l: 200 },
        { x: 700, o: 165, c: 155, h: 145, l: 180 },
        { x: 740, o: 155, c: 170, h: 145, l: 180 },
      ].map((c, i) => {
        const isBull = c.c < c.o; // SVG: lower y = higher price; bullish if close < open in our top-down system
        const top = Math.min(c.o, c.c);
        const height = Math.abs(c.c - c.o);
        const color = isBull ? "#1D9E75" : "#E5484D";
        return (
          <g key={i}>
            {/* Wick */}
            <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={color} strokeWidth="1.5" />
            {/* Body */}
            <rect
              x={c.x - 5}
              y={top}
              width="10"
              height={Math.max(height, 1)}
              fill={isBull ? color : color}
              opacity={isBull ? 0.95 : 0.85}
            />
          </g>
        );
      })}

      {/* Key level marker */}
      <g>
        <line x1="0" y1="220" x2="800" y2="220" stroke="#1D9E75" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
        <text x="780" y="216" fill="#1D9E75" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="end" opacity="0.7">
          KEY LEVEL
        </text>
      </g>

      {/* Order block highlight */}
      <rect
        x="450"
        y="225"
        width="100"
        height="35"
        fill="#1D9E75"
        opacity="0.12"
        stroke="#1D9E75"
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />
      <text x="500" y="247" fill="#5DD3A8" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle" opacity="0.9">
        OB
      </text>
    </svg>
  );
}
