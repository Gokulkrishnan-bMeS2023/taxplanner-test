"use client";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
  useToast,
  Text,
} from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

interface InputValueTypes {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

const queriesFormValidationSchema = Yup.object({
  FirstName: Yup.string().required("Name is required"),
  Email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  Password: Yup.string()
    .required("Password is required")
    .min(6, "must be at least 6 characters"),
  ConfirmPassword: Yup.string()
    .required("Confirm Password is required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.Password === value;
    }),
});

export default function StaffAdd() {
  const Toast = useToast();
  const router= useRouter()
  const showToast = () => {
    Toast({
      title: "Staff Added Sucessfully...",
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
  const handleCancel=()=>{
    router.push("/dashboard")
  }
  return (
    <Box minH={"86vh"}>
      <Text as={"h2"} pt={24} pb={15} mx={"1.5rem"} fontWeight={"600"}>
        Add staff
      </Text>
      <Box
        bgColor={"white"}
        border={"1px solid #DFE4FD"}
        borderRadius={"8px"}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        mx={"1.5rem"}
        px={{ md: "", lg: "7rem" }}
      >
        <Box p={{ base: 4, md: 12 }}>
          <Formik
            initialValues={{
              FirstName: "",
              LastName: "",
              Email: "",
              Password: "",
              ConfirmPassword: "",
            }}
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
                  <Box me={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                    <Field name="FirstName">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.FirstName && form.touched.FirstName
                          }
                          isRequired
                          mb={6}
                        >
                          <FormLabel htmlFor="FirstName">FirstName</FormLabel>
                          <Input
                            {...field}
                            id="FirstName"
                            required
                            placeholder="Enter First Name"
                            padding={"1.5rem"}
                            border={"1px solid #CCC"}
                            border-radius={"8px"}
                            outline={"none"}
                          />
                          <FormErrorMessage
                            position={"absolute"}
                            bottom={-6}
                            left={1}
                            fontSize={"13px"}
                          >
                            {form.errors.FirstName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box ms={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                    <Field name="LastName">
                      {({ field, form }: any) => (
                        <FormControl mb={6}>
                          <FormLabel htmlFor="LastName">Last Name</FormLabel>
                          <Input
                            {...field}
                            id="LastName"
                            placeholder="Enter Last Name"
                            padding={"1.5rem"}
                            border={"1px solid #CCC"}
                            border-radius={"8px"}
                            outline={"none"}
                          />
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </Flex>
                <Box mb={6} w={{ md: "100%" }} pos={"relative"}>
                  <Field name="Email" mb={6}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.Email && form.touched.Email}
                        mb={4}
                        isRequired
                      >
                        <FormLabel htmlFor="Email">Email</FormLabel>
                        <Input
                          {...field}
                          id="Email"
                          type="email"
                          required
                          placeholder="Enter Email Address"
                          padding={"1.5rem"}
                          border={"1px solid #CCC"}
                          border-radius={"8px"}
                          outline={"none"}
                        />
                        <FormErrorMessage
                          position={"absolute"}
                          bottom={-6}
                          left={1}
                          fontSize={"13px"}

                        >
                          {form.errors.Email}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Flex direction={{ base: "column", md: "row" }}>
                  <Box me={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                    <Field name="Password">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.Password && form.touched.Password
                          }
                          isRequired
                          mb={6}
                        >
                          <FormLabel htmlFor="Password">Password</FormLabel>
                          <Input
                            {...field}
                            id="Password"
                            type="password"
                            required
                            placeholder="Enter Password"
                            padding={"1.5rem"}
                            border={"1px solid #CCC"}
                            border-radius={"8px"}
                            outline={"none"}
                            maxLength={10}
                          />
                          <FormErrorMessage
                            position={"absolute"}
                            bottom={-6}
                            left={1}
                            fontSize={"13px"}
                          >
                            {form.errors.Password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box ms={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                    <Field name="ConfirmPassword">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.ConfirmPassword &&
                            form.touched.ConfirmPassword
                          }
                          mb={10}
                          isRequired
                        >
                          <FormLabel htmlFor="ConfirmPassword">
                            ConfirmPassword
                          </FormLabel>
                          <Input
                            {...field}
                            id="ConfirmPassword"
                            type="password"
                            required
                            placeholder="Enter Confirm Password"
                            padding={"1.5rem"}
                            border={"1px solid #CCC"}
                            border-radius={"8px"}
                            outline={"none"}
                            maxLength={10}
                          />
                          <FormErrorMessage
                            position={"absolute"}
                            bottom={-6}
                            left={1}
                            fontSize={"13px"}
                          >
                            {form.errors.ConfirmPassword}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </Flex>
                <Flex justifyContent={"flex-end"}>
                  <Box display={"inline-block"}>
                    <Box display={"flex"} gap={3}>
                      <Button
                        border={"2px solid #2d50d6"}
                        colorScheme="blue"
                        py={4}
                        w={"60%"}
                        color={"#2d50d6"}
                        bg={"#fff"}
                        _hover={{ bgColor: "#2d50d6", color: "#DFE4FD" }}
                        _focus={{
                          boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                        }}
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        border={"2px solid #2d50d6"}
                        isLoading={props.isSubmitting}
                        loadingText="Save"
                        colorScheme="blue"
                        py={4}
                        w={"60%"}
                        bgColor={"#2d50d6"}
                        color={"#DFE4FD"}
                        _hover={{ bgColor: "#2d50d6", color: "#DFE4FD" }}
                        _focus={{
                          boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                        }}
                      >
                        Save
                      </Button>
                    </Box>
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
