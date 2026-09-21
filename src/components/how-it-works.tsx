'use client';

import { useTranslations } from 'next-intl';
import { MessageSquare, Code2, Rocket, Briefcase } from 'lucide-react';

export default function HowItWorks() {
  const t = useTranslations('HowItWorks');

  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      titleKey: 'steps.01.title',
      textKey: 'steps.01.text',
    },
    {
      number: '02',
      icon: Code2,
      titleKey: 'steps.02.title',
      textKey: 'steps.02.text',
    },
    {
      number: '03',
      icon: Rocket,
      titleKey: 'steps.03.title',
      textKey: 'steps.03.text',
    },
    {
      number: '04',
      icon: Briefcase,
      titleKey: 'steps.04.title',
      textKey: 'steps.04.text',
    },
  ];

  return (
    <section id="como-funciona" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
      <div data-reveal className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-copy">{t('description')}</p>
        </div>

        {/* Contenedor del Grid con Timeline */}
        <div className="relative mt-16">
          {/* Línea conectora del Timeline (Solo visible en Desktop) */}
          <div
            className="pointer-events-none absolute top-7 inset-x-8 hidden h-0.5 bg-gradient-to-r from-[#b7d9d7] via-[#e3e9e7] to-[#84c0bf] lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, titleKey, textKey, icon: Icon }, i) => {
              const isLast = i === steps.length - 1;

              return (
                <article
                  key={number}
                  className={`relative flex flex-col justify-between rounded-3xl border p-6 transition-all duration-300 ${
                    isLast
                      ? 'border-[#84c0bf] bg-[#f0f8f7] shadow-sm'
                      : 'border-[#e3e9e7] bg-[#f7f8f7] hover:border-[#b7d9d7] hover:bg-[#eef5f4]'
                  }`}
                >
                  {/* Header de Card: Nodo del Timeline + Número */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`flex size-11 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                        isLast
                          ? 'bg-[#84c0bf] text-[#2f3436]'
                          : 'bg-white text-[#5d9e9c]'
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isLast ? 'text-[#3b6362]' : 'text-[#78aaa8]'
                      }`}
                    >
                      {number}
                    </span>
                  </div>

                  {/* Cuerpo de la Card */}
                  <div className="mt-10">
                    <h3 className="text-lg font-bold text-[#2f3436]">
                      {t(titleKey)}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#697374]">
                      {t(textKey)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}