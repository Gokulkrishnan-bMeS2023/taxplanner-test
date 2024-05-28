"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Box,
  FormLabel,
  Stack,
  Heading,
  Text,
  Divider,
  Select,
  Textarea,
  Flex,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import Link from "next/link";
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
        GST Registration
      </Heading>
      <Box
        borderRadius="10px"
        boxShadow="0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)"
      >
        <Box
          p={"0.75rem 1.25rem"}
          bg={"#F3F5F9"}
          border={"1px solid #E3E6F0"}
          borderRadius={"10px 10px 0 0"}
        >
          <Text as={"h5"} fontWeight={700}>
            User Text ({" "}
            <Link href={"#"} style={{ color: "#02ABEF" }}>
              useremail
            </Link>{" "}
            )
          </Text>
        </Box>
        <Box
          bg="white"
          py="10"
          px="4"
          border="1px solid #E3E6F0"
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
                  <Heading as="h3" mb="5" width={{ base: "100%", sm: "50%" }}>
                    Personal Details
                  </Heading>
                  <FormControl
                    display="flex"
                    justifyContent="space-between"
                    mb="5"
                    flexDirection={{ base: "column", sm: "row" }}
                    width={{ base: "100%", sm: "50%" }}
                  >
                    <FormLabel>Copy of PAN</FormLabel>
                    <Link href="#" style={{ color: "#02ABEF" }}>
                      1.jpg
                    </Link>
                  </FormControl>
                  <Divider
                    width="100%"
                    mt="2rem"
                    mb="2rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <FormControl mb="5" width={{ base: "100%", sm: "50%" }}>
                    <FormLabel>Aadhaar No</FormLabel>
                    <Input
                      type="text"
                      bg="#EAECF4"
                      borderColor="#ccc"
                      height="50px"
                      defaultValue="123455555555"
                      isDisabled
                    />
                  </FormControl>
                  <FormControl width={{ base: "100%", sm: "50%" }} isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input
                      type="text"
                      color="#6E707E"
                      bg="#EAECF4"
                      borderColor="#ccc"
                      height="50px"
                      defaultValue="ERODE"
                      isDisabled
                    />
                  </FormControl>
                  <Divider
                    width="100%"
                    mt="2rem"
                    mb="2rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <FormControl
                    display="flex"
                    justifyContent="space-between"
                    mb="5"
                    width={{ base: "100%", sm: "50%" }}
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <FormLabel>Passport Size Photo</FormLabel>
                    <Link href="#" style={{ color: "#02ABEF" }}>
                      2.jpg
                    </Link>
                  </FormControl>
                  <Divider
                    mt="1.5rem"
                    mb="1.5rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <FormControl mb="8" width={{ base: "100%", sm: "50%" }}>
                    <Flex flexDirection={{ base: "column", sm: "row" }}>
                      <FormLabel mr="5">Premises</FormLabel>
                      <Flex pl={{ base: "4", sm: "0" }}>
                        <RadioGroup defaultValue="1">
                          <Radio value="1" mr="4">
                            In case of rental premises
                          </Radio>
                          <Radio value="2" mt={{ base: "3", sm: "3" }}>
                            Scanned copy of owned premises
                          </Radio>
                        </RadioGroup>
                      </Flex>
                    </Flex>
                  </FormControl>
                  <FormControl
                    display="flex"
                    justifyContent="space-between"
                    mb="8"
                    width={{ base: "100%", sm: "50%" }}
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <FormLabel>Electric Bill</FormLabel>
                    <Link href="#" style={{ color: "#02ABEF" }}>
                      3.jpg
                    </Link>
                  </FormControl>
                  <FormControl
                    display="flex"
                    justifyContent="space-between"
                    mb="8"
                    width={{ base: "100%", sm: "50%" }}
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <FormLabel>Rental Agreement</FormLabel>
                    <Link href="#" style={{ color: "#02ABEF" }}>
                      4.jpg
                    </Link>
                  </FormControl>
                  <FormControl
                    display="flex"
                    justifyContent="space-between"
                    mb="8"
                    width={{ base: "100%", sm: "50%" }}
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <FormLabel>Property Receipt</FormLabel>
                    <Link href="#" style={{ color: "#02ABEF" }}>
                      5.jpg
                    </Link>
                  </FormControl>
                  <FormControl mb="5" width={{ base: "100%", sm: "50%" }}>
                    <FormLabel>Trade</FormLabel>
                    <Input
                      type="text"
                      bg="#EAECF4"
                      borderColor="#ccc"
                      height="50px"
                      defaultValue="goods"
                      isDisabled
                    />
                  </FormControl>
                  <Divider
                    mt="2rem"
                    mb="2rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <FormControl mb="5" width={{ base: "100%", sm: "50%" }}>
                    <FormLabel>Goods / Services Dealing</FormLabel>
                    <Input
                      type="text"
                      bg="#EAECF4"
                      borderColor="#ccc"
                      height="50px"
                      defaultValue="goods"
                      isDisabled
                    />
                  </FormControl>
                  <Divider
                    mt="2rem"
                    mb="2rem"
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
                        height="60px"
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
                      <Textarea
                        name="remarks"
                        id="remarks"
                        rows={2}
                        cols={20}
                      />
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
