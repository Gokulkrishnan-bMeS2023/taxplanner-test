import { Box, Flex, Heading, Icon, Text, Spinner } from "@chakra-ui/react";
import { FaCheck, FaRupeeSign } from "react-icons/fa";
import Animation from "../Animation/Scroll-Animation";
import { useUserContext } from "../../utils/hooks/index";
import PrimaryButton from "../Buttons/PrimaryButton";
import ViewAnimation from "../Animation/View-Animation";

interface ContentsType {
  id: number;
  title?: string;
  card1List?: string[];
  viewDetailsButton?: boolean;
  viewDetailsLink?: string;
  buyNowLink: string;
  card2Content?: string[];
}

interface TitleWithTwoCardsProps {
  contents: ContentsType[];
  FilingType: string;
}

export default function TitleWithTwoCards({
  contents,
  FilingType,
}: TitleWithTwoCardsProps) {
  const { data } = useUserContext();
  const datas = data?.find(
    (data: { FilingType: any }) => data?.FilingType === FilingType
  );
  return (
    <Animation>
      {contents.map((content) => (
        <Box
          key={content.id}
          border={"1px solid #DFE4FD"}
          borderRadius={"8px"}
          p={6}
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Heading mb={6} pt={6}>
            {content.title}
          </Heading>
          <Flex
            mt={12}
            pb={12}
            direction={{ base: "column", lg: "row" }}
          >
            <ViewAnimation duration={2}>
              <Box
                w={{ lg: "88%" }}
                ms={{ lg: 16 }}
                me={{ lg: 4 }}
                height={"100%"}
                p={6}
                border={"1px solid #DFE4FD"}
                borderRadius={"8px"}
                _hover={{
                  bgColor: "#01acf1",
                  color: "white",
                  "& svg": { color: "white" },
                }}
                transition={"0.5s"}
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Box fontWeight={"bolder"}>
                  {content.card1List?.map((item, index) => (
                    <Flex mb={5} key={index}>
                      <Icon mt={1} as={FaCheck} color={"#01acf1"} />
                      <Text ms={4}>{item}</Text>
                    </Flex>
                  ))}
                </Box>
                {content.viewDetailsButton && (
                  <PrimaryButton
                    Name={"View Details"}
                    hrefLink={content.viewDetailsLink}
                  />
                )}
              </Box>
            </ViewAnimation>
            <ViewAnimation duration={3}>
              <Box
                w={{ lg: "88%" }}
                height={"100%"}
                ms={{ lg: 4 }}
                mt={{ base: 8, lg: 0 }}
                me={{ lg: 16 }}
                p={6}
                border={"1px solid #DFE4FD"}
                borderRadius={"8px"}
                _hover={{
                  bgColor: "#01acf1",
                  color: "white",
                  "& svg, h4": { color: "white" },
                }}
                transition={"0.5s"}
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Heading as={"h4"} mb={4} display="flex">
                  {data ? (
                    <>
                      <FaRupeeSign /> {datas?.Amount.toLocaleString()}
                    </>
                  ) : (
                    <Spinner color="#01acf1" size="lg" thickness="4px" />
                  )}
                </Heading>
                <PrimaryButton
                  Name={" Buy Now"}
                  hrefLink={content?.buyNowLink}
                />
                <Box>
                  {content.card2Content?.map((item, index) => (
                    <Box mb={4} key={index}>
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
            </ViewAnimation>
          </Flex>
        </Box>
      ))}
    </Animation>
  );
}
