import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormState({ name: "", email: "", message: "" });
    const displayText = document.querySelector(".hide");
    displayText.style.display = "block";
    displayText.innerText =
      "Message sent. Thank you for your message! I will get in touch with you soon!";
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };
  return (
    <section className="container contact">
      <form id="contact-form" onSubmit={handleSubmit}>
        <h1 data-testid="h1tag">Contact me</h1>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            onBlur={handleChange}
            onChange={handleChange}
            value={formState.name}
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            onBlur={handleChange}
            onChange={handleChange}
            value={formState.email}
            placeholder="youremail@email.com"
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            name="message"
            rows="5"
            onBlur={handleChange}
            onChange={handleChange}
            value={formState.message}
            placeholder="leave a message"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <p className="hide"></p>
        <button data-testid="button" type="submit">
          SEND
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
