import { Link } from "react-router-dom";

function Civil(){

    return(

        <div className="h-screen mt-24">

         <h2 className="text-center font-semibold text-3xl text-green-500 p-4"> Civil Engineering</h2>

        <Link to="/civil"><img className="w-full min-h-screen" src="https://www.build-review.com/wp-content/uploads/2021/03/Civil-engineers.jpg" alt="civil" /></Link>

        </div>
    )
}

export default Civil;