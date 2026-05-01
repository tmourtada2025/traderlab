// All course content lives here. Edit copy in this file only.
// Add new courses by appending to the COURSES array.

export type CourseLevel = "basic" | "intermediate" | "advanced" | "psychology";

export type Course = {
  slug: string;
  title: string;
  level: CourseLevel;
  levelLabel: string; // "01 / Foundation" — appears as kicker
  tagline: string;
  description: string;
  curriculum: string[];
  duration: string; // e.g., "2 weeks · 6 sessions · 12 hours"
  durationShort: string; // e.g., "2 weeks"
  priceUsd: number;
  priceNote?: string; // optional note shown below price
  prerequisites: string;
};

export const COURSES: Course[] = [
  {
    slug: "basic-forex-fundamentals",
    title: "Basic Forex Fundamentals",
    level: "basic",
    levelLabel: "01 / Foundation",
    tagline: "Build a real foundation before you risk a single dollar.",
    description:
      "A two-week immersion designed for complete beginners. You will learn how the forex market actually works — the mechanics, the language, the instruments — and finish the course able to read a chart, place an order, and evaluate a broker with confidence. Twelve hours of live, in-class instruction with hands-on MT4/MT5 demonstrations.",
    curriculum: [
      "Market mechanics: bid/ask spreads, pips, pip value, lots, leverage, margin",
      "Order types: market, limit, stop, stop-loss, take-profit",
      "Technical vs. fundamental analysis — when to use each",
      "Currency drivers: GDP, interest rates, CPI, PPI, central bank policy",
      "Asset class overview: forex pairs, CFDs, commodities, crypto, indices",
      "How to evaluate and select a broker",
      "Structural advantages of trading forex",
      "Live MT4/MT5 platform walkthroughs",
    ],
    duration: "2 weeks · 6 sessions · 12 hours",
    durationShort: "2 weeks",
    priceUsd: 350,
    priceNote:
      "$100 of your enrollment fee is allocated to your live trading account upon completion.",
    prerequisites: "None — designed for absolute beginners.",
  },
  {
    slug: "intermediate-technical-analysis",
    title: "Intermediate Technical Analysis",
    level: "intermediate",
    levelLabel: "02 / Analysis",
    tagline: "Read price action like a professional.",
    description:
      "A two-week course for traders who already understand the basics and want to identify high-probability trading opportunities. You will learn to map market structure, interpret candlestick behavior, and confirm setups with momentum tools — building the analytical core every serious trader needs.",
    curriculum: [
      "Market structure: uptrends, downtrends, consolidation phases",
      "Trend lines, moving averages, Bollinger Bands, pivot points",
      "Multi-timeframe confluence and how to apply it",
      "Japanese candlestick patterns and classic chart formations",
      "Momentum and trend indicators: MACD, RSI, Stochastic oscillator",
      "Combining structure with quantitative confirmation",
    ],
    duration: "2 weeks · 6 sessions · 12 hours",
    durationShort: "2 weeks",
    priceUsd: 250,
    prerequisites: "Basic Forex Fundamentals or equivalent foundational knowledge.",
  },
  {
    slug: "advanced-technical-analysis",
    title: "Advanced Technical Analysis & Strategy Building",
    level: "advanced",
    levelLabel: "03 / Strategy",
    tagline: "From analysis to a system you can actually trade.",
    description:
      "A two-week course for traders ready to move from reading charts to building a complete, repeatable trading system. You will work with sophisticated analytical techniques and finish the course with a documented strategy and a journal framework for measuring its performance.",
    curriculum: [
      "Fibonacci retracements and extensions; premium and discount zones",
      "Introduction to Elliott Wave theory",
      "Volume-based indicators: OBV, Accumulation/Distribution",
      "Average Directional Index (ADX) and custom indicators",
      "Ichimoku Kinko Hyo cloud analysis",
      "Heikin-Ashi candlesticks, fractals, Williams Alligator",
      "Workshop: building and stress-testing a complete trading strategy",
      "Trading journal framework and performance review",
    ],
    duration: "2 weeks · 6 sessions · 12 hours",
    durationShort: "2 weeks",
    priceUsd: 250,
    prerequisites: "Intermediate Technical Analysis or equivalent.",
  },
  {
    slug: "trader-psychology",
    title: "Trader Psychology",
    level: "psychology",
    levelLabel: "04 / Mind",
    tagline: "The edge is rarely in the chart. It is in the operator.",
    description:
      "An intensive one-week course addressing the psychological barriers that prevent consistent profitability. You will examine the behaviors that produce losing trades — fear, greed, revenge trading, FOMO — and learn frameworks for building the discipline serious trading requires.",
    curriculum: [
      "The psychology of losing: greed, fear, revenge trading, FOMO",
      "Recognizing emotional triggers and nervous system responses",
      "Position sizing anxiety and breakeven syndrome",
      "Frameworks for building psychological resilience",
      "Discipline systems and pre-trade routines",
      "Long-term mindset for compounding performance",
    ],
    duration: "1 week · 3 sessions · 6 hours",
    durationShort: "1 week",
    priceUsd: 150,
    prerequisites: "Open to all levels — recommended after at least one technical course.",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}
