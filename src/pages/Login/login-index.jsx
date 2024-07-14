import { useNavigate } from "react-router-dom"


import "./index.css"

export const Login = () => {

    const navigate = useNavigate()

    return (
        <div className="container">
            <h1>So, we buying or selling?</h1>
            <form>
            <button className="Buyer" onClick={() => navigate("/Buyer")} >Buying</button>
            <button className="Seller" onClick={() => navigate("/Seller")} >Selling</button>
            </form>
        </div>
    )
}