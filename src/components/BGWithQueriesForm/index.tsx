"use client";

import Animation from "../Animation/Scroll-Animation";
import QueriesForm from "../Form/QueriesForm";
import { Box } from "@chakra-ui/react";

export default function BGWithQueriesForm() {
  return (
    <Box
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        bg={
          "linear-gradient(rgba(53, 94, 252, .95), rgba(53, 94, 252, .95)), url(/assets/queries-form-bg.png)"
        }
        width={"100%"}
        height={"45%"}
        top={0}
        left={0}
        position={"absolute"}
        zIndex={-1}
        content=""
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      ></Box>
      <Box w={{ base: "80%", md: "70%", lg: "48%" }} pt={"5.5rem"} mb={"3rem"}>
        <Animation>
          <QueriesForm getInTouchLabel={true} />
        </Animation>
      </Box>
    </Box>
  );
}
