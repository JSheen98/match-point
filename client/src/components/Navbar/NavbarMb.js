import { useState } from 'react'
import { Menu, Sidebar } from 'semantic-ui-react'

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
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />

        {/* TODO: Add functionality/link to signin/signup forms */}

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
      </Sidebar>
    </>
  )
}

export default NavbarMb
