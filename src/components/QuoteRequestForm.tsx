"use client";

import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import { useState } from "react";
import {
  IconFileText,
  IconLayers,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUser,
} from "@/components/icons/ThemeIcons";
import { useLocale } from "@/context/LocaleContext";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FieldShell({
  icon: Icon,
  variant,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  variant: "vision" | "footer";
  children: ReactNode;
}) {
  const shell =
    variant === "vision"
      ? "border-border bg-background/85"
      : "border-white/15 bg-black/35 backdrop-blur-sm";
  const iconWrap =
    variant === "vision"
      ? "border-accent/20 bg-pill-bg/80"
      : "border-accent/35 bg-white/[0.06]";
  return (
    <div
      className={`flex min-h-[42px] items-center gap-2 rounded-full border pl-2 pr-1 transition focus-within:border-accent/45 focus-within:ring-1 focus-within:ring-accent/25 ${shell}`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-accent ${iconWrap}`}
        aria-hidden
      >
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </div>
  );
}

const inputInnerVision =
  "min-w-0 flex-1 rounded-full border-0 bg-transparent py-2 pr-3 font-sans text-[13px] text-foreground outline-none ring-0 placeholder:text-muted focus:ring-0";

const inputInnerFooter =
  "min-w-0 flex-1 rounded-full border-0 bg-transparent py-2 pr-3 font-sans text-[13px] text-foreground outline-none ring-0 placeholder:text-foreground/45 focus:ring-0";

export type QuoteRequestFormProps = {
  variant: "vision" | "footer";
  /** Unique prefix for input ids when multiple forms exist on one page */
  idPrefix: string;
};

export function QuoteRequestForm({ variant, idPrefix }: QuoteRequestFormProps) {
  const { copy } = useLocale();
  const v = copy.vision;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [projectType, setProjectType] = useState("");

  const inputInner = variant === "vision" ? inputInnerVision : inputInnerFooter;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(copy.ui.quoteEmailSubject);
    const typeLabel =
      v.quoteProjectTypes.find((o) => o.value === projectType)?.label ??
      projectType;
    const body = encodeURIComponent(
      [
        `${copy.ui.quoteEmailName}: ${name}`,
        `${copy.ui.quoteEmailEmail}: ${email}`,
        `${copy.ui.quoteEmailPhone}: ${phone}`,
        `${copy.ui.quoteEmailZip}: ${zip}`,
        `${copy.ui.quoteEmailProjectType}: ${typeLabel || copy.ui.quoteEmailNotSelected}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${copy.contact.email}?subject=${subject}&body=${body}`;
  }

  const formBody = (
    <form
      onSubmit={handleSubmit}
      className={
        variant === "vision"
          ? "relative z-10 flex w-full flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-3.5 md:px-6 md:pb-6 md:pt-4"
          : "relative z-10 flex w-full flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5"
      }
    >
      <div
        className={
          variant === "vision"
            ? "mb-3 flex shrink-0 -translate-x-1 -translate-y-px items-center justify-center gap-2 border-b border-slate-900/15 pb-3 sm:-translate-x-1.5 sm:-translate-y-0.5"
            : "mb-4 flex shrink-0 items-center justify-center gap-2.5 border-b border-white/10 pb-4"
        }
      >
        <span
          className={
            variant === "vision"
              ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-slate-950/90 text-accent shadow-sm sm:h-10 sm:w-10"
              : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/45 bg-accent/10 text-accent shadow-[0_0_24px_rgba(196,168,90,0.12)]"
          }
          aria-hidden
        >
          <IconFileText
            className={
              variant === "vision"
                ? "h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5"
                : "h-5 w-5"
            }
          />
        </span>
        <div className="text-center">
          <h3
            className={
              variant === "vision"
                ? "font-sans text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 sm:text-[0.8125rem]"
                : "font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-foreground"
            }
          >
            {v.quoteFormTitle}
          </h3>
          {variant === "footer" && (
            <p className="mt-1.5 max-w-[18rem] font-sans text-xs leading-snug text-foreground/60">
              {copy.contact.quoteLead}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        <FieldShell icon={IconUser} variant={variant}>
          <label htmlFor={`${idPrefix}-name`} className="sr-only">
            {v.quoteFields.name}
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={v.quoteFields.name}
            className={inputInner}
          />
        </FieldShell>

        <FieldShell icon={IconMail} variant={variant}>
          <label htmlFor={`${idPrefix}-email`} className="sr-only">
            {v.quoteFields.email}
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={v.quoteFields.email}
            className={inputInner}
          />
        </FieldShell>

        <FieldShell icon={IconPhone} variant={variant}>
          <label htmlFor={`${idPrefix}-phone`} className="sr-only">
            {v.quoteFields.phone}
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={v.quoteFields.phone}
            className={inputInner}
          />
        </FieldShell>

        <FieldShell icon={IconMapPin} variant={variant}>
          <label htmlFor={`${idPrefix}-zip`} className="sr-only">
            {v.quoteFields.zip}
          </label>
          <input
            id={`${idPrefix}-zip`}
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            required
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder={v.quoteFields.zip}
            className={inputInner}
          />
        </FieldShell>

        <div>
          <FieldShell icon={IconLayers} variant={variant}>
            <label htmlFor={`${idPrefix}-project`} className="sr-only">
              {v.quoteProjectTypeLabel}
            </label>
            <div className="relative min-w-0 flex-1">
              <select
                id={`${idPrefix}-project`}
                name="projectType"
                required
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className={`${inputInner} w-full cursor-pointer appearance-none pr-8 py-2`}
              >
                {v.quoteProjectTypes.map((opt) => (
                  <option
                    key={opt.value || "placeholder"}
                    value={opt.value}
                    disabled={opt.value === ""}
                    className={
                      variant === "vision"
                        ? "bg-pill-bg text-foreground"
                        : "bg-[#0c121c] text-foreground"
                    }
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className={`pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 ${variant === "vision" ? "text-muted" : "text-foreground/45"}`}
              />
            </div>
          </FieldShell>
        </div>
      </div>

      <button
        type="submit"
        className={
          variant === "vision"
            ? "mt-3 w-full shrink-0 rounded-full bg-accent px-4 py-2.5 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-accent/90 sm:py-3"
            : "mt-4 w-full shrink-0 rounded-full bg-accent px-4 py-3 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-[0_8px_28px_rgba(196,168,90,0.25)] transition hover:bg-accent/90"
        }
      >
        {v.quoteCta}
      </button>
    </form>
  );

  if (variant === "footer") {
    return (
      <div className="relative w-full max-w-[min(100%,26rem)]">
        <div
          className="pointer-events-none absolute -inset-1 rounded-[1.125rem] bg-gradient-to-br from-accent/20 via-transparent to-accent/5 opacity-90 blur-md"
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-[0_20px_56px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.06]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_0%,rgba(196,168,90,0.07),transparent_55%)]"
            aria-hidden
          />
          {formBody}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[min(100%,28rem)] shrink-0 lg:mx-0 lg:mt-0 lg:w-[min(100%,28rem)]">
      <div
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/15 via-transparent to-transparent opacity-80 blur-sm"
        aria-hidden
      />
      <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-border/70 shadow-[0_16px_48px_rgba(0,0,0,0.32)]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/quote-tile.png"
            alt=""
            fill
            unoptimized
            className="object-cover object-center scale-[1.55]"
            sizes="(max-width: 768px) 100vw, 448px"
            priority={false}
          />
        </div>
        {formBody}
      </div>
    </div>
  );
}
