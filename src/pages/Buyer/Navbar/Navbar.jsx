import { Segment,
         Menu,
         Image,
         Icon, 
         Input,  
 } from "semantic-ui-react"

import { useSelector } from "react-redux";


import logo from "../Logomark_Monochrome_Black.svg"


export const Navbar = () => {

    const user_photo = useSelector((state) => state.name.profilePhoto);

    return (
        <Segment attached size ="mini">
        <Menu secondary>
            <Menu.Item name="logo">
                <img src={logo}/>
            </Menu.Item>

            <Menu.Item>
                <Input type="text" icon="search" iconPosition="left" placeholder= "Search..." name="search" />
            </Menu.Item>
            
            <Menu.Item name="home"   />
            <Menu.Item name="products"  />
            <Menu.Item name="contact us"  />
            
            <Menu.Item  position="right"  >
                <Icon name="bell outline" size="large"/>
            </Menu.Item>

            <Menu.Item >
                <Icon name="comment outline" size="large"/>
            </Menu.Item>

            <Menu.Item  >
                <Icon name="shopping cart" size="large"/>
            </Menu.Item>

            <Menu.Item  >
                <Image src = {user_photo} size="mini" avatar />
            </Menu.Item>

        </Menu>
        {/* <Link onClick={openModel_sign}> Signout
        <Icon name="sign-in" />
        </Link>
        <SignoutMsg open={openSign} onClose={closeModel_sign}/> */}
    </Segment>
    )
}