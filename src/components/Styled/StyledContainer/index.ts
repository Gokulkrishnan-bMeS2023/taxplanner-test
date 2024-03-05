import { Container } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  max-width: 540px;
  padding: 0 1.5rem;

  @media (min-width: 48em) {
    max-width: 720px;
  }

  @media (min-width: 62em) {
    max-width: 960px;
  }

  @media (min-width: 80em) {
    max-width: 1140px;
  }

  @media (min-width: 96em) {
    max-width: 1320px;
  }
`;
