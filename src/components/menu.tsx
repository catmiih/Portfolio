import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/favicon.png";


export function Menu() {
    return (
        <Navbar style={{padding:20, backgroundColor:'#070707'}} fixed="top">
            <Container>
                <Navbar.Brand href="#home" style={{fontWeight:600, color: 'white'}}>
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-center pr-8"
                    />{' '}
                    Portfólio | Catmiih
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}