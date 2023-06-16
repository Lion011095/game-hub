import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX="10px" borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
