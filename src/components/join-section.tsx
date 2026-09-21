'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, Check } from 'lucide-react';

export default function JoinSection() {
    const t = useTranslations('JoinSection');
    const [submitted, setSubmitted] = useState(false);

    return (
        <section id="join" className="bg-[#2f3436] px-5 py-20 text-white lg:px-8 lg:py-28">
            <div data-reveal className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
                {/* Newsletter Column */}
                <div>
                    <p className="eyebrow text-[#84c0bf]">{t('newsletter.eyebrow')}</p>
                    <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
                        {t('newsletter.title')}
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                        {t('newsletter.description')}
                    </p>

                    {submitted ? (
                        <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#84c0bf]">
                            <Check className="size-4" /> {t('newsletter.success')}
                        </p>
                    ) : (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setSubmitted(true);
                            }}
                            className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                        >
                            <label htmlFor="email" className="sr-only">
                                {t('newsletter.placeholder')}
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder={t('newsletter.placeholder')}
                                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#84c0bf]"
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-[#84c0bf] px-5 py-3 text-sm font-bold text-[#2f3436] transition hover:bg-[#a5d3d1] cursor-pointer"
                            >
                                {t('newsletter.button')}
                            </button>
                        </form>
                    )}
                </div>

                {/* Community CTA Column */}
                <div className="flex flex-col justify-between border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
                    <div>
                        <p className="eyebrow text-[#84c0bf]">{t('cta.eyebrow')}</p>
                        <h2 className="mt-4 max-w-md text-4xl font-bold leading-tight tracking-[-0.05em]">
                            {t('cta.titlePart1')}{' '}
                            <span className="text-[#84c0bf]">{t('cta.titlePart2')}</span>
                        </h2>
                    </div>
                    <a
                        href="https://discord.gg/h9FFgKdkRd"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#2f3436] transition hover:bg-[#eef5f4]"
                    >
                        {t('cta.button')} <ArrowRight className="ml-3 size-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}