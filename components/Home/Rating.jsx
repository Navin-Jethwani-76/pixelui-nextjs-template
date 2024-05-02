"use client";
import React from "react";
import { RadioGroup, useRadio, VisuallyHidden } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";

const radioOptions = ["1", "2", "3", "4", "5"];

const CustomRadio = (props) => {
  const { Component, getBaseProps, getInputProps, getControlProps } =
    useRadio(props);
  const isLessThanOrEqualToSelected = parseInt(props.value) <= props.rating;

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <FaStar
        {...getControlProps()}
        size={18}
        className={
          isLessThanOrEqualToSelected ? "text-primary" : "text-default-200"
        }
      />
    </Component>
  );
};

export const Rating = ({ rating, peoplerated }) => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <RadioGroup orientation="horizontal" isReadOnly>
          {radioOptions.map((option) => {
            return (
              <CustomRadio
                key={option}
                value={option}
                rating={rating}
                className="cursor-default"
              />
            );
          })}
        </RadioGroup>
        <p className="text-medium text-default-400">{`(${peoplerated})`}</p>
      </div>
    </>
  );
};
