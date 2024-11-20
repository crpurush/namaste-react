const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world in React");
console.log(heading);//heading is react element i.e., JS object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);