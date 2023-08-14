const Header = () => {

const onHeaderClick = (e) => {
  e.preventDefault();

  if (e.target.tagName === "A") {
    let url = new URL(e.target.href);
  }
}

  return (
    <div>
      <header onClick={onHeaderClick}>
        <h1>
          <a className="home" href="#">
            GamesPlay
          </a>
        </h1>
        <nav>
          <a href="#">All games</a>
          <div id="user">
            <a href="#">Create Game</a>
            <a href="#">Logout</a>
          </div>
          <div id="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
