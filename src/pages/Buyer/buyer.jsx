
import { useNavigate } from "react-router-dom"

export const Buyer = () => {

    const navigate = useNavigate();

    return (
        
        <>
        <div>
            <div className="navbar">
                <h3>Hello <span className="userName">USERNAME_PLACEHOLDER</span> </h3>
                <button onClick={()=>navigate("/list")}>Add listing?</button>
             </div>
             <br />                                  { /*should be removed by an actual border */}
             <div className="main-pg">
                <h2>listings: </h2>
             </div>
        </div>
        </>
    )
    
}