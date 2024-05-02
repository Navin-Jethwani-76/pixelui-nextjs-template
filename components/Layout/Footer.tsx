import { Link } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-foreground bg-background rounded-md border-t-1 border-foreground-200">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col gap-4 md:flex-row items-center justify-between">
        <span className="text-sm sm:text-center">
          <Link href="/" className="hover:underline" color="foreground">
            {process.env.NEXT_PUBLIC_SITE_NAME}
          </Link>{" "}
          © 2024. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center gap-4 text-sm font-medium sm:mt-0">
          <li>
            <Link href="#" className="hover:underline" color="foreground">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline" color="foreground">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline" color="foreground">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline" color="foreground">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
