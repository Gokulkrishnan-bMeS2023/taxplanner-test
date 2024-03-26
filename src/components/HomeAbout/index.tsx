import { Box, Container, Flex, Heading, Text,Image  } from '@chakra-ui/react';
import { FaTimes, FaUsers, FaPhone } from 'react-icons/fa';
import Animation from "../Animation/Scroll-Animation";

 const Feature = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <Flex alignItems="center" mb={{ base: 4, lg: 0 }}>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={{ base: '48px', lg: '48px' }}
      height={{ base: '48px', lg: '48px' }}
      borderRadius="50%"
      bg="#01ACF1"
      color="white"
    >
      {icon}
    </Box>
    <Heading ml={3} as={"h4"}>
      {title}
    </Heading>
  </Flex>
);
 const About = () => (
  <Box py={5} >
    <Container>
    <Animation>
      <Flex 
         flexDirection={{ base: 'column', lg: 'row' }} 
         alignItems="end" mb={4} gap="6">
        <Box 
          flex={{ base: '100%', sm:'100', lg: '6' }} 
          mb={{ base: '4', lg: '0' }} >
        <Image src="/assets/Taxplanner5.png" alt="" width={{ base: '100%', lg: '100%' }} />
        </Box>
        <Box flex={{ base: '100%', lg: '6' }} mb="4" >
        <Heading as={"h2"} mb="4">
            How it works?
          </Heading>
          <Text fontWeight="bolder" lineHeight={1.5}>Sign Up For Free</Text>
          <Text lineHeight={1.5} mb="1.5rem">Create your free account in a matter of minutes.</Text>
          <Text fontWeight="bolder" lineHeight={1.5}>Pick a Service</Text>
          <Text lineHeight={1.5} mb="1.5rem">We have a vast number of services to help you file your tax returns and run your business smoother.</Text>
          <Text fontWeight="bolder" lineHeight={1.5}>Have a Doubt?, Contact</Text>
          <Text lineHeight={1.5} mb="1.5rem">Our expert will reach you and clarify your queries, for you to choose the best plan.</Text>
          <Text fontWeight="bolder" lineHeight={1.5}>All Clear, Add to Cart</Text>
          <Text lineHeight={1.5}>You only have to pay for the service you choose. No membership fee needed.</Text>
        </Box>
      </Flex>
      <Flex flexWrap="wrap"  border="1px solid #DFE4FD" borderRadius={8} p={5} >
        <Box 
          width={{ base: '100%', lg: '33.333%' }} 
          mb={{ base: 8, lg: 0 }}
          px={{ base: 0, lg: 2 }} 
          borderRight={{ base: 'none', lg: '1px solid #DFE4FD' }}
          borderBottom={{ base: '1px solid #DFE4FD', lg: 'none' }}
          pl={{ base: 0, lg: 4 }} >
          <Feature icon={<FaTimes size={18} />} title="No Hidden Cost"  />
        </Box>
        <Box 
          width={{ base: '100%', lg: '33.333%' }} 
          mb={{ base: 8, lg: 0 }} 
          px={{ base: 0, lg: 4 }} 
          borderRight={{ base: 'none', lg: '1px solid #DFE4FD' }}
          borderBottom={{ base: '1px solid #DFE4FD', lg: 'none' }}
          pl={{ base: 0, lg: 4 }} >
          <Feature icon={<FaUsers size={18} />} title="Dedicated Team" />
        </Box>
        <Box 
          width={{ base: '100%', lg: '33.333%' }} 
          mb={{ base: 0, lg: 0 }} 
          px={{ base: 0, lg: 4 }} >
          <Feature icon={<FaPhone size={18} style={{ transform: 'rotate(90deg)' }} />} title="24/7 Available" />
        </Box>
         
      </Flex>
      </Animation>
    </Container>
  </Box>
);

export default About;
