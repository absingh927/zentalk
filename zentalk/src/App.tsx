import * as React from 'react';
import HeaderNavContainer from './Nav/HeaderNavContainer';
import { connect } from 'react-redux';
import { createDummyUsers } from './Users/UserActions';
import PostContainer from './Posts/components/PostContainer';
import { ModalManager } from './shared/ModalManager/ModalManager';
import { createDummyPosts } from './Posts/PostsActions';

const mapDistpatchToProps = {
  createDummyUsers,
  createDummyPosts,
};

type AppComponentProps =  typeof  mapDistpatchToProps;

class App extends React.PureComponent<AppComponentProps> {
  constructor(props: AppComponentProps){
    super(props);
  }

  public componentWillMount() {
    this.props.createDummyUsers();
    this.props.createDummyPosts();
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
