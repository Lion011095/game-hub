import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<AiOutlineSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
