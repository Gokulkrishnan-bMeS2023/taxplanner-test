"use client";
import React, { useRef } from "react";
import * as Yup from "yup";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormLabel,
  Input,
  Divider,
  Stack,
  Box,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const ListedShare = ({ isOpen, onClose }: Props) => {
  const initialRef = useRef<HTMLInputElement>(null);
  const finalRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = React.useState("lg");

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
    financialYearEnd = ` ${currentYear - 1}-03-31`;
  }

  const initialValues = {
    DatePurchase: "",
    DateSale: "",
    CostPurchase: "",
    MarketValue: "",
    SaleValue: "",
  };

  const validationSchema = Yup.object().shape({
    DatePurchase: Yup.string()
      .required("This field is required.")
      .test(
        "minDate",
        "Selected date should not be before April 1 of the year 2001",
        function (value) {
          return !value || new Date(value) >= new Date(minDate);
        }
      )
      .test(
        "maxDate",
        "Selected date should not exceed March 31 of the current year",
        function (value) {
          return !value || new Date(value) <= new Date(maxDate);
        }
      ),
    DateSale: Yup.string()
      .required("This field is required.")
      .test(
        "minSaleDate",
        `
        Selected date should not be before April 1 of the year ${
          currentYear - 1
        }`,
        function (value) {
          return !value || new Date(value) >= new Date(minSaleDate);
        }
      )
      .test(
        "dateSaleGreater",
        "Sales date must be greater than Purchase date.",
        function (value) {
          const { DatePurchase } = this.parent;
          return (
            !DatePurchase || !value || new Date(value) > new Date(DatePurchase)
          );
        }
      )
      .test(
        "maxDate",
        "Selected date should not exceed March 31 of the current year",
        function (value) {
          return !value || new Date(value) <= new Date(maxDate);
        }
      ),
    CostPurchase: Yup.string().required("This field is required."),
    MarketValue: Yup.string().required("This field is required."),
    SaleValue: Yup.string().required("This field is required."),
  });

  const onSubmit = (values: any, actions: any) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
    actions.setSubmitting(false);
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <ModalHeader>Listed Shares</ModalHeader>
                <Divider
                  mt="0.1rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <ModalCloseButton />
                <ModalBody px="8">
                  <Field name="DatePurchase">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <FormLabel
                          htmlFor="DatePurchase"
                          display={"flex"}
                          gap={1}
                          m="0"
                          p="0"
                        >
                          Date Of Purchase
                        </FormLabel>
                        <Input
                          {...field}
                          placeholder="Select Date"
                          type="date"
                          fontSize="14px"
                          borderColor="#ccc"
                          height="50px"
                          min={minDate}
                          max={maxDate}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="DatePurchase"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="DateSale">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <FormLabel
                          htmlFor="DateSale"
                          display={"flex"}
                          gap={1}
                          m="0"
                          p="0"
                        >
                          Date Of Sale
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
                          name="DateSale"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="CostPurchase">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <Input
                          {...field}
                          type="text"
                          placeholder="Cost of Purchase"
                          id="CostPurchase"
                          fontSize="14px"
                          maxLength={12}
                          borderColor="#ccc"
                          height="50px"
                          onChange={(e: any) => {
                            const { value } = e.target;
                            const regex = /^[0-9]*$/;
                            if (!regex.test(value)) {
                            } else {
                              props.setFieldValue("CostPurchase", value);
                            }
                          }}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="CostPurchase"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="MarketValue">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <Input
                          {...field}
                          type="text"
                          placeholder="Fair Market Value"
                          id="MarketValue"
                          maxLength={12}
                          fontSize="14px"
                          borderColor="#ccc"
                          height="50px"
                          onChange={(e: any) => {
                            const { value } = e.target;
                            const regex = /^[0-9]*$/;
                            if (!regex.test(value)) {
                            } else {
                              props.setFieldValue("MarketValue", value);
                            }
                          }}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="MarketValue"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="SaleValue">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <Input
                          {...field}
                          type="text"
                          placeholder="Sale Value"
                          id="SaleValue"
                          fontSize="14px"
                          maxLength={12}
                          borderColor="#ccc"
                          height="50px"
                          onChange={(e: any) => {
                            const { value } = e.target;
                            const regex = /^[0-9]*$/;
                            if (!regex.test(value)) {
                            } else {
                              props.setFieldValue("SaleValue", value);
                            }
                          }}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="SaleValue"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                </ModalBody>
                <Divider
                  mt="1rem"
                  mb="0.1rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <ModalFooter>
                  <Stack direction="row" spacing="3">
                    <Button
                      onClick={onClose}
                      bg="white"
                      color="#2D50D6"
                      border="1px solid #2D50D6"
                      _hover={{
                        bg: "#2D50D6",
                        borderColor: "#2D50D6",
                        color: "#fff",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
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
                      Submit
                    </Button>
                  </Stack>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ListedShare;
