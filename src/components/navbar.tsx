'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Logo from './logo';

export default function Navbar() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [languageOpen, setLanguageOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: '#how-it-works', label: t('nav.howItWorks') },
        { href: '#for-talent', label: t('nav.forTalent') },
        { href: '#for-companies', label: t('nav.forCompanies') },
        { href: '#community', label: t('nav.community') },
    ];

    const handleLanguageChange = (nextLocale: 'es' | 'en') => {
        setLanguageOpen(false);
        setMenuOpen(false);
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

                <Logo variant="vertical" width={80} theme='dark'></Logo>

                {/* Nav Desktop */}
                <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[#4a5153] transition-colors hover:text-[#2f3436] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#84c0bf]"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Selector de Idioma Desktop */}
                <div className="relative hidden lg:block">
                    <button
                        type="button"
                        onClick={() => setLanguageOpen(!languageOpen)}
                        aria-expanded={languageOpen}
                        aria-haspopup="listbox"
                        className="flex items-center gap-1.5 rounded-full px-2.5 py-2 text-xs font-bold tracking-wide text-[#4a5153] transition hover:bg-white/80 hover:text-[#2f3436] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84c0bf]"
                    >
                        <span className="flex size-6 items-center justify-center rounded-full bg-[#dcefed] text-[10px] uppercase text-[#3b6362]">
                            {locale}
                        </span>
                        <ChevronDown className={`size-3.5 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {languageOpen && (
                        <div role="listbox" aria-label="Seleccionar idioma" className="absolute right-0 top-12 z-10 min-w-32 rounded-2xl border border-[#dfe6e4] bg-white p-1.5 shadow-xl shadow-[#2f3436]/10">
                            <button
                                type="button"
                                role="option"
                                aria-selected={locale === 'es'}
                                onClick={() => handleLanguageChange('es')}
                                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-bold text-[#2f3436] hover:bg-[#eef5f4]"
                            >
                                <span className="text-sm">ES</span>
                                <span className="font-medium text-[#899192]">Español</span>
                            </button>
                            <button
                                type="button"
                                role="option"
                                aria-selected={locale === 'en'}
                                onClick={() => handleLanguageChange('en')}
                                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-bold text-[#2f3436] hover:bg-[#eef5f4]"
                            >
                                <span className="text-sm">EN</span>
                                <span className="font-medium text-[#899192]">English</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* CTA Secundario Desktop (Estilo Outline / Ghost) */}
                <a
                    href="https://discord.gg/h9FFgKdkRd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-full border border-[#2f3436]/20 bg-white/60 px-5 py-2.5 text-sm font-semibold text-[#2f3436] transition hover:bg-[#2f3436] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#84c0bf] sm:inline-flex items-center"
                >
                    {t('discordCta')} <ArrowRight className="ml-2 size-4" />
                </a>

                {/* Botón Menú Mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 lg:hidden text-[#2f3436]"
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Menú Mobile */}
            {menuOpen && (
                <nav className="mx-4 flex flex-col gap-1 rounded-2xl border border-[#dfe6e4] bg-white p-3 shadow-lg lg:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm font-medium text-[#2f3436] hover:bg-[#eef5f4]"
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="mt-1 flex items-center justify-between rounded-xl bg-[#f7f8f7] px-4 py-3">
                        <span className="text-sm font-medium text-[#4a5153]">{t('languageLabel')}</span>
                        <div className="flex gap-1 rounded-full bg-white p-1">
                            <button
                                type="button"
                                onClick={() => handleLanguageChange('es')}
                                className={`rounded-full px-3 py-1 text-xs font-bold ${locale === 'es' ? 'bg-[#dcefed] text-[#3b6362]' : 'text-[#899192]'}`}
                            >
                                ES
                            </button>
                            <button
                                type="button"
                                onClick={() => handleLanguageChange('en')}
                                className={`rounded-full px-3 py-1 text-xs font-bold ${locale === 'en' ? 'bg-[#dcefed] text-[#3b6362]' : 'text-[#899192]'}`}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    <a
                        href="https://discord.gg/h9FFgKdkRd"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="mt-1 rounded-xl bg-[#2f3436] px-4 py-3 text-center text-sm font-semibold text-white"
                    >
                        {t('discordCta')}
                    </a>
                </nav>
            )}
        </header>
    );
}