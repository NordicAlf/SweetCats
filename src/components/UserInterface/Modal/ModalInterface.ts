import React from 'react';

export interface HelpModalInterface {
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
