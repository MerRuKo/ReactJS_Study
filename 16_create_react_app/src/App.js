import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // 예전 방식 코드
  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
  //   .then((response => response.json()))
  //   .then(json => {
  //     setMovies(json.data.movies)
  //     setLoading(false);
  //   })
  // }, [])

  //  요즘 방식 코드
  //  const getMovies = async() => {
  //   const response = await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //   );
  //   const json = await response.json();
  //   setMovies(json.data.movies)
  //   setLoading(false);
  // }

  // 요즘 방식 코드를 더욱 간략화
  const getMovies = async() => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies)
    setLoading(false);
  }
 
  useEffect(() => {
    getMovies();
  }, []);

  // 몇번이고 나오고 있듯이 반복돼서 생성되는 엘리먼트들은 고유한 key값을 가져야만하므로 유니크한 값을 이용해 부여해준다.
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
       ) : (
        <div>
          {movies.map(movie => (
            <div key={movie.id}> { /* 반복생성엘리먼트 */ }
              <img alt={movie.title} src={movie.medium_cover_image} />
              <h2>{movie.title} ({movie.year})</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li> /* 반복생성엘리먼트 */
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
