import * as React from 'react';
import HeaderNavContainer from './Nav/HeaderNavContainer';
import { connect } from 'react-redux';
import { createDummyUsers } from './Users/UserActions';
import PostContainer from './Posts/components/PostContainer';
import { ModalManager } from './shared/ModalManager/ModalManager';
import { createDummyPosts } from './Posts/PostsActions';
import { createDummyComments } from './Comments/CommentsActions';
import { AppState } from './AppState';
import { CallStates, Loading } from './types';
import LoadingState  from './shared/LoadingState';

const mapDistpatchToProps = {
  createDummyUsers,
  createDummyPosts,
  createDummyComments,
};

type AppComponentStateProps = {
  usersStatus: CallStates,
  commentsStatus: CallStates,
  postsStatus: CallStates,
}

const mapStateToProps = (store: AppState): AppComponentStateProps => ({
  usersStatus: store.users.usersState,
  commentsStatus: store.comments.commentsState,
  postsStatus: store.posts.postsState,
});

type AppComponentProps = AppComponentStateProps & typeof  mapDistpatchToProps;

class App extends React.PureComponent<AppComponentProps> {
  constructor(props: AppComponentProps){
    super(props);
  }

  public componentWillMount() {
    this.props.createDummyUsers();
    this.props.createDummyPosts();
    this.props.createDummyComments();
  }

  public render() {
    return (
      <>
        <HeaderNavContainer/>
        {this.renderMain()}
      </>
    );
  }

  private renderMain = () => {
    if ((this.props.commentsStatus && this.props.postsStatus && this.props.usersStatus) === Loading) {
      return <LoadingState/>
    }
    return (
      <>
        <PostContainer/>
        <ModalManager />
      </>
    );
  }
}

export default connect(mapStateToProps,mapDistpatchToProps)(App);
