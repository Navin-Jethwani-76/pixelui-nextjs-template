"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

const App = () => {
  const [renderBanner, setRenderBanner] = useState(true);

  if (!renderBanner) {
    return <></>;
  }

  return (
    <div className="relative w-full top-0  ">
      <div className="flex w-full items-center justify-between gap-x-3 border-1 border-divider bg-background/[0.15] bg-gradient-to-r from-default-100 via-danger-100 to-secondary-100 px-6 sm:px-3.5 py-2 ">
        <p className="text-small text-foreground">
          The Winter 2024 Release is here: new editor, analytics API, and so
          much more.
        </p>
        <Button
          className="flex flex-row gap-2"
          color={undefined}
          variant={undefined}
          style={{
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(to right, #F871A0, #9353D3)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          Explore
          <GrFormNextLink size={20} />
        </Button>
        <div className="flex flex-1 justify-end">
          <Button
            isIconOnly
            variant="bordered"
            size="sm"
            onPress={() => {
              setRenderBanner(false);
            }}
          >
            <IoMdClose size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
