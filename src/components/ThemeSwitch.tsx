import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ThemeSwitch;
