"use client";
import React, { useRef } from "react";
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
  FormControl,
  FormLabel,
  Input,
  Divider,
  Stack,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues = {
  EmployerName: "",
  Form16PartA: "",
  Form16PartB: "",
  MonthPayslip: "",
};

const validationSchema = Yup.object().shape({
  EmployerName: Yup.string().required("This field is required."),
  Form16PartB: Yup.mixed().required("This field is required."),
});

const EmployerModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  const initialRef = useRef<HTMLInputElement>(null);
  const finalRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = React.useState('xl')

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
              <ModalHeader>Salary Details</ModalHeader>
              <Divider
                mt="0.1rem"
                mb="1.2rem"
                border="0"
                borderTop="1px solid rgba(0, 0, 0, 0.1)"
              />
              <ModalCloseButton />
              <ModalBody>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  spacing="8"
                  mb="8"
                >
                  <Field name="EmployerName">
                    {({ field }: any) => (
                      <Box width="100%">
                        <FormLabel
                          htmlFor="EmployerName"
                          display={"flex"}
                          gap={1}
                          m="0"
                          p="0"
                          mb="2"
                        >
                          Employer Name
                          <Text color="red">*</Text>
                        </FormLabel>
                        <Input
                          {...field}
                          type="text"
                          id="EmployerName"
                          placeholder="Enter the employer name"
                          fontSize="14px"
                          borderColor="#ccc"
                          height="42px"
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="EmployerName"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="Form16PartA">
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel
                          htmlFor="Form16PartA"
                          display={"flex"}
                          gap={1}
                          m="0"
                          p="0"
                        >
                          Form 16 Part A
                        </FormLabel>
                        <Tooltip
                          label={props.values.Form16PartA}
                          aria-label="Form16PartA Tooltip"
                          placement="bottom"
                          bg="white"
                          color="black"
                        >
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
                            fontSize="14px"
                            width="140px"
                            whiteSpace="nowrap"
                            overflow="hidden"
                            textOverflow="clip"
                          >
                            {props.values.Form16PartA ||
                              "Select your file! (PDF / Image)ASMDnbasmdsh"}
                          </Text>
                          <Input
                            {...field}
                            width="100%"
                            id="Form16PartA"
                            type="file"
                            accept=".pdf, image/png, image/jpeg"
                            style={{ display: "none" }}
                          />
                          <Button
                            as="label"
                            borderLeftRadius="0px"
                            htmlFor="Form16PartA"
                            cursor="pointer"
                            className="hover-button"
                            fontWeight="400"
                            fontSize="14px"
                            color="#2D50D6"
                                textTransform="uppercase"
                                _hover={{ bg: "#2D50D6", color: "white" }}
                          >
                            Browse
                          </Button>
                        </Box>
                        </Tooltip>
                      </FormControl>
                    )}
                  </Field>
                </Stack>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  spacing="8"
                  mb="5"
                >
                  <Field name="Form16PartB">
                    {({ field }: any) => (
                      <>
                        <FormControl>
                          <FormLabel
                            htmlFor="Form16PartB"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Form 16 Part B<Text color="red">*</Text>
                          </FormLabel>
                          <Tooltip
                          label={props.values.Form16PartB}
                          aria-label="Form16PartB Tooltip"
                          placement="bottom"
                          bg="white"
                          color="black"
                        >
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
                              fontSize="14px"
                              width="140px"
                            whiteSpace="nowrap"
                            overflow="hidden"
                            textOverflow="clip"
                            >
                              {props.values.Form16PartB ||
                                "Select your file! (PDF / Image)"}
                            </Text>
                            <Input
                              {...field}
                              id="Form16PartB"
                              type="file"
                              accept=".pdf, image/png, image/jpeg"
                              style={{ display: "none" }}
                            />
                            <Button
                              as="label"
                              borderLeftRadius="0px"
                              htmlFor="Form16PartB"
                              cursor="pointer"
                              className="hover-button"
                              fontSize="14px"
                              fontWeight="400"
                              color="#2D50D6"
                                textTransform="uppercase"
                                _hover={{ bg: "#2D50D6", color: "white" }}
                            >
                              Browse
                            </Button>
                          </Box>
                          </Tooltip>
                          <ErrorMessage
                          className="formik-errormessage"
                          name="Form16PartB"
                          component="div"
                        />
                        </FormControl>                       
                      </>
                    )}
                  </Field>
                  <Field name="MonthPayslip">
                    {({ field }: any) => (
                      <>
                        <FormControl>
                          <FormLabel
                            htmlFor="MonthPayslip"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Last Month-Payslip
                          </FormLabel>
                          <Tooltip
                          label={props.values.MonthPayslip}
                          aria-label="MonthPayslip Tooltip"
                          placement="bottom"
                          bg="white"
                          color="black"
                        >
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
                              fontSize="14px"
                              width="140px"
                              whiteSpace="nowrap"
                              overflow="hidden"
                              textOverflow="clip"
                            >
                              {props.values.MonthPayslip ||
                                "Select your file! (PDF / Image)"}
                            </Text>
                            <Input
                              {...field}
                              id="MonthPayslip"
                              type="file"
                              accept=".pdf, image/png, image/jpeg"
                              style={{ display: "none" }}
                            />
                            <Button
                              as="label"
                              borderLeftRadius="0px"
                              htmlFor="MonthPayslip"
                              cursor="pointer"
                              className="hover-button"
                              fontSize="14px"
                              fontWeight="400"
                              color="#2D50D6"
                                textTransform="uppercase"
                                _hover={{ bg: "#2D50D6", color: "white" }}
                            >
                              Browse
                            </Button>
                          </Box>
                          </Tooltip>
                          <ErrorMessage
                          className="formik-errormessage"
                          name="MonthPayslip"
                          component="div"
                        />
                        </FormControl>
                      </>
                    )}
                  </Field>
                </Stack>
              </ModalBody>
              <Divider
                mt="0.2rem"
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
                  border=" 1px solid #2D50D6"
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

export default EmployerModal;