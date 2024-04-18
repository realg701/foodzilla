import styled from "styled-components";
import NavBar from "./components/NavBar";
import FoodCards from "./components/FoodCards";
import { useEffect, useState } from "react";

export const BASE_URL = "http://localhost:9000";

const Home = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const filteredFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedButton(type);
  };
  return (
    <>
      <NavBar
        filteredFood={filteredFood}
        data={filteredData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <FoodCards data={filteredData} loading={loading} error={error} />
    </>
  );
};

export default Home;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
