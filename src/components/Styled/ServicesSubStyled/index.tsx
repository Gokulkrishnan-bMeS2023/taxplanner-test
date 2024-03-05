import styled from "styled-components";
export const StyledBox1 = styled.div`
  display: block;
  width: 300px;
  @media (max-width: 1100px) {
    width: 385px;
  }
`;

export const StyledBox2 = styled.div`
  display: none;
  width: 300px;
  @media (max-width: 1100px) {
    width: 385px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  height: 300px;
  &:hover {
    background-color: #01acf1;
    transition: 0.5s;
    color: #fff;
  }
  &:hover ${StyledBox1} {
    display: none;
  }
  &:hover ${StyledBox2} {
    display: block;
  }
`;
