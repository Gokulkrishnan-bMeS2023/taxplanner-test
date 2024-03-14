"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FaBars, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
interface SubMenuItem {
  label: string;
  href: string;
  id: number;
}
interface MenuItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}
interface SubMenuItem {
  label: string;
  href: string;
  subItems1?: MenuItem[]; // Corrected type definition
}
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [navid, setNavid] = useState(0);

  console.log(navid);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    const handleResize = () => setIsMobileView(window.innerWidth <= 991);
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleToggleServiceMenu = () =>
    setIsServiceMenuOpen(!isServiceMenuOpen);
  const handleServiceLinkClick = () => {
    if (isMobileView) {
      setIsMobileMenuOpen(false); // Close mobile menu
      setIsServiceMenuOpen(!isServiceMenuOpen); // Toggle service submenu
    }
  };
  const handleServicesMouseEnter = () => {
    setIsServiceMenuOpen(true);
  };
  const handleServicesMouseLeave = () => {
    setIsServiceMenuOpen(false);
  };
  const handleServicesClick = () => {
    if (isMobileView) {
      setIsServiceMenuOpen(!isServiceMenuOpen); // Toggle service submenu
    }
  };
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "#",
      subItems: [
        {
          id: 1,
          label: "Income Tax",
          href: "/income-tax",
          subItems1: [
            {
              label: "Salaried and House Property Income",
              href: "/salary-house-property",
            },
            {
              label: "Capital Gain",
              href: "/capital-gain",
            },
            {
              label: "NRI",
              href: "/nri",
            },
            {
              label: "Business Or Profession",
              href: "/business",
            },
            {
              label: "TDS/TCS",
              href: "/tds-tcs",
            },
          ],
        },
        {
          id: 12,
          label: "GST",
          href: "/gst",
          subItems1: [
            {
              label: "Registration",
              href: "/gst-registration",
            },
            {
              label: "Amendments",
              href: "/gst/amendments",
            },
            {
              label: "GST Returns",
              href: "/gst/gst-return-services",
            },
            {
              label: "LUT",
              href: "/gst/lut",
            },
            {
              label: "Refunds",
              href: "/gst/gst-refund",
            },
          ],
        },
        {
          id: 24,
          label: "Incorporation",
          href: "/incorporation",
          subItems1: [
            {
              label: "Company",
              href: "/incorporation/company",
            },
            {
              label: "LLP",
              href: "/incorporation/llp",
            },
            {
              label: "Partnership",
              href: "/incorporation/partnership",
            },
          ],
        },
        {
          id: 32,
          label: "Other Services",
          href: "/other-services",
          subItems1: [
            {
              label: "MSME Registration",
              href: "/other-services/msme-registration",
            },
            {
              label: "IEC Registration / Renewal",
              href: "/other-services/iec-registration-renewal",
            },
            {
              label: "DSC",
              href: "/other-services/dsc-services",
            },
            {
              label: "ROC Filling",
              href: "/other-services/roc-filling",
            },
            {
              label: "SFT",
              href: "/other-services/sft",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <Box
      bg={isMobileView ? "white" : isScrolled ? "white" : "transparent"}
      py="3"
      position={isMobileView ? "relative" : "fixed"}
      width="100%"
      zIndex="999"
      boxShadow={isScrolled ? "sm" : "none"}
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
                  as="h2"
                  fontWeight={700}
                  color="#01ACF1"
                  whiteSpace="nowrap"
                >
                  Tax Planner
                </Box>
              </Flex>
            </Link>
          </Box>
          <IconButton
            borderColor="#DFE4FD"
            padding="1rem"
            borderWidth="1px"
            borderRadius="8px"
            aria-label="Open Menu"
            display={{ base: "block", md: "none" }}
            onClick={handleToggleMobileMenu}
            icon={<FaBars size={20} color="#555555" />}
            bg="white"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
          <Box
            display={{ base: isMobileMenuOpen ? "block" : "none", md: "none" }}
            position="absolute"
            top={isMobileView ? "calc(100% + 20px)" : "100%"}
            right="0"
            bg="#fff"
            left="0"
            zIndex="999"
            boxShadow="md"
          >
            <Box px="10" py="10">
              <Flex direction="column" alignItems="flex-start">
                {menuItems.map((menuItem, index) => (
                  <Box key={index} mb="4">
                    {menuItem.subItems ? (
                      <Box>
                        <Link
                          href="#"
                          onClick={
                            menuItem.label === "Services"
                              ? handleServicesClick
                              : handleToggleServiceMenu
                          }
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          {menuItem.label}
                          {menuItem.label === "Services" && (
                            <FaAngleDown
                              size={16}
                              color="#555555"
                              style={{ marginLeft: "2" }}
                            />
                          )}
                        </Link>
                        {isServiceMenuOpen && menuItem.label === "Services" && (
                          <Box
                            mt="2"
                            minWidth="200px"
                            py="4"
                            bg="white"
                            borderColor="#DFE4FD"
                            borderWidth="1px"
                            rounded={"8px"}
                          >
                            {menuItem.subItems.map((subItem, subIndex) => (
                              <Box
                                key={subIndex}
                                // ml="2"
                                mt="1"
                                py="2"
                                px={"2"}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                width={"100%"}
                                onClick={() => setNavid(subItem.id)}
                                position={"relative"}
                                flexDirection={"column"}
                              >
                                <Flex width={"100%"} _hover={{ bg: "#F0F0F0" }}>
                                  <Link href={subItem.href}>
                                    {subItem.label}
                                  </Link>
                                  <FaAngleDown
                                    size={16}
                                    color="#555555"
                                    style={{ marginLeft: "4" }}
                                    
                                  />
                                </Flex>
                                <Box>
                                  {menuItem.subItems?.map((items, index) => {
                                    if (items.id === navid) {
                                      return (
                                        <Box key={index}>
                                          {items.subItems1?.map((sub) => (
                                            <Box
                                              display={"flex"}
                                              flexDirection={"column"}
                                              key={index}
                                            >
                                              <Link href={sub.href}>
                                                {sub.label}
                                              </Link>
                                            </Box>
                                          ))}
                                        </Box>
                                      );
                                    }
                                  })}
                                </Box>
                                {/* {subItem.subItems1?.map((sub, index) => (
                                  <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    key={index}
                                  >
                                    <Link href={sub.href}>{sub.label}</Link>
                                  </Box>
                                ))} */}
                              </Box>
                            ))}

                            {/* {menuItem.subItems?.map((item, subIndex) => {
                              if (item.id === navid) {
                                return (
                                  <Box
                                    key={subIndex}
                                    mt="1"
                                    p={2}
                                    bg={"#fff"}
                                    width={"200px"}
                                    display="flex"
                                    // position={"absolute"}
                                    // left={"240px"}
                                    // top={navid}
                                    flexDirection={"column"}
                                    rounded={"8px"}
                                    border={"1px solid #F0F0F0"}
                                    onMouseLeave={() => setNavid(0)}
                                  >
                                    {item.subItems1?.map((sub, index) => (
                                      <Flex
                                        key={index}
                                        p={2}
                                        mt={"1"}
                                        _hover={{ bg: "#F0F0F0" }}
                                        width={"100%"}
                                      >
                                        <Link href={sub.href}>{sub.label}</Link>
                                      </Flex>
                                    ))}
                                  </Box>
                                );
                              }
                              return null;
                            })} */}
                          </Box>
                        )}
                      </Box>
                    ) : (
                      <Link href={menuItem.href}>{menuItem.label}</Link>
                    )}
                  </Box>
                ))}
                <Button
                  fontSize="16px"
                  fontWeight="500"
                  color="#DFE4FD"
                  py="3"
                  px="5"
                  bg="#2D50D6"
                >
                  Login
                </Button>
              </Flex>
            </Box>
          </Box>

          {/* desktop */}
          <Box
            display={{ base: "none", md: "block" }}
            fontFamily="'Open Sans', sans-serif"
          >
            <Flex align="center" color="#555555" fontWeight="500">
              {menuItems.map((menuItem, index) => (
                <Box
                  key={index}
                  ml="4"
                  paddingY="2"
                  position="relative"
                  onMouseEnter={
                    menuItem.label === "Services"
                      ? handleServicesMouseEnter
                      : undefined
                  }
                  onMouseLeave={
                    menuItem.label === "Services"
                      ? handleServicesMouseLeave
                      : undefined
                  }
                >
                  <Link
                    href={menuItem.href}
                    onClick={handleServiceLinkClick}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {menuItem.label}
                    {menuItem.label === "Services" && (
                      <FaAngleDown
                        size={16}
                        color="#555555"
                        style={{ marginLeft: "3" }}
                      />
                    )}
                  </Link>
                  {menuItem.subItems &&
                    isServiceMenuOpen &&
                    menuItem.label === "Services" && (
                      <Box
                        position="absolute"
                        top="100%"
                        left="0"
                        bg="white"
                        borderColor="#DFE4FD"
                        borderWidth="1px"
                        borderRadius="8px"
                        py="2"
                        zIndex="99"
                        minWidth="200px"
                      >
                        {menuItem.subItems.map((subItem, subIndex) => (
                          <Box
                            key={subIndex}
                            mt="1"
                            p={2}
                            _hover={{ bg: "#F0F0F0" }}
                            display="flex"
                            alignItems="center"
                            onMouseEnter={() => setNavid(subItem.id)}
                            position={"relative"}
                          >
                            <Link href={subItem.href}>{subItem.label}</Link>
                            <Box>
                              <FaAngleDown
                                size={16}
                                color="#555555"
                                style={{ marginLeft: "4" }}
                              />
                            </Box>
                          </Box>
                        ))}
                        {menuItem.subItems?.map((item, subIndex) => {
                          if (item.id === navid) {
                            return (
                              <Box
                                key={subIndex}
                                mt="1"
                                p={2}
                                bg={"#fff"}
                                width={"200px"}
                                display="flex"
                                position={"absolute"}
                                right={"100%"}
                                top={navid}
                                flexDirection={"column"}
                                rounded={"8px"}
                                border={"1px solid #F0F0F0"}
                                onMouseLeave={() => setNavid(0)}
                                transition={"0.5s"}
                              >
                                {item.subItems1?.map((sub, index) => (
                                  <Flex
                                    key={index}
                                    p={2}
                                    mt={"1"}
                                    _hover={{ bg: "#F0F0F0" }}
                                    width={"100%"}
                                  >
                                    <Link href={sub.href}>{sub.label}</Link>
                                  </Flex>
                                ))}
                              </Box>
                            );
                          }
                          return null;
                        })}
                      </Box>
                    )}
                </Box>
              ))}

              <Button
                ml="4"
                fontSize="16px"
                fontWeight="500"
                color="#DFE4FD"
                py="5"
                px="5"
                bg="#2D50D6"
              >
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
