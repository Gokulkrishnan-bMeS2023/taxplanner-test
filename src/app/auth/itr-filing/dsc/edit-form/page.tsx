"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Button,
  Box,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { decrypt } from "@/utils/crypto";
import { TitleList } from "@/component-contents/TitleFilterData";
import FileInput from "@/components/Form/FileUploadField";
import InputComponent from "@/components/Form/InputComponent";
import { EMAIL_REGEX, NAME_REGEX, NUMBER_REGEX } from "@/utils/Configs/regex";

interface DSCformTypes {
  PanUrl?: File | null;
  PassportUrl?: File | null;
  AadharUrl?: string;
  ImportExportCertificateUrl?: File | null;
  Address?: string;
  Email?: string;
  MobileNumber?: string;
  ForeignPassportUrl?: File | null;
  BankStatementUrl?: File | null;
  GSTCertificateUrl?: File | null;
  PANSigningPartnerUrl?: File | null;
}

const FormComponent = () => {
  const [initialValues, setInitialValues] = useState<DSCformTypes>({});
  const [validationSchema, setValidationSchema] = useState(
    Yup.object().shape({})
  );
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  console.log(initialValues);

  const searchParams = useSearchParams();

  const DSCID = searchParams.get("dscid");
  const Type = searchParams.get("Type");

  const decryptedId = decrypt(decodeURIComponent(Type as string));
  // const ID = decrypt(decodeURIComponent(DSCID as string));                
  const title = TitleList.find(
    (title: { Type: any }) => title.Type === decryptedId
  );

  useEffect(() => {
    if (!Type) return;

    let sections: string[] = [];
    let schema: { [key: string]: any } = {};
    let initialValues: DSCformTypes = {};

    // const decryptedId = decrypt(decodeURIComponent(Type as string));
    // const title = TitleList.find((title) => title.Type === decryptedId);

    switch (title?.Title) {
      case "DSC Class III":
        sections = ["PanUrl", "AadharUrl", "Address", "PassportUrl"];
        schema = {
          PanUrl: Yup.mixed().required("Please select a document file"),
          AadharUrl: Yup.string().required("This field is required."),
          Address: Yup.string().required("This field is required."),
          PassportUrl: Yup.mixed().required("Please select a document file"),
          Email: Yup.string().required("This field is required."),
          MobileNumber: Yup.string().required("This field is required."),
        };
        initialValues = {
          PanUrl: null,
          AadharUrl: "",
          Address: "",
          PassportUrl: null,
          Email: "",
          MobileNumber: "",
        };
        break;
      case "DSC Encrypted Individual":
        sections = [
          "PanUrl",
          "AadharUrl",
          "Address",
          "PassportUrl",
          "GSTCertificateUrl",
        ];
        schema = {
          PanUrl: Yup.mixed().required("Please select a document file"),
          AadharUrl: Yup.string().required("This field is required."),
          Address: Yup.string().required("This field is required."),
          PassportUrl: Yup.mixed().required("Please select a document file"),
          GSTCertificateUrl: Yup.mixed().required(
            "Please select a document file"
          ),
          Email: Yup.string().required("This field is required."),
          MobileNumber: Yup.string().required("This field is required."),
        };
        initialValues = {
          PanUrl: null,
          AadharUrl: "",
          Address: "",
          PassportUrl: null,
          GSTCertificateUrl: null,
          Email: "",
          MobileNumber: "",
        };
        break;
      case "DSC Encrypted Organisation":
        sections = [
          "PanUrl",
          "AadharUrl",
          "Address",
          "PassportUrl",
          "GSTCertificateUrl",
          "PANSigningPartnerUrl",
        ];
        schema = {
          PanUrl: Yup.mixed().required("Please select a document file"),
          PassportUrl: Yup.mixed().required("Please select a document file"),
          GSTCertificateUrl: Yup.mixed().required(
            "Please select a document file"
          ),
          Email: Yup.string().required("This field is required."),
          MobileNumber: Yup.string().required("This field is required."),
          PANSigningPartnerUrl: Yup.mixed().required(
            "Please select a document file"
          ),
          AadharUrl: Yup.string().required("This field is required."),
          Address: Yup.string().required("This field is required."),
        };
        initialValues = {
          PanUrl: null,
          AadharUrl: "",
          Address: "",
          PassportUrl: null,
          GSTCertificateUrl: null,
          Email: "",
          MobileNumber: "",
          PANSigningPartnerUrl: null,
        };
        break;
      case "DSC DGFT":
        sections = [
          "PanUrl",
          "AadharUrl",
          "Address",
          "PassportUrl",
          "ImportExportCertificateUrl",
        ];
        schema = {
          PanUrl: Yup.mixed().required("Please select a document file"),
          AadharUrl: Yup.string().required("This field is required."),
          Address: Yup.string().required("This field is required."),
          PassportUrl: Yup.mixed().required("Please select a document file"),
          ImportExportCertificateUrl: Yup.mixed().required(
            "Please select a document file"
          ),
          Email: Yup.string().required("This field is required."),
          MobileNumber: Yup.string().required("This field is required."),
        };
        initialValues = {
          PanUrl: null,
          AadharUrl: "",
          Address: "",
          PassportUrl: null,
          ImportExportCertificateUrl: null,
          Email: "",
          MobileNumber: "",
        };
        break;
      case "DSC ICEGATE":
        sections = [
          "PanUrl",
          "AadharUrl",
          "Address",
          "PassportUrl",
          "ImportExportCertificateUrl",
        ];
        schema = {
          PanUrl: Yup.mixed().required("Please select a document file"),
          AadharUrl: Yup.string().required("This field is required."),
          Address: Yup.string().required("This field is required."),
          PassportUrl: Yup.mixed().required("Please select a document file"),
          ImportExportCertificateUrl: Yup.mixed().required(
            "Please select a document file"
          ),
          Email: Yup.string().required("This field is required."),
          MobileNumber: Yup.string().required("This field is required."),
        };
        initialValues = {
          PanUrl: null,
          AadharUrl: "",
          Address: "",
          PassportUrl: null,
          ImportExportCertificateUrl: null,
          Email: "",
          MobileNumber: "",
        };
        break;
      case "DSC NRI":
        sections = ["BankStatementUrl", "ForeignPassportUrl"];
        schema = {
          BankStatementUrl: Yup.mixed().required(
            "Please select a document file"
          ),
          ForeignPassportUrl: Yup.mixed().required(
            "Please select a document file"
          ),
          Email: Yup.string().required("This field is required."),
          MobileNumber: Yup.string().required("This field is required."),
        };
        initialValues = {
          BankStatementUrl: null,
          ForeignPassportUrl: null,
          Email: "",
          MobileNumber: "",
        };
        break;
      default:
        sections = [];
        schema = {};
    }

    setVisibleSections(sections);
    setValidationSchema(Yup.object().shape(schema));
    setInitialValues(initialValues);
  }, [Type]);

  const onSubmit = async (
    values: DSCformTypes,
    actions: FormikHelpers<DSCformTypes>,
    props: { resetForm: () => void }
  ) => {
    console.log("Form submitted with values:", values);

    const decryptedId = decrypt(decodeURIComponent(Type as string));
    const title = TitleList.find((title) => title.Type === decryptedId);

    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(
          key,
          values[key as keyof DSCformTypes] as Blob | string
        );
      });

      formData.append("UserId", "2");
      formData.append("type", title?.Type || "");
      formData.append(
        "year",
        `FY${new Date().getFullYear() - 1}-${new Date().getFullYear()}`
      );
      if (title?.Url) {
        const response = await fetch(title?.Url, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setInitialValues(data);
        console.log("Response from the server:", data);

        alert("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      actions.setSubmitting(false);
      props.resetForm();
    }
  };

  return (
    <Box
      pt={24}
      px={{ base: "20px", md: "1.5rem" }}
      pb={"1.5rem"}
      minH={"100vh"}
    >
      <Heading as={"h2"} py="7">
        {title?.Title}
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
          <Text as={"h4"} fontWeight="bolder">
            Fill The Details
          </Text>
        </Box>
        <Box
          bg="white"
          py="4"
          px="4"
          border="1px solid #e3e6f0"
          borderRadius={"0 0 10px 10px"}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, { resetForm: actions.resetForm })
            }
            enableReinitialize
          >
            {(props) => (
              <Form>
                <Box px={4}>
                  {visibleSections.includes("PanUrl") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <FileInput
                          name="PanUrl"
                          props={props}
                          labelName="Copy of PAN"
                        />
                      </Box>
                      <Divider
                        width="100%"
                        mt="2rem"
                        mb="2rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}

                  {visibleSections.includes("AadharUrl") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <InputComponent
                          label="Aadhaar Number"
                          name="AadharUrl"
                          type="text"
                          placeholder="Enter Aadhaar Number"
                          maxLength={12}
                          regex={NUMBER_REGEX}
                          props={props}
                        />
                      </Box>
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}

                  {visibleSections.includes("Address") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <InputComponent
                          label="Address"
                          name="Address"
                          type="text"
                          placeholder="Enter Address"
                          maxLength={100}
                          regex={NAME_REGEX}
                          props={props}
                        />
                      </Box>
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}

                  {visibleSections.includes("PANSigningPartnerUrl") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <FileInput
                          name="PANSigningPartnerUrl"
                          props={props}
                          labelName="PAN - Signing Partner"
                        />
                      </Box>
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}

                  {visibleSections.includes("PassportUrl") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <FileInput
                          name="PassportUrl"
                          props={props}
                          labelName="Passport Size Photo"
                        />
                      </Box>
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}

                  {visibleSections.includes("ImportExportCertificateUrl") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <FileInput
                          name="ImportExportCertificateUrl"
                          props={props}
                          labelName="Import Export Certificate"
                        />
                      </Box>
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}

                  {visibleSections.includes("ForeignPassportUrl") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <FileInput
                          name="ForeignPassportUrl"
                          props={props}
                          labelName="Foreign Passport"
                        />
                      </Box>
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}

                  {visibleSections.includes("BankStatementUrl") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <FileInput
                          name="BankStatementUrl"
                          props={props}
                          labelName="Bank Statement"
                        />
                      </Box>
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}

                  {visibleSections.includes("GSTCertificateUrl") && (
                    <>
                      <Box width={{ base: "100%", sm: "50%" }}>
                        <FileInput
                          name="GSTCertificateUrl"
                          props={props}
                          labelName="GST Certificate"
                        />
                      </Box>
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </>
                  )}
                  <Box width={{ base: "100%", sm: "50%" }}>
                    <InputComponent
                      label="Email"
                      name="Email"
                      type="text"
                      placeholder="Enter Email"
                      maxLength={100}
                      regex={EMAIL_REGEX}
                      props={props}
                    />
                  </Box>

                  <Divider
                    mt="1.5rem"
                    mb="1.5rem"
                    border="0"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                  />
                  <Box width={{ base: "100%", sm: "50%" }}>
                    <InputComponent
                      label="Mobile Number"
                      name="MobileNumber"
                      type="text"
                      placeholder="Enter Mobile Number"
                      maxLength={10}
                      regex={NUMBER_REGEX}
                      props={props}
                    />
                  </Box>

                  <InputComponent
                    label="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    placeholder="Enter Mobile Number"
                    maxLength={10}
                    regex={NUMBER_REGEX}
                    props={props}
                  />

                  <Box textAlign="right" alignItems="right">
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
                          Back
                        </Button>
                        <Button
                          mt={4}
                          color="#fff"
                          loadingText={"submit.."}
                          border="1px solid #2D50D6"
                          bg="#2D50D6"
                          _hover={{
                            bg: "#02ABEF",
                            borderColor: "#02ABEF",
                            color: "#fff",
                          }}
                        >
                          Submit
                        </Button>
                        <Button
                          mt={4}
                          color="#fff"
                          isLoading={props.isSubmitting}
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
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default FormComponent;
