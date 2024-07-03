"use client";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormLabel,
  Heading,
  Input,
  Divider,
  Box,
  Flex,
  Stack,
  Td,
  Tr,
  Tbody,
  Table,
  Th,
  Thead,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

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

const initialValues = {
  DatePurchase: "",
  DateSale: "",
  PurchaseCost: "",
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
      `Selected date should not be before April 1 of the year ${
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
  PurchaseCost: Yup.string().required("This field is required."),
  SaleValue: Yup.string().required("This field is required."),
});

const Property: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const initialRef = useRef<HTMLInputElement>(null);
  const finalRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = React.useState("lg");
  const [buyers, setBuyers] = useState<any[]>([]);
  const [expandedRows, setExpandedRows] = useState<any[]>([]);
  const [totalShare, setTotalShare] = useState(0);
  const [shareError, setShareError] = useState("");
  const [isBuyerModalOpen, setIsBuyerModalOpen] = useState(false);

  const onSubmit = (values: any, actions: any) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
    actions.setSubmitting(false);
    onClose(); // Close the first modal
    setIsBuyerModalOpen(true); // Open the buyer modal
  };

  const onBuyerSubmit = (values: any, actions: any) => {
    const newShare = parseInt(values.buyerShare);
    const newTotalShare = totalShare + newShare;

    if (newTotalShare <= 100) {
      setBuyers([...buyers, values]);
      setTotalShare(newTotalShare);
      setShareError("");
    } else {
      setShareError(`Remaining share to be added: ${100 - totalShare}`);
    }

    actions.resetForm();
    actions.setSubmitting(false);
  };

  const handlePlus = (index: number) => {
    setExpandedRows([...expandedRows, index]);
  };
  const handleMinus = (index: number) => {
    setExpandedRows(expandedRows.filter((show: any) => show !== index));
  };

  const buyerInitialValues = {
    buyerName: "",
    buyerShare: "",
    buyerAadhaar: "",
    buyerAddress: "",
    DateImprovement: "",
    CostImprovement: "",
  };

  const buyerValidationSchema = Yup.object().shape({
    buyerName: Yup.string().required("This field is required."),
    buyerShare: Yup.string().required("This field is required."),
    buyerAadhaar: Yup.string().required("This field is required."),
    buyerAddress: Yup.string().required("This field is required."),
    DateImprovement: Yup.string().required("This field is required."),
    CostImprovement: Yup.string().required("This field is required."),
  });

  const handleSubmit = () => {
    if (totalShare === 100) {
      console.log("Final form submitted with buyers:", buyers);
      // Reset form and state
      setBuyers([]);
      setTotalShare(0);
      setShareError("");
      setIsBuyerModalOpen(false);
      onClose();
    } else {
      setShareError(`Remaining share to be added: ${100 - totalShare}`);
    }
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
                <ModalHeader>Gain On Property</ModalHeader>
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
                      <>
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
                            fontSize="15px"
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
                      </>
                    )}
                  </Field>
                  <Field name="DateSale">
                    {({ field, form }: any) => (
                      <>
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
                            fontSize="15px"
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
                      </>
                    )}
                  </Field>
                  <Field name="PurchaseCost">
                    {({ field, form }: any) => (
                      <>
                        <Box width="100%" mb="8">
                          <Input
                            {...field}
                            type="text"
                            placeholder="Purchase Cost"
                            id="PurchaseCost"
                            maxLength={12}
                            fontSize="15px"
                            borderColor="#ccc"
                            height="50px"
                            onChange={(e: any) => {
                              const { value } = e.target;
                              const regex = /^[1-9][0-9]*$/;
                              if (regex.test(value)) {
                                props.setFieldValue("PurchaseCost", value);
                              } else {
                                props.setFieldValue("PurchaseCost", "");
                              }
                            }}
                          />
                          <ErrorMessage
                            className="formik-errormessage"
                            name="PurchaseCost"
                            component="div"
                          />
                        </Box>
                      </>
                    )}
                  </Field>
                  <Field name="SaleValue">
                    {({ field, form }: any) => (
                      <>
                        <Box width="100%" mb="8">
                          <Input
                            {...field}
                            type="text"
                            placeholder="Sale Value"
                            id="SaleValue"
                            maxLength={12}
                            fontSize="15px"
                            borderColor="#ccc"
                            height="50px"
                            onChange={(e: any) => {
                              const { value } = e.target;
                              const regex = /^[1-9][0-9]*$/; // Only allow whole numbers that don't start with zero
                              if (regex.test(value)) {
                                props.setFieldValue("SaleValue", value);
                              } else {
                                props.setFieldValue("SaleValue", ""); // Clear the input if the value is invalid
                              }
                            }}
                          />
                          <ErrorMessage
                            className="formik-errormessage"
                            name="SaleValue"
                            component="div"
                          />
                        </Box>
                      </>
                    )}
                  </Field>
                  <Box textAlign="left" alignItems="left">
                    <Flex justifyContent="flex-start">
                      <Button
                        mt={4}
                        color="#fff"
                        isLoading={props.isSubmitting}
                        loadingText={"submit.."}
                        type="submit"
                        fontWeight="400"
                        border="1px solid #2D50D6"
                        bg="#2D50D6"
                        _hover={{
                          bg: "#02ABEF",
                          borderColor: "#02ABEF",
                          color: "#fff",
                        }}
                      >
                        Add Property
                      </Button>
                    </Flex>
                  </Box>
                </ModalBody>
                <Divider
                  mt="1rem"
                  mb="0.1rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <ModalFooter>
                  <Button
                    onClick={onClose}
                    bg="white"
                    color="#2D50D6"
                    border="1px solid #2D50D6"
                  >
                    Close
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isBuyerModalOpen}
        onClose={() => setIsBuyerModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={buyerInitialValues}
            validationSchema={buyerValidationSchema}
            onSubmit={onBuyerSubmit}
          >
            {(props) => (
              <Form>
                <ModalHeader>Buyer Details</ModalHeader>
                <Divider
                  mt="0.1rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <ModalCloseButton />
                <ModalBody px="8">
                  <Field name="buyerName">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <Input
                          {...field}
                          placeholder="Buyer Name"
                          id="buyerName"
                          maxLength={50}
                          fontSize="15px"
                          borderColor="#ccc"
                          height="50px"
                          onChange={(e: any) => {
                            const { value } = e.target;
                            const regex = /^[a-zA-Z\s]*$/; // Allow only letters and spaces
                            if (regex.test(value)) {
                              form.setFieldValue("buyerName", value);
                            }
                          }}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="buyerName"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="buyerShare">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <Input
                          {...field}
                          placeholder="Buyer Share"
                          id="buyerShare"
                          maxLength={100}
                          fontSize="15px"
                          borderColor="#ccc"
                          height="50px"
                          onChange={(e: any) => {
                            const { value } = e.target;
                            const regex = /^([1-9][0-9]?|100)$/;
                            if (regex.test(value) || value === "") {
                              form.setFieldValue("buyerShare", value);
                              setShareError(""); // Clear the error when a new valid value is entered
                            }
                          }}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="buyerShare"
                          component="div"
                        />
                        {shareError && (
                          <Text color="red" mt="2">
                            {shareError}
                          </Text>
                        )}
                      </Box>
                    )}
                  </Field>
                  <Field name="buyerAadhaar">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <Input
                          {...field}
                          placeholder="Buyer Aadhaar"
                          id="buyerAadhaar"
                          maxLength={12}
                          fontSize="15px"
                          borderColor="#ccc"
                          height="50px"
                          onChange={(e: any) => {
                            const { value } = e.target;
                            const regex = /^[0-9]*$/;
                            if (regex.test(value)) {
                              form.setFieldValue("buyerAadhaar", value);
                            }
                          }}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="buyerAadhaar"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="buyerAddress">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <Input
                          {...field}
                          placeholder="Buyer Address"
                          id="buyerAddress"
                          maxLength={100}
                          fontSize="15px"
                          borderColor="#ccc"
                          height="50px"
                          onChange={(e) => {
                            const { value } = e.target;
                            const regex = /^[0-9a-zA-Z./]*$/; // Allow numbers, letters, . and /
                            if (regex.test(value)) {
                              form.setFieldValue("buyerAddress", value);
                            }
                          }}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="buyerAddress"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  {buyers.length > 0 && (
                    <Box overflowX="auto" mb="4">
                      <Table size="md" mt="4" border={"1px solid #e3e6f0"}>
                        <Thead>
                          <Tr>
                            <Th
                              fontWeight="bolder"
                              letterSpacing={0.1}
                              fontSize="14px"
                            >
                              Buyer Name
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {buyers.map((buyer, index) => (
                            <React.Fragment key={index}>
                              <Tr>
                                <Td
                                  display={"flex"}
                                  alignItems={"center"}
                                  gap={2}
                                >
                                  {expandedRows.includes(index) ? (
                                    <FaMinusCircle
                                      onClick={() => handleMinus(index)}
                                      fontSize={16}
                                      color="#2D50D6"
                                    />
                                  ) : (
                                    <FaPlusCircle
                                      onClick={() => handlePlus(index)}
                                      fontSize={16}
                                      color="#2D50D6"
                                    />
                                  )}
                                  <Text display={"flex"}>
                                    {buyer.buyerName}
                                  </Text>
                                </Td>
                              </Tr>
                              {expandedRows.includes(index) && (
                                <Tr>
                                  <Td>
                                    <Text mb="1">
                                      Buyer Share: {buyer.buyerShare}
                                    </Text>
                                    <Text mb="1">
                                      Buyer Aadhaar: {buyer.buyerAadhaar}
                                    </Text>
                                    <Text>
                                      Buyer Address: {buyer.buyerAddress}
                                    </Text>
                                  </Td>
                                </Tr>
                              )}
                            </React.Fragment>
                          ))}
                        </Tbody>
                      </Table>
                    </Box>
                  )}
                  <Box textAlign="left" alignItems="left">
                    <Flex justifyContent="flex-start">
                      <Button
                        color="#fff"
                        isLoading={props.isSubmitting}
                        loadingText={"submit.."}
                        type="submit"
                        fontWeight="400"
                        border="1px solid #2D50D6"
                        bg="#2D50D6"
                        _hover={{
                          bg: "#02ABEF",
                          borderColor: "#02ABEF",
                          color: "#fff",
                        }}
                        isDisabled={totalShare >= 100} // Disable Add Buyer button when total share reaches 100
                      >
                        Add Buyer
                      </Button>
                    </Flex>
                  </Box>
                  <Divider
                    mt="1.2rem"
                    mb="1.2rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <Heading as="h5" color="black" mb="4">
                    Improvement Details
                  </Heading>
                  <Field name="DateImprovement">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <FormLabel
                          htmlFor="DateImprovement"
                          display={"flex"}
                          gap={1}
                          m="0"
                          p="0"
                        >
                          Date Of Improvement
                        </FormLabel>
                        <Input
                          {...field}
                          placeholder="Select Date"
                          type="date"
                          fontSize="15px"
                          borderColor="#ccc"
                          height="50px"
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="DateImprovement"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="CostImprovement">
                    {({ field, form }: any) => (
                      <Box width="100%" mb="8">
                        <Input
                          {...field}
                          type="text"
                          placeholder="Cost of Improvement"
                          id="CostImprovement"
                          maxLength={12}
                          fontSize="15px"
                          borderColor="#ccc"
                          height="50px"
                          onChange={(e: any) => {
                            const { value } = e.target;
                            const regex = /^[0-9]*$/;
                            if (regex.test(value)) {
                              form.setFieldValue("CostImprovement", value);
                            }
                          }}
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="CostImprovement"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                </ModalBody>
                <Divider
                  mt="0.1rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <ModalFooter>
                  <Stack direction="row" spacing="3">
                    <Button
                      onClick={() => setIsBuyerModalOpen(false)}
                      bg="white"
                      color="#2D50D6"
                      border="1px solid #2D50D6"
                    >
                      Cancel
                    </Button>
                    <Button
                      color="#fff"
                      onClick={handleSubmit}
                      fontWeight="400"
                      border="1px solid #2D50D6"
                      bg="#2D50D6"
                      _hover={{
                        bg: "#02ABEF",
                        borderColor: "#02ABEF",
                        color: "#fff",
                      }}
                      isDisabled={totalShare !== 100} // Enable Submit button only when total share is 100
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

export default Property;
