"use client";

import React from "react";
import {
  Button,
  Box,
  Input,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DocumentListTable from "@/components/Tables/DocumentListTable/page";
const initialValues = {
  documentName: "",
  selectedDocument: "", // Initialize with null
};
const validationSchema = Yup.object().shape({
  documentName: Yup.string()
    .required("Document name is required")
    .length(5, "length is required"),
  selectedDocument: Yup.mixed().required("Please select a document file"),
});
const onSubmit = (values: any, actions: any) => {
  // Handle form submission
  console.log("Form submitted with values:", values);
  // You can add your logic for handling the form submission here
  actions.setSubmitting(false);
};
const FileUploadForm: React.FC = () => {
  return (
    <Box pt={24} px={{ base: "20px", md: "1.5rem" }} pb={"1.5rem"}>
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
            Fill The Details
          </Text>
        </Box>
        <Box
          bg="white"
          p={4}
          border="1px solid #E3E6F0"
          borderRadius={"0 0 10px 10px"}
        >
          <Text fontWeight={"bold"}>Document Details</Text>
          <Divider
            mt="1rem"
            mb="2rem"
            border="0"
            borderTop="1px solid rgba(0, 0, 0, 0.1)"
          />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Flex
                  flexDirection={"column"}
                  gap={6}
                  width={{ base: "100%", md: "50%" }}
                  px={5}
                >
                  <Field name="documentName">
                    {({ field }: any) => (
                      <>
                        <FormControl>
                          <FormLabel
                            htmlFor="documentName"
                            display="flex"
                            gap={1}
                          >
                            Document Name <Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            id="documentName"
                            type="text"
                            placeholder="Enter document name"
                            h={"50px"}
                          />
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="documentName"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Field name="selectedDocument">
                    {({ field }: any) => (
                      <>
                        <FormControl>
                          <FormLabel
                            htmlFor="selectedDocument"
                            display={"flex"}
                            gap={1}
                          >
                            Select Document <Text color="red">*</Text>
                          </FormLabel>
                          <Box
                            className="hover-button"
                            display={"flex"}
                            border={"1px solid #E2E8F0"}
                            as="label"
                            cursor="pointer"
                            width={"100%"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            borderRadius={"8px"}
                            h={"50px"}
                          >
                            <Text
                              ml={"4"}
                              color="grey"
                              w={"fit-content"}
                              whiteSpace="nowrap"
                              fontSize="14px"
                              overflow="hidden"
                            >
                              {props.values.selectedDocument ||
                                "Select your file! (PDF / Image)"}
                            </Text>
                            <Input
                              {...field}
                              id="selectedDocument"
                              type="file"
                              accept=".pdf, image/png, image/jpeg"
                              style={{ display: "none" }}
                            />
                            <Button
                              as="label"
                              borderLeftRadius="0px"
                              htmlFor="selectedDocument"
                              variant="solid"
                              cursor="pointer"
                              className="hover-button"
                              h={"50px"}
                            >
                              Browser
                            </Button>
                          </Box>
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="selectedDocument"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Button
                    color={"#2D50D6"}
                    bg={"transparent"}
                    border={"1px solid #2D50D6"}
                    _hover={{ bg: "#2D50D6", color: "#FFF" }}
                    w={"fit-content"}
                    mb={2}
                  >
                    Save & Add
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
          <DocumentListTable />
          <Divider
            mt="2rem"
            mb="2rem"
            border="0"
            borderTop="1px solid rgba(0, 0, 0, 0.1)"
          />
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
};
export default FileUploadForm;
