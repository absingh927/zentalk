import * as React from 'react';
import { CurrentUser } from '../Users/UserTypes';
import { AppState } from '../AppState';
import { connect } from 'react-redux';
import HeaderNav from './HeaderNav';
import { showModal } from '../shared/ModalManager/ModalManagerActions';
import { userLogout } from '../Users/UserActions';
import { searchString } from '../Search/SearchActions';

type HeaderNavContainerStateProps = {
  userLoggedIn: boolean;
  currentUser: CurrentUser;
};

const mapDispatchToProps = {
  showModal,
  userLogout,
  searchString,
};

type HeaderNavContainerProps = HeaderNavContainerStateProps & typeof mapDispatchToProps;

const mapStateToProps = (store: AppState): HeaderNavContainerStateProps => ({
  userLoggedIn: store.users.currentUser.logged_in,
  currentUser: store.users.currentUser,
});

class HeaderNavContainer extends React.PureComponent<HeaderNavContainerProps> {
  constructor(props: HeaderNavContainerProps) {
    super(props);
  }

  public render() {
    return (
      <HeaderNav
        {...this.props}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavContainer);
