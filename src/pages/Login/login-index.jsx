import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../Firebase/firebase-config"
import { Grid,Header,Image,Form,Segment,Button,Icon,Divider} from "semantic-ui-react"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import * as yup from "yup"


import logo from "./Logomark_Monochrome_Black.svg"
import ModalMsg from "./modal_msg"

import { login_user } from "./features/nameSlice"


export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: yup.object({
            email : yup.string().email("Please Enter a valid Email address").required("You need an email address to sign in"),
            password: yup.string().required("Please enter a password")
        }),

        onSubmit: (values) => {
            console.log(values);
        },

    })

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
        <Grid textAlign="center" style ={{height: "70vh"}} verticalAlign="middle" >
            <Grid.Column style = {{maxWidth: 400}}>
                <Header as="h2" color= "blue" textAlign="center">
                    <Image src ={logo} style = {{width : 150}} />
                </Header>
                <Header as="h2" textAlign="center">Log in to Firebase Marketplace</Header>


                <Form onSubmit={formik.handleSubmit} size="large">
                    <Segment raised>
                        <Button fluid color="blue" style={{fontSize: "16px", margin:"6px 0 0 0"}}>
                            <Icon name="twitter" />
                            Login with Twitter</Button>
                        <Button fluid color="red" style={{fontSize: "16px", margin:"6px 0 0 0"}} onClick={handle_SignIn}>
                            <Icon name="google"/>
                            Login with Google</Button>
                        <Button fluid color="grey" style={{fontSize: "16px", margin:"6px 0 0 0"}}>
                            <Icon name="apple"/>
                            Login with Apple</Button>

                        <Divider/>

                        <label style={{float:"left"}}>Email:</label>
                        {formik.touched.email && formik.errors.email ? <label style={{color:"red"}}>{formik.errors.email}</label> : null}
                        <Form.Input fluid icon="user" iconPosition="left" placeholder= "Enter your email address" name="email" value= {formik.values.email} onChange={formik.handleChange} onBlur= {formik.handleBlur}/>

                        <label style={{float:"left"}}>Password:</label>
                        {formik.touched.password && formik.errors.password ? <label style={{color:"red"}}>{formik.errors.password}</label> : null}
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder= "Enter your password" name="password" type="password" value= {formik.values.password} onChange={formik.handleChange} onBlur = {formik.handleBlur}/>

                        <Button type="submit" color="blue" style={{margin:"6px 0 6px 0"}} onClick={openModel}>
                            <Icon name="sign-in"/>
                            Login with Email</Button>
                        <ModalMsg open={open} onClose={closeModel} />

                        <div>
                            <label style={{color:"#5b5b5b"}}>Don't have an account? </label>
                            <a href="/">Sign Up</a>
                        </div>


                    </Segment>
                </Form>
                <span >© Ammar Aburuman </span>
            </Grid.Column>
        </Grid>
    )
}