import { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function NavbarLg() {
  const [activeItem,setactiveItem]=useState("home")
  const handleItemClick = (e, { name }) => setactiveItem(name)
    return (
      <Segment inverted attached size='mini'>
        <Menu inverted secondary>

          {/* TODO: add functional links to components */}

          <Menu.Item
            as={Link}
            to="/"
            name='Match Point'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to= "/calendar"
            name='calendar'
            active={activeItem === 'calendar'}
            onClick={handleItemClick}
            position="right"
          />
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            position="right"
          />
          <Menu.Item
            name='sign_in'
            active={activeItem === 'sign_in'}
            onClick={handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }