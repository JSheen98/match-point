
import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'
import Logo from '../../pages/images/logo.png'
import '../../pages/css/styles.css'

// Inline styles
const style = {
  size: {
    width: '150px'
  }
}

// Navbar component for larger screen sizes
export default function NavbarLg() {
  const [activeItem, setactiveItem] = useState("home")
  const handleItemClick = (e, { name }) => setactiveItem(name)
  return (
    <Segment inverted attached size='mini'>
      <Menu inverted secondary>
        <Menu.Item
          as={Link}
          to="/"
          name='Home'
          active={activeItem === 'Match Point'}
          onClick={handleItemClick}
        />
        <Menu.Item
          position="right">
          <img style={style.size} src={Logo} alt='logo' />
        </Menu.Item>
        {/* If user is logged in display profile and logout buttons */}
        {Auth.loggedIn() ? (
          <>
            <Menu.Item
              as={Link}
              to="/profile"
              name='profile'
              position="right"
              active={activeItem === 'profile'}
              onClick={handleItemClick} />
            <Menu.Item
              name='logout'
              onClick={Auth.logout}
            >
              Logout
            </Menu.Item>
          </>
          // else, display login and sign up buttons
        ) : (
          <>
            <Menu.Item
              as={Link}
              to='/login'
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
              position="right" />
            <Menu.Item
              as={Link}
              to="/signup"
              name='sign_up'
              active={activeItem === 'sign_up'}
              onClick={handleItemClick} />
          </>
        )}
      </Menu>
    </Segment>
  )
}