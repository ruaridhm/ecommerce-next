"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import GuestLinks from "./GuestLinks";
import AuthLinks from "./AuthLinks";
import ToggleSwitch from "../ToggleCheckbox/ToggleSwitch";

export interface IUser {
  name: string;
}

const Nav = () => {
  const isAuthenticated = false;
  const user: IUser = { name: "" };
  const [mode, setMode] = useState(false);
  return (
    <nav>
      <div className="flex pl-0 sm:pl-4">
        <ul className="flex list-none font-bold m-0">
          <li className="flex align-middle m-4">
            <Link href="/" className="flex hover:underline whitespace-nowrap	">
              <Image src={"/Logo.ico"} alt="Logo" width={24} height={24} />
              <h2>SiteName</h2>
            </Link>
          </li>
        </ul>
        <ul className="flex m-4 justify-between	grow">
          {isAuthenticated ? <AuthLinks {...user} /> : <GuestLinks />}

          <li>
            <div>
              <ToggleSwitch
                name="newsletter"
                onValue={
                  <Image
                    src="/icons/moon-regular.svg"
                    alt="dark mode"
                    width={24}
                    height={24}
                  />
                }
                offValue={
                  <Image
                    src="/icons/sun-regular.svg"
                    alt="light mode"
                    width={24}
                    height={24}
                  />
                }
                checked={mode}
                onChange={() => {
                  setMode(!mode);
                  // toggleTheme();
                }}
                icon
              />
            </div>
          </li>
          <li>
            <Link href={"/cart"}>
              <Image
                src="/icons/cart-shopping-solid.svg"
                alt="Cart"
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
