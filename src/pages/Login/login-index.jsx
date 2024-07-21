import { useNavigate } from "react-router-dom"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../Firebase/firebase-config"

import "./index.css"

export const Login = () => {

    const navigate = useNavigate()
    const handle_SignIn = async () => {

        // const results = await signInWithPopup(auth,provider)
        // const authInfo = {
        //     userID: results.user.ID,
        //     name: results.user.displayName
        // }
        // localStorage.setItem("auth",JSON.stringify(authInfo))
        navigate("/Buyer")
    }
    

    return (
        <div className="container">
            <h1>So, we buying or selling?</h1>
            <form>
            <button className="Buyer" onClick={handle_SignIn} >Login with Google</button>
            </form>
        </div>
    )
}