// "use client";
// import { useState, useEffect, Fragment } from "react";
// import {
//   Box,
//   Heading,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Select,
//   Input,
//   Stack,
//   FormLabel,
//   Text,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
// import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
// import Pagination from "@/components/pagination";

// interface Staff {
//   id: any;
//   IsActive: boolean;
//   email: string;
//   firstName: string;
//   lastName: string;
//   UserType: number;
// }

// const StaffList = () => {
//   const [staffData, setStaffData] = useState<Staff[]>([]);
//   const [roleFilter, setRoleFilter] = useState<string | number>("");
//   const [statusFilter, setStatusFilter] = useState<string | boolean>("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [entriesPerPage, setEntriesPerPage] = useState(10);
//   const [iconShow, setIconShow] = useState<any>(["1"]);
//   const [sortConfig, setSortConfig] = useState<{ key: any; direction: string }>(
//     {
//       key: "",
//       direction: "",
//     }
//   );

//   console.log(sortConfig);

//   useEffect(() => {
//     const fetchStaffData = async () => {
//       try {
//         const usertype = 3;
//         const url = `https://taxplanner-test-json.onrender.com/user?UserType=${usertype}`;
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setStaffData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchStaffData();
//   }, []);

//   const handleRoleFilterChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setRoleFilter(event.target.value);
//     setCurrentPage(1);
//   };

//   const handleStatusFilterChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setStatusFilter(event.target.value);
//     setCurrentPage(1);
//   };

//   const handleSearchTermChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleEntriesPerPageChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setEntriesPerPage(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   const handleSort = (key: keyof Staff) => {
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       setSortConfig({ key, direction: "desc" });
//     } else {
//       setSortConfig({ key, direction: "asc" });
//     }
//   };

//   const sortData = (data: Staff[], key: keyof Staff, direction: string) => {
//     return [...data].sort((a, b) => {
//       if (direction === "asc") {
//         return a[key].toString().localeCompare(b[key].toString());
//       } else {
//         return b[key].toString().localeCompare(a[key].toString());
//       }
//     });
//   };

//   let sortedStaff = [...staffData];
//   if (sortConfig.key) {
//     sortedStaff = sortData(sortedStaff, sortConfig.key, sortConfig.direction);
//   }

//   const filteredStaff = sortedStaff.filter(
//     (staff) =>
//       (!roleFilter || staff?.UserType?.toString() === roleFilter) &&
//       (!statusFilter || staff.IsActive.toString() === statusFilter) &&
//       (staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         staff.firstName.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = filteredStaff.slice(
//     indexOfFirstEntry,
//     indexOfLastEntry
//   );

//   const totalPages = Math.ceil(filteredStaff.length / entriesPerPage);

//   const nextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   const prevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handlePlus = (id: string) => {
//     setIconShow([...iconShow, id]);
//   };
//   const handleMinus = (id: string) => {
//     setIconShow([...iconShow.filter((show: any) => show !== id)]);
//   };

//   return (
//     <Box
//       pt={24}
//       px={{ base: "10px", md: "1.5rem" }}
//       pb={"1.5rem"}
//       minH={"100vh"}
//     >
//       <Heading as="h2" mb={4} fontWeight={600}>
//         Staff List
//       </Heading>
//       <Box
//         padding={{ base: "10px", md: "2rem" }}
//         boxShadow="0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)"
//         borderRadius="0.35rem"
//         border="1px solid #e3e6f0"
//         bg="white"
//       >
//         <Stack
//           direction={{ base: "column", md: "row" }}
//           spacing={4}
//           mb={4}
//           color="black"
//           justifyContent={"space-between"}
//         >
//           <Box display="flex" flexDir="row" width={"fit-content"}>
//             <FormLabel mt="2" fontSize="14px">
//               Show
//             </FormLabel>
//             <Select
//               fontSize="14px"
//               style={{ width: "80px", height: "35px" }}
//               onChange={handleEntriesPerPageChange}
//               value={entriesPerPage}
//             >
//               <option value={10}>10</option>
//               <option value={25}>25</option>
//               <option value={50}>50</option>
//               <option value={100}>100</option>
//             </Select>
//             <FormLabel fontSize="14px" mt="2" pl="3">
//               entries
//             </FormLabel>
//           </Box>
//           <Box display="flex" flexDir="row">
//             <FormLabel fontSize="14px" mt="1">
//               Search:
//             </FormLabel>
//             <Input
//               size="sm"
//               width="auto"
//               onChange={handleSearchTermChange}
//               value={searchTerm}
//             />
//           </Box>
//         </Stack>
//         <Table
//           borderWidth="1px"
//           borderTopWidth="2px"
//           borderColor="#e3e6f0"
//           fontSize="14px"
//           color="black"
//         >
//           <Thead>
//             <Tr
//               borderWidth="1px"
//               borderBottomWidth="2px"
//               borderColor="#e3e6f0"
//               display={{ base: "flex", md: "none" }}
//               flexDirection={"column-reverse"}
//             >
//               <Th
//                 width="10px"
//                 color="black"
//                 borderRight="1px solid #e3e6f0"
//                 w={"100%"}
//                 pb="8"
//                 onClick={() => handleSort("email")}
//               >
//                 Email
//                 <>
//                   <IoIosArrowRoundUp
//                     style={{
//                       fontSize: "1.5em",
//                       position: "absolute",
//                       right: "11.5%",
//                       justifyItems: "flex-end",
//                       opacity:
//                         sortConfig.direction === "asc" &&
//                         sortConfig.key === "email"
//                           ? 1
//                           : 0.3,
//                     }}
//                   />
//                   <IoIosArrowRoundDown
//                     style={{
//                       fontSize: "1.5em",
//                       position: "absolute",
//                       right: "10%",
//                       opacity:
//                         sortConfig.direction === "desc" &&
//                         sortConfig.key === "email"
//                           ? 1
//                           : 0.3,
//                     }}
//                   />
//                 </>
//               </Th>
//               <Th
//                 width="10px"
//                 color="black"
//                 borderRight="1px solid #e3e6f0"
//                 w={"100%"}
//               >
//                 Role
//                 <Select
//                   style={{ width: "100%", height: "30px" }}
//                   fontSize="14px"
//                   color="black"
//                   placeholder="Select Role"
//                   onChange={handleRoleFilterChange}
//                   value={roleFilter.toString()}
//                 >
//                   <option value={1}>Admin</option>
//                   <option value={2}>Staff</option>
//                 </Select>
//               </Th>
//               <Th
//                 width="100px"
//                 color="black"
//                 borderRight="1px solid #e3e6f0"
//                 w={"100%"}
//               >
//                 Status
//                 <Select
//                   style={{ width: "100%", height: "30px" }}
//                   fontSize="14px"
//                   placeholder="Select Status"
//                   color="black"
//                   onChange={handleStatusFilterChange}
//                   value={statusFilter.toString()}
//                 >
//                   <option value="true">Active</option>
//                   <option value="false">InActive</option>
//                 </Select>
//               </Th>
//             </Tr>
//           </Thead>
//           <Thead display={{ base: "none", md: "table-header-group" }}>
//             <Tr
//               borderWidth="1px"
//               borderBottomWidth="2px"
//               borderColor="#e3e6f0"
//               flexDirection={"column-reverse"}
//             >
//               <Th
//                 width="10px"
//                 color="black"
//                 borderRight="1px solid #e3e6f0"
//                 style={{ cursor: "pointer", position: "relative" }}
//                 onClick={() => handleSort("email")}
//               >
//                 Email
//                 <>
//                   <IoIosArrowRoundUp
//                     style={{
//                       fontSize: "1.5em",
//                       position: "absolute",
//                       right: "1.5%",
//                       opacity:
//                         sortConfig.direction === "asc" &&
//                         sortConfig.key === "email"
//                           ? 1
//                           : 0.3,
//                     }}
//                   />
//                   <IoIosArrowRoundDown
//                     style={{
//                       fontSize: "1.5em",
//                       position: "absolute",
//                       right: "0%",
//                       opacity:
//                         sortConfig.direction === "desc" &&
//                         sortConfig.key === "email"
//                           ? 1
//                           : 0.3,
//                     }}
//                   />
//                 </>
                
//               </Th>
//               <Th
//                 width="10px"
//                 color="black"
//                 borderRight="1px solid #e3e6f0"
//                 onClick={() => handleSort("firstName")}
//                 style={{ cursor: "pointer", position: "relative" }}
//               >
//                 Full Name
//                 <>
//                   <IoIosArrowRoundUp
//                     style={{
//                       fontSize: "1.5em",
//                       position: "absolute",
//                       right: "3.2%",
//                       opacity:
//                         sortConfig.direction === "asc" &&
//                         sortConfig.key === "firstName"
//                           ? 1
//                           : 0.3,
//                     }}
//                   />
//                   <IoIosArrowRoundDown
//                     style={{
//                       fontSize: "1.5em",
//                       position: "absolute",
//                       right: "0%",
//                       opacity:
//                         sortConfig.direction === "desc" &&
//                         sortConfig.key === "firstName"
//                           ? 1
//                           : 0.3,
//                     }}
//                   />
//                 </>
//               </Th>
//               <Th width="10px" color="black" borderRight="1px solid #e3e6f0">
//                 Role
//                 <Select
//                   style={{ width: "100%", height: "30px" }}
//                   fontSize="14px"
//                   color="black"
//                   placeholder="Select Role"
//                   onChange={handleRoleFilterChange}
//                   value={roleFilter.toString()}
//                 >
//                   <option value={1}>Admin</option>
//                   <option value={2}>Staff</option>
//                 </Select>
//               </Th>
//               <Th width="100px" color="black" borderRight="1px solid #e3e6f0">
//                 Status
//                 <Select
//                   style={{ width: "100%", height: "30px" }}
//                   fontSize="14px"
//                   placeholder="Select Status"
//                   color="black"
//                   onChange={handleStatusFilterChange}
//                   value={statusFilter.toString()}
//                 >
//                   <option value="true">Active</option>
//                   <option value="false">InActive</option>
//                 </Select>
//               </Th>
//             </Tr>
//           </Thead>
//           {filteredStaff.length === 0 ? (
//             <Tbody>
//               <Tr>
//                 <Td position={"relative"}>
//                   <Text
//                     position={"absolute"}
//                     left={{ base: "20%", md: "160%" }}
//                     whiteSpace={"nowrap"}
//                     top={2}
//                   >
//                     No matching records found
//                   </Text>
//                 </Td>
//               </Tr>
//             </Tbody>
//           ) : (
//             <>
//               <Tbody
//                 display={{ base: "gird", sm: "grid", md: "none", lg: "none" }}
//                 width={"100%"}
//               >
//                 {currentEntries.map((staff, index) => (
//                   <Fragment key={index}>
//                     <Tr>
//                       <Td
//                         display={"flex"}
//                         color="#01acf1"
//                         border={"1px solid #e3e6f0"}
//                         alignItems={"center"}
//                         gap={2}
//                       >
//                         {iconShow.includes(staff.id) ? (
//                           <FaMinusCircle
//                             onClick={() => handleMinus(staff.id)}
//                             fontSize={16}
//                             color="#2D50D6"
//                           />
//                         ) : (
//                           <FaPlusCircle
//                             onClick={() => handlePlus(staff.id)}
//                             fontSize={16}
//                             color="#2D50D6"
//                           />
//                         )}
//                         <Text
//                           _hover={{
//                             color: "#2D50D6",
//                             textDecor: "underline",
//                           }}
//                           display={"flex"}
//                         >
//                           <Link
//                             href={`/dashboard/staff/edit/${staff.id}`}
//                             className="emailwrap"
//                           >
//                             {staff.email}
//                           </Link>
//                         </Text>
//                       </Td>
//                     </Tr>
//                     {iconShow.includes(staff.id) && (
//                       <>
//                         <Tr>
//                           <Td
//                             display={"flex"}
//                             border={"1px solid #e3e6f0"}
//                             gap={2}
//                           >
//                             <Text as={"b"}> Full Name : </Text>
//                             {staff.firstName + " " + staff.lastName}
//                           </Td>
//                         </Tr>
//                         <Tr>
//                           <Td
//                             display={"flex"}
//                             border={"1px solid #e3e6f0"}
//                             gap={2}
//                           >
//                             <Text as={"b"}> Login Provider : </Text>{" "}
//                             {staff.UserType === 1 ? "Admin" : "Staff"}
//                           </Td>
//                         </Tr>
//                         <Tr>
//                           <Td
//                             border={"1px solid #e3e6f0"}
//                             display={"flex"}
//                             gap={2}
//                           >
//                             <Text as={"b"}> Status : </Text>{" "}
//                             {staff.IsActive === true ? "Active" : "In Active"}
//                           </Td>
//                         </Tr>
//                       </>
//                     )}
//                   </Fragment>
//                 ))}
//               </Tbody>
//               <Tbody display={{ base: "none", md: "table-row-group" }}>
//                 {currentEntries.map((staff, index) => (
//                   <Tr key={index + 1}>
//                     <Td color="#01acf1" border={"1px solid #e3e6f0"}>
//                       <Text
//                         width={"fit-content"}
//                         _hover={{ color: "#2D50D6", textDecor: "underline" }}
//                       >
//                         <Link href={`/dashboard/staff/edit/${staff.id}`}>
//                           {staff.email}
//                         </Link>
//                       </Text>
//                     </Td>
//                     <Td border={"1px solid #e3e6f0"}>
//                       {staff.firstName + " " + staff.lastName}
//                     </Td>
//                     <Td border={"1px solid #e3e6f0"}>
//                       {staff.UserType === 1 ? "Admin" : "Staff"}
//                     </Td>
//                     <Td border={"1px solid #e3e6f0"}>
//                       {staff.IsActive === true ? "Active" : "In Active"}
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </>
//           )}
//         </Table>
//         <Stack
//           direction={{ base: "column", md: "row" }}
//           mt={4}
//           spacing={-3}
//           justifyContent="space-between"
//           gap={4}
//         >
//           <Box display={"flex"} gap={1}>
//             <Text> Showing </Text>
//             <Text>{filteredStaff.length > 0 ? indexOfFirstEntry + 1 : 0}</Text>
//             <Text>to</Text>
//             <Text>{Math.min(indexOfLastEntry, filteredStaff.length)}</Text>
//             <Text>of</Text>
//             <Text>{filteredStaff.length}</Text>
//             <Text>entries</Text>
//           </Box>
//           <Pagination
//             prevPage={prevPage}
//             nextPage={nextPage}
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//             totalPages={totalPages}
//             filteredUser={filteredStaff}
//           />
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default StaffList;

// import UserList from "@/components/Tables/UserList";

// async function getData() {
//   const res = await fetch(
//     `https://taxplanner-test-json.onrender.com/user?UserType=${3}`
//   );

//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();

//   return (
//     <main>
//       <UserList staffData={data} />
//     </main>
//   );
// }


"use client"

import { useState, useEffect } from 'react';

const HomePage = () => {
	const [posts, setPosts] = useState([]);
  console.log(posts);
  
	const fetchPosts = async () => {
		try {
			const response = await fetch('api', {
				method: 'GET',
			});
			if (response.ok) {
				const { posts } = await response.json();
				setPosts(posts);
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div>
			<h1>Latest Blog Posts</h1>
			<ul>
				{posts.map((post:any) => (
					<li key={post?.id}>{post?.title}</li>
				))}
			</ul>
		</div>
	);
};

export default HomePage;
