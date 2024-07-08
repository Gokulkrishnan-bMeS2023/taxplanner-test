// import React, { HTMLInputTypeAttribute } from "react";
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
//   FormControlProps,
// } from "@chakra-ui/react";
// import { Field, ErrorMessage, FieldProps } from "formik";
// import { EMAIL_REGEX } from "@/utils/Configs/regex";

// interface InputFieldProps extends FormControlProps {
//   label: string;
//   name: string;
//   type: HTMLInputTypeAttribute;
//   handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
//   maxLength?: number;
//   borderColor?: string;
//   height?: string;
//   regex: any;
//   props: any;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   label,
//   name,
//   type,
//   placeholder,
//   maxLength,
//   borderColor = "#ccc",
//   height = "50px",
//   regex,
//   props,
//   ...rest
// }) => {
//   return (
//     <Field name={name}>
//       {({ field }: FieldProps) => (
//         <>
//           <FormControl {...rest}>
//             <FormLabel htmlFor={name} display={"flex"} gap={1} m="0" p="0">
//               {label}
//               <Text color="red">*</Text>
//             </FormLabel>
//             <Input
//               {...field}
//               type={type}
//               id={name}
//               fontSize="14px"
//               placeholder={placeholder}
//               maxLength={maxLength}
//               borderColor={borderColor}
//               height={height}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                 const { value } = e.target;
//                 if (regex.test(value)) {
//                   props.setFieldValue(name, value);
//                 }
//               }}
//               // onChange={(e: any) => {
//               //   const { value } = e.target;
//               //   if (EMAIL_REGEX.test(value)) {
//               //     props.setFieldValue(name, value);
//               //   }
//               // }}
//             />
//           </FormControl>
//           <ErrorMessage
//             className="formik-errormessage"
//             name={name}
//             component="div"
//           />
//         </>
//       )}
//     </Field>
//   );
// };

// export default InputField;

import React, { HTMLInputTypeAttribute } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  FormControlProps,
} from "@chakra-ui/react";
import { Field, ErrorMessage, FieldProps } from "formik";

interface InputFieldProps extends FormControlProps {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  borderColor?: string;
  height?: string;
  regex?: any;
  props: any;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  maxLength,
  borderColor = "#ccc",
  height = "50px",
  regex,
  props,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <>
          <FormControl {...rest}>
            <FormLabel htmlFor={name} display={"flex"} gap={1} m="0" p="0">
              {label}
              <Text color="red">*</Text>
            </FormLabel>
            <Input
              {...field}
              type={type}
              id={name}
              value={field.value || ""}
              fontSize="14px"
              placeholder={placeholder}
              maxLength={maxLength}
              borderColor={borderColor}
              height={height}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                if (regex?.test(value)) {
                  props.setFieldValue(name, value);
                } else {
                  props.setFieldValue(name, value);
                }
              }}
            />
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

export default InputField;
