'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Users, Trophy } from 'lucide-react';

export default function ForCompanies() {
    const t = useTranslations('ForCompanies');

    return (
        <section id="for-companies" className="bg-[#dcefed] px-5 py-24 lg:px-8 lg:py-32">
            <div data-reveal className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
                {/* Columna Izquierda: Información Principal */}
                <div>
                    <p className="eyebrow">{t('eyebrow')}</p>
                    <h2 className="section-title">{t('title')}</h2>
                    <p className="section-copy">{t('description')}</p>

                    <a href="#join" className="mt-8 inline-flex items-center text-sm font-bold text-[#2f3436] underline decoration-[#5d9e9c] decoration-2 underline-offset-8 transition-colors hover:text-[#5d9e9c]">
                        {t('cta')} <ArrowRight className="ml-2 size-4" />
                    </a>
                </div>

                {/* Columna Derecha: Tarjetas Desplazadas */}
                <div className="grid gap-4 sm:grid-cols-2">
                    {/* Tarjeta 1: Evalúa de verdad */}
                    <article className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <Users className="size-6 text-[#5d9e9c]" />
                        <h3 className="mt-10 text-xl font-bold text-[#2f3436]">
                            {t('cards.evaluate.title')}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#697374]">
                            {t('cards.evaluate.description')}
                        </p>
                    </article>

                    {/* Tarjeta 2: Construye marca */}
                    <article className="rounded-3xl bg-[#2f3436] p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:translate-y-8">
                        <Trophy className="size-6 text-[#84c0bf]" />
                        <h3 className="mt-10 text-xl font-bold text-white">
                            {t('cards.brand.title')}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/60">
                            {t('cards.brand.description')}
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}