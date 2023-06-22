import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCards/GameCard";
import GameCardSkeleton from "./GameCards/GameCardSkeleton";
import GameCardContainer from "./GameCards/GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding="10px"
    >
      {isLoading &&
        skeleton.map((item) => (
          <GameCardContainer key={item}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
