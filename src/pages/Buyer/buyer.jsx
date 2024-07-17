import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export const Buyer = () => {

    const navigate = useNavigate();

    return (
        
        <>
        <div>
            <div className="navbar">
                <h3>Hello <span className="loggedIn_User">USERNAME_PLACEHOLDER</span> </h3>
                <button onClick={()=>navigate("/list")}>Add listing?</button>
                <Link to ="/">Logout?</Link>
                 
             </div>
             <br />                                  { /*should be removed by an actual border */}
             <div className="main-pg">
                <h2>listings: </h2>
                <ul>
                    <li>placeholder sold for placeholder$ by placeholder</li>
                    <br />
                    <li>placeholder sold for placeholder$ by placeholder</li>
                </ul>
             </div>
        </div>
        </>
    )
    
}