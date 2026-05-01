import type { Metadata } from "next";
import { LOCALES, type Locale, dirFor, isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDict(params.locale);
  return {
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);

  return (
    <html lang={locale} dir={dirFor(locale)}>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
