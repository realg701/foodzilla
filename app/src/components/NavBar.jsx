import styled from "@emotion/styled";
import FilterButtons from "./FilterButtons";
import { Button } from "@mui/material";
import { Container } from "../Home";

const NavBar = ({ setFilteredData }) => {
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue == "") {
      setFilteredData(null);
    }
  };

  return (
    <Nav>
      <Container>
        <div className="nav-bar">
          <Button href="/">
            <div className="logo">
              <img src="/logo.png" alt="" />
            </div>
          </Button>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </div>
        <FilterButtons />
      </Container>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.section`
  background: linear-gradient(
    40deg,
    rgba(255, 183, 215, 1) 0%,
    rgba(0, 108, 255, 1) 100%
  );
  min-height: 140px;
  text-align: center;
  padding: 20px 30px;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 30px;
  }

  .logo {
    img {
      width: 150px;
      height: auto;
    }
  }

  .search {
    input {
      font-size: 16px;
      height: 40px;
      border-radius: 5px;
      border: none;
      outline: none;
      opacity: 0.7;
      padding: 10px;
    }
  }
`;
