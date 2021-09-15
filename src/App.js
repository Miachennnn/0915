import BookList from "./component/booklist";
import Navbar from "./component/navbar";
import ToggleBtn from "./component/toggleBtn";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleBtn />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
