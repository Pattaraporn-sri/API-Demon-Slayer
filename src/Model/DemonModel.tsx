export interface Pagination {
  totalElements: number;
  elementsOnPage: number;
  currentPage: number;
  totalPages: number;
  previousPage: string;
  nextPage: string;
}

export interface Character {
  id?: number;
  name: string;
  age: number;
  gender: string;
  race: string;
  description: string;
  img: string;
  affiliation_id: number;
  arc_id: number;
  quote: string;
  foregroundstyle?: React.CSSProperties; // เพิ่ม foregroundstyle
  backgroundImage?: string; // เพิ่มฟิลด์นี้
}

export interface CharacterResponse {
  pagination: Pagination;
  content: Character[];
}
