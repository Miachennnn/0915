import React, { createContext } from "react";
export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLight: true,
    light: { color: "#555", ui: "#ddd", bg: "#eee" },
    dark: { color: "#ddd", ui: "#333", bg: "#555" },
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
