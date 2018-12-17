import * as React from 'react';
import { Post } from '../PostTypes';
import { AppState } from 'src/AppState';
import { connect } from 'react-redux';
import PostComponent from './PostComponent';

type PostContainerStateProps = {
  currentPosts: Post[];
}

const mapStatetoProps = (store: AppState): PostContainerStateProps => ({
  currentPosts: store.posts.posts
});

class PostsContainer extends React.PureComponent<PostContainerStateProps> {
  constructor(props: PostContainerStateProps) {
    super(props);
  }

  public render() {
    console.log('currentposts',this.props.currentPosts);

    return (
      <PostComponent posts={this.props.currentPosts}/>
    );
  };
}

export default connect(mapStatetoProps, null)(PostsContainer);
