import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";

interface InputValueTypes {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const queriesFormValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("subject is required"),
  message: Yup.string().required("Message is required"),
});

export default function ContactForm() {
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
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={queriesFormValidationSchema}
      onSubmit={(values, actions) =>
        handleSubmitNowButton(values, actions, { resetForm: actions.resetForm })
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
                    mb={2}
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
                      autoComplete="name"
                      css={{
                        "&::placeholder": {
                          color: "transparent",
                        },
                        "&:focus + label, &:not(:placeholder-shown) + label": {
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
                    mb={2}
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
                      autoComplete="email"
                      css={{
                        "&::placeholder": {
                          color: "transparent",
                        },
                        "&:focus + label, &:not(:placeholder-shown) + label": {
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
            <Field name="subject">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.subject && form.touched.subject}
                  mb={8}
                >
                  <Input
                    {...field}
                    id="subject"
                    type="text"
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
                      "&:focus + label, &:not(:placeholder-shown) + label": {
                        transform: "translateY(-70%) scale(0.8)",
                        color: "gray",
                      },
                    }}
                  />
                  <FormLabel
                    htmlFor="subject"
                    position="absolute"
                    top="20px"
                    left="15px"
                    color="#555"
                    pointerEvents="none"
                    transformOrigin="left center"
                    transition="transform 250ms"
                  >
                    Subject
                  </FormLabel>
                  <FormErrorMessage position={"absolute"} bottom={-6} left={1}>
                    {form.errors.subject}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Box>
          <Box mb={6} w={"100%"} pos={"relative"}>
            <Field name="message">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                  mb={7}
                >
                  <Textarea
                    {...field}
                    id="message"
                    required
                    placeholder=""
                    padding={"2.2rem 1rem 1.8rem"}
                    border={"1px solid #DFE4FD"}
                    border-radius={"8px"}
                    outline={"none"}
                    minHeight={"100px"}
                    css={{
                      "&::placeholder": {
                        color: "transparent",
                      },
                      "&:focus + label, &:not(:placeholder-shown) + label": {
                        transform: "translateY(-70%) scale(0.8)",
                        color: "gray",
                      },
                    }}
                  />
                  <FormLabel
                    htmlFor="message"
                    position="absolute"
                    top="20px"
                    left="15px"
                    color="#555"
                    pointerEvents="none"
                    transformOrigin="left center"
                    transition="transform 250ms"
                  >
                    Message
                  </FormLabel>
                  <FormErrorMessage position={"absolute"} bottom={-6} left={1}>
                    {form.errors.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Box>
          <Button
            type="submit"
            isLoading={props.isSubmitting}
            loadingText="Send Message"
            py={"1.7rem"}
            px={"3rem"}
            fontWeight={"500"}
            colorScheme="blue"
            bgColor={"#2d50d6"}
            color={"#DFE4FD"}
            style={{ transition: ".5s" }}
            _hover={{
              bgColor: "#2d50d6",
              color: "#DFE4FD",
            }}
            _focus={{ boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)" }}
          >
            Send Message
          </Button>
        </Form>
      )}
    </Formik>
  );
}
