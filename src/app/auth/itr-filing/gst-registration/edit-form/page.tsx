"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  FormControl,
  Box,
  FormLabel,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import Link from "next/link";

const FormComponent: React.FC = () => {
  const initialValues = {
    Pan: "",
    Passport: "",
    AadhaarNo: "",
    Address: "",
    Premises: "",
    TradeName: "",
    GoodServices: "",
  };

  const validationSchema = Yup.object().shape({
    Pan: Yup.string().required("Please select a document file"),
    Passport: Yup.mixed().required("Please select a document file"),
    Address: Yup.string().required("This field is required."),
    Premises: Yup.string().required("This field is required."),
    GoodServices: Yup.string().required("This field is required."),
    TradeName: Yup.string().required("This field is required."),
    AadhaarNo: Yup.string()
      .required("This field is required.")
      .length(12, "Invalid Aadhaar Number"),
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
          <Text as={"h4"} fontWeight="bolder">
            Fill The Details
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
            {(props) => (
              <Form>
                <Box p={4}>
                  <Field name="Pan">
                    {({ field, form }: any) => (
                      <>
                        <FormControl width={{ base: "100%", sm: "50%" }}>
                          <FormLabel
                            htmlFor="Pan"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Copy of PAN <Text color="red">*</Text>
                          </FormLabel>
                          <Box
                            className="hover-button"
                            display={"flex"}
                            border={"1px solid #E2E8F0"}
                            as="label"
                            mt="2"
                            cursor="pointer"
                            width={"100%"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            borderRadius={"8px"}
                          >
                            <Text
                              ml={"4"}
                              color="grey"
                              w={"fit-content"}
                              whiteSpace="nowrap"
                              fontSize="14px"
                              overflow="hidden"
                            >
                              {props.values.Pan ||
                                "Select your file! (PDF / Image)"}
                            </Text>
                            <Input
                              {...field}
                              id="Pan"
                              type="file"
                              accept=".pdf, image/png, image/jpeg"
                              style={{ display: "none" }}
                            />
                            <Button
                              as="label"
                              borderLeftRadius="0px"
                              htmlFor="Pan"
                              variant="solid"
                              cursor="pointer"
                              className="hover-button"
                            >
                              Browser
                            </Button>
                          </Box>
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="Pan"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Divider
                    width="100%"
                    mt="1.5rem"
                    mb="1.5rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <Field name="AadhaarNo">
                    {({ field, form }: any) => (
                      <>
                        <FormControl width={{ base: "100%", sm: "50%" }}>
                          <FormLabel
                            htmlFor="AadhaarNo"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Aadhaar No<Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            type="text"
                            id="AadhaarNo"
                            fontSize="14px"
                            placeholder="Enter Aadhaar No"
                            maxLength={12}
                            borderColor="#ccc"
                            height="50px"
                            onChange={(e: any) => {
                              const { value } = e.target;
                              const regex = /^[0-9]*$/;
                              if (!regex.test(value)) {
                                // Optionally, you can display an error message or handle invalid input here.
                              } else {
                                props.setFieldValue("AadhaarNo", value);
                              }
                            }}
                          />
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="AadhaarNo"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Field name="Address" >
                    {({ field, form }: any) => (
                      <>
                        <FormControl width={{ base: "100%", sm: "50%" }} mt="5">
                          <FormLabel
                            htmlFor="Address"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Address<Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            type="text"
                            id="Address"
                            fontSize="14px"
                            placeholder="Enter Address"
                            maxLength={12}
                            borderColor="#ccc"
                            height="50px"
                          />
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="Address"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Divider
                    width="100%"
                    mt="1.5rem"
                    mb="1.5rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <Field name="Passport">
                    {({ field, form }: any) => (
                      <>
                        <FormControl width={{ base: "100%", sm: "50%" }}>
                          <FormLabel
                            htmlFor="Passport"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Passport Size Photo <Text color="red">*</Text>
                          </FormLabel>
                          <Box
                            className="hover-button"
                            display={"flex"}
                            border={"1px solid #E2E8F0"}
                            as="label"
                            mt="2"
                            cursor="pointer"
                            width={"100%"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            borderRadius={"8px"}
                          >
                            <Text
                              ml={"4"}
                              color="grey"
                              w={"fit-content"}
                              whiteSpace="nowrap"
                              fontSize="14px"
                              overflow="hidden"
                            >
                              {props.values.Passport ||
                                "Select your file! (PDF / Image)"}
                            </Text>
                            <Input
                              {...field}
                              id="Passport"
                              type="file"
                              accept=".pdf, image/png, image/jpeg"
                              style={{ display: "none" }}
                            />
                            <Button
                              as="label"
                              borderLeftRadius="0px"
                              htmlFor="Passport"
                              variant="solid"
                              cursor="pointer"
                              className="hover-button"
                            >
                              Browser
                            </Button>
                          </Box>
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="Passport"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Divider
                    mt="1.5rem"
                    mb="1.5rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <Field name="Premises">
                    {({ field, form }: any) => (
                      <>
                        <FormControl mb="8" width={{ base: "100%", sm: "50%" }}>
                          <Flex flexDirection={{ base: "column", sm: "row" }}>
                            <FormLabel
                              htmlFor="Premises"
                              mr="5"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              Premises<Text color="red">*</Text>
                            </FormLabel>
                            <Flex pl={{ base: "4", sm: "10" }}>
                              <RadioGroup
                                {...field}
                                id="Premises"
                                onChange={(value) => form.setFieldValue(field.name, value)}>
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
                        <ErrorMessage
                          className="formik-errormessage"
                          name="Premises"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Divider
                    mt="1.5rem"
                    mb="1.5rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <Field name="TradeName">
                    {({ field, form }: any) => (
                      <>
                        <FormControl width={{ base: "100%", sm: "50%" }}>
                          <FormLabel
                            htmlFor="TradeName"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Trade Name<Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            type="text"
                            id="TradeName"
                            fontSize="14px"
                            placeholder="Trade"
                            maxLength={12}
                            borderColor="#ccc"
                            height="50px"
                          />
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="TradeName"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Divider
                    mt="1.5rem"
                    mb="1.5rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <Field name="GoodServices">
                    {({ field, form }: any) => (
                      <>
                        <FormControl width={{ base: "100%", sm: "50%" }}>
                          <FormLabel
                            htmlFor="GoodServices"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Goods / Services Dealing <Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            type="text"
                            id="GoodServices"
                            fontSize="14px"
                            placeholder="Goods / Services Dealing"
                            maxLength={12}
                            borderColor="#ccc"
                            height="50px"
                          />
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="GoodServices"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                  <Divider
                    mt="1.5rem"
                    mb="1.5rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
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
                        isLoading={props.isSubmitting}
                        loadingText={"submit.."}
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
                      <Button
                        mt={4}
                        color="#fff"
                        isLoading={props.isSubmitting}
                        type="submit"
                        border="1px solid #2D50D6"
                        bg="#2D50D6"
                        _hover={{
                          bg: "#02ABEF",
                          borderColor: "#02ABEF",
                          color: "#fff",
                        }}
                      >
                        Save
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