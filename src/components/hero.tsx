'use client';

import { useTranslations } from 'next-intl';
import { Sparkles, ArrowRight, Terminal } from 'lucide-react';
import { CSSProperties, useState } from 'react';

export default function HeroSection() {
    const t = useTranslations('Hero');
    const [heroGlow, setHeroGlow] = useState({ x: 50, y: 50 });

    return (
        <section
            id="home"
            className="hero-section relative flex min-h-screen items-center justify-center bg-[#eef5f4] px-5 py-24 lg:px-8 lg:py-32"
            style={
                {
                    '--hero-x': `${heroGlow.x}%`,
                    '--hero-y': `${heroGlow.y}%`,
                } as CSSProperties
            }
            onPointerMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                setHeroGlow({
                    x: ((event.clientX - rect.left) / rect.width) * 100,
                    y: ((event.clientY - rect.top) / rect.height) * 100,
                });
            }}
        >
            <div className="hero-grid pointer-events-none absolute inset-0" />
            <div className="hero-orb hero-orb-one pointer-events-none absolute" />
            <div className="hero-orb hero-orb-two pointer-events-none absolute" />
            <div className="pointer-events-none absolute -right-24 top-28 size-80 rounded-full bg-[#84c0bf]/20 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.03fr_.97fr]">
                {/* Left Card */}
                <div className="relative">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#badad8] bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#3b6362]">
                        <Sparkles className="size-3.5" />
                        {t('badge')}
                    </div>

                    <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.055em] text-[#2f3436] sm:text-6xl lg:text-[4.25rem]">
                        {t.rich('title', {
                            highlight: (chunks) => (
                                <span className="text-[#4e8886]">{chunks}</span>
                            ),
                        })}
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-[#4a5153] sm:text-lg">
                        {t('description')}
                    </p>

                    <a
                        href="https://discord.gg/h9FFgKdkRd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-9 inline-flex items-center rounded-full bg-[#2f3436] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2f3436]/10 transition hover:-translate-y-0.5 hover:bg-[#444b4d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f3436]"
                    >
                        {t('cta')} <ArrowRight className="ml-3 size-4" />
                    </a>

                    <div className="mt-10 flex items-center gap-3 text-sm text-[#555e60]">
                        <div className="flex -space-x-2" aria-hidden="true">
                            {['ML', 'JC', 'SR', '+'].map((x, i) => (
                                <span
                                    key={x}
                                    className={`flex size-8 items-center justify-center rounded-full border-2 border-[#eef5f4] text-[10px] font-bold ${i === 3
                                            ? 'bg-[#2f3436] text-white'
                                            : 'bg-white text-[#4e8886]'
                                        }`}
                                >
                                    {x}
                                </span>
                            ))}
                        </div>
                        <span>{t('socialProof')}</span>
                    </div>
                </div>

                {/* Right Card */}
                <div className="relative mx-auto w-full max-w-md">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#2f3436] p-6 shadow-2xl shadow-[#2f3436]/20 sm:p-8">

                        {/* Mac-style Window Controls */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex gap-2">
                                <span className="size-3 rounded-full bg-[#ff5f56]" />
                                <span className="size-3 rounded-full bg-[#ffbd2e]" />
                                <span className="size-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-xs text-white/40">developer-profile.ts</span>
                        </div>

                        {/* Code Block */}
                        <div className="mt-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
                            <p className="text-[#84c0bf]">
                                <span className="text-purple-400">const</span> candidate = &#123;
                            </p>
                            <p className="pl-4">
                                <span className="text-sky-300">name</span>: <span className="text-emerald-400">&apos;Dev Talent&apos;</span>,
                            </p>
                            <p className="pl-4">
                                <span className="text-sky-300">resumeFilters</span>: <span className="text-rose-400">false</span>,
                            </p>
                            <p className="pl-4">
                                <span className="text-sky-300">proofOfWork</span>: [
                            </p>
                            <p className="pl-8 text-emerald-400">
                                &apos;projects&apos;, &apos;contributions&apos;, &apos;code&apos;
                            </p>
                            <p className="pl-4">],</p>
                            <p className="pl-4">
                                <span className="text-sky-300">hiredBy</span>: <span className="text-emerald-400">&apos;TechToJob&apos;</span>
                            </p>
                            <p className="text-[#84c0bf]">&#125;;</p>

                            {/* Terminal Output */}
                            <div className="mt-4 border-t border-white/10 pt-4">
                                <p className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                                    <Terminal className="size-4 text-[#84c0bf]" />
                                    <span>&gt; {t('cardStatus')}</span>
                                </p>
                            </div>
                        </div>

                        {/* Footer Status */}
                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-[#84c0bf] animate-pulse" />
                                <span>online</span>
                            </div>
                            <span className="font-mono">techtojob.dev</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}