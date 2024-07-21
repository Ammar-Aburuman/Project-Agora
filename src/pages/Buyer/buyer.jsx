import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { fetchItems } from "../../Firebase/firebase-actions";

import { Header,HeaderSubheader, Icon, Segment,Button,IconGroup, Item, Grid, Container, Image } from "semantic-ui-react";

import Placeholder_image from "./Placeholder_view_vector.svg.png";

export const Buyer = () => {

    const navigate = useNavigate();
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
                    <Link to ="/"> Signout
                     <Icon name="sign-in" />
                    </Link>
                </HeaderSubheader>
            </Header>
            <Header as="h3" floated="right">
            <Button onClick={()=>navigate("/list")}>
                <IconGroup size="large">
                    <Icon name="upload" />
                    <Icon corner name="plus" />
                </IconGroup>   
            </Button>
            </Header>
            </Segment>

        {listings.length > 0 ? (
            <>
        <Header>Lisitings: </Header>
        {listings.map((item) => (
        <div  key={item.id} style={{padding:20}}>
        <Item>
          <Item.Image src={Placeholder_image} size="small" />
          <Item.Content>
            <Item.Header as='a'>{item.item.name}</Item.Header>
            <Item.Description>
              {item.item.description}
            </Item.Description>
            <Item.Meta>
              <span>${item.item.price} &emsp;</span>
              <span> Post Date</span>
            </Item.Meta>
            <Item.Extra>
              <Image avatar circular src={Placeholder_image} floated='left'/>
              {item.item.user} &emsp; 
              <Button primary>
                Add to cart
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
   
        </div>
       
 ))};;
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
          <Button size="tiny" onClick={()=>navigate("/list")}>
                <IconGroup size="large">
                    <Icon name="upload" />
                    <Icon corner name="plus" />
                </IconGroup>   
            </Button>
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
 