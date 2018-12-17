import * as React from 'react';
import { Comment } from '../CommentTypes';
import { AppState } from 'src/AppState';
import { connect } from 'react-redux';
import CommentsComponent from './CommentsComponent';

type CommentContainerStateProps = {
  currentComments: Comment[];
};

const mapStatetoProps = (store: AppState): CommentContainerStateProps => ({
  currentComments: store.comments
});

class CommentsContainer extends React.PureComponent<CommentContainerStateProps> {
  constructor(props: CommentContainerStateProps) {
    super(props);
  }

  public render() {
    return (
      <CommentsComponent comments={this.props.currentComments}/>
    );
  };
}

export default connect(mapStatetoProps, null)(CommentsContainer);
