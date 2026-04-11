import Image from "next/image";
import heroLogo from "@/assets/logo-hero-centric.png";

type BrandLockupProps = {
  /** Larger lockup for hero (over video). */
  size?: "default" | "hero";
  className?: string;
};

export function BrandLockup({
  size = "default",
  className = "",
}: BrandLockupProps) {
  const imgClass =
    size === "hero"
      ? "h-auto max-h-[min(52vh,420px)] w-[min(92vw,20rem)] object-contain object-left sm:w-[22rem] md:w-[24rem]"
      : "h-auto w-[min(100%,11rem)] sm:w-[12.5rem] md:w-[14rem]";

  return (
    <div className={`inline-block max-w-full ${className}`}>
      <Image
        src={size === "hero" ? heroLogo : "/logo-centric-group.png"}
        alt="Centric"
        width={size === "hero" ? undefined : 1024}
        height={size === "hero" ? undefined : 1024}
        className={`pointer-events-none select-none drop-shadow-[0_4px_36px_rgba(0,0,0,0.55)] ${imgClass}`}
        priority={size === "hero"}
        sizes={
          size === "hero"
            ? "(max-width:640px) 92vw, (max-width:1024px) 22rem, 24rem"
            : "(max-width:768px) 44vw, 224px"
        }
      />
    </div>
  );
}
