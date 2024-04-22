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
import { usePathname } from "next/navigation";

interface SubMenuItem {
  label: string;
  href: string;
  id: number;
  subItems1?: MenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobilebackgroundView, setIsMobilebackgroundView] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 991);
      setIsMobilebackgroundView(window.innerWidth <= 650);
      setIsMobileMenuOpen((prevIsMobileMenuOpen) => {
        if (prevIsMobileMenuOpen && window.innerWidth > 991) {
          return false;
        }
        return prevIsMobileMenuOpen;
      });
    };
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close the service menu if it's open
    setIsServiceMenuOpen(false);
    setSelectedSubMenu(null);
  };

  const handleToggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
    if (!isServiceMenuOpen) {
      setSelectedSubMenu(null);
    }
  };

  const handleServicesMouseEnter = () => {
    if (!isMobileView) {
      setIsServiceMenuOpen(true);
    }
  };

  const handleServicesMouseLeave = () => {
    if (!isMobileView) {
      setIsServiceMenuOpen(false);
    }
  };

  const handleServicesClick = () => {
    if (isMobileView) {
      setIsServiceMenuOpen((prevState) => !prevState); // Toggle service submenu
      // Close the selected submenu only if the service menu is closed
      if (!isServiceMenuOpen) {
        setSelectedSubMenu(null);
      }
    }
  };
  const handleSubMenuItemClick = (id: number) => {
    setSelectedSubMenu(id === selectedSubMenu ? null : id);
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
          id: 2,
          label: "GST",
          href: "/gst",
          subItems1: [
            {
              label: "Registration",
              href: "/gst-registration",
            },
            {
              label: "Amendments",
              href: "/amendments",
            },
            {
              label: "GST Returns",
              href: "/gst-return-services",
            },
            {
              label: "LUT",
              href: "/lut",
            },
            {
              label: "Refunds",
              href: "/gst-refund",
            },
          ],
        },
        {
          id: 3,
          label: "Incorporation",
          href: "/incorporation",
          subItems1: [
            {
              label: "Company",
              href: "/incorporation-company",
            },
            {
              label: "LLP",
              href: "/incorporation-llp",
            },
            {
              label: "Partnership",
              href: "/incorporation-partnership",
            },
          ],
        },
        {
          id: 4,
          label: "Other Services",
          href: "/other-services",
          subItems1: [
            {
              label: "MSME Registration",
              href: "/msme-registration",
            },
            {
              label: "IEC Registration / Renewal",
              href: "/iec-registration-renewal",
            },
            {
              label: "DSC",
              href: "/dsc-services",
            },
            {
              label: "ROC Filing",
              href: "/roc-filing",
            },
            {
              label: "SFT",
              href: "/sft",
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
    <>
      <Box
        bg={
          (pathname === "/" && isMobilebackgroundView) || isScrolled
            ? "white"
            : "transparent"
        }
        py="1.5"
        position={
          isScrolled
            ? "fixed"
            : pathname === "/" && isMobilebackgroundView
            ? "relative"
            : "fixed"
        }
        width="100%"
        zIndex="998"
        shadow={isScrolled ? "0px 8px 8px rgba(0, 0, 0, 0.1)" : "none"}
        transition={"0.5s"}
      >
        <Container maxW="container.xxl" py={0} px={{ base: 2, lg: 12 }}>
          <Flex justify="space-between" alignItems="center">
            <Box>
              <Link href="/">
                <Flex align="center">
                  <Box>
                    <Image
                      src="/assets/Taxplanner-logo.webp"
                      height={{ base: "60px", sm: "80px" }}
                      width={{ base: "60px", sm: "80px" }}
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

            {/* Mobile View MenuIcon */}
            <IconButton
              borderColor="#DFE4FD"
              padding="1rem"
              borderWidth="1px"
              borderRadius="8px"
              aria-label="Open Menu"
              display={{ base: "block", md: "block", lg: "none" }}
              onClick={handleToggleMobileMenu}
              icon={
                <FaBars
                  size={24}
                  color="#0000008C"
                  style={{ marginTop: "-8px" }}
                />
              }
              bg="white"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            />

            {/* Mobile View */}
            <Box
              display={{
                base: isMobileMenuOpen ? "block" : "none",
                md: isMobileMenuOpen ? "block" : "none",
                lg: "none",
              }}
              position="absolute"
              top={isMobileView ? "calc(100% + 10px)" : "100%"}
              right="0"
              bg="#fff"
              left="0"
              zIndex="999"
            >
              <Box px="10" py="10">
                <Flex direction="column" alignItems="flex-start">
                  {menuItems.map((menuItem, index) => (
                    <Box key={index} mb="4" width={"100%"}>
                      {menuItem.subItems ? (
                        <Box>
                          <Box
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
                                size={20}
                                color="#555555"
                                style={{ marginLeft: "3" }}
                              />
                            )}
                          </Box>
                          {isServiceMenuOpen &&
                            menuItem.label === "Services" && (
                              <Box
                                mt="2"
                                width={"100%"}
                                py="2"
                                bg="white"
                                borderColor="#DFE4FD"
                                borderWidth="1px"
                                rounded={"8px"}
                              >
                                {menuItem.subItems.map((subItem, subIndex) => (
                                  <Box
                                    key={subIndex}
                                    mt="1"
                                    px={"2"}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                    width={"100%"}
                                    onClick={() =>
                                      handleSubMenuItemClick(subItem.id)
                                    }
                                    position={"relative"}
                                    flexDirection={"column"}
                                  >
                                    <Flex
                                      width={"100%"}
                                      padding="3"
                                      _hover={{ bg: "#F0F0F0" }}
                                    >
                                      <Link href={subItem.href}>
                                        {subItem.label}
                                      </Link>
                                      <FaAngleDown
                                        size={24}
                                        color="#555555"
                                        style={{
                                          position: "absolute",
                                          right: 20,
                                        }}
                                      />
                                    </Flex>
                                    {selectedSubMenu === subItem.id && (
                                      <Box
                                        mt="4"
                                        padding={2}
                                        width={"100%"}
                                        borderColor="#DFE4FD"
                                        borderWidth="1px"
                                        rounded={"8px"}
                                      >
                                        {subItem.subItems1?.map(
                                          (item, index) => (
                                            <Box
                                              p="3"
                                              key={index}
                                              display={"flex"}
                                              flexDirection={"column"}
                                              _hover={{ bg: "#F0F0F0" }}
                                              _active={{ color: "#011A41" }}
                                            >
                                              <Link href={item.href}>
                                                {item.label}
                                              </Link>
                                            </Box>
                                          )
                                        )}
                                      </Box>
                                    )}
                                  </Box>
                                ))}
                              </Box>
                            )}
                        </Box>
                      ) : (
                        <Link href={menuItem.href}>{menuItem.label}</Link>
                      )}
                    </Box>
                  ))}
                  <Button
                    as={Link}
                    href={"/login"}
                    fontSize="16px"
                    fontWeight="500"
                    color="#DFE4FD"
                    py="5"
                    px="5"
                    bg="#2D50D6"
                    _hover={{ bg: "#2D50D6", textDecoration: "none" }}
                    _focus={{
                      boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                    }}
                  >
                    Login
                  </Button>
                </Flex>
              </Box>
            </Box>

            {/* Desktop View */}
            <Box display={{ base: "none", md: "none", lg: "block" }}>
              <Flex
                align="center"
                color="#555555"
                fontWeight="500"
                cursor={"pointer"}
              >
                {menuItems.map((menuItem, index) => (
                  <Box
                    key={index}
                    ml="4"
                    padding="2"
                    position="relative"
                    _hover={{ color: "#01acf1", "& svg": { color: "#01acf1" } }}
                    color={pathname === menuItem.href ? "#01acf1" : "#555555"}
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
                    {menuItem.label !== "Services" ? (
                      <Link href={menuItem.href}>{menuItem.label}</Link>
                    ) : (
                      <Flex alignItems="center">
                        {menuItem.label}
                        <FaAngleDown
                          size={16}
                          style={{ marginLeft: "3px", marginTop: "3px" }}
                        />
                      </Flex>
                    )}
                    {menuItem.subItems &&
                      isServiceMenuOpen &&
                      menuItem.label === "Services" && (
                        <Box
                          position="absolute"
                          top="100%"
                          left="0"
                          borderColor="#DFE4FD"
                          borderWidth="1px"
                          borderRadius="8px"
                          zIndex="99"
                          minWidth="190px"
                          transition={"0.5s"}
                        >
                          {menuItem.subItems.map((subItem, subIndex) => (
                            <Box key={subIndex}>
                              <Flex
                                p="4"
                                position={"relative"}
                                color={
                                  pathname === subItem.href ||
                                  (subItem.subItems1 &&
                                    subItem.subItems1.some(
                                      (item) => pathname === item.href
                                    ))
                                    ? "#fff"
                                    : "#555555"
                                }
                                bg={
                                  pathname === subItem.href ||
                                  (subItem.subItems1 &&
                                    subItem.subItems1.some(
                                      (item) => pathname === item.href
                                    ))
                                    ? "#01acf1"
                                    : "#fff"
                                }
                                _hover={{
                                  bg:
                                    pathname === subItem.href ||
                                    (subItem.subItems1 &&
                                      subItem.subItems1.some(
                                        (item) => pathname === item.href
                                      ))
                                      ? "#01acf1"
                                      : "#F0F0F0",
                                }}
                                _active={{
                                  bg: "#01ACF1",
                                  color: "#fff",
                                  "& svg": { color: "#fff" },
                                }}
                                alignItems="center"
                                onMouseEnter={() =>
                                  handleSubMenuItemClick(subItem.id)
                                }
                                onMouseLeave={() => handleSubMenuItemClick(-1)}
                              >
                                <Link href={subItem.href}>{subItem.label}</Link>
                                <Box>
                                  <FaAngleDown
                                    size={16}
                                    color={
                                      pathname === subItem.href ||
                                      (subItem.subItems1 &&
                                        subItem.subItems1.some(
                                          (item) => pathname === item.href
                                        ))
                                        ? "#fff"
                                        : "#555555"
                                    }
                                    style={{
                                      marginLeft: "5",
                                      marginTop: "4px",
                                    }}
                                  />
                                </Box>
                                {selectedSubMenu === subItem.id && (
                                  <Box
                                    bg={"#fff"}
                                    width={"170px"}
                                    display="flex"
                                    position={"absolute"}
                                    right={"100%"}
                                    top={"0"}
                                    py="2"
                                    flexDirection={"column"}
                                    rounded={"8px"}
                                    border={"1px solid #F0F0F0"}
                                    onMouseLeave={() =>
                                      setSelectedSubMenu(null)
                                    }
                                    transition={"0.5s"}
                                  >
                                    {subItem.subItems1?.map((item, index) => (
                                      <Link key={index} href={item.href}>
                                        <Flex
                                          px={3}
                                          py="2"
                                          color={
                                            pathname === item.href
                                              ? "white"
                                              : "#555555"
                                          }
                                          bg={
                                            pathname === item.href
                                              ? "#01acf1"
                                              : "#fff"
                                          }
                                          _hover={{
                                            bg:
                                              pathname === item.href
                                                ? "#01ACF1"
                                                : "#F0F0F0",
                                          }}
                                          _active={{
                                            bg: "#01ACF1",
                                            color: "#fff",
                                          }}
                                        >
                                          {item.label}
                                        </Flex>
                                      </Link>
                                    ))}
                                  </Box>
                                )}
                              </Flex>
                            </Box>
                          ))}
                        </Box>
                      )}
                  </Box>
                ))}
                <Button
                  as={Link}
                  href={"/login"}
                  ml="4"
                  fontSize="16px"
                  fontWeight="500"
                  color="#DFE4FD"
                  py="5"
                  px="5"
                  bg="#2D50D6"
                  _hover={{ bg: "#2D50D6", textDecoration: "none" }}
                  _focus={{
                    boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)",
                  }}
                >
                  Login
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
