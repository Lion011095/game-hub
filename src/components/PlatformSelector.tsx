import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IoIosArrowDropdown } from "react-icons/io";
import usePlatforms from "../Hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDropdown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
