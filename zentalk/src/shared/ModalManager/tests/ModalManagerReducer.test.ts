import * as constants from '../ModalManagerConstants';
import { reducer } from '../ModalManagerReducer';
import { ModalManagerState } from '../ModalManagerState';
import { Action } from '../../../types';
import BaseModal from '../BaseModal';

describe('Modal Manager Reducers', () => {
  const defaultState: ModalManagerState = {
    modalType: null,
    modalProps: null,
  };

  it('should return the default state for unknown actions', () => {
    const unknownAction: Action<any> = {
      type: 'UNKNOWN_ACTION',
      payload: {},
    };

    expect(reducer(undefined, unknownAction)).toEqual(defaultState);
  });

  it('should dispatch an action to handle SHOW_MODAL', () => {
    const showModalAction: Action<any> = {
      type: constants.SHOW_MODAL,
      payload: {
        modalType: BaseModal,
        modalProps: {
          actionText: 'Save',
          contentLabel: 'test',
          id: 'test',
          onActionClick: () => { },
        },
      }
    };

    expect(reducer(undefined, showModalAction)).toEqual({
      modalType: showModalAction.payload.modalType,
      modalProps: showModalAction.payload.modalProps
    });
  });

  it('should dispatch an action to handle HIDE_MODAL', () => {
    const hideModalAction: Action<any> = {
      type: constants.HIDE_MODAL,
      payload: null
    };

    expect(reducer(undefined, hideModalAction)).toEqual(defaultState);
  });
});