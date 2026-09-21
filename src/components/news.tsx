'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

interface NewsItem {
    category: string;
    date: string;
    title: string;
    text: string;
}

export default function NewsSection() {
    const t = useTranslations('News');
    const news = t.raw('items') as NewsItem[];

    return (
        <section className="bg-white px-5 py-24 lg:px-8">
            <div data-reveal className="mx-auto max-w-7xl">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="eyebrow">{t('eyebrow')}</p>
                        <h2 className="section-title">{t('title')}</h2>
                    </div>
                    <a
                        href="#join"
                        className="hidden text-sm font-bold md:inline-flex items-center text-[#2f3436] hover:text-[#5d9e9c]"
                    >
                        {t('cta')}
                        <ArrowRight className="ml-1 size-4" />
                    </a>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {news.map((item, index) => (
                        <article key={item.title} className="interactive-card group cursor-pointer p-2 rounded-3xl">
                            <div className="aspect-[1.5] rounded-3xl bg-[#dcefed] p-5">
                                <div className="flex h-full flex-col justify-between rounded-2xl border border-[#b7d9d7] p-5">
                                    <span className="text-xs font-bold text-[#438381]">{item.category}</span>
                                    <span className="text-4xl font-bold tracking-[-0.06em] text-[#5d9e9c]/50">
                                        0{index + 1}
                                    </span>
                                </div>
                            </div>
                            <p className="mt-5 text-xs font-semibold text-[#899192]">{item.date}</p>
                            <h3 className="mt-2 text-lg font-bold leading-snug transition group-hover:text-[#5d9e9c] text-[#2f3436]">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#697374]">{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}