import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Modal,
        ModalHeader,
        ModalContent,
        ModalActions,
        Header,
        Grid,
        Form,
        Button,
        Segment,
        Label,
        TextArea,
        Icon,
        Divider

} from "semantic-ui-react"
import { useFormik } from "formik";
import * as yup from "yup"

import { addListingtoFirestore } from "../../../../Firebase/firebase-actions";

function AddModal({open,onClose}){

    const dispatch = useDispatch();

    //user info to be assosiated with the listing
    const user = useSelector((state) => state.name.name);
    const user_photo = useSelector((state) => state.name.profilePhoto);

    const [image,setImage] = useState(null);
    const [submitted,setSubmitted] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            description:"",
        },

        validationSchema:yup.object({
            name: yup.string().required("Please enter a name for your item"),
            price:yup.number().required("Please add a price for your item"),
            description: yup.string().required("Enter a description for your item")
        }),
        
    })

    const handle_submit = async (e) => {
        e.preventDefault()

        let item = {
            ...formik.values, image,user,user_photo
        }

        try {
             setSubmitted(true);
             await dispatch(addListingtoFirestore(item));
             setSubmitted(false);
             onClose();
             
        }
        catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <Modal
            centered = {false}
            open = {open}
            onClose={onClose}
        >
            <ModalHeader>Add new lisiting</ModalHeader>
            <ModalContent>
            <Grid textAlign="center" style = {{height: "35vh"}} verticalAlign="top">
            <Grid.Column style= {{maxWidth:1000}}>
                <Header as="h1" color="blue" textAlign="left">
                    Fill out your item's info
                </Header>
                <Form size="large">
                    <Grid Grid columns={2} relaxed='very'>
                    <Grid.Column style= {{maxWidth:1000}} >

                        {formik.touched.name && formik.errors.name ? <label style={{color:"red"}}>{formik.errors.name}</label>: null}
                        <Form.Input name="name" placeholder = "Item Name" value= {formik.values.name} 
                                                               onChange={formik.handleChange}
                                                               onBlur= {formik.handleBlur}/>

                        {formik.touched.price && formik.errors.price ? <label style={{color:"red"}}>{formik.errors.price}</label>: null}
                        <Form.Input name="price" labelPosition="right" 
                                    type="text" 
                                    placeholder="Item Price" 
                                    value= {formik.values.price} 
                                    onChange={formik.handleChange} 
                                    onBlur= {formik.handleBlur} >

                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Form.Input>
                        {formik.touched.description && formik.errors.description ? <label style={{color:"red"}}>{formik.errors.description}</label>: null}
                        <TextArea placeholder='Describe the item you are trying to sell...'
                                  name="description"
                                  style={{marginBottom: "20px"}}
                                  value= {formik.values.description}
                                  onChange={formik.handleChange} 
                                  onBlur= {formik.handleBlur}
                                  />
                    
                    </Grid.Column>
                    <Grid.Column>
                    <Segment placeholder>
                        <Header icon>
                        <Icon name='file outline' />
                        You have not uploaded any photos for this item.
                        </Header>
                        <input type="file" onChange={(e) => {setImage(e.target.files[0])}} />
                    </Segment>
                    </Grid.Column>
                    </Grid>
                    <Divider vertical/>
                </Form>
            </Grid.Column>

        </Grid>
            </ModalContent>
            <ModalActions>
            <Button
          content="Cancel"
          labelPosition='right'
          icon='close'
          negative
          onClick={onClose}
        />
            <Button
          content="List Item"
          labelPosition='right'
          icon='plus'
          positive
          onClick={handle_submit}
          loading = {submitted}
        />
            </ModalActions>
            
        </Modal>
    )
}

export default AddModal;