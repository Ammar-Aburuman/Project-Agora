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

import { addListingtoFirestore } from "../../../Firebase/firebase-actions";

function AddModal({open,onClose}){

    const dispatch = useDispatch();

    const user = useSelector((state) => state.name.name)
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [description,setDescription] = useState("");
    const [image,setImage] = useState(null);

    const handle_submit = async (e) => {
        e.preventDefault()

        let item = {
            name,price,user,description,image
        }

        try {
             await dispatch(addListingtoFirestore(item)) && onClose()
             
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
                    
                        <Form.Input  placeholder = "Item Name" value = {name} onChange={(e)=>{setName(e.target.value)}}/>
                        <Form.Input labelPosition="right" 
                                    type="text" 
                                    placeholder="Item Price" 
                                    value= {price} 
                                    onChange={(e)=>{setPrice(e.target.value)}} >

                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Form.Input>
                        <TextArea placeholder='Describe the item you are trying to sell...'
                                  style={{marginBottom: "20px"}}
                                  value={description} 
                                  onChange={(e)=>{setDescription(e.target.value)}} />
                    
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
        />
            </ModalActions>
            
        </Modal>
    )
}

export default AddModal;