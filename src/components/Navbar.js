import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { userService } from "../api/userService";

export default function NavBar() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Navbar color="dark" dark>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink>
              <Link style={{ textDecoration: "none" }} to="/security-positions">
                Security Positions
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link
                style={{ textDecoration: "none" }}
                to="/security-transactions"
              >
                Security Transactions
              </Link>
            </NavLink>
          </NavItem>
          <NavItem onClick={userService.logout}>
            <NavLink>
              <Link style={{ textDecoration: "none" }} to="/login">
                Logout
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
