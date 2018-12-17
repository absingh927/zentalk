import * as React from 'react';
import { Navbar, Collapse, Nav, NavItem, Button } from 'reactstrap';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { CurrentUser } from '../Users/UserTypes';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import LoginModal from '../Users/components/LoginModal';
import NewPostModal from '../Posts/components/CreateNewPost';

type HeaderNavProps = {
  userLoggedIn: boolean;
  currentUser: CurrentUser;
  showModal: (modalType: React.ComponentClass<any>, modalProps: any) => void;
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
        <Button
          color='primary'
          className='ml-auto'
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNavClickAction(e,'login')}
        >
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
          <Nav navbar={true} className='ml-auto'>
            <NavItem>
              <Button
                color='primary'
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNavClickAction(e,'newpost')}>
                  Create New Post
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color='link'
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNavClickAction(e,'logout')}
              >
                Logout
              </Button>
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

  private handleNavClickAction = (e: React.MouseEvent<HTMLButtonElement>, actionType: string ) => {
    e.preventDefault();
    if (actionType === 'login') {
      this.props.showModal(LoginModal,{});
    } else if( actionType === 'logout'){
      this.props.userLogout();
    } else if (actionType === 'newpost'){
      this.props.showModal(NewPostModal,{});
    } 
    return;
  }
}

export default HeaderNav;
