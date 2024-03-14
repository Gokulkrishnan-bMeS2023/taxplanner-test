import { Box, Center, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Box p={7} color={"#DFE4FD"} bgColor={"#000B1C"}>
        <Flex justify={"center"} align={"center"}>
          <Box>
            <Center>Copyright &#169; Tax Planner</Center>
            <Box mt={1}>
              Powered by&nbsp;
              <Box
                as={Link}
                href={"https://www.bmesolutions.in/"}
                target="_blank"
                borderBottom={"1px solid #DFE4FD"}
                fontWeight={"bold"}
                _hover={{ color: "#01acf1" }}
              >
                BM e-Solutions
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}