import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

interface SearchProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: SearchProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
