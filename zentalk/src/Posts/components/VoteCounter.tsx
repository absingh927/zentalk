import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import { CardText } from 'reactstrap';
import { voteCounter } from '../PostsActions';
import { connect } from 'react-redux';
import { AppState } from 'src/AppState';
import LoginModal from '../../Users/components/LoginModal';
import { showModal } from '../../shared/ModalManager/ModalManagerActions';

type VoteCounterOwnProps = {
  postid: string;
  currentCount: number;
};

type VoteCounterStateProps = {
  isLoggedIn: boolean,
};

const mapDispatchToProps = {
  voteCounter,
  showModal,
};

type VoteCounterProps = VoteCounterOwnProps & typeof mapDispatchToProps & VoteCounterStateProps;

const mapStateToProps = (store: AppState): VoteCounterStateProps => ({
  isLoggedIn: store.users.currentUser.logged_in,
});

class VoteCounter extends React.PureComponent<VoteCounterProps> {
  constructor(props: VoteCounterProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <CardText onClick={(e) => this.handleVoteClick('up')}>
          <FontAwesomeIcon icon={faCaretUp}/>
        </CardText>
        <CardText>{this.props.currentCount}</CardText>
        <CardText onClick={(e) => this.handleVoteClick('down')}>
          <FontAwesomeIcon icon={faCaretDown}/>
        </CardText>
      </div>
    );
  }

  private handleVoteClick = (voteType: string) => {
    if (this.props.isLoggedIn) {
      switch (voteType) {
        case 'up':
          return this.props.voteCounter('up', this.props.postid, this.props.currentCount);
        case 'down':
        return this.props.voteCounter('down', this.props.postid, this.props.currentCount);
        default:
          return;
      }
    } else {
      const userMessage = 'You need to logged in to vote.';
      this.props.showModal(LoginModal, {
        userMessage: userMessage,
      });
      return;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteCounter);
