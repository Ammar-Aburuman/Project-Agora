import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { addListingtoFirestore } from "../../../Firebase/firebase-actions";


export const AddListing = () => {

    const dispatch = useDispatch();

    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);

    const handle_submit = (e) => {
        e.preventDefault();

        let item = {
            name,price
        }
        dispatch(addListingtoFirestore(item))
    }

    return (
        <div>
            <div>
                <form className="lisiting-form" onClick={handle_submit}>
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