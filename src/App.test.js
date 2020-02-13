import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('concise test - renders animal form header', () => {
  const{ getByText } = render(<App />);
  getByText(/First Name/i);
})



