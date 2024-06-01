import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../App";
import { Button } from "../App";

const SearchResults = ({ data: foods }) => {
  return (
    <div>
      <FoodCardContainer>
        <FoodCards>
          {foods?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} alt="" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </FoodCardContainer>
    </div>
  );
};

export default SearchResults;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 210px);
`;

const FoodCards = styled.div``;

const FoodCard = styled.div`
  border: 0.66px solid;

  border-image-source: radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;
