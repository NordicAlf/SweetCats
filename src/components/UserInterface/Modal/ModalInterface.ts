import React from 'react';

export interface ModalInterface {
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
