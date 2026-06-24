'use client';

export default function GlobalError({ error, reset }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0b] text-zinc-100">
      <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <h2 className="text-lg font-semibold text-red-300">Something went wrong</h2>
        <p className="mt-2 text-sm text-zinc-400">
          {error?.message || 'An unexpected error occurred.'}
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
