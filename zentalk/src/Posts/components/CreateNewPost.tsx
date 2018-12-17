import * as React from 'react';
import BaseModal from '../../shared/ModalManager/BaseModal';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { CallStates, Success } from 'src/types';
import { AppState } from 'src/AppState';
import { hideModal } from '../../shared/ModalManager/ModalManagerActions';
import { uniqueId } from 'lodash-es';
import { createNewPost } from '../PostsActions';

type NewPostOwnProps = {
  createNewPostState: CallStates;
};

const mapDistpatchToProps = {
  hideModal,
  createNewPost
};

const mapStateToProps = (store: AppState): NewPostOwnProps => ({
  createNewPostState: store.posts.createNewPostState
});

type NewUserProps = NewPostOwnProps & typeof mapDistpatchToProps;

type NewUserState = {
  postName: string,
  postExternalLink: string,
  postContent: string,
};

class NewPostModal extends React.PureComponent<NewUserProps, NewUserState>{
  constructor(props: NewUserProps) {
    super(props);

    this.state = {
      postName: '',
      postExternalLink:'',
      postContent : '',
    };
  }

  public render() {
    return (
      <BaseModal
        id='new-post-modal'
        title='Create New Post'
        primaryActionText='Post'
        onActionClick={this.handleCreateNewPost}
      >
        {this.renderUserMessage(this.props.createNewPostState)}
        <Form>
          <FormGroup>
            <Label for='post-title'>Username</Label>
            <Input
              type='text'
              name='post-title'
              value={this.state.postName} 
              onChange={e => this.setState({postName: e.target.value})} 
              placeholder='Post Title'
            />
          </FormGroup>
          <FormGroup>
            <Label for='post-link'>External Link:</Label>
            <Input
              type='text'
              name='post-link'
              value={this.state.postExternalLink} 
              onChange={e => this.setState({postExternalLink: e.target.value})} 
              placeholder='External Link'
            />
          </FormGroup>
          <FormGroup>
            <Label for='post-content'>Content</Label>
            <Input
              type='textarea'
              name='post-content'
              value={this.state.postContent} 
              onChange={e => this.setState({postContent: e.target.value})} 
              placeholder='Content'
            />
          </FormGroup>
        </Form>
      </BaseModal>
    );
  }

  private handleCreateNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newPost = {
      id: uniqueId('posts_'),
      comments: null,
      content: this.state.postContent,
      link: this.state.postExternalLink,
      name: this.state.postName,
      voteCount: 0
    };
    
    this.props.createNewPost(newPost);
  };

  private renderUserMessage = (currentUserState: CallStates) => {
    if (currentUserState === Success) {
        setTimeout(() => this.props.hideModal(), 3000);
        return (
          <p className='mb-3 text-success'>Your post has been created.</p>
        );
      }
    return;
    };
}

export default connect(mapStateToProps, mapDistpatchToProps)(NewPostModal);
