import { Button } from "@mui/material";
import styled from "styled-components";

const FilterButtons = () => {
  return (
    <NavButtons>
      <Button variant="contained">All</Button>

      <Button variant="contained" color="secondary">
        Breckfast
      </Button>
      <Button variant="contained" color="success">
        Lunch
      </Button>
      <Button variant="contained" color="error">
        Dinner
      </Button>
    </NavButtons>
  );
};

export default FilterButtons;

const NavButtons = styled.div`
  Button {
    margin: 5px;
  }
`;
