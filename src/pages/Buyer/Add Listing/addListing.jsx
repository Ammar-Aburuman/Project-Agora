import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { addListingtoFirestore } from "../../../Firebase/firebase-actions";
import { Grid,Header,Form, Segment, Divider, Label, TextArea, Button, Icon } from "semantic-ui-react";


export const AddListing = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);

    const handle_submit = async (e) => {
        e.preventDefault()

        let item = {
            name,price
        }
        try {
             await dispatch(addListingtoFirestore(item))
             navigate("/buyer")
        }
        catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <Grid textAlign="center" style = {{height: "70vh"}} verticalAlign="middle">
            <Grid.Column style= {{maxWidth:1000}}>
                <Header as="h1" color="blue" textAlign="center">
                    Add your item to the marketplace
                </Header>
                <Form size="large">
                    <Grid Grid columns={2} relaxed='very'>
                    <Grid.Column>
                    <Segment raised>
                        <Form.Input  placeholder = "Item Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <Form.Input labelPosition="right" type="text" placeholder="Item Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Form.Input>
                        <TextArea placeholder='Describe the item you are trying to sell...' style={{marginBottom: "20px"}}/>
                        <Button color="red" onClick={()=>navigate("/buyer")}>
                            <Icon name="chevron left"/>Back</Button>
                        <Button color="blue" type="submit" onClick={handle_submit}>List Item</Button>
                    </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        Hello
                    </Grid.Column>
                    </Grid>
                    <Divider vertical/>
                </Form>
            </Grid.Column>

        </Grid>

        
    )
}