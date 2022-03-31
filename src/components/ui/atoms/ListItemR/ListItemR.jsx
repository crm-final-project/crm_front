import { Box } from '@mui/material';

const STYLES = {
  BOX: { width: 1, height: '65px', paddingTop: '10px' },
};

export const ListItemR = (props) => {
  return (
    <Box sx={STYLES.BOX} className='list_itemR' onClick={props.onClick}>
      <Box className='list_itemR_top'>
        <p className='list_itemR_top__client'>{props.client}</p>
        <p className='list_itemR_top__date'>{props.date}</p>
      </Box>
      <Box className='list_itemR_bottom'>
        <p className='list_itemR_bottom__price'>${props.price}</p>
        <p className='list_itemR_bottom__time'>{props.time}</p>
      </Box>
    </Box>
  );
};
