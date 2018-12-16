import * as React from 'react';
import { connect } from 'react-redux';
import { ModalManagerState } from './ModalManagerState';

class ModalManagerComponent extends React.PureComponent<ModalManagerState> {
  public render() {
    const { modalType, modalProps } = this.props;
    const ModalType = modalType;

    if (!ModalType) return null;

    return <ModalType {...modalProps} />;
  }
}

export const ModalManager = connect(
  (state: { modalManager: ModalManagerState }) => state.modalManager,
  {}
)(ModalManagerComponent);

export default ModalManager;