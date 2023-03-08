import Image from "next/image";
import Button from "../Button/Button";

interface IHeroHalf {
  title?: string;
  subTitle?: string;
  image: string;
  imageAlt: string;
  primaryLabel?: string;
  primaryCta?: string;
  secondaryLabel?: string;
  secondaryCta?: string;
}

const HeroHalf = ({
  title,
  subTitle,
  primaryLabel,
  image,
  imageAlt,
  primaryCta,
  secondaryLabel,
  secondaryCta,
}: IHeroHalf) => {
  return (
    <div className=" max-h-[600px] h-[600px]">
      <div className="relative h-[400px] overflow-hidden">
        <Image src={image} alt={imageAlt} fill className="object-cover" />

        <div className="absolute top-2/4 left-2/4">
          {title && <h2 className="">{title}</h2>}
          {subTitle && <p className="">{subTitle}</p>}
          <div className="flex justify-between">
            {primaryLabel && <Button>{primaryLabel} </Button>}
            {secondaryLabel && <Button>{primaryLabel} </Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHalf;
