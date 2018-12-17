import * as React from 'react';
import HeaderNavContainer from './Nav/HeaderNavContainer';
import { connect } from 'react-redux';
import { createDummyUsers } from './Users/UserActions';
import PostContainer from './Posts/components/PostContainer';
import { ModalManager } from './shared/ModalManager/ModalManager';
import { createDummyPosts } from './Posts/PostsActions';
import { createDummyComments } from './Comments/CommentsActions';

const mapDistpatchToProps = {
  createDummyUsers,
  createDummyPosts,
  createDummyComments,
};

type AppComponentProps =  typeof  mapDistpatchToProps;

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
        <PostContainer/>
        <ModalManager />
      </>
    );
  }
}

export default connect(null,mapDistpatchToProps)(App);
