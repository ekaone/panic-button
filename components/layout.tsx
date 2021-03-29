import React from "react";
import { Box } from "@chakra-ui/react";

interface PropsChildren {
  children: React.ReactNode;
}

function Layout({ children }: PropsChildren) {
  return (
    <Box w="100%" h="100vh">
      {children}
    </Box>
  );
}

export default Layout;
