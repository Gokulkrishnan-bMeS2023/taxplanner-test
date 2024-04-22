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
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import * as Yup from "yup";

interface InputValueTypes {
  email: string;
  password: string;
}

const queriesFormValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter()

  const handleSubmitNowButton = async (
    values: InputValueTypes,
    actions: FormikHelpers<InputValueTypes>,
    props: { resetForm: () => void }
  ) => {
    try {
      const response = await axios.get(
        `https://taxplanner-test-json.onrender.com/user?email=${values.email}&password=${values.password}`
      );
      if (response.data.length > 0) {
        setError("Login successfully");
        props.resetForm();
      } else {
        // setError("Login failed");
        router.push("/dashhboard")
        props.resetForm();
      }
      console.log(response.data);
      
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      actions.setSubmitting(false);
      console.log(values);
    }
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
        p={{ md: "3rem" }}
        py={{ base: "2rem" }}
        gap={"10px"}
        bg={"#fff"}
        borderRadius={"20px"}
        flexDirection={{ lg: "row", md: "row", base: "column" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={{ base: "100%", md: "50%" }}
          p={{ md: "1.5rem" }}
        >
          <Image
            src="/assets/Taxplanner-logo.png"
            height={{ lg: "160px", md: "100px", base: "80px" }}
            width={{ lg: "160px", md: "100px", base: "80px" }}
            alt=""
          />
          <Text as="h2" fontWeight={600} color="#01ACF1" whiteSpace="nowrap">
            Tax Planner
          </Text>
        </Box>
        <Box
          display={"flex"}
          width={{ base: "100%", lg: "50%" }}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text as={"h3"} mb={6} textAlign={"center"}>
            Welcome Back!
          </Text>
          <Text color={"red"} mb={4}>{error}</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
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
                            Email Address
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
                  <Box mb={6} w={"100%"} pos={"relative"}>
                    <Field name="password">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                          mb={2}
                        >
                          <Input
                            {...field}
                            id="password"
                            type="password"
                            required
                            placeholder=""
                            padding={"1.5rem 1rem 1.5rem"}
                            border={"2px solid #dfe4fd"}
                            border-radius={"8px"}
                            maxLength="10"
                            outline={"none"}
                            fontSize={"14px"}
                            autoComplete="password"
                            css={{
                              "&::placeholder": {
                                color: "transparent",
                              },
                              "&:focus + label, &:not(:placeholder-shown) + label":
                                {
                                  transform: "translateY(-115%) scale(0.8)",
                                  color: "gray",
                                },
                            }}
                          />
                          <FormLabel
                            htmlFor="password"
                            position="absolute"
                            top="14px"
                            left="15px"
                            color="#555"
                            pointerEvents="none"
                            transformOrigin="left center"
                            transition="transform 250ms"
                            bg={"white"}
                            px={1}
                            zIndex={1}
                            fontSize={"14px"}
                          >
                            Password
                          </FormLabel>
                          <FormErrorMessage
                            position={"absolute"}
                            bottom={-5}
                            left={1}
                            fontSize={"12px"}
                          >
                            {form.errors.password}
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
                    color={"#fff"}
                    style={{ transition: ".5s" }}
                    _hover={{
                      bgColor: "#01ACF1",
                    }}
                    _focus={{
                      boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                    }}
                  >
                    Login
                  </Button>
                  <Divider my={"16px"} />
                  <Button bg={"rgb(234, 67, 53)"} _hover={{ bg: "red" }}>
                    <FaGoogle color="#fff" />
                    <Text color={"#fff"} pl={1}>
                      Login with Google
                    </Text>
                  </Button>
                  <Divider my={"16px"} />
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"100%"}
                    justifyContent={"center"}
                    fontSize={"12px"}
                    color={"#02ABEF"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <Link
                      href="/forgot-password"
                      _hover={{
                        color: "#2d50d6",
                        textDecoration: "underline",
                        textDecorationColor: "2d50d6",
                      }}
                    >
                      Forgot Password?
                    </Link>
                    <Link
                      href="/register"
                      _hover={{
                        color: "#2d50d6",
                        textDecoration: "underline",
                        textDecorationColor: "2d50d6",
                      }}
                    >
                      Create an Account
                    </Link>
                  </Box>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}
