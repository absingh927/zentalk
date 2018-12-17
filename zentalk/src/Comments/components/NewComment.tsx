import * as React from 'react';
import { FormGroup, Input, Card, Row, Col, CardBody, Button } from 'reactstrap';

type NewCommentProps = {

};

type NewCommentState = {
  userComment: string,
}

class NewCommentComponent extends React.PureComponent<NewCommentProps, NewCommentState> {
  constructor(props: NewCommentProps) {
    super(props);

    this.state = {
      userComment: ''
    };
  };

  public render() {
    return (
      <Card className='m-1' >
        <CardBody>
          <Row>
            <Col xs='8'>
              <FormGroup>
                <Input
                  type='textarea'
                  name='user-comment'
                  id='user-comment-area'
                  placeholder='write a comment'
                  value={this.state.userComment} 
                  onChange={e => this.setState({userComment: e.target.value})}     
                />
              </FormGroup>        
            </Col>
            <Col xs='4'>
              <Button
                color='primary'
                onClick={this.handlePostComment}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
  
  private handlePostComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(this.state.userComment);
  }
}
export default NewCommentComponent;
