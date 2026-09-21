'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CommunitySection() {
    const t = useTranslations('Community');

    return (
        <section id="community" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
            <div data-reveal className="mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Bloque 1: Torneos (2 Columnas) */}
                    <div className="feature-panel relative overflow-hidden rounded-[2rem] bg-[#2f3436] p-8 text-white lg:col-span-2 lg:p-12">
                        <p className="eyebrow text-[#84c0bf]">{t('tournaments.eyebrow')}</p>
                        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
                            {t('tournaments.title')}
                        </h2>
                        <p className="mt-5 max-w-lg text-sm leading-6 text-white/60">
                            {t('tournaments.description')}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-2">
                            <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
                                {t('tournaments.badge1')}
                            </span>
                            <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
                                {t('tournaments.badge2')}
                            </span>
                            <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
                                {t('tournaments.badge3')}
                            </span>
                        </div>

                        <a
                            href="#join"
                            className="mt-10 inline-flex items-center rounded-full bg-[#84c0bf] px-5 py-3 text-sm font-bold text-[#2f3436] transition-colors hover:bg-[#a5d3d1]"
                        >
                            {t('tournaments.cta')}
                            <ArrowRight className="ml-2 size-4" />
                        </a>
                    </div>

                    {/* Bloque 2: Networking (1 Columna) */}
                    <div className="flex flex-col justify-between rounded-[2rem] border border-[#e3e9e7] bg-[#f7f8f7] p-8">
                        <div>
                            <p className="eyebrow">{t('networking.eyebrow')}</p>
                            <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[#2f3436]">
                                {t('networking.title')}
                            </h3>
                            <p className="mt-4 text-sm leading-6 text-[#697374]">
                                {t('networking.description')}
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-3 border-t border-[#dfe6e4] pt-5 text-sm font-semibold text-[#2f3436]">
                            <span className="flex size-9 items-center justify-center rounded-xl bg-white text-[#5d9e9c] shadow-sm">
                                <MessageCircle className="size-4" />
                            </span>
                            {t('networking.footer')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}