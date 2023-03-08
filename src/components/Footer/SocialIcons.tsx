import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  return (
    <ul className="flex justify-around">
      <li>
        <Link href={"https://www.facebook.com/"}>
          <Image
            src={"/icons/square-facebook.svg"}
            alt="Facebook"
            width={24}
            height={24}
            className="fill-white"
          />
        </Link>
      </li>
      <li>
        <Link href={"https://www.instagram.com"}>
          <Image
            src={"/icons/square-instagram.svg"}
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>
      </li>
      <li>
        <Link href={"https://www.twitter.com"}>
          <Image
            src={"/icons/square-twitter.svg"}
            alt="Twitter"
            width={24}
            height={24}
          />
        </Link>
      </li>
      <li>
        <Link href={"https://www.youtube.com"}>
          <Image
            src={"/icons/square-youtube.svg"}
            alt="YouTube"
            width={24}
            height={24}
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
