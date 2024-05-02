import React from "react";
import { Button, Image, Link } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";
import { Rating } from "./Rating";

export function ProductCard({ product, index }) {
  const baseImgUrl =
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes";

  return (
    <div className="relative flex w-64 max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium snap-start">
      <div className="flex flex-col items-stretch gap-4 h-full">
        <Button
          size="sm"
          isIconOnly
          className="absolute right-6 top-6 z-20 rounded-full"
        >
          <FaStar
            className={
              product.isInWishlist ? "text-warning-500" : "text-default-500"
            }
          />
        </Button>
        <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
          <Image
            alt={product.title}
            src={`${baseImgUrl}/${index + 1}.png`}
            className="z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-125"
            removeWrapper
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <Link href="#" color="foreground">
              <h3 className="text-medium font-medium text-default-700">
                {product.title}
              </h3>
            </Link>
            <p className="text-medium font-medium text-default-500">
              {product.price}
            </p>
          </div>
          <p className="text-small text-default-500">{product.description}</p>
          <Rating rating={product.rating} peoplerated={product.peopleRated} />
          <div className="flex gap-2">
            <Button
              color={product.isAddedToCart ? "default" : "primary"}
              fullWidth
            >
              {product.isAddedToCart ? "View Cart" : "Add To Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
