import * as React from 'react';
import { Post } from '../PostTypes';
import { Card, Row, Col, CardBody, CardText } from 'reactstrap';

type PostProps = {
  posts: Post[];
}

class PostComponent extends React.PureComponent<PostProps>{
  constructor(props:PostProps) {
    super(props);
  }

  public render() {
    console.log('post comp props:', this.props.posts);
    if(this.props.posts.length !== 0 ) {
      this.props.posts.map(post => {
        this.renderPosts(post);
      });
    }
    return this.renderNoPosts();
  }

  private renderNoPosts = () => {
    return (
      <Card className='m-4'>
        <CardBody className='text-center'>
          <CardText>Opps, looks like nobody has posted yet! Login and create a post!</CardText>
        </CardBody>
      </Card>
    );
  };

  private renderPosts = (post: Post) => {
    console.log('currentpost',post);
    return (
      <Card className='m-4' key={post.id}>
        <CardBody>
          <Row>
            <Col xs='1'>
              <CardText>voteCount</CardText>
            </Col>
            <Col xs='11'>
              <CardText>{post.name}</CardText>
              <div className='d-flex'>
                <CardText><a href='#'>{post.link}</a></CardText>
                <CardText>number of comments</CardText>
              </div>
              {/* <CardText>{post.content}</CardText> */}
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  };
}

export default PostComponent;
