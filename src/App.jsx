 import styled from "styled-components"

function App() {

  return (
    <Container>
      
    <TopContainer>
        <div className="logo"><img src="/logo.png" alt="FoodiesHub logo" /></div>
        <div className="search"><input type="text" placeholder="Search Food" /></div>
    </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>BreakFast</Button>
      <Button>Dinner</Button>
      <Button>None</Button>
    </FilterContainer>
    </Container>
  )
}

export default App;

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
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
`;

const Button = styled.button`
background: rgba(255, 67, 67, 1);
border-radius: 5px;
padding: 6px 12px;
border: none;
color: white;

`;
