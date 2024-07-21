import { useNavigate } from "react-router-dom"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../Firebase/firebase-config"

import { Grid,Header,Image,Form,Segment,Button,Icon,Divider} from "semantic-ui-react"
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
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder= "Password" type="password"/>

                        <Button type="Submit" color="green">
                            <Icon name="sign-in" />
                            Login
                        </Button>
                        <Button color="blue">
                            <Icon name="user plus" />
                            Sign up
                        </Button>

                        <Divider horizontal>Or</Divider>

                        <Button type="Submit" color="red" onClick={handle_SignIn}>
                            <Icon name="google" />
                            Login with Google
                        </Button>
                        
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}