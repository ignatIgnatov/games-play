import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div>
      <div id="box">
        <Header />

        <main id="main-content">
          <Switch>
            <Route path="/" exact component={WelcomeWorld} />
            <Route path="/games" exact component={GameCatalog} />
            <Route path="/create-game" component={CreateGame} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/games/:gameId" component={GameDetails} />
            // пример за редирект:
            <Route
              path="/logout"
              render={(props) => {
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
