import { useNavigate } from "react-router-dom"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../Firebase/firebase-config"

import { Grid,Header,Image,Form,Segment,Button,Icon} from "semantic-ui-react"
import logo from "./Firebase_Logo.png"

// import "./index.css"

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
        <Grid textAlign="center" style ={{height: "100vh"}} verticalAlign="middle" >
            <Grid.Column style = {{maxWidth: 450}}>
                <Header as="h2" color= "blue" textAlign="center">
                    <Image src ={logo} /> Login to "Generic Market Place"
                </Header>
                <Form size="large">
                    <Segment raised>

                        <Form.Input fluid icon="user" iconPosition="left" placeholder= "Email Address"/>
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder= "Password" type="passowrd"/>

                        <Button type="Submit" color="green">
                            <Icon name="key" />
                            Login
                        </Button>
                        <Button type="Submit" color="blue">
                            <Icon name="user outline" />
                            Sign up
                        </Button>
                        
                    </Segment>
                    <Button type="Submit" color="red" onClick={handle_SignIn}>
                            <Icon name="google" />
                            Login with Google
                        </Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}