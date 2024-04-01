import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  Name: string;
  hrefLink?: string;
}

const PrimaryButton = ({ Name, hrefLink, ...props }: ButtonProps) => {
  return (
    <Button
      as={Link}
      href={hrefLink}
      mb={4}
      px={12}
      py={7}
      color={"#DFE4FD"}
      bgColor={"#2d50d6"}
      _hover={{ bgColor: "#2d50d6" }}
      _focus={{ boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)" }}
      {...props}
    >
      {Name}
    </Button>
  );
};

export default PrimaryButton;
