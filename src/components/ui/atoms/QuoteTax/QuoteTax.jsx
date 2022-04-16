import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tax_item_div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '45px',
    margin: '10px 0',
  },
  checkbox: {
    width: '25px',
    height: '25px',
  },
  input_text: {
    height: '100%',
    borderRadius: '5px',
    textAlign: 'center',
    padding: '0 10px',
    width: '30%',
    fontSize: '20px',
  },
}));

export const QuoteTax = (props) => {
  const classes = useStyles();
  return (
    <div className={`${props.className}`}>
      <div className={classes.tax_item_div}>
        <div>
          <input
            id={props.id}
            type='checkbox'
            checked={props.checked}
            className={classes.checkbox}
            onClick={props.onChecked}
          />
          &nbsp;&nbsp;
          <span>{`${
            props.id.slice(0, 1).toUpperCase() + props.id.slice(1)
          } %`}</span>
        </div>
        <input
          id={props.id}
          type='number'
          onChange={props.onChange}
          pattern='[0-9]*'
          min='1'
          max='99'
          value={props.value}
          className={classes.input_text}
        />
      </div>
    </div>
  );
};
