import PrivateRoute from "./auth/PrivateRoute";
import { HashRouter, Route, Switch } from "react-router-dom";
import SecurityPositions from "./components/SecurityPositions";
import SecurityTransactions from "./components/SecurityTransactions";
import LoginPage from "./components/LoginForm";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <PrivateRoute exact path="/" component={SecurityPositions} />
          <PrivateRoute
            path="/security-positions"
            component={SecurityPositions}
          />
          <PrivateRoute
            path="/security-transactions"
            component={SecurityTransactions}
          />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}
