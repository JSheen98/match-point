
import React { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'



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
            active={activeItem === 'Match Point'}
            onClick={handleItemClick}
          />
          <Menu.Item
          as={Link}
          to="/profile"
          name='profile'
          active={activeItem === 'profile'}
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
          {/* Add link to login */}
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            position="right"
          />
          {/* Add link to sign up */}
          <Menu.Item
            as={Link}
            to="/signup"
            name='sign_up'
            active={activeItem === 'sign_up'}
            onClick={handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }