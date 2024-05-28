import { Box, Button } from "@chakra-ui/react";
import React from "react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: any;
  filteredUser: any;
  prevPage: () => void;
  nextPage: () => void;
}
const Pagination = ({
  currentPage,
  setCurrentPage,
  prevPage,
  totalPages,
  nextPage,
  filteredUser,
}: PaginationProps) => {
  const renderPageButtons = () => {
    const buttons = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <Button
            key={i}
            transition="1s"
            _hover={{ bg: currentPage === i ? "#2D50D6" : "#EAECF4" }}
            bg={currentPage === i ? "#2D50D6" : "white"}
            color={currentPage === i ? "white" : "#2D50D6"}
            borderRadius="0px"
            border="1px solid #E3E6F0"
            onClick={() => setCurrentPage(i)}
            disabled={currentPage === i}
          >
            {i}
          </Button>
        );
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          buttons.push(
            <Button
            transition="1s"
              key={i}
              _hover={{ bg: currentPage === i ? "#2D50D6" : "#EAECF4" }}
              bg={currentPage === i ? "#2D50D6" : "white"}
              color={currentPage === i ? "white" : "#2D50D6"}
              borderRadius="0px"
              border="1px solid #E3E6F0"
              onClick={() => setCurrentPage(i)}
              disabled={currentPage === i}
            >
              {i}
            </Button>
          );
        }
        buttons.push(
          <Button
            key="ellipsis"
            _hover={{ bg: "white" }}
            borderRadius="0px"
            bg="white"
            border="1px solid #E3E6F0"
          >
            ...
          </Button>
        );
        buttons.push(
          <Button
            key={totalPages}
            transition="1s"
            _hover={{ bg: currentPage === totalPages ? "#2D50D6" : "#EAECF4" }}
            bg={currentPage === totalPages ? "#2D50D6" : "white"}
            color={currentPage === totalPages ? "white" : "#2D50D6"}
            borderRadius="0px"
            border="1px solid #E3E6F0"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            {totalPages}
          </Button>
        );
      } else if (currentPage >= totalPages - 2) {
        buttons.push(
          <Button
            key={1}
            transition="1s"
            _hover={{ bg: 1 === currentPage ? "#2D50D6" : "#EAECF4" }}
            bg={1 === currentPage ? "#2D50D6" : "white"}
            color={1 === currentPage ? "white" : "#2D50D6"}
            borderRadius="0px"
            border="1px solid #E3E6F0"
            onClick={() => setCurrentPage(1)}
            disabled={1 === currentPage}
          >
            1
          </Button>
        );
        buttons.push(
          <Button
            key="ellipsis"
            _hover={{ bg: "white" }}
            borderRadius="0px"
            bg="white"
            border="1px solid #E3E6F0"
          >
            ...
          </Button>
        );
        for (let i = totalPages - 4; i <= totalPages; i++) {
          buttons.push(
            <Button
              key={i}
              transition="1s"
              _hover={{ bg: currentPage === i ? "#2D50D6" : "#EAECF4" }}
              bg={currentPage === i ? "#2D50D6" : "white"}
              color={currentPage === i ? "white" : "#2D50D6"}
              borderRadius="0px"
              border="1px solid #E3E6F0"
              onClick={() => setCurrentPage(i)}
              disabled={currentPage === i}
            >
              {i}
            </Button>
          );
        }
      } else {
        buttons.push(
          <Button
            key={1}
            transition="1s"
            _hover={{ bg: 1 === currentPage ? "#2D50D6" : "#EAECF4" }}
            bg={1 === currentPage ? "#2D50D6" : "white"}
            color={1 === currentPage ? "white" : "#2D50D6"}
            borderRadius="0px"
            border="1px solid #E3E6F0"
            onClick={() => setCurrentPage(1)}
            disabled={1 === currentPage}
          >
            1
          </Button>
        );
        buttons.push(
          <Button
            key="ellipsis"
            _hover={{ bg: "white" }}
            borderRadius="0px"
            bg="white"
            border="1px solid #E3E6F0"
          >
            ...
          </Button>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          buttons.push(
            <Button
              key={i}
              transition="1s"
              _hover={{ bg: currentPage === i ? "#2D50D6" : "#EAECF4" }}
              bg={currentPage === i ? "#2D50D6" : "white"}
              color={currentPage === i ? "white" : "#2D50D6"}
              borderRadius="0px"
              border="1px solid #E3E6F0"
              onClick={() => setCurrentPage(i)}
              disabled={currentPage === i}
            >
              {i}
            </Button>
          );
        }
        buttons.push(
          <Button
            key="ellipsis2"
            _hover={{ bg: "white" }}
            borderRadius="0px"
            bg="white"
            border="1px solid #E3E6F0"
          >
            ...
          </Button>
        );
        buttons.push(
          <Button
            key={totalPages}
            transition="1s"
            _hover={{ bg: currentPage === totalPages ? "#2D50D6" : "#EAECF4" }}
            bg={currentPage === totalPages ? "#2D50D6" : "white"}
            color={currentPage === totalPages ? "white" : "#2D50D6"}
            borderRadius="0px"
            border="1px solid #E3E6F0"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            {totalPages}
          </Button>
        );
      }
    }
    return buttons;
  };
  return (
    <Box>
      <Button
        bg="white"
        color={currentPage === 1 ? "#000" : "#2D50D6"}
        borderRadius="0px"
        border="1px solid #E3E6F0"
        onClick={prevPage}
        isDisabled={currentPage === 1}
      >
        Previous
      </Button>
      {renderPageButtons()}
      <Button
        bg="white"
        color={
          currentPage === totalPages
            ? "#000"
            : filteredUser.length === 0
            ? "#000"
            : "#2D50D6"
        }
        borderRadius="0px"
        border="1px solid #E3E6F0"
        onClick={nextPage}
        isDisabled={currentPage === totalPages || filteredUser.length === 0}
      >
        Next
      </Button>
    </Box>
  );
};
export default Pagination;