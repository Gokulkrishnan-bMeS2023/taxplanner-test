"use client";
import React, { useState, ChangeEvent } from "react";
import { Box, Select, Button } from "@chakra-ui/react";

interface SelectOptionProps {
  // Define any props here if needed
}

function SelectOption(props: SelectOptionProps) {
  // State for the selected option
  const [selectedOption, setSelectedOption] = useState<string>("option1"); // Initial selected option

  // Function to handle option change
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box>
      <Select
        placeholder="Please Select"
        value={selectedOption}
        onChange={handleOptionChange}
        size={"sm"}
        border={"1px solid #CCC"}
        borderRadius={"5px"}
        bg={"white"}
        fontWeight={400}
        color={"black"}
      >
        <option value="option1">FY2022-2023</option>
        <option value="option2">FY2023-2024</option>
      </Select>
    </Box>
  );
}

export default SelectOption;
