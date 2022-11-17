import { Component } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";
import Counter from "./components/Counter";
import User2 from "./components/User2";
import Colors from "./components/Colors";
import Form from "./components/Form";

//rfce



// let name = "Soner";
// const surname = "Güçlü";

// function App() {
//   return (
//     <div className="App">
//       Merhaba <br></br>
//      {name} {surname} <br></br>
//      <label htmlfor="test">Test</label>
//      <Header />
//     </div>
//   );
// }





// const fullName = "Soner Güçlü";
// const isLoggedIn = false;

// function App() {
//   return (
//     <div className="App">
//       {/* {isLoggedIn ? (
//         <div>Hoş Geldin {fullName}</div>
//       ) : (
//         <a href="/">Giriş Yapın</a>
//       )} */}



//       {/* {isLoggedIn && <div>Hoş Geldin {fullName}</div>}
//       {!isLoggedIn && <a href="/">Giriş Yapın</a>} */}



//       {isLoggedIn ? <div>Hoş Geldin {fullName}</div> : <Login />}
//     </div>
//   );
// }



// const user = {
//   number:1,
//   name: "Soner",
//   city: "Bayburt",
//   age:  25
// };

// function App() {
//   return (
//     <div className="App">
//       <User title="adam" data={user} friends={['Salih', 'Selim', 'Sokrates']}/>
//     </div>
//   );
// }




// **********************component yaşam döngüsü*************************
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}




// **********************useState Object*************************
// function App() {
//   return (
//     <div className="App">
//       <User2 />
//     </div>
//   );
// }




//*****************useState Array & previous state********************
// function App() {
//   return (
//     <div className="App">
//       <Colors />
//     </div>
//   );
// }





//*****************Form elemanları için state kullanımı********************
// function App() {
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   );
// }

export default App;
