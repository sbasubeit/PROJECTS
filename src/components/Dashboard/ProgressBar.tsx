import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  indicatorClassName?: string;
}

export function ProgressBar({
  value,
  max = 100,
  className,
  indicatorClassName,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  // Always return green color regardless of percentage
  const getColorClass = () => {
    return "bg-green-500";
  };

  return (
    <div className={cn("h-4 w-full overflow-hidden rounded-full bg-gray-100", className)}>
      <div
        className={cn(
          "h-full transition-all",
          indicatorClassName || getColorClass()
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
