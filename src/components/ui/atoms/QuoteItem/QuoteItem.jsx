import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'gray',
    '&:first-child': {
      fontWeight: 600
    }
  },
  text_concept: {
    fontSize: '14px',
    paddingLeft: '5px',
	  color: '#2D8254',
    marginRight: '15px'
  },
  icons: {
    display: 'flex',
    height: '100%',
  },
  iconDiv: {
    width: '40px',
    height: '40px',
    marginRight: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
	borderRadius: '5px',
    '&:last-child': {
      marginRight: '5px',
    },
  },
  icon: {
	color: '#2D8254',
  },
}));

export const QuoteItem = (props) => {
  const classes = useStyles();

  return (
    <div className={`${props.className}`}>
        <div className={classes.text_concept}>
          <div className={classes.title}>
            {!props.title ? '' : props.title }
          </div>  
          {!props.description ? '' : props.description }
          <div className={classes.title}>
            {!props.price ? '' : `P/U: $${Number(props.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}` }
          </div>
          <div className={classes.title}>
            {!props.price ? '' : `QTY: ${props.qty} unit.` }
          </div> 
        </div>
        <div className={classes.icons}>
          <div id={props.id} className={classes.iconDiv} onClick={props.onEdit}>
            <EditIcon className={classes.icon} />
          </div>
          <div id={props.id} className={classes.iconDiv} onClick={props.onDelete}>
            <DeleteIcon className={classes.icon} />
          </div>
        </div>
    </div>
  );
};
