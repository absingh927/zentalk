import * as React from 'react';
import { Post } from '../PostTypes';
import { Card, Row, Col, CardBody, CardText } from 'reactstrap';
import VoteCounter from './VoteCounter';
import { orderBy } from 'lodash-es';
import CommentsContainer from '../../Comments/components/CommentContainer';

type PostProps = {
  posts: Post[];
};

class PostComponent extends React.PureComponent<PostProps>{
  constructor(props:PostProps) {
    super(props);
  };

  public render() {
    const sortedPosts = this.sortedPosts(this.props.posts);

    if (this.props.posts.length === 0) {
      return this.renderNoPosts();
    }

    return (
      sortedPosts.map(post => {
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
                <CardText>{post.comments.length}{post.comments.length === 1 ? 'comment' : 'comments'}</CardText>
              </div>
              <CardText>{post.content}</CardText>
            </Col>
          </Row>
          <CommentsContainer curretnPostId={post.id}/>
        </CardBody>
      </Card>
    );
  };

  private sortedPosts = (currentPost: Post[]) => {
    return orderBy(currentPost,'voteCount','desc');
  }
}

export default PostComponent;
