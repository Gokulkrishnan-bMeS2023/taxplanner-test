"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  Image,
  Flex,
  Input,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
interface Errors {
  firstName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  global?: string;
}
export default function SignUpForm(){
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [registrationError, setRegistrationError] = useState<string>("");
  const handleBlurConfirmPassword = () => {
    if (user.password !== user.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "The two password fields didn’t match.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formSubmitted) {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "This field is required",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }
    // Add email validation logic here if needed
    // Check email format
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email address.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }
  };
  const handleRegister = async () => {
    setFormSubmitted(true);
    let newErrors: Errors = {};
    let hasError = false;
    // Check if passwords match
    if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "The two password fields didn’t match.";
      hasError = true;
    }
    // Check if any required fields are empty
    if (
      !user.firstName ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      newErrors = {
        ...(user.firstName ? {} : { firstName: "This field is required." }),
        ...(user.email ? {} : { email: "This field is required." }),
        ...(user.password ? {} : { password: "This field is required." }),
        ...(user.confirmPassword
          ? {}
          : { confirmPassword: "This field is required." }),
      };
      hasError = true;
    }
    if (hasError) {
      setErrors(newErrors);
      return;
    }
    try {
      // Check if the email already exists
      const response = await axios.get(
        `https://taxplanner-test-json.onrender.com/user?email=${user.email}`
      );
      if (response.data.length > 0) {
        // If the response contains data, it means the email already exists
        newErrors.email = "Email is already registered.";
        setErrors(newErrors);
        return;
      }
      // If the email doesn't exist, proceed with registration
      
      const userData = {
        id:uuidv4(),
        firstName: user.firstName,
        lastName:user.lastName,
        email: user.email,
        password:user.password,
        UserType : 3,
        LoginType : 1,
        IsActive : true,
        IsVerified : false,
        CreatedAt : Date(),
        UpdatedAt : Date()
      };
      await axios.post(
        "https://taxplanner-test-json.onrender.com/user",
        userData
      );
      console.log("Registration successful");
    
      // Navigate to login page or show success message
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle other errors if needed
    }
  };
  return (
    <Center minH={{ base: "100vh", lg: "103vh" }} px="1.5rem" bg="#F3F5F9">
      <Container
        maxW={{ base: "520px", md: "540px", lg: "920px" }}
        p="0"
        borderRadius={8}
        bg="white"
        boxShadow="0 1rem 3rem rgba(0,0,0,.175)"
      >
        <Flex justifyContent="center" p="0">
          <Box
            display={{ base: "none", lg: "flex" }}
            w={{ base: "0", lg: "40%" }}
            justifyContent="center"
            alignItems="center"
          >
            <Image src="./assets/sign-up.svg" alt="Contact" width="80%" />
          </Box>
          <Box
            w={{ base: "100%", lg: "60%" }}
            p={{ base: "2.5rem", md: "3.5rem" }}
          >
            <Box p={2}>
              <Center mb={4} textAlign="center">
                <Text color="#3A3B45" fontSize="24px" fontWeight="500">
                  Create an Account!
                </Text>
              </Center>
              <Stack spacing={3}>
                <Stack
                  flexDirection={{ base: "column", sm: "row" }}
                  spacing={{ base: "3", sm: "6" }}
                >
                  <FormControl
                    id="firstName"
                    isRequired
                    flex="1"
                    mb="5"
                    isInvalid={!!errors.firstName}
                  >
                    <Input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      width="100%"
                      height="50px"
                      fontSize=".8rem"
                      fontWeight="400"
                      borderRadius="10rem"
                      lineHeight="1.5"
                      color="#6E707E"
                      bgColor="#fff"
                      border="1px solid #ECF2F4"
                    />
                    <FormErrorMessage fontSize="12.8px">
                      {errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl id="lastName" isRequired flex="1" mb="5">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleChange}
                      width="100%"
                      height="50px"
                      fontSize=".8rem"
                      fontWeight="400"
                      borderRadius="10rem"
                      lineHeight="1.5"
                      color="#6E707E"
                      bgColor="#fff"
                      border="1px solid #ECF2F4"
                    />
                  </FormControl>
                </Stack>
                <FormControl
                  id="email"
                  isRequired
                  mb="5"
                  isInvalid={!!errors.email}
                >
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    width="100%"
                    height="50px"
                    fontSize=".8rem"
                    fontWeight="400"
                    borderRadius="10rem"
                    lineHeight="1.5"
                    color="#6E707E"
                    bgColor="#fff"
                    border="1px solid #ECF2F4"
                  />
                  <FormErrorMessage fontSize="12.8px">
                    {errors.email}
                  </FormErrorMessage>
                  {registrationError && (
                    <FormErrorMessage>{registrationError}</FormErrorMessage>
                  )}
                </FormControl>
                <Stack
                  flexDirection={{ base: "column", sm: "row" }}
                  spacing={{ base: "3", sm: "6" }}
                >
                  <FormControl
                    id="password"
                    isRequired
                    flex="1"
                    mb="5"
                    isInvalid={!!errors.password}
                  >
                    <Input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      width="100%"
                      height="50px"
                      fontSize=".8rem"
                      fontWeight="400"
                      borderRadius="10rem"
                      lineHeight="1.5"
                      color="#6E707E"
                      bgColor="#fff"
                      border="1px solid #ECF2F4"
                    />
                    <FormErrorMessage fontSize="12.8px">
                      {errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    id="confirmPassword"
                    isRequired
                    flex="1"
                    mb="5"
                    isInvalid={!!errors.confirmPassword}
                  >
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={user.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlurConfirmPassword}
                      width="100%"
                      height="50px"
                      fontSize=".8rem"
                      fontWeight="400"
                      borderRadius="10rem"
                      lineHeight="1.5"
                      color="#6E707E"
                      bgColor="#fff"
                      border="1px solid #ECF2F4"
                    />
                    <FormErrorMessage fontSize="12.8px">
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                </Stack>
                {errors.global && (
                  <Text color="green.500" textAlign="center" fontSize="12.8px">
                    {errors.global}
                  </Text>
                )}
                <Button
                  onClick={handleRegister}
                  width="100%"
                  fontSize={{ base: "12.8px", md: "14.2px" }}
                  fontWeight="400"
                  borderRadius="10rem"
                  lineHeight="1.5"
                  color="#FFF"
                  bgColor="#2D50D6"
                  border="1px solid #2D50D6"
                  textAlign="center"
                  verticalAlign="middle"
                  padding="1.3rem 1rem"
                  _hover={{ bgColor: "#02ADEF", borderColor: "#02ADEF" }}
                >
                  Register Account
                </Button>
                <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="0.4rem" />
                <Button
                  width="100%"
                  fontSize={{ base: "12.8px", md: "14.2px" }}
                  fontWeight="400"
                  borderRadius="10rem"
                  lineHeight="1.5"
                  color="#FFF"
                  bgColor="#EA4335"
                  borderColor="#EA4335"
                  textAlign="center"
                  verticalAlign="middle"
                  padding="1.3rem 1rem"
                  _hover={{ bgColor: "#E12717", borderColor: "#E6E6E6" }}
                >
                  <FaGoogle size="16" /> Register with Google
                </Button>
                <Divider border="0.1px solid rgba(0, 0, 0, .1)" my="0.4rem" />
                <Center
                  mt={1}
                  color="#02ABEF"
                  fontSize="12.8px"
                  fontWeight="400"
                  justifyContent="center"
                  textAlign="center"
                  _hover={{ textDecoration: "underline", color: "#2D50D6" }}
                >
                  <Link href={"/login"}>Already have an account? Login</Link>
                </Center>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Center>
  );
};
