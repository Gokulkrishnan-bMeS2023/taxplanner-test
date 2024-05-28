"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  IconButton,
  Text,
  Menu,
  MenuItem,
  MenuList,
  Avatar,
  MenuButton,
  Divider,
} from "@chakra-ui/react";
import { FaBars, FaAngleDown, FaUser, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubMenuItem {
  label: string;
  href: string;
  id: number;
  subItems1?: MenuItem[];
  subItems?: MenuItem[];
  subItems2?: MenuItem[];
  subItems3?: MenuItem[];
}

interface MenuItem {
  id: number;
  label: string;
  href: string;
  subItems?: SubMenuItem[];
  subItems2?: SubMenuItem[];
}

const DashboardNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobilebackgroundView, setIsMobilebackgroundView] = useState(true);
  const [selectedSubMenu, setSelectedSubMenu] = useState<number | null>(null);
  const [selectedSubMenu2, setSelectedSubMenu2] = useState<number | null>(null);
  const [selectedSubMenu3, setSelectedSubMenu3] = useState<number | null>(null);
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
    setIsServiceMenuOpen(false);
    setSelectedSubMenu(null);
    setSelectedSubMenu2(null);
    setSelectedSubMenu3(null);
  };

  const handleToggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
    if (!isServiceMenuOpen) {
      setSelectedSubMenu(null);
      setSelectedSubMenu2(null);
      setSelectedSubMenu3(null);
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
    // Toggle the state of isServiceMenuOpen
    setIsServiceMenuOpen((prevIsServiceMenuOpen) => !prevIsServiceMenuOpen);
    // If the submenu is being opened, reset the selected submenu states
    if (!isServiceMenuOpen) {
      setSelectedSubMenu(null);
      setSelectedSubMenu2(null);
      setSelectedSubMenu3(null);
    }
  };

  const handleSubMenuItemClick = (id: number) => {
    if (id === -1) {
      // Hide all submenus by setting their corresponding selectedSubMenu states to null
      setSelectedSubMenu(-1);
      setSelectedSubMenu2(-1);
      setSelectedSubMenu3(-1);
      // Add more setSelectedSubMenuX(null) calls if you have more submenus
    } else {
      // Handle submenu selection as usual
      setSelectedSubMenu(id === selectedSubMenu ? null : id);
    }
  };

  const handleSubMenuItemClick2 = (id: number) => {
    setSelectedSubMenu2(id === selectedSubMenu2 ? null : id);
  };

  const handleSubMenuItemClick3 = (id: number) => {
    setSelectedSubMenu3(id === selectedSubMenu3 ? null : id);
  };

  const handleSubMenuItemClick1 = (id: number) => {
    // Toggle the selected submenu1 only if it's not already selected
    if (id === selectedSubMenu) {
      // If the clicked submenu is already selected, close it
      return;
    } else {
      // If the clicked submenu is not selected, open it
      setSelectedSubMenu(id);
      setSelectedSubMenu2(null);
    }
  };

  const handleSubMenuItemClick4 = (id: number) => {
    // Toggle the selected submenu1 only if it's not already selected
    if (id === selectedSubMenu2) {
      // If the clicked submenu is already selected, keep it open
      return;
    } else {
      // If the clicked submenu is not selected, toggle its state
      setSelectedSubMenu2(id);
      setSelectedSubMenu3(null);
    }
  };

  const handleSubMenuItemClick5 = (id: number) => {
    // Toggle the selected submenu3 only if it's not already selected
    setSelectedSubMenu3(id === selectedSubMenu3 ? null : id);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: "Dashboard",
      href: "/auth/dashboard",
    },
    {
      id: 2,
      label: "Services",
      href: "#",
      subItems: [
        {
          id: 1,
          label: "Income Tax",
          href: "#",
          subItems1: [
            {
              id: 1,
              label: "Salaried and House Property Income",
              href: "/auth/itr-filing/income-tax/edit-form",
            },
            {
              id: 2,
              label: "Capital Gain",
              href: "/auth/itr-filing/income-tax/edit-form",
            },
            {
              id: 3,
              label: "NRI",
              href: "/auth/itr-filing/income-tax/edit-form",
            },
            {
              id: 4,
              label: "Business Or Profession",
              href: "/auth/itr-filing/other-services/edit-form",
            },
            {
              id: 5,
              label: "TDS/TCS",
              href: "/auth/itr-filing/other-services/edit-form",
            },
          ],
        },
        {
          id: 2,
          label: "GST",
          href: "#",
          subItems1: [
            {
              id: 1,
              label: "Registration",
              href: "/auth/itr-filing/gst-registration/edit-form",
            },
            {
              id: 2,
              label: "Amendments",
              href: "/auth/itr-filing/other-services/edit-form",
            },
            {
              id: 3,
              label: "GST Returns",
              href: "/auth/itr-filing/other-services/edit-form",
            },
            {
              id: 4,
              label: "LUT",
              href: "/auth/itr-filing/other-services/edit-form",
            },
            {
              id: 5,
              label: "Refunds",
              href: "/auth/itr-filing/other-services/edit-form",
            },
          ],
        },
        {
          id: 3,
          label: "Incorporation",
          href: "#",
          subItems1: [
            {
              id: 1,
              label: "Company",
              href: "/auth/itr-filing/other-services/edit-form",
            },
            {
              id: 2,
              label: "LLP",
              href: "/auth/itr-filing/other-services/edit-form",
            },
            {
              id: 3,
              label: "Partnership",
              href: "/auth/itr-filing/other-services/edit-form",
            },
          ],
        },
        {
          id: 4,
          label: "Other Services",
          href: "",
          subItems1: [
            {
              id: 1,
              label: "DSC",
              href: "/dsc-services",
              subItems2: [
                {
                  id: 1,
                  label: "Class III",
                  href: "#",
                  subItems3: [
                    {
                      id: 1,
                      label: "DSC Class III",
                      href: "/auth/itr-filing/dsc/edit-form",
                    },
                    {
                      id: 2,
                      label: "DSC Encrypted Individual",
                      href: "/auth/itr-filing/dsc/edit-form",
                    },
                    {
                      id: 3,
                      label: "DSC Encrypted Organization",
                      href: "/auth/itr-filing/dsc/edit-form",
                    },
                  ],
                },
                {
                  label: "DSC DGFT",
                  href: "/auth/itr-filing/dsc/edit-form",
                  id: 2,
                },
                {
                  label: "DSC ICEGATE",
                  href: "/auth/itr-filing/dsc/edit-form",
                  id: 3,
                },
                {
                  label: "DSC NRI",
                  href: "/auth/itr-filing/dsc/edit-form",
                  id: 4,
                },
              ],
            },
            {
              id: 2,
              label: "MSME Registration",
              href: "/auth/itr-filing/other-services/edit-form",
            },
            {
              id: 3,
              label: "IEC Registration / Renewal",
              href: "/auth/itr-filing/other-services/edit-form",
            },
            {
              id: 4,
              label: "ROC Filing",
              href: "/auth/itr-filing/other-services/edit-form",
            },
          ],
        },
        {
          id: 5,
          label: "ITR-U",
          href: "/auth/itr-filing/income-tax/edit-form",
        },
        {
          id: 6,
          label: "Generate Rental Receipts",
          href: "/auth/itr-filing/rental-receipt/generate-receipt-form",
        },
        {
          id: 7,
          label: "Staff",
          href: "#",
          subItems1: [
            {
              id: 1,
              label: "Staff list",
              href: "/auth/admin/staff/list",
            },
            {
              id: 2,
              label: "Add staff",
              href: "/auth/admin/staff/add",
            },
          ],
        },
        {
          id: 8,
          label: "Users",
          href: "#",
          subItems1: [
            {
              id: 1,
              label: "User list",
              href: "/auth/admin/user/list",
            },
          ],
        },
      ],
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
        transition="background-color 0.5s ease"
        zIndex="998"
        shadow={isScrolled ? "0px 8px 8px rgba(0, 0, 0, 0.1)" : "none"}
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
                            onClick={handleServicesClick}
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
                              <Box mt="2" width={"100%"} py="2" bg="white">
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
                                      handleSubMenuItemClick1(subItem.id)
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

                                      {subItem.subItems1 && (
                                        <Box>
                                          <FaAngleDown
                                            size={16}
                                            color={
                                              pathname === subItem.href ||
                                              subItem.subItems1.some(
                                                (item) => pathname === item.href
                                              )
                                                ? "#fff"
                                                : "#555555"
                                            }
                                            style={{
                                              position: "absolute",
                                              right: 20,
                                            }}
                                          />
                                        </Box>
                                      )}
                                    </Flex>
                                    {selectedSubMenu === subItem.id &&
                                      subItem.subItems1 && (
                                        <Box mt="4" padding={2} width={"100%"}>
                                          {subItem.subItems1?.map(
                                            (item, index) => (
                                              <Box
                                                p="2"
                                                px="4"
                                                key={index}
                                                display={"flex"}
                                                justifyContent="space-between"
                                                flexDirection={"column"}
                                                _hover={{ bg: "#F0F0F0" }}
                                                _active={{ color: "#011A41" }}
                                                onClick={() =>
                                                  handleSubMenuItemClick4(
                                                    item.id
                                                  )
                                                }
                                              >
                                                <Flex
                                                  width={"100%"}
                                                  padding="2"
                                                  _hover={{ bg: "#F0F0F0" }}
                                                >
                                                  <Link href={item.href}>
                                                    {item.label}
                                                  </Link>
                                                  {item.subItems2 && (
                                                    <Box>
                                                      <FaAngleDown
                                                        size={16}
                                                        color={
                                                          pathname ===
                                                            subItem.href ||
                                                          item.subItems2.some(
                                                            (subi) =>
                                                              pathname ===
                                                              subi.href
                                                          )
                                                            ? "#fff"
                                                            : "#555555"
                                                        }
                                                        style={{
                                                          position: "absolute",
                                                          right: 30,
                                                        }}
                                                      />
                                                    </Box>
                                                  )}
                                                </Flex>
                                                <Divider color={"#52545d"} />
                                                {item.subItems2 &&
                                                  selectedSubMenu2 ===
                                                    item.id && (
                                                    <Box
                                                      mt="2"
                                                      width={"100%"}
                                                      py="2"
                                                      px="4"
                                                      bg="white"
                                                      borderColor="#DFE4FD"
                                                      borderWidth="1px"
                                                      rounded={"8px"}
                                                    >
                                                      {item.subItems2.map(
                                                        (subi, index) => (
                                                          <Box key={index}>
                                                            <Flex
                                                              width={"100%"}
                                                              padding="3"
                                                              _hover={{
                                                                bg: "#F0F0F0",
                                                              }}
                                                              onClick={() =>
                                                                handleSubMenuItemClick5(
                                                                  subi.id
                                                                )
                                                              }
                                                            >
                                                              <Link
                                                                href={subi.href}
                                                              >
                                                                {subi.label}
                                                              </Link>
                                                              {subi.subItems3 && (
                                                                <Box>
                                                                  <FaAngleDown
                                                                    size={16}
                                                                    color={
                                                                      pathname ===
                                                                        subItem.href ||
                                                                      subi.subItems3.some(
                                                                        (
                                                                          subii
                                                                        ) =>
                                                                          pathname ===
                                                                          subii.href
                                                                      )
                                                                        ? "#fff"
                                                                        : "#555555"
                                                                    }
                                                                    style={{
                                                                      position:
                                                                        "absolute",
                                                                      right: 60,
                                                                    }}
                                                                  />
                                                                </Box>
                                                              )}
                                                            </Flex>

                                                            {subi.subItems3 &&
                                                              selectedSubMenu3 ===
                                                                subi.id && (
                                                                <Box
                                                                  mt="2"
                                                                  width={"100%"}
                                                                  py="2"
                                                                  bg="white"
                                                                  borderColor="#DFE4FD"
                                                                  borderWidth="1px"
                                                                  rounded={
                                                                    "8px"
                                                                  }
                                                                >
                                                                  {subi.subItems3.map(
                                                                    (
                                                                      subii,
                                                                      index
                                                                    ) => (
                                                                      <Box
                                                                        key={
                                                                          index
                                                                        }
                                                                      >
                                                                        <Flex
                                                                          px={3}
                                                                          py="2"
                                                                          color={
                                                                            pathname ===
                                                                            subii.href
                                                                              ? "white"
                                                                              : "#555555"
                                                                          }
                                                                          bg={
                                                                            pathname ===
                                                                            subii.href
                                                                              ? "#01acf1"
                                                                              : "#fff"
                                                                          }
                                                                          _hover={{
                                                                            bg:
                                                                              pathname ===
                                                                              subii.href
                                                                                ? "#01ACF1"
                                                                                : "#F0F0F0",
                                                                          }}
                                                                          _active={{
                                                                            bg: "#01ACF1",
                                                                            color:
                                                                              "#fff",
                                                                          }}
                                                                        >
                                                                          <Link
                                                                            href={
                                                                              subii.href
                                                                            }
                                                                          >
                                                                            {
                                                                              subii.label
                                                                            }
                                                                          </Link>
                                                                        </Flex>
                                                                      </Box>
                                                                    )
                                                                  )}
                                                                </Box>
                                                              )}
                                                          </Box>
                                                        )
                                                      )}
                                                    </Box>
                                                  )}
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
                  <Box px="0.5" py="1">
                    My Profile
                  </Box>
                  <Box px="0.5" py="2">
                    Logout
                  </Box>
                </Flex>
              </Box>
            </Box>

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
                      <Flex alignItems="center" onClick={handleServicesClick}>
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
                          minWidth="180px"
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
                                <Flex
                                  justify="space-between"
                                  alignItems="center"
                                  width="100%"
                                >
                                  <Link href={subItem.href}>
                                    {subItem.label}
                                  </Link>
                                  {subItem.subItems1 && (
                                    <Box>
                                      <FaAngleDown
                                        size={16}
                                        color={
                                          pathname === subItem.href ||
                                          subItem.subItems1.some(
                                            (item) => pathname === item.href
                                          )
                                            ? "#fff"
                                            : "#555555"
                                        }
                                        style={{ marginTop: "4px" }}
                                      />
                                    </Box>
                                  )}
                                </Flex>

                                {selectedSubMenu === subItem.id &&
                                  subItem.subItems1 && (
                                    <Box
                                      bg={"#fff"}
                                      width={"160px"}
                                      display="flex"
                                      position={"absolute"}
                                      right={"100%"}
                                      top={"0"}
                                      py="2"
                                      flexDirection={"column"}
                                      rounded={"8px"}
                                      border={"1px solid #F0F0F0"}
                                      transition={"0.5s"}
                                    >
                                      {subItem.subItems1?.map((item, index) => (
                                        <Box key={index}>
                                          <Link href={item.href}>
                                            <Flex
                                              px={3}
                                              py="2"
                                              justifyContent="space-between"
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
                                              onMouseEnter={() =>
                                                handleSubMenuItemClick2(item.id)
                                              }
                                            >
                                              {item.label}
                                              {item.subItems2 && (
                                                <Box>
                                                  <FaAngleDown
                                                    size={16}
                                                    color={
                                                      pathname ===
                                                        subItem.href ||
                                                      item.subItems2.some(
                                                        (subi) =>
                                                          pathname === subi.href
                                                      )
                                                        ? "#fff"
                                                        : "#555555"
                                                    }
                                                    style={{ marginTop: "4px" }}
                                                  />
                                                </Box>
                                              )}
                                            </Flex>
                                          </Link>

                                          {item.subItems2 &&
                                            selectedSubMenu2 === item.id && (
                                              <Box
                                                bg={"#fff"}
                                                width={"160px"}
                                                display="flex"
                                                position={"absolute"}
                                                right={"100%"}
                                                top={"0"}
                                                py="2"
                                                flexDirection={"column"}
                                                rounded={"8px"}
                                                border={"1px solid #F0F0F0"}
                                                transition={"0.5s"}
                                              >
                                                {item.subItems2.map(
                                                  (subi, index) => (
                                                    <Box key={index}>
                                                      <Link href={subi.href}>
                                                        <Flex
                                                          px={3}
                                                          py="2"
                                                          justifyContent="space-between"
                                                          color={
                                                            pathname ===
                                                            subi.href
                                                              ? "white"
                                                              : "#555555"
                                                          }
                                                          bg={
                                                            pathname ===
                                                            subi.href
                                                              ? "#01acf1"
                                                              : "#fff"
                                                          }
                                                          _hover={{
                                                            bg:
                                                              pathname ===
                                                              subi.href
                                                                ? "#01ACF1"
                                                                : "#F0F0F0",
                                                          }}
                                                          _active={{
                                                            bg: "#01ACF1",
                                                            color: "#fff",
                                                          }}
                                                          onMouseEnter={() =>
                                                            handleSubMenuItemClick3(
                                                              subi.id
                                                            )
                                                          }
                                                        >
                                                          {subi.label}
                                                          {subi.subItems3 && (
                                                            <Box>
                                                              <FaAngleDown
                                                                size={16}
                                                                color={
                                                                  pathname ===
                                                                    subItem.href ||
                                                                  subi.subItems3.some(
                                                                    (subii) =>
                                                                      pathname ===
                                                                      subii.href
                                                                  )
                                                                    ? "#fff"
                                                                    : "#555555"
                                                                }
                                                                style={{
                                                                  marginTop:
                                                                    "4px",
                                                                }}
                                                              />
                                                            </Box>
                                                          )}
                                                        </Flex>
                                                      </Link>
                                                      {subi.subItems3 &&
                                                        selectedSubMenu3 ===
                                                          subi.id && (
                                                          <Box
                                                            bg={"#fff"}
                                                            width={"250px"}
                                                            display="flex"
                                                            position={
                                                              "absolute"
                                                            }
                                                            right={"100%"}
                                                            top={"0"}
                                                            py="2"
                                                            flexDirection={
                                                              "column"
                                                            }
                                                            rounded={"8px"}
                                                            border={
                                                              "1px solid #F0F0F0"
                                                            }
                                                            transition={"0.5s"}
                                                          >
                                                            {subi.subItems3.map(
                                                              (
                                                                subii,
                                                                index
                                                              ) => (
                                                                <Box
                                                                  key={index}
                                                                >
                                                                  <Link
                                                                    href={
                                                                      subii.href
                                                                    }
                                                                  >
                                                                    <Flex
                                                                      px={3}
                                                                      py="2"
                                                                      color={
                                                                        pathname ===
                                                                        subii.href
                                                                          ? "white"
                                                                          : "#555555"
                                                                      }
                                                                      bg={
                                                                        pathname ===
                                                                        subii.href
                                                                          ? "#01acf1"
                                                                          : "#fff"
                                                                      }
                                                                      _hover={{
                                                                        bg:
                                                                          pathname ===
                                                                          subii.href
                                                                            ? "#01ACF1"
                                                                            : "#F0F0F0",
                                                                      }}
                                                                      _active={{
                                                                        bg: "#01ACF1",
                                                                        color:
                                                                          "#fff",
                                                                      }}
                                                                    >
                                                                      {
                                                                        subii.label
                                                                      }
                                                                    </Flex>
                                                                  </Link>
                                                                </Box>
                                                              )
                                                            )}
                                                          </Box>
                                                        )}
                                                    </Box>
                                                  )
                                                )}
                                              </Box>
                                            )}
                                        </Box>
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
                <Box ml="4">
                  <Menu isOpen={isMenuOpen} onClose={handleMenuClose}>
                    <MenuButton
                      as={IconButton}
                      icon={<Avatar size="sm" />}
                      colorScheme="white"
                      aria-label="User Menu"
                      onMouseEnter={handleMenuOpen}
                      _hover={{ color: "white" }}
                      _focus={{ color: "white" }}
                    />
                    <MenuList
                      onMouseEnter={handleMenuOpen}
                      onMouseLeave={handleMenuClose}
                    >
                      <MenuItem>
                        <Link href="/auth/profile/profile.aspx">
                          <Flex alignItems="center">
                            <FaUser
                              size="14px"
                              color="#01acf1"
                              style={{ marginRight: "8px" }}
                            />
                            <Text>My Profile</Text>
                          </Flex>
                        </Link>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <Link href="#">
                          <Flex alignItems="center">
                            <FaSignOutAlt
                              size="14px"
                              color="#01acf1"
                              style={{ marginRight: "8px" }}
                            />
                            <Text>Logout</Text>
                          </Flex>
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default DashboardNavbar;
