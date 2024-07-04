import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// <a href="/movie"> 이런식으로 타이틀 h2에 추가해도 It works. But, 페이지 전체가 리로드 된다. SPA가 아니게 된다.
// 리액트는 페이지 리로드 없이 전환할 수 있는 Link를 제공한다.
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          {/* 이렇게 id값 받아와서 URL에 파라미터로 줄 수 있다. */}
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
