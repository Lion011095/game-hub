import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoIosArrowDropdown } from "react-icons/io";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDropdown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
