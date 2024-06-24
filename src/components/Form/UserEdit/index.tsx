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
import axios from "axios";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

interface InputValueTypes {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber?: string;
  IsActive: boolean;
  id: string;
  UpdatedAt: Date;
  ProfileURL?: string;
}

interface DataProps {
  Data: InputValueTypes[];
}

const queriesFormValidationSchema = Yup.object({
  firstName: Yup.string().required("Name is required"),
});

export default function UserEdit({ Data }: DataProps) {
  const [Datas, setDatas] = useState(Data);
  const Toast = useToast();
  const router = useRouter();
  const showToast = () => {
    Toast({
      title: "User Edited Sucessfully...",
      duration: 1000,
      isClosable: true,
      status: "success",
      position: "top",
    });
  };

  const handleSubmitNowButton = async (
    values: InputValueTypes,
    actions: any
  ) => {
    const res = await axios.put(
      `https://taxplanner-test-json.onrender.com/user/${values.id}`,
      values
    );

    if (res.status === 200) {
      showToast();
      actions.setSubmitting(false);
      setDatas([res.data]);
      router.push("/dashboard/user/list");
      router.refresh();
    }
  };
  const handleCancel = () => {
    router.push("/dashboard/user/list");
  };

  return (
    <Box minH={"86vh"}>
      <Text as={"h2"} pt={"120px"} mx={"1.5rem"} fontWeight={"600"}>
        Edit user
      </Text>
      <Box
        bgColor={"white"}
        border={"1px solid #DFE4FD"}
        borderRadius={"8px"}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        m={"1.5rem"}
        px={{ base: "1rem", lg: "7rem" }}
        py={"1rem"}
      >
        <>
          {Datas?.map((data, index) => (
            <Formik
              initialValues={{
                ...data,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobileNumber: data.mobileNumber,
                IsActive: data.IsActive,
                id: data.id,
                UpdatedAt: new Date(),
              }}
              validationSchema={queriesFormValidationSchema}
              onSubmit={(values, actions) =>
                handleSubmitNowButton(values, actions)
              }
              key={index}
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
                          src={data.ProfileURL}
                          name={data.firstName + " " + data.lastName}
                        />
                      </Box>
                    </Flex>
                  </Center>
                  <Flex direction={{ base: "column", md: "row" }}>
                    <Box me={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                      <Field name="firstName">
                        {({ field, form }: any) => (
                          <FormControl
                            isInvalid={
                              form.errors.firstName && form.touched.firstName
                            }
                            isRequired
                            mb={6}
                          >
                            <FormLabel htmlFor="firstName">FirstName</FormLabel>
                            <Input
                              {...field}
                              id="firstName"
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
                              {form.errors.firstName}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box ms={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                      <Field name="lastName">
                        {({ field }: any) => (
                          <FormControl mb={6}>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Input
                              {...field}
                              id="lastName"
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
                      <Field name="email">
                        {({ field }: any) => (
                          <FormControl mb={4}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                              {...field}
                              id="email"
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
                      <Field name="mobileNumber">
                        {({ field }: any) => (
                          <FormControl mb={4}>
                            <FormLabel htmlFor="mobileNumber">
                              Mobile Number
                            </FormLabel>
                            <Input
                              {...field}
                              id="mobileNumber"
                              type="number"
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
                  </Flex>
                  <Field name="isActive">
                    {({ field }: any) => (
                      <FormControl mb={4}>
                        <Checkbox
                          {...field}
                          id="IsActive"
                          name="IsActive"
                          isChecked={props.values.IsActive}
                          colorScheme="blue"
                        >
                          Is Active
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Flex justifyContent={"flex-end"}>
                    <Box display={"inline-block"}>
                      <Flex gap={3}>
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
                          <Link href={"/dashboard/user/list"}>Cancel</Link>
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
                      </Flex>
                    </Box>
                  </Flex>
                </Form>
              )}
            </Formik>
          ))}
        </>
      </Box>
    </Box>
  );
}
