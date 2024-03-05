import { Box, Center, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

interface ContentsTypes {
  id: number;
  title: string;
  DocumentList: string[];
  DocumentListIcons?: any[];
}

interface DocumentsToBeSubmittedProps {
  contents: ContentsTypes[];
}

export default function DocumentsToBeSubmitted({ contents }: DocumentsToBeSubmittedProps) {
  return (
    <>
      {contents.map((content) => (
        <Box key={content.id}>
          <Center>
            <Text
              fontWeight={"500"}
              border={"1px solid #DFE4FD"}
              borderRadius={"8px"}
              px={4}
              py={1}
              color={"#01acf1"}
              mb={4}
            >
              {content.title}
            </Text>
          </Center>
          <Heading textAlign={"center"}>Documents To Be Submitted</Heading>
          <Center my={12}>
            <Box
              w={"100%"}
              p={6}
              border={"1px solid #DFE4FD"}
              borderRadius={"8px"}
              _hover={{
                bgColor: "#01acf1",
                color: "white",
                "& svg": { color: "white" },
              }}
              transition={"0.5s"}
            >
              <Box fontWeight={"bolder"}>
                {content.DocumentList.map((item, index) => (
                  <Flex my={5} key={index}>
                    <Icon
                      mt={1}
                      as={ (content.DocumentListIcons && content.DocumentListIcons[index]) || FaCheck }
                      color={"#01acf1"}
                    />
                    <Text ms={4}>{item}</Text>
                  </Flex>
                ))}
              </Box>
            </Box>
          </Center>
        </Box>
      ))}
    </>
  );
}
