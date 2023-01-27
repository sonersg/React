import { useTheme } from "../context/ThemeContext";

function Button() {
  const { theme, settheme } = useTheme();
  // console.log(data);
  return (
    <div>
      Button
      {/* <h1>{JSON.stringify(data)}</h1> */}
      <h1>{theme}</h1>
      <button onClick={() => settheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;

// import { useContext } from "react";

// import ThemeContext from "../context/ThemeContext";

// function Button() {
//   const { theme, settheme } = useContext(ThemeContext);
//   return (
//     <div className="Button">
//       <h1>Active Theme: {theme}</h1>
//       <br />
//       <button onClick={() => settheme(theme === "light" ? "dark" : "light")}>
//         Change Theme
//       </button>
//     </div>
//   );
// }

// export default Button;
