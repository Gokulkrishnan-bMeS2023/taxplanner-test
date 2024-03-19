"use client";

import { Container, Heading, Text, Flex, Box } from "@chakra-ui/react";
import ContactForm from "@/components/Form/ContactForm";
import Animation from "@/components/Animation/Scroll-Animation";
import AnimationBox from "@/components/Animation/Box-Animation";

const Contact: React.FC = () => {
  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="center"
        align="center"
        mt={"20"}
        width={"100%"}
        gap={10}
        mb={10}
      >
        <Flex direction={"column"} gap={2} grow={1} width={"100%"}>
          <Animation>
            <Heading mb={4}>Get In Touch</Heading>
            <Text mb={4} color={"#777"}>
              <b>Email Us :</b> info@taxplanner.co.in
            </Text>
            <ContactForm />
          </Animation>
        </Flex>
        <Flex grow={1} justify={"center"} width={"100%"}>
          <Box width={"100%"}>
            <AnimationBox>
              <Box></Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125178.70977488907!2d77.63299351846385!3d11.3467830377341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd97da6e3d9c7f75e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706919961826!5m2!1sen!2sin"
                height={500}
                width={"100%"}
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AnimationBox>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Contact;
