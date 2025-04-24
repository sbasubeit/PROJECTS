
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SectorSummary, sectorColors } from '@/data/projectsData';

interface SigningStatusChartProps {
  data: SectorSummary[];
}

export function SigningStatusChart({ data }: SigningStatusChartProps) {
  const chartData = data.map((item) => ({
    name: item.sector,
    "مشاريع موقعة": item.signedProjects,
    "مشاريع غير موقعة": item.totalProjects - item.signedProjects,
    total: item.totalProjects,
    color: sectorColors[item.sector as keyof typeof sectorColors]
  }));

  return (
    <div
      className="relative h-full w-full min-h-[320px] flex flex-col rounded-2xl shadow-lg p-6 border backdrop-blur-xl 
      bg-white/80 dark:bg-zinc-900/70"
      style={{
        background: 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,0.85) 91.1%)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 8px #e2d1c333',
        border: '1.5px solid #ece7f6'
      }}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-center text-gray-700 dark:text-gray-200 tracking-tight animate-fade-in">
        حالة توقيع المشاريع حسب المجال
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
          barCategoryGap={22}
          barGap={6}
        >
          <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#d9e0ef" />
          <XAxis 
            type="number" 
            tick={{ fontSize: 14, fill: "#7E69AB" }} 
            axisLine={{ stroke: "#ded4ed" }} 
            tickLine={false} 
          />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={100}
            tick={{ fontSize: 15, fontWeight: 700, fill: "#40336a" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 11,
              background: 'rgba(255,255,255,0.99)',
              fontWeight: 500,
              boxShadow: "0 2px 8px #8b5cf622",
              direction: "rtl"
            }}
            formatter={(value: number, name: string) => [`${value} مشاريع`, name]}
            labelFormatter={(label) => `المجال: ${label}`}
            itemStyle={{ color: "#7E69AB", fontWeight: 600 }}
            labelStyle={{ color: "#8B5CF6", fontWeight: 700 }}
          />
          <Legend 
            verticalAlign="top" 
            align="left"
            iconType="circle"
            wrapperStyle={{
              top: -10,
              left: 0,
              lineHeight: '24px',
              direction: 'rtl',
              fontWeight: 600,
              fontSize: 15,
              color: "#7E69AB",
              paddingBottom: 12
            }}
          />
          <Bar 
            dataKey="مشاريع موقعة" 
            fill="url(#signed-gradient)" 
            radius={[16, 16, 16, 16]}
            className="transition-transform duration-200 hover:scale-105"
          />
          <Bar 
            dataKey="مشاريع غير موقعة" 
            fill="url(#unsigned-gradient)"
            radius={[16, 16, 16, 16]}
            className="transition-transform duration-200 hover:scale-105"
          />
          <defs>
            <linearGradient id="signed-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#33C3F0" />
            </linearGradient>
            <linearGradient id="unsigned-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
