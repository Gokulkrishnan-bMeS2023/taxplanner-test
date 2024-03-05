import { Box, Flex, Heading, Button, Icon, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

interface ContentsType {
  id: number;
  title?: string;
  card1List?: string[];
  viewDetailsButton?: boolean;
  viewDetailsLink?: string;
  amount: string;
  buyNowLink: string;
  card2Content?: string[];
}

interface TitleWithTwoCardsProps {
  contents: ContentsType[];
}

export default function TitleWithTwoCards({ contents }: TitleWithTwoCardsProps) {
  return (
    <>
      {contents.map((content) => (
        <Box key={content.id} border={"1px solid #DFE4FD"} borderRadius={"8px"} p={6}>
          <Heading mb={6} pt={6}>
            {content.title}
          </Heading>
          <Flex mt={12} pb={12} direction={{ base: "column", lg: "row" }}>
            <Box w={{ lg: "50%" }} ms={{ lg: 16 }} me={{ lg: 4 }} p={6} border={"1px solid #DFE4FD"} borderRadius={"8px"} _hover={{bgColor: "#01acf1", color: "white", "& svg": { color: "white" }}} transition={"0.5s"}>
              <Box fontWeight={"bolder"}>
                {content.card1List?.map((item, index) => (
                  <Flex mb={5} key={index}>
                    <Icon mt={1} as={FaCheck} color={"#01acf1"} />
                    <Text ms={4}>{item}</Text>
                  </Flex>
                ))}
              </Box>
              {content.viewDetailsButton && (
                <Button as={Link} href={content.viewDetailsLink} mb={6} px={12} py={7} color={"#DFE4FD"} bgColor={"#2d50d6"} _hover={{ bgColor: "#2d50d6" }}>
                  View Details
                </Button>
              )}
            </Box>
            <Box w={{ lg: "50%" }} ms={{ lg: 4 }} mt={{ base: 8, lg: 0 }} me={{ lg: 16 }} p={6} border={"1px solid #DFE4FD"} borderRadius={"8px"} _hover={{bgColor: "#01acf1", color: "white", "& svg, h4": { color: "white" }}} transition={"0.5s"}>
              <Heading as={"h4"} mb={4}>
                &#8377; {content.amount}
              </Heading>
              <Button as={Link} href={content.buyNowLink} mb={4} px={12} py={7} color={"#DFE4FD"} bgColor={"#2d50d6"} _hover={{ bgColor: "#2d50d6" }}>
                Buy Now
              </Button>
              <Box>
                {content.card2Content?.map((item, index) => (
                  <Box mb={4} key={index}>{item}</Box>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  );
}
