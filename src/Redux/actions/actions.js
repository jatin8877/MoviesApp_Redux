export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_MOVIES_HINDI = 'LOAD_MOVIES_HINDI';

export function loadMovies(hollywoodmovies) {
  return {
    type: LOAD_MOVIES,
  };
}

export function loadMoviesHindi(bollywoodmovies) {
  return {
    type: LOAD_MOVIES_HINDI,
  };
}
