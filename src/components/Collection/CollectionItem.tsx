"use client";

import { IProduct } from "./Collection";
import Image from "next/image";
import { useState } from "react";

const CollectionItem = ({ title, image, id, price }: IProduct) => {
  const [wishlist, setWishlist] = useState(false);

  return (
    <div className="max-w-[256px] mx-4">
      <div className="flex flex-col">
        {wishlist ? (
          <Image
            src="/icons/heart-solid.svg"
            alt="Remove from Wishlist"
            width={24}
            height={24}
            onClick={() => setWishlist(false)}
            className="absolute self-end"
          />
        ) : (
          <Image
            src="/icons/heart-regular.svg"
            alt="Add to Wishlist"
            width={24}
            height={24}
            onClick={() => setWishlist(true)}
            className="self-end absolute"
          />
        )}
        <Image src={image} alt={title} width={256} height={200} />
      </div>
      <p>{title}</p>
      <p>€{price}</p>
    </div>
  );
};

export default CollectionItem;
