export interface DemonSlayerApiResponse {
  content: Character[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}

export interface Character {
  [x: string]: any;
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
