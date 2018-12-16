import * as React from 'react';
import { Navbar, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { CurrentUser } from 'src/types';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';

type HeaderNavProps = {
  userLoggedIn: boolean;
  currentUser: CurrentUser;
};

type HeaderNavState = {
  isOpen: boolean;
};

export default class HeaderNav extends React.PureComponent<HeaderNavProps, HeaderNavState> {

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
        <Button color='primary' className='ml-auto'>
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
              <NavLink href='#'>Logout</NavLink>
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
}
