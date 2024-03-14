"use client";

import { Box, Heading, Text, Icon, Flex, Button, Link } from "@chakra-ui/react";
import { FaRupeeSign, FaCheck } from "react-icons/fa";
import Animation from "../Animation/Scroll-Animation";
import AnimationBox from "../Animation/Box-Animation";

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
          <Box mb={{ base: "10", md: "14", lg: "24" }} key={id} width="100%">
            <Flex
              gap={8}
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={{ base: "flex-start", lg: "center" }}
              justify="space-between"
            >
              <Box flex={1}>
                <Animation>
                  <Heading mb={"1.5rem"} as="h2" lineHeight={1.2}>
                    {title}
                  </Heading>
                  {descriptions.map((description, index) => (
                    <Text key={index} mb={"1.5rem"} p={0} m={0}>
                      {description}
                    </Text>
                  ))}
                </Animation>
              </Box>
              <Box flex={1} width={{ base: "100%", md: "100%", lg: "auto" }}>
                <AnimationBox>
                  <Box paddingRight={{ base: "0", md: "28", lg: "24" }}>
                    <Box
                      padding="1.5rem"
                      pt={"3rem"}
                      pb={"2.5rem"}
                      border={"1px solid #dfe4fd"}
                      borderRadius={"8px"}
                      textAlign={"center"}
                      width="100%"
                      style={{
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      }}
                      _hover={{
                        backgroundColor: "#01acf1",
                        color: "#ffffff",
                        "& svg": { color: "white" },
                        h2: { color: "white" },
                        h4: { color: "white" },
                      }}
                      transition={"0.5s"}
                    >
                      {showCheckIcon && (
                        <Icon
                          as={FaCheck}
                          fontSize="48"
                          color={"#01acf1"}
                          mb={3}
                        />
                      )}
                      <Heading mb={5} as={"h4"}>
                        {heading}
                      </Heading>
                      <Heading mb={5} display="inline-flex" pt={"1rem"}>
                        <FaRupeeSign /> {price}
                      </Heading>
                      <Text mb={5}>{content}</Text>
                      <Link
                        _hover={{ bg: "#2d50d6", color: "#dfe4fd" }}
                        bg="#2d50d6"
                        color="#dfe4fd"
                        px={"3rem"}
                        py={"1.2rem"}
                        rounded={"8px"}
                        onClick={handleButtonClick(buttonLink)}
                        href={buttonLink}
                      >
                        {buttonname}
                      </Link>
                    </Box>
                  </Box>
                </AnimationBox>
              </Box>
            </Flex>
          </Box>
        )
      )}
    </>
  );
};

export default ContentWithPriceCard;
