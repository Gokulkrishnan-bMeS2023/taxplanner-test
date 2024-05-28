import { Flex } from "@chakra-ui/react";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
interface sortConfigProps {
  key: string;
  direction: string;
}
interface SortIconGroupProps {
  sortConfig: sortConfigProps;
  KeyType: string;
}

const SortIconGroup = ({ sortConfig, KeyType }: SortIconGroupProps) => {
  return (
    <Flex>
      <IoIosArrowRoundUp
        style={{
          fontSize: "1.5em",
          position: "absolute",
          right: "8px",
          opacity:
            sortConfig.direction === "asc" && sortConfig.key === KeyType
              ? 1
              : 0.3,
        }}
      />
      <IoIosArrowRoundDown
        style={{
          fontSize: "1.5em",
          position: "absolute",
          right: "1px",
          opacity:
            sortConfig.direction === "desc" && sortConfig.key === "email"
              ? 1
              : 0.3,
        }}
      />
    </Flex>
  );
};

export default SortIconGroup;
