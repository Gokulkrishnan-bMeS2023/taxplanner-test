import {
  Box,
  Button,
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Images from "../Images";

interface RecordsProps {
  Draft: number;
  InProgress: number;
  Done: number;
  Declined: number;
  CorrectionRequired: number;
}

interface CardProps {
  ImageSrc: string;
  LinkName: string;
  Linkhref: string;
  Records?: RecordsProps;
}

const DashboardAdminCard = ({ ImageSrc, LinkName, Linkhref }: CardProps) => {
  return (
    <Card
      p={2}
      minH={"220px"}
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      border={"1px solid #e3e6f0"}
    >
      <Box
        display={"flex"}
        height={"100%"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          display={"flex"}
          flexDir="column"
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
          flexGrow={1}
        >
          <Link
            href={Linkhref}
            fontSize={"15px"}
            fontWeight={"bold"}
            color={"#00abed"}
            textAlign={"center"}
            _hover={{
              color: "#2d50d6",
              textDecoration: "underline",
              textDecorationColor: "2d50d6",
            }}
          >
            <Images src={ImageSrc} alt="" width={96} height={96} />
            {LinkName}
          </Link>
        </Box>
        <Box
          flexGrow={1}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <TableContainer w={"100%"} py={3}>
            <Table
              size={"sm"}
              fontSize={"15px"}
              fontWeight={"bold"}
              color={"#555"}
              w={"100%"}
            >
              <Tbody>
                <Tr>
                  <Td border={"none"}>Draft</Td>
                  <Td border={"none"} display={"flex"} gap={1}>
                    0
                  </Td>
                </Tr>
                <Tr>
                  <Td border={"none"}>InProgress</Td>
                  <Td border={"none"} display={"flex"} gap={1}>
                    0
                  </Td>
                </Tr>
                <Tr>
                  <Td border={"none"}>Done</Td>
                  <Td border={"none"} display={"flex"} gap={1}>
                    0
                  </Td>
                </Tr>
                <Tr>
                  <Td border={"none"}>Declined</Td>
                  <Td border={"none"} display={"flex"} gap={1}>
                    0
                  </Td>
                </Tr>
                <Tr>
                  <Td border={"none"}>Correction Required</Td>
                  <Td border={"none"} display={"flex"} gap={1}>
                    0
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

export default DashboardAdminCard;
