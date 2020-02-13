import React from "react";
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('first Name, last Name and email inputs are rendered',  () => {
  //testing for all of our inputs are rendered
  const { getByPlaceholderText, getByTestId } = render(<ContactForm />);
  getByTestId(/First Name/i);
  getByTestId(/Last Name/i);
  getByTestId(/email/i);
  // getByLabelText(/Last Name/i);
  // getByLabelText(/email/i);

});