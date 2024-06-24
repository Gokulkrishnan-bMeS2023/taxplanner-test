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
  Select,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues = {
  File: "",
  Type: "",
};

const validationSchema = Yup.object().shape({
  File: Yup.string().required("This field is required."),
});

const ExemptionDetail: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const initialRef = useRef<HTMLInputElement>(null);
  const finalRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = React.useState("lg");

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
                <ModalHeader>Exemptions</ModalHeader>
                <Divider
                  mt="0.1rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <ModalCloseButton />
                <ModalBody>
                  <Field name="Type">
                    {({ field }: any) => (
                      <Box width="100%" mb="5">
                        <FormLabel
                          htmlFor="Type"
                          display={"flex"}
                          gap={1}
                          m="0"
                          p="0"
                          mb="2"
                        >
                          Type
                        </FormLabel>
                        <Select>
                          <option value="New House">New House</option>
                          <option value="CG Bond">CG Bond</option>
                        </Select>
                      </Box>
                    )}
                  </Field>

                  <Field name="File">
                    {({ field }: any) => (
                      <>
                        <FormControl>
                          <FormLabel
                            htmlFor="File"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            File<Text color="red">*</Text>
                          </FormLabel>
                          <Tooltip
                            label={props.values.File}
                            aria-label="File Tooltip"
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
                                whiteSpace="nowrap"
                                overflow="hidden"
                                textOverflow="clip"
                              >
                                {props.values.File ||
                                  "Select your file! (PDF / Image)"}
                              </Text>
                              <Input
                                {...field}
                                id="File"
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
                            name="File"
                            component="div"
                          />
                        </FormControl>
                      </>
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

export default ExemptionDetail;