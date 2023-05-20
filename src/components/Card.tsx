import { Box, Center } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Center>
      <Box minWidth='30%' backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      { children }
    </Box>
    </Center>
  );
};
