'use client';

import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import Logo from './logo';

interface FooterColumn {
    heading: string;
    links: string[];
}

export default function Footer() {
    const t = useTranslations('Footer');
    const columns = t.raw('columns') as FooterColumn[];

    return (
        <footer className="bg-[#252a2b] px-5 py-12 text-white lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
                    {/* Logo & Description */}
                    <div>
                        <Logo theme='light' width={150} variant='horizontal'></Logo>
                        <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
                            {t('description')}
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                aria-label="X"
                                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                            >
                                <X className="size-4" />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                            >
                                in
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                            >
                                ◎
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {columns.map((col) => (
                        <div key={col.heading}>
                            <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
                            <ul className="mt-4 flex flex-col gap-3">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-white/45 transition hover:text-[#84c0bf]"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:justify-between">
                    <span>{t('copyright')}</span>
                    <span>{t('subtext')}</span>
                </div>
            </div>
        </footer>
    );
}