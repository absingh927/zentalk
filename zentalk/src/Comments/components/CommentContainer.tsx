import * as React from 'react';
import { Comment } from '../CommentTypes';
import { AppState } from 'src/AppState';
import { connect } from 'react-redux';
import CommentsComponent from './CommentsComponent';
import { CurrentUser } from 'src/Users/UserTypes';

export type CommentContainerOwnProps = {
  curretnPostId: string,
};

type CommentContainerStateProps = {
  currentComments: Comment[];
  currentUser: CurrentUser
};

const mapStatetoProps = (store: AppState): CommentContainerStateProps => ({
  currentComments: store.comments.comments,
  currentUser: store.users.currentUser,
});

type CommentContainerProps =  CommentContainerOwnProps & CommentContainerStateProps;

class CommentsContainer extends React.PureComponent<CommentContainerProps> {
  constructor(props: CommentContainerProps) {
    super(props);
  }

  public render() {
    return (
      <CommentsComponent
        comments={this.props.currentComments}
        currentUser={this.props.currentUser}
        currentPostId={this.props.curretnPostId}
      />
    );
  };
}

export default connect(mapStatetoProps, null)(CommentsContainer);
