import { useState } from "react";
import { BarChart3, ClipboardCheck, FileBarChart2 } from "lucide-react";
import { StatCard } from "./StatCard";
import { SectorChart } from "./SectorChart";
import { SigningStatusChart } from "./SigningStatusChart";
import { ProjectsTable } from "./ProjectsTable";
import { ProgressBar } from "./ProgressBar";
import { projectsData, sectorSummaryData, totalStats, Project } from "@/data/projectsData";
import { sortProjects, SortField, SortDirection } from "./sortProjects";
import "@/styles/dashboard.css";

export function Dashboard() {
  // التحكم في حالة الفرز مركزياً
  const [sortBy, setSortBy] = useState<SortField>("sector");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  // إدارة فلاتر الجدول (فلتر المجال وحالة التوقيع)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [signingStatus, setSigningStatus] = useState('all');

  // فلترة وفرز البيانات
  const filterProjects = (projects: Project[]) => {
    return projects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.sector.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'all' || project.sector === selectedSector;
      const matchesStatus =
        signingStatus === 'all' ||
        (signingStatus === 'signed' && project.signed) ||
        (signingStatus === 'unsigned' && !project.signed);
      return matchesSearch && matchesSector && matchesStatus;
    });
  };

  const filteredProjects = filterProjects(projectsData);
  const sortedProjects = sortProjects(filteredProjects, sortBy, sortDirection);

  // إنشاء البيانات القطاعية بناءً على المشاريع الحالية (المعروضة)
  const sectorMap = new Map<string, { 
    sector: string; 
    totalProjects: number; 
    signedProjects: number;
    completionPercentage: number 
  }>();
  
  sortedProjects.forEach(project => {
    const key = project.sector;
    if (!sectorMap.has(key)) {
      sectorMap.set(key, { 
        sector: key, 
        totalProjects: 0, 
        signedProjects: 0,
        completionPercentage: 0 
      });
    }
    const sectorInfo = sectorMap.get(key)!;
    sectorInfo.totalProjects += 1;
    if (project.signed) sectorInfo.signedProjects += 1;
  });
  
  const filteredSectorSummaryData = Array.from(sectorMap.values()).map(sector => ({
    ...sector,
    completionPercentage: sector.totalProjects > 0 ?
      Math.round((sector.signedProjects / sector.totalProjects) * 100)
      : 0,
  }));

  return (
    <div className="container mx-auto py-6 space-y-8 rtl-dashboard" dir="rtl">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight">لوحة اطلاق المشاريع 2025</h1>
        <p className="text-muted-foreground">
          عرض تفاعلي لحالة المشاريع وفقًا للمجال الذي تخدمه، مع توضيح حالة التعاقد
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="إجمالي المشاريع"
          value={totalStats.totalProjects}
          icon={<FileBarChart2 className="h-6 w-6 text-gray-600" />}
        />
        <StatCard
          title="المشاريع الموقعة"
          value={totalStats.signedProjects}
          icon={<ClipboardCheck className="h-6 w-6 text-green-600" />}
          textClass="text-green-600"
        />
        <StatCard
          title="نسبة الإنجاز"
          value={`${totalStats.completionPercentage}%`}
          subtitle={
            <div className="mt-2 w-full">
              <ProgressBar value={totalStats.completionPercentage} />
            </div>
          }
          icon={<BarChart3 className="h-6 w-6 text-blue-600" />}
          textClass="text-blue-600"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <SectorChart data={sectorSummaryData} />
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <SigningStatusChart data={sectorSummaryData} />
        </div>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">فرز المشاريع</h2>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div className="flex-1">
            <label htmlFor="search-projects" className="block text-sm font-medium mb-1">البحث في المشاريع حسب ( المجال , الجهة , المشروع )</label>
            <input 
              id="search-projects"
              placeholder="اكتب اسم المشروع، الجهة، أو المجال..." 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label htmlFor="sector-filter" className="block text-sm font-medium mb-1">المجال</label>
              <select 
                id="sector-filter"
                className="h-10 px-4 py-2 rounded-md border border-gray-300 w-full" 
                value={selectedSector} 
                onChange={e => setSelectedSector(e.target.value)}
              >
                <option value="all">الكل</option>
                {Array.from(new Set(projectsData.map(p => p.sector))).map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium mb-1">حالة التوقيع</label>
              <select 
                id="status-filter"
                className="h-10 px-4 py-2 rounded-md border border-gray-300 w-full" 
                value={signingStatus} 
                onChange={e => setSigningStatus(e.target.value)}
              >
                <option value="all">الكل</option>
                <option value="signed">موقع</option>
                <option value="unsigned">غير موقع</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredSectorSummaryData.length > 0 ? filteredSectorSummaryData.map((sector) => (
          <div key={sector.sector} className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{sector.sector}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">إجمالي المشاريع</p>
                <p className="text-2xl font-bold">{sector.totalProjects}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">المشاريع الموقعة</p>
                <p className="text-2xl font-bold text-green-600">{sector.signedProjects}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-gray-500">نسبة الإنجاز</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-green-600">{sector.completionPercentage}%</p>
                  <ProgressBar 
                    value={sector.completionPercentage} 
                    className="flex-1" 
                  />
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className="col-span-3 text-center text-muted-foreground py-12">
            لا توجد بيانات مطابقة للفلاتر الحالية.
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">قائمة المشاريع</h2>
        </div>
        
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <ProjectsTable
            projects={sortedProjects}
            sortBy={sortBy}
            sortDirection={sortDirection}
            setSortBy={setSortBy}
            setSortDirection={setSortDirection}
            // تمرير دوال الفلترة للمزامنة مع البطاقات السفلية
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
            signingStatus={signingStatus}
            setSigningStatus={setSigningStatus}
          />
        </div>
      </div>
    </div>
  );
}
