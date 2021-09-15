import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class Navbar extends React.Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {val => {
          const { isLight, light, dark } = val;
          const theme = isLight ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.color }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contaxt</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default Navbar;
