
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number | string;
  subtitle?: string | React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  textClass?: string;
}

export function StatCard({ title, value, subtitle, icon, className, textClass }: StatCardProps) {
  return (
    <div className={cn(
      "rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md", 
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className={cn("text-3xl font-bold", textClass)}>
            {value}
          </div>
          {subtitle && (
            <div className="mt-1 text-xs text-gray-500">{subtitle}</div>
          )}
        </div>
        {icon && (
          <div className="rounded-full bg-gray-100 p-3">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
