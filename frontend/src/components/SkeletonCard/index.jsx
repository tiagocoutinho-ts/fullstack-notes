export function SkeletonCard() {

  return (
    <div className="h-50 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
      <div className="h-6 bg-slate-200 rounded-md w-3/4 animate-pulse mb-2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-100 rounded animate-pulse w-full"></div>
        <div className="h-4 bg-slate-100 rounded animate-pulse w-5/6"></div>
        <div className="h-4 bg-slate-100 rounded animate-pulse w-4/6"></div>
      </div>
    </div>
  );
}