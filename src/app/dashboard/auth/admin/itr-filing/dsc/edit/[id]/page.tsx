import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";

export default function OtherServicesEdit() {
  return (
    <Box pt={"120px"} px={{ base: "1rem", md: "3rem" }} mb={6}>
      <Text as={"h2"} fontWeight={600}>
        MSME Registration
      </Text>
      <Box
        mt={4}
        boxShadow={"0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)"}
        borderRadius={"10px"}
      >
        <Box
          p={"1rem"}
          bg={"#f3f5f9"}
          border={"1px solid #e3e6f0"}
          borderRadius={"10px 10px 0 0"}
        ></Box>
        <Box
          p={"1.25rem"}
          bg={"#fff"}
          border={"1px solid #e3e6f0"}
          borderRadius={"0 0 10px 10px"}
        >
          <Flex
            w={{ base: "100%", md: "50%" }}
            flexDir={{ base: "column", md: "row" }}
            justify={"space-between"}
            mt="1.5rem"
          >
            <FormLabel>Copy of PAN</FormLabel>
            <Link style={{ color: "#02ABEF" }} href={"#"}>
              Copy of PAN Data
            </Link>
          </Flex>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <FormControl id="Aadhaar No">
            <FormLabel>Aadhaar No</FormLabel>
            <Input
              type="text"
              disabled
              bg="#eaecf4"
              opacity={1}
              border={"1px solid #CCC"}
              h={"50px"}
              w={{ base: "100%", md: "50%" }}
            />
          </FormControl>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <FormControl id="Address">
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              disabled
              bg="#eaecf4"
              opacity={1}
              border={"1px solid #CCC"}
              h={"50px"}
              w={{ base: "100%", md: "50%" }}
            />
          </FormControl>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <Flex
            w={{ base: "100%", md: "50%" }}
            flexDir={{ base: "column", md: "row" }}
            justify={"space-between"}
          >
            <FormLabel>Passport Size Photo</FormLabel>
            <Link style={{ color: "#02ABEF" }} href={"#"}>
              Passport Data
            </Link>
          </Flex>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <Flex
            w={{ base: "100%", md: "50%" }}
            flexDir={{ base: "column", md: "row" }}
            justify={"space-between"}
          >
            <FormLabel id="ImportExportCertificate">
              Import Export Certificate
            </FormLabel>
            <Link style={{ color: "#02ABEF" }} href={"#"}>
              Import Export Data
            </Link>
          </Flex>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <FormControl id="MobileNumber">
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="number"
              disabled
              bg="#eaecf4"
              opacity={1}
              border={"1px solid #CCC"}
              h={"50px"}
              w={{ base: "100%", md: "50%" }}
            />
          </FormControl>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              disabled
              bg="#eaecf4"
              opacity={1}
              border={"1px solid #CCC"}
              h={"50px"}
              w={{ base: "100%", md: "50%" }}
            />
          </FormControl>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <Flex
            align={"center"}
            gap={6}
            flexDirection={{ base: "column", md: "row" }}
          >
            <FormControl>
              <FormLabel fontWeight={"bold"} id="status">
                Status
              </FormLabel>
              <Select height={"50px"}>
                <option value="Draf">Draf</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
                <option value="Declined">Declined</option>
                <option value="Correction Required">Correction Required</option>
              </Select>
            </FormControl>
            <FormControl id="remarks" isRequired>
              <FormLabel fontWeight={"bold"}>Remarks</FormLabel>
              <Textarea rows={2} />
            </FormControl>
          </Flex>
          <Flex justify={"flex-end"} gap={4} mt={4}>
            <Button
              color={"#2D50D6"}
              bg={"transparent"}
              border={"1px solid #2D50D6"}
              _hover={{ bg: "#2D50D6", color: "#FFF" }}
            >
              Back
            </Button>
            <Button color={"#fff"} bg={"#2D50D6"} _hover={{ bg: "#02ABEF" }}>
              Submit
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
