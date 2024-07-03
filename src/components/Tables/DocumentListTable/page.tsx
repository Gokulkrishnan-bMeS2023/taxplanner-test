"use client";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from "react-icons/fa";

interface tableProps {
  tableData: any;
  handleFileDelete: (item: any) => void;
}

const DocumentListTable = ({ tableData, handleFileDelete }: tableProps) => {
  return (
    <TableContainer border={"1px solid #e3e6f0"} my={"1rem"}>
      <Table>
        {/* laptop view */}
        <Thead display={{ base: "none", md: "table-header-group" }}>
          <Tr>
            <Th
              borderRight={"1px solid #e3e6f0"}
              textTransform={"capitalize"}
              fontSize={"14px"}
            >
              Document Name
            </Th>
            <Th
              textTransform={"capitalize"}
              fontSize={"14px"}
              borderRight={"1px solid #e3e6f0"}
            >
              Attachement
            </Th>
            <Th textTransform={"capitalize"} fontSize={"14px"}>
              Remove
            </Th>
          </Tr>
        </Thead>
        {/* Mobile view  */}
        <Thead display={{ base: "table-header-group", md: "none" }}>
          <Tr>
            <Th
              borderRight={"1px solid #e3e6f0"}
              textTransform={"capitalize"}
              fontSize={"14px"}
              p={1}
            >
              Document Name
            </Th>
            <Th textTransform={"capitalize"} fontSize={"14px"} p={1}>
              Remove
            </Th>
          </Tr>
        </Thead>
        {/* laptop view */}
        <Tbody
          bg={"rgba(0, 0, 0, 0.05)"}
          display={{ base: "none", md: "table-row-group" }}
        >
          {tableData.map((item: any, index: any) => (
            <Tr key={index}>
              <Td border={"1px solid #e3e6f0"}>
                <Text>{item.documentName}</Text>
              </Td>
              <Td
                display={{ base: "none", md: "flex" }}
                border={"1px solid #e3e6f0"}
              >
                <Link href={"#"} style={{ color: "#02ABEF" }}>
                  {item?.fileName || item?.file?.name}
                </Link>
              </Td>
              <Td color="#e74a3b" border={"1px solid #e3e6f0"}>
                <FaTrashAlt
                  style={{ cursor: "pointer" }}
                  onClick={() => handleFileDelete(item)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* Mobile View  */}
        <Tbody
          bg={"rgba(0, 0, 0, 0.05)"}
          display={{ base: "table-row-group", md: "none" }}
        >
          <Tr>
            <Td p={1} borderRight={"1px solid #e3e6f0"}>
              <Flex align={"center"} gap={1}>
                {null === 0 ? (
                  <FaMinusCircle fontSize={16} color="#2D50D6" />
                ) : (
                  <FaPlusCircle fontSize={16} color="#2D50D6" />
                )}
                <Text>Doc1</Text>
              </Flex>
            </Td>
            <Td p={1} color="#e74a3b">
              <FaTrashAlt />
            </Td>
          </Tr>
          <Tr bg={"#fff"} w={"50px"}>
            {" "}
            <Td p={1}>
              Attachement :{" "}
              <Link style={{ color: "#02ABEF" }} href={"#"}>
                link
              </Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DocumentListTable;
