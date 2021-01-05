const api_key="50f3f8a2e4a15b4bb8dc3ddb978aac0b";


export const requests={
    Trending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    NetflixOriginals:`/discover/movie?api_key=${api_key}&with_networks=123`,
    TopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
    ActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    ComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    HorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    RomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    DocumentariesMovies:`/discover/movie?api_key=${api_key}&with_genres=99`
}