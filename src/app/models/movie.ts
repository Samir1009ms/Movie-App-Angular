export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  status: string;
  runtime: number | null;
  genres: IGenres[];
}

export interface IGenres {
  id: number;
  name: string;
}
export interface IMovieCredits {
  id: number
  cast: ICast[]
}

export interface ICast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface IMovieDto {
  page: number;
  results: IMovie[];
    total_pages: number;
  total_results: number;
}

export interface IMovieVideoDto {
  id: number;
  results: IMovieVideo[];
}

export interface IMovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface IMovieImages {
  id: number
  backdrops: IBackdrop[]
  posters: IPoster[]
}

export interface IBackdrop {
  aspect_ratio: number
  file_path: string
  height: number
  iso_639_1: any
  vote_average: number
  vote_count: number
  width: number
}

export interface IPoster {
  aspect_ratio: number
  file_path: string
  height: number
  iso_639_1: string
  vote_average: number
  vote_count: number
  width: number
}

