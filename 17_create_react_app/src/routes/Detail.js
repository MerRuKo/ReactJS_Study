import { useState, useEffect } from "react";
// 리액트 라우터에서는 useParams 훅을 사용하여 URL 파라미터에 접근할 수 있습니다.
import { useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  // useParams는 URL로 넘어온 파라미터 값을 변수에 저장해준다.
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.movie}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img
            src={movie.medium_cover_image}
            alt={movie.title}
            className={styles.movie__img}
          />
          <div>
            <h2 className={styles.movie__title}>{movie.title}</h2>
            <h3 className={styles.movie__year}>Year : {movie.year}</h3>
            <h3 className={styles.movie__rating}>Rating : {movie.rating}</h3>
            <h3 className={styles.movie__summary}>{movie.description_full}</h3>
            <ul className={styles.movie__genres}>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
