import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<AiOutlineSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          ref={ref}
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
