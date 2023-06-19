import React from "react";
import useGenre from "../Hooks/useGenre";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
