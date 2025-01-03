import { Link } from "react-router-dom";

function HS(){

    return(

        <div className="h-screen bg-gray-200 mt-20">

         <h2 className="text-center font-semibold text-3xl text-green-500 p-4"> Humanities and Sciences </h2>

        <Link to="h&s"><img className="w-full min-h-screen" src="https://humanitiestas.wordpress.com/wp-content/uploads/2016/07/images-1.png" alt="H&S" /></Link>

        </div>
    )
}

export default HS;