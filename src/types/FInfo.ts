export interface FInfo {
  poster_path: string | undefined;
  original_title: string;
  overview: string;
  genres: Genres[];
}
interface Genres {
  name: string;
}
