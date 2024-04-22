import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" bg={"white"} my={5} bottom="0">
    <Box className="container" my="auto">
      <Box className="copyright" textAlign="center" my="auto">
        <span style={{fontSize:"12.8px",fontWeight:"400px"}}>Copyright © Tax Planner 2024</span>
      </Box>
    </Box>
  </Box>
);

export default Footer;
