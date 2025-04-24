import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SectorSummary, sectorColors } from '@/data/projectsData';

interface SectorChartProps {
  data: SectorSummary[];
}

export function SectorChart({ data }: SectorChartProps) {
  const chartData = data.map((item) => ({
    name: item.sector,
    value: item.totalProjects,
    color: sectorColors[item.sector as keyof typeof sectorColors]
  }));

  // Custom label renderer that returns null to remove text from the middle of the pie chart
  const renderCustomizedLabel = () => null;

  return (
    <div
      className="relative h-full w-full min-h-[340px] flex flex-col items-center justify-center rounded-2xl shadow-lg border
      backdrop-blur-xl bg-white/70 dark:bg-zinc-900/60"
      style={{
        background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 8px #e2d1c333',
        border: '1.5px solid #ece7f6'
      }}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-700 dark:text-gray-200 tracking-tight drop-shadow-sm animate-fade-in">
        توزيع المشاريع حسب المجال
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            innerRadius={48}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={renderCustomizedLabel}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke="#fff"
                strokeWidth={2}
                className="transition-transform duration-300 hover:scale-105"
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              background: 'rgba(255,255,255,0.99)',
              fontWeight: 500,
              boxShadow: "0 2px 8px #93a6be22",
              direction: "rtl"
            }}
            formatter={(value) => [`${value} مشاريع`, '']}
            labelFormatter={(label) => `المجال: ${label}`}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{
              paddingTop: 10,
              direction: 'rtl',
              fontWeight: 600
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
