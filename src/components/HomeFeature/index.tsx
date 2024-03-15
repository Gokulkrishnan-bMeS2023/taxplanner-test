
import { Container, Flex, Heading, Text, Icon, Link } from '@chakra-ui/react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

interface FeatureBoxProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description, link }) => (
  <Flex
    direction="column"
    borderRadius="8px" 
    border="1px solid #DFE4FD"
    width="100%"
    height="100%"
    maxW={{ base: '100%', md: '83%' }}
    lineHeight="1.5"
    padding="22px"
    flex="1 1 1"
    marginBottom={{ base: '20px', md: '0px' }}
    transition="all 0.3s"
    _hover={{
      backgroundColor: "#01ACF1",
      color: "#FFFFFF",
      "& svg": { color: "white" },
      "h4": { color: "white"},
      "& a": { color: "white", textDecoration: "none" }
    }}
  >
    <Icon as={icon} color="#01ACF1" fontSize="3em" my="12px" />
    <Heading as="h4" marginBottom="16px" lineHeight={1.9}>
      {title}
    </Heading>
    <Text marginBottom="20px">{description}</Text>
    <Link 
      textDecoration="none" 
      color="#01ACF1" 
      fontWeight="500" 
      display="flex" 
      alignItems="center" 
      transition="color 0.3s" 
      href={link}>
      Read More <Icon as={FaArrowRight} marginLeft="2" />
    </Link>
  </Flex>
);

const Features: React.FC = () => (
  <Container>
    <Flex 
        alignItems={{base:"left",lg:"center"}} 
        justifyContent={{ base: 'center', md: 'space-between' }} 
        flexDirection={{ base: 'column', lg: 'row' }} 
        gap={{ base: '10', md: '10' }}>
      <Flex flex="1">
        <Heading marginLeft={{ base: '0', md: '10' }}>Popular Services</Heading>
      </Flex>
      <Flex  flex="1" maxW="100%">
        <Flex 
           flexWrap="wrap" 
           justifyContent="space-between" 
           alignItems="flex-start">
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            alignItems="center">
            <Flex direction="column" gap="5" alignItems="center">
              <FeatureBox 
                 icon={FaCheck} 
                 title="Salaried & House Property Income" 
                 description="For persons having income from salary, house property and other income" 
                 link="/salary-house-property" />
              <FeatureBox 
                 icon={FaCheck} 
                 title="Capital Gain" 
                 description="Where total income includes gain/loss on sale of house property, land, Investment in shares, etc."
                 link="/capital-gain" />
            </Flex>
            <FeatureBox 
                 icon={FaCheck} 
                 title="NRI" 
                 description="For Non Resident Indian/Non Resident having Indian income" 
                 link="/nri" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Container>
);

export default Features;