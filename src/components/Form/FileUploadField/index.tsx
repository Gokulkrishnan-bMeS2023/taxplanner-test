import React from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react"; // Adjust imports based on your UI library
import { ErrorMessage, Field } from "formik";

interface FileInputProps {
  props: any;
  labelName: string;
  name: string;
}

const FileInput: React.FC<FileInputProps> = ({ props, labelName, name }) => {
  return (
    <Field name="file">
      {({ field }: any) => (
        <>
          <FormControl mt={6}>
            <FormLabel htmlFor={name} display={"flex"} gap={1}>
              {labelName}
              <Text color="red">*</Text>
            </FormLabel>
            <Box
              className="hover-button"
              display={"flex"}
              border={"1px solid #E2E8F0"}
              as="label"
              cursor="pointer"
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              borderRadius={"8px"}
              h={"50px"}
            >
              <Text
                ml={"4"}
                color="grey"
                w={"fit-content"}
                whiteSpace="nowrap"
                fontSize="14px"
                overflow="hidden"
                {...field}
              >
                {props?.values?.[name]?.name ||
                  "Select your file! (PDF / Image)"}
              </Text>
              <Input
                // {...field}
                id={name}
                type="file"
                name={name}
                // accept=".pdf, image/png, image/jpeg"
                style={{ display: "none" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files[0]) {
                    props.setFieldValue([name], event.target.files[0]);
                  }
                }}
              />
              <Button
                as="label"
                borderLeftRadius="0px"
                htmlFor={name}
                variant="solid"
                cursor="pointer"
                className="hover-button"
                h={"50px"}
              >
                Browser
              </Button>
            </Box>
          </FormControl>
          <ErrorMessage
            className="formik-errormessage"
            name={name}
            component="div"
          />
        </>
      )}
    </Field>
  );
};

export default FileInput;
