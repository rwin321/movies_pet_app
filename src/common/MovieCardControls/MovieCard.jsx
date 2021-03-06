import React from "react";
import Card from "react-bootstrap/Card";
import MovieControls from "./MovieControls";
import movie_alt from "../../assets/imgs/movie_alt.jpg";

const MovieCard = ({ movie, type }) => {
  return (
    <Card className="card">
      <Card.Body className="card__body">
        <Card.Img
          className="card__img"
          variant="top"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : movie_alt
          }
          alt="MovieCover"
        />
        <Card.Title className="title">
          {movie.title || movie.original_name}
        </Card.Title>
        <Card.Text className="card__text">
          {movie.release_date ? movie.release_date : "no date info"}
        </Card.Text>
        <Card.Text className="card__rating">{movie.vote_average}</Card.Text>
        <Card.Subtitle className="DownTitle">
          {movie.media_type === "tv" ? "TV Series" : "Movie"}
        </Card.Subtitle>

        <MovieControls type={type} movie={movie} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
