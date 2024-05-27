 import styled from "styled-components"

function App() {

  return (
    <MainContainer>
      
    <TopContainer>
        <div className="logo"><img src="/logo.png" alt="FoodiesHub logo" /></div>
        <div className="search"><input type="text" placeholder="Search Food" /></div>
    </TopContainer>
    </MainContainer>
  )
}

export default App;

const MainContainer = styled.div`
background-color: rgba(50, 51, 52, 1);
`;
const TopContainer = styled.div`
  
`;
