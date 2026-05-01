// All UI/marketing copy. Course content lives in lib/courses.ts (bilingual fields).
// Edit Arabic strings here for quick fixes; rebuild auto-deploys.

import type { Locale } from "./i18n";

export type Dict = {
  nav: { home: string; courses: string; about: string; enroll: string };
  cta: { reserveSeat: string; reserveViaWhatsapp: string; messageUs: string; browseCourses: string; seeCurriculum: string; backToCourse: string; allCourses: string; viewDetails: string; backToHome: string };
  hero: { kicker: string; line1: string; line2Italic: string; line3: string; intro: string };
  marquee: string[];
  curriculumSection: { kicker: string; title1: string; title2: string; intro: string };
  enrollSteps: { kicker: string; title: string; steps: { n: string; t: string; d: string }[] };
  ctaBlock: { kicker: string; title1: string; title2Italic: string };
  course: {
    overview: string;
    whatYouLearn: string;
    prerequisites: string;
    tuition: string;
    duration: string;
    schedule: string;
    format: string;
    formatValue: string;
    cohort: string;
    cohortValue: string;
    whatsIncluded: string;
    whatsIncludedTitle: string;
    deliverables: { t: string; d: string }[];
    reserveKicker: string;
    reserveTitle1: string;
    reserveTitle2Italic: string;
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
    h1Line2Italic: string;
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
  footer: { tagline: string; visitTitle: string; contactTitle: string; whatsappLine: string; copyright: string };
  meta: {
    siteTitle: string;
    siteDescription: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  whatsapp: {
    generalInquiry: string;
    reserveTemplate: (courseTitle: string) => string;
  };
  langSwitcher: { ar: string; en: string };
};

const en: Dict = {
  nav: { home: "Home", courses: "Courses", about: "About", enroll: "Enroll" },
  cta: {
    reserveSeat: "Reserve your seat",
    reserveViaWhatsapp: "Reserve via WhatsApp",
    messageUs: "Message us",
    browseCourses: "Browse courses",
    seeCurriculum: "See the curriculum",
    backToCourse: "Back to course",
    allCourses: "All courses",
    viewDetails: "View details",
    backToHome: "Back to home",
  },
  hero: {
    kicker: "Live · In-Person · Choueifat",
    line1: "Trade with",
    line2Italic: "structure",
    line3: "not luck.",
    intro:
      "A live, in-person forex curriculum built for traders who want to operate with discipline, repeatable process, and actual edge.",
  },
  marquee: [
    "Live in-person sessions",
    "MWF · 18:00–20:00",
    "Capped at 20 students",
    "Spot Mall, Choueifat",
    "Certificate of attendance",
    "Lifetime LMS access",
  ],
  curriculumSection: {
    kicker: "Curriculum",
    title1: "Four courses,",
    title2: "one progression.",
    intro:
      "Each course can be taken on its own, but the sequence is intentional. Foundations first, then chart-reading, then a system, then the discipline to run that system without breaking it.",
  },
  enrollSteps: {
    kicker: "How enrollment works",
    title: "Four steps. No friction.",
    steps: [
      { n: "01", t: "Pick a course", d: "Review the curriculum and confirm the level fits where you are." },
      { n: "02", t: "Message us", d: "Tap the WhatsApp button. We'll confirm seat availability and answer questions." },
      { n: "03", t: "Pay via Whish", d: "We send a Whish payment link. Once payment clears, your seat is confirmed." },
      { n: "04", t: "Show up & learn", d: "Live sessions in Choueifat. Mandatory attendance. No recordings." },
    ],
  },
  ctaBlock: {
    kicker: "Cohort 01 — Forming now",
    title1: "The next cohort runs",
    title2Italic: "when 10 traders commit.",
  },
  course: {
    overview: "Overview",
    whatYouLearn: "What you'll learn",
    prerequisites: "Prerequisites",
    tuition: "Tuition",
    duration: "Duration",
    schedule: "Schedule",
    format: "Format",
    formatValue: "Live · In-person",
    cohort: "Cohort",
    cohortValue: "20 seats max · 10 to start",
    whatsIncluded: "What's included",
    whatsIncludedTitle: "Everything you need to leave with a working process.",
    deliverables: [
      { t: "Certificate of attendance", d: "Issued upon completion of the course. Recognized across the TraderLab curriculum." },
      { t: "Lifetime LMS access", d: "Free coupon to our learning platform with ebooks, templates, and pattern checklists." },
      { t: "Live MT4/MT5 demos", d: "Real-time platform walkthroughs. You'll trade alongside the instructor in demo accounts." },
    ],
    reserveKicker: "Reserve your seat",
    reserveTitle1: "Twenty seats.",
    reserveTitle2Italic: "First come, first confirmed.",
    reserveBody:
      "Tap below to message us on WhatsApp. We'll confirm seat availability and send a Whish payment link. Your seat is confirmed once payment clears.",
    location: "Location",
    startDate: "Start date",
    startDateValue: "TBD — confirmed once 10 traders commit",
    refundPolicy: "Refund policy",
    refundPolicyValue: "Non-refundable · Deferral available",
  },
  about: {
    kicker: "About TraderLab",
    h1Line1: "Skill is built",
    h1Line2Italic: "on purpose.",
    missionKicker: "Mission",
    missionTitle: "Help traders trade better.",
    missionBody: [
      "Most traders lose. Not because the market is too hard, but because they were taught it was easy. They were given indicators without context, signals without structure, and confidence without competence.",
      "TraderLab exists to close that gap. We teach forex the way it should be taught: live, in-person, with real accountability. Small cohorts. Mandatory attendance. A curriculum that moves from fundamentals to a working system.",
      "Our students leave with three things: a clear framework for reading the market, a documented process for entering and exiting trades, and the discipline to follow that process when it matters.",
    ],
    principlesKicker: "How we teach",
    principlesTitle: "Four principles. Held without exception.",
    principles: [
      { n: "01", t: "Live, in-person only", d: "No recordings. No replays. If you're not in the room, you're not in the cohort. This is how attention is enforced." },
      { n: "02", t: "Cohorts capped at 20", d: "Every student gets answered. Every chart gets reviewed. The economics work because the room is small." },
      { n: "03", t: "Process over prediction", d: "We don't teach you to call tops and bottoms. We teach you to define a setup, size a position, and exit on rules." },
      { n: "04", t: "Real markets, real platforms", d: "MT4/MT5 walkthroughs in every session. Demo accounts running alongside. You learn by doing, not by watching." },
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
  },
  meta: {
    siteTitle: "TraderLab — Forex Education in Beirut",
    siteDescription:
      "Live, in-person forex training in Choueifat. From beginner fundamentals to advanced strategy and trader psychology.",
    aboutTitle: "About — TraderLab",
    aboutDescription:
      "Our mission: help new and existing traders build real skill, not false confidence.",
  },
  whatsapp: {
    generalInquiry: "Hi TraderLab, I'd like to learn more about your forex courses.",
    reserveTemplate: (t) => `Hi TraderLab, I'd like to reserve a seat in "${t}". My name is ___.`,
  },
  langSwitcher: { ar: "AR", en: "EN" },
};

const ar: Dict = {
  nav: { home: "الرئيسية", courses: "الدورات", about: "من نحن", enroll: "سجّل الآن" },
  cta: {
    reserveSeat: "احجز مقعدك",
    reserveViaWhatsapp: "احجز عبر واتساب",
    messageUs: "راسلنا",
    browseCourses: "تصفّح الدورات",
    seeCurriculum: "اطّلع على المنهج",
    backToCourse: "العودة إلى الدورة",
    allCourses: "كل الدورات",
    viewDetails: "عرض التفاصيل",
    backToHome: "العودة إلى الرئيسية",
  },
  hero: {
    kicker: "حضوري · مباشر · الشويفات",
    line1: "تداول",
    line2Italic: "بانضباط",
    line3: "لا بالحظ.",
    intro:
      "منهج فوركس مباشر وحضوري، مصمَّم للمتداولين الذين يريدون العمل بانضباط، وعملية قابلة للتكرار، وميزة فعلية في السوق.",
  },
  marquee: [
    "جلسات حضورية مباشرة",
    "اثنين · أربعاء · جمعة — 18:00–20:00",
    "عدد محدود بـ 20 طالباً",
    "سبوت مول، الشويفات",
    "شهادة حضور",
    "وصول مدى الحياة لمنصة التعلّم",
  ],
  curriculumSection: {
    kicker: "المنهج",
    title1: "أربع دورات،",
    title2: "مسار واحد متكامل.",
    intro:
      "يمكن أخذ كل دورة على حدة، لكن التسلسل مدروس. الأساسيات أولاً، ثم قراءة الرسوم البيانية، ثم بناء نظام تداول، ثم الانضباط اللازم لتطبيقه دون كسره.",
  },
  enrollSteps: {
    kicker: "كيف يتم التسجيل",
    title: "أربع خطوات. بلا تعقيد.",
    steps: [
      { n: "01", t: "اختر دورة", d: "راجع المنهج وتأكّد أن المستوى يناسب وضعك الحالي." },
      { n: "02", t: "راسلنا", d: "اضغط زر واتساب. سنؤكّد لك توفّر المقاعد ونجيب عن أسئلتك." },
      { n: "03", t: "ادفع عبر Whish", d: "نرسل لك رابط دفع عبر Whish. بمجرّد إتمام الدفع، يُحجز مقعدك." },
      { n: "04", t: "احضر وتعلّم", d: "جلسات حضورية في الشويفات. الحضور إلزامي. لا تسجيلات." },
    ],
  },
  ctaBlock: {
    kicker: "المجموعة الأولى — التسجيل مفتوح",
    title1: "تنطلق المجموعة التالية",
    title2Italic: "عند التزام 10 متداولين.",
  },
  course: {
    overview: "نظرة عامة",
    whatYouLearn: "ما الذي ستتعلّمه",
    prerequisites: "المتطلّبات السابقة",
    tuition: "الرسوم",
    duration: "المدة",
    schedule: "الجدول",
    format: "الشكل",
    formatValue: "حضوري · مباشر",
    cohort: "المجموعة",
    cohortValue: "20 مقعداً كحد أقصى · 10 للانطلاق",
    whatsIncluded: "ماذا يتضمّن",
    whatsIncludedTitle: "كل ما تحتاجه للخروج بعملية تداول قابلة للتطبيق.",
    deliverables: [
      { t: "شهادة حضور", d: "تُمنح عند إتمام الدورة. معتمدة عبر منهج TraderLab." },
      { t: "وصول مدى الحياة لمنصّة التعلّم", d: "كوبون مجّاني للوصول إلى منصّتنا التعليمية مع كتب إلكترونية وقوالب وقوائم أنماط." },
      { t: "عروض MT4/MT5 مباشرة", d: "شرح مباشر للمنصّة في كل جلسة. ستتداول إلى جانب المدرّب على حسابات تجريبية." },
    ],
    reserveKicker: "احجز مقعدك",
    reserveTitle1: "عشرون مقعداً.",
    reserveTitle2Italic: "الأسبق بالتسجيل، الأسبق بالتأكيد.",
    reserveBody:
      "اضغط الزر أدناه لمراسلتنا عبر واتساب. سنؤكّد لك توفّر المقاعد ونرسل لك رابط الدفع عبر Whish. يُؤكَّد مقعدك بمجرّد إتمام الدفع.",
    location: "الموقع",
    startDate: "تاريخ البدء",
    startDateValue: "يُحدَّد لاحقاً — يُؤكَّد عند التزام 10 متداولين",
    refundPolicy: "سياسة الاسترداد",
    refundPolicyValue: "غير قابلة للاسترداد · يمكن التأجيل",
  },
  about: {
    kicker: "عن TraderLab",
    h1Line1: "المهارة تُبنى",
    h1Line2Italic: "بقصد ووعي.",
    missionKicker: "المهمّة",
    missionTitle: "نساعد المتداولين على التداول بشكل أفضل.",
    missionBody: [
      "معظم المتداولين يخسرون. ليس لأن السوق صعب أكثر من اللازم، بل لأنّهم تعلّموا أنّه سهل. أُعطوا مؤشّرات بلا سياق، وإشارات بلا بنية، وثقة بلا كفاءة.",
      "TraderLab وُجد ليُغلق هذه الفجوة. نحن نعلّم الفوركس كما يجب أن يُعلَّم: حضورياً، مباشرة، بمسؤولية حقيقية. مجموعات صغيرة. حضور إلزامي. منهج ينتقل من الأساسيات إلى نظام تداول قابل للتطبيق.",
      "يخرج طلّابنا بثلاثة أمور: إطار واضح لقراءة السوق، عملية موثّقة للدخول والخروج من الصفقات، والانضباط لاتّباع هذه العملية في اللحظات التي تهمّ.",
    ],
    principlesKicker: "كيف نعلّم",
    principlesTitle: "أربعة مبادئ. تُحترم دون استثناء.",
    principles: [
      { n: "01", t: "حضوري ومباشر فقط", d: "لا تسجيلات. لا إعادات. إن لم تكن في الغرفة، فلست في المجموعة. هكذا يُفرَض الانتباه." },
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
  },
  meta: {
    siteTitle: "TraderLab — تعليم الفوركس في بيروت",
    siteDescription:
      "تدريب فوركس حضوري ومباشر في الشويفات. من أساسيات المبتدئين إلى الاستراتيجية المتقدّمة وعلم نفس المتداول.",
    aboutTitle: "من نحن — TraderLab",
    aboutDescription:
      "مهمّتنا: مساعدة المتداولين الجدد والقدامى على بناء مهارة حقيقية، لا ثقة زائفة.",
  },
  whatsapp: {
    generalInquiry: "مرحباً TraderLab، أودّ معرفة المزيد عن دورات الفوركس لديكم.",
    reserveTemplate: (t) => `مرحباً TraderLab، أودّ حجز مقعد في دورة "${t}". اسمي ___.`,
  },
  langSwitcher: { ar: "عر", en: "EN" },
};

export const DICTIONARIES: Record<Locale, Dict> = { ar, en };

export function getDict(locale: Locale): Dict {
  return DICTIONARIES[locale];
}
