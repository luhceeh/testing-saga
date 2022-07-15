export interface AnimeDataType {
  malId: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  title_english: string;
  status: string;
  score: number;
  aired: {
    from: string;
    to: string;
  };
}

export interface AnimeResultsDataType {
  loadingAnimes: boolean;
  animes: AnimeDataType[];
  pagination: {
    current_page: number;
    has_next_page: boolean;
  };
}

export interface AnimeFilterDataType {
  letter: string;
  page: number;
  limit: number;
  score?: number[];
  startDate?: string;
  endDate?: string;
  status?: string[];
}
