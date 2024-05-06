"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Input,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

interface Staff {
  IsActive: boolean;
  email: string;
  firstName: string;
  lastName: string;
  LoginType: number;
  id: number | string;
}
interface StaffProps {
  staffData: Staff[];
}
const UserList = ({ staffData }: StaffProps) => {
  const [roleFilter, setRoleFilter] = useState<string | number>("");
  const [statusFilter, setStatusFilter] = useState<string | boolean>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handleRoleFilterChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRoleFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilterChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStatusFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const handleEntriesPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing entries per page
  };
  const filteredStaff = staffData.filter(
    (staff) =>
      (!roleFilter || staff?.LoginType?.toString() === roleFilter) &&
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
    <Box p={4}>
      <Container maxW="container.xl" py={8}>
        <Heading as="h1" mb={4} fontSize="xl" color="white">
          Staff List
        </Heading>
        <Box bg={"#fff"} p={4} border={"1px solid grey"}>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
            <Input
              placeholder="Search"
              onChange={handleSearchTermChange}
              value={searchTerm}
            />
            <Select
              placeholder="Show"
              onChange={handleEntriesPerPageChange}
              value={entriesPerPage}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
          </Stack>
          <Table borderWidth="2px" borderColor="#E3E6F0">
            <Thead>
              <Tr borderWidth="2px" borderColor="#E3E6F0">
                <Th width="150px" borderRight="1px solid #E3E6F0">
                  Email
                </Th>
                <Th width="10px" borderRight="1px solid #E3E6F0">
                  Full Name
                </Th>
                <Th width="100px" borderRight="1px solid #E3E6F0">
                  Login
                  <Select
                    placeholder="Select Role"
                    onChange={handleRoleFilterChange}
                    value={roleFilter.toString()}
                  >
                    <option value={1}>Email</option>
                    <option value={2}>Google</option>
                  </Select>
                </Th>
                <Th width="100px" borderRight="1px solid #E3E6F0">
                  Status
                  <Select
                    placeholder="Select Status"
                    onChange={handleStatusFilterChange}
                    value={statusFilter.toString()}
                  >
                    <option value="true">Active</option>
                    <option value="false">InActive</option>
                  </Select>
                </Th>
              </Tr>
            </Thead>
            {staffData.length === 0 ? (
              <Tbody dir="flex">
                <Tr>
                  <Td></Td>
                  <Td textAlign={"center"}>No matching records found</Td>
                </Tr>
              </Tbody>
            ) : (
              <Tbody>
                {currentEntries.map((staff, index) => (
                  <Tr key={index}>
                    <Td  >
                      <Link href={`/dashboard/user/edit/${staff.id}`} color="blue">{staff.email}</Link>
                    </Td>
                    <Td>{staff.firstName.concat(" ", staff.lastName)}</Td>
                    <Td>{staff.LoginType === 1 ? "Email" : "Google"}</Td>
                    <Td>{staff.IsActive === true ? "Active" : "In Active"}</Td>
                  </Tr>
                ))}
              </Tbody>
            )}
          </Table>
          <Box>
            Showing {indexOfFirstEntry + 1} to
            {Math.min(indexOfLastEntry, filteredStaff.length)} of
            {filteredStaff.length}
            entries
          </Box>
          <Stack direction="row" spacing={4} mt={4} justify="flex-end">
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              color={currentPage === 1 ? "" : "blue"}
            >
              Previous
            </Button>
            <Text>
              {currentPage} / {totalPages}
            </Text>
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              color={currentPage === totalPages ? "" : "blue"}
            >
              Next
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
export default UserList;
