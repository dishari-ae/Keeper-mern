import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Container
} from 'reactstrap';

class Navbarr extends Component {
state = {
    isOpen: false
}
toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
render() {
    return(
<div>
        <Navbar color="warning" light expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Keeper</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>   
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    );
    
}
}

export default Navbarr;