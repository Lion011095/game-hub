import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../../Hooks/useGenre";
import getCroppedImageUrl from "../../services/image-crop-url";
import GenreSkeleton from "./GenreSkeleton";
import GenreContainer from "./GenreContainer";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenre();
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return null;

  return (
    <>
      <List>
        {isLoading &&
          skeleton.map((item) => (
            <ListItem key={item}>
              <GenreContainer>
                <GenreSkeleton />
              </GenreContainer>
            </ListItem>
          ))}
      </List>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <GenreContainer>
              <HStack>
                <Image
                  boxSize={10}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontSize="lg"
                  variant="link"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </GenreContainer>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
