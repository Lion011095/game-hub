import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface GenreContainerProps {
  children: ReactNode;
}

const GenreContainer = ({ children }: GenreContainerProps) => {
  return <Box paddingY={1}>{children}</Box>;
};

export default GenreContainer;
