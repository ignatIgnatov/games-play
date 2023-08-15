// import { useHistory } from "react-router-dom";

const LoginPage = ({ history }) => {

  // let historyHook = useHistory();

  const onFormLogin = (e) => {
    e.preventDefault();

    // TODO: Login

    history.push("/");
    // historyHook.push("/games");
  };

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onFormLogin}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Sokka@gmail.com"
          />

          <label htmlFor="login-pass">Password:</label>
          <input type="password" id="login-password" name="password" />
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>
              If you don't have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
