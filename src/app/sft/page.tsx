"use client";

import { SFTQueriesFormContents } from "@/component-contents/sft/TitleWithQueriesForm";
import { StyledContainer } from "@/components/Styled/StyledContainer";
import TitleWithQueriesForm from "@/components/TitleWithQueriesForm";
import { Box } from "@chakra-ui/react";

export default function SFT() {
  return (
    <>
      <StyledContainer>
        <Box my={12}>
          <TitleWithQueriesForm contents={SFTQueriesFormContents} />
        </Box>
      </StyledContainer>
    </>
  );
}
