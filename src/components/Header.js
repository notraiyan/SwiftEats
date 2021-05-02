import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem, Modal, ModalHeader, ModalBody,Button,Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import logo from '../logo.svg'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({isNavOpen:!this.state.isNavOpen});        
    }
    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen});        
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked);
        event.preventDefault();
    }
    render(){
        return (
            <>
                <Navbar dark expand="md" color="dark" className="navbar">
                    <div className="container"> 
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand href="/" className="brand mr-4">
                            <img src={logo} height="30" width="41" alt="Swift Eats"/>
                            S W I F T E A T S
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" onClick={this.toggleNav}>
                                        <span className="fa fa-home fa-lg mr-1"></span>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about" onClick={this.toggleNav}>
                                        <span className="fa fa-info fa-lg mr-1"></span>
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu" onClick={this.toggleNav}>
                                        <span className="fa fa-list fa-lg mr-1"></span>
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact" onClick={this.toggleNav}>
                                        <span className="fa fa-address-card fa-lg mr-1"></span>
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>{" "}Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div> 
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Swift Eats</h1>
                                <p>We take inspiration from the World's best cuisines
                                    , and create a unique fusion experience. Our lipsmacking
                                    creations will tickle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <b>Login</b>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input)=>this.password=input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" id="remember" name="remember" innerRef={(input)=>this.remember=input}/>Remember me  
                                </Label>                             
                            </FormGroup>
                            <br/>
                            <Button type="submit" color="success">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;