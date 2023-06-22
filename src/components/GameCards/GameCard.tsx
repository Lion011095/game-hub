import { Game } from "../../Hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-crop-url";
import Emoji from "../Emoji";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => (
  <Card>
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>
      <HStack marginBottom={2} justifyContent="space-between" flexWrap="wrap">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
      <Heading fontSize="2xl">
        {game.name}
        <Emoji rating={game.rating_top} />
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
