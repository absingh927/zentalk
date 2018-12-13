import * as React from 'react';
import { CurrentUser } from '../types';
import { AppState } from '../AppState';
import { connect } from 'react-redux';
import HeaderBar from './HeaderNav';

type HeaderNavContainerStateProps = {
  userLoggedIn: boolean;
  currentUser: CurrentUser;
};

const mapDispatchToProps = {
  
};

type HeaderNavContainerProps = HeaderNavContainerStateProps & typeof mapDispatchToProps;

const mapStateToProps = (store: AppState): HeaderNavContainerStateProps => ({
  userLoggedIn: store.users.currentUser.logged_in,
  currentUser: store.users.currentUser,
});

class HeaderHeaderNavContainer extends React.PureComponent<HeaderNavContainerProps> {
  constructor(props: HeaderNavContainerProps) {
    super(props);
  }

  public render() {
    return (
      <HeaderBar
        userLoggedIn={this.props.userLoggedIn}
        currentUser={this.props.currentUser}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHeaderNavContainer);
