import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MenuItem, Menu, Segment, Icon, Image, Input } from 'semantic-ui-react';
import logo from "../Logomark_Monochrome_Black.svg";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('logo');
  const user_photo = useSelector((state) => state.name.profilePhoto);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Segment attached size="mini">
        <Menu secondary>
          <MenuItem name="logo">
            <img src={logo} active={activeItem === "logo"} onClick={() => handleItemClick(null, { name: "logo" })}/>
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

          <MenuItem active={activeItem === "cart"} onClick={() => handleItemClick(null, { name: "cart" })}>
            <Icon name="shopping cart" size="large"/>
          </MenuItem>

          <MenuItem active={activeItem === "profile"} onClick={() => handleItemClick(null, { name: "profile" })}>
            <Image src={user_photo} size="mini" avatar />
          </MenuItem>
          
          {activeItem === "profile" ? <p>wew</p> : null}
        </Menu>
      </Segment>
    </div>
  );
}

export default Navbar;
