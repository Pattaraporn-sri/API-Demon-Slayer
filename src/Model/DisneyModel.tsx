// models/DemonSlayerCharacter.ts
export interface Pagination {
  totalElements: number;
  elementsOnPage: number;
  currentPage: number;
  totalPages: number;
  previousPage: string | null;
  nextPage: string | null;
}

export interface Character {
  id: number;
  name: string;
  age: number;
  gender: string;
  race: string;
  description: string;
  img: string;
  affiliation_id: number;
  arc_id: number;
  quote: string;
}

export interface DemonSlayerApiResponse {
  pagination: Pagination;
  content: Character[];
}
