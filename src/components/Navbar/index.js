import { DropdownOption, DropdownProvider, DropdownRoot } from "../Dropdown";

import { Container, DropdownStyles } from "./styles";
import { Products, Developers, Company } from "../Content";

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Products" content={Products} />
            </li>
            <li>
              <DropdownOption name="Developers" content={Developers} />
            </li>
            <li>
              <DropdownOption name="Company" content={Company} />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
