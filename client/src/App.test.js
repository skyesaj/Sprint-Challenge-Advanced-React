import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { render } from "@testing-library/react";
import * as rtl from "@testing-library/react";
import PlayerCard from "./components/PlayerCard";
import PlayersList from "./components/PlayersList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

it("renders without crashing", () => {
  const h1 = rtl.render(<div className="h1">Women's Soccer Team</div>);
});
const element = wrapper.queryByText(/Women's/i);
