import React from 'react'
import styled from 'styled-components'

const SearchResults = ({data: foods}) => {
  return (
    <div>
            <FoodCardContainer>
        <FoodCards>
          {
           foods?.map((food) => 
           <FoodCard key={food.name}>
            {food.text}
           </FoodCard>)
          }
        </FoodCards>
      </FoodCardContainer>
    </div>
  )
}

export default SearchResults

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 210px);
`;

const FoodCards = styled.div``;
const FoodCard = styled.div``;

