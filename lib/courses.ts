// All course content. Every text field is bilingual: { en, ar }.
// To add a new course, append a new object with both languages filled.
// Edit Arabic copy here for fixes; rebuild auto-deploys.

import type { Locale } from "./i18n";

export type CourseLevel = "basic" | "intermediate" | "advanced" | "psychology";

type Bi = { en: string; ar: string };

export type Course = {
  slug: string;
  level: CourseLevel;
  levelLabel: Bi;
  title: Bi;
  tagline: Bi;
  description: Bi;
  curriculum: { en: string[]; ar: string[] };
  duration: Bi;
  durationShort: Bi;
  priceUsd: number;
  priceNote?: Bi;
  prerequisites: Bi;
};

export const COURSES: Course[] = [
  {
    slug: "basic-forex-fundamentals",
    level: "basic",
    levelLabel: { en: "01 / Foundation", ar: "01 / الأساس" },
    title: { en: "Basic Forex Fundamentals", ar: "أساسيات الفوركس" },
    tagline: {
      en: "Build a real foundation before you risk a single dollar.",
      ar: "ابنِ أساساً متيناً قبل أن تخاطر بأي دولار.",
    },
    description: {
      en: "A two-week immersion designed for complete beginners. You will learn how the forex market actually works — the mechanics, the language, the instruments — and finish the course able to read a chart, place an order, and evaluate a broker with confidence. Twelve hours of live, in-class instruction with hands-on MT4/MT5 demonstrations.",
      ar: "دورة مكثّفة لمدة أسبوعين مصمّمة للمبتدئين تماماً. ستتعلّم كيف يعمل سوق الفوركس فعلياً — الميكانيكا، المصطلحات، الأدوات — وستنهي الدورة قادراً على قراءة الرسم البياني، وتنفيذ الأوامر، وتقييم الوسيط بثقة. اثنا عشر ساعة من التعليم الحضوري المباشر مع شروحات تطبيقية على MT4/MT5.",
    },
    curriculum: {
      en: [
        "Market mechanics: bid/ask spreads, pips, pip value, lots, leverage, margin",
        "Order types: market, limit, stop, stop-loss, take-profit",
        "Technical vs. fundamental analysis — when to use each",
        "Currency drivers: GDP, interest rates, CPI, PPI, central bank policy",
        "Asset class overview: forex pairs, CFDs, commodities, crypto, indices",
        "How to evaluate and select a broker",
        "Structural advantages of trading forex",
        "Live MT4/MT5 platform walkthroughs",
      ],
      ar: [
        "ميكانيكا السوق: فروق الأسعار (Bid/Ask)، النقاط (Pips)، قيمة النقطة، اللوتات، الرافعة المالية، الهامش",
        "أنواع الأوامر: السوق، المحدّد، الإيقاف، وقف الخسارة، جني الأرباح",
        "التحليل الفنّي مقابل التحليل الأساسي — متى تستخدم كلاً منهما",
        "محرّكات العملات: الناتج المحلي، أسعار الفائدة، مؤشّر أسعار المستهلك، مؤشّر أسعار المنتج، سياسات البنوك المركزية",
        "نظرة عامة على فئات الأصول: أزواج الفوركس، عقود الفروقات، السلع، العملات الرقمية، المؤشّرات",
        "كيفية تقييم الوسيط واختياره",
        "الميزات البنيوية لتداول الفوركس",
        "شروحات مباشرة على منصّتي MT4 وMT5",
      ],
    },
    duration: { en: "2 weeks · 6 sessions · 12 hours", ar: "أسبوعان · 6 جلسات · 12 ساعة" },
    durationShort: { en: "2 weeks", ar: "أسبوعان" },
    priceUsd: 350,
    priceNote: {
      en: "$100 of your enrollment fee is allocated to your live trading account upon completion.",
      ar: "يُخصَّص 100 دولار من رسوم التسجيل لحسابك التداولي الحقيقي عند إتمام الدورة.",
    },
    prerequisites: { en: "None — designed for absolute beginners.", ar: "لا متطلّبات — مصمّمة للمبتدئين تماماً." },
  },
  {
    slug: "intermediate-technical-analysis",
    level: "intermediate",
    levelLabel: { en: "02 / Analysis", ar: "02 / التحليل" },
    title: { en: "Intermediate Technical Analysis", ar: "التحليل الفنّي المتوسّط" },
    tagline: { en: "Read price action like a professional.", ar: "اقرأ حركة السعر كمحترف." },
    description: {
      en: "A two-week course for traders who already understand the basics and want to identify high-probability trading opportunities. You will learn to map market structure, interpret candlestick behavior, and confirm setups with momentum tools — building the analytical core every serious trader needs.",
      ar: "دورة لمدة أسبوعين للمتداولين الذين يتقنون الأساسيات ويريدون تحديد فرص تداول ذات احتمالية عالية. ستتعلّم رسم بنية السوق، وتفسير سلوك الشموع اليابانية، وتأكيد الإعدادات بأدوات الزخم — لبناء الأساس التحليلي الذي يحتاجه كل متداول جدّي.",
    },
    curriculum: {
      en: [
        "Market structure: uptrends, downtrends, consolidation phases",
        "Trend lines, moving averages, Bollinger Bands, pivot points",
        "Multi-timeframe confluence and how to apply it",
        "Japanese candlestick patterns and classic chart formations",
        "Momentum and trend indicators: MACD, RSI, Stochastic oscillator",
        "Combining structure with quantitative confirmation",
      ],
      ar: [
        "بنية السوق: الاتّجاه الصاعد، الاتّجاه الهابط، مراحل التماسك",
        "خطوط الاتّجاه، المتوسّطات المتحرّكة، نطاقات بولينجر، نقاط البيفوت",
        "تطابق الإطارات الزمنية المتعدّدة وكيفية تطبيقه",
        "أنماط الشموع اليابانية والتشكيلات الكلاسيكية للرسم البياني",
        "مؤشّرات الزخم والاتّجاه: MACD، RSI، مذبذب Stochastic",
        "دمج بنية السوق مع التأكيد الكمّي",
      ],
    },
    duration: { en: "2 weeks · 6 sessions · 12 hours", ar: "أسبوعان · 6 جلسات · 12 ساعة" },
    durationShort: { en: "2 weeks", ar: "أسبوعان" },
    priceUsd: 250,
    prerequisites: {
      en: "Basic Forex Fundamentals or equivalent foundational knowledge.",
      ar: "دورة أساسيات الفوركس أو ما يعادلها من معرفة أساسية.",
    },
  },
  {
    slug: "advanced-technical-analysis",
    level: "advanced",
    levelLabel: { en: "03 / Strategy", ar: "03 / الاستراتيجية" },
    title: {
      en: "Advanced Technical Analysis & Strategy Building",
      ar: "التحليل الفنّي المتقدّم وبناء الاستراتيجية",
    },
    tagline: {
      en: "From analysis to a system you can actually trade.",
      ar: "من التحليل إلى نظام تداول قابل للتطبيق فعلياً.",
    },
    description: {
      en: "A two-week course for traders ready to move from reading charts to building a complete, repeatable trading system. You will work with sophisticated analytical techniques and finish the course with a documented strategy and a journal framework for measuring its performance.",
      ar: "دورة لمدة أسبوعين للمتداولين الجاهزين للانتقال من قراءة الرسوم البيانية إلى بناء نظام تداول كامل وقابل للتكرار. ستعمل بتقنيات تحليلية متطوّرة وتنهي الدورة باستراتيجية موثّقة وإطار يومية لقياس أدائها.",
    },
    curriculum: {
      en: [
        "Fibonacci retracements and extensions; premium and discount zones",
        "Introduction to Elliott Wave theory",
        "Volume-based indicators: OBV, Accumulation/Distribution",
        "Average Directional Index (ADX) and custom indicators",
        "Ichimoku Kinko Hyo cloud analysis",
        "Heikin-Ashi candlesticks, fractals, Williams Alligator",
        "Workshop: building and stress-testing a complete trading strategy",
        "Trading journal framework and performance review",
      ],
      ar: [
        "تصحيحات وامتدادات فيبوناتشي؛ مناطق البريميوم والديسكاونت",
        "مقدّمة في نظرية موجات إليوت",
        "مؤشّرات الحجم: OBV، التراكم/التوزيع",
        "مؤشّر متوسّط الحركة الاتّجاهية (ADX) والمؤشّرات المخصّصة",
        "تحليل سحابة Ichimoku Kinko Hyo",
        "شموع Heikin-Ashi، الـ Fractals، مؤشّر Williams Alligator",
        "ورشة: بناء استراتيجية تداول كاملة واختبار صلابتها",
        "إطار يومية التداول ومراجعة الأداء",
      ],
    },
    duration: { en: "2 weeks · 6 sessions · 12 hours", ar: "أسبوعان · 6 جلسات · 12 ساعة" },
    durationShort: { en: "2 weeks", ar: "أسبوعان" },
    priceUsd: 250,
    prerequisites: {
      en: "Intermediate Technical Analysis or equivalent.",
      ar: "دورة التحليل الفنّي المتوسّط أو ما يعادلها.",
    },
  },
  {
    slug: "trader-psychology",
    level: "psychology",
    levelLabel: { en: "04 / Mind", ar: "04 / العقل" },
    title: { en: "Trader Psychology", ar: "علم نفس المتداول" },
    tagline: {
      en: "The edge is rarely in the chart. It is in the operator.",
      ar: "الميزة نادراً ما تكون في الرسم البياني. هي في المُشغِّل.",
    },
    description: {
      en: "An intensive one-week course addressing the psychological barriers that prevent consistent profitability. You will examine the behaviors that produce losing trades — fear, greed, revenge trading, FOMO — and learn frameworks for building the discipline serious trading requires.",
      ar: "دورة مكثّفة لمدة أسبوع تتناول الحواجز النفسية التي تمنع الربحية المستمرّة. ستفحص السلوكيات التي تنتج الصفقات الخاسرة — الخوف، الجشع، تداول الانتقام، الـ FOMO — وستتعلّم أُطراً لبناء الانضباط الذي يتطلّبه التداول الجدّي.",
    },
    curriculum: {
      en: [
        "The psychology of losing: greed, fear, revenge trading, FOMO",
        "Recognizing emotional triggers and nervous system responses",
        "Position sizing anxiety and breakeven syndrome",
        "Frameworks for building psychological resilience",
        "Discipline systems and pre-trade routines",
        "Long-term mindset for compounding performance",
      ],
      ar: [
        "علم نفس الخسارة: الجشع، الخوف، تداول الانتقام، الـ FOMO",
        "التعرّف على المحفّزات العاطفية واستجابات الجهاز العصبي",
        "قلق تحديد حجم المركز ومتلازمة نقطة التعادل",
        "أُطر لبناء المرونة النفسية",
        "أنظمة الانضباط وروتينات ما قبل الصفقة",
        "العقلية بعيدة المدى لأداء تراكمي",
      ],
    },
    duration: { en: "1 week · 3 sessions · 6 hours", ar: "أسبوع · 3 جلسات · 6 ساعات" },
    durationShort: { en: "1 week", ar: "أسبوع" },
    priceUsd: 150,
    prerequisites: {
      en: "Open to all levels — recommended after at least one technical course.",
      ar: "مفتوحة لجميع المستويات — يُنصح بأخذها بعد دورة فنّية واحدة على الأقل.",
    },
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function pick(value: { en: string; ar: string }, locale: Locale): string {
  return value[locale];
}
export function pickArr(value: { en: string[]; ar: string[] }, locale: Locale): string[] {
  return value[locale];
}
