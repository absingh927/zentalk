import * as React from 'react';
import { FormGroup, Input, Card, Row, CardBody, Button } from 'reactstrap';
import { createNewUserComment } from '../CommentsActions';
import { CurrentUser } from 'src/Users/UserTypes';
import { connect } from 'react-redux';

export type NewCommentOwnProps = {
  currentUser: CurrentUser;
  post_id: string;
};

const mapDistpatchToProps = {
  createNewUserComment,
};

type NewCommentProps = NewCommentOwnProps & typeof mapDistpatchToProps;

type NewCommentState = {
  userComment: string;
};

class NewCommentComponent extends React.PureComponent<NewCommentProps, NewCommentState> {
  constructor(props: NewCommentProps) {
    super(props);

    this.state = {
      userComment: '',
    };
  }

  public render() {
    return (
      <Card className='m-1 border-0 newComment'>
        <CardBody>
          <Row>
            <FormGroup className='newComment-textarea'>
              <Input
                type='textarea'
                name='user-comment'
                id='user-comment-area'
                placeholder='write a comment'
                value={this.state.userComment}
                onChange={(e) => this.setState({userComment: e.target.value})}
              />
            </FormGroup> 
            <div className='newComment-btnPost-container'>
              <Button
                color='primary'
                onClick={this.handlePostComment}
                className='btn-lg ml-1'
              >
                Post
              </Button>
            </div>
          </Row>
        </CardBody>
      </Card>
    );
  }
  
  private handlePostComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newComment = {
      content: this.state.userComment,
      post_id: this.props.post_id,
      userInfo: this.props.currentUser,
      createdAt: new Date().toUTCString(),
    };
    this.props.createNewUserComment(newComment);
    this.setState({
      userComment: '',
    });
  }
}
export default connect(null, mapDistpatchToProps)(NewCommentComponent);
