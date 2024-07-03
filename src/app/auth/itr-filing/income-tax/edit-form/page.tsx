"use client";
import React, { FC, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Box,
  FormLabel,
  Stack,
  Heading,
  Text,
  Divider,
  InputRightAddon,
  InputGroup,
  Checkbox,
  Flex,
  Center,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaInfoCircle, FaPlusCircle } from "react-icons/fa";
import Marquee from "@/components/Marquee";
import EmployerModal from "@/components/ModelPopUp/CapitalgainSalary-detail";
import Deduction from "@/components/ModelPopUp/Deductions";
import ExemptionDetail from "@/components/ModelPopUp/ExemptionDetail";
import ListedShare from "@/components/ModelPopUp/ListedShare";
import Property from "@/components/ModelPopUp/Property";
import { useSearchParams } from "next/navigation";
import DecryptComponent from "@/components/DecryptComponent";

const CapitalgainEdit=() => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showDocuments, setShowDocuments] = useState({
    Document1: false,
    Document2: false,
    Document3: false,
    Document4: false,
    Document5: false,
    Document6: false,
    Document7: false,
    Document8: false,
  });
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();
  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();
  const {
    isOpen: isOpen5,
    onOpen: onOpen5,
    onClose: onClose5,
  } = useDisclosure();
  const fileInputRef = useRef<HTMLInputElement>(null);

  console.log(fileInputRef);
  

  const initialValues = {
    AadhaarNo: "",
    selectedDocument: "",
    Address: "",
  };

  const validationSchema = Yup.object().shape({
    AadhaarNo: Yup.string()
      .required("This field is required.")
      .length(12, "Invalid Aadhaar Number"),
    Address: Yup.string().required("This field is required."),
    PassportNumber: Yup.string()
      .required("This field is required.")
      .matches(
        /^[A-Z]\d{7}(?:(?:\s|-)?[A-Z0-9]+)?$/,
        "Invalid Passport Number"
      ),
    selectedDocument: Yup.mixed().required("Please select a document file"),
  });

  const onSubmit = (values: any, actions: any) => {
    actions.setSubmitting(false);
    alert(JSON.stringify(values));
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const searchParams = useSearchParams();
  const Type = searchParams.get("Type");

  return (
    <Box pt={24} px={{ base: "20px", md: "3rem" }} pb={"1.5rem"} minH={"100vh"}>
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
          <Text as={"h5"} fontWeight={700}>
            User Text (
            <Link href={"#"} style={{ color: "#02ABEF" }}>
              useremail
            </Link>
            )
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
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <FormControl mb="5">
                  <FormLabel>Financial Year</FormLabel>
                  <Flex ml={{ base: "1", sm: "10" }}>
                    <RadioGroup>
                      <Radio value="1">FY2022-2023</Radio>
                      <Radio value="2" ml={{ base: "3", sm: "4" }}>
                        FY2023-2024
                      </Radio>
                    </RadioGroup>
                  </Flex>
                </FormControl>
                <FormControl display="flex" alignItems="baseline">
                  <Checkbox
                    fontWeight="bolder"
                    isChecked={showDocuments.Document1}
                    onChange={() =>
                      setShowDocuments({
                        ...showDocuments,
                        Document1: !showDocuments.Document1,
                      })
                    }
                    mr="2"
                  />
                  <FormLabel fontWeight="bolder" cursor="pointer">
                    {" "}
                    Has already registered with income tax
                  </FormLabel>
                </FormControl>
                {showDocuments.Document1 && (
                  <>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      spacing="8"
                      mb="5"
                      mt="5"
                    >
                      <Field name="selectedDocument">
                        {({ field }: any) => (
                          <Box width="100%">
                            <FormControl
                              display="flex"
                              justifyContent="space-between"
                              width="100%"
                              isRequired
                            >
                              <FormLabel>Copy of PAN</FormLabel>
                              <Link href="#" style={{ color: "#02ABEF" }}>
                                1.jpg
                              </Link>
                            </FormControl>
                            <InputGroup size="lg">
                              <Input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                              />
                              <Input
                                type="none"
                                fontSize="16px"
                                placeholder="select a file!"
                                onClick={handleBrowseClick}
                                cursor="pointer"
                                accept=".pdf,.doc,.docx,.txt,image/*"
                              />
                              <InputRightAddon
                                as="label"
                                fontSize="15px"
                                color="#2D50D6"
                                textTransform="uppercase"
                                htmlFor="selectedDocument"
                                cursor="pointer"
                                onClick={handleBrowseClick}
                                _hover={{ bg: "#2D50D6", color: "white" }}
                              >
                                Browse
                              </InputRightAddon>
                            </InputGroup>
                          </Box>
                        )}
                      </Field>
                      <Field name="AadhaarNo">
                        {({ field, form }: any) => (
                          <FormControl
                            width="100%"
                            isInvalid={
                              form.errors.AadhaarNo && form.touched.AadhaarNo
                            }
                            isRequired
                          >
                            <FormLabel htmlFor="AadhaarNo">
                              Aadhaar No
                            </FormLabel>
                            <Input
                              {...field}
                              type="text"
                              id="AadhaarNo"
                              fontSize="14px"
                              placeholder="Enter Aadhaar No"
                              maxLength={12}
                              borderColor="#ccc"
                              height="50px"
                              onChange={(e: any) => {
                                const { value } = e.target;
                                const regex = /^[0-9]*$/;
                                if (!regex.test(value)) {
                                } else {
                                  props.setFieldValue("AadhaarNo", value);
                                }
                              }}
                            />
                            <FormErrorMessage>
                              {form.errors.AadhaarNo}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Stack>
                    <Field name="Address">
                      {({ field, form }: any) => (
                        <FormControl
                          width="100%"
                          isInvalid={
                            form.errors.Address && form.touched.Address
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="Address">Address</FormLabel>
                          <Input
                            {...field}
                            type="text"
                            id="Address"
                            fontSize="14px"
                            placeholder="Enter Address"
                            maxLength={12}
                            borderColor="#ccc"
                            height="50px"
                          />
                          <FormErrorMessage>
                            {form.errors.Address}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </>
                )}
                <Divider
                  mt="1.2rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl isRequired>
                  <FormLabel htmlFor="Passport number / Tax Identification number">
                    Passport number / Tax Identification number
                  </FormLabel>
                </FormControl>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  spacing="8"
                  mb="5"
                  mt="5"
                >
                  <Field name="PassportNumber">
                    {({ field, form }: any) => (
                      <FormControl
                        width="100%"
                        isInvalid={
                          form.errors.PassportNumber &&
                          form.touched.PassportNumber
                        }
                        isRequired
                      >
                        <Input
                          {...field}
                          type="text"
                          id="PassportNumber"
                          fontSize="14px"
                          placeholder="Enter Passport no"
                          maxLength={8}
                          borderColor="#ccc"
                          height="50px"
                        />
                        <Box
                          display="flex"
                          gap={{ base: "0", md: "2" }}
                          flexDirection={{ base: "column", md: "row" }}
                          alignItems={{ base: "left", md: "center" }}
                        >
                          <Text fontSize="14px" color="red" mt="2">
                            Sample passport number( A1234567 )
                          </Text>
                          <FormErrorMessage>
                            {form.errors.PassportNumber}
                          </FormErrorMessage>
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="Tax Identification no">
                    {({ field, form }: any) => (
                      <FormControl width="100%">
                        <Input
                          {...field}
                          type="text"
                          fontSize="14px"
                          placeholder="Enter Tax Identification no"
                          maxLength={12}
                          borderColor="#ccc"
                          height="50px"
                        />
                      </FormControl>
                    )}
                  </Field>
                </Stack>
                <Box display="flex" alignItems="center" gap="2" mb="5">
                  <Box
                    m={0}
                    fontWeight="bolder"
                    color="red"
                    display="flex"
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Text fontFamily={"var(--font-jost)!important"}>
                      Please fill any one of the{" "}
                    </Text>
                    <Text ml="1" fontFamily={"var(--font-jost)!important"}>
                      below details to continue
                    </Text>
                    <Text
                      display={"flex"}
                      ml="1"
                      alignItems={"center"}
                      gap={1}
                      fontFamily={"var(--font-jost)!important"}
                    >
                      payment{" "}
                      <FaInfoCircle style={{ cursor: "pointer" }} color="red" />
                    </Text>
                  </Box>
                </Box>
                <FormControl display="flex" alignItems="baseline">
                  <Checkbox
                    fontWeight="bolder"
                    isChecked={showDocuments.Document2}
                    onChange={() =>
                      setShowDocuments({
                        ...showDocuments,
                        Document2: !showDocuments.Document2,
                      })
                    }
                    mr="2"
                  />
                  <FormLabel fontWeight="bolder">
                    Having Income from House Property
                  </FormLabel>
                </FormControl>
                {showDocuments.Document2 && (
                  <>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      spacing="8"
                      mb="5"
                      mt="5"
                    >
                      <FormControl>
                        <FormLabel>Rent Received PA</FormLabel>
                        <Input
                          type="text"
                          fontSize="14px"
                          placeholder="Enter the amount"
                          borderColor="#ccc"
                          height="50px"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>
                          Municipal Tax Paid in Previous Year
                        </FormLabel>
                        <Input
                          type="text"
                          fontSize="14px"
                          placeholder="Enter Municipal Tax Paid in Previous Year"
                          borderColor="#ccc"
                          height="50px"
                        />
                      </FormControl>
                    </Stack>
                    <FormLabel>
                      Interest Paid on housing Loan - Certificate
                    </FormLabel>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      spacing={{ base: "4", sm: "8" }}
                      mb="5"
                    >
                      <Field name="selectedDocument">
                        {({ field }: any) => (
                          <Box flex="1" alignItems="center">
                            <InputGroup size="lg">
                              <Input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                              />
                              <Input
                                _focus={{
                                  outline: "none",
                                  borderColor: "transparent",
                                }}
                                fontSize="16px"
                                placeholder="select a file!"
                                value={selectedFile ? selectedFile.name : ""}
                                onClick={handleBrowseClick}
                                cursor="pointer"
                                accept=".pdf,.doc,.docx,.txt,image/*"
                              />
                              <InputRightAddon
                                as="label"
                                fontSize="15px"
                                color="#2D50D6"
                                textTransform="uppercase"
                                htmlFor="selectedDocument"
                                cursor="pointer"
                                onClick={handleBrowseClick}
                                _hover={{ bg: "#2D50D6", color: "white" }} // Change background color on hover
                              >
                                Browse
                              </InputRightAddon>
                            </InputGroup>
                          </Box>
                        )}
                      </Field>
                      <Box width="50%" flex="1" alignItems="center" mt="1">
                        <Button
                          fontSize="15px"
                          border="1px solid #2D50D6"
                          color="#2D50D6"
                          _hover={{ bg: "#2D50D6", color: "white" }}
                        >
                          Save & Add
                        </Button>
                      </Box>
                    </Stack>
                  </>
                )}
                <Divider
                  mt="1.2rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl display="flex" alignItems="baseline">
                  <Checkbox
                    fontWeight="bolder"
                    isChecked={showDocuments.Document3}
                    onChange={() =>
                      setShowDocuments({
                        ...showDocuments,
                        Document3: !showDocuments.Document3,
                      })
                    }
                    mr="2"
                  />
                  <FormLabel fontWeight="bolder">
                    {" "}
                    Having Income from Interest / Dividened / Commission
                  </FormLabel>
                </FormControl>
                {showDocuments.Document3 && (
                  <>
                    <FormLabel mt="2">Interest Certificate from Bank</FormLabel>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      spacing={{ base: "4", sm: "8" }}
                      mb="50"
                    >
                      <Field name="selectedDocument">
                        {({ field }: any) => (
                          <Box flex="1" alignItems="center">
                            <InputGroup size="lg">
                              <Input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                              />
                              <Input
                                fontSize="16px"
                                placeholder="select a file!"
                                onClick={handleBrowseClick}
                                cursor="pointer"
                                accept=".pdf,.doc,.docx,.txt,image/*"
                              />
                              <InputRightAddon
                                as="label"
                                fontSize="15px"
                                color="#2D50D6"
                                textTransform="uppercase"
                                htmlFor="selectedDocument"
                                cursor="pointer"
                                onClick={handleBrowseClick}
                                _hover={{ bg: "#2D50D6", color: "white" }}
                              >
                                Browse
                              </InputRightAddon>
                            </InputGroup>
                          </Box>
                        )}
                      </Field>
                      <Box width="50%" flex="1" alignItems="center" mt="1">
                        <Button
                          fontSize="15px"
                          border="1px solid #2D50D6"
                          color="#2D50D6"
                          _hover={{ bg: "#2D50D6", color: "white" }}
                        >
                          Save & Add
                        </Button>
                      </Box>
                    </Stack>
                  </>
                )}

                <Divider
                  mt="1.2rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl display="flex" alignItems="baseline">
                  <Checkbox
                    fontWeight="bolder"
                    isChecked={showDocuments.Document4}
                    onChange={() =>
                      setShowDocuments({
                        ...showDocuments,
                        Document4: !showDocuments.Document4,
                      })
                    }
                    mr="2"
                  />
                  <FormLabel fontWeight="bolder">
                    Having Income from Salary
                  </FormLabel>
                </FormControl>
                {showDocuments.Document4 && (
                  <>
                    <Box width="50%" mt="5" pl={{ base: "6", sm: "12" }}>
                      <Button
                        fontWeight="500"
                        border="1px solid #2D50D6"
                        color="#2D50D6"
                        padding="10px 36px"
                        _hover={{ bg: "#2D50D6", color: "white" }}
                        leftIcon={<FaPlusCircle />}
                        onClick={onOpen1}
                      >
                        Add Employer
                      </Button>
                    </Box>
                  </>
                )}
                <EmployerModal isOpen={isOpen1} onClose={onClose1} />
                <Divider
                  mt="1.2rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <Box display="flex" alignItems="center" gap="2" mb="5">
                  <Box
                    m={0}
                    fontWeight="bolder"
                    color="red"
                    display="flex"
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Text fontFamily={"var(--font-jost)!important"}>
                      {" "}
                      Please fill Sale of Property /{" "}
                    </Text>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      fontFamily={"var(--font-jost)!important"}
                    >
                      Shares detail / Both{" "}
                      <FaInfoCircle style={{ cursor: "pointer" }} color="red" />
                    </Text>
                  </Box>
                </Box>
                <FormControl display="flex" alignItems="baseline" isRequired>
                  <Checkbox
                    fontWeight="bolder"
                    isChecked={showDocuments.Document5}
                    onChange={() =>
                      setShowDocuments({
                        ...showDocuments,
                        Document5: !showDocuments.Document5,
                      })
                    }
                    mr="2"
                  />
                  <FormLabel fontWeight="bolder">
                    Gain on sale of property
                  </FormLabel>
                </FormControl>
                {showDocuments.Document5 && (
                  <>
                    <Box
                      mt="5"
                      display="flex"
                      flexDirection={{ base: "column", xl: "row" }}
                    >
                      <Box
                        display="flex"
                        flexDirection={{ base: "column", sm: "row" }}
                        pl={{ base: "5", sm: "12" }}
                        gap="5"
                      >
                        <Center flex="1">
                          <Button
                            as={Link}
                            href=""
                            fontWeight="500"
                            border="1px solid #2D50D6"
                            color="#2D50D6"
                            padding="10px 40px"
                            _hover={{ bg: "#2D50D6", color: "white" }}
                            leftIcon={<FaPlusCircle />}
                            onClick={onOpen2}
                          >
                            Add property details
                          </Button>
                        </Center>
                        <Center flex="1">
                          <Button
                            className="blinking-button"
                            bg="#2D50D6"
                            fontWeight="500"
                            color="white"
                            padding="10px 30px"
                            leftIcon={<FaPlusCircle />}
                            _hover={{ bg: "#02ABEF", color: "white" }}
                          >
                            Seek Help
                          </Button>
                        </Center>
                      </Box>
                      <Center
                        mt={{ base: "5", xl: "0" }}
                        pl={{ base: "5", sm: "12" }}
                        flex="1"
                      >
                        <Marquee>
                          Get expert assistance, assistance with complete tax
                          computation and customized tax saving tips at an
                          additional cost of Rs.2500.00 only
                        </Marquee>
                      </Center>
                    </Box>
                  </>
                )}
                {/* <Property isOpen={isOpen2} onClose={onClose2} /> */}
                <Divider
                  mt="1.2rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl display="flex" alignItems="baseline">
                  <Checkbox
                    fontWeight="bolder"
                    isChecked={showDocuments.Document6}
                    onChange={() =>
                      setShowDocuments({
                        ...showDocuments,
                        Document6: !showDocuments.Document6,
                      })
                    }
                    mr="2"
                  />
                  <Stack display="flex" alignItems="center">
                    <FormLabel
                      fontWeight="bolder"
                      display={"flex"}
                      flexDirection={{ base: "column", sm: "row" }}
                    >
                      Gain on sale of shares,
                      <Flex gap={1} align={"center"}>
                        other securities
                        <FaInfoCircle
                          style={{ cursor: "pointer" }}
                          color="red"
                        />
                        <Text color={"red"}>*</Text>
                      </Flex>
                    </FormLabel>
                  </Stack>
                </FormControl>
                {showDocuments.Document6 && (
                  <>
                    <Box
                      mt="5"
                      display="flex"
                      flexDirection={{ base: "column", xl: "row" }}
                    >
                      <Box
                        display="flex"
                        flexDirection={{ base: "column", sm: "row" }}
                        pl={{ base: "5", sm: "12" }}
                        gap="5"
                      >
                        <Center flex="1">
                          <Button
                            as={Link}
                            href=""
                            fontWeight="500"
                            border="1px solid #2D50D6"
                            color="#2D50D6"
                            padding="10px 40px"
                            _hover={{ bg: "#2D50D6", color: "white" }}
                            leftIcon={<FaPlusCircle />}
                            onClick={onOpen3}
                          >
                            Add Shares
                          </Button>
                        </Center>
                        <Center flex="1">
                          <Button
                            className="blinking-button"
                            bg="#2D50D6"
                            fontWeight="500"
                            color="white"
                            padding="10px 30px"
                            leftIcon={<FaPlusCircle />}
                            _hover={{ bg: "#02ABEF", color: "white" }}
                          >
                            Seek Help
                          </Button>
                        </Center>
                      </Box>
                      <Center
                        mt={{ base: "5", xl: "0" }}
                        pl={{ base: "5", sm: "12" }}
                        flex="1"
                      >
                        {" "}
                        {/* Add flex="1" to center the marquee */}
                        <Marquee>
                          Get expert assistance, assistance with complete tax
                          computation and customized tax saving tips at an
                          additional cost of Rs.2500.00 only
                        </Marquee>
                      </Center>
                    </Box>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      spacing={{ base: "4", sm: "8" }}
                      mb="5"
                      mt="8"
                    >
                      <Field name="selectedDocument">
                        {({ field }: any) => (
                          <Box flex="1" alignItems="center">
                            <InputGroup size="lg">
                              <Input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                              />
                              <Input
                                fontSize="16px"
                                placeholder="select a file!"
                                onClick={handleBrowseClick}
                                cursor="pointer"
                                accept=".pdf,.doc,.docx,.txt,image/*"
                              />
                              <InputRightAddon
                                as="label"
                                fontSize="15px"
                                htmlFor="selectedDocument"
                                cursor="pointer"
                                onClick={handleBrowseClick}
                                color="#2D50D6"
                                textTransform="uppercase"
                                _hover={{ bg: "#2D50D6", color: "white" }}
                              >
                                Browse
                              </InputRightAddon>
                            </InputGroup>
                          </Box>
                        )}
                      </Field>
                      <Box width="50%" flex="1" alignItems="center" mt="1">
                        <Button
                          fontSize="15px"
                          border="1px solid #2D50D6"
                          color="#2D50D6"
                          _hover={{ bg: "#2D50D6", color: "white" }}
                        >
                          Save & Add
                        </Button>
                      </Box>
                    </Stack>
                  </>
                )}
                <ListedShare isOpen={isOpen3} onClose={onClose3} />
                <Divider
                  mt="1.2rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl display="flex" alignItems="baseline">
                  <Checkbox
                    fontWeight="bolder"
                    isChecked={showDocuments.Document7}
                    onChange={() =>
                      setShowDocuments({
                        ...showDocuments,
                        Document7: !showDocuments.Document7,
                      })
                    }
                    mr="2"
                  />
                  <FormLabel fontWeight="bolder"> Exemption Details</FormLabel>
                </FormControl>
                {showDocuments.Document7 && (
                  <>
                    <Box width="50%" mt="5" pl={{ base: "6", sm: "12" }}>
                      <Button
                        fontWeight="500"
                        border="1px solid #2D50D6"
                        color="#2D50D6"
                        padding="10px 36px"
                        _hover={{ bg: "#2D50D6", color: "white" }}
                        leftIcon={<FaPlusCircle />}
                        onClick={onOpen4}
                      >
                        Add Exemption
                      </Button>
                    </Box>
                  </>
                )}
                <ExemptionDetail isOpen={isOpen4} onClose={onClose4} />
                <Divider
                  mt="1.2rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
                />
                <FormControl display="flex" alignItems="baseline">
                  <Checkbox
                    fontWeight="bolder"
                    isChecked={showDocuments.Document8}
                    onChange={() =>
                      setShowDocuments({
                        ...showDocuments,
                        Document8: !showDocuments.Document8,
                      })
                    }
                    mr="2"
                  />
                  <FormLabel fontWeight="bolder">
                    {" "}
                    Not claimed with form 16
                  </FormLabel>
                </FormControl>
                {showDocuments.Document8 && (
                  <>
                    <Box width="50%" mt="5" pl={{ base: "6", sm: "12" }}>
                      <Button
                        fontWeight="500"
                        border="1px solid #2D50D6"
                        color="#2D50D6"
                        padding="10px 36px"
                        _hover={{ bg: "#2D50D6", color: "white" }}
                        leftIcon={<FaPlusCircle />}
                        onClick={onOpen5}
                      >
                        Add Deduction
                      </Button>
                    </Box>
                  </>
                )}
                <Deduction isOpen={isOpen5} onClose={onClose5} />
                <Divider
                  mt="1.2rem"
                  mb="1.2rem"
                  border="0"
                  borderTop="1px solid rgba(0, 0, 0, 0.1)"
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
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default CapitalgainEdit;
