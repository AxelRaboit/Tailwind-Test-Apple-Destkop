import React from "react";
import {
    AiFillApple,
    AiOutlineSearch,
    AiOutlineShopping,
} from "react-icons/ai";

const Nav = () => {
    return (
        <nav className="py-5 bg-black">
            <div className="max-w-5xl mx-auto">
                <ul className="flex justify-start items-center h-full">
                    <li className="text-gray-300 pr-2">
                        <AiFillApple className="h-7 w-7" />
                    </li>
                    <li className="text-gray-300 px-2">Store</li>
                    <li className="text-gray-300 px-2">Mac</li>
                    <li className="text-gray-300 px-2">iPad</li>
                    <li className="text-gray-300 px-2">iPhone</li>
                    <li className="text-gray-300 px-2">Watch</li>
                    <li className="text-gray-300 px-2">AirPods</li>
                    <li className="text-gray-300 px-2">TV & Maison</li>
                    <li className="text-gray-300 px-2">Exclusivités Apple</li>
                    <li className="text-gray-300 px-2">Accessoires</li>
                    <li className="text-gray-300 px-2">Assistance</li>
                    <li className="text-gray-300 px-2">
                        <AiOutlineSearch className="h-7 w-7" />
                    </li>
                    <li className="text-gray-300 px-2">
                        <AiOutlineShopping className="h-7 w-7" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
