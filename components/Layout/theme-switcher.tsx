"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      variant="bordered"
      onPress={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme == "light" && <LuMoonStar />}
      {theme == "dark" && <MdOutlineWbSunny />}
    </Button>
  );
}
