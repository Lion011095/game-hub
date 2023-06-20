import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoIosArrowDropdown } from "react-icons/io";

interface SortSelectorProps {
  onSelectSort: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSort, sortOrder }: SortSelectorProps) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSort = sortOrders.find((sort) => sort.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDropdown />}>
        Order by: {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, index) => (
          <MenuItem
            onClick={() => onSelectSort(order.value)}
            value={order.value}
            key={index}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
