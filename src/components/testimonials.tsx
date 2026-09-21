'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    initials: string;
    quote: string;
}

export default function Testimonials() {
    const t = useTranslations('Testimonials');
    const testimonials = t.raw('items') as Testimonial[];

    return (
        <section className="bg-[#f7f8f7] px-5 py-24 lg:px-8">
            <div data-reveal className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <p className="eyebrow">{t('eyebrow')}</p>
                        <h2 className="section-title">{t('title')}</h2>
                    </div>
                    <a
                        href="#join"
                        className="text-sm font-bold underline decoration-[#84c0bf] decoration-2 underline-offset-8"
                    >
                        {t('cta')}
                        <ArrowRight className="ml-2 inline size-4" />
                    </a>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="interactive-card rounded-3xl border border-[#e3e9e7] bg-white p-6"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-[#dcefed] text-xs font-bold text-[#438381]">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#2f3436]">{testimonial.name}</p>
                                        <p className="text-xs text-[#899192]">{testimonial.role}</p>
                                    </div>
                                </div>
                                <ExternalLink className="size-4 text-[#aab4b4]" />
                            </div>
                            <p className="mt-7 text-sm leading-6 text-[#596264]">
                                “{testimonial.quote}”
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}