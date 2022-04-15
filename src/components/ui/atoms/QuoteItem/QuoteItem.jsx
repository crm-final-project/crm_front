import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core/styles';

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
            {!props.title ? 'missing "title"' : props.title }
          </div>  
          {!props.description ? 'missing "description"' : props.description }
          <div className={classes.title}>
            {!props.price ? 'missing "price"' : `P/U: $${props.price}` }
          </div>
          <div className={classes.title}>
            {!props.price ? 'missing "qty"' : `QTY: ${props.qty} unit.` }
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
