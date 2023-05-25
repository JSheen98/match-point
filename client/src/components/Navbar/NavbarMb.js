import { useState } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../pages/images/logo.png';
import Auth from '../../utils/auth'

// Overlay component for open hamburger menu
function Overlay() {
  return (
    <div style={{
      backgroundColor: "rgba(0, 0, 0, 0.795)",
      position: "fixed",
      height: "110vh",
      width: "100%",
    }} />
  )
}
const style = {
  size: {
    width: '150px'
  }
}

// Hamburger menu compnent
function HamIcon() {
  return (<i className="big bars icon inverted" />)
}

// X button for open hamburger menu component
function CloseIcon() {
  return (<i className="big close red icon" />)
}

// Hamburger menu links and functionality
function NavbarMb({ renderLinks }) {
  const [visible, setVisible] = useState(false)
  const [icon, setIcon] = useState(HamIcon)
  const [activeItem, setactiveItem] = useState("home")
  const handleItemClick = (e, { name }) => setactiveItem(name)

  // hides the hamburger menu
  const hideSidebar = () => {
    setIcon(HamIcon)
    setVisible(false)
  }

  // shows the hamburger menu
  const showSidebar = () => {
    setIcon(CloseIcon)
    setVisible(true)
  }

  // Toggles hamburger
  const toggleSidebar = () => {
    visible ? hideSidebar() : showSidebar()
  }

  // HTML with above functions
  return (
    <>
      {visible && <Overlay />}
      <Menu inverted
        size="tiny"
        borderless
        attached
      >
        <Menu.Item position='left'>
          <img style={style.size} src={Logo} alt='logo' />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item onClick={toggleSidebar}>
            {icon}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Sidebar as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
      >
        {/* Logo and home link */}
        <Menu.Item>
          <img style={style.size} src={Logo} alt='logo' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        {/* If user is logged in, display profile and logout buttons in hamburger menu */}
        {Auth.loggedIn() ? (
          <><Menu.Item
            as={Link}
            to="/profile"
            name='profile'
            active={activeItem === 'profile'}
            onClick={handleItemClick} />
            <Menu.Item
              name='logout'
              onClick={Auth.logout}
            >
              Logout
            </Menu.Item></>
        ) : (
          // else, display login and signup in hamburger menu
          <><Menu.Item
            as={Link}
            to="/login"
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            position="right" /><Menu.Item
              as={Link}
              to="/signup"
              name='sign_up'
              active={activeItem === 'sign_up'}
              onClick={handleItemClick} /></>
        )}
      </Sidebar>
    </>
  )
}

export default NavbarMb
