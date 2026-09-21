'use client';

import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import Logo from './logo';

interface FooterLink {
    name: string;
    href: string;
}

interface FooterColumn {
    heading: string;
    links: FooterLink[];
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
                        <p className="mt-5 max-w-xs text-sm leading-6 text-gray-300">
                            {t('description')}
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a
                                href="https://www.instagram.com/techtojob"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visita nuestro perfil de Instagram"
                                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M16.5 7.5v.01" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/techtojob/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visita nuestra página de LinkedIn"
                                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 11v5" />
                                    <path d="M8 8v.01" />
                                    <path d="M12 16v-5" />
                                    <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/techtojob"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visita nuestro perfil en X"
                                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                            </a>
                            <a
                                href="https://discord.gg/h9FFgKdkRd"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Únete a nuestro servidor de Discord"
                                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                    <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                    <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                                    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {columns.map((col) => (
                        <div key={col.heading}>
                            <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
                            <ul className="mt-4 flex flex-col gap-3">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-300 transition hover:text-[#84c0bf]"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-300 sm:flex-row sm:justify-between">
                    <span>{t('copyright')}</span>
                    <span>{t('subtext')}</span>
                </div>
            </div>
        </footer>
    );
}