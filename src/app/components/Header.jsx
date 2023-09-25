import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    return (
        <>
            <Nav />

            <div className="h-14 max-w-5xl mx-auto flex justify-between items-center">
                <h3 className="text-xl font-medium text-black">Accessoires</h3>
                <Link href="#" className="text-xs text-black">
                    Tout parcourir
                </Link>
            </div>

            <div className="bg-gray-100 border-t border-gray-300">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl py-10">Coques et protections</h1>
                </div>
            </div>

            <div className="h-14 border-t border-b border-gray-300 text-gray-400 text-xs sticky top-0 bg-white">
                <div className="max-w-8xl mx-auto h-full flex justify-between items-center">
                    <div className="flex space-x-1">
                        <RxHamburgerMenu className="h-4 w-4" />
                        <span>Filtre</span>
                    </div>
                    <div className="flex space-x-1">
                        <span>
                            Trier par{" "}
                            <span className="text-black">Sélection</span>
                        </span>
                        <MdKeyboardArrowDown className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
