import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text_concept: {
    fontSize: '14px',
    paddingLeft: '5px',
	color: '#2D8254',
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
      <div className={classes.text_concept}>{!props.title ? 'missing "title"' : props.title }</div>
      <div className={classes.icons}>
        <div className={classes.iconDiv}>
          <EditIcon className={classes.icon}/>
        </div>
        <div className={classes.iconDiv}>
          <DeleteIcon className={classes.icon}/>
        </div>
      </div>
    </div>
  );
};
