import React from "react";
import { Input } from "@nextui-org/react";

const EmailInput = (props) => {
  return (
    <Input
      label="Email"
      name="email"
      placeholder="you@example.com"
      autoComplete="email"
      isRequired
      className="max-w-xs"
      {...props}
    />
  );
};

export default EmailInput;
