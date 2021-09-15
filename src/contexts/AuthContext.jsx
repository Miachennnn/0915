import React, { createContext } from "react";
export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    isAuth: false,
  };
  toggleAuth = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };
  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, toggle: this.toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
