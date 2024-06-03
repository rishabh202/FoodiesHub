import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults"

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);



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
  

   const searchFood = (e) => {
   const searchValue = e.target.value;
   console.log(searchValue);

   if(searchFood == ""){
    setFilteredData(null);
   }    

   const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));

   setFilteredData(filter);


   };

  if(error) return <div>{error}</div>
  if(loading) return <div>loading</div>

  

  return (
    <>

    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.png" alt="FoodiesHub logo" />
        </div>
        <div className="search">
          <input onChange={searchFood} type="text" placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>BreakFast</Button>
        <Button>Dinner</Button>
        <Button>None</Button>
      </FilterContainer>
      

    </Container>
      <SearchResults data={filteredData}>

      </SearchResults>
    </>
  );
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 31px;
`;

export const Button = styled.button`
  background: rgba(255, 67, 67, 1);
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;

