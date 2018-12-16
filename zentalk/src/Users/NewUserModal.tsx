import * as React from 'react';
import BaseModal from '../shared/ModalManager/BaseModal';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { CallStates, Error, Success } from 'src/types';
import { AppState } from 'src/AppState';
import { hideModal } from '../shared/ModalManager/ModalManagerActions';
import { createAccountandLogInUser } from './UserActions';

export type NewUserOwnProps = {
  currentUserState: CallStates;
};

const mapDistpatchToProps = {
  hideModal,
  createAccountandLogInUser,
};

const mapStateToProps = (store: AppState): NewUserOwnProps => ({
  currentUserState: store.users.curretUserState,
});

type NewUserProps = NewUserOwnProps & typeof mapDistpatchToProps;

type NewUserState = {
  username: string,
  pwd: string,
};

class NewUser extends React.PureComponent<NewUserProps, NewUserState>{
  constructor(props: NewUserProps) {
    super(props);

    this.state = {
      username:'',
      pwd: '',
    };
  }

  public render() {
    return (
      <BaseModal
        id='newuser-modal'
        title='Create New Account'
        primaryActionText='Create'
        onActionClick={this.handlecreateAccountandLogInUser}
      >
        {this.renderUserMessage(this.props.currentUserState)}
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
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

  private handlecreateAccountandLogInUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    this.props.createAccountandLogInUser(this.state.username, this.state.pwd);
    console.log(this.state.username, this.state.pwd);
  };

  private renderUserMessage = (currentUserState: CallStates) => {
    if (currentUserState === Error) {
      return (
        <p className='mb-3 text-danger'>The username already exists in our records. Pleasy try again.</p>
      );
    } else if (currentUserState === Success) {
      setTimeout(() => this.props.hideModal(), 3000);
      return (
        <p className='mb-3 text-success'>Your account was successfully created. You can log in now.</p>
      );
    }
    return;
  };
}

export default connect(mapStateToProps, mapDistpatchToProps)(NewUser);
