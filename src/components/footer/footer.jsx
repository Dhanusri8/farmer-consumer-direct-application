import React from "react";

import { StyledFooter, FooterNameStyles } from "./footer.styles";

const Footer = () => (
  <StyledFooter>
    <FooterNameStyles>
      DHANUSRI {"  "}
      <span className="loader__dot">.</span>
      {"  "}
      <span className="loader__dot">.</span>
      {"  "}
      <span className="loader__dot">.</span>
    </FooterNameStyles>
  </StyledFooter>
);

export default Footer;
