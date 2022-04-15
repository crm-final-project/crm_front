import { createPortal } from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const modalRoot = document.getElementById('modal-root');

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
}));

export const Modal = ({ title, children, isOpened, onClose }) => {
  const classes = useStyles();

  return isOpened
    ? createPortal(<div className={classes.modal}>{children}</div>, modalRoot)
    : null;
};
