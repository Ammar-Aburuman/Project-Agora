import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems } from "../../Firebase/firebase-actions";

import { Header,HeaderSubheader, Icon, Segment,Button,IconGroup, Item, Grid, Container, Image } from "semantic-ui-react";
import AddModal from "./Add Listing/addModal";
import SignoutMsg from "./SignoutModal";

// import Placeholder_image from "./Placeholder_view_vector.svg.png";

export const Buyer = () => {

    const [open,setOpen] = useState(false);
    const [openSign,setOpenSign] = useState(false);

    const openModel_add = () =>setOpen(true);
    const closeModel_add = () => setOpen(false);

    const openModel_sign = () =>setOpenSign(true);
    const closeModel_sign = () => setOpenSign(false);

    const listings = useSelector((state) => state.listings.listingsArray);
    const dispatch = useDispatch();

    const userName = useSelector((state) => state.name.name)

    useEffect(() => {
        dispatch(fetchItems());
    },[dispatch])


    return ( 
        <>
    <div>
            <Segment clearing>
            <Header as="h3" floated="left">
                Hello 
                <span class="ui header blue">  {userName}</span>
                <HeaderSubheader>
                    <Link onClick={openModel_sign}> Signout
                     <Icon name="sign-in" />
                    </Link>
                    <SignoutMsg open={openSign} onClose={closeModel_sign}/>
                </HeaderSubheader>
            </Header>
            <Header as="h3" floated="right">
            <Button onClick={openModel_add}>
                <IconGroup size="large">
                    <Icon name="file" />
                    <Icon corner name="plus" />
                </IconGroup>   
            </Button>
            <AddModal open={open} onClose={closeModel_add}/>
            </Header>
            </Segment>


        {listings.length > 0 ? (
            <>
        <Header>Lisitings: </Header>
        {listings.map((listing) => (
        <div  key={listing.id} style={{padding:20}}>
        <Item>
          <Item.Image src={listing.item.imageLink} size="small" />
          <Item.Content>
            <Item.Header as='a'>{listing.item.name}</Item.Header>
            <Item.Description>
              {listing.item.description}
            </Item.Description>
            <Item.Meta>
              <span class = "ui header green">${listing.item.price} &emsp;</span> 
              <span> Post Date</span>                                                      {/* Need to add timestamp for post*/}
            </Item.Meta>
            <Item.Extra>
              <Image avatar circular src={listing.item.user_photo} floated='left'/>
              {listing.item.user} &emsp; 
              <Button primary>
                Add to cart
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
   
        </div>
       
 ))}
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
 