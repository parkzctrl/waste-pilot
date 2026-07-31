export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal-950"
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-5">
        <span className="flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-accent text-xl font-bold text-charcoal-950">
          A
        </span>
        <span className="relative h-1 w-32 overflow-hidden rounded-full bg-white/10">
          <span className="absolute inset-y-0 left-0 w-1/3 animate-[loading-bar_1.2s_ease-in-out_infinite] rounded-full bg-accent" />
        </span>
      </div>
      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
