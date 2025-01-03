import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
// import  MultilevelDropdown from "../components/MultilevelDrop"

function Navbar({MultilevelDropdown}){

    const [isDropdown , setIsDropdown ] = useState(false);

    const [ isMultilevel , setIsMultilevel ] = useState(false);

    const hover = (e) => {
        
        if(!e.target.closest(".dropdown-container")){
            setIsDropdown(false);
        }
    };

    useEffect(() => {

        document.addEventListener("mousedown", hover);

        return() => {

            document.removeEventListener("mousedown", hover);
        }
    },[setIsMultilevel]);

    return(

        <div className="bg-blue-700 ">

           <div className="">
           <nav className=" fixed top-0 w-full flex mt-24  bg-blue-700 px-4 pt-3 justify-center pr-32">
                <ul className="flex space-x-4 px-4 text-white ">
                    <span className="hover:bg-gray-500 p-2 rounded-md cursor-pointer"> <Link to="/homepage">Home</Link></span>
                    <li className="p-2 relative dropdown-container group"
                     onMouseEnter={() => setIsDropdown(true)} onMouseLeave={() => setIsDropdown(false)}>
                        <span className="hover:bg-gray-400 p-2 rounded-md cursor-pointer"> <Link to="/about">About Us</Link></span>

                        {isDropdown && (
                            <ul className="absolute left-0 mt-2 w-40 bg-blue-500 text-black rounded-md cursor-pointer shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible p-2">
                                <li className="hover:bg-gray-200 p-1 mb-1 rounded-md cursor-pointer">
                                    <Link href="#">Vision and Mision </Link>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 rounded-md cursor-pointer">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to="/login"> Contact Us</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="hover:bg-gray-500 p-2 rounded-md relative dropdown-container group"  
                     onMouseEnter={() => setIsDropdown(true)} onMouseLeave={() => setIsDropdown(false)}>
                        <span className="hover:bg-gray-500 rounded-md cursor-pointer"> <Link to=" ">Academics</Link></span>

                        {isDropdown && (
                            <ul className="absolute left-0 mt-2 w-46 bg-blue-500 text-black rounded-md cursor-pointer shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible p-2">
                                <li className="hover:bg-gray-200 p-1 mb-1 rounded-md cursor-pointer">
                                    {/* <span className="mr-2 text-lg"> . </span> */}
                                    <a href="#">Courses Offered </a>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <a href="#"> Courses outcomes </a>
                                </li>
                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer w-44">
                                    {/* <span className="mr-2 text-lg"> . </span> */}
                                    <a href="#">Examination Branch </a>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer w-44">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <a href="#"> Academic Calenders </a>
                                </li>
                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                    {/* <span className="mr-2 text-lg"> . </span> */}
                                    <a href="#"> Student Feedback </a>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <a href="#"> Results </a>
                                </li>
                            </ul>
                        )}
                     </li>
                    <li className="hover:bg-gray-500 p-2 rounded-md   relative dropdown-container group"
                     onMouseEnter={() => setIsDropdown(true)} onMouseLeave={() => setIsDropdown(false)}>
                        <span className="cursor-pointer"> <Link to=" ">Departments</Link></span>

                        {isDropdown && (
                            <ul className="absolute left-0 mt-2 w-32 text-center bg-blue-500 text-black rounded-md cursor-pointer shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible p-2">
                                <li className="hover:bg-gray-200 p-1 mb-1 rounded-md cursor-pointer">
                                    {/* <span className="mr-2 text-lg"> . </span> */}
                                    <Link to="cse">CSE </Link>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to="ece"> ECE </Link>
                                </li>
                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer ">
                                    {/* <span className="mr-2 text-lg"> . </span> */}
                                    <Link to="eee">EEE </Link>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer ">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to="civil"> Civil </Link>
                                </li>
                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                    {/* <span className="mr-2 text-lg"> . </span> */}
                                    <Link to="mech"> Mechanical </Link>
                                </li>

                                

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to="eie"> EIE </Link>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer ">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to="it"> IT </Link>
                                </li>
                               

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to="h&s"> H&S </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="hover:bg-gray-500 p-2  rounded-md cursor-pointer relative dropdown-container group"
                    onMouseEnter={() =>setIsDropdown(true)} onMouseLeave={() => setIsDropdown(false)}
                     >
                        <span><Link to=" ">Infrastructure</Link></span>

                        {isDropdown && (
                            <ul className="absolute left-0 mt-2 w-50 bg-blue-500 text-black rounded-md cursor-pointer shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible p-2">
                                <li className="hover:bg-gray-200 p-1 mb-1 rounded-md cursor-pointer">
                                    <Link to="">Campus </Link>
                            </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to=""> Library </Link>
                                </li>
                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer ">
                                    <Link to="">Sports </Link>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer w-48 ">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to=""> Computing Infrastructure </Link>
                                </li>
                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer">
                                    <Link to=""> Labs </Link>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mb-1 rounded-md cursor-pointer">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to=""> Hostel </Link>
                                </li>

                                <li className="border-t border-gray-300"></li>
                                <li className="hover:bg-gray-200 p-1 mt-1 mb-1 rounded-md cursor-pointer ">
                                {/* <span className="mr-2 text-lg mb-3 h-10">.</span> */}
                                    <Link to=""> Student Centre </Link>
                                </li>
                    
                            </ul>
                        )}
                    </li>
                    <li className="hover:bg-gray-500 p-2 rounded-md cursor-pointer">
                        <span><Link>Alumni</Link></span>
                        
                    </li>
                    
                   <div>{MultilevelDropdown}</div>
                    
                    <li className="hover:bg-gray-500 p-2 rounded-md cursor-pointer" onMouseEnter={() => setIsDropdown(true)} onMouseLeave={() => setIsDropdown(false)}>
                        <span> <Link>Contact Us</Link></span>

                        
                    </li>
                </ul>
            </nav>
           </div>

        </div>
    )
}

export default Navbar;