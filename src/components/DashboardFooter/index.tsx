import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" bg={"white"} py={"1.5rem"} bottom="0">
    <Box className="container">
      <Box className="copyright" textAlign="center" >
        <span style={{ fontSize: "12.8px", fontWeight: "400px" }}>
          Copyright © Tax Planner 2024
        </span>
      </Box>
    </Box>
  </Box>
);

export default Footer;
