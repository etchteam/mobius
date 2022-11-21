import React from 'react';
import { A11yDialog, A11yDialogProps } from 'react-a11y-dialog';
import A11yDialogInstance from 'a11y-dialog';
import classnames from 'classnames';

import { Breakpoints } from '../../../types/breakpoints.type';

import styles from './Modal.module.scss';
import Inner from './Inner';

interface ModalProps extends Pick<A11yDialogProps, 'id' | 'title' | 'role'> {
  children: React.ReactNode;
  size?: Breakpoints | 'auto';
  setupRef?: (instance: A11yDialogInstance) => void;
}

const Modal = ({
  children, size = 'auto', setupRef, ...a11yDialogProps
}: ModalProps) => {
  const dialogClasses = classnames(styles.modal__dialog, {
    [styles[`modal__dialog--size-${size}`]]: size,
  });

  return (
    <A11yDialog
      {...a11yDialogProps}
      closeButtonPosition="none"
      dialogRef={setupRef}
      classNames={{
        container: styles.modal,
        overlay: styles.modal__overlay,
        dialog: dialogClasses,
        title: styles.modal__title,
      }}
    >
      {children}
    </A11yDialog>
  );
};

Modal.Inner = Inner;

export default Modal;
