import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    variant?: "vertical" | "horizontal" | "icon";
    theme?: "dark" | "light";
    width?: number;
    height?: number;
    className?: string;
}

export default function Logo({
    variant = "vertical",
    theme = "dark",
    width = 140,
    height = 40,
    className = "",
}: LogoProps) {
    const getLogoSource = () => {
        if (variant === "icon") {
            return "/images/SímboloDegradado.webp";
        }

        if (variant === "horizontal") {
            return theme === "dark" ? "/images/v1Positivo.webp" : "/images/v1Negativo.webp";
        }

        return theme === "dark" ? "/images/v2Positivo.webp" : "/images/v2Negativo.webp";
    };

    return (
        <Link
            href="/"
            className={`inline-flex items-center gap-2 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg ${className}`}
            aria-label="Tech to Job - Go to homepage"
        >
            <Image
                src={getLogoSource()}
                alt="Tech to Job Logo"
                width={variant === "icon" ? 36 : width}
                height={variant === "icon" ? 36 : height}
                priority
                className={`object-contain ${variant === "icon" ? "h-9 w-9" : "h-auto w-auto"}`}
            />
        </Link>
    );
}