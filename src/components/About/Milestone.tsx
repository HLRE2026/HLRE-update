interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function Milestone({ year, title, description, isLast = false }: MilestoneProps) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-[11px] top-[24px] w-[2px] h-full bg-emerald-200" />
      )}
      <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full bg-emerald-600 border-4 border-white shadow-sm" />
      <div className="pt-1">
        <span className="text-sm font-semibold text-emerald-600">{year}</span>
        <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}