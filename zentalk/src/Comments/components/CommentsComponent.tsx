import * as React from 'react';
import { Comment } from '../CommentTypes';
import { Card, Row, CardBody, CardText, Col} from 'reactstrap';
import NewCommentComponent from './NewComment';
import { CurrentUser } from 'src/Users/UserTypes';

export type CommentsProps = {
  comments: Comment[],
  currentUser: CurrentUser,
  currentPostId: string,
};

class CommentContainer extends React.PureComponent<CommentsProps> {
  constructor(props: CommentsProps) {
    super(props);
  }

  public render() {
    if (this.props.comments.length === 0) {
      return this.renderNoComments();
    }

    return (
      this.props.comments.map(comment => {
       return this.renderComments(comment);
      })
    );
  }

  private renderNoComments = () => {
    return (
      <>
        <Card className='m-4'>
          <CardBody className='text-center'>
            <CardText>Opps, looks like nobody has posted yet! Be the first to post.</CardText>
          </CardBody>
        </Card>
        {this.props.currentUser.logged_in && (
          <NewCommentComponent
            currentUser={this.props.currentUser}
            post_id={this.props.currentPostId}
          />
        )}
      </>
    );
  };

  private renderComments = (comment: Comment) => {
    return (
      <>
        <Card className='m-4' key={comment.comment_id}>
          <CardBody>
            <Row>
              <Col xs='12'>
                <div>
                  <img src={comment.userInfo.avatar_url}/>
                </div>
                <div>
                  <CardText>{comment.userInfo.username}</CardText>
                  <CardText>{comment.content}</CardText>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </>
    );
  };
}

export default CommentContainer;
