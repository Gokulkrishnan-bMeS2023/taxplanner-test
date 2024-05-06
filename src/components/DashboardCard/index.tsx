import {
  Box,
  Button,
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Images from "../Images";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";

interface CardProps {
  ImageSrc: string;
  ButtonLabel: string;
  href: string;
}

const DashboardCard = ({ ImageSrc, ButtonLabel, href }: CardProps) => {
  return (
    <Card
      p={2}
      minH={"220px"}
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      border={"1px solid #e3e6f0"}
    >
      <Box>
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
          gap={6}
        >
          <Images src={ImageSrc} alt="" width={96} height={96} />
          <Button
            as={Link}
            color={"#DFE4FD"}
            backgroundColor={"#2D50D6"}
            borderColor={"#2D50D6"}
            _hover={{
              bg: "#00abed",
              transform: "translateY(-2px)",
              boxShadow: "md",
            }}
            w={"200px"}
            href={href}
          >
            {ButtonLabel}
          </Button>
        </Box>
        <Box>
          <Box
            display={"flex"}
            ml={4}
            mt={6}
            gap={1}
            alignItems={"center"}
            fontSize={"small"}
            fontWeight={700}
          >
            <FaCalendarDays />
            <Text>Not Filed Yet</Text>
          </Box>
          <TableContainer>
            <Table size={"sm"} display={"inline-block"} color={"black"}>
              <Thead>
                <Tr>
                  <Th border={"none"} color={"black"}>
                    Status
                  </Th>
                  <Th border={"none"} color={"black"}>
                    Date
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border={"none"}>Done</Td>
                  <Td border={"none"} display={"flex"} gap={1}>
                    <FaRegCalendarAlt />
                    <Text>09/20/02</Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Card>
  );
};

export default DashboardCard;
