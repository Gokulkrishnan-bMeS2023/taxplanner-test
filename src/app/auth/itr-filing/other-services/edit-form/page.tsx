"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Input,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DocumentListTable from "@/components/Tables/DocumentListTable/page";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import FileInput from "@/components/Form/FileUploadField";
import { TitleList } from "@/component-contents/TitleFilterData";
import { decrypt } from "@/utils/crypto";

interface TodoItem {
  documentName: string;
  file: File | null;
  id?: string;
  osId?: string;
  fileName?: string;
}

Yup.addMethod(Yup.string, "unique", function (message, list) {
  return this.test("unique", message, function (value) {
    const { path, createError } = this;
    const isUnique = !list.some(
      (item: TodoItem) => item.documentName === value
    );
    return isUnique || createError({ path, message });
  });
});

const FileUploadForm = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todosList, setTodosList] = useState<TodoItem[]>([]);
  const [otherServiceId, setotherServiceId] = useState<number | string>(0);

  const searchParams = useSearchParams();

  const OSID = searchParams.get("osid");
  const Type = searchParams.get("Type");

  const decryptedId = decrypt(decodeURIComponent(Type as string));
  const title = TitleList.find(
    (title: { Type: any }) => title.Type === decryptedId
  );

  useEffect(() => {
    if (OSID) {
      const ID = decrypt(decodeURIComponent(OSID as string));
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:88/v1/otherservice/get otherservice document",
            {
              params: {
                ID: ID,
              },
            }
          );
          setTodosList(response.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };
      fetchUserData();
      setotherServiceId(ID);
    }
  }, [OSID]);

  const initialValues = {
    documentName: "",
    file: null as File | null,
  };

  const financialYear = `FY${
    new Date().getFullYear() - 1
  }-${new Date().getFullYear()}`;
  const fillingType = title?.Type;
  const userId = 1;

  const combinedTodos = [...todos, ...todosList];

  const validationSchema = Yup.object({
    documentName: Yup.string()
      .required("Document name is required")
      ?.unique("Document name must be unique", combinedTodos),
    file: Yup.mixed().required("A file is required"),
  });

  const handleAdd = (
    values: { documentName: string; file: File | null },
    { resetForm }: any
  ) => {
    const todo: TodoItem = {
      documentName: values.documentName,
      file: values.file,
    };
    setTodos([...todos, todo]);
    setTodosList([...todosList, todo]);
    resetForm();

    const fileInput = document.getElementById("file") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };
  console.log(otherServiceId);

  const handleFileUpload = () => {
    if (fillingType) {
      const formData = new FormData();
      todos.forEach((todo) => {
        if (todo.file && todo.documentName) {
          formData.append("files", todo.file);
          formData.append("documentNames", todo.documentName);
        }
      });
      formData.append("financialYear", financialYear);
      formData.append("userId", userId.toString());
      formData.append("otherServiceId", otherServiceId.toString());
      formData.append("fillingType", fillingType);
      fetch("http://localhost:88/v1/otherservice/register", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to upload");
          }
          return response.json();
        })
        .then((data) => {
          const newTodosList = data.map((item: any) => ({
            id: item.id || "N/A",
            osId: item.osId || "N/A",
            documentName: item.documentName,
            fileName: item.fileName,
            fileUrl: item.fileUrl,
          }));
          // Remove entries without id and osId from todosList
          const filteredTodosList = newTodosList.filter(
            (item: any) => item.id !== "N/A" && item.osId !== "N/A"
          );
          setTodosList(filteredTodosList);
          setTodos([]); // Clear the todos state
          const IDOS = filteredTodosList.map((item: any) => item.osId);
          setotherServiceId(IDOS[0]);
          console.log(filteredTodosList);
          console.log(IDOS, "idos");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleFileDelete = async (todo: TodoItem) => {
    const newTodosList = todosList.filter(
      (item) => item.documentName !== todo?.documentName
    );
    const newTodos = todos.filter(
      (item) => item.documentName !== todo?.documentName
    );
    setTodos(newTodos);
    setTodosList(newTodosList);

    if (todo.id) {
      try {
        const res = await axios.post(
          "http://localhost:88/v1/otherservice/remove",
          { ID: todo.id, OSID: todo.osId }
        );
        console.log("File deleted successfully:", res.data);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
    }
  };
  console.log(todos);

  return (
    <Box pt={24} px={{ base: "20px", md: "1.5rem" }} pb={"1.5rem"}>
      <Heading as={"h2"} py="10">
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
          <Text as={"h5"} fontWeight={700}>
            Fill The Details
          </Text>
        </Box>
        <Box
          bg="white"
          p={4}
          border="1px solid #E3E6F0"
          borderRadius={"0 0 10px 10px"}
        >
          <Text fontWeight={"bold"}>Document Details</Text>
          <Divider
            mt="1rem"
            mb="2rem"
            border="0"
            borderTop="1px solid rgba(0, 0, 0, 0.1)"
          />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleAdd}
          >
            {(props) => (
              <Form>
                <Flex
                  flexDirection={"column"}
                  width={{ base: "100%", md: "50%" }}
                  px={5}
                >
                  <Field name="documentName">
                    {({ field }: any) => (
                      <>
                        <FormControl>
                          <FormLabel
                            htmlFor="documentName"
                            id="documentName"
                            display="flex"
                            gap={1}
                          >
                            Document Name <Text color="red">*</Text>
                          </FormLabel>
                          <Input
                            {...field}
                            id="documentName"
                            type="text"
                            placeholder="Enter document name"
                            h={"50px"}
                          />
                        </FormControl>
                        <ErrorMessage
                          className="formik-errormessage"
                          name="documentName"
                          component="div"
                        />
                      </>
                    )}
                  </Field>

                  <FileInput
                    name="file"
                    props={props}
                    labelName="Select Document"
                  />

                  <Button
                    color={"#2D50D6"}
                    bg={"transparent"}
                    border={"1px solid #2D50D6"}
                    _hover={{ bg: "#2D50D6", color: "#FFF" }}
                    w={"fit-content"}
                    mb={2}
                    type="submit"
                    mt={6}
                  >
                    Add
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
          <>
            {todosList.length > 0 && (
              <DocumentListTable
                tableData={todosList}
                handleFileDelete={handleFileDelete}
              />
            )}
            <Divider
              mt="2rem"
              mb="2rem"
              border="0"
              borderTop="1px solid rgba(0, 0, 0, 0.1)"
            />
            {todosList.length > 0 && (
              <Flex
                align={"end"}
                w={{ base: "100%", md: "55%" }}
                gap={5}
                flexDirection={{ base: "column", md: "row" }}
              >
                <FormControl id="comments">
                  <FormLabel fontWeight={"bold"}>Comments</FormLabel>
                  <Input type="text" placeholder="Enter Comments" h={14} />
                </FormControl>
                <Button
                  color={"#FFF"}
                  bg={"#2D50D6"}
                  _hover={{ bg: "#02ABEF" }}
                >
                  Send
                </Button>
              </Flex>
            )}

            <Flex justify={"flex-end"} gap={4} mt={4}>
              <Button
                as={Link}
                href={"/auth/itr-filing/other-services/list"}
                color={"#2D50D6"}
                bg={"transparent"}
                border={"1px solid #2D50D6"}
                _hover={{ bg: "#2D50D6", color: "#FFF" }}
              >
                Back
              </Button>
              {todosList.length > 0 && (
                <>
                  <Button
                    color={"#FFF"}
                    bg={"#2D50D6"}
                    _hover={{ bg: "#02ABEF" }}
                    onClick={handleFileUpload}
                  >
                    Save
                  </Button>
                  <Button
                    color={"#fff"}
                    bg={"#2D50D6"}
                    _hover={{ bg: "#02ABEF" }}
                  >
                    Submit
                  </Button>
                </>
              )}
            </Flex>
          </>
        </Box>
      </Box>
    </Box>
  );
};
export default FileUploadForm;
