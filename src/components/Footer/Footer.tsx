import Link from "next/link";
import React from "react";
import Newsletter from "./Newsletter";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-4 h-80">
      <div className="flex justify-between h-4/5">
        <div className="self-center">
          <h3 className="text-lg underline pb-1">About SiteName</h3>
          <ul>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/values"}>Our Values</Link>
            </li>
            <li>
              <Link href={"/sitemap"}>SiteMap</Link>
            </li>
          </ul>
        </div>
        <div className="self-center">
          <h3 className="text-lg underline pb-1">Help & Faq</h3>
          <ul>
            <li>
              <Link href={"/contactus"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/shipping"}>Shipping Info</Link>
            </li>
            <li>
              <Link href={"/returns"}>Returns & Exchanges</Link>
            </li>
          </ul>
        </div>
        <div className="self-center">
          <h3 className="text-lg underline pb-1">My SiteName</h3>
          <ul>
            <li>
              <Link href={"/account"}> My Account</Link>
            </li>
            <li>
              <Link href={"/trackorder"}>Order Status</Link>
            </li>
            <li>
              <Link href={"/trackorder"}>Order Status</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly">
          <Newsletter />
          <SocialIcons />
        </div>
      </div>
      <p className="text-center">copyright (c) 2023</p>
    </footer>
  );
};

export default Footer;
