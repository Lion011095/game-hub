import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { useState } from 'react';

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({config});

export default theme;