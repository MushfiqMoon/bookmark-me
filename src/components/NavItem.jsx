import { Container, Image, Navbar } from "react-bootstrap"
// import {logo} from '../../public/'

export const NavItem = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-warning">
          <img src='./logo.jpg' alt="logo" className="me-2" />
          BookmerkMe
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Image fluid roundedCircle thumbnail src='avatar.png' alt="user-image" className="user"/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
