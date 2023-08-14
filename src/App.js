import Header from "./components/Header";
import Main from "./components/Main";
import WelcomeWorld from "./components/WelcomeWorld";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog";


function App() {
  return (
    <div>
      <div id="box">
        <Header/>

        <Main/>
        
        <WelcomeWorld/>

        <LoginPage/>

        <RegisterPage/>

        <CreateGame/>

        <EditGame/>

        <GameDetails/>

        <GameCatalog/>
      </div>
    </div>
  );
}

export default App;
