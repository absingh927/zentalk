import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import { CardText } from 'reactstrap';
import { voteCounter }  from '../PostsActions';
import { connect } from 'react-redux';

export type VoteCounterOwnProps = {
  postid: string,
  currentCount: number
};

const mapDispatchToProps = {
  voteCounter,
};

type VoteCounterProps = VoteCounterOwnProps & typeof mapDispatchToProps;

class VoteCounter extends React.PureComponent<VoteCounterProps> {
  constructor(props: VoteCounterProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <CardText onClick={e => this.handleVoteClick('up')}>
          <FontAwesomeIcon icon={faCaretUp}/>
        </CardText>
        <CardText>{this.props.currentCount}</CardText>
        <CardText onClick={e => this.handleVoteClick('down')}>
          <FontAwesomeIcon icon={faCaretDown}/>
        </CardText>
      </div>
    );
  }

  private handleVoteClick = (voteType: string) => {
    switch (voteType) {
      case 'up':
        return this.props.voteCounter('up', this.props.postid,this.props.currentCount);
      case 'down':
      return this.props.voteCounter('down', this.props.postid,this.props.currentCount);
      default:
        return;
    } 
  }
}

export default connect(null, mapDispatchToProps)(VoteCounter);

