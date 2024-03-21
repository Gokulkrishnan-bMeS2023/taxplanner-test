"use client";

import { Box, Heading, Text, Button, Icon, Flex, Link } from "@chakra-ui/react";
import { FaRupeeSign, FaCheck } from "react-icons/fa";

interface PriceProps {
  id: number;
  title: string;
  descriptions: string[];
  price: string;
  heading?: string;
  content?: string;
  buttonLink?: string;
  buttonname: string;
  showCheckIcon?: boolean;
}

interface PriceCardProps {
  contents: PriceProps[];
}

const ContentWithPriceCard: React.FC<PriceCardProps> = ({ contents }) => {
  const handleButtonClick = (buttonLink?: string) => {
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (buttonLink) {
        window.location.href = buttonLink;
      } else {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        window.scroll({ top: maxScroll, behavior: "smooth" });
      }
    };
  };
  return (
    <>
      {contents.map(
        ({
          id,
          title,
          descriptions,
          heading,
          price,
          content,
          buttonLink,
          buttonname,
          showCheckIcon,
        }) => (
          <Box key={id} width="100%">
            <Flex
              gap={10}
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={{ base: "flex-start", lg: "center" }}
              justify="space-between"
            >
              <Box flex={1}>
                <Heading mb={2} as="h2">
                  {title}
                </Heading>
                {descriptions.map((description, index) => (
                  <Text key={index} mb={4} py={2}>
                    {description}
                  </Text>
                ))}
              </Box>
              <Box flex={1} width={{ base: "100%", md: "100%", lg: "auto" }}>
                <Box paddingRight={{ base: "0", md: "28", lg: "16", xl: "24" }}>
                  <Box
                    padding="1.5rem"
                    border={"1px"}
                    borderColor={"#dfe4fd"}
                    borderRadius={"8px"}
                    textAlign={"center"}
                    width="100%"
                    _hover={{
                      backgroundColor: "#01acf1",
                      color: "#ffffff",
                      "& svg": { color: "white" },
                      h2: { color: "white" },
                      h4: { color: "white" },
                    }}
                    transition={"0.5s"}
                    style={{
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    {showCheckIcon && (
                      <Icon
                        as={FaCheck}
                        fontSize="48"
                        color={"#01acf1"}
                        mb={3}
                      />
                    )}
                    <Heading mb={8} as={"h4"} mt="2">
                      {heading}
                    </Heading>
                    <Heading mb={5} display="inline-flex">
                      <FaRupeeSign /> {price}
                    </Heading>
                    <Text>{content}</Text>
                    <Link
                      onClick={handleButtonClick(buttonLink)}
                      href={buttonLink}
                    >
                      <Button
                        mt="4"
                        _hover={{ bg: "#2D50D6", color: "#DFE4FD" }}
                        bg="#2D50D6"
                        color="#DFE4FD"
                        px={"3rem"}
                        py={"1.8rem"}
                        rounded={"8px"}
                        _focus={{
                          boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                        }}
                      >
                        {buttonname}
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        )
      )}
    </>
  );
};

export default ContentWithPriceCard;
