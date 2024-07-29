import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../Firebase/firebase-actions";
import { v4 } from "uuid";
import { Header,
         Icon,
        Segment,
        Button,
        ButtonContent,
        IconGroup,
        Grid,
        Container,
        Image,
        Card,
        CardContent,
        CardDescription, } from "semantic-ui-react";


import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { add_item } from "./features/CartSlice";
import AddModal from "./Navbar/Modals/addModal";
import Navbar from "./Navbar/Navbar";

// import Placeholder_image from "./Placeholder_view_vector.svg.png";

export const Buyer = () => {

    const dispatch = useDispatch();


    const handleAddToCart = (name,price,image) => {
      let id = v4();
        let item = {
            name,price,image,id
        }
        dispatch(add_item(item));
        console.log(item.name,"Added to cart")
        const addMsg = () => toast.success(item.name + "Added to cart")
        addMsg()
    }

    const [open,setOpen] = useState(false);

    const openModel_add = () =>setOpen(true);
    const closeModel_add = () => setOpen(false);

    const listings = useSelector((state) => state.listings.listingsArray);

    // const userName = useSelector((state) => state.name.name)

    useEffect(() => {
        dispatch(fetchItems());
    },[dispatch])


    return ( 
        <>
    <div>   
        <Navbar />


        {listings.length > 0 ? (
            <>

        <Header style={{padding:10}}>Lisitings: </Header>

        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px"}}>

        {listings.map((listing) => (
        <div key={listing.id} style={{padding:20}}>
        <Card style={{maxWidth:"180px"}} >
          <CardContent>
          <Image src={listing.item.imageLink} size="small" style ={{width: "150px" , height: "200px"}} />
            <Card.Header>{listing.item.name}</Card.Header>
            <Card.Meta>Sold by <a href="/buyer">{listing.item.user}</a> </Card.Meta>
            <CardDescription>{listing.item.description.length > 21 ? (
                listing.item.description.slice(0,21) + "...") : listing.item.description
            }
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <label style={{color:"blue", fontSize:"17px"}}>${listing.item.price}.00</label>
            <Button floated="right" color="blue" animated = "vertical" onClick={()=> handleAddToCart(listing.item.name,listing.item.price,listing.item.imageLink)}>
                <ButtonContent hidden>Add</ButtonContent>
                <ButtonContent visible>
                    <Icon name="cart"/>
                </ButtonContent>
                
            </Button>
          </CardContent>
        </Card>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          />
            
        </div>
       
 ))}
 </div>
 </>
): (


    <div style={{ height: '100vh' }}>
    <Grid 
      textAlign='center' 
      verticalAlign='middle' 
      style={{ height: '50%' }}
    >
      <Grid.Column>
        <Container>
          <Segment>There are no listings on this site yet. Would you like to add the first?
            <br />
            <br />
            <Button onClick={openModel_add}>
                <IconGroup size="large">
                    <Icon name="file" />
                    <Icon corner name="plus" />
                </IconGroup>   
            </Button>
            <AddModal open={open} onClose={closeModel_add}/>
          </Segment>
          
        </Container>
      </Grid.Column>
    </Grid>
  </div>
)}


    </div>
    </>
        )
        
        }
 