import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../Firebase/firebase-config"

import { Grid,Header,Image,Form,Segment,Button,Icon,Divider} from "semantic-ui-react"
import logo from "./Firebase_Logo.png"
import { useDispatch } from "react-redux"

import ModalMsg from "./modal_msg"

import { login_user } from "./features/nameSlice"

export const Login = () => {

    const [open, setOpen] = useState(false);

    const openModel = () => setOpen(true);
    const closeModel = () => setOpen(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handle_SignIn = async () => {

        const results = await signInWithPopup(auth,provider)
        const authInfo = {
            userID: results.user.ID,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,

            
        }
        localStorage.setItem("auth",JSON.stringify(authInfo))
        dispatch(login_user(authInfo));
        navigate("/Buyer")
    }
    

    return (
        <Grid textAlign="center" style ={{height: "100vh"}} verticalAlign="middle" >
            <Grid.Column style = {{maxWidth: 450}}>
                <Header as="h2" color= "blue" textAlign="center">
                    <Image src ={logo} /> Login to "Generic Market Place"
                </Header>
                <Form size="large">
                    <Segment raised>

                        <Form.Input fluid icon="user" iconPosition="left" placeholder= "Email Address"/>
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder= "Password" type="password"/>

                        <Button type="submit" color="green" onClick={openModel}>
                            <Icon name="sign-in" />
                            Login
                        </Button>
                        <Button color="blue" onClick={openModel}>
                            <Icon name="user plus" />
                            Sign up
                        </Button>
                        <ModalMsg open={open} onClose={closeModel} />

                        <Divider horizontal>Or</Divider>

                        <Button type="submit" color="red" onClick={handle_SignIn}>
                            <Icon name="google" />
                            Login with Google
                        </Button>
                        
                    </Segment>
                </Form>
                <span >© Ammar Aburuman </span>
            </Grid.Column>
        </Grid>
    )
}