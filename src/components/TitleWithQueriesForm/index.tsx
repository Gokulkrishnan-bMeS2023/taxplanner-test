import QueriesForm from "@/components/Form/QueriesForm";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface ContentsType {
  id: number;
  title: string;
  description?: string[];
}
interface TitleWithQueriesFormProps {
  contents: ContentsType[];
}

export default function TitleWithQueriesForm({ contents }: TitleWithQueriesFormProps) {
  return (
    <>
      <Flex direction={{ base: "column", lg: "row" }} align={"center"}>
        {contents.map((content) => (
          <Box w={{ lg: "50%" }} key={content.id}>
            <Heading>{content.title}</Heading>
            {content.description?.map((item, index) => (
              <Text key={index} mt={6}>
                {item}
              </Text>
            ))}
          </Box>
        ))}
        <Box
          mt={{ base: 12, lg: 0 }}
          ms={{ lg: 6 }}
          p={7}
          w={{ md: "100%", lg: "45%" }}
          bgColor={"white"}
          border={"1px solid #DFE4FD"}
          borderRadius={"8px"}
        >
          <QueriesForm getInTouchLabel={false}/>
        </Box>
      </Flex>
    </>
  );
}
