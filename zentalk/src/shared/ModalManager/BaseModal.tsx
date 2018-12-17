import * as React from 'react';
import { connect } from 'react-redux';
import { hideModal } from './ModalManagerActions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export type BaseModalProps = {
  title: string;
  id: string;
  onActionClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  primaryActionText?: string;
  closeModalText?: string;
  closeModalActionClick?: () => void;
};

const mapDispatchToProps = {
  hideModal,
};

class BaseModal extends React.PureComponent<BaseModalProps & typeof mapDispatchToProps> {
  constructor(props: BaseModalProps & typeof mapDispatchToProps) {
    super(props);
  }

  public render() {
    return (
      <Modal
        isOpen={true}
        toggle={this.handleCloseClick}
      >
        <ModalHeader toggle={this.handleCloseClick}>
          {this.props.title}
        </ModalHeader>
        <ModalBody>
          {this.props.children}
        </ModalBody>
        <ModalFooter className='border-top'>
          <Button
            color='secondary'
            outline={true}
            onClick={this.handleCloseClick}
            type='button'
          >
            {this.props.closeModalText ? this.props.closeModalText : 'Cancel'}
          </Button>
          {this.props.primaryActionText && this.props.onActionClick && (
            <Button
              id='action-button'
              color='primary'
              onClick={this.props.onActionClick}
              type='button'
            >
              {this.props.primaryActionText}
            </Button>
          )}
        </ModalFooter>
      </Modal>
    );
  }

  private handleCloseClick = () => {
    this.props.hideModal();
    this.props.closeModalActionClick && this.props.closeModalActionClick();
  }
}

export default connect(null, mapDispatchToProps)(BaseModal);
