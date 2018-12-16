import * as React from 'react';
import { CurrentUser } from '../Users/UserTypes';
import { AppState } from '../AppState';
import { connect } from 'react-redux';
import HeaderNav from './HeaderNav';
import { showModal, hideModal } from '../shared/ModalManager/ModalManagerActions';

type HeaderNavContainerStateProps = {
  userLoggedIn: boolean;
  currentUser: CurrentUser;
};

const mapDispatchToProps = {
  showModal,
  hideModal,
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
        userLoggedIn={this.props.userLoggedIn}
        currentUser={this.props.currentUser}
        {...this.props}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavContainer);
