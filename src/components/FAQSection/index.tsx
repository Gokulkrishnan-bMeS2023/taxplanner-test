"use client";
import {
  Flex,
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaBars, FaCheck } from "react-icons/fa";
import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
const FAQSection: FC<ServicesProps> = ({
  servicesDatas,
  heading,
}): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isTrue, setIsTrue] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("resize", updateStateBasedOnViewport);
    return () => {
      window.removeEventListener("resize", updateStateBasedOnViewport);
    };
  }, []);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };
  const handleScroll = (start: ScrollLogicalPosition, id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ block: start, behavior: "smooth" });
  };

  const updateStateBasedOnViewport = () => {
    if (window.innerWidth <= 1000) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };
  return (
    <Flex flexDirection="column">
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
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Box width={{ base: "100%", lg: "32%" }}>
          <Flex flexDir="column" alignItems={"stretch"}>
            {servicesDatas?.map((data: ServicesDatas) => (
              <Button
                key={data.id}
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
                onClick={() => {
                  handleTabChange(data.id);
                  isTrue
                    ? handleScroll("center", "FAQSlider")
                    : handleScroll("start", "FAQSlider1");
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
            ))}
          </Flex>
        </Box>
        <Box width={{ base: "100%", lg: "65%" }} id="FAQSlider">
          {servicesDatas?.map((subdata) => {
            if (subdata.id === activeTab) {
              return (
                <Box key={subdata.id} id="tab-pane-1">
                  <Flex flexWrap="wrap" gridGap="10">
                    <Box
                      flex="1 1 100%"
                      display="flex"
                      alignItems="flex-start"
                      flexDirection={{ base: "column", md: "row" }}
                    >
                      {subdata?.img && (
                        <Box maxW="100%" maxH="100%">
                          <Image
                            src={subdata?.img}
                            alt=""
                            width={"600px"}
                            h="400px"
                          />
                        </Box>
                      )}
                      <Box maxW="100%" maxH="100%">
                        <Heading
                          as={"h3"}
                          lineHeight={1.9}
                          fontWeight={600}
                          mb="6"
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
                          {subdata.Fs?.map((data: string, index: number) => (
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
                          ))}
                          {subdata.FsHeading && (
                            <Box mb={4}>{subdata.FsHeading}</Box>
                          )}
                          {subdata.Fs1?.map((data: string, index: number) => (
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
                          ))}
                        </Box>
                        {subdata.description && (
                          <Box>{subdata?.description}</Box>
                        )}
                        {subdata?.href && (
                          <Button
                            bgColor="#2D50D6"
                            color="#DFE4FD"
                            padding="16px 48px"
                            py="1.5rem"
                            mt={3}
                          >
                            <Link href={subdata?.href}>Read More</Link>
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              );
            }
            return null;
          })}
        </Box>
      </Flex>
    </Flex>
  );
};
export default FAQSection;
