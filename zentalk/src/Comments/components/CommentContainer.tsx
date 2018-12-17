import * as React from 'react';
import { Comment } from '../CommentTypes';
import { AppState } from 'src/AppState';
import { connect } from 'react-redux';
import CommentsComponent from './CommentsComponent';
import { CurrentUser } from 'src/Users/UserTypes';
import { filter } from 'lodash-es';

export type CommentContainerOwnProps = {
  curretnPostId: string;
};

type CommentContainerStateProps = {
  allComments: Comment[];
  currentUser: CurrentUser;
};

const mapStatetoProps = (store: AppState): CommentContainerStateProps => ({
  allComments: store.comments.comments,
  currentUser: store.users.currentUser,
});

type CommentContainerProps =  CommentContainerOwnProps & CommentContainerStateProps;

class CommentsContainer extends React.PureComponent<CommentContainerProps> {
  constructor(props: CommentContainerProps) {
    super(props);
  }

  public render() {
    const filteredComments = filter( this.props.allComments, ['post_id', this.props.curretnPostId]);
    return (
      <CommentsComponent
        comments={filteredComments}
        currentUser={this.props.currentUser}
        currentPostId={this.props.curretnPostId}
      />
    );
  }
}

export default connect(mapStatetoProps, null)(CommentsContainer);
