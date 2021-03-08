import React from "react";
import { DropdownOption } from "../Dropdown";

import { Container, DropdownStyles } from "./styles";

function Navbar() {
  return (
    <DropdownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption name="Products" content={() => <h1>Products</h1>} />
          </li>
          <li>
            <DropdownOption
              name="Developers"
              content={() => <h1>Developers</h1>}
            />
          </li>
          <li>
            <DropdownOption name="Company" content={() => <h1>Company</h1>} />
          </li>
        </ul>
      </Container>
    </DropdownStyles>
  );
}

export default Navbar;
