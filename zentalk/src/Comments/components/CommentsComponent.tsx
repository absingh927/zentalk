import * as React from 'react';
import { Comment } from '../CommentTypes';
import { Card, Row, CardBody, CardText, Col, Button} from 'reactstrap';
import NewCommentComponent from './NewComment';
import { CurrentUser } from 'src/Users/UserTypes';

export type CommentsProps = {
  comments: Comment[],
  currentUser: CurrentUser,
  currentPostId: string,
};

type CommentsState = {
  isOpen: boolean;
}

class CommentContainer extends React.PureComponent<CommentsProps,CommentsState> {
  constructor(props: CommentsProps) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  public render() {
    return (
      <>
      <Button color='link' onClick={this.handleViewMore}>View More</Button>
      {this.state.isOpen && (
        this.renderFields()
      )}
      </>
    );
  }

  private handleViewMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  private renderFields = () => {
    if (this.props.comments.length === 0) {
      return this.renderNoComments();
    } else {
      return (
        this.props.comments.map(comment => {
         return this.renderComments(comment);
        })
      );
    }
  };

  private renderNoComments = () => {
    const message = this.props.currentUser.logged_in ?
    'Opps, looks like nobody has posted yet! Be the first to post.' :
    'Opps, looks like nobody has posted yet! You need to be logged in to post.';

    return (
      <>
        <Card className='m-4'>
          <CardBody className='text-center'>
            <CardText>{message}</CardText>
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
