import styled from "@emotion/styled";
import SearchResult from "./SearchResult/SearchResult";
import { Container } from "../Home";

const FoodCards = ({ data, loading, error }) => {
  return (
    <CardsContainer>
      <Container>
        <SearchResult data={data} loading={loading} error={error} />
      </Container>
    </CardsContainer>
  );
};

export default FoodCards;

const CardsContainer = styled.div`
  height: calc(100vh - 172px);
  background-image: url("/bg.png");
  background-size: cover;
`;
