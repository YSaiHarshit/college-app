import { Link } from "react-router-dom";

function EIE(){

    return(

        <div className="h-screen mt-20">

         <h2 className="text-center font-semibold text-3xl text-green-500 p-2"> Electronics And Instrumentation Engineering</h2>

        <Link to="/eie"><img className="w-full min-h-screen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZjrzOO6t3NbWyPX3UP60wMVzXJK1CUoLzlJauS203fEENduhhOQD6JC-H9nYnAoTSk4&usqp=CAU" alt="eie" /></Link>

        </div>
    )
}

export default EIE;