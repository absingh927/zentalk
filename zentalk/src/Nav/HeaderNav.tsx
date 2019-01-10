import * as React from 'react';
import { Navbar, Collapse, Nav, NavItem, Button } from 'reactstrap';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faBars } from '@fortawesome/free-solid-svg-icons';
import { CurrentUser } from '../Users/UserTypes';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import LoginModal from '../Users/components/LoginModal';
import NewPostModal from '../Posts/components/CreateNewPost';


type HeaderNavProps = {
  userLoggedIn: boolean;
  currentUser: CurrentUser;
  showModal: (modalType: React.ComponentClass<any>, modalProps: any) => void;
  userLogout: () => void;
  searchString: (searchQuery: string) => void;
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
      <Navbar expand='sm' className='text-info sticky-top'>
        <NavbarBrand>
          <FontAwesomeIcon icon={faBullseye}/> ZenTalk
        </NavbarBrand>
        <Button
          color='primary'
          className='ml-auto'
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNavClickAction(e, 'login')}
        >
          Login
        </Button>
      </Navbar>
    );
  }

  private renderLoggedInNav = () => {
    return (
      <Navbar expand='sm' className='text-info sticky-top justify-content-between'>
        <NavbarBrand>
          <FontAwesomeIcon icon={faBullseye}/> ZenTalk
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className='text-info'><FontAwesomeIcon icon={faBars}/></NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar={true} className='text-right mt-2'>
          <Nav navbar={true} className='ml-auto'>
            <NavItem>
              <input className='mr-3' type='text' onChange={this.handleSearch}/>
            </NavItem>
            <NavItem>
              <Button
                color='primary'
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNavClickAction(e, 'newpost')}>
                  Create New Post
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color='link'
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNavClickAction(e, 'logout')}
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
      this.props.showModal(LoginModal, {});
    } else if( actionType === 'logout') {
      this.props.userLogout();
    } else if (actionType === 'newpost') {
      this.props.showModal(NewPostModal, {});
    }
    return;
  }

  private handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.searchString(e.target.value);
  }
}

export default HeaderNav;
