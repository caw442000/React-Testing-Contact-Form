import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label data-testid="First Name" htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label data-testid="Last Name" htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            id="lastName"
            placeholder="luo"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label data-testid="email" htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input id="email"name="email" ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label data-testid="message" htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid="submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
