import DatePicker from 'react-date-picker';
import { makeStyles } from '@material-ui/core/styles';
import './datepicker.css'

const useStyles = makeStyles((theme) => ({
  picker: {
    marginBottom: '20px',
    width: '100%',
    height: '55px',
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #AEAEAE',
    '&:last-child': {
      marginBottom: 0
    },
    '> div': {
      border: 'none'
    }
  },
}));

export const DatePickerR = (props) => {
  const classes = useStyles();
  return (
    <DatePicker
      onChange={props.onChange}
      value={props.value}
      className={classes.picker}
    />
  );
};
