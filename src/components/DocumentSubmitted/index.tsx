"use client";

import { Box, Heading, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaArrowAltCircleRight, FaCheck } from "react-icons/fa";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Animation from "../Animation/Scroll-Animation";

interface Document {
  id: number;
  iconType: string;
  contents: string[];
}

interface DocumentProps {
  title: string;
  documents: Document[];
  subcontent?: string;
  titleContent?: string;
}

const DocumentSubmitted: FC<DocumentProps> = ({
  title,
  titleContent,
  subcontent,
  documents,
}) => {
  const pathname = usePathname();

  return (
    <Box py={5}>
      <Flex
        direction="column"
        alignItems="center"
        textAlign="center"
        maxW="600px"
        mx="auto"
        mb={10}
      >
        <Animation>
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
          {pathname === "/gst-refund" ? (
            <>
              <Heading mb={5} as={"h2"}>
                RFD-06: GST refund order
              </Heading>
              <Text mb={4}>{titleContent}</Text>
            </>
          ) : (
            <Heading mb={5} as={"h2"}>
              Documents To Be Submitted
            </Heading>
          )}
        </Animation>
      </Flex>
      <Animation>
        <Box
          py={8}
          border="1px"
          borderRadius="8"
          px={5}
          textAlign="center"
          borderColor={"#DFE4FD"}
          _hover={{
            backgroundColor: "#01ACF1",
            color: "#FFFFFF",
            "& svg": { color: "white" },
          }}
          transition={"0.5s"}
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Flex alignItems={"baseline"}>
            <Text fontWeight={"bolder"}>{subcontent}</Text>
          </Flex>
          {documents.map((document) =>
            document.contents.map((doc, index) => (
              <Flex key={index} alignItems="baseline" mt={4} gap={5}>
                <Box boxSize={3.5}>
                  {document.iconType === "one" ? (
                    <IconButton
                      icon={<FaCheck size={16} />}
                      color="#01ACF1"
                      variant="outline"
                      border="none"
                      aria-label={""}
                      _hover={{ bg: "" }}
                      size={"16"}
                    />
                  ) : (
                    <IconButton
                      icon={<FaArrowAltCircleRight size={16} />}
                      color="#01ACF1"
                      variant="outline"
                      border="none"
                      aria-label={""}
                      size={"16"}
                      _hover={{ bg: "" }}
                    />
                  )}
                </Box>
                <Text textAlign="left" fontWeight={"bolder"}>
                  {doc}
                </Text>
              </Flex>
            ))
          )}
        </Box>
      </Animation>
    </Box>
  );
};

export default DocumentSubmitted;
