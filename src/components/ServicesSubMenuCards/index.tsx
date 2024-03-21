"use client";
import { Heading, Text, Link, Center, Card, Box } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import "./services.css";
import Animation from "../Animation/Scroll-Animation";
import dynamic from "next/dynamic";
const Images = dynamic(() => import("../Images"));

interface ServiceProps {
  title: string;
  startingFrom: string;
  description: string;
  knowMoreLink: string;
  imgSrc?: any;
  content?: string;
  buyNowLink: string;
}
interface ServicesCardProps {
  cartcontents: ServiceProps[];
}
const ServicesSubContainer: React.FC<ServicesCardProps> = ({
  cartcontents,
}) => {
  return (
    <Animation>
      <Card
        p={"24px"}
        border={"1px solid #DFE4FD"}
        _hover={{
          bg: "#01ACF1",
          transition: "0.5s",
          color: " #fff",
          h5: { color: "white" },
        }}
        className="Wrapper"
      >
        {cartcontents?.map((content, index) => (
          <Box key={index}>
            <Box className="StyledBox1">
              <Images
                src={content.imgSrc}
                alt={"img"}
                width={120}
                height={120}
              />
              <Heading
                as={"h5"}
                pt="15px"
                lineHeight="1.9"
                mt="0"
                fontWeight={"600 !important"}
              >
                {content.title}
              </Heading>
            </Box>
            <Box className="StyledBox2">
              <Heading as="h5" lineHeight={1.5} mb={2} pt="15px">
                {content.title}
              </Heading>
              <Heading as="h5" mb={3}>
                Starting From : ₹ {content.startingFrom}
              </Heading>
              <Text mb={3}>{content?.content}</Text>
              <Text mb={3}>{content.description}</Text>
              <Link
                mb={2}
                href={content.knowMoreLink}
                textDecoration="none"
                fontWeight={700}
                display={"flex"}
                alignItems={"center"}
                _hover={{ textDecoration: "none" }}
                width={"fit-content"}
              >
                Know More <BiRightArrowAlt size={24} />
              </Link>
              {content.buyNowLink === "#" || (
                <Center>
                  <Link
                    size="1rem"
                    margin="0.5rem"
                    fontWeight="500"
                    color={"#fff"}
                    borderColor="#2D50D6"
                    backgroundColor="#2D50D6"
                    rounded={"8px"}
                    py={"0.5rem"}
                    px={"1rem"}
                    href={content.buyNowLink}
                    textDecoration="none"
                    _hover={{ textDecoration: "none", bg: "" }}
                    _focus={{
                      boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                    }}
                  >
                    Buy Now
                  </Link>
                </Center>
              )}
            </Box>
          </Box>
        ))}
      </Card>
    </Animation>
  );
};
export default ServicesSubContainer;
