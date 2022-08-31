
// Declarative: Su akar yolunu bulur:p
//ReactDOM.render(<h1>Hello everyoneee!</h1>, document.getElementById("root"));



// Imperative: Every step must be given.
const h1 = document.createElement("h1");
h1.textContent = "Hello everyoneee!";
h1.className = "header";
document.getElementById("root").append(h1);
