import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  genre?: string;
  platform?: string;
}

const GameHeading = ({ genre, platform }: GameHeadingProps) => {
  return (
    <Heading marginBottom={5} fontSize="5xl">
      {platform} {genre} Games
    </Heading>
  );
};

export default GameHeading;
