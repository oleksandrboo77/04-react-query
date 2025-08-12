import axios from "axios";
import type { Movie } from "../types/movie";

const apiKey = import.meta.env.VITE_TMDB_TOKEN;



export interface GetMoviesResponse {
    results: Movie[];
      page: number;
  total_results: number;
  total_pages: number;
}
   
export const getMovies = async (newQuery: string, page: number = 1): Promise<GetMoviesResponse> => {
    const url = "https://api.themoviedb.org/3/search/movie";
    const response = await axios.get<GetMoviesResponse>(url, {
        params: {
            query: newQuery,
            page,
        },
        headers: {
            Authorization:
                `Bearer ${apiKey}`,
        },
    });
    return response.data;
};