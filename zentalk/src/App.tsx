import * as React from 'react';
// import { Posts } from './types';
import HeaderNavContainer from './Nav/HeaderNavContainer';
import { connect } from 'react-redux';
import { createDummyUsers } from './Users/UserActions';
import PostComponent from './Posts/PostComponent';
import { ModalManager } from './shared/ModalManager/ModalManager';

// type AppComponentMapState = {
//   posts: Posts;
// };

const mapDistpatchToProps = {
  createDummyUsers,
};

type AppComponentProps =  typeof  mapDistpatchToProps;

class App extends React.PureComponent<AppComponentProps> {
  constructor(props: AppComponentProps){
    super(props);
  }

  public componentWillMount() {
    this.props.createDummyUsers();
  }

  public render() {
    return (
      <>
        <HeaderNavContainer/>
        <PostComponent/>
        <ModalManager />
      </>
    );
  }
}

export default connect(null,mapDistpatchToProps)(App);
