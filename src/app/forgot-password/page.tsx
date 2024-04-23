"use client";

import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";

interface InputValueTypes {
  email: string;
}

const queriesFormValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function LoginForm() {
  const [isSend, setIsSend] = useState(false);
  const handleSubmitNowButton = (
    values: InputValueTypes,
    actions: FormikHelpers<InputValueTypes>,
    props: { resetForm: () => void }
  ) => {
    setIsSend(true);
    setTimeout(() => {
      props.resetForm();
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      p={{ base: "1rem", md: "3rem" }}
      bg={"#f3f5f9"}
    >
      <Box
        display={"flex"}
        width={"900px"}
        height={"auto"}
        boxShadow="0 1rem 3rem rgba(0,0,0,.175)"
        p={{ md: "2rem" }}
        py={{ base: "2rem" }}
        bg={"#fff"}
        borderRadius={"20px"}
        flexDirection={{ lg: "row", md: "row", base: "column" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={{ base: "100%", md: "40%" }}
        >
          <Image
            src="https://services.taxplanner.co.in/static/img/forgot-pass.svg"
            height={{ lg: "300px", md: "100%", base: "200px" }}
            width={{ lg: "300px", md: "100%", base: "200px" }}
            alt="forgotpassword"
          />
        </Box>
        <Box
          display={"flex"}
          width={{ base: "100%", lg: "60%" }}
          flexDirection={"column"}
          alignItems={"center"}
        >
          {isSend || (
            <Text as={"h3"} mb={6} textAlign={"center"}>
              Forgot Your Password?
            </Text>
          )}
          {isSend ? (
            <Box>
              <Text as={"h3"} mb={6} textAlign={"center"}>
                Successfully Sent
              </Text>
              <Text as={"p"} textAlign={"center"} mb={"10"} color={"black"}>
                We&apos;ve emailed you instructions to reset your password!
              </Text>
            </Box>
          ) : (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={queriesFormValidationSchema}
              onSubmit={(values, actions) =>
                handleSubmitNowButton(values, actions, {
                  resetForm: actions.resetForm,
                })
              }
            >
              {(props) => (
                <Form style={{ width: "85%" }}>
                  <Flex direction="column" w={"100%"}>
                    <Text mb={4} color={"black"}>
                      We get it, stuff happens. Just enter your email address
                      below and we&apos;ll send you a link to reset your
                      password!
                    </Text>
                    <Box mb={5} w={"100%"} pos={"relative"}>
                      <Field name="email">
                        {({ field, form }: any) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                            mb={2}
                          >
                            <Input
                              {...field}
                              id="email"
                              type="email"
                              required
                              placeholder=""
                              padding={"1.5rem 1rem 1.5rem"}
                              border={"2px solid #dfe4fd"}
                              border-radius={"15px"}
                              outline={"none"}
                              autoComplete="email"
                              fontSize={"14px"}
                              css={{
                                "&::placeholder": {
                                  color: "transparent",
                                },
                                "&:focus + label, &:not(:placeholder-shown) + label":
                                  {
                                    transform: "translateY(-120%) scale(0.8)",
                                    color: "gray",
                                  },
                              }}
                            />
                            <FormLabel
                              htmlFor="email"
                              position="absolute"
                              top="14px"
                              left="15px"
                              color="#555"
                              pointerEvents="none"
                              transformOrigin="left center"
                              transition="transform 250ms"
                              bg={"white"}
                              zIndex={1}
                              px={1}
                              fontSize={"14px"}
                            >
                              Enter Email Address...
                            </FormLabel>
                            <FormErrorMessage
                              position={"absolute"}
                              bottom={-5}
                              left={1}
                              fontSize={"12px"}
                            >
                              {form.errors.email}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Button
                      type="submit"
                      isLoading={props.isSubmitting}
                      loadingText="Login"
                      bgColor={"#2d50d6"}
                      color={"#DFE4FD"}
                      style={{ transition: ".5s" }}
                      _hover={{
                        bgColor: "#01ACF1",
                        color: "#fff",
                      }}
                      _focus={{
                        boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                      }}
                    >
                      Reset Password
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          )}

          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            justifyContent={"center"}
            fontSize={"13px"}
            color={"#02ABEF"}
            alignItems={"center"}
            gap={1}
            mt={6}
          >
            <Link
              href="/register"
              _hover={{
                color: "#2d50d6",
                textDecoration: "underline",
                textDecorationColor: "2d50d6",
              }}
            >
              Create an Account!
            </Link>
            <Link
              href="/login"
              _hover={{
                color: "#2d50d6",
                textDecoration: "underline",
                textDecorationColor: "2d50d6",
              }}
            >
              Already have an account? Login
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
