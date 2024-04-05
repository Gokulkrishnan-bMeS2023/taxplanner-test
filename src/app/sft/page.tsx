"use client";
import { SFTQueriesFormContents } from "@/component-contents/sft/TitleWithQueriesForm";
import Header from "@/components/Header";
import TitleWithQueriesForm from "@/components/TitleWithQueriesForm";
import { Box, Container } from "@chakra-ui/react";

export default function SFT() {
  return (
    <>
      <Header heading="SFT – Statement of Financial Transaction" />
      <Container>
        <Box my={12}>
          <TitleWithQueriesForm contents={SFTQueriesFormContents} />
        </Box>
      </Container>
    </>
  );
}
