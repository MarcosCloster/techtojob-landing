'use client';

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

export default function ForTalent() {
  const t = useTranslations('ForTalent');

  const bullets = [
    t('bullets.01'),
    t('bullets.02'),
    t('bullets.03'),
  ];

  const stackTechs = ['React', 'TypeScript'];

  return (
    <section id="for-talent" className="px-5 py-24 lg:px-8 lg:py-32">
      <div data-reveal className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        
        {/* Left Column */}
        <div className="order-2 lg:order-1">
          <div className="rounded-[2rem] bg-[#2f3436] p-6 text-white shadow-2xl shadow-[#2f3436]/10 sm:p-8">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="font-mono text-xs text-[#84c0bf]">
                /perfil/comunidad
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#84c0bf]/15 px-3 py-1 text-xs font-medium text-[#84c0bf]">
                <span className="size-1.5 rounded-full bg-[#84c0bf] animate-pulse" />
                {t('card.status')}
              </span>
            </div>

            {/* User Info */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#84c0bf] text-xl font-bold text-[#2f3436]">
                MC
              </div>
              <div>
                <p className="font-semibold text-white">María C. García</p>
                <p className="text-sm text-white/70">Frontend · Madrid</p>
              </div>
            </div>

            {/* Details */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                <p className="text-xs text-white/50">{t('card.stackLabel')}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {stackTechs.map((tech) => (
                    <span key={tech} className="rounded-lg bg-white/10 px-2 py-0.5 text-xs font-medium text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                <p className="text-xs text-white/50">{t('card.levelLabel')}</p>
                <p className="mt-2 text-sm font-medium text-white">{t('card.levelValue')}</p>
              </div>
            </div>

            {/* Actual Project */}
            <div className="mt-3 rounded-2xl bg-white/5 p-4 border border-white/5">
              <p className="text-xs text-white/50">{t('card.workingOnLabel')}</p>
              <p className="mt-2 text-sm font-medium text-white/90">
                {t('card.workingOnValue')}
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Copywriting and Bullets */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-copy">{t('description')}</p>

          <ul className="mt-8 flex flex-col gap-4">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#2f3436]">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#d9eeec] text-[#438381]">
                  <Check className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}