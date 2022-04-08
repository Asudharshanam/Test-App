import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { userService } from "../api/userService";

export default function NavBar() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Navbar color="dark" dark>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/security-positions">Security Positions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/security-transactions">
              Security Transactions
            </NavLink>
          </NavItem>
          <NavItem onClick={userService.logout}>
            <NavLink href="/login">Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
