import styled from "styled-components";
import { Alert, Button, CircularProgress } from "@mui/material";
import { BASE_URL } from "../../Home";

const SearchResult = ({ data, loading, error }) => {
  return (
    <Cards>
      {error ? (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      ) : (
        <>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <>
              {data?.map(({ name, image, text, price }) => (
                <FoodCard key={name}>
                  <div className="food-image">
                    <img src={BASE_URL + image} alt="" />
                  </div>
                  <div className="food-info">
                    <div className="info">
                      <h3>{name}</h3>
                      <p>{text}</p>
                    </div>
                    <Button variant="contained" color="error">
                      ${price.toFixed(2)}
                    </Button>
                  </div>
                </FoodCard>
              ))}
            </>
          )}
        </>
      )}
    </Cards>
  );
};

export default SearchResult;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 160px;
  border: 1px solid #c247ff;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(15px);
  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;
