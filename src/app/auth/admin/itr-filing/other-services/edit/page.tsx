import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

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
          p={"0.75rem 1.25rem"}
          bg={"#f3f5f9"}
          border={"1px solid #e3e6f0"}
          borderRadius={"10px 10px 0 0"}
        >
          <Text as={"h5"} fontWeight={700} display={"flex"}>
            User Text (
            <Text
              color="#02ABEF"
              _hover={{ color: "#2D50D6", textDecoration: "underline" }}
            >
              <Link href={"#"}>useremail</Link>
            </Text>
            )
          </Text>
        </Box>
        <Box
          p={"1.25rem"}
          bg={"#fff"}
          border={"1px solid #e3e6f0"}
          borderRadius={"0 0 10px 10px"}
        >
          <Text as={"h5"} fontWeight={"bold"}>
            Document Details
          </Text>
          <TableContainer border={"1px solid #e3e6f0"} my={"1rem"}>
            <Table>
              <Thead>
                <Tr>
                  <Th
                    borderRight={"1px solid #e3e6f0"}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                  >
                    Document Name
                  </Th>
                  <Th
                    display={{ base: "none", md: "flex" }}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                  >
                    Attachement
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg={"rgba(0, 0, 0, 0.05)"}>
                <Tr>
                  <Td borderRight={"1px solid #e3e6f0"}>
                    <Flex gap={2} align={"center"}>
                      <Box>
                        {null === 0 ? (
                          <FaMinusCircle fontSize={16} color="#2D50D6" />
                        ) : (
                          <FaPlusCircle fontSize={16} color="#2D50D6" />
                        )}
                      </Box>
                      <Text>Doc1</Text>
                    </Flex>
                  </Td>
                  <Td display={{ base: "none", md: "flex" }}>
                    <Link href={"#"} style={{ color: "#02ABEF" }}>
                      1.png
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <Flex
            align={"end"}
            w={{ base: "100%", md: "55%" }}
            gap={5}
            flexDirection={{ base: "column", md: "row" }}
          >
            <FormControl id="comments">
              <FormLabel fontWeight={"bold"}>Comments</FormLabel>
              <Input type="text" placeholder="Enter Comments" h={14} />
            </FormControl>
            <Button color={"#FFF"} bg={"#2D50D6"} _hover={{ bg: "#02ABEF" }}>
              Send
            </Button>
          </Flex>
          <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="2rem" />
          <FormControl id="remarks" isRequired mb={"1.5rem"}>
            <FormLabel fontWeight={"bold"}>Filed Returns</FormLabel>
          </FormControl>
          <Table>
            <Tbody>
              <Tr bg={"rgba(0, 0, 0, 0.05)"}>
                <Td border={"1px solid #e3e6f0"}>No Data Available</Td>
              </Tr>
            </Tbody>
          </Table>
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
              <Select h={14}>
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
