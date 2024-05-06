"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Input,
  Button,
  Stack,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

interface Staff {
  id: any;
  IsActive: boolean;
  email: string;
  firstName: string;
  UserType: number;
}

const StaffList = () => {
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [roleFilter, setRoleFilter] = useState<string | number>("");
  const [statusFilter, setStatusFilter] = useState<string | boolean>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const usertype = 2;
        const url = `https://taxplanner-test-json.onrender.com/user?UserType=${usertype}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data
        setStaffData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStaffData();
  }, []);

  const handleRoleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRoleFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStatusFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleEntriesPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const filteredStaff = staffData.filter(
    (staff) =>
      (!roleFilter || staff?.UserType?.toString() === roleFilter) &&
      (!statusFilter || staff.IsActive.toString() === statusFilter) &&
      (staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.firstName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredStaff.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(filteredStaff.length / entriesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Box pt={24} px={"1.5rem"} pb={"1.5rem"} minH={"100vh"}>
      <Heading as="h2" mb={4} fontWeight={600}>
        Staff List
      </Heading>
      <Box
        padding="2rem"
        boxShadow="0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)"
        borderRadius="0.35rem"
        border="1px solid #e3e6f0"
        bg="white"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          mb={4}
          color="black"
          justifyContent={"space-between"}
        >
          <Box display="flex" flexDir="row">
            <FormLabel mt="2" fontSize="14px">
              Show
            </FormLabel>
            <Select
              fontSize="14px"
              style={{ width: "80px", height: "35px" }}
              onChange={handleEntriesPerPageChange}
              value={entriesPerPage}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
            <FormLabel fontSize="14px" mt="2" pl="3">
              entries
            </FormLabel>
          </Box>
          <Box display="flex" flexDir="row">
            <FormLabel fontSize="14px" mt="1">
              Search:
            </FormLabel>
            <Input
              size="sm"
              width="auto"
              onChange={handleSearchTermChange}
              value={searchTerm}
            />
          </Box>
        </Stack>
        <Table
          borderWidth="1px"
          borderTopWidth="2px"
          borderColor="#e3e6f0"
          fontSize="14px"
          color="black"
        >
          <Thead>
            <Tr borderWidth="1px" borderBottomWidth="2px" borderColor="#e3e6f0">
              <Th width="10px" color="black" borderRight="1px solid #e3e6f0">
                Email
              </Th>
              <Th width="10px" color="black" borderRight="1px solid #e3e6f0">
                Full Name
              </Th>
              <Th width="10px" color="black" borderRight="1px solid #e3e6f0">
                Role
                <Select
                  style={{ width: "100%", height: "30px" }}
                  fontSize="14px"
                  color="black"
                  placeholder="Select Role"
                  onChange={handleRoleFilterChange}
                  value={roleFilter.toString()}
                >
                  <option value={1}>Admin</option>
                  <option value={2}>Staff</option>
                </Select>
              </Th>
              <Th width="100px" color="black" borderRight="1px solid #e3e6f0">
                Status
                <Select
                  style={{ width: "100%", height: "30px" }}
                  fontSize="14px"
                  placeholder="Select Status"
                  color="black"
                  onChange={handleStatusFilterChange}
                  value={statusFilter.toString()}
                >
                  <option value="true">Active</option>
                  <option value="false">InActive</option>
                </Select>
              </Th>
            </Tr>
          </Thead>
          {filteredStaff.length === 0 ? (
            <Tbody>
              <Tr>
                <Td position={"relative"}>
                  <Text
                    position={"absolute"}
                    left={"170%"}
                    whiteSpace={"nowrap"}
                    top={2}
                  >
                    No matching records found
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          ) : (
            <Tbody>
              {currentEntries.map((staff, index) => (
                <Tr key={index}>
                  <Td color="#01acf1" border={"1px solid #e3e6f0"}>
                    <Text width={"fit-content"} _hover={{ color: "#2D50D6", textDecor: "underline" }}>
                      <Link href={`/dashboard/user/edit/${staff.id}`}>
                        {staff.email}
                      </Link>
                    </Text>
                  </Td>
                  <Td border={"1px solid #e3e6f0"}>{staff.firstName}</Td>
                  <Td border={"1px solid #e3e6f0"}>
                    {staff.UserType === 1 ? "Admin" : "Staff"}
                  </Td>
                  <Td border={"1px solid #e3e6f0"}>
                    {staff.IsActive === true ? "Active" : "In Active"}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
        <Stack
          direction="row"
          mt={4}
          spacing={-3}
          justifyContent="space-between"
        >
          <Box>
            Showing {indexOfFirstEntry + 1} to 
            {Math.min(indexOfLastEntry, filteredStaff.length)} of
            {filteredStaff.length}
            entries
          </Box>
          <Box>
            <Button
              bg="white"
              color={currentPage === 1 ? "#000" : "#2D50D6"} // Black when disabled, blue when enabled
              borderRadius="0px"
              border="1px solid #e3e6f0"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {totalPages <= 5 ? (
              // If total pages are less than or equal to 5, show all page numbers
              Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <Button
                    key={pageNumber}
                    bg={currentPage === pageNumber ? "blue" : "white"}
                    color={currentPage === pageNumber ? "white" : "#2D50D6"}
                    borderRadius="0px"
                    border="1px solid #e3e6f0"
                    onClick={() => setCurrentPage(pageNumber)}
                    disabled={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </Button>
                );
              })
            ) : (
              // If total pages are more than 5, dynamically adjust displayed page numbers
              <>
                {currentPage <= 4 ? (
                  // If current page is less than or equal to 3, show first 5 page numbers and ellipsis
                  <>
                    {Array.from({ length: 5 }, (_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <Button
                          key={pageNumber}
                          bg={currentPage === pageNumber ? "blue" : "white"}
                          color={
                            currentPage === pageNumber ? "white" : "#2D50D6"
                          }
                          borderRadius="0px"
                          border="1px solid #e3e6f0"
                          onClick={() => setCurrentPage(pageNumber)}
                          disabled={currentPage === pageNumber}
                        >
                          {pageNumber}
                        </Button>
                      );
                    })}
                    <Button
                      _hover={{ bg: "white" }}
                      borderRadius="0px"
                      bg="white"
                      border="1px solid #e3e6f0"
                    >
                      ...
                    </Button>
                    <Button
                      bg={currentPage === totalPages ? "blue" : "white"}
                      color={currentPage === totalPages ? "white" : "#2D50D6"}
                      borderRadius="0px"
                      border="1px solid #e3e6f0"
                      onClick={() => setCurrentPage(totalPages)}
                      disabled={currentPage === totalPages}
                    >
                      {totalPages}
                    </Button>
                  </>
                ) : (
                  // If current page is more than 3, adjust displayed page numbers accordingly
                  <>
                    <Button
                      bg={currentPage === 1 ? "blue" : "white"}
                      color={currentPage === 1 ? "white" : "#2D50D6"}
                      borderRadius="0px"
                      border="1px solid #e3e6f0"
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                    >
                      1
                    </Button>
                    <Button
                      _hover={{ bg: "white" }}
                      borderRadius="0px"
                      bg="white"
                      border="1px solid #e3e6f0"
                    >
                      ...
                    </Button>
                    {currentPage >= totalPages - 3 ? (
                      // If current page is within last 3 pages, show last 5 page numbers
                      Array.from({ length: 5 }, (_, index) => {
                        const pageNumber = totalPages - 4 + index;
                        return (
                          <Button
                            key={pageNumber}
                            bg={currentPage === pageNumber ? "blue" : "white"}
                            color={
                              currentPage === pageNumber ? "white" : "#2D50D6"
                            }
                            borderRadius="0px"
                            border="1px solid #e3e6f0"
                            onClick={() => setCurrentPage(pageNumber)}
                            disabled={currentPage === pageNumber}
                          >
                            {pageNumber}
                          </Button>
                        );
                      })
                    ) : (
                      // If current page is more than 3 pages away from the last page, show current page and next 4 page numbers
                      <>
                        <Button
                          bg={currentPage === 1 ? "blue" : "white"}
                          color={currentPage === 1 ? "white" : "#2D50D6"}
                          borderRadius="0px"
                          border="1px solid #e3e6f0"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          {currentPage - 1}
                        </Button>
                        <Button
                          bg={currentPage === totalPages ? "blue" : "white"}
                          color={
                            currentPage === totalPages ? "white" : "#2D50D6"
                          }
                          borderRadius="0px"
                          border="1px solid #e3e6f0"
                          onClick={() => setCurrentPage(currentPage)}
                          disabled={currentPage === totalPages}
                        >
                          {currentPage}
                        </Button>
                        <Button
                          bg={currentPage === totalPages ? "blue" : "white"}
                          color={
                            currentPage === totalPages ? "white" : "#2D50D6"
                          }
                          borderRadius="0px"
                          border="1px solid #e3e6f0"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          {currentPage + 1}
                        </Button>
                        <Button
                          _hover={{ bg: "white" }}
                          borderRadius="0px"
                          bg="white"
                          border="1px solid #e3e6f0"
                        >
                          ...
                        </Button>
                        <Button
                          bg={currentPage === totalPages ? "blue" : "white"}
                          color={
                            currentPage === totalPages ? "white" : "#2D50D6"
                          }
                          borderRadius="0px"
                          border="1px solid #e3e6f0"
                          onClick={() => setCurrentPage(totalPages)}
                          disabled={currentPage === totalPages}
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </>
                )}
              </>
            )}

            <Button
              bg="white"
              color={currentPage === totalPages ? "#000" : "#2D50D6"} // Black when disabled, blue when enabled
              borderRadius="0px"
              border="1px solid #e3e6f0"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default StaffList;
