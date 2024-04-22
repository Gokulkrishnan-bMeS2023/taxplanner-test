import { Box, Button } from "@chakra-ui/react";

export default function NoAccess() {
  return (
    <Box height={"100vh"}>
      <Box
        margin={"1.5rem"}
        boxShadow={"0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)"}
        display={"flex"}
        flexDirection={"column"}
        border={"1px solid #e3e6f0"}
        borderRadius={"10px"}
        bg={"#fff"}
      >
        <Box
          display={"flex"}
          fontSize={"16px"}
          fontWeight={"700"}
          p={"1rem"}
          bg={"#f3f5f9"}
          borderRadius={"10px 10px 0 0"}
          borderBottom={"1px solid #e3e6f0"}
          color={"black"}
        >
          Verify your email address
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"300px"}
          m={{ base: "15px" }}
        >
          <Box
            w={{ base: "100%", md: "520px" }}
            border={"1px solid rgba(0, 0, 0, 0.2)"}
            borderRadius={"6px"}
            fontWeight={400}
            color={"black"}
          >
            <Box borderBottom={"1px solid #e3e6f0"} p={"1rem"} pb={6}>
              We've sent an email to verify your account. Please verify your
              email address to get full access and file your Income Tax return.
              Click the resend button if you don't receive verification mail.
            </Box>
            <Box display={"flex"} p={"1rem"} justifyContent={"center"}>
              <Button
                color={"#DFE4FD"}
                bg={"#2D50D6"}
                borderColor={"#2D50D6"}
                p={"6px 12px"}
                _hover={{
                  bgColor: "#01ACF1",
                }}
              >
                Resend
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
