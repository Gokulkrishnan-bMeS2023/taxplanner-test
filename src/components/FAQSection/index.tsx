"use client";
import { Flex, Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { FaBars, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Animation from "../Animation/Scroll-Animation";
import PrimaryButton from "../Buttons/PrimaryButton";
import SideAnimation from "../Animation/Side-Animation";

interface ServicesDatas {
  id: number;
  title: string;
  img?: string;
  paragraph?: string[];
  Fs?: string[];
  href?: string;
  description?: string;
  Fs1?: string[];
  FsHeading?: string;
  keypointers?: string;
}

interface ServicesProps {
  servicesDatas: ServicesDatas[];
  heading: string;
}

export default function FAQSection({ servicesDatas, heading }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<number>(1);
  const pathname = usePathname();

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  const handleScroll = (start: ScrollLogicalPosition, id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ block: start, behavior: "smooth" });
  };

  return (
    <Flex flexDirection="column">
      <Animation>
        {pathname === "/" || (
          <Flex justifyContent="center">
            <Text
              border="1px"
              borderColor="#DFE4FD"
              borderRadius={8}
              textTransform="uppercase"
              padding={"4px 16px"}
              fontWeight={600}
              color="#01ACF1"
              display="inline-block"
              mb={5}
            >
              FAQS
            </Text>
          </Flex>
        )}
        <Flex justifyContent="center" id="FAQSlider1">
          <Heading
            fontSize={{ base: "32", md: "40", lg: "45" }}
            fontWeight={700}
            color="#011A41"
            mb={10}
          >
            {heading}
          </Heading>
        </Flex>
      </Animation>
      <Animation>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box width={{ base: "100%", lg: "32%" }}>
            <Flex flexDir="column" alignItems={"stretch"}>
              {servicesDatas?.map((data: ServicesDatas) => (
                <Animation key={data.id}>
                  <Button
                    w="100%"
                    display="flex"
                    justifyContent="flex-start"
                    p={6}
                    mb={4}
                    borderWidth="1px"
                    borderRadius="md"
                    borderColor="#DFE4FD"
                    _hover={{ color: "#fff" }}
                    _active={{ color: "#011A41" }}
                    bgColor={activeTab === data.id ? "#01ACF1" : "white"}
                    transition={"1s"}
                    onClick={() => {
                      handleTabChange(data.id);
                      window.innerWidth <= 1000
                        ? handleScroll("start", "FAQSlider")
                        : pathname === "/" ||
                          handleScroll("start", "FAQSlider1");
                    }}
                    height="auto"
                  >
                    <Flex alignItems={"baseline"}>
                      <Box mr={5} me={3}>
                        <FaBars
                          color={activeTab === data.id ? "white" : "#01ACF1"}
                        />
                      </Box>
                      <Heading
                        as={"h5"}
                        lineHeight={1.9}
                        textAlign={"left"}
                        whiteSpace="break-spaces"
                        style={{
                          color: activeTab === data.id ? "white" : "#011A41",
                        }}
                      >
                        {data?.title}
                      </Heading>
                    </Flex>
                  </Button>
                </Animation>
              ))}
            </Flex>
          </Box>
          <Box
            borderBottom={"5px dotted #01ACF1"}
            borderStyle={""}
            width={{ base: "100%", md: "100%", lg: "0%" }}
            pt={{ base: 8, md: 12, lg: 1 }}
            id="FAQSlider"
          ></Box>
          <Box width={{ base: "100%", lg: "65%" }}>
            {servicesDatas?.map((subdata) => {
              if (subdata.id === activeTab) {
                return (
                  <SideAnimation key={subdata.id}>
                    <Box id="tab-pane-1">
                      <Flex flexWrap="wrap" gridGap="10">
                        <Box
                          flex="1 1 100%"
                          display="flex"
                          alignItems="flex-start"
                          flexDirection={{ base: "column", md: "row" }}
                        >
                          {subdata?.img && (
                            <Box
                              overflow={"hidden"}
                              mt={6}
                              display={"flex"}
                              height={{ base: "100%", lg: "450px" }}
                            >
                              <Image
                                src={subdata?.img}
                                alt="#"
                                width={"500px"}
                                height={"400px"}
                              />
                            </Box>
                          )}
                          <Box maxW="100%" maxH="100%">
                            <Heading
                              as={"h3"}
                              lineHeight={1.9}
                              fontWeight={600}
                              mb="6"
                              mt={{ base: 10, lg: 1 }}
                            >
                              {subdata?.title}
                            </Heading>
                            <Box mb="5" mt="5" color="#555555">
                              {subdata.paragraph?.map(
                                (data: string, index: number) => (
                                  <Box key={index} mb={4}>
                                    {data}
                                  </Box>
                                )
                              )}
                              <Box mb={4} fontWeight={"bold"}>
                                {subdata?.keypointers}
                              </Box>
                              {subdata.Fs?.map(
                                (data: string, index: number) => (
                                  <Box
                                    key={index}
                                    display="flex"
                                    alignItems={"baseline"}
                                    mb={4}
                                  >
                                    <Box>
                                      <FaCheck size={16} color="#01ACF1" />
                                    </Box>
                                    <Box ml={3} lineHeight={1.6}>
                                      {data}
                                    </Box>
                                  </Box>
                                )
                              )}
                              {subdata.FsHeading && (
                                <Box mb={4}>{subdata.FsHeading}</Box>
                              )}
                              {subdata.Fs1?.map(
                                (data: string, index: number) => (
                                  <Box
                                    key={index}
                                    display="flex"
                                    alignItems={"baseline"}
                                    mb={4}
                                  >
                                    <Box>
                                      <FaCheck size={16} color="#01ACF1" />
                                    </Box>
                                    <Box ml={3} lineHeight={1.6}>
                                      {data}
                                    </Box>
                                  </Box>
                                )
                              )}
                            </Box>
                            {subdata.description && (
                              <Box>{subdata?.description}</Box>
                            )}
                            {subdata?.href && (
                              <PrimaryButton
                                Name="Read More"
                                hrefLink={subdata?.href}
                              />
                            )}
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                  </SideAnimation>
                );
              }
              return null;
            })}
          </Box>
        </Flex>
      </Animation>
    </Flex>
  );
}
