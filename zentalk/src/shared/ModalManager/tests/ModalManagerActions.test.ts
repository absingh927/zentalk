import * as constants from '../ModalManagerConstants';
import * as actions from '../ModalManagerActions';
import BaseModal from '../BaseModal';

describe('ModalManager Actions', () => {
  it('should create an action when showing a modal', () => {
    const modalType = BaseModal;
    const modalProps = {
      actionText: 'Save',
      contentLabel: 'test',
      id: 'test',
      onActionClick: () => { }
    };

    const expected = {
      type: constants.SHOW_MODAL,
      payload: {
        modalType,
        modalProps
      },
    };

    expect(actions.showModal(modalType, modalProps)).toEqual(expected);
  });

  it('should create an action when hiding modals', () => {
    const expected = {
      type: constants.HIDE_MODAL
    };

    expect(actions.hideModal()).toEqual(expected);
  });
})