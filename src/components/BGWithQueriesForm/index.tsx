import QueriesForm from "../Form/QueriesForm";
import { Box } from "@chakra-ui/react";

export default function BGWithQueriesForm() {
  return (
    <>
      <Box p={36} bg={"linear-gradient(rgba(53, 94, 252, .95), rgba(53, 94, 252, .95)), url(/assets/queries-form-bg.png)"}></Box>
      <Box
        w={{ base: "90%", lg: "50%" }}
        pos={"relative"}
        bottom={"90px"}
        left={"50%"}
        transform={"translate(-50%, -10%)"}
      >
        <QueriesForm getInTouchLabel={true}/>
      </Box>
    </>
  );
}