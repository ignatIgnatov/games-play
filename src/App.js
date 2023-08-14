import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [page, setPage] = useState("/home");

  const routes = {
    "/home": <WelcomeWorld />,
    "/games": <GameCatalog />,
    "/create-game": <CreateGame />,
    "/login": <LoginPage />,
    "/register": <RegisterPage />,
  };

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div>
      <div id="box">
        <Header navigationChangeHandler={navigationChangeHandler} />

        <main id="main-content">{routes[page] || <ErrorPage> Some additional info </ErrorPage>}</main>
      </div>
    </div>
  );
}

export default App;
