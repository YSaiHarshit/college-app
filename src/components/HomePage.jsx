import { Link } from "react-router-dom"

function HomePage() {

    return(

        <div className="h-screen ">
            <Link to="/college" > <img className="min-h-screen w-full" src="https://static.zollege.in/public/college_data/images/campusimage/1624943774DSC00677.jpg" alt="" />
            </Link>
            <Link><img src="" alt="" /></Link>

            
        </div>
    )
}

export default HomePage;