import React from "react";

import {
  HomeImageContainer,
  HomeImageContent,
  HomeImageText
} from "./home-image.styles";

const HomeImage = () => (
  <HomeImageContainer>
    <HomeImageContent>
      <HomeImageText>
        <h1>
          Welcome to the <span>Farm</span>
        </h1>
        <p>
          E commerce network between farmer and consumer.
        </p>
      </HomeImageText>
    </HomeImageContent>
  </HomeImageContainer>
);

export default HomeImage;
