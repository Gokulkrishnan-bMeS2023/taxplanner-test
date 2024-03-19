"use client";

import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function BackToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsButtonVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      icon={<BsArrowUp />}
      onClick={handleBackToTopButton}
      size="lg"
      position="fixed"
      bottom="6"
      right="6"
      rounded={"50%"}
      bg={"#2d50d6"}
      color={"#fff"}
      opacity={isButtonVisible ? 1 : 0}
      transition="opacity 0.3s"
      _hover={{ bgColor: "#2d50d6" }}
      aria-label={"back-to-top-button"}
      _focus={{ boxShadow: "0 0 0 .25rem rgba(53, 94, 252, 0.25)" }}
    />
  );
}
