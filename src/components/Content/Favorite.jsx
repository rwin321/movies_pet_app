import { useEffect } from "react";
import { useSelector } from "react-redux";
import Movie from "./Movies/Movie";

const Favorite = () => {
  const favorite = useSelector((state) => state.movies.favorite);
  useEffect(() => {}, [favorite]);

  return (
    <section className="favorite">
      <header className="favorite__header">
        <h2>
          You have <span>{favorite.length}</span>
          {favorite.length === 1 ? " movie" : " movies"} in your favorites!
        </h2>
      </header>
      <main className="favorite__content">
        {favorite &&
          favorite.map((movie) => {
            return <Movie key={movie.id} movie={movie} type={"favorite"} />;
          })}
      </main>
    </section>
  );
};

export default Favorite;
