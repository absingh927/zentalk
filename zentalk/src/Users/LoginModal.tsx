import * as React from 'react';
import BaseModal from '../shared/ModalManager/BaseModal';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { userLogin } from './UserActions';

export type LoginModalOwnProps = {
  userMessage?: string;

};

const mapDistpatchToProps = {
  userLogin,
};

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
        {this.props.userMessage && (
          <p className='mb-3'>{this.props.userMessage}</p>
        )}
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
  }
}

export default connect(null, mapDistpatchToProps)(LoginModal);
