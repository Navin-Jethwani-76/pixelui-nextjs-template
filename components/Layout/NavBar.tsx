import React from "react";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/Layout/theme-switcher";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <NextUiNavbar
        isBordered
        maxWidth="full"
        className="border-b-1 border-foreground-200 rounded-md"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link
              className="font-bold text-inherit capitalize flex gap-2"
              href="/"
            >
              <Image
                src={"/Logo.png"}
                alt="Logo"
                height={30}
                width={30}
                className="rounded-md"
              />
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="flex gap-2">
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </NextUiNavbar>
    </>
  );
};

export default NavBar;
