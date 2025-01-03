import { Link } from "react-router-dom";

function Ece(){

    return(

        <div className="min-h-screen mt-20">
                      <h2 className="text-center text-3xl font-semibold text-blue-500 p-4">Electronics And Communication Engineering</h2>

            <Link to='/ece'><img className="w-full max-h-screen" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_300/https://www.iimtindia.net/Blog/wp-content/uploads/2021/05/ece_article.jpg" alt="" /></Link>
        </div>
    )
}

export default Ece;