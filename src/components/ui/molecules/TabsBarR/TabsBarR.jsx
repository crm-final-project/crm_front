import { useEffect } from 'react';
import { TabR } from '../../atoms';
import { Container, Box } from '@mui/material';

export const TabsBarR = (props) => {
  const active = props.states.activeTab.status;
  const setActive = props.states.activeTab.setter;

  useEffect(() => {}, [active]);

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{ backgroundColor: 'Gray', display: 'flex', marginTop: '2vh' }}>
        <TabR
          title='Last month'
          onClick={() => setActive(true)}
          color={active ? '#2D8254' : '#AEDFAA'}
          value={props.valMonth}
        />
        <TabR
          title='Older'
          onClick={() => setActive(false)}
          color={!active ? '#2D8254' : '#AEDFAA'}
          value={props.valOld}
        />
      </Box>
    </Container>
  );
};
