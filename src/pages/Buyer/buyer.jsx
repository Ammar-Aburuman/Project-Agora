import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../Firebase/firebase-actions";

import { Header,
         Icon,
        Segment,
        Button,
        ButtonContent,
        IconGroup,
        Grid,
        Container,
        Image,
        Menu,
        Input,
        Card,
        CardContent,
        CardDescription, } from "semantic-ui-react";

import { add_item } from "./features/CartSlice";
import AddModal from "./Add Listing/addModal";
import SignoutMsg from "./SignoutModal";

import logo from "./Logomark_Monochrome_Black.svg"

// import Placeholder_image from "./Placeholder_view_vector.svg.png";

export const Buyer = () => {

    const dispatch = useDispatch();

    const user_photo = useSelector((state) => state.name.profilePhoto);

    const [activeMenuItem,setActiveMenuItem] = useState("home")
    const handlItemClick = (e, {name}) =>
         { e.preventDefault()
            setActiveMenuItem(name) && console.log(activeMenuItem)}

    const handleAddToCart = (name,price,image) => {
        let item = {
            name,price,image
        }
        dispatch(add_item(item));
        console.log(item.name," Added to cart")
    }

    const [open,setOpen] = useState(false);
    const [openSign,setOpenSign] = useState(false);

    const openModel_add = () =>setOpen(true);
    const closeModel_add = () => setOpen(false);

    const openModel_sign = () =>setOpenSign(true);
    const closeModel_sign = () => setOpenSign(false);

    const listings = useSelector((state) => state.listings.listingsArray);

    const userName = useSelector((state) => state.name.name)

    useEffect(() => {
        dispatch(fetchItems());
    },[dispatch])


    return ( 
        <>
    <div>

            <Segment attached size ="mini">
                <Menu secondary>
                    <Menu.Item name="logo">
                        <img src={logo} active= {activeMenuItem === "logo"} onClick={handlItemClick}/>
                    </Menu.Item>

                    <Menu.Item>
                        <Input type="text" icon="search" iconPosition="left" placeholder= "Search..." name="search" />
                    </Menu.Item>
                    
                    <Menu.Item name="home" active={activeMenuItem === "home"} onClick={handlItemClick} />
                    <Menu.Item name="products" active={activeMenuItem === "product"} onClick={handlItemClick} />
                    <Menu.Item name="contact us" active={activeMenuItem === "contact us"} onClick={handlItemClick}/>
                    
                    <Menu.Item active ={activeMenuItem === "bell"} position="right" onClick={handlItemClick} >
                        <Icon name="bell outline" size="large"/>
                    </Menu.Item>

                    <Menu.Item active ={activeMenuItem === "chat"} onClick={handlItemClick} >
                        <Icon name="comment outline" size="large"/>
                    </Menu.Item>

                    <Menu.Item active ={activeMenuItem === "cart"} onClick={()=>handlItemClick}>
                        <Icon name="shopping cart" size="large"/>
                    </Menu.Item>

                    <Menu.Item active ={activeMenuItem === "profile"} onClick={handlItemClick}>
                        <Image src = {user_photo} size="mini" avatar />
                    </Menu.Item>
                    
                    {activeMenuItem === "profile" ? <p>wew</p> : null}

                </Menu>
                {/* <Link onClick={openModel_sign}> Signout
                <Icon name="sign-in" />
                </Link>
                <SignoutMsg open={openSign} onClose={closeModel_sign}/> */}
            </Segment>

            {/* <Button onClick={openModel_add}>
                <IconGroup size="large">
                    <Icon name="file" />
                    <Icon corner name="plus" />
                </IconGroup>   
            </Button>
            <AddModal open={open} onClose={closeModel_add}/> */}
     
            {/* <Segment clearing>
            <Header as="h3" floated="left">
                Hello 
                <span class="ui header blue">  {userName}</span>
                <HeaderSubheader>
                </HeaderSubheader>
            </Header>
            <Header as="h3" floated="right">
            </Header>
            </Segment> */}


        {listings.length > 0 ? (
            <>

        <Header style={{padding:10}}>Lisitings: </Header>

        <div style={{display:"flex", maxWidth:"20px"}}>

        {listings.map((listing) => (
        <div key={listing.id} style={{padding:20}}>
        <Card style={{maxWidth:"180px"}} >
          <CardContent>
          <Image src={listing.item.imageLink} size="small" fluid />
            <Card.Header>{listing.item.name}</Card.Header>
            <Card.Meta>Sold by <a href="/buyer">{listing.item.user}</a> </Card.Meta>
            <CardDescription>{listing.item.description}</CardDescription>
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
 