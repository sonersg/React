import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, settheme } = useTheme();
  return (
    <div className="Header">
      Header
      <h1>Active Theme: {theme}</h1>
      <br />
      <button onClick={() => settheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;
