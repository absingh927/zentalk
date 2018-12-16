import * as React from 'react';
import { Navbar, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { CurrentUser } from '../Users/UserTypes';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import { connect } from 'react-redux';
import LoginModal from '../Users/LoginModal';

type HeaderNavProps = {
  userLoggedIn: boolean;
  currentUser: CurrentUser;
  showModal: (modalType: React.ComponentClass<any>, modalProps: any) => void;
  hideModal: () => void;
  userLogout: () => void;
};

type HeaderNavState = {
  isOpen: boolean;
};

class HeaderNav extends React.PureComponent<HeaderNavProps, HeaderNavState> {

  constructor(props: HeaderNavProps) {
    super (props);

    this.state = {
      isOpen: false,
    };
  }

  public render() {
    if (this.props.userLoggedIn) {
      return(
        this.renderLoggedInNav()
      );
    }
    return this.renderDefaultNav();
  }

  private renderDefaultNav = () => {
    return (
      <Navbar color='info' expand='sm' className='text-light'>
        <NavbarBrand>
          <FontAwesomeIcon icon={faBicycle}/> ZenTalk
        </NavbarBrand>
        <Button color='primary' className='ml-auto' onClick={this.handleLogin}>
          Login
        </Button>
      </Navbar>
    );
  }

  private renderLoggedInNav = () => {
    return (
      <Navbar color='success' expand='sm' className='text-light'>
        <NavbarBrand>
          <FontAwesomeIcon icon={faBicycle}/> ZenTalk
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar}/>
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav navbar={true}>
            <NavItem>
              <NavLink href='#'>Create New Post</NavLink>
            </NavItem>
            <NavItem>
              <Button color='link' onClick={this.handleLogout}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
    );
  }

  private toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  private handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {

    // const handleLogin = () => {
    //   // this.props.hideModal();
    //   // handlelogin action
    //   console.log('login pressed nav');
    //   console.log(e.target);

    //   //if login success then log in, otherwise error
    // };

    this.props.showModal(LoginModal, {});
    
  };

  private handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.userLogout();
  }
}

export default connect(null)(HeaderNav);
