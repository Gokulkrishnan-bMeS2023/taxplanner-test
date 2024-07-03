"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  Box,
  FormLabel,
  Stack,
  Text,
  Flex,
  Heading,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

interface User {
  email: string;
  firstName: string;
  id: any;
  lastName: string;
  mobileNumber: string | null;
  profileUrl: string | null;
}

const Profile = () => {
  const [user, setUser] = useState<User>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any>(null);
  const [buttonShow, setbuttonShow] = useState(false);
  console.log(imagePreviewUrl);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:88/user-service/v1/users/profile`,
          {
            method: "GET",
            headers: {
              Accept: "text/plain",
              _at: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJnb2t1bGt0eUBnbWFpbC5jb20iLCJVc2VySWQiOiIzIiwiTmFtZSI6Imdva3VsIiwicm9sZSI6IjMiLCJuYmYiOjE3MTg4MDc3OTcsImV4cCI6MjUzNDAyMjgxMDAwLCJpYXQiOjE3MTg4MDc3OTd9.5GlxRD5_DYffFOAazpyUu_rRwzSMs2Qg3TuW50T_DQs",
            },
          }
        );

        const data = await response.json();
        setUser(data);
        if (data.profileUrl) {
          setImagePreviewUrl(`http://localhost:88${data?.profileUrl}`);
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  console.log(user);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required."),
    mobileNumber: Yup.string().required("This field is required."),
  });

  const validationSchemaPassword = Yup.object().shape({
    oldPassword: Yup.string().required("This field is required."),
    confirmPassword: Yup.string()
      .required("This field is required.")
      .oneOf(
        [Yup.ref("newPassword")],
        "The new password and confirm password do not match"
      ),
    newPassword: Yup.string().required("This field is required."),
  });

  const onSubmit = (values: any, actions: any) => {
    console.log("Form submitted with values:", values);
    actions.setSubmitting(false);
    alert(JSON.stringify(values));
    // http://localhost:88/user-service/v1/users/2
  };

  const handleChangePassword = (values: any, actions: any) => {
    console.log("Form submitted with values:", values);
    actions.setSubmitting(false);
    alert(JSON.stringify(values));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setImagePreviewUrl(URL.createObjectURL(event.target.files[0]));
      setbuttonShow(true);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile || user?.id === null) {
      console.error("File or user?.id is not set");
      return;
    }
    const formData = new FormData();
    formData.append("photoUrl", selectedFile); // Ensure the key is "photoUrl"
    formData.append("UserId", user?.id); // Ensure the key is "UserId"
    try {
      const response = await fetch(
        "http://localhost:88/user-service/v1/users/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Upload response data:", data); // Debugging log
        if (data.imageUrl) {
          setImagePreviewUrl(`http://localhost:88${data?.imageUrl}`); // Update the image preview URL with the response URL
          setbuttonShow(false);
          const fileInput = document.getElementById(
            "profileUrl"
          ) as HTMLInputElement;
          if (fileInput) {
            fileInput.value = "";
          }
        } else {
          setImagePreviewUrl(""); // Handle the case where imageUrl is null
        }
      } else {
        const errorData = await response.json();
        console.error("Upload failed:", errorData);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileDelete = async () => {
    if (user?.id === null) {
      console.error("ID is not set");
      return;
    }
    console.log("Deleting file for user ID:", user?.id);
    try {
      const response = await fetch(
        `http://localhost:88/user-service/v1/users/${user?.id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("File deleted successfully");
        setSelectedFile(null);
        setImagePreviewUrl(null); // Clear the image preview URL
      } else {
        const errorData = await response.json();
        console.error("Delete failed:", errorData);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const handleFileDancel = () => {
    setImagePreviewUrl(user?.profileUrl);
    setbuttonShow(false);
    setSelectedFile(null);
    const fileInput = document.getElementById("profileUrl") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  if (!user) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Box
      pt={24}
      px={{ base: "20px", md: "2.5rem" }}
      pb={"1.5rem"}
      minH={"100vh"}
    >
      <Heading as={"h2"} py="5">
        Profile
      </Heading>
      <Box
        borderRadius="10px"
        boxShadow="0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)"
      >
        <Box
          p={"0.75rem 1.25rem"}
          bg={"#F3F5F9"}
          border={"1px solid #E3E6F0"}
          borderRadius={"10px 10px 0 0"}
        >
          <Text fontWeight="bolder">Profile Information</Text>
        </Box>
        <Box
          bg="white"
          py="2"
          px="4"
          border="1px solid #e3e6f0"
          borderRadius={"0 0 10px 10px"}
        >
          <Center>
            <Box
              display={"flex"}
              flexDirection={"column"}
              my={4}
              alignItems={"center"}
            >
              <Text as={"b"} textAlign={"center"}>
                Profile Picture
              </Text>
              <Box
                border={"1px solid #dddfeb"}
                padding={"0.25rem"}
                rounded={"full"}
                my={2}
              >
                <Avatar
                  src={imagePreviewUrl ? imagePreviewUrl : ""}
                  name={user?.firstName + " " + user?.lastName}
                  size="xl"
                  bg={"lightgrey"}
                />
              </Box>

              <Input
                type="file"
                display={"none"}
                id="profileUrl"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/gif, image/jpg"
              />
              {imagePreviewUrl === null ? (
                <Button
                  as="label"
                  htmlFor="profileUrl"
                  colorScheme="blue"
                  cursor={"pointer"}
                >
                  Upload
                </Button>
              ) : (
                buttonShow || (
                  <Button
                    colorScheme="orange"
                    cursor={"pointer"}
                    onClick={handleFileDelete}
                  >
                    Remove
                  </Button>
                )
              )}
              {buttonShow && (
                <Flex gap={2}>
                  <Button
                    colorScheme="blue"
                    cursor={"pointer"}
                    onClick={handleFileUpload}
                  >
                    Save
                  </Button>
                  <Button
                    colorScheme="orange"
                    cursor={"pointer"}
                    onClick={handleFileDancel}
                  >
                    cancel
                  </Button>
                </Flex>
              )}
            </Box>
          </Center>
          <Formik
            initialValues={{
              ...user,
              firstName: user?.firstName || "",
              lastName: user?.lastName || "",
              mobileNumber: user?.mobileNumber || "",
              email: user?.email || "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(props) => (
              <Form>
                <Box px={4}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing="8"
                    mb="5"
                  >
                    <Field name="firstName">
                      {({ field }: any) => (
                        <Box width="100%">
                          <FormLabel
                            htmlFor="firstName"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            First Name <Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            type="text"
                            id="firstName"
                            fontSize="14px"
                            borderColor="#ccc"
                            height="50px"
                          />
                          <ErrorMessage
                            className="formik-errormessage"
                            name="firstName"
                            component="div"
                          />
                        </Box>
                      )}
                    </Field>
                    <Field name="lastName">
                      {({ field }: any) => (
                        <Box width="100%">
                          <FormLabel
                            htmlFor="lastName"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Last Name
                          </FormLabel>
                          <Input
                            {...field}
                            type="text"
                            fontSize="14px"
                            borderColor="#ccc"
                            height="50px"
                          />
                        </Box>
                      )}
                    </Field>
                  </Stack>
                  <Field name="mobileNumber">
                    {({ field }: any) => (
                      <Box width="100%">
                        <FormLabel
                          htmlFor="mobileNumber"
                          display={"flex"}
                          gap={1}
                          m="0"
                          p="0"
                        >
                          Mobile Number <Text color="red">*</Text>
                        </FormLabel>
                        <Input
                          {...field}
                          type="text"
                          id="mobileNumber"
                          maxLength={10}
                          fontSize="14px"
                          borderColor="#ccc"
                          height="50px"
                        />
                        <ErrorMessage
                          className="formik-errormessage"
                          name="mobileNumber"
                          component="div"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field }: any) => (
                      <Box width="100%" mt="5">
                        <FormLabel
                          htmlFor="email"
                          display={"flex"}
                          gap={1}
                          m="0"
                          p="0"
                        >
                          Email
                        </FormLabel>
                        <Input
                          {...field}
                          type="text"
                          id="email"
                          fontSize="14px"
                          borderColor="#ccc"
                          height="50px"
                          disabled
                        />
                      </Box>
                    )}
                  </Field>
                </Box>
                <Box textAlign="right">
                  <Flex justifyContent="flex-end">
                    <Stack direction="row" spacing="3" mb="5">
                      <Button
                        mt={4}
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
                        mt={4}
                        color="#fff"
                        isLoading={props.isSubmitting}
                        loadingText={"Submitting..."}
                        type="submit"
                        border="1px solid #2D50D6"
                        bg="#2D50D6"
                        _hover={{
                          bg: "#02ABEF",
                          borderColor: "#02ABEF",
                          color: "#fff",
                        }}
                      >
                        Save
                      </Button>
                    </Stack>
                  </Flex>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>

      <Box pt={"1.5rem"}>
        <Box
          borderRadius="10px"
          boxShadow="0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)"
        >
          <Box
            p={"0.75rem 1.25rem"}
            bg={"#F3F5F9"}
            border={"1px solid #E3E6F0"}
            borderRadius={"10px 10px 0 0"}
          >
            <Text fontWeight="bolder">Change Password</Text>
          </Box>
          <Box
            bg="white"
            py="10"
            px="4"
            border="1px solid #e3e6f0"
            borderRadius={"0 0 10px 10px"}
          >
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchemaPassword}
              onSubmit={handleChangePassword}
            >
              {(props) => (
                <Form>
                  <Box px={4}>
                    <Field name="oldPassword">
                      {({ field }: any) => (
                        <Box width="100%">
                          <FormLabel
                            htmlFor="oldPassword"
                            display={"flex"}
                            gap={1}
                            m="0"
                            p="0"
                          >
                            Old Password <Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            type="password"
                            id="oldPassword"
                            fontSize="14px"
                            borderColor="#ccc"
                            height="50px"
                          />
                          <ErrorMessage
                            className="formik-errormessage"
                            name="oldPassword"
                            component="div"
                          />
                        </Box>
                      )}
                    </Field>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      spacing="8"
                      mt="5"
                    >
                      <Field name="newPassword">
                        {({ field }: any) => (
                          <Box width="100%">
                            <FormLabel
                              htmlFor="newPassword"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              New Password <Text color="red">*</Text>
                            </FormLabel>
                            <Input
                              {...field}
                              type="password"
                              id="newPassword"
                              fontSize="14px"
                              borderColor="#ccc"
                              height="50px"
                            />
                            <ErrorMessage
                              className="formik-errormessage"
                              name="newPassword"
                              component="div"
                            />
                          </Box>
                        )}
                      </Field>
                      <Field name="confirmPassword">
                        {({ field }: any) => (
                          <Box width="100%">
                            <FormLabel
                              htmlFor="confirmPassword"
                              display={"flex"}
                              gap={1}
                              m="0"
                              p="0"
                            >
                              Confirm Password <Text color="red">*</Text>
                            </FormLabel>
                            <Input
                              {...field}
                              id="confirmPassword"
                              type="password"
                              fontSize="14px"
                              borderColor="#ccc"
                              height="50px"
                            />
                            <ErrorMessage
                              className="formik-errormessage"
                              name="confirmPassword"
                              component="div"
                            />
                          </Box>
                        )}
                      </Field>
                    </Stack>
                  </Box>
                  <Box textAlign="right">
                    <Flex justifyContent="flex-end">
                      <Stack direction="row" spacing="3" mb="5">
                        <Button
                          mt={4}
                          bg="white"
                          color="#2D50D6"
                          border=" 1px solid #2D50D6"
                          _hover={{
                            bg: "#2D50D6",
                            borderColor: "#2D50D6",
                            color: "#fff",
                          }}
                          type="button"
                          onClick={() => props.resetForm()}
                        >
                          Reset
                        </Button>
                        <Button
                          mt={4}
                          color="#fff"
                          isLoading={props.isSubmitting}
                          loadingText={"Submitting..."}
                          type="submit"
                          border="1px solid #2D50D6"
                          bg="#2D50D6"
                          _hover={{
                            bg: "#02ABEF",
                            borderColor: "#02ABEF",
                            color: "#fff",
                          }}
                        >
                          Save
                        </Button>
                      </Stack>
                    </Flex>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
