import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieDetailsCast from "./MovieDetailsCast";
import MovieDetailsBooking from "./MovieDetailsBooking";
import MovieDetailsReviews from "./MovieDetailsReviews";

const DUMMY_API_RESPONSE = {
  id: 1,
  title: "The Haunting",
  backgroundImg: "/path/to/haunting_bg.jpg",
  posterImg: "/path/to/haunting_poster.jpg",
  genres: ["Horror", "Mystery"],
  rating: 3.5,
  description: "A family moves into a mansion with a dark past, only to discover they're not alone. Terrifying and atmospheric.",
  director: "James Wan Jr.",
  language: "English",
  cast: [
    { id: 101, name: "Emily Watson", role: "Lead", img: "" },
    { id: 102, name: "David Miller", role: "Supporting", img: "" },
    { id: 103, name: "Sophie Turner", role: "Cameo", img: "" },
  ],
  reviews: [
    /* ... */
  ],
};

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMovieData(DUMMY_API_RESPONSE);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading || !movieData) {
    return <div className="text-center p-10 min-h-screen">Loading...</div>;
  }

  return (
    <div>
      <MovieDetailsHeader movieData={movieData} />
      <MovieDetailsCast castData={movieData.cast} />
      <MovieDetailsBooking movieData={movieData} />
    </div>
  );
};

export default MovieDetails;
