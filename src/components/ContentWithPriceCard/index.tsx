
import { Box, Heading, Text, Button, Icon, Flex, Link } from '@chakra-ui/react';
import { FaRupeeSign, FaCheck } from 'react-icons/fa';

interface PriceProps {
  id: number;
  title: string;
  descriptions: string[];
  price: number;
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
  return (
    <>
      {contents.map(({ id, title, descriptions, heading, price, content, buttonLink, buttonname, showCheckIcon }) => (
        <Box mb={{ base: '10', md: '14', lg: '24' }} key={id} width="100%">
          <Flex
            gap={6}
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'flex-start', lg: 'center' }}
            justify="space-between"
          >
            <Box flex={1}>
              <Heading mb={2} as="h2">
                {title}
              </Heading>
              {descriptions.map((description, index) => (
                <Text key={index} mb={4} py={2}>
                  {description}
                </Text>
              ))}
            </Box>
            <Box flex={1} width={{ base: '100%',md:'100%', lg: 'auto' }}>
              <Box paddingRight={{base:"0",md:"28",lg:"24"}}>
              <Box
                padding="1.5rem"
                border={'1px'}
                borderColor={'#dfe4fd'}
                borderRadius={'8px'}
                textAlign={'center'}
                width="100%"
                _hover={{ backgroundColor: '#01acf1', color: '#ffffff', '& svg': { color: 'white' }, h2: { color: 'white' }, h4: { color: 'white' } }}
                transition={'0.5s'}
              >
                {showCheckIcon && (
                  <Icon as={FaCheck} fontSize="48" color={'#01acf1'} mb={3} />
                )}
                <Heading mb={5} as={'h4'}>
                  {heading}
                </Heading>
                <Heading mb={5} display="inline-flex">
                  <FaRupeeSign /> {price}
                </Heading>
                <Text mb={5}>
                  {content}
                </Text>
                <Button
                  _hover={{ bg: '#2d50d6', color: '#dfe4fd' }}
                  bg="#2d50d6"
                  color="#dfe4fd"
                  padding={{ base: '24px 32px', lg: '30px 48px' }}
                ><Link>{buttonLink}</Link>
                  {buttonname}
                </Button>
              </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default ContentWithPriceCard;