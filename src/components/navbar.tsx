'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import Logo from './logo';

export default function Navbar() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [languageOpen, setLanguageOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Bloquear el scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Limpieza al desmontar el componente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

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
        <>
            {/* Backdrop con Blur que cubre toda la pantalla al abrir el menú */}
            {menuOpen && (
                <div 
                    aria-hidden="true"
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm transition-opacity lg:hidden"
                />
            )}

            <header className="absolute inset-x-0 top-0 z-50">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

                    <Logo variant="vertical" width={80} theme='dark' />

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

                    {/* Desktop Language Selector */}
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

                    {/* Desktop Secondary CTA */}
                    <a
                        href="https://discord.gg/h9FFgKdkRd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden rounded-full border border-[#2f3436]/20 bg-white/60 px-5 py-2.5 text-sm font-semibold text-[#2f3436] transition hover:bg-[#2f3436] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#84c0bf] sm:inline-flex items-center"
                    >
                        {t('discordCta')} <ArrowRight className="ml-2 size-4" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="rounded-xl p-2 lg:hidden text-[#2f3436] bg-white/80 backdrop-blur-md border border-[#dfe6e4]"
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="absolute inset-x-0 top-full px-4 pt-2 lg:hidden">
                        <nav className="flex flex-col gap-1.5 rounded-3xl border border-[#dfe6e4] bg-white p-4 shadow-2xl shadow-[#2f3436]/20 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#2f3436] transition hover:bg-[#eef5f4]"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <div className="my-1 h-px bg-[#f0f4f3]" />

                            <div className="flex items-center justify-between rounded-2xl bg-[#f7f8f7] px-4 py-3">
                                <span className="text-sm font-medium text-[#4a5153]">{t('languageLabel')}</span>
                                <div className="flex gap-1 rounded-full bg-white p-1 border border-[#dfe6e4]">
                                    <button
                                        type="button"
                                        onClick={() => handleLanguageChange('es')}
                                        className={`rounded-full px-3 py-1 text-xs font-bold transition ${locale === 'es' ? 'bg-[#dcefed] text-[#3b6362]' : 'text-[#899192]'}`}
                                    >
                                        ES
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleLanguageChange('en')}
                                        className={`rounded-full px-3 py-1 text-xs font-bold transition ${locale === 'en' ? 'bg-[#dcefed] text-[#3b6362]' : 'text-[#899192]'}`}
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
                                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[#2f3436] px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-black"
                            >
                                {t('discordCta')} <ArrowRight className="size-4" />
                            </a>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}