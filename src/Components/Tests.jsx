import React from "react";
import "./styles.css";

import { Form, Field } from "@leveluptuts/fresh";

const securityQuestions = [
  "What is your mother's maiden name?",
  "What was the name of your first pet?",
  "What was the name of your first school?"
];

const onSubmit = (data) => console.log(data);

function UserProfileForm() {
  return (
    <Form formId="user-profile" onSubmit={onSubmit}>
      <Field required>First Name</Field>
      <Field required>Last Name</Field>
      <Field required type="email">
        Email
      </Field>

      <Field required type="select" options={securityQuestions}>
        Security Question
      </Field>
      <Field required>Security Answer</Field>

      <Field type="textarea">Bio</Field>
    </Form>
  );
}

export default function App() {
  return (
    <div className="App">
      <UserProfileForm />
    </div>
  );
}
