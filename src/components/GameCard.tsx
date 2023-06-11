import { Game } from "../hooks/UseGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
