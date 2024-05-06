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
  Checkbox,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

interface InputValueTypes {
  FirstName: string;
  LastName: string;
  Email: string;
  MobileNumber: string;
  isActive: boolean;
}

const queriesFormValidationSchema = Yup.object({
  FirstName: Yup.string().required("Name is required"),
  MobileNumber: Yup.string().required("Name is required"),
});

export default function StaffEdit() {
  const Toast = useToast();
  const router = useRouter();
  const showToast = () => {
    Toast({
      title: "Staff Edited Sucessfully...",
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
  const handleCancel = () => {
    router.push("/dashboard/user/list");
  };

  return (
    <Box minH={"86vh"}>
      <Text as={"h2"} pt={24} pb={2} mx={"1.5rem"} fontWeight={"600"}>
        Edit staff
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
        <Box p={{ base: 4, md: 6 }}>
          <Formik
            initialValues={{
              FirstName: "",
              LastName: "",
              Email: "",
              MobileNumber: "",
              isActive: true,
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
                <Center mb={4}>
                  <Flex flexDir={"column"} align={"center"}>
                    <Text as={"h4"} mb={2}>
                      Profile Picture
                    </Text>
                    <Box
                      border={"1px solid #dddfeb"}
                      padding={"0.25rem"}
                      rounded={"full"}
                    >
                      <Avatar
                        size={{ base: "lg", lg: "xl" }}
                        name="Gokul Krishnan"
                        src="https://bit.ly/broken-link"
                      />
                    </Box>
                  </Flex>
                </Center>
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
                      {({ field }: any) => (
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
                <Flex direction={{ base: "column", md: "row" }}>
                  <Box me={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                    <Field name="Email">
                      {({ field }: any) => (
                        <FormControl mb={4}>
                          <FormLabel htmlFor="Email">Email</FormLabel>
                          <Input
                            {...field}
                            id="Email"
                            type="email"
                            required
                            padding={"1.5rem"}
                            border={"1px solid #CCC"}
                            border-radius={"8px"}
                            outline={"none"}
                            maxLength={10}
                            disabled
                            bg={"lightgrey"}
                          />
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box ms={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                    <Field name="MobileNumber">
                      {({ field }: any) => (
                        <FormControl mb={4} isRequired>
                          <FormLabel htmlFor="MobileNumber">
                            Mobile Number
                          </FormLabel>
                          <Input
                            {...field}
                            id="MobileNumber"
                            type="number"
                            required
                            padding={"1.5rem"}
                            border={"1px solid #CCC"}
                            border-radius={"8px"}
                            outline={"none"}
                            maxLength={10}
                            onChange={(e: any) => {
                              const { value } = e.target;
                              const regex = /^[0-9]*$/;
                              if (!regex.test(value)) {
                              } else {
                                props.setFieldValue("MobileNumber", value);
                              }
                            }}
                          />
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </Flex>
                <Field name="isActive">
                  {({ field }: any) => (
                    <FormControl mb={4}>
                      <Checkbox
                        {...field}
                        id="isActive"
                        name="isActive"
                        isChecked={props.values.isActive}
                        colorScheme="blue"
                      >
                        Is Active
                      </Checkbox>
                    </FormControl>
                  )}
                </Field>
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
