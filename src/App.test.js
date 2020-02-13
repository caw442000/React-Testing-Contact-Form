import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('renders Contact Form first Name', () => {
  const{ getByText } = render(<App />);
  getByText(/First Name/i);
})



