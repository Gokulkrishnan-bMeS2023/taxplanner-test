"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

const FormComponent: React.FC = () => {
  const initialValues = {
    documentName: "",
    selectedDocument: "",
  };

  const validationSchema = Yup.object().shape({
    documentName: Yup.string().required("Document name is required"),
    selectedDocument: Yup.mixed().required("Please select a document file"),
  });

  const onSubmit = (values: any, actions: any) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
    actions.setSubmitting(false);
    alert(JSON.stringify(values));
  };

  return (
    <Box pt={24}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="documentName">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={
                    form.errors.documentName && form.touched.documentName
                  }
                >
                  <Input
                    {...field}
                    id="documentName"
                    placeholder="Enter document name"
                  />
                  <FormErrorMessage>
                    {form.errors.documentName}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="selectedDocument">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={
                    form.errors.selectedDocument &&
                    form.touched.selectedDocument
                  }
                >
                  <Input
                    {...field}
                    id="selectedDocument"
                    type="file"
                    accept=".pdf, image/png, image/jpeg"
                  />
                  <FormErrorMessage>
                    {form.errors.selectedDocument}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormComponent;
