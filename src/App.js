import PrivateRoute from "./auth/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SecurityPositions from "./components/SecurityPositions";
import SecurityTransactions from "./components/SecurityTransactions";
import LoginPage from "./components/LoginForm";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/security-positions"
            component={SecurityPositions}
          />
          <PrivateRoute
            exact
            path="/security-transactions"
            component={SecurityTransactions}
          />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    </div>
  );
}
