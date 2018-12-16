import { Action, ActionWithoutPayload } from '../../types';
import { ModalManagerState } from './ModalManagerState';
import { ModalManagerPayload } from './ModalManagerActions';
import { HIDE_MODAL, SHOW_MODAL } from './ModalManagerConstants';
import { ReducerMap } from '../../helpers';

const reducers: ReducerMap<ModalManagerState> = {
  [SHOW_MODAL]: (state: ModalManagerState, action: Action<ModalManagerPayload>) => {
    return {
      ...state,
      modalType: action.payload.modalType,
      modalProps: action.payload.modalProps
    };
  },
  [HIDE_MODAL]: (state: ModalManagerState, action: ActionWithoutPayload) => {
    return defaultState;
  }
};

const defaultState: ModalManagerState = {
  modalProps: null,
  modalType: null
};

export function reducer(state: ModalManagerState = defaultState, action: Action<any>) {
  const handler = reducers[action.type];
  return handler ? handler(state, action) : state;
}
