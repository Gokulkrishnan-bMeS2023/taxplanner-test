"use client";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  FormControl,
  useToast,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";

interface InputValueTypes {
  firstName: string;
  mobileNumber?: string;
  email: string;
  FilingType?: string;
  id: string;
}

interface DataProps {
  Data: InputValueTypes[];
}

const queriesFormValidationSchema = Yup.object({
  firstName: Yup.string().required("Name is required"),
});

export default function UserEdit() {
  const [Datas, setDatas] = useState<DataProps[]>();
  const Toast = useToast();
  const router = useRouter();
  const showToast = () => {
    Toast({
      title: "User Edited Sucessfully...",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
    });
  };
  const searchParams = useSearchParams();

  const UserId = searchParams.get("id");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://taxplanner-test-json.onrender.com/user?id=${UserId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const userData = await response.json();
        setDatas(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();

    // Cleanup function (optional)
    return () => {
      // Any cleanup code if necessary
    };
  }, [UserId]);

  const handleSubmitNowButton = async (
    values: InputValueTypes,
    actions: any,
    props: { resetForm: () => void }
  ) => {
    const res = await axios.put(
      `https://taxplanner-test-json.onrender.com/user/${values.id}`,
      values
    );

    if (res.status === 200) {
      showToast();
      props.resetForm();
      actions.setSubmitting(false);
      setDatas([res.data]);
      router.push("/dashboard/staff/list");
    }
  };
  const handleCancel = () => {
    router.push("/dashboard/staff/list");
  };

  return (
    <Box minH={"86vh"}>
      <Text as={"h2"} pt={24} pb={2} mx={"1.5rem"} fontWeight={"600"}>
        Payment
      </Text>
      <Box
        bgColor={"white"}
        border={"1px solid #CCC"}
        borderRadius={"8px"}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        mb={"1rem"}
        mx={"1.5rem"}
      >
        <Box p={{ base: 4, md: 6 }}>
          {Datas?.map((data: any, index: any) => (
            <Formik
              initialValues={{
                ...data,
                firstName: data?.firstName,
                mobileNumber: data?.mobileNumber,
                email: data?.email,
                FilingType: data?.FilingType,
                id: data?.id,
              }}
              validationSchema={queriesFormValidationSchema}
              onSubmit={(values, actions) =>
                handleSubmitNowButton(values, actions, {
                  resetForm: actions.resetForm,
                })
              }
              key={index}
            >
              {(props) => (
                <Form>
                  <Flex direction={{ base: "column", md: "row" }}>
                    <Box me={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                      <Field name="firstName">
                        {({ field }: any) => (
                          <FormControl mb={6}>
                            <FormLabel htmlFor="firstName">FirstName</FormLabel>
                            <Input
                              {...field}
                              id="firstName"
                              required
                              h={"50px"}
                              border={"1px solid #CCC"}
                              border-radius={"8px"}
                              outline={"none"}
                              disabled
                            />
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box ms={{ md: 2 }} w={{ md: "50%" }} pos={"relative"}>
                      <Field name="mobileNumber">
                        {({ field }: any) => (
                          <FormControl mb={6}>
                            <FormLabel htmlFor="mobileNumber">
                              MobileNumber
                            </FormLabel>
                            <Input
                              {...field}
                              type="number"
                              id="mobileNumber"
                              h={"50px"}
                              border={"1px solid #CCC"}
                              border-radius={"8px"}
                              outline={"none"}
                              disabled
                            />
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </Flex>
                  <Field name="email">
                    {({ field }: any) => (
                      <FormControl mb={4}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          required
                          h={"50px"}
                          border={"1px solid #CCC"}
                          border-radius={"8px"}
                          outline={"none"}
                          disabled
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="FilingType">
                    {({ field }: any) => (
                      <FormControl mb={4}>
                        <FormLabel htmlFor="FilingType">FilingType</FormLabel>
                        <Input
                          {...field}
                          id="FilingType"
                          type="Text"
                          required
                          h={"50px"}
                          border={"1px solid #CCC"}
                          border-radius={"8px"}
                          outline={"none"}
                          disabled
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="Amount">
                    {({ field }: any) => (
                      <FormControl mb={4}>
                        <FormLabel htmlFor="Amount">Amount</FormLabel>
                        <Input
                          {...field}
                          id="Amount"
                          type="number"
                          required
                          h={"50px"}
                          border={"1px solid #CCC"}
                          border-radius={"8px"}
                          outline={"none"}
                          disabled
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Flex justifyContent={"flex-end"}>
                    <Box display={"inline-block"}>
                      <Box
                        display={"flex"}
                        gap={3}
                        flexDirection={{ base: "column-reverse", md: "row" }}
                      >
                        <Button
                          border={"2px solid #2d50d6"}
                          colorScheme="blue"
                          py={4}
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
                          isLoading={props.isSubmitting}
                          loadingText="Save"
                          colorScheme="blue"
                          py={4}
                          bgColor={"#2d50d6"}
                          color={"#DFE4FD"}
                          _hover={{ bgColor: "#02ABEF", color: "#fff" }}
                          _focus={{
                            boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                          }}
                        >
                          Confirm Payment
                        </Button>
                      </Box>
                    </Box>
                  </Flex>
                </Form>
              )}
            </Formik>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
