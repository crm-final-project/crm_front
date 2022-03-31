import { Box } from '@mui/material';

export const QuoteItemR = (props) => {
  return (
    <Box className={props.className}>
      <Box>{props.item.text}</Box>
	  <Box className={`quote-detail-r-box-${props.view}-03__item-bottom`}>
		  <p>$ {props.item.price}</p>
		  <p>{props.item.qty} UND.</p>
	  </Box>
    </Box>
  );
};
