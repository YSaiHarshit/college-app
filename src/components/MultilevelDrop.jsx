import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function MultilevelDropdown() {

    const [isDropdown, setIsDropdown] = useState(false);
    
    const hover = (e) => {

        if (!e.target.closest(".dropdown-container")) {
            setIsDropdown(false);
        }
    };

    useEffect(() => {

        document.addEventListener("mousedown", hover);

        return () => {

            document.removeEventListener("mousedown", hover);
        }
    }, []);


    return (

        <div className="bg-blue-700 ">

            <nav className="  bg-blue-700">
                <ul className=" space-x-4  text-white ">

                    <li className="hover:bg-gray-500 p-2  rounded-md cursor-pointer relative dropdown-container group"
                        onMouseEnter={() => setIsDropdown(true)} onMouseLeave={() => setIsDropdown(false)}
                    >
                        <span> <Link>More</Link></span>

                        {isDropdown && (
                            <ul className="absolute left-0 mt-2 w-50 bg-blue-500 text-black rounded-md cursor-pointer shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible p-2">
                                <li className="hover:bg-gray-200 p-1 mb-1 rounded-md cursor-pointer relative dropdown-container group">
                                    <a href="#"> EDC/ IIC </a>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                    <a href="#"> Media </a>
                                </li>
                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer ">
                                    <a href="#">Chapters </a>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer w-48 ">
                                    <a href="#"> Arts & Culture Clubs </a>
                                </li>

                            </ul>
                        )}
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default MultilevelDropdown;