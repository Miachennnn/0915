import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class ToggleBtn extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;
    const { toggle } = this.context;
    return (
      <button
        style={{ background: theme.ui, color: theme.color }}
        onClick={toggle}
      >
        Change the theme
      </button>
    );
  }
}

export default ToggleBtn;
