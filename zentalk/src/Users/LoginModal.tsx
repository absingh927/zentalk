import * as React from 'react';
import BaseModal from '../shared/ModalManager/BaseModal';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export type LoginModalOwnProps = {
  userMessage?: string;
  handleLogin: () => void;
};

type LoginModalProps = LoginModalOwnProps;

class LoginModal extends React.PureComponent<LoginModalProps>{
  constructor(props: LoginModalProps) {
    super(props);
  }

  public render() {
    return (
      <BaseModal
        id='login-modal'
        title='LogIn'
        primaryActionText='Login'
        onActionClick={this.props.handleLogin}
      >
        {this.props.userMessage && (
          <p className='mb-3'>{this.props.userMessage}</p>
        )}
        <Form>
          <FormGroup>
            <Label for="user-email">Email</Label>
            <Input type="email" name="email" id="user-email" placeholder="Enter your email" />
          </FormGroup>
          <FormGroup>
            <Label for="user-pwd">Password</Label>
            <Input type="password" name="password" id="user-password" placeholder="Enter your password" />
          </FormGroup>
        </Form>
      </BaseModal>
    );
  }
}

export default connect()(LoginModal);
