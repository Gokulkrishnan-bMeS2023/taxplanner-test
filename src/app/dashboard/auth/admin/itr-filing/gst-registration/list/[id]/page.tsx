"use client";
import { useState, useEffect, Fragment } from "react";
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
  Stack,
  FormLabel,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import Pagination from "@/components/pagination";
import SortIconGroup from "@/components/SortIconGroup";

interface User {
  id: any;
  IsActive: boolean;
  email: string;
  firstName: string;
  lastName: string;
  UserType: number;
  remark: string;
  TransactionDate: string;
  TradeName: string;
}

const GSTRegistrationList = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [roleFilter, setRoleFilter] = useState<string | number>("");
  const [statusFilter, setStatusFilter] = useState<string | boolean>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [iconShow, setIconShow] = useState<any>(["1"]);
  const [sortConfig, setSortConfig] = useState<{ key: any; direction: string }>(
    {
      key: "",
      direction: "",
    }
  );

  useEffect(() => {
    const fetchuserData = async () => {
      try {
        const usertype = 3;
        const url = `https://taxplanner-test-json.onrender.com/user?UserType=${usertype}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchuserData();
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

  const handleSort = (key: keyof User) => {
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      setSortConfig({ key, direction: "desc" });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  const sortData = (data: User[], key: keyof User, direction: string) => {
    return [...data].sort((a, b) => {
      if (direction === "asc") {
        return a[key].toString().localeCompare(b[key].toString());
      } else {
        return b[key].toString().localeCompare(a[key].toString());
      }
    });
  };

  let sorteduser = [...userData];
  if (sortConfig.key) {
    sorteduser = sortData(sorteduser, sortConfig.key, sortConfig.direction);
  }

  const filteredUser = sorteduser.filter(
    (user) =>
      (!roleFilter || user?.UserType?.toString() === roleFilter) &&
      (!statusFilter || user.IsActive.toString() === statusFilter) &&
      (user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredUser.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(filteredUser.length / entriesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePlus = (id: string) => {
    setIconShow([...iconShow, id]);
  };
  const handleMinus = (id: string) => {
    setIconShow([...iconShow.filter((show: any) => show !== id)]);
  };

  const Title = "MSME Registration";
  return (
    <Box
      pt={"120px"}
      px={{ base: "10px", md: "1.5rem" }}
      pb={"1.5rem"}
      minH={"100vh"}
    >
      <Flex
        justify={"space-between"}
        direction={{ base: "column", sm: "row" }}
        mb={6}
      >
        <Heading as="h2" mb={2} fontWeight={600} textAlign={"start"}>
          {Title}
        </Heading>
        <Button
          display={"flex"}
          gap={1}
          bg={"#2D50D6"}
          color={"#fff"}
          _hover={{ bg: "#01acf1" }}
          w={{ base: "100%", sm: "fit-content" }}
          fontSize={"14px"}
        >
          <FaPlusCircle />
          Export
        </Button>
      </Flex>
      <Box
        padding={{ base: "10px", md: "2rem" }}
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
          <Box display="flex" flexDir="row" width={"fit-content"}>
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
          {/* mobile view */}

          <Thead>
            <Tr
              borderWidth="1px"
              borderBottomWidth="2px"
              borderColor="#e3e6f0"
              display={{ base: "flex", md: "none" }}
              flexDirection={"column-reverse"}
            >
              <Th
                width="10px"
                color="black"
                borderRight="1px solid #e3e6f0"
                w={"100%"}
                pb="8"
                position={"relative"}
                onClick={() => handleSort("TradeName")}
              >
                Trade Name
                <SortIconGroup sortConfig={sortConfig} KeyType="TradeName" />
              </Th>
              <Th
                width="10px"
                color="black"
                borderRight="1px solid #e3e6f0"
                w={"100%"}
              >
                Payment
                <Select
                  style={{ width: "100%", height: "30px" }}
                  fontSize="14px"
                  color="black"
                  placeholder="Select Payment"
                  onChange={handleRoleFilterChange}
                  value={roleFilter.toString()}
                >
                  <option value="Fail">FAIL</option>
                  <option value="Success">SUCCESS</option>
                </Select>
              </Th>
              <Th
                width="100px"
                color="black"
                borderRight="1px solid #e3e6f0"
                w={"100%"}
              >
                Status
                <Select
                  style={{ width: "100%", height: "30px" }}
                  fontSize="14px"
                  placeholder="Select Status"
                  color="black"
                  onChange={handleStatusFilterChange}
                  value={statusFilter.toString()}
                >
                  <option value="Draft">Darft</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Decline">Decline</option>
                  <option value="Correction Required">
                    Correction Required
                  </option>
                </Select>
              </Th>
            </Tr>
          </Thead>

          {/* Laptop view */}

          <Thead display={{ base: "none", md: "table-header-group" }}>
            <Tr
              borderWidth="1px"
              borderBottomWidth="2px"
              borderColor="#e3e6f0"
              flexDirection={"column-reverse"}
            >
              <Th
                w={"170px"}
                color="black"
                borderRight="1px solid #e3e6f0"
                p={3}
                style={{ cursor: "pointer", position: "relative" }}
                onClick={() => handleSort("TradeName")}
              >
                Trade Name
                <SortIconGroup sortConfig={sortConfig} KeyType="TradeName" />
              </Th>
              <Th
                width="10px"
                color="black"
                borderRight="1px solid #e3e6f0"
                style={{ cursor: "pointer", position: "relative" }}
                onClick={() => handleSort("email")}
                p={3}
              >
                User Email
                <SortIconGroup sortConfig={sortConfig} KeyType="email" />
              </Th>
              <Th
                width="160px"
                color="black"
                borderRight="1px solid #e3e6f0"
                p={3}
              >
                Status
                <Select
                  style={{ width: "100%", height: "30px" }}
                  fontSize="14px"
                  color="black"
                  placeholder="Select Status"
                  onChange={handleRoleFilterChange}
                  value={roleFilter.toString()}
                  mt={1}
                >
                  <option value="Draft">Darft</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Decline">Decline</option>
                  <option value="Correction Required">
                    Correction Required
                  </option>
                </Select>
              </Th>
              <Th
                width="130px"
                color="black"
                borderRight="1px solid #e3e6f0"
                style={{ cursor: "pointer", position: "relative" }}
                onClick={() => handleSort("remark")}
                p={3}
                position={"relative"}
              >
                Remark
                <SortIconGroup sortConfig={sortConfig} KeyType="remark" />
              </Th>
              <Th
                width="140px"
                color="black"
                borderRight="1px solid #e3e6f0"
                p={3}
              >
                Payment
                <Select
                  style={{ width: "100%", height: "30px" }}
                  fontSize="14px"
                  placeholder="Select Payment"
                  color="black"
                  onChange={handleStatusFilterChange}
                  value={statusFilter.toString()}
                  mt={1}
                >
                  <option value="Fail">FAIL</option>
                  <option value="Success">SUCCESS</option>
                </Select>
              </Th>
              <Th
                width="10px"
                color="black"
                borderRight="1px solid #e3e6f0"
                onClick={() => handleSort("TransactionDate")}
                style={{ cursor: "pointer", position: "relative" }}
                p={3}
              >
                Transaction Date
                <SortIconGroup
                  sortConfig={sortConfig}
                  KeyType="TransactionDate"
                />
              </Th>
              <Th
                width="100px"
                color="black"
                borderRight="1px solid #e3e6f0"
                p={3}
              >
                Remove
              </Th>
            </Tr>
          </Thead>
          {filteredUser.length === 0 ? (
            <Tbody>
              <Tr>
                <Td position={"relative"}>
                  <Text
                    position={"absolute"}
                    left={{ base: "20%", md: "160%" }}
                    whiteSpace={"nowrap"}
                    top={2}
                  >
                    No matching records found
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          ) : (
            <>
              {/* Mobile view */}
              <Tbody
                display={{ base: "gird", sm: "grid", md: "none", lg: "none" }}
                width={"100%"}
              >
                {currentEntries.map((user, index) => (
                  <Fragment key={index}>
                    <Tr>
                      <Td
                        display={"flex"}
                        color="#01acf1"
                        border={"1px solid #e3e6f0"}
                        alignItems={"center"}
                        gap={2}
                      >
                        {iconShow.includes(user.id) ? (
                          <FaMinusCircle
                            onClick={() => handleMinus(user.id)}
                            fontSize={16}
                            color="#2D50D6"
                          />
                        ) : (
                          <FaPlusCircle
                            onClick={() => handlePlus(user.id)}
                            fontSize={16}
                            color="#2D50D6"
                          />
                        )}
                        <Text
                          _hover={{
                            color: "#2D50D6",
                            textDecor: "underline",
                          }}
                          display={"flex"}
                        >
                          <Link
                            href={`/dashboard/auth/admin/itr-filing/dsc/edit/${user.id}`}
                            className="emailwrap"
                          >
                            Trade names
                          </Link>
                        </Text>
                      </Td>
                    </Tr>
                    {iconShow.includes(user.id) && (
                      <>
                        <Tr>
                          <Td
                            display={"flex"}
                            border={"1px solid #e3e6f0"}
                            gap={2}
                            flexDirection={"column"}
                          >
                            <Text as={"b"}>User Email : </Text>
                            <Text
                              color="#01acf1"
                              _hover={{
                                color: "#2D50D6",
                                textDecor: "underline",
                              }}
                              display={"flex"}
                            >
                              <Link href={`/dashboard/user/edit/${user.id}`}>
                                {user.email}
                              </Link>
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td
                            border={"1px solid #e3e6f0"}
                            display={"flex"}
                            gap={2}
                          >
                            <Text as={"b"}>Status :</Text> Draft
                          </Td>
                        </Tr>
                        <Tr>
                          <Td
                            border={"1px solid #e3e6f0"}
                            display={"flex"}
                            gap={2}
                          >
                            <Text as={"b"}>Remark :</Text> Remark data
                          </Td>
                        </Tr>
                        <Tr>
                          <Td
                            display={"flex"}
                            border={"1px solid #e3e6f0"}
                            gap={2}
                          >
                            <Text as={"b"}> Payment : </Text>
                            <Text
                              fontWeight={"bold"}
                              color={user.IsActive === true ? "green" : "red"}
                            >
                              {user.IsActive === true ? "SUCCESS" : "FAIL"}
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td
                            border={"1px solid #e3e6f0"}
                            display={"flex"}
                            gap={2}
                          >
                            <Text as={"b"}>Transaction Date :</Text> Transaction
                            data
                          </Td>
                          <Td
                            border={"1px solid #e3e6f0"}
                            display={"flex"}
                            gap={2}
                            alignItems={"center"}
                          >
                            <Text as={"b"}>Remove :</Text>{" "}
                            <FaTrashAlt style={{ color: "#e74a3b" }} />
                          </Td>
                        </Tr>
                      </>
                    )}
                  </Fragment>
                ))}
              </Tbody>

              {/* Laptop view */}

              <Tbody display={{ base: "none", md: "table-row-group" }}>
                {currentEntries.map((user, index) => (
                  <Tr key={index + 1}>
                    <Td border={"1px solid #e3e6f0"} p={3} color="#01acf1">
                      <Text
                        width={"fit-content"}
                        _hover={{ color: "#2D50D6", textDecor: "underline" }}
                      >
                        <Link
                          href={`/dashboard/auth/admin/itr-filing/dsc/edit/${user.id}`}
                        >
                          trade names
                        </Link>
                      </Text>
                    </Td>
                    <Td p={3} color="#01acf1" border={"1px solid #e3e6f0"}>
                      <Text
                        width={"fit-content"}
                        _hover={{ color: "#2D50D6", textDecor: "underline" }}
                      >
                        <Link href={`/dashboard/user/edit/${user.id}`}>
                          {user.email}
                        </Link>
                      </Text>
                    </Td>
                    <Td p={3} border={"1px solid #e3e6f0"}>
                      {user.UserType === 1 ? "Admin" : "User"}
                    </Td>
                    <Td p={3}>remark data</Td>
                    <Td
                      p={3}
                      fontWeight={"bold"}
                      border={"1px solid #e3e6f0"}
                      color={user.IsActive === true ? "green" : "red"}
                    >
                      {user.IsActive === true ? "SUCCESS" : "FAIL"}
                    </Td>
                    <Td p={3}> Transaction Date Data</Td>
                    <Td border={"1px solid #e3e6f0"}>
                      <FaTrashAlt style={{ color: "#e74a3b " }} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </>
          )}
        </Table>
        <Stack
          direction={{ base: "column", md: "row" }}
          mt={4}
          spacing={-3}
          justifyContent="space-between"
          gap={4}
        >
          <Box display={"flex"} gap={1}>
            <Text> Showing </Text>
            <Text>{filteredUser.length > 0 ? indexOfFirstEntry + 1 : 0}</Text>
            <Text>to</Text>
            <Text>{Math.min(indexOfLastEntry, filteredUser.length)}</Text>
            <Text>of</Text>
            <Text>{filteredUser.length}</Text>
            <Text>entries</Text>
          </Box>
          {filteredUser.length > 10 && (
            <Pagination
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              filteredUser={filteredUser}
            />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default GSTRegistrationList;
