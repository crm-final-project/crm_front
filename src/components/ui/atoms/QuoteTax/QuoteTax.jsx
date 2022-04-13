import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tax_item_div: {
    display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: '45px',
	margin: '10px 0'
  },
  checkbox: {
	width: '25px',
	height: '25px'
  },
  input_text: {
	height: '100%',
	borderRadius: '5px',
	textAlign: 'center',
	padding: '0 10px',
	width: '30%',
	fontSize: '20px',
  }
}));

export const QuoteTax = (props) => {
  const classes = useStyles();
  return (
    <div className={`${props.className}`}>
      <div className={classes.tax_item_div}>
        <div>
          <input type='checkbox' className={classes.checkbox}/>
          &nbsp;&nbsp;<span>{`${props.title} %`}</span>
        </div>
        <input type='number' pattern="[0-9]*" min="1" max="99" value={props.value} className={classes.input_text}/>
      </div>
    </div>
  );
};
