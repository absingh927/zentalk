import * as React from 'react';
import { Comment } from '../CommentTypes';
import { Card, Row, CardBody, CardText, Col} from 'reactstrap';

type CommentsProps = {
  comments : Comment[],
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
      <Card className='m-4'>
        <CardBody className='text-center'>
          <CardText>Opps, looks like nobody has posted yet! Be the first to post.</CardText>
        </CardBody>
      </Card>
    );
  };

  private renderComments = (comment: Comment) => {
    return (
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
    );
  };
}

export default CommentContainer;
