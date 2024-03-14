"use client";

import {
  Flex,
  Heading,
  Text,
  Box,
  SimpleGrid,
  IconButton,
  Card,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import Animation from "../Animation/Scroll-Animation";

interface FeatureProps {
  title: string;
  description?: string[];
  actions?: string[];
  estimate?: string;
  actionsHeading?: string;
  actions1?: string[];
  actionsHeading1?: string;
  actions2?: string[];
  actionsHeading2?: string;
  description2?: string;
}
interface PlanProps {
  aboutContents: string[];
  planContents: FeatureProps[];
  title: string;
}
const AboutThisPlan: React.FC<PlanProps> = ({
  aboutContents,
  planContents,
  title,
}) => {
  return (
    <>
      <Flex direction="column" alignItems="center" textAlign="center" mb={6}>
        <Animation>
          <Heading as={"h2"} mb={4}>
            {title}
          </Heading>
          {aboutContents?.map((contents, index) => (
            <Text key={index} mb={4}>
              {contents}
            </Text>
          ))}
        </Animation>
      </Flex>
      <Animation>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} spacingY={8}>
          {planContents?.map((feature, index) => (
            <Box
              key={index}
              pr={5}
              pl={6}
              pb={10}
              pt={8}
              borderRadius={8}
              borderColor="#DFF4FD"
              borderWidth="1px"
              _hover={{
                backgroundColor: "#01ACF1",
                color: "#FFFFFF",
                "& svg": { color: "white" },
                h2: { color: "white" },
                h4: { color: "white" },
                h5: { color: "white" },
              }}
              transition={"0.5s"}
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <Flex align="center">
                <Heading as={"h4"} mb={6}>
                  {feature.title}
                </Heading>
              </Flex>
              {feature.description?.map((description, index) => (
                <Text mb={0.5} key={index}>
                  {description}
                </Text>
              ))}
              <Box>
                <Heading as={"h5"} my={3}>
                  {feature.estimate}
                </Heading>
              </Box>
              <Box mb={2}>{feature.actionsHeading}</Box>
              {feature.actions?.map((action, index) => (
                <Flex key={index} alignItems={"baseline"} gap={5}>
                  <Box boxSize={3}>
                    <IconButton
                      icon={<FaCheck size={16} />}
                      color="#01ACF1"
                      variant="outline"
                      border={"none"}
                      aria-label={""}
                      _hover={{ bg: "" }}
                      size={"16"}
                    />
                  </Box>
                  <Text mb={4} fontWeight="bolder">
                    {action}
                  </Text>
                </Flex>
              ))}
              <Box mb={3}>{feature.actionsHeading1}</Box>
              {feature.actions1?.map((action, index) => (
                <Flex key={index} alignItems={"baseline"} gap={5}>
                  <Box boxSize={3}>
                    <IconButton
                      icon={<FaCheck size={16} />}
                      color="#01ACF1"
                      variant="outline"
                      border={"none"}
                      aria-label={""}
                      _hover={{ bg: "" }}
                      size={"16"}
                    />
                  </Box>
                  <Text mb={4} fontWeight="bolder">
                    {action}
                  </Text>
                </Flex>
              ))}
              <Box mb={3}>{feature.actionsHeading2}</Box>
              {feature.actions2?.map((action, index) => (
                <Flex key={index} alignItems={"baseline"} gap={5}>
                  <Box boxSize={3}>
                    <IconButton
                      icon={<FaCheck size={16} />}
                      color="#01ACF1"
                      variant="outline"
                      border={"none"}
                      aria-label={""}
                      _hover={{ bg: "" }}
                      size={"16"}
                      style={{ marginRight: "8px" }}
                    />
                  </Box>
                  <Text mb={4} fontWeight="bolder">
                    {action}
                  </Text>
                </Flex>
              ))}
              <Box>{feature.description2}</Box>
            </Box>
          ))}
        </SimpleGrid>
      </Animation>
    </>
  );
};
export default AboutThisPlan;
