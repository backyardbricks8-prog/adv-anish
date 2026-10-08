'use client';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 text-center bg-white text-[#111111]">
      <div className="max-w-md mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold mb-2">
          Notice
        </p>
        <h2 className="font-editorial-heading text-3xl sm:text-4xl font-normal text-[#111111] mb-4">
          Something went wrong
        </h2>
        <p className="text-[#444444] text-sm leading-relaxed mb-8">
          An unexpected issue occurred while rendering this view. You may reload the section or contact our chamber directly.
        </p>
        <button
          onClick={() => reset()}
          className="bg-[#800000] hover:bg-[#660000] text-white px-7 py-4 text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
