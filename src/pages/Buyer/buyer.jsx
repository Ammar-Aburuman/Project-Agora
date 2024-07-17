import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { fetchItems } from "../../Firebase/firebase-actions";

export const Buyer = () => {

    const navigate = useNavigate();
    const listings = useSelector((state) => state.listings.listingsArray);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems());
    },[dispatch])


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
                {listings.length > 0 ? (
                    <>
                    {listings.map((item) => (
                        <div key={item.id}>
                            <ul>
                                  <li>{item.item.name} selling for ${item.item.price}</li>
                                 
                                 <li>By USER_PLACEHOLDER</li>
                                 <br />
                            </ul>
                        </div>
                    ))}
                    </>
                ): (
                    <div>There are no Listings</div>
                )}
             </div>
        </div>
        </>
    )
    
}