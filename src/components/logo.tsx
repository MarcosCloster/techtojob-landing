import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    variant?: "full" | "icon";
    width?: number;
    height?: number;
    className?: string;
}

export default function Logo({
    variant = "full",
    width = 140,
    height = 40,
    className = "",
}: LogoProps) {
    return (
        <Link
            href="/"
            className={`inline-flex items-center gap-2 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg ${className}`}
            aria-label="Tech to Job - Ir al inicio"
        >
            {variant === "full" ? (
                <Image
                    src="/images/v2Positivo.webp"
                    alt="Tech to Job Logo"
                    width={width}
                    height={height}
                    priority
                    className="h-auto w-auto object-contain"
                />
            ) : (
                <Image
                    src="/images/SímboloDegradado.webp"
                    alt="Tech to Job Símbolo"
                    width={36}
                    height={36}
                    priority
                    className="h-9 w-9 object-contain"
                />
            )}
        </Link>
    );
}