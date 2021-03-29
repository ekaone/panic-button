import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: () => ({
    html: {
      overflowY: "scroll",
      scrollBehavior: "smooth",
    },
    "html, body": {
      bg: "#1c232e",
    },
  }),
};

const colors = {
  brandButton: {
    bg: "#D35400",
  },
  brandGreen: {
    100: "#5bdb94",
    500: "#1bf57c",
  },
  brandGray: {
    100: "#74777b",
  },
};

export const theme = extendTheme({
  styles,
  colors,
});
