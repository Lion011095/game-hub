import useGenre from "../Hooks/useGenre";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
