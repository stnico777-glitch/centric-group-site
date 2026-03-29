import { siteCopy } from "@/content/siteCopy";

export function ReviewCard() {
  return (
    <div className="absolute bottom-6 right-[var(--container-pad)] z-20 w-[min(100%,18rem)] rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:bottom-10 md:w-[20rem] md:p-6">
      <p className="text-display text-4xl font-bold text-black md:text-5xl">
        {siteCopy.review.stat}
      </p>
      <p className="mt-2 font-sans text-xs leading-relaxed text-neutral-600">
        {siteCopy.review.body}
      </p>
      <div className="mt-4 flex -space-x-2">
        {siteCopy.review.initials.map((initials, i) => (
          <span
            key={initials + i}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-neutral-200 text-[10px] font-semibold text-neutral-700"
          >
            {initials}
          </span>
        ))}
      </div>
    </div>
  );
}
