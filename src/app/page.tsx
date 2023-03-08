import Button from "@/components/Button/Button";
// import Collection from "@/components/Collection/Collection";
// import Hero from "@/components/Hero/Hero";
// import HeroHalf from "@/components/HeroHalf/HeroHalf";
import React from "react";

const tempItems = [
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
  {
    id: 1,
    title: "adidas Men's Predator Precision.3 FG Cloud White/Pink",
    price: 112,
    image: "/tempImages/adidas-mens-predator.avif",
  },
];

const Home = () => {
  return (
    <div>
      {/* <Hero
        title="lorum ipsum dolor sit amet"
        text="lorum ipsum dolor sit amet dolor sit amet sit "
        primaryLabel="Shop Now"
        primaryCta="/shop"
        image="/man_simple.svg"
        imageAlt="man standing"
      /> */}
      {/* <Collection
        title="Latest Footwear"
        subTitle="View all"
        items={tempItems}
      /> */}

      {/* <HeroHalf
        title="Mercurial Lite"
        subTitle="Soft foam and a durable shell"
        image="/tempimages/nike-mercurial-lite-shin-guards.webp"
        imageAlt="nike mercurial lite shin guards"
        primaryLabel="Buy this"
        secondaryLabel="Buy Equipment"
      /> */}

      <div className="flex flex-col space-between  h-[600px] mt-10 ml-10">
        <p>Buttons</p>
        <div>
          <Button> Default </Button>
          <Button variant="primary"> Primary </Button>
          <Button variant="secondary"> Secondary </Button>
          <Button variant="accent"> Accent </Button>
          <Button variant="ghost"> Ghost </Button>
          <Button variant="info"> Info </Button>
          <Button variant="warning"> Warning </Button>
          <Button variant="success"> Success </Button>
          <Button variant="error"> Error </Button>
        </div>
        <p>Outlined</p>
        <div>
          <Button outlined> Default </Button>
          <Button variant="primary" outlined>
            Primary
          </Button>
          <Button variant="secondary" outlined>
            Secondary
          </Button>
          <Button variant="accent" outlined>
            Accent
          </Button>
          <Button variant="ghost" outlined>
            Ghost
          </Button>
          <Button variant="info" outlined>
            Info
          </Button>
          <Button variant="warning" outlined>
            Warning
          </Button>
          <Button variant="success" outlined>
            Success
          </Button>
          <Button variant="error" outlined>
            Error
          </Button>
        </div>
        <p>Sizes</p>
        <div>
          <Button size="tiny"> Primary </Button>
          <Button size="small"> Secondary </Button>
          <Button size="medium"> Accent </Button>
          <Button size="large"> Ghost </Button>
        </div>
        <p>Others</p>
        <div>
          <Button responsive> Responsive </Button>
          <Button wide> Wide </Button>
          <Button disabled> disabled </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
