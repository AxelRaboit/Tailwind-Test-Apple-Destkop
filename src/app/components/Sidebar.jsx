import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Sidebar = () => {
    return (
        <ul className="block w-1/5 divide-y text-sm font-medium pr-8 pt-8 sticky top-14 self-start">
            <li className="py-3 pr-2 flex justify-between items-center">
                Type de produit <AiOutlinePlus className="h-3 w-3 text-gray-400" />
            </li>
            <li className="py-3 pr-2 flex justify-between items-center">
                Compatibilité avec l'ipad <AiOutlinePlus className="h-3 w-3 text-gray-400" />
            </li>
            <li className="py-3 pr-2 flex justify-between items-center">
                Compatibilité avec l'iphone{" "}
                <AiOutlinePlus className="h-3 w-3 text-gray-400" />
            </li>
        </ul>
    );
};

export default Sidebar;
