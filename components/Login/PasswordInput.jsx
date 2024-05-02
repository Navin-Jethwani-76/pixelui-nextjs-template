"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      name="password"
      label="Password"
      placeholder="••••••••"
      isRequired
      className="max-w-xs"
      endContent={
        <Button
          onPress={toggleVisibility}
          isIconOnly
          size="sm"
          className="ms-2"
          variant="bordered"
        >
          {isVisible ? <FaRegEye /> : <FaRegEyeSlash />}
        </Button>
      }
      type={isVisible ? "text" : "password"}
      {...props}
    />
  );
};

export default PasswordInput;
