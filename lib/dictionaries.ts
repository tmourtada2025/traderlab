// All UI/marketing copy for single-program version.
// Edit Arabic strings here for quick fixes.

import type { Locale } from "./i18n";

export type Dict = {
  nav: { home: string; program: string; about: string; enroll: string };
  cta: {
    reserveSeat: string;
    reserveViaWhatsapp: string;
    messageUs: string;
    seeProgram: string;
    seeFullProgram: string;
    backToHome: string;
    enrollNow: string;
  };
  hero: { kicker: string; line1: string; line2Accent: string; line3: string; intro: string; cta: string };
  marquee: string[];
  weeksPreview: { kicker: string; title1: string; title2Accent: string; intro: string; weeks: { n: string; t: string; d: string }[] };
  programStats: { liveHours: string; sessions: string; perSeat: string; cohort: string; perSeatHelper: string };
  enrollSteps: { kicker: string; title: string; steps: { n: string; t: string; d: string }[] };
  homeCtaBlock: { kicker: string; title1: string; title2Accent: string; body: string };
  program: {
    kicker: string;
    overview: string;
    duration: string;
    schedule: string;
    format: string;
    formatValue: string;
    cohort: string;
    cohortValue: string;
    tuition: string;
    prerequisites: string;
    curriculum: string;
    curriculumIntro: string;
    weekLabel: (n: number) => string;
    sessionLabel: (n: number) => string;
    whatsIncluded: string;
    whatsIncludedTitle: string;
    deliverables: { t: string; d: string }[];
    reserveKicker: string;
    reserveTitle1: string;
    reserveTitle2Accent: string;
    reserveBody: string;
    location: string;
    startDate: string;
    startDateValue: string;
    refundPolicy: string;
    refundPolicyValue: string;
  };
  about: {
    kicker: string;
    h1Line1: string;
    h1Line2Accent: string;
    missionKicker: string;
    missionTitle: string;
    missionBody: string[];
    principlesKicker: string;
    principlesTitle: string;
    principles: { n: string; t: string; d: string }[];
    locationKicker: string;
    locationTitleLine1: string;
    locationTitleLine2: string;
    locationBody: string;
  };
  footer: { tagline: string; visitTitle: string; contactTitle: string; whatsappLine: string; copyright: string; navTitle: string };
  meta: { siteTitle: string; siteDescription: string; programTitle: string; programDescription: string; aboutTitle: string; aboutDescription: string };
  whatsapp: { generalInquiry: string; reserveProgram: string };
  tags: Record<"foundations" | "technical" | "institutional" | "integration" | "psychology", string>;
};

const en: Dict = {
  nav: { home: "Home", program: "The Program", about: "About", enroll: "Enroll" },
  cta: {
    reserveSeat: "Reserve your seat",
    reserveViaWhatsapp: "Reserve via WhatsApp",
    messageUs: "Message us",
    seeProgram: "See the program",
    seeFullProgram: "See the full program",
    backToHome: "Back to home",
    enrollNow: "Enroll",
  },
  hero: {
    kicker: "Live · In-person · Choueifat",
    line1: "Trade with",
    line2Accent: "edge",
    line3: "not luck.",
    intro:
      "A four-week, twenty-four-hour live program built for traders who want depth without filler. Foundations, technical analysis, institutional thinking, and psychology — fused into a single working system.",
    cta: "See the program",
  },
  marquee: [
    "Live in-person sessions",
    "MWF · 18:00–20:00",
    "20 students max",
    "4 weeks · 12 sessions",
    "Spot Mall, Choueifat",
    "Certificate of completion",
  ],
  weeksPreview: {
    kicker: "Curriculum at a glance",
    title1: "Four weeks.",
    title2Accent: "One working system.",
    intro:
      "Each week builds on the last. Foundations first, then chart-reading, then institutional thinking, then a system you can actually run. No filler, no padding.",
    weeks: [
      { n: "Week 1", t: "Market literacy & trader identity", d: "How forex really works, the language of price, execution and risk mechanics." },
      { n: "Week 2", t: "Reading the market", d: "Price structure, technical tools as confirmation, fundamentals as directional filter." },
      { n: "Week 3", t: "Institutional thinking", d: "How institutions move price, advanced structure, the psychology that separates traders." },
      { n: "Week 4", t: "System & execution", d: "Building your system, risk and journaling, live trade review and graduation." },
    ],
  },
  programStats: {
    liveHours: "Live instruction",
    sessions: "Sessions",
    perSeat: "Per seat",
    cohort: "Schedule",
    perSeatHelper: "$100 allocated to your live trading account",
  },
  enrollSteps: {
    kicker: "How enrollment works",
    title: "Four steps. No friction.",
    steps: [
      { n: "01", t: "Read the program", d: "Review the four-week curriculum and confirm the format fits how you want to learn." },
      { n: "02", t: "Message us", d: "Tap the WhatsApp button. We'll confirm seat availability and answer any questions." },
      { n: "03", t: "Pay via Whish", d: "We send a Whish payment link. Once payment clears, your seat is confirmed." },
      { n: "04", t: "Show up & learn", d: "Live sessions in Choueifat. Mandatory attendance. No recordings." },
    ],
  },
  homeCtaBlock: {
    kicker: "Cohort 01 — Forming now",
    title1: "The next cohort runs",
    title2Accent: "when 10 traders commit.",
    body: "Twenty seats per cohort. We start once ten are confirmed. Reserve before it fills.",
  },
  program: {
    kicker: "The Program",
    overview: "Overview",
    duration: "Duration",
    schedule: "Schedule",
    format: "Format",
    formatValue: "Live · In-person",
    cohort: "Cohort",
    cohortValue: "20 seats max · 10 to start",
    tuition: "Tuition",
    prerequisites: "Prerequisites",
    curriculum: "Twelve sessions, four weeks",
    curriculumIntro:
      "Three sessions per week, two hours each. Each session is a self-contained block; the sequence is what turns blocks into a working trader.",
    weekLabel: (n) => `Week ${n}`,
    sessionLabel: (n) => `Session ${String(n).padStart(2, "0")}`,
    whatsIncluded: "What's included",
    whatsIncludedTitle: "Everything you need to leave with a working process.",
    deliverables: [
      { t: "Certificate of completion", d: "Issued upon successful completion of all four weeks." },
      { t: "Lifetime LMS access", d: "Free coupon to our learning platform with ebooks, templates, and pattern checklists." },
      { t: "Live MT4/MT5 demos", d: "Real-time platform walkthroughs. You trade alongside the instructor on demo accounts." },
      { t: "$100 live account credit", d: "Of your $500 fee, $100 is allocated directly to your live trading account upon completion." },
    ],
    reserveKicker: "Reserve your seat",
    reserveTitle1: "Twenty seats.",
    reserveTitle2Accent: "First come, first confirmed.",
    reserveBody:
      "Tap below to message us on WhatsApp. We confirm availability and send a Whish payment link. Your seat is confirmed once payment clears.",
    location: "Location",
    startDate: "Start date",
    startDateValue: "TBD — confirmed once 10 traders commit",
    refundPolicy: "Refund policy",
    refundPolicyValue: "Non-refundable · Deferral available",
  },
  about: {
    kicker: "About TraderLab",
    h1Line1: "Skill is built",
    h1Line2Accent: "on purpose.",
    missionKicker: "Mission",
    missionTitle: "Help traders trade better.",
    missionBody: [
      "Most traders lose. Not because the market is too hard, but because they were taught it was easy. They were given indicators without context, signals without structure, and confidence without competence.",
      "TraderLab exists to close that gap. We teach forex the way it should be taught: live, in-person, with real accountability. Small cohorts. Mandatory attendance. A four-week curriculum that moves from fundamentals to a working system.",
      "Our students leave with three things: a clear framework for reading the market, a documented process for entering and exiting trades, and the discipline to follow that process when it matters.",
    ],
    principlesKicker: "How we teach",
    principlesTitle: "Four principles. Held without exception.",
    principles: [
      { n: "01", t: "Live, in-person only", d: "No recordings. No replays. If you're not in the room, you're not in the cohort." },
      { n: "02", t: "Cohorts capped at 20", d: "Every student gets answered. Every chart gets reviewed. The economics work because the room is small." },
      { n: "03", t: "Process over prediction", d: "We don't teach you to call tops and bottoms. We teach you to define a setup, size a position, and exit on rules." },
      { n: "04", t: "Real markets, real platforms", d: "MT4/MT5 walkthroughs every session. Demo accounts running alongside. You learn by doing, not by watching." },
    ],
    locationKicker: "Where we are",
    locationTitleLine1: "Spot Mall, Choueifat",
    locationTitleLine2: "1st Floor.",
    locationBody:
      "A dedicated classroom built for trading instruction. Whiteboard, projector, live MT4/MT5 demonstrations. Bring your laptop.",
  },
  footer: {
    tagline: "Live forex education for traders who treat the market as a craft, not a lottery.",
    visitTitle: "Visit",
    contactTitle: "Contact",
    whatsappLine: "WhatsApp",
    copyright: "TraderLab",
    navTitle: "Navigate",
  },
  meta: {
    siteTitle: "TraderLab — Forex Education in Beirut",
    siteDescription:
      "A four-week, in-person forex program in Choueifat. From foundations to a working trading system.",
    programTitle: "The Program — TraderLab",
    programDescription:
      "Four weeks. Twelve sessions. Twenty-four hours of live instruction. Foundations to a working system.",
    aboutTitle: "About — TraderLab",
    aboutDescription: "Help new and existing traders build real skill, not false confidence.",
  },
  whatsapp: {
    generalInquiry: "Hi TraderLab, I'd like to learn more about the Comprehensive Forex Program.",
    reserveProgram:
      "Hi TraderLab, I'd like to reserve a seat in the Comprehensive Forex Program. My name is ___.",
  },
  tags: {
    foundations: "Foundations",
    technical: "Technical",
    institutional: "Institutional",
    integration: "Integration",
    psychology: "Psychology",
  },
};

const ar: Dict = {
  nav: { home: "الرئيسية", program: "البرنامج", about: "من نحن", enroll: "سجّل الآن" },
  cta: {
    reserveSeat: "احجز مقعدك",
    reserveViaWhatsapp: "احجز عبر واتساب",
    messageUs: "راسلنا",
    seeProgram: "اطّلع على البرنامج",
    seeFullProgram: "اطّلع على البرنامج كاملاً",
    backToHome: "العودة إلى الرئيسية",
    enrollNow: "سجّل الآن",
  },
  hero: {
    kicker: "حضوري · مباشر · الشويفات",
    line1: "تداول",
    line2Accent: "بميزة حقيقية",
    line3: "لا بالحظ.",
    intro:
      "برنامج حضوري لمدة أربعة أسابيع و24 ساعة، مصمَّم للمتداولين الباحثين عن العمق دون حشو. الأساسيات والتحليل الفنّي والتفكير المؤسّسي وعلم النفس — مدمجة في نظام عمل واحد.",
    cta: "اطّلع على البرنامج",
  },
  marquee: [
    "جلسات حضورية مباشرة",
    "اثنين · أربعاء · جمعة — 18:00–20:00",
    "20 طالباً كحد أقصى",
    "4 أسابيع · 12 جلسة",
    "سبوت مول، الشويفات",
    "شهادة إتمام البرنامج",
  ],
  weeksPreview: {
    kicker: "نظرة على المنهج",
    title1: "أربعة أسابيع.",
    title2Accent: "نظام عمل واحد.",
    intro:
      "كل أسبوع يبني على الذي قبله. الأساسيات أولاً، ثم قراءة الرسوم، ثم التفكير المؤسّسي، ثم نظام تداول قابل للتطبيق. بلا حشو، بلا تكرار.",
    weeks: [
      { n: "الأسبوع 1", t: "فهم السوق وهوية المتداول", d: "كيف يعمل الفوركس فعلاً، لغة السعر، التنفيذ وآليات إدارة المخاطر." },
      { n: "الأسبوع 2", t: "قراءة السوق", d: "بنية السعر، الأدوات الفنّية كأدوات تأكيد، التحليل الأساسي كمرشّح للاتّجاه." },
      { n: "الأسبوع 3", t: "التفكير المؤسّسي", d: "كيف تحرّك المؤسّسات السعر، البنية المتقدّمة، علم النفس الذي يميّز المتداولين." },
      { n: "الأسبوع 4", t: "النظام والتنفيذ", d: "بناء نظامك، إدارة المخاطر واليومية، مراجعة الصفقات والتخرّج." },
    ],
  },
  programStats: {
    liveHours: "ساعة تعليم مباشر",
    sessions: "جلسة",
    perSeat: "لكل مقعد",
    cohort: "الجدول",
    perSeatHelper: "100 دولار تُخصَّص لحسابك التداولي",
  },
  enrollSteps: {
    kicker: "كيف يتم التسجيل",
    title: "أربع خطوات. بلا تعقيد.",
    steps: [
      { n: "01", t: "اطّلع على البرنامج", d: "راجع منهج الأسابيع الأربعة وتأكّد أن الشكل يناسب طريقتك في التعلّم." },
      { n: "02", t: "راسلنا", d: "اضغط زر واتساب. سنؤكّد لك توفّر المقاعد ونجيب على أي سؤال." },
      { n: "03", t: "ادفع عبر Whish", d: "نرسل لك رابط دفع عبر Whish. بمجرّد إتمام الدفع، يُؤكَّد مقعدك." },
      { n: "04", t: "احضر وتعلّم", d: "جلسات حضورية في الشويفات. الحضور إلزامي. لا تسجيلات." },
    ],
  },
  homeCtaBlock: {
    kicker: "المجموعة الأولى — التسجيل مفتوح",
    title1: "تنطلق المجموعة التالية",
    title2Accent: "عند التزام 10 متداولين.",
    body: "عشرون مقعداً لكل مجموعة. ننطلق عند تأكيد عشرة. احجز قبل امتلاء المقاعد.",
  },
  program: {
    kicker: "البرنامج",
    overview: "نظرة عامة",
    duration: "المدة",
    schedule: "الجدول",
    format: "الشكل",
    formatValue: "حضوري · مباشر",
    cohort: "المجموعة",
    cohortValue: "20 مقعداً كحد أقصى · 10 للانطلاق",
    tuition: "الرسوم",
    prerequisites: "المتطلّبات السابقة",
    curriculum: "اثنتا عشرة جلسة، أربعة أسابيع",
    curriculumIntro:
      "ثلاث جلسات أسبوعياً، ساعتان لكل جلسة. كل جلسة وحدة قائمة بذاتها؛ والتسلسل هو ما يحوّل الوحدات إلى متداول يعمل بنظام.",
    weekLabel: (n) => `الأسبوع ${n}`,
    sessionLabel: (n) => `الجلسة ${String(n).padStart(2, "0")}`,
    whatsIncluded: "ماذا يتضمّن",
    whatsIncludedTitle: "كل ما تحتاجه للخروج بعملية تداول قابلة للتطبيق.",
    deliverables: [
      { t: "شهادة إتمام البرنامج", d: "تُمنح عند إتمام الأسابيع الأربعة بنجاح." },
      { t: "وصول مدى الحياة لمنصّة التعلّم", d: "كوبون مجّاني لمنصّتنا التعليمية مع كتب إلكترونية وقوالب وقوائم أنماط." },
      { t: "عروض MT4/MT5 مباشرة", d: "شرح مباشر للمنصّة في كل جلسة. تتداول إلى جانب المدرّب على حسابات تجريبية." },
      { t: "100 دولار رصيد حساب حقيقي", d: "من رسوم الـ 500 دولار، يُخصَّص 100 دولار مباشرةً لحسابك التداولي الحقيقي عند إتمام البرنامج." },
    ],
    reserveKicker: "احجز مقعدك",
    reserveTitle1: "عشرون مقعداً.",
    reserveTitle2Accent: "الأسبق بالتسجيل، الأسبق بالتأكيد.",
    reserveBody:
      "اضغط الزر أدناه لمراسلتنا عبر واتساب. نؤكّد توفّر المقاعد ونرسل رابط الدفع عبر Whish. يُؤكَّد مقعدك بمجرّد إتمام الدفع.",
    location: "الموقع",
    startDate: "تاريخ البدء",
    startDateValue: "يُحدَّد لاحقاً — يُؤكَّد عند التزام 10 متداولين",
    refundPolicy: "سياسة الاسترداد",
    refundPolicyValue: "غير قابلة للاسترداد · يمكن التأجيل",
  },
  about: {
    kicker: "عن TraderLab",
    h1Line1: "المهارة تُبنى",
    h1Line2Accent: "بقصد ووعي.",
    missionKicker: "المهمّة",
    missionTitle: "نساعد المتداولين على التداول بشكل أفضل.",
    missionBody: [
      "معظم المتداولين يخسرون. ليس لأن السوق صعب أكثر من اللازم، بل لأنّهم تعلّموا أنّه سهل. أُعطوا مؤشّرات بلا سياق، وإشارات بلا بنية، وثقة بلا كفاءة.",
      "TraderLab وُجد ليُغلق هذه الفجوة. نحن نعلّم الفوركس كما يجب أن يُعلَّم: حضورياً، مباشرة، بمسؤولية حقيقية. مجموعات صغيرة. حضور إلزامي. منهج لمدة أربعة أسابيع ينتقل من الأساسيات إلى نظام تداول قابل للتطبيق.",
      "يخرج طلّابنا بثلاثة أمور: إطار واضح لقراءة السوق، عملية موثّقة للدخول والخروج من الصفقات، والانضباط لاتّباع هذه العملية في اللحظات التي تهمّ.",
    ],
    principlesKicker: "كيف نعلّم",
    principlesTitle: "أربعة مبادئ. تُحترم دون استثناء.",
    principles: [
      { n: "01", t: "حضوري ومباشر فقط", d: "لا تسجيلات. لا إعادات. إن لم تكن في الغرفة، فلست في المجموعة." },
      { n: "02", t: "20 طالباً كحد أقصى", d: "كل طالب يحصل على إجابة. كل رسم بياني يُراجَع. الاقتصاد يعمل لأن الغرفة صغيرة." },
      { n: "03", t: "العملية قبل التنبّؤ", d: "لا نعلّمك التقاط القمم والقيعان. نعلّمك تعريف الإعداد، وتحديد حجم المركز، والخروج وفق قواعد." },
      { n: "04", t: "أسواق حقيقية، منصّات حقيقية", d: "شرح MT4/MT5 في كل جلسة. حسابات تجريبية تعمل بالتوازي. تتعلّم بالممارسة، لا بالمشاهدة." },
    ],
    locationKicker: "أين نحن",
    locationTitleLine1: "سبوت مول، الشويفات",
    locationTitleLine2: "الطابق الأول.",
    locationBody:
      "صف مخصّص لتعليم التداول. لوح أبيض، جهاز عرض، عروض MT4/MT5 مباشرة. أحضر جهازك المحمول.",
  },
  footer: {
    tagline: "تعليم فوركس حضوري للمتداولين الذين يتعاملون مع السوق كحرفة، لا كقمار.",
    visitTitle: "زرنا",
    contactTitle: "تواصل",
    whatsappLine: "واتساب",
    copyright: "TraderLab",
    navTitle: "تصفّح",
  },
  meta: {
    siteTitle: "TraderLab — تعليم الفوركس في بيروت",
    siteDescription:
      "برنامج فوركس حضوري لمدة أربعة أسابيع في الشويفات. من الأساسيات إلى نظام تداول قابل للتطبيق.",
    programTitle: "البرنامج — TraderLab",
    programDescription:
      "أربعة أسابيع. اثنتا عشرة جلسة. أربع وعشرون ساعة من التعليم المباشر. من الأساسيات إلى نظام عمل.",
    aboutTitle: "من نحن — TraderLab",
    aboutDescription: "نساعد المتداولين الجدد والقدامى على بناء مهارة حقيقية، لا ثقة زائفة.",
  },
  whatsapp: {
    generalInquiry: "مرحباً TraderLab، أودّ معرفة المزيد عن البرنامج الشامل لتداول الفوركس.",
    reserveProgram:
      "مرحباً TraderLab، أودّ حجز مقعد في البرنامج الشامل لتداول الفوركس. اسمي ___.",
  },
  tags: {
    foundations: "الأساسيات",
    technical: "التحليل الفنّي",
    institutional: "التفكير المؤسّسي",
    integration: "التكامل",
    psychology: "علم النفس",
  },
};

export const DICTIONARIES: Record<Locale, Dict> = { ar, en };

export function getDict(locale: Locale): Dict {
  return DICTIONARIES[locale];
}
