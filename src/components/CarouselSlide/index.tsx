"use client";
import { carouselItems } from "@/component-contents/carousel-slide/CarouselSlide";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box mb={5}>
      <Container maxW="container.xxl" p={0} zIndex={1}>
        <Box pos="relative">
          {carouselItems.map((item, index) => (
            <Box
              key={index}
              pos="relative"
              display={index === activeIndex ? "block" : "none"}
            >
              <Image
                src={item.imageSrc}
                alt={"img"}
                width={"100%"}
                height={"100%"}
                objectFit="cover"
                loading="eager"
                fetchPriority="high"
              />
              <Box
                pos="absolute"
                top={{ base: "10", md: "0" }}
                left="0"
                right="0"
                bottom="0"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="start"
              >
                <Box
                  width={"50%"}
                  position="absolute"
                  left={{ base: "12%", md: "9%" }}
                  color="#fff"
                  py="1.25rem"
                  transition="opacity 0.10s"
                >
                  <VStack spacing={{ base: "3", lg: "3.5" }} align="start">
                    <Text
                      fontSize={{ base: "14px", lg: "16px" }}
                      borderRadius="8px"
                      backgroundColor="#B4D234"
                      color="#fff"
                      padding="0.25rem 1rem"
                    >
                      Tax Planning made simple
                    </Text>
                    <Heading
                      as="h6"
                      color="#01ACF1"
                      lineHeight="1.2"
                      textAlign="left"
                      transition={"0.5s"}
                    >
                      {item.description}
                    </Heading>
                    <Link href={item.link}>
                      <Button
                        py={{ base: "5px", lg: "30px" }}
                        px={{ base: "15px", lg: "48px" }}
                        backgroundColor="#2D50D6"
                        color="#DFE4FD"
                        textDecoration="none"
                        borderRadius="8px"
                        _hover={{ backgroundColor: "#2D50D6" }}
                        _focus={{
                          boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                        }}
                      >
                        <Text>{item.buttonname}</Text>
                      </Button>
                    </Link>
                  </VStack>
                </Box>
              </Box>
            </Box>
          ))}
          <Button
            onClick={handlePrev}
            position="absolute"
            top="50%"
            left={0}
            backgroundColor="#01ACF1"
            borderRadius="0 3rem 3rem 0"
            width="2rem"
            height="3.1rem"
            transform="translateY(-50%)"
            borderWidth="1px"
            opacity=".6"
            transition="opacity 0.15s ease"
            color="white"
            cursor="pointer"
            size={"0"}
            _hover={{ backgroundColor: "#01ACF1" }}
          >
            <Box>
              <Image
                src={"./assets/Symbol2.svg"}
                alt={"img"}
                width={15}
                height={30}
              />
            </Box>
          </Button>
          <Button
            onClick={handleNext}
            position="absolute"
            top="50%"
            right={0}
            backgroundColor="#01ACF1"
            borderRadius="3rem 0 0 3rem"
            width="2rem"
            height="3.1rem"
            transform="translateY(-50%)"
            borderWidth="1px"
            color="white"
            opacity=".6"
            transition="opacity 0.15s ease"
            cursor="pointer"
            size={"0"}
            _hover={{ backgroundColor: "#01ACF1" }}
          >
            <Box>
              <Image
                src={"./assets/Symbol1.svg"}
                alt={"img"}
                width={15}
                height={30}
              />
            </Box>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default Carousel;
