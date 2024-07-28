import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Modal,
        Header,
        ModalDescription,
        ModalContent,
        ModalActions,
        Button,
        Image,
        Divider,
        Grid,
        GridRow,
        GridColumn,
        Icon,
        } from "semantic-ui-react";

import { decrease, increase , deleteItem } from "../../features/CartSlice";

function Cart({ open, onClose }) {

    const dispatch = useDispatch();
    
    const items = useSelector((state) => state.cart.CartArray)
    const [total,setTotal] = useState(0)

    useEffect(() => {
        let newTotal = 0;
        items.forEach(item => {
            newTotal += parseInt(item.price) * parseInt(item.amount);
        })
        setTotal(newTotal)
    },[items])



    return (
        <Modal
            centered={false}
            open={open}
            onClose={onClose}
        >
            <Header icon='cart' content='My Cart' />

            {items.length > 0 ? (           //Case 1 : There are Items in the cart
                <>
            <ModalContent>
                <ModalDescription>
                {items.map((item) => (
                    <Grid columns={4} >
                            <GridRow  key={item.id}>
                                <GridColumn width={9}>
                                    <div style={{display:"flex"}}>
                                        <Image src = {item.image} size="small"/>
                                        <h3 style={{padding:"20px"}}>{item.name}</h3>
                                    </div>
                                </GridColumn>
                                <GridColumn width={3}>
                                <div style={{display:"flex", alignItems:"right"}}>
                                <Button  size="mini"  style= {{margin:"50px 0px 0 44px", padding:"5px"}} onClick={()=>dispatch(increase({id :item.id}))}>+</Button>
                                <p  style= {{margin:"50px 2px 0 2px"}}>{item.amount}</p>
                                <Button  size="mini"  style= {{margin:"50px 0 0 0", padding:"5px"}} onClick={()=>dispatch(decrease({id :item.id}))}>-</Button>
                                </div>
                                </GridColumn>
                                <GridColumn width={2}>
                                <h3 style={{margin:"50px 0 0 0"}}>${item.price}.00</h3>
                                </GridColumn>
                                <GridColumn width={1}>
                                <Button icon="trash" negative style= {{margin:"50px 0 0 0"}} onClick={()=>dispatch(deleteItem({id :item.id}))}></Button>
                                </GridColumn>
                            </GridRow>

                    </Grid>
                    
       
 ))}
                </ModalDescription>
                <Divider/>
                <Grid columns={2}>
                    <GridColumn width={12}>
                      <h3 style={{margin:"20px 0 20px 40px"}}>Total: </h3>
                    </GridColumn>
                    <GridColumn width={1}>
                      <h3 style={{margin:"20px 0 0px 0"}}>${total}.00 </h3>
                    </GridColumn>
            </Grid>
            </ModalContent>
            <ModalActions>
            <Button
          content="Cancel"
          icon='close'
          negative
          onClick={onClose}
        />
            <Button icon labelPosition='right' primary>
                Proceed to payment
                <Icon name='right chevron' />
            </Button>
            </ModalActions>
            </>

):(
    <>
    <ModalContent>
        <h1 style={{textAlign:"center",margin:"100px"}}>Your Cart is Empty</h1>
      </ModalContent>
      <ModalActions>
        <Button onClick={onClose}>OK</Button>
      </ModalActions>
      </>
) }

        </Modal>
    );
}

export default Cart;

