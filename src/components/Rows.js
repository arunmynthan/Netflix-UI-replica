import React from "react";
import { useState, useEffect } from "react";
import instance from "axios";
import "./Rows.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

let base_url = `https://image.tmdb.org/t/p/original/`;

function Rows({ title, fetchurl, isLargeRow }) {
  let [movies, setMovies] = useState([]);
  let [trailerurl, setTrailerurl] = useState("");

  useEffect(() => {
    let getData = async () => {
      let request = await instance.get(fetchurl);

      setMovies(request.data.results);

      return request;
    };

    getData();
  }, [fetchurl]);

  let settings = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  let HandleClick = (movie) => {
    if (trailerurl) {
      setTrailerurl("");
    } else {
      movieTrailer(
        movie?.name || movie?.title || movie?.name || movie?.original_name || ""
      )
        .then((url) => {
          let urlparams = new URLSearchParams(new URL(url).search);

          setTrailerurl(urlparams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => {
                HandleClick(movie);
              }}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerurl && <YouTube videoId={trailerurl} opts={settings}></YouTube>}
    </div>
  );
}

export default Rows;
