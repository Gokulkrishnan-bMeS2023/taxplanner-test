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
  Text,
  Flex,
} from "@chakra-ui/react";
import {
  EMAIL_REGEX,
  PAN_REGEX,
  NAME_REGEX,
  NUMBER_REGEX,
} from "@/utils/Configs/regex"; // Adjust the import path as necessary

const FormComponent: React.FC = () => {
  const initialValues = {
    MonthlyRent: "",
    HouseAddress: "",
    Name: "",
    Email: "",
    HouseOwnerName: "",
    PanNo: "",
    FromDate: "",
    ToDate: "",
  };

  const validationSchema = Yup.object().shape({
    MonthlyRent: Yup.string()
      .required(" Enter monthly rent")
      .matches(NUMBER_REGEX, "Invalid Rent Amount"),
    HouseAddress: Yup.string().required("Enter house address"),
    Name: Yup.string()
      .required("Enter name")
      .matches(NAME_REGEX, "Invalid Name"),
    Email: Yup.string()
      .required("Email is Invalid")
      .matches(EMAIL_REGEX, "Invalid email address"),
    HouseOwnerName: Yup.string()
      .required("Enter house owner name")
      .matches(NAME_REGEX, "Invalid House Owner Name"),
    PanNo: Yup.string()
      .required("Enter PAN No")
      .matches(PAN_REGEX, "Invalid Pan Number"),
    FromDate: Yup.string()
      .required("Invalid From Date")
      .test(
        "minSaleDate",
        "Selected date should not be before April 1 of the previous year",
        function (value) {
          return !value || new Date(value) >= new Date(minSaleDate);
        }
      )
      .test(
        "maxDate",
        "Selected date should not exceed March 31 of the current year",
        function (value) {
          return !value || new Date(value) <= new Date(maxDate);
        }
      ),
    ToDate: Yup.string()
      .required("Invalid To Date")
      .test(
        "minSaleDate",
        "Selected date should not be before April 1 of the previous year",
        function (value) {
          return !value || new Date(value) >= new Date(minSaleDate);
        }
      )
      .test(
        "ToDateGreater",
        "To date must be greater than From date.",
        function (value) {
          const { FromDate } = this.parent;
          return !FromDate || !value || new Date(value) > new Date(FromDate);
        }
      )
      .test(
        "maxDate",
        "Selected date should not exceed March 31 of the current year",
        function (value) {
          return !value || new Date(value) <= new Date(maxDate);
        }
      ),
  });

  const onSubmit = (values: any, actions: any) => {
    console.log("Form submitted with values:", values);
    actions.setSubmitting(false);
    alert(JSON.stringify(values));
  };

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = new Date().getFullYear();
  const minDate = "2001-04-01";
  const maxDate = `${currentYear}-03-31`;
  const minSaleDate = `${currentYear - 1}-04-01`;

  // Determine the start and end dates of the previous financial year
  let financialYearStart: string;
  let financialYearEnd: string;
  if (currentMonth >= 3) {
    // April to December
    financialYearStart = `${currentYear - 1}-04-01`;
    financialYearEnd = `${currentYear}-03-31`;
  } else {
    // January to March
    financialYearStart = `${currentYear - 2}-04-01`;
    financialYearEnd = `${currentYear - 1}-03-31`;
  }

  return (
    <Box
      pt={24}
      px={{ base: "20px", md: "2.5rem" }}
      pb={"1.5rem"}
      minH={"100vh"}
    >
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
          <Text fontWeight="bolder">Rental Receipt</Text>
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
                <Box px={4}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing="8"
                    mb="10"
                  >
                    <Field name="MonthlyRent">
                      {({ field, form }: any) => (
                        <>
                          <Box width="100%">
                            <FormLabel
                              htmlFor="MonthlyRent"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              What is your monthly rent?
                              <Text color="red">*</Text>
                            </FormLabel>
                            <Input
                              {...field}
                              type="text"
                              maxLength={7}
                              id="MonthlyRent"
                              fontSize="14px"
                              borderColor="#ccc"
                              height="50px"
                              onChange={(e: any) => {
                                const { value } = e.target;
                                if (NUMBER_REGEX.test(value)) {
                                  props.setFieldValue("MonthlyRent", value);
                                }
                              }}
                            />
                            <ErrorMessage
                              className="formik-errormessage"
                              name="MonthlyRent"
                              component="div"
                            />
                          </Box>
                        </>
                      )}
                    </Field>
                    <Field name="HouseAddress">
                      {({ field, form }: any) => (
                        <>
                          <Box width="100%">
                            <FormLabel
                              htmlFor="HouseAddress"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              What is the house address?
                              <Text color="red">*</Text>
                            </FormLabel>
                            <Input
                              {...field}
                              type="text"
                              id="HouseAddress"
                              fontSize="14px"
                              borderColor="#ccc"
                              height="50px"
                            />
                            <ErrorMessage
                              className="formik-errormessage"
                              name="HouseAddress"
                              component="div"
                            />
                          </Box>
                        </>
                      )}
                    </Field>
                  </Stack>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing="8"
                    mb="10"
                  >
                    <Field name="Name">
                      {({ field, form }: any) => (
                        <>
                          <Box width="100%">
                            <FormLabel
                              htmlFor="Name"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              What is your name?<Text color="red">*</Text>
                            </FormLabel>
                            <Input
                              {...field}
                              type="text"
                              id="Name"
                              maxLength={50}
                              fontSize="14px"
                              borderColor="#ccc"
                              height="50px"
                              onChange={(e: any) => {
                                const { value } = e.target;
                                if (NAME_REGEX.test(value)) {
                                  props.setFieldValue("Name", value);
                                }
                              }}
                            />
                            <ErrorMessage
                              className="formik-errormessage"
                              name="Name"
                              component="div"
                            />
                          </Box>
                        </>
                      )}
                    </Field>
                    <Field name="Email">
                      {({ field, form }: any) => (
                        <>
                          <Box width="100%">
                            <FormLabel
                              htmlFor="Email"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              What is your email?<Text color="red">*</Text>
                            </FormLabel>
                            <Input
                              {...field}
                              type="text"
                              id="Email"
                              fontSize="14px"
                              borderColor="#ccc"
                              height="50px"
                              onChange={(e: any) => {
                                const { value } = e.target;
                                if (EMAIL_REGEX.test(value)) {
                                  props.setFieldValue("Email", value);
                                }
                              }}
                            />
                            <ErrorMessage
                              className="formik-errormessage"
                              name="Email"
                              component="div"
                            />
                          </Box>
                        </>
                      )}
                    </Field>
                  </Stack>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing="8"
                    mb="10"
                  >
                    <Field name="HouseOwnerName">
                      {({ field, form }: any) => (
                        <>
                          <Box width="100%">
                            <FormLabel
                              htmlFor="HouseOwnerName"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              What is the name of your house owner?
                              <Text color="red">*</Text>
                            </FormLabel>
                            <Input
                              {...field}
                              type="text"
                              id="HouseOwnerName"
                              fontSize="14px"
                              maxLength={50}
                              borderColor="#ccc"
                              height="50px"
                              onChange={(e: any) => {
                                const { value } = e.target;
                                if (NAME_REGEX.test(value)) {
                                  props.setFieldValue("HouseOwnerName", value);
                                }
                              }}
                            />
                            <ErrorMessage
                              className="formik-errormessage"
                              name="HouseOwnerName"
                              component="div"
                            />
                          </Box>
                        </>
                      )}
                    </Field>
                    <Field name="PanNo">
                      {({ field, form }: any) => (
                        <>
                          <Box width="100%">
                            <FormLabel
                              htmlFor="PanNo"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              What is your House Owner's PAN no?
                              <Text color="red">*</Text>
                            </FormLabel>
                            <Input
                              {...field}
                              type="text"
                              id="PanNo"
                              maxLength={10}
                              fontSize="14px"
                              borderColor="#ccc"
                              height="50px"
                            />
                            <ErrorMessage
                              className="formik-errormessage"
                              name="PanNo"
                              component="div"
                            />
                          </Box>
                        </>
                      )}
                    </Field>
                  </Stack>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing="8"
                    mb="5"
                  >
                    <Field name="FromDate">
                      {({ field, form }: any) => (
                        <Box width="100%">
                          <FormLabel
                            htmlFor="FromDate"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            From when would you like to generate the rent
                            receipt?<Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            placeholder="Select Date"
                            type="date"
                            fontSize="14px"
                            borderColor="#ccc"
                            height="50px"
                            min={financialYearStart}
                            max={financialYearEnd}
                          />
                          <ErrorMessage
                            className="formik-errormessage"
                            name="FromDate"
                            component="div"
                          />
                        </Box>
                      )}
                    </Field>
                    <Field name="ToDate">
                      {({ field, form }: any) => (
                        <Box width="100%">
                          <FormLabel
                            htmlFor="ToDate"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Till when would you like to generate the receipt?
                            <Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            placeholder="Select Date"
                            type="date"
                            fontSize="14px"
                            borderColor="#ccc"
                            height="50px"
                            min={financialYearStart}
                            max={financialYearEnd}
                          />
                          <ErrorMessage
                            className="formik-errormessage"
                            name="ToDate"
                            component="div"
                          />
                        </Box>
                      )}
                    </Field>
                  </Stack>
                </Box>
                <Box textAlign="right" alignItems="right">
                  <Flex justifyContent="flex-end">
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
                      Generate Receipt
                    </Button>
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
