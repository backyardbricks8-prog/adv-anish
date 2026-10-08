import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 text-center bg-white text-[#111111]">
      <div className="max-w-md mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#800000] font-semibold mb-2">
          404 Error
        </p>
        <h1 className="font-editorial-heading text-4xl sm:text-5xl font-normal text-[#111111] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#444444] text-sm leading-relaxed mb-8">
          The requested page could not be found. Please return to the homepage or contact chamber reception directly.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#800000] hover:bg-[#660000] text-white px-7 py-4 text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          Return to Chamber Home
        </Link>
      </div>
    </div>
  );
}
