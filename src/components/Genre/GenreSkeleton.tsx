import { HStack, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize={10} />
      <Skeleton height={2} width="100px" />
    </HStack>
  );
};

export default GenreSkeleton;
