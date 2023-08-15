import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h1>
          <NavLink className="home" to="/">
            GamesPlay
          </NavLink>
        </h1>
        <nav>
          <NavLink
            activeStyle={{ borderBottom: "1px solid white" }}
            to="/games"
          >
            All games
          </NavLink>
          <div id="user">
            <NavLink
              activeStyle={{ borderBottom: "1px solid white" }}
              to="create-game"
            >
              Create Game
            </NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </div>
          <div id="guest">
            <NavLink
              activeStyle={{ borderBottom: "1px solid white" }}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              activeStyle={{ borderBottom: "1px solid white" }}
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
