import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenre from "../Hooks/useGenre";
import getCroppedImageUrl from "../services/image-crop-url";
import GenreSkeleton from "./Genre/GenreSkeleton";
import GenreContainer from "./Genre/GenreContainer";

const GenreList = () => {
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
            <ListItem>
              <GenreContainer>
                <GenreSkeleton key={item} />
              </GenreContainer>
            </ListItem>
          ))}
      </List>
      <List>
        {data.map((genre) => (
          <ListItem>
            <GenreContainer>
              <HStack>
                <Image
                  boxSize={10}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </GenreContainer>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
