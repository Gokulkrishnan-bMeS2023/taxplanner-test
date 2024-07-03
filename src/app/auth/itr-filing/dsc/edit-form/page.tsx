// "use client";
// import { Formik, Form, FormikHelpers } from "formik";
// import * as Yup from "yup";
// import {
//   Button,
//   Box,
//   Stack,
//   Heading,
//   Text,
//   Divider,
//   Flex,
// } from "@chakra-ui/react";
// import { useSearchParams } from "next/navigation";
// import { decrypt } from "@/utils/crypto";
// import { TitleList } from "@/component-contents/TitleFilterData";
// import DecryptComponent from "@/components/DecryptComponent";
// import FileInput from "@/components/Form/FileUploadField";
// import InputComponent from "@/components/Form/InputComponent";
// import {
//   EMAIL_REGEX,
//   NAME_REGEX,
//   NUMBER_REGEX,
//   alphaNumericRegex,
// } from "@/utils/Configs/regex";

// interface DSCformTypes {
//   Pan: File | null;
//   Passport: File | null;
//   AadhaarNumber: string;
//   ImportExportCertificate: File | null;
//   Address: string;
//   Email: string;
//   MobileNumber: string;
//   ForeignPassport: File | null;
//   BankStatement: File | null;
//   GSTCertificate: File | null;
// }
// const FormComponent = () => {
//   const initialValues = {
//     Pan: null as File | null,
//     Passport: null as File | null,
//     AadhaarNumber: "",
//     ImportExportCertificate: null as File | null,
//     Address: "",
//     Email: "",
//     MobileNumber: "",
//     ForeignPassport: null as File | null,
//     BankStatement: null as File | null,
//     GSTCertificate: null as File | null,
//   };

//   const validationSchema = Yup.object().shape({
//     Pan: Yup.string().required("Please select a document file"),
//     Passport: Yup.mixed().required("Please select a document file"),
//     Address: Yup.string().required("This field is required."),
//     ImportExportCertificate: Yup.mixed().required(
//       "Please select a document file"
//     ),
//     MobileNumber: Yup.string().required("This field is required."),
//     Email: Yup.string()
//       .matches(EMAIL_REGEX, "Invalid email address")
//       .required("Required"),
//     AadhaarNumber: Yup.string()
//       .required("This field is required.")
//       .length(12, "Invalid Aadhaar Number"),
//     ForeignPassport: Yup.mixed().required("Please select a document file"),
//     BankStatement: Yup.mixed().required("Please select a document file"),
//     GSTCertificate: Yup.mixed().required("Please select a document file"),
//   });

//   const searchParams = useSearchParams();

//   const Type = searchParams.get("Type");

//   const onSubmit = async (
//     values: DSCformTypes,
//     actions: FormikHelpers<DSCformTypes>,
//     props: { resetForm: () => void }
//   ) => {
//     // Handle form submission
//     console.log("Form submitted with values:", values);
//     const encryptedData = decodeURIComponent(Type as string);
//     const decryptedId = await decrypt(encryptedData);
//     const title = TitleList.find((title) => title.Type === decryptedId);

//     try {
//       // Send a POST request to the API endpoint
//       const formdata = {
//         ...values,
//         id: "12",
//         type: title?.Type,
//         year: `FY${new Date().getFullYear() - 1}-${new Date().getFullYear()}`,
//       };
//       console.log(formdata);

//       const response = await fetch(
//         "https://taxplanner-test-json.onrender.com/dsc",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formdata),
//         }
//       );

//       // Check if the request was successful
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log("Response from the server:", data);

//       // Display a success message to the user
//       alert("Form submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting the form:", error);

//       // Display an error message to the user
//       alert("There was an error submitting the form. Please try again.");
//     } finally {
//       // Set submitting to false
//       actions.setSubmitting(false);
//       props.resetForm();
//     }
//   };

//   return (
//     <Box
//       pt={24}
//       px={{ base: "20px", md: "1.5rem" }}
//       pb={"1.5rem"}
//       minH={"100vh"}
//     >
//       <Heading as={"h2"} py="10">
//         <DecryptComponent Type={Type} />
//       </Heading>
//       <Box
//         borderRadius="10px"
//         boxShadow="0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)"
//       >
//         <Box
//           p={"0.75rem 1.25rem"}
//           bg={"#F3F5F9"}
//           border={"1px solid #E3E6F0"}
//           borderRadius={"10px 10px 0 0"}
//         >
//           <Text as={"h4"} fontWeight="bolder">
//             Fill The Details
//           </Text>
//         </Box>
//         <Box
//           bg="white"
//           py="10"
//           px="4"
//           border="1px solid #e3e6f0"
//           borderRadius={"0 0 10px 10px"}
//         >
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={(values, actions) =>
//               onSubmit(values, actions, { resetForm: actions.resetForm })
//             }
//           >
//             {(props) => (
//               <Form>
//                 <Box p={4}>
//                   <Box width={{ base: "100%", sm: "50%" }}>
//                     <FileInput
//                       name="Pan"
//                       props={props}
//                       labelName=" Copy of PAN"
//                     />
//                   </Box>
//                   <Divider
//                     width="100%"
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   <InputComponent
//                     label="Aadhaar Number"
//                     name="AadhaarNumber"
//                     type="text"
//                     placeholder="Enter Aadhaar No"
//                     maxLength={12}
//                     regex={NUMBER_REGEX}
//                     props={props}
//                   />
//                   <Divider
//                     width="100%"
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   <InputComponent
//                     label="Address"
//                     name="Address"
//                     type="text"
//                     placeholder="Enter Address"
//                     maxLength={12}
//                     regex={NAME_REGEX}
//                     props={props}
//                   />
//                   <Divider
//                     width="100%"
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   <Box width={{ base: "100%", sm: "50%" }}>
//                     <FileInput
//                       name="Passport"
//                       props={props}
//                       labelName="Passport Size Photo"
//                     />
//                   </Box>
//                   <Divider
//                     mt="1.5rem"
//                     mb="1.5rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   <Box width={{ base: "100%", sm: "50%" }}>
//                     <FileInput
//                       name="ImportExportCertificate"
//                       props={props}
//                       labelName="Import Export Certificate"
//                     />
//                   </Box>
//                   <Divider
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   <Box width={{ base: "100%", sm: "50%" }}>
//                     <FileInput
//                       name="ForeignPassport"
//                       props={props}
//                       labelName="Foreign Passport"
//                     />
//                   </Box>
//                   <Divider
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   <Box width={{ base: "100%", sm: "50%" }}>
//                     <FileInput
//                       name="BankStatement"
//                       props={props}
//                       labelName="BankStatement"
//                     />
//                   </Box>
//                   <Divider
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   <Box width={{ base: "100%", sm: "50%" }}>
//                     <FileInput
//                       name="GSTCertificate"
//                       props={props}
//                       labelName="GST Certificate"
//                     />
//                   </Box>
//                   <Divider
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   <InputComponent
//                     label="Email"
//                     name="Email"
//                     type="email"
//                     placeholder="Enter Email Address"
//                     regex={alphaNumericRegex}
//                     props={props}
//                   />
//                   <Divider
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                   {/* <InputComponent
//                     label="Mobile Number"
//                     name="MobileNumber"
//                     type="text"
//                     placeholder="Enter Mobile Number"
//                     regex={NUMBER_REGEX}
//                     props={props}
//                     maxLength={10}
                    
//                   /> */}
//                   <Divider
//                     mt="2rem"
//                     mb="2rem"
//                     border="0"
//                     borderTop="1px solid rgba(0, 0, 0, 0.1)"
//                   />
//                 </Box>
//                 <Box textAlign="right" alignItems="right">
//                   <Flex justifyContent="flex-end">
//                     <Stack direction="row" spacing="3" mb="5">
//                       <Button
//                         mt={4}
//                         bg="white"
//                         color="#2D50D6"
//                         border=" 1px solid #2D50D6"
//                         _hover={{
//                           bg: "#2D50D6",
//                           borderColor: "#2D50D6",
//                           color: "#fff",
//                         }}
//                       >
//                         Back
//                       </Button>
//                       <Button
//                         mt={4}
//                         color="#fff"
//                         loadingText={"submit.."}
//                         border="1px solid #2D50D6"
//                         bg="#2D50D6"
//                         _hover={{
//                           bg: "#02ABEF",
//                           borderColor: "#02ABEF",
//                           color: "#fff",
//                         }}
//                       >
//                         Submit
//                       </Button>
//                       <Button
//                         mt={4}
//                         color="#fff"
//                         isLoading={props.isSubmitting}
//                         type="submit"
//                         border="1px solid #2D50D6"
//                         bg="#2D50D6"
//                         _hover={{
//                           bg: "#02ABEF",
//                           borderColor: "#02ABEF",
//                           color: "#fff",
//                         }}
//                       >
//                         Save
//                       </Button>
//                     </Stack>
//                   </Flex>
//                 </Box>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default FormComponent;




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
import DecryptComponent from "@/components/DecryptComponent";
import FileInput from "@/components/Form/FileUploadField";
import InputComponent from "@/components/Form/InputComponent";
import {
  EMAIL_REGEX,
  NAME_REGEX,
  NUMBER_REGEX,
} from "@/utils/Configs/regex";

interface DSCformTypes {
  Pan: File | null;
  Passport: File | null;
  AadhaarNumber: string;
  ImportExportCertificate: File | null;
  Address: string;
  Email: string;
  MobileNumber: string;
  ForeignPassport: File | null;
  BankStatement: File | null;
  GSTCertificate: File | null;
}

const FormComponent = () => {
  const initialValues = {
    Pan: null as File | null,
    Passport: null as File | null,
    AadhaarNumber: "",
    ImportExportCertificate: null as File | null,
    Address: "",
    Email: "",
    MobileNumber: "",
    ForeignPassport: null as File | null,
    BankStatement: null as File | null,
    GSTCertificate: null as File | null,
  };

  const [validationSchema, setValidationSchema] = useState(Yup.object().shape({}));
  const searchParams = useSearchParams();
  const Type = searchParams.get("Type");
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    if (!Type) return;

    let sections: string[] = [];
    let schema: { [key: string]: any } = {};

    switch (Type) {
      case "DSC":
        sections = ["Pan", "AadhaarNumber", "Address", "Passport"];
        schema = {
          Pan: Yup.mixed().required("Please select a document file"),
          AadhaarNumber: Yup.string()
            .required("This field is required.")
            .length(12, "Invalid Aadhaar Number"),
          Address: Yup.string().required("This field is required."),
          Passport: Yup.mixed().required("Please select a document file"),
        };
        break;
      case "DSCIndividual":
        sections = ["Pan", "AadhaarNumber", "Address", "Passport", "GSTCertificate"];
        schema = {
          Pan: Yup.mixed().required("Please select a document file"),
          AadhaarNumber: Yup.string()
            .required("This field is required.")
            .length(12, "Invalid Aadhaar Number"),
          Address: Yup.string().required("This field is required."),
          Passport: Yup.mixed().required("Please select a document file"),
          GSTCertificate: Yup.mixed().required("Please select a document file"),
        };
        break;
      case "DSCOrganisation":
        sections = ["Pan", "Passport", "GSTCertificate", "AdharSigningPartner", "PanSigningPartner"];
        schema = {
          Pan: Yup.mixed().required("Please select a document file"),
          Passport: Yup.mixed().required("Please select a document file"),
          GSTCertificate: Yup.mixed().required("Please select a document file"),
        };
        break;
      case "DSCDGFT":
        sections = ["Pan", "AadhaarNumber", "Address", "Passport", "ImportExportCertificate"];
        schema = {
          Pan: Yup.mixed().required("Please select a document file"),
          AadhaarNumber: Yup.string()
            .required("This field is required.")
            .length(12, "Invalid Aadhaar Number"),
          Address: Yup.string().required("This field is required."),
          Passport: Yup.mixed().required("Please select a document file"),
          ImportExportCertificate: Yup.mixed().required("Please select a document file"),
        };
        break;
      case "DSCICEGATE":
        sections = ["Pan", "AadhaarNumber", "Address", "Passport", "ImportExportCertificate"];
        schema = {
          Pan: Yup.mixed().required("Please select a document file"),
          AadhaarNumber: Yup.string()
            .required("This field is required.")
            .length(12, "Invalid Aadhaar Number"),
          Address: Yup.string().required("This field is required."),
          Passport: Yup.mixed().required("Please select a document file"),
          ImportExportCertificate: Yup.mixed().required("Please select a document file"),
        };
        break;
      case "DSCNRI":
        sections = ["BankStatement", "ForeignPassport"];
        schema = {
          BankStatement: Yup.mixed().required("Please select a document file"),
          ForeignPassport: Yup.mixed().required("Please select a document file"),
        };
        break;
      default:
        sections = [];
        schema = {};
    }

    setVisibleSections(sections);
    setValidationSchema(Yup.object().shape(schema));
  }, [Type]);

  const onSubmit = async (
    values: DSCformTypes,
    actions: FormikHelpers<DSCformTypes>,
    props: { resetForm: () => void }
  ) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
    const encryptedData = decodeURIComponent(Type as string);
    const decryptedId = await decrypt(encryptedData);
    const title = TitleList.find((title) => title.Type === decryptedId);

    try {
      // Send a POST request to the API endpoint
      const formdata = {
        ...values,
        id: "12",
        type: title?.Type,
        year: `FY${new Date().getFullYear() - 1}-${new Date().getFullYear()}`,
      };
      console.log(formdata);

      const response = await fetch(
        "https://taxplanner-test-json.onrender.com/dsc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response from the server:", data);

      // Display a success message to the user
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);

      // Display an error message to the user
      alert("There was an error submitting the form. Please try again.");
    } finally {
      // Set submitting to false
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
      <Heading as={"h2"} py="10">
        <DecryptComponent Type={Type} />
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
          py="10"
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
          >
            {(props) => (
              <Form>
                <Box p={4}>
                  {visibleSections.includes("Pan") && (
                    <Box width={{ base: "100%", sm: "50%" }}>
                      <FileInput
                        name="Pan"
                        props={props}
                        labelName=" Copy of PAN"
                      />
                      <Divider
                        width="100%"
                        mt="2rem"
                        mb="2rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </Box>
                  )}

                  {visibleSections.includes("AadhaarNumber") && (
                    <InputComponent
                      label="Aadhaar Number"
                      name="AadhaarNumber"
                      type="text"
                      placeholder="Enter Aadhaar Number"
                      maxLength={12}
                      regex={NUMBER_REGEX}
                      props={props}
                    />
                  )}

                  {visibleSections.includes("Address") && (
                    <InputComponent
                      label="Address"
                      name="Address"
                      type="text"
                      placeholder="Enter Address"
                      maxLength={100}
                      regex={/^[a-zA-Z0-9\s,.'-]{3,}$/}
                      props={props}
                    />
                  )}

                  {visibleSections.includes("Passport") && (
                    <Box width={{ base: "100%", sm: "50%" }}>
                      <FileInput
                        name="Passport"
                        props={props}
                        labelName=" Passport"
                      />
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </Box>
                  )}

                  {visibleSections.includes("ImportExportCertificate") && (
                    <Box width={{ base: "100%", sm: "50%" }}>
                      <FileInput
                        name="ImportExportCertificate"
                        props={props}
                        labelName="Import Export Certificate"
                      />
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </Box>
                  )}

                  {visibleSections.includes("MobileNumber") && (
                    <InputComponent
                      label="Mobile Number"
                      name="MobileNumber"
                      type="text"
                      placeholder="Enter Mobile Number"
                      maxLength={10}
                      regex={NUMBER_REGEX}
                      props={props}
                    />
                  )}

                  {visibleSections.includes("Email") && (
                    <InputComponent
                      label="Email"
                      name="Email"
                      type="text"
                      placeholder="Enter Email"
                      maxLength={20}
                      regex={EMAIL_REGEX}
                      props={props}
                    />
                  )}

                  {visibleSections.includes("ForeignPassport") && (
                    <Box width={{ base: "100%", sm: "50%" }}>
                      <FileInput
                        name="ForeignPassport"
                        props={props}
                        labelName="Foreign Passport"
                      />
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </Box>
                  )}

                  {visibleSections.includes("BankStatement") && (
                    <Box width={{ base: "100%", sm: "50%" }}>
                      <FileInput
                        name="BankStatement"
                        props={props}
                        labelName="Bank Statement"
                      />
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </Box>
                  )}

                  {visibleSections.includes("GSTCertificate") && (
                    <Box width={{ base: "100%", sm: "50%" }}>
                      <FileInput
                        name="GSTCertificate"
                        props={props}
                        labelName="GST Certificate"
                      />
                      <Divider
                        mt="1.5rem"
                        mb="1.5rem"
                        border="0"
                        borderTop="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </Box>
                  )}

                  <Flex justifyContent="center">
                    <Stack
                      pt={2}
                      direction={{ base: "column", sm: "row" }}
                      spacing={10}
                      width={{ base: "100%", sm: "50%" }}
                    >
                      <Button
                        bg={"red.400"}
                        color={"white"}
                        _hover={{
                          bg: "red.500",
                        }}
                        onClick={props.handleReset}
                      >
                        Cancel
                      </Button>
                      <Button
                        isLoading={props.isSubmitting}
                        type="submit"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Submit
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
  );
};

export default FormComponent;
