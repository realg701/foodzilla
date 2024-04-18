import { Button } from "@mui/material";
import styled from "styled-components";

const FilterButtons = ({ filteredFood }) => {
  const filterButtons = [
    { name: "All", type: "all", color: "primary" },
    { name: "Breakfast", type: "breakfast", color: "secondary" },
    { name: "Lunch", type: "lunch", color: "success" },
    { name: "Dinner", type: "dinner", color: "error" },
  ];
  return (
    <NavButtons>
      {filterButtons.map((value) => (
        <Button
          onClick={() => filteredFood(value.type)}
          variant={"contained"}
          color={value.color}
          key={value.name}
        >
          {value.name}
        </Button>
      ))}
    </NavButtons>
  );
};

export default FilterButtons;

const NavButtons = styled.div`
  Button {
    margin: 5px;
  }
`;
