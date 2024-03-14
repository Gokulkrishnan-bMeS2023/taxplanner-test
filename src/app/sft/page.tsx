"use client";

import { SFTQueriesFormContents } from "@/component-contents/sft/TitleWithQueriesForm";
import TitleWithQueriesForm from "@/components/TitleWithQueriesForm";
import { Box, Container } from "@chakra-ui/react";

export default function SFT() {
  return (
    <Container>
      <Box my={12}>
        <TitleWithQueriesForm contents={SFTQueriesFormContents} />
      </Box>
    </Container>
  );
}
