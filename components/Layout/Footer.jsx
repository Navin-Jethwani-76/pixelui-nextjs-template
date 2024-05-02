"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Input,
  Link,
  Tab,
  Tabs,
  Image,
} from "@nextui-org/react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { PiGithubLogo, PiInstagramLogo, PiTwitterLogo } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FooterLinks } from "../data";
import { useTheme } from "next-themes";

export default function App() {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState(theme);

  useEffect(() => {
    setTheme(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="flex flex-col gap-4 w-full p-6 border-t-1 border-foreground-50">
      <div className="w-full flex flex-col gap-4 justify-start">
        <div className="w-fit">
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-2 items-center">
              <Image
                src="/Logo.png"
                alt="Logo"
                height={24}
                width={24}
                className="rounded-full"
              />
              <span className="text-small font-medium">ACME</span>
            </div>
            <Divider orientation="vertical" className="h-4" />
            <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default bg-transparent h-7 text-small rounded-full border-none px-0 text-default-500">
              <span className="w-2 h-2 ml-1 rounded-full bg-success"></span>
              <span className="flex-1 text-inherit font-normal px-2">
                All systems operational
              </span>
            </div>
          </div>
        </div>
        <div className="w-fit">
          <div className="flex justify-center items-center gap-4">
            <Link color="foreground" href="#">
              <CiFacebook size={20} />
            </Link>
            <Link color="foreground" href="#">
              <PiInstagramLogo size={20} />
            </Link>
            <Link color="foreground" href="#">
              <PiTwitterLogo size={20} />
            </Link>
            <Link color="foreground" href="#">
              <PiGithubLogo size={20} />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-4">
          {FooterLinks.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-3 ${
                  index == 0
                    ? "text-start"
                    : index == FooterLinks.length - 1
                    ? "text-right"
                    : index % 2 !== 0
                    ? "text-end sm:text-center"
                    : " text-start sm:text-center"
                }`}
              >
                <h3 className="text-small font-semibold text-default-600">
                  {item.heading}
                </h3>
                <ul className="flex flex-col gap-1">
                  {item.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={link.href}
                          color="foreground"
                          className="text-default-500 dark:text-default-400"
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Divider />
        <div className="flex gap-4 flex-col justify-center text-center sm:flex-row sm:text-start sm:justify-between sm:items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-small font-semibold text-default-600">
              Subscribe to our newsletter
            </h3>
            <p className="text-small text-default-400">
              Receive weekly updates with the newest insights, trends, and
              tools, straight to your email.
            </p>
          </div>
          <form
            className="flex items-center gap-2"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Input
              label="Email"
              type="email"
              startContent={<MdEmail />}
              placeholder="johndoe@email.com"
              size="sm"
              isRequired
              variant="bordered"
              className="min-w-[200px]"
              name="email"
            />
            <Button variant="flat" color="primary" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
        <Divider />
        <div className="flex justify-between gap-4 items-end">
          <p className="text-start text-tiny text-default-400">
            © 2024 Acme Inc. All rights reserved.
          </p>
          <Tabs
            variant="bordered"
            aria-label="Theme Switcher Tabs"
            size="sm"
            classNames={{
              tab: "p-1",
            }}
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="light" title={<IoSunnyOutline size={20} />} />
            <Tab key="dark" title={<IoMoonOutline size={20} />} />
          </Tabs>
        </div>
      </div>
    </div>
  );
}
