import * as React from 'react';
import { Post } from '../PostTypes';
import { AppState } from 'src/AppState';
import { connect } from 'react-redux';
import PostComponent from './PostComponent';
import { filter}  from 'lodash-es';

type PostContainerStateProps = {
  currentPosts: Post[];
  searchString: string;
};

const mapStatetoProps = (store: AppState): PostContainerStateProps => ({
  currentPosts: store.posts.posts,
  searchString: store.searchQuery.searchText,
});

class PostsContainer extends React.PureComponent<PostContainerStateProps> {
  constructor(props: PostContainerStateProps) {
    super(props);
  }

  public render() {
    const searchString = this.props.searchString;
    let searchedPosts = this.props.currentPosts;

    if (searchString !== '') {
      searchedPosts = filter(this.props.currentPosts, (post) => 
        post.name.toLowerCase().includes(searchString.toLowerCase()) || post.content.toLowerCase().includes(searchString.toLowerCase())
      )
    }

    return (
      <PostComponent posts={searchedPosts}/>
    );
  }
}

export default connect(mapStatetoProps, null)(PostsContainer);
