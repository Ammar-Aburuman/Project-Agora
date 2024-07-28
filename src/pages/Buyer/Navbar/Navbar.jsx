import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MenuItem, Menu, Segment, Icon, Image, Input ,Dropdown,DropdownMenu,DropdownItem } from 'semantic-ui-react';
import SignoutMsg from "./Modals/SignoutModal";
import AddModal from './Modals/addModal';
import Cart from './Modals/Cart';
import logo from "../Logomark_Monochrome_Black.svg";


const Navbar = () => {
  const [activeItem, setActiveItem] = useState('logo');
  const user_photo = useSelector((state) => state.name.profilePhoto);
  const user = useSelector((state) => state.name.name);


  const [open,setOpen] = useState(false);               //Add Items
  const [openSign,setOpenSign] = useState(false);       //Sign out                          //Perhaps there is a less bs way to manage modal states?
  const [openCart, setOpenCart] = useState(false);      //Cart 

  const openModel_add = () =>setOpen(true);
  const closeModel_add = () => setOpen(false);

  const openModel_sign = () =>setOpenSign(true);
  const closeModel_sign = () => setOpenSign(false);

  const openModel_Cart = () =>setOpenCart(true);
  const closeModel_Cart = () => setOpenCart(false);

  const handleItemClick =  (e, { name }) => {
    setActiveItem(name);
    console.log(name);
  };

  return (
    <div>
      <Segment attached size="mini">
        <Menu secondary>
          <MenuItem name="logo">
            <img src={logo} alt='' active={activeItem === "logo"} onClick={() => handleItemClick(null, { name: "logo" })}/>
          </MenuItem>

          <MenuItem>
            <Input type="text" icon="search" iconPosition="left" placeholder="Search..." name="search" />
          </MenuItem>

          <MenuItem name="home" active={activeItem === "home"} onClick={handleItemClick} />
          <MenuItem name="products" active={activeItem === "products"} onClick={handleItemClick} />
          <MenuItem name="contact us" active={activeItem === "contact us"} onClick={handleItemClick} />
 
          
          <MenuItem active={activeItem === "bell"} position="right" onClick={() => handleItemClick(null, { name: "bell" })}>
            <Icon name="bell outline" size="large"/>
          </MenuItem>

          <MenuItem active={activeItem === "chat"} onClick={() => handleItemClick(null, { name: "chat" })}>
            <Icon name="comment outline" size="large"/>
          </MenuItem>

          <MenuItem onClick={openModel_Cart}>
            <Icon name="shopping cart" size="large"/>
          </MenuItem>

          <MenuItem>
            <Image src={user_photo} size="mini" avatar />
                <Dropdown item text={'Signed in as '+ user}>
            <DropdownMenu>
            <DropdownItem icon='user' text='Profile' />
            <DropdownItem icon='suitcase' text='My Shop' onClick={openModel_add} />
            <DropdownItem icon='settings' text='Account Settings' />
            <DropdownItem icon='sign out' text='Sign out' onClick={openModel_sign} />
            </DropdownMenu>
            </Dropdown>
          </MenuItem>
          
        </Menu>
      </Segment>



      <AddModal open={open} onClose={closeModel_add}/>
      <SignoutMsg open={openSign} onClose={closeModel_sign}/>
      <Cart open={openCart} onClose={closeModel_Cart}/>


    </div>
  );
}

export default Navbar;
