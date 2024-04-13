import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContex";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
