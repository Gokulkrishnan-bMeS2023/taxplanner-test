import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Center minHeight={"100vh"}>
        <Spinner thickness="4px" size="xl" color="#01acf1" />
      </Center>
    </>
  );
}