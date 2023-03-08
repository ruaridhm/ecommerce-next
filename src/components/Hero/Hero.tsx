import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

interface IHero {
  title: string;
  text: string;
  primaryLabel: string;
  primaryCta: string;
  image: string;
  imageAlt: string;
}

const Hero = ({
  title,
  text,
  primaryLabel,
  primaryCta,
  image,
  imageAlt,
}: IHero) => {
  return (
    <div className="flex h-96 align-middle px-16 ">
      <div className="flex flex-col justify-center w-2/4">
        <h2 className="text-4xl pb-4">{title}</h2>
        <div></div>
        <p className="text-xl pb-4">{text}</p>
        <Button>{primaryLabel}</Button>
      </div>
      <div className="relative w-2/4">
        <Image src={image} alt={imageAlt} fill />
      </div>
    </div>
  );
};

export default Hero;
