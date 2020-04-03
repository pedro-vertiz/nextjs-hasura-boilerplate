import React from "react";
import { NextComponentType } from "next";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";

import Navbar from "../components/navbar";

const App = ({
  Component,
  pageProps
}: {
  Component: NextComponentType;
  pageProps: any;
}) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box fontSize="sm">
        <Navbar isAuthenticated={pageProps.isAuthenticated} />
        <Box bg="gray.50">
          <Box minH="100vh" maxW="6xl" w="full" mx="auto" p={4}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
