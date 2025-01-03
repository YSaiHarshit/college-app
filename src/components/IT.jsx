import { Link } from "react-router-dom";

function IT(){

    return(

        <div className="h-screen mt-20">

         <h2 className="text-center text-3xl font-semibold text-green-500 p-4"> Information Technology </h2>

        <Link to="it"><img className="w-full min-h-screen" src="https://www.tipsforcareer.in/images/mba-information-technology.jpg" alt="it" /></Link>

        </div>
    )
}

export default IT;