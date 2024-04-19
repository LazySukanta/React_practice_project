/**
 * <div id="parent">
 *    <div  id="child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *    </div>
 *    <div  id="child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *    </div>
 *
 * </div>
 */
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1 Tag"),
//     React.createElement("h2", {}, "I am H2 Tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1 Tag"),
//     React.createElement("h2", {}, "I am H2 Tag"),
//   ]),
// ]);

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const jsxHeading = <h1>Namaste React using JSX</h1>;

const HeadingComponent = () => <h1>Namaste react functional Component</h1>;
const headingElement = <h1>Namaste react functional Eement</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// bondevarat
