
import { Action, ActionWithoutPayload } from '../../types';
import { HIDE_MODAL, SHOW_MODAL } from './ModalManagerConstants';
import { ModalManagerState } from './ModalManagerState';
import { ComponentClass } from 'react';

export type ModalManagerPayload = ModalManagerState;

export const showModal = (modalType: ComponentClass<any>, modalProps: any = {}): Action<ModalManagerPayload> => {
  return {
    type: SHOW_MODAL,
    payload: {
      modalType,
      modalProps,
    }
  };
};

export const hideModal = (): ActionWithoutPayload => {
  return {
    type: HIDE_MODAL,
  };
};
