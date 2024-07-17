import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { addListingtoFirestore } from "../../../Firebase/firebase-actions";


export const AddListing = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);

    const handle_submit = async (e) => {
        e.preventDefault()

        let item = {
            name,price
        }
        try {
             await dispatch(addListingtoFirestore(item))
             navigate("/buyer")
        }
        catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <div>
            <div>
                <form className="lisiting-form" onSubmit={handle_submit}>
                    <label>Item Name:</label>
                    <input type="text" required placeholder="Item's name..." value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <br />

                    <label>Price:</label>
                    <input type="text" required placeholder="Item's price..." value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    <br />

                    <button type="submit" className="submit-btn">List for sale</button>


                </form>

            <Link  to ="/Buyer" className="back-btn">Back?</Link>
            </div>
        </div>

        
    )
}