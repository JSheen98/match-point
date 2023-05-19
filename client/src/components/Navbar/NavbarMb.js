import { useState } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

function HamIcon() {
  return (<i className="big bars icon inverted" />)
}

function CloseIcon() {
  return (<i className="big close red icon" />)
}

function NavbarMb({renderLinks}) {
  const [visible, setVisible] = useState(false)
  const [icon, setIcon] = useState(HamIcon)
  const [activeItem, setactiveItem] = useState("home")
  const handleItemClick = (e, { name }) => setactiveItem(name)
  const hideSidebar = () => {
    setIcon(HamIcon)
    setVisible(false)
  }
  const showSidebar = () => {
    setIcon(CloseIcon)
    setVisible(true)
  }
  const toggleSidebar = () => {
    visible ? hideSidebar() : showSidebar()
  }

  return (
    <>
      {visible && <Overlay />}
      <Menu inverted
        size="tiny"
        borderless
        attached
      >
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
        {/* TODO: Add links to hamburger menu as needed */}
        <Menu.Item
          as={Link}
          to="/"
          name='home'
          active={activeItem === 'home'}
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
        <Menu.Item
          as={Link}
          to="/login"
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
      </Sidebar>
    </>
  )
}

export default NavbarMb
