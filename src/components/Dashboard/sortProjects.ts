
import { Project } from "@/data/projectsData";

export type SortField = "sector" | "name" | "agency" | "signed";
export type SortDirection = "asc" | "desc";

export function sortProjects(
  projects: Project[],
  sortBy: SortField,
  sortDirection: SortDirection
): Project[] {
  let sorted = [...projects].sort((a, b) => {
    let comparison = 0;
    if (sortBy === "sector") {
      comparison = a.sector.localeCompare(b.sector);
    } else if (sortBy === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === "agency") {
      comparison = a.agency.localeCompare(b.agency);
    } else if (sortBy === "signed") {
      comparison = a.signed === b.signed ? 0 : a.signed ? -1 : 1;
    }
    return sortDirection === "asc" ? comparison : -comparison;
  });
  return sorted;
}
