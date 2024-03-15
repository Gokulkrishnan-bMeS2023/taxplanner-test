"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";

interface QueriesFormProps {
  getInTouchLabel: boolean;
}

interface InputValueTypes {
  name: string;
  email: string;
  mobile: string;
}

const queriesFormValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string().required("Mobile is required").length(10),
});

export default function QueriesForm({ getInTouchLabel }: QueriesFormProps) {
  const Toast = useToast();
  const showToast = () => {
    Toast({
      title: "mail.goldenbeetle.mobi says",
      description:
        "Greetings! Thank you for your submission. We will get back to you soon",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
    });
  };

  const handleSubmitNowButton = (
    values: InputValueTypes,
    actions: FormikHelpers<InputValueTypes>,
    props: { resetForm: () => void }
  ) => {
    setTimeout(() => {
      showToast();
      props.resetForm();
      actions.setSubmitting(false);
    }, 1000);
  };
  return (
    <>
      <Box
        bgColor={"white"}
        border={"1px solid #DFE4FD"}
        borderRadius={"8px"}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Box p={{ base: 6, md: 12 }}>
          {getInTouchLabel && (
            <Center>
              <Box
                border={"1px solid #DFE4FD"}
                borderRadius={"8px"}
                px={4}
                py={1}
                color={"#01acf1"}
                mb={4}
              >
                Get In Touch
              </Box>
            </Center>
          )}
          <Center>
            <Box mb={12} textAlign={"center"}>
              <Heading fontWeight={"600"}>
                Have queries? Talk to an expert
              </Heading>
              {/* <Heading fontWeight={"600"}>Talk to an expert</Heading> */}
            </Box>
          </Center>
          <Formik
            initialValues={{ name: "", email: "", mobile: "" }}
            validationSchema={queriesFormValidationSchema}
            onSubmit={(values, actions) =>
              handleSubmitNowButton(values, actions, {
                resetForm: actions.resetForm,
              })
            }
          >
            {(props) => (
              <Form>
                <Flex direction={{ base: "column", md: "row" }}>
                  <Box mb={6} me={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                    <Field name="name">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                          mb={4}
                        >
                          <Input
                            {...field}
                            id="name"
                            required
                            placeholder=""
                            padding={"2.2rem 1rem 1.8rem"}
                            border={"1px solid #dfe4fd"}
                            border-radius={"8px"}
                            outline={"none"}
                            css={{
                              "&::placeholder": {
                                color: "transparent",
                              },
                              "&:focus + label, &:not(:placeholder-shown) + label":
                                {
                                  transform: "translateY(-70%) scale(0.8)",
                                  color: "gray",
                                },
                            }}
                          />
                          <FormLabel
                            htmlFor="name"
                            position="absolute"
                            top="20px"
                            left="15px"
                            color="#555"
                            pointerEvents="none"
                            transformOrigin="left center"
                            transition="transform 250ms"
                          >
                            Your Name
                          </FormLabel>
                          <FormErrorMessage
                            position={"absolute"}
                            bottom={-6}
                            left={1}
                          >
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box mb={6} ms={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                    <Field name="email">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                          mb={4}
                        >
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            required
                            placeholder=""
                            padding={"2.2rem 1rem 1.8rem"}
                            border={"1px solid #dfe4fd"}
                            border-radius={"8px"}
                            outline={"none"}
                            css={{
                              "&::placeholder": {
                                color: "transparent",
                              },
                              "&:focus + label, &:not(:placeholder-shown) + label":
                                {
                                  transform: "translateY(-70%) scale(0.8)",
                                  color: "gray",
                                },
                            }}
                          />
                          <FormLabel
                            htmlFor="email"
                            position="absolute"
                            top="20px"
                            left="15px"
                            color="#555"
                            pointerEvents="none"
                            transformOrigin="left center"
                            transition="transform 250ms"
                          >
                            Your Email
                          </FormLabel>
                          <FormErrorMessage
                            position={"absolute"}
                            bottom={-6}
                            left={1}
                          >
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </Flex>
                <Box mb={6} w={"100%"} pos={"relative"}>
                  <Field name="mobile">
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.mobile && form.touched.mobile}
                        mb={10}
                      >
                        <Input
                          {...field}
                          id="mobile"
                          type="number"
                          required
                          placeholder=""
                          padding={"2.2rem 1rem 1.8rem"}
                          border={"1px solid #dfe4fd"}
                          border-radius={"8px"}
                          outline={"none"}
                          css={{
                            "&::placeholder": {
                              color: "transparent",
                            },
                            "&:focus + label, &:not(:placeholder-shown) + label":
                              {
                                transform: "translateY(-70%) scale(0.8)",
                                color: "gray",
                              },
                          }}
                        />
                        <FormLabel
                          htmlFor="mobile"
                          position="absolute"
                          top="20px"
                          left="15px"
                          color="#555"
                          pointerEvents="none"
                          transformOrigin="left center"
                          transition="transform 250ms"
                        >
                          Your Mobile
                        </FormLabel>
                        <FormErrorMessage
                          position={"absolute"}
                          bottom={-6}
                          left={1}
                        >
                          {form.errors.mobile}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Button
                  type="submit"
                  variant={"outline"}
                  border={"2px solid #2d50d6"}
                  isLoading={props.isSubmitting}
                  loadingText="Submitting"
                  colorScheme="blue"
                  py={7}
                  w={"100%"}
                  bgColor={"#2d50d6"}
                  color={"#DFE4FD"}
                  _hover={{ bgColor: "#2d50d6", color: "#DFE4FD" }}
                >
                  Submit Now
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
}
