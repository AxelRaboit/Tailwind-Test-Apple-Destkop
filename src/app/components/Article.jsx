import React from "react";
import Image from "next/image";
import Dots from "./Dots";

const Article = ({ title, price, isNew }) => {
    return (
        <div className="border-b border-r border-gray-300 text-center p-4">
            <div className="aspect-square">
                <Image
                    src="/assets/iphone.jpg"
                    width={300}
                    height={300}
                    alt="iphone"
                    className="w-full h-full object-center object-cover"
                    priority={true}
                />
            </div>
            <div className="pt-10 pb-4 px-10">
                {isNew && (
                    <p className="text-xs font-light text-orange-500">New</p>
                )}
                <p className="text-base text-gray-900 mt-3">{price} €</p>
                <h3 className="text-md font-light text-gray-700">{title}</h3>

                <div className="flex justify-center space-x-2 mt-4">
                    <Dots bgColor="bg-blue-900" />
                    <Dots bgColor="bg-red-500" />
                    <Dots bgColor="bg-neutral-900" />
                    <Dots bgColor="bg-gray-500" />
                </div>

                <button className="bg-black text-white text-xs font-medium px-4 py-2 rounded-full mt-4">
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
};

export default Article;
