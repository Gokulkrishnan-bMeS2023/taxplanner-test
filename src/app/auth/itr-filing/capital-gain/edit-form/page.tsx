"use client";

import { Formik, Form,} from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  FormControl,
  Box,
  FormLabel,
  Stack,
  Checkbox,
  Heading,
  Text,
  Divider,
  Thead,
  Tr,
  Tbody,
  Th,
  Table,
  Td,
  Select,
  Textarea,
  Flex,
  TableContainer,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FormComponent: React.FC = () => {
  const initialValues = {
    documentName: "",
    selectedDocument: "",
  };

  const validationSchema = Yup.object().shape({
    documentName: Yup.string().required("Document name is required"),
    selectedDocument: Yup.mixed().required("Please select a document file"),
  });

  const onSubmit = (values: any, actions: any) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
    actions.setSubmitting(false);
    alert(JSON.stringify(values));
  };

  return (
    <Box pt={24} px={{ base: "20px", md: "3rem" }} pb={"1.5rem"} minH={"100vh"}>
      <Heading as={"h2"} py="10">
        Salaried Person
      </Heading>
      <Box borderRadius="10px" boxShadow="0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)">
      <Box
          p={"0.75rem 1.25rem"}
          bg={"#F3F5F9"}
          border={"1px solid #E3E6F0"}
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
        bg="white"
        py="10"
        px="4"
        border="1px solid #e3e6f0"
        borderRadius={"0 0 10px 10px"}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box p={4}>
                <FormControl
                  display="flex"
                  alignItems="baseline"
                  gap="2"
                  mb="5"
                >
                  <Checkbox defaultChecked isDisabled />
                  <FormLabel fontWeight={"bolder"}>
                    Has already registered with income tax
                  </FormLabel>
                </FormControl>

                <Box
                  display="flex"
                  flexDirection={{ base: "column", sm: "row" }}
                  gap="5"
                >
                  <FormControl 
                     display="flex" 
                     justifyContent="space-between"
                     flexDirection={{base:"column",sm:"row"}} >
                    <FormLabel>Copy of PAN</FormLabel>
                    <Link href="#" style={{ color: "#02ABEF" }}>
                      123.jpg
                    </Link>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Aadhaar No</FormLabel>
                    <Input
                      type="text"
                      bg="#eaecf4"
                      borderColor="#ccc"
                      height="50px"
                      defaultValue="123455555555"
                      isDisabled
                    />
                  </FormControl>
                </Box>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    color="#6e707e"
                    bg="#eaecf4"
                    borderColor="#ccc"
                    height="50px"
                    defaultValue="ERODE"
                    isDisabled
                  />
                </FormControl>
                <Divider
                  mt="2rem"
                  mb="2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />

                <FormControl
                  display="flex"
                  alignItems="baseline"
                  gap="2"
                  mb="5"
                >
                  <Checkbox defaultChecked isDisabled />
                  <FormLabel fontWeight={"bolder"}>
                    Having Income from House Property
                  </FormLabel>
                </FormControl>

                <Stack
                  direction={{ base: "column", sm: "row" }}
                  spacing="5"
                  mb="5"
                >
                  <FormControl>
                    <FormLabel>Rent Received PA</FormLabel>
                    <Input
                      type="text"
                      color="#6e707e"
                      bg="#eaecf4"
                      borderColor="#ccc"
                      height="50px"
                      defaultValue="Enter the amount"
                      isDisabled
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Municipal Tax Paid in Previous Year</FormLabel>
                    <Input
                      type="text"
                      color="#6e707e"
                      bg="#eaecf4"
                      borderColor="#ccc"
                      height="50px"
                      defaultValue="00000"
                      isDisabled
                    />
                  </FormControl>
                </Stack>
                <Text mb={4}>Interest Paid on Housing Loan - Certificate</Text>
                <Box overflowX="auto">
                  <Table variant="striped" borderWidth="1px">
                    <Thead>
                      <Tr>
                        <Th fontWeight={"bolder"} color="#000">
                          Attachment
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Link
                            href="#"
                            target="_blank"
                          >
                            reh-auf-der-wiese-1634997.jpg
                          </Link>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
                <Divider
                  mt="2.5rem"
                  mb="2.5rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl
                  display="flex"
                  alignItems="baseline"
                  gap="2"
                  mb="5"
                >
                  <Checkbox isChecked={false} />
                  <FormLabel fontWeight={"bolder"}>
                    Having Income from Interest / Dividend / Commission
                  </FormLabel>
                </FormControl>
                <Divider
                  mt="1.5rem"
                  mb="1.5rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl
                  display="flex"
                  alignItems="baseline"
                  gap="2"
                  mb="5"
                >
                  <Checkbox defaultChecked isDisabled />
                  <FormLabel fontWeight={"bolder"}>
                    Having Income from Salary
                  </FormLabel>
                </FormControl>
                <TableContainer border={"1px solid #E3E6F0"} my={"1rem"}>
            <Table>
              <Thead>
                <Tr>
                  <Th
                   display={{ base: "none", md: "flex" }}
                    borderRight={"1px solid #E3E6F0"}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                  >
                   Employee Name 
                  </Th>
                  <Th
                   borderRight={"1px solid #E3E6F0"}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                  >
                    Form 16 Part A
                  </Th>
                  <Th
                    borderRight={"1px solid #E3E6F0"}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                  >
                    Form 16 Part B
                  </Th>
                  <Th
                    borderRight={"1px solid #E3E6F0"}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                  >
                    March Month-Payslip
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg={"rgba(0, 0, 0, 0.05)"}>
                <Tr>
                  <Td borderRight={"1px solid #E3E6F0"}>
                    <Flex gap={2} align={"center"}>
                      <Box>
                        {null === 0 ? (
                          <FaMinusCircle fontSize={16} color="#2D50D6" />
                        ) : (
                          <FaPlusCircle fontSize={16} color="#2D50D6" />
                        )}
                      </Box>
                      <Text>Sa</Text>
                    </Flex>
                  </Td>
                  <Td borderRight={"1px solid #E3E6F0"} >
                  </Td>
                  <Td borderRight={"1px solid #E3E6F0"}>
                    <Link href={"#"} style={{ color: "#02ABEF" }}>
                      2.png
                    </Link>
                  </Td>
                  <Td borderRight={"1px solid #E3E6F0"}>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
                <Divider
                  mt="2.5rem"
                  mb="2.5rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl
                  display="flex"
                  alignItems="baseline"
                  gap="2"
                  mb="5"
                >
                  <Checkbox defaultChecked isDisabled />
                  <FormLabel fontWeight={"bolder"}>
                    Not claimed with form 16
                  </FormLabel>
                </FormControl>
                <TableContainer border={"1px solid #E3E6F0"} my={"1rem"}>
            <Table>
              <Thead>
                <Tr>
                  <Th
                    borderRight={"1px solid #E3E6F0"}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                  >
                    Investment Details
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
                  <Td borderRight={"1px solid #E3E6F0"}>
                    <Flex gap={2} align={"center"}>
                      <Box>
                        {null === 0 ? (
                          <FaMinusCircle fontSize={16} color="#2D50D6" />
                        ) : (
                          <FaPlusCircle fontSize={16} color="#2D50D6" />
                        )}
                      </Box>
                      <Text>LIC</Text>
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
                <Divider
                  mt="2.5rem"
                  mb="2.5rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl isRequired>
                  <FormLabel fontWeight={"bolder"}>Filed Returns</FormLabel>
                </FormControl>
                <Divider
                  mt="3.5rem"
                  mb="2.5rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  spacing="5"
                  mb="5"
                >
                  <FormControl>
                    <FormLabel>Status</FormLabel>
                    <Select
                      name="status"
                      id="status"
                      color="#000"
                      borderColor="#ccc"
                      height="50px"
                    >
                      <option value="1">Draft</option>
                      <option value="2">In Progress</option>
                      <option value="3">Done</option>
                      <option value="4">Declined</option>
                      <option value="5">Correction Required</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Remarks</FormLabel>
                    <Textarea name="remarks" id="remarks" rows={2} cols={20} />
                  </FormControl>
                </Stack>
              </Box>
              <Box textAlign="right" alignItems="right">
                <Flex justifyContent="flex-end">
                  <Stack direction="row" spacing="3" mb="5">
                    <Button
                      mt={4}
                      bg="white"
                      color="#2D50D6"
                      border=" 1px solid #2D50D6"
                      _hover={{
                        bg: "#2D50D6",
                        borderColor: "#2D50D6",
                        color: "#fff",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      mt={4}
                      color="#fff"
                      isLoading={isSubmitting}
                      type="submit"
                      border="1px solid #2D50D6"
                      bg="#2D50D6"
                      _hover={{
                        bg: "#02ABEF",
                        borderColor: "#02ABEF",
                        color: "#fff",
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Flex>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      </Box>
    </Box>
  );
};

export default FormComponent;