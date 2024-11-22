import React from "react";
import ReactDOM from "react-dom/client";

const reactElementSample = <span>sample react element</span>;
const title = (
    <h1 className="head" tabIndex="5"> {reactElementSample} Namaste React using JSX 🚀 </h1>
);

const Heading = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React Functional component</h1>
    </div>
);

const reactElementWithComponent = (
    <div>
        <Heading /> <span>we are using Functional component in React Element</span>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( reactElementWithComponent);