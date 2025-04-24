import { useState, useEffect } from "react";
import { Project } from "@/data/projectsData";
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import type { SortField, SortDirection } from "./sortProjects";

const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
}) => <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium px-4 py-2 bg-background border border-input hover:bg-accent ${className || ''}`} {...props}>
    {children}
  </button>;
const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => <input className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ${className || ''}`} {...props} />;

interface ProjectsTableProps {
  projects: Project[];
  className?: string;
  sortBy: SortField;
  sortDirection: SortDirection;
  setSortBy: (value: SortField) => void;
  setSortDirection: (value: SortDirection) => void;
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  selectedSector: string;
  setSelectedSector: (v: string) => void;
  signingStatus: string;
  setSigningStatus: (v: string) => void;
}

export function ProjectsTable({
  projects,
  className,
  sortBy,
  sortDirection,
  setSortBy,
  setSortDirection,
  searchTerm,
  setSearchTerm,
  selectedSector,
  setSelectedSector,
  signingStatus,
  setSigningStatus,
}: ProjectsTableProps) {
  const handleSort = (column: SortField) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({
    column,
  }: {
    column: SortField;
  }) => {
    if (sortBy !== column) return null;
    return <span className="ml-2">{sortDirection === 'asc' ? '▲' : '▼'}</span>;
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-12 text-center font-bold">#</TableHead>
              <TableHead className="cursor-pointer text-right font-bold" onClick={() => handleSort('sector')}>
                المجال <SortIcon column="sector" />
              </TableHead>
              <TableHead className="cursor-pointer text-right font-bold" onClick={() => handleSort('name')}>
                المشروع <SortIcon column="name" />
              </TableHead>
              <TableHead className="cursor-pointer text-right font-bold" onClick={() => handleSort('agency')}>
                الجهة المنفذة <SortIcon column="agency" />
              </TableHead>
              <TableHead className="cursor-pointer text-center font-bold" onClick={() => handleSort('signed')}>
                حالة التوقيع <SortIcon column="signed" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length > 0 ? projects.map((project, index) => (
              <TableRow key={project.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium text-center">{index + 1}</TableCell>
                <TableCell>{project.sector}</TableCell>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.agency}</TableCell>
                <TableCell className="text-center">
                  {project.signed ? 
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <Check className="inline-block mr-1 h-3 w-3" /> موقع
                    </div> : 
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <X className="inline-block mr-1 h-3 w-3" /> غير موقع
                    </div>
                  }
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  لا توجد مشاريع تطابق معايير البحث
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-sm text-muted-foreground text-center">
        إجمالي المشاريع المعروضة: {projects.length}
      </div>
    </div>
  );
}
