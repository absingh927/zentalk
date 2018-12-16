import * as React from 'react';
import BaseModal from '../shared/ModalManager/BaseModal';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { userLogin } from './UserActions';
import { CallStates, Error, Success } from 'src/types';
import { AppState } from 'src/AppState';
import { hideModal } from '../shared/ModalManager/ModalManagerActions';

export type LoginModalOwnProps = {
  currentUserState: CallStates;
};

const mapDistpatchToProps = {
  userLogin,
  hideModal,
};

const mapStateToProps = (store: AppState): LoginModalOwnProps => ({
  currentUserState: store.users.curretUserState,
});

type LoginModalProps = LoginModalOwnProps & typeof mapDistpatchToProps;

type LoginModalState = {
  username: string,
  pwd: string,
};

class LoginModal extends React.PureComponent<LoginModalProps, LoginModalState>{
  constructor(props: LoginModalProps) {
    super(props);

    this.state = {
      username:'',
      pwd: '',
    };
  }

  public render() {
    return (
      <BaseModal
        id='login-modal'
        title='LogIn'
        primaryActionText='Login'
        onActionClick={this.handleLogin}
      >
        {this.renderUserMessage(this.props.currentUserState)}
        <Form>
          <FormGroup>
            <Label for="user-email">Username</Label>
            <Input
              type="text"
              name="username"
              value={this.state.username} 
              onChange={e => this.setState({username: e.target.value})} 
              placeholder="Enter your username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="user-pwd">Password</Label>
            <Input
              type="password"
              name="password"
              value={this.state.pwd}
              onChange={e => this.setState({pwd: e.target.value})} 
              placeholder="Enter your password"
            />
          </FormGroup>
        </Form>
      </BaseModal>
    );
  }

  private handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.userLogin(this.state.username, this.state.pwd);
  };

  private renderUserMessage = (currentUserState: CallStates) => {
    console.log(currentUserState);
    if (currentUserState === Error) {
      return (
        <p className='mb-3 text-danger'>Your email or password did not match our records. Please try again.</p>
      );
    } else if (currentUserState === Success) {
      setTimeout(() => this.props.hideModal(), 4000);
      return (
        <p className='mb-3 text-success'>You were successfully logged in.</p>
      );
    }
    return;
  };
}

export default connect(mapStateToProps, mapDistpatchToProps)(LoginModal);
