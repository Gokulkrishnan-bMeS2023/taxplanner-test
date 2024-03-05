"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Box, Container, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { FaBars, FaAngleDown } from 'react-icons/fa';

interface SubMenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

interface SubMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

const SubMenu: React.FC<SubMenuProps> = ({ isOpen, onClose, items }) => {
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton cursor="pointer">
        <Flex align="center">
          Services <Box ml="1" mt="1"><FaAngleDown /></Box>
        </Flex>
      </MenuButton>
      <MenuList fontSize={17} color="#212529" minWidth="200px">
        {items.map((item, index) => (
          <MenuItemComponent key={index} item={item} />
        ))}
      </MenuList>
    </Menu>
  );
};

interface MenuItemProps {
  item: MenuItem;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item }) => {
  const { label, href, subItems } = item;
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
        _hover={{ bg: '#f0f0f0' }}
        padding={3}
        pl={6}
      >
        <Flex alignItems="center">
          <Link href={href}>{label}</Link>
          {subItems && (
            <Box ml="2" mt="1" ><FaAngleDown color='#555555'/></Box>
          )}
        </Flex>
      </MenuItem>
      {subItems && (
        <SubMenuItems
          isOpen={isSubMenuOpen}
          items={subItems}
          onClose={() => setIsSubMenuOpen(false)}
        />
      )}
    </>
  );
};

interface SubMenuItemsProps {
  isOpen: boolean;
  onClose: () => void;
  items: SubMenuItem[];
}

const SubMenuItems: React.FC<SubMenuItemsProps> = ({ isOpen, onClose, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!isOpen && isHovered) {
      onClose();
    }
  }, [isOpen, isHovered, onClose]);

  return (
    <MenuList
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      display={(isOpen || isHovered) ? 'block' : 'none'}
      position="absolute"
      right="100%"
      bg="white"
      top={0}
      zIndex={1}
      border="1px solid #ccc"
      borderRadius="4px"
      minWidth="170px"
      padding={2}
    >
      {items.map((item, index) => (
        <MenuItem key={index}>
          <Link href={item.href}>{item.label}</Link>
        </MenuItem>
      ))}
    </MenuList>
  );
};


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: 'Income Tax',
      href: '/income_tax',
      subItems: [
        { label: 'Salaried and House Property Income', href: '/salary_house_property' },
        { label: 'Capital Gain', href: '/capital_gain' },
        { label: 'NRI', href: '/nri' },
        { label: 'Business Or Profession', href: '/business' },
        { label: 'TDS/TCS', href: '/tds_tcs' }
      ]
    },
    {
      label: 'GST',
      href: '/gst',
      subItems: [
        { label: 'Registration', href: '/gst-registration' },
        { label: 'Amendments', href: '/amendment' },
        { label: 'GST Returns', href: '/gst_return_services' },
        { label: 'LUT', href: '/lut' },
        { label: 'Refunds', href: '/gst_refund' }
      ]
    },
    {
      label: 'Incorporation',
      href: '/incorporation',
      subItems: [
        { label: 'Company', href: '/registration' },
        { label: 'LLP', href: '/Amendment' },
        { label: 'Partnership', href: '/Gst_return' },
      ]
    },
    {
      label: 'Other Services',
      href: '/other_services',
      subItems: [
        { label: 'MSME Registration', href: '/Registration' },
        { label: 'IEC Registration / Renewal', href: '/Amendment' },
        { label: 'DSC', href: '/Gst_return' },
        { label: 'ROC Filling', href: '/lut' },
        { label: 'SFT', href: '/Refund' }
      ]
    }
  ];

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      bg={isScrolled ? 'white' : 'transparent'}
      boxShadow={isScrolled ? 'sm' : 'none'}
      py="3"
      marginTop={-2}
      transition="background-color 0.3s ease"
      position="fixed"
      width="100%"
      zIndex="999"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" alignItems="center">
          <Box>
            <Link href="/">
              <Flex align="center">
                <Box>
                  <Image
                    src="/assets/Taxplanner-logo.png"
                    height="80px"
                    width="80px"
                    alt=""
                  />
                </Box>
                <Box
                  ml="2"
                  fontSize={44}
                  fontWeight={700}
                  color='#01ACF1'
                  whiteSpace="nowrap"
                >
                  Tax Planner
                </Box>
              </Flex>
            </Link>
          </Box>
          <Box display={{ base: 'block', md: 'none' }} onClick={toggleMobileMenu}>
            <FaBars size={24} />
          </Box>
          <Box display={{ base: 'none', md: 'block' }} fontFamily={"'Open Sans',sans-serif"}>
            <Flex align="center" color="#555555" fontWeight={500}>
              <Box ml={4}>
                <Link href="/">Home</Link>
              </Box>
              <Box padding={5}
                ml={4}
                onMouseEnter={() => setIsServiceMenuOpen(true)}
                onMouseLeave={() => setIsServiceMenuOpen(false)}
              >
                <SubMenu
                  isOpen={isServiceMenuOpen}
                  onClose={() => setIsServiceMenuOpen(false)}
                  items={menuItems}
                />
              </Box>
              <Box>
                <Link href="/contact">Contact</Link>
              </Box>
              <Button ml={4} fontSize={16} fontWeight={500} display={{ base: 'none', md: 'inline-flex' }} color={'#DFE4FD'} py={5} px={5} bg={'#2d50d6'}>
                Login
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;