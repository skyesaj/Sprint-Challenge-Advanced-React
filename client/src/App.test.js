import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { render, getByText, cleanup } from "@testing-library/react";
// import { render } from "@testing-library/react";
// import "@testing-library/jest-dom";
import * as rtl from "@testing-library/react";
import PlayerCard from "./components/PlayerCard";
import PlayersList from "./components/PlayersList";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// test("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

describe("App", () => {
it("renders without crashing", () => {
  const h1 = rtl.render(<App/>);
  const element = h1.queryByText(/Player/i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});

}
// test("should have text [player name]", async () => {
//   const { findByText } = await render(<PlayerCard />);
//   findByText(/megan rapinoe/i);
// });

// test("renders", () => {
//   const { App } = render(<App />);
//   const element = getByText(/Player/i);
//   expect(element).toBeVisible();
// });

// it("renders without crashing", () => {
//   const div = render(<App />);
//   div.getByText("Player");
// });

// describe("App", () => {
//   test("does App render?", () => {
//     render(<App />).toJSON();
//   });
// });
