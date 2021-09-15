import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class BookList extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.color }}
      >
        <ul>
          <li style={{ background: theme.ui }}>別急著吃棉花糖</li>
          <li style={{ background: theme.ui }}>佐賀的超級啊罵</li>
          <li style={{ background: theme.ui }}>千歲少女</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
