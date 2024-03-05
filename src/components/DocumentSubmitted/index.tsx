"use client";
import {
  Box,
  Heading,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { FaArrowAltCircleRight, FaCheck } from "react-icons/fa";
import { FC } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";

interface documents {
  id: number;
  iconType: string;
  contents: string[];
}
interface DocumentProps {
  title: string;
  documents: documents[];
  subcontent?: string;
}
export const StyledBox1 = styled.i`
  color:"#01ACF1"
  border:none;
`;
export const Wrapper = styled.div`
  &:hover {
    background-color: #01ACF1;
    transition: 0.5s;
  }
  &:hover ${StyledBox1} {
    color: #fff;
    border: none;
  }
`;
const DocumentSubmitted: FC<DocumentProps> = ({ title, subcontent,documents }) => {
  
const pathname=usePathname();

  return (
    <Box py={5} mb={{base:'10',md:'14',lg:'24'}}>
        <Flex
          direction="column"
          alignItems="center"
          textAlign="center"
          maxW="600px"
          mx="auto"
          mb={10}
        >
          <Text
            border="1px"
            color="#01ACF1"
            borderColor="#DFE4FD"
            borderRadius={8}
            padding={"4px 16px"}
            display="inline-block"
            textTransform="uppercase" 
            mb={5}
          >
            {title}
          </Text>
          {pathname==="/gst-refund"?(<><Heading
          mb={5} as={'h2'}
        >
          RFD-06: GST refund order
        </Heading><Text mb={4}>{subcontent}</Text></>
          ):( <Heading
            mb={5} as={'h2'}
          >
            Documents To Be Submitted
          </Heading>)}
          
        </Flex>
        <Box
          as={Wrapper}
          py={8}
          border="1px"
          borderRadius="8"
          px={5}
          textAlign="center"
          borderColor={"#DFE4FD"}
          _hover={{ bg: "#01ACF1", color: "#FFFFFF" }}
        >
          <Flex alignItems={"baseline"}>
          <Text fontWeight={"bolder"}>{subcontent}</Text>
          </Flex>
          {documents?.map((document, index) =>
            document.contents.map((doc) => (
              <Flex key={index} alignItems={"baseline"} mt={4} gap={5}>
                <Box boxSize={3.5}>
                {document.iconType === "one" ? (
                  <IconButton
                    icon={<FaCheck size={16} />}
                    as={StyledBox1}
                    color="#01ACF1"
                    variant="outline"
                    border={"none"}
                    aria-label={""}
                    _hover={{ bg: "" }}
                    size={"16"}
                  />
                ) : (
                  <IconButton
                  icon={<FaArrowAltCircleRight size={16} />}
                  as={StyledBox1}
                  color="#01ACF1"
                  variant="outline"
                  border={"none"}
                  aria-label={""}
                  size={"16"}
                  _hover={{ bg: "" }} 
                />
                )}
                </Box>
                <Text textAlign="left" fontWeight={"bolder"} >
                     {doc}
                </Text>
              </Flex>
            ))
          )}
        </Box>
    </Box>
  );
};
export default DocumentSubmitted;