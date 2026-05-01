// Single program data. Replaces the previous multi-course array.
// 4 weeks × 3 sessions/week = 12 sessions.

import type { Locale } from "./i18n";

type Bi = { en: string; ar: string };

export type SessionCategory = "foundations" | "technical" | "institutional" | "integration";

export type Session = {
  num: number;
  title: Bi;
  description: Bi;
  primary: SessionCategory;          // top border color + first tag
  tags: SessionCategory[];           // displayed pill tags (excluding "psychology" which is its own tag)
  hasPsychology?: boolean;           // shows additional "psychology" tag
};

export type Week = {
  num: number;
  label: Bi;
  sessions: Session[];
};

export const PROGRAM = {
  title: { en: "Comprehensive Forex Program", ar: "البرنامج الشامل لتداول الفوركس" },
  tagline: {
    en: "From market literacy to a working trading system — in four focused weeks.",
    ar: "من فهم السوق إلى نظام تداول فعّال — في أربعة أسابيع مكثّفة.",
  },
  description: {
    en: "A four-week, 24-hour live program built for traders who want depth without filler. We combine foundations, technical analysis, institutional thinking and trader psychology into a single system you can actually run. Twelve sessions, three per week, capped at twenty seats.",
    ar: "برنامج حضوري لمدة أربعة أسابيع و24 ساعة، مصمَّم للمتداولين الذين يبحثون عن العمق دون حشو. ندمج الأساسيات والتحليل الفنّي والتفكير المؤسّسي وعلم نفس المتداول في نظام واحد يمكنك تطبيقه فعلياً. اثنتا عشرة جلسة، ثلاث أسبوعياً، بحد أقصى عشرون مقعداً.",
  },
  duration: { en: "4 weeks · 12 sessions · 24 hours", ar: "4 أسابيع · 12 جلسة · 24 ساعة" },
  durationShort: { en: "4 weeks", ar: "4 أسابيع" },
  priceUsd: 500,
  priceNote: {
    en: "$100 of your enrollment fee is allocated to your live trading account upon completion.",
    ar: "يُخصَّص 100 دولار من رسوم التسجيل لحسابك التداولي الحقيقي عند إتمام البرنامج.",
  },
  prerequisites: {
    en: "None. Designed to take a complete beginner to a system-level trader in four weeks.",
    ar: "لا متطلّبات. مصمَّم ليأخذ المبتدئ تماماً إلى مستوى متداول يعمل بنظام في أربعة أسابيع.",
  },
};

export const WEEKS: Week[] = [
  {
    num: 1,
    label: { en: "Market literacy & trader identity", ar: "فهم السوق وهوية المتداول" },
    sessions: [
      {
        num: 1,
        primary: "foundations",
        tags: ["foundations"],
        hasPsychology: true,
        title: {
          en: "The market, the money & the mindset",
          ar: "السوق، المال، والعقلية",
        },
        description: {
          en: "How forex works, who the real players are, why retail traders lose — and what this program will and won't do for you. Psychology intro: the trader's paradox.",
          ar: "كيف يعمل الفوركس، من هم اللاعبون الحقيقيون، لماذا يخسر المتداول الفردي — وما الذي سيقدّمه ولن يقدّمه هذا البرنامج. مقدّمة في علم النفس: مفارقة المتداول.",
        },
      },
      {
        num: 2,
        primary: "foundations",
        tags: ["foundations"],
        title: { en: "The language of price", ar: "لغة السعر" },
        description: {
          en: "Pairs, pips, lots, leverage, margin, bid/ask, spread. Every mechanical concept needed to place and size a trade correctly. Live MT4 exercises.",
          ar: "أزواج العملات، النقاط (Pips)، اللوتات، الرافعة المالية، الهامش، فروق الأسعار (Bid/Ask، الـ Spread). كل مفهوم ميكانيكي تحتاجه لتنفيذ الصفقة وتحديد حجمها بشكل صحيح. تمارين مباشرة على MT4.",
        },
      },
      {
        num: 3,
        primary: "foundations",
        tags: ["foundations"],
        hasPsychology: true,
        title: { en: "Execution & risk mechanics", ar: "التنفيذ وآليات إدارة المخاطر" },
        description: {
          en: "Order types, SL/TP, margin call mechanics, position sizing formula. Psychology: why traders don't set stop losses — and what that reveals.",
          ar: "أنواع الأوامر، وقف الخسارة وجني الأرباح، آلية الـ Margin Call، معادلة تحديد حجم المركز. علم النفس: لماذا لا يضع المتداولون وقف الخسارة — وما الذي يكشفه ذلك.",
        },
      },
    ],
  },
  {
    num: 2,
    label: { en: "Reading the market", ar: "قراءة السوق" },
    sessions: [
      {
        num: 4,
        primary: "technical",
        tags: ["technical", "institutional"],
        title: { en: "Price structure & market context", ar: "بنية السعر وسياق السوق" },
        description: {
          en: "Candlesticks, market structure (HH/HL/LH/LL), support & resistance zones, trend identification. The chart as a record of institutional behavior.",
          ar: "الشموع اليابانية، بنية السوق (قمم وقيعان أعلى/أدنى)، مناطق الدعم والمقاومة، تحديد الاتّجاه. الرسم البياني كسجل لسلوك المؤسّسات.",
        },
      },
      {
        num: 5,
        primary: "technical",
        tags: ["technical"],
        title: { en: "Technical tools that actually work", ar: "الأدوات الفنّية التي تنجح فعلاً" },
        description: {
          en: "Moving averages, Bollinger Bands, pivot points, MACD, RSI — taught as confirmation tools, not signal generators. Timeframe confluence framework.",
          ar: "المتوسّطات المتحرّكة، نطاقات بولينجر، نقاط البيفوت، MACD، RSI — تُدرَّس كأدوات تأكيد، لا كمولّدات إشارات. إطار تطابق الإطارات الزمنية.",
        },
      },
      {
        num: 6,
        primary: "technical",
        tags: ["technical", "foundations"],
        title: {
          en: "Fundamental drivers & the economic calendar",
          ar: "المحرّكات الأساسية والروزنامة الاقتصادية",
        },
        description: {
          en: "Central banks, interest rates, CPI/PPI/GDP, hawkish vs dovish. Weekly calendar review process. Fundamentals as directional filter for technical entries.",
          ar: "البنوك المركزية، أسعار الفائدة، مؤشّرات CPI/PPI/GDP، السياسات المتشدّدة مقابل المتساهلة. عملية مراجعة الروزنامة الأسبوعية. التحليل الأساسي كمرشّح اتّجاهي للدخول الفنّي.",
        },
      },
    ],
  },
  {
    num: 3,
    label: {
      en: "Institutional thinking & advanced structure",
      ar: "التفكير المؤسّسي والبنية المتقدّمة",
    },
    sessions: [
      {
        num: 7,
        primary: "institutional",
        tags: ["institutional"],
        title: { en: "How institutions move price", ar: "كيف تحرّك المؤسّسات السعر" },
        description: {
          en: "Supply & demand zones, order blocks, fair value gaps. Why price does what it does at key levels. The difference between retail and institutional analysis.",
          ar: "مناطق العرض والطلب، Order Blocks، Fair Value Gaps. لماذا يتصرّف السعر كما يتصرّف عند المستويات الرئيسية. الفرق بين التحليل الفردي والتحليل المؤسّسي.",
        },
      },
      {
        num: 8,
        primary: "institutional",
        tags: ["institutional", "technical"],
        title: { en: "Market structure at depth", ar: "بنية السوق بعمق" },
        description: {
          en: "Break of structure, change of character, liquidity sweeps, Fibonacci premium/discount zones. Multi-timeframe confluence: D1 → H4 → H1 drill.",
          ar: "كسر البنية (BoS)، تغيّر الطابع (ChoCH)، اجتياح السيولة، مناطق فيبوناتشي للبريميوم والديسكاونت. تطابق الإطارات الزمنية: من اليومي إلى الـ H4 إلى الـ H1.",
        },
      },
      {
        num: 9,
        primary: "institutional",
        tags: ["institutional"],
        hasPsychology: true,
        title: { en: "Trader psychology: the real edge", ar: "علم نفس المتداول: الميزة الحقيقية" },
        description: {
          en: "Loss aversion, revenge trading, FOMO, breakeven syndrome, position sizing anxiety. Nervous system responses in live trading. Building a decision protocol.",
          ar: "النفور من الخسارة، تداول الانتقام، الـ FOMO، متلازمة نقطة التعادل، قلق تحديد حجم المركز. استجابات الجهاز العصبي في التداول الحي. بناء بروتوكول قرار.",
        },
      },
    ],
  },
  {
    num: 4,
    label: { en: "System, execution & the live trader", ar: "النظام والتنفيذ والمتداول الحي" },
    sessions: [
      {
        num: 10,
        primary: "integration",
        tags: ["integration", "technical"],
        title: { en: "Building your trading system", ar: "بناء نظام التداول الخاص بك" },
        description: {
          en: "Combining fundamental direction + technical entry + institutional context into a repeatable process. Entry criteria, invalidation rules, trade management. Chart pattern workshop.",
          ar: "دمج الاتّجاه الأساسي + الدخول الفنّي + السياق المؤسّسي في عملية قابلة للتكرار. معايير الدخول، قواعد الإلغاء، إدارة الصفقة. ورشة أنماط الرسم البياني.",
        },
      },
      {
        num: 11,
        primary: "integration",
        tags: ["integration"],
        hasPsychology: true,
        title: { en: "Risk, journaling & performance", ar: "المخاطر، اليومية، والأداء" },
        description: {
          en: "Expectancy formula, position sizing across account sizes, trade journal framework, performance review process. Broker selection & vetting live exercise.",
          ar: "معادلة التوقّع، تحديد حجم المركز عبر أحجام الحسابات، إطار يومية التداول، عملية مراجعة الأداء. اختيار الوسيط وتقييمه — تمرين مباشر.",
        },
      },
      {
        num: 12,
        primary: "integration",
        tags: ["integration"],
        hasPsychology: true,
        title: { en: "Live trade review & graduation", ar: "مراجعة الصفقات والتخرّج" },
        description: {
          en: "Students present one demo trade analysis. Group feedback. The three gates to live trading. Course close and continuing-education roadmap.",
          ar: "يقدّم الطلّاب تحليل صفقة تجريبية واحدة. ملاحظات جماعية. البوابات الثلاث للتداول الحقيقي. ختام البرنامج وخارطة التطوير المستمر.",
        },
      },
    ],
  },
];

export function pick(value: { en: string; ar: string }, locale: Locale): string {
  return value[locale];
}
