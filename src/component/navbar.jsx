import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
class Navbar extends React.Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>
        {AuthVal => (
          <ThemeContext.Consumer>
            {val => {
              const { isAuth, toggle } = AuthVal;
              const { isLight, light, dark } = val;
              const theme = isLight ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.color }}>
                  <h1>Context App</h1>
                  <div onClick={toggle}>
                    {isAuth ? "Logged in" : "Logged out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contaxt</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
export default Navbar;
