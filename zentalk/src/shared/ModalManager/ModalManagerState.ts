import { ComponentClass } from 'react';

export type ModalManagerState = {
  modalType: ComponentClass<any> | null;
  modalProps: any;
};
