import * as React from 'react';
import { Post } from '../PostTypes';
import { Card, Row, Col, CardBody, CardText } from 'reactstrap';
import VoteCounter from './VoteCounter';

type PostProps = {
  posts: Post[];
};

class PostComponent extends React.PureComponent<PostProps>{
  constructor(props:PostProps) {
    super(props);
  };

  public render() {
    if (this.props.posts.length === 0) {
      return this.renderNoPosts();
    }

    return (
      this.props.posts.map(post => {
       return this.renderPosts(post);
      })
    );
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
    return (
      <Card className='m-4' key={post.name}>
        <CardBody>
          <Row>
            <Col xs='2'>
              <VoteCounter postid={post.id} currentCount={post.voteCount} />
            </Col>
            <Col xs='10'>
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
