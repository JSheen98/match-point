import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Segment } from 'semantic-ui-react'
import Auth from '../../utils/auth'


export default function NavbarLg() {
  const [activeItem,setactiveItem]=useState("home")
  const handleItemClick = (e, { name }) => setactiveItem(name)
    return (
      <Segment inverted attached size='mini'>
        <Menu inverted secondary>

          {/* TODO: add functional links to components */}

          <Menu.Item
            name='Match Point'
            active={activeItem === 'Match Point'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Calendar'
            active={activeItem === 'Calendar'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='My Profile'
            active={activeItem === 'My Profile'}
            onClick={handleItemClick}
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