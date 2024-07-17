import { Link } from "react-router-dom"

export const AddListing = () => {
    return (
        <div>
            <div>
                <form className="lisiting-form">
                    <label>Item Name:</label>
                    <input type="text" required placeholder="Item's name..."/>
                    <br />

                    <label>Price:</label>
                    <input type="text" required placeholder="Item's price..."/>
                    <br />

                    <button type="submit" className="submit-btn">List for sale</button>


                </form>

            <Link  to ="/Buyer" className="back-btn">Back?</Link>
            </div>
        </div>

        
    )
}