import { useEffect } from 'react';
import { TabR } from '../../atoms';
import { Container, Box } from '@mui/material';

export const TabsBarR = (props) => {
  const active = props.states.activeTab.status;
  const setActive = props.states.activeTab.setter;
  const setCurrentQuote = props.states.currentQuote.setter;

  useEffect(() => {
    setCurrentQuote(props.data[0])
  }, [active]);

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{ backgroundColor: 'Gray', display: 'flex', marginTop: '2vh' }}>
        <TabR
          title='Last month'
          onClick={() => setActive(true)}
          color={active ? '#2D8254' : '#AEDFAA'}
          value={props.val1}
        />
        <TabR
          title='Older'
          onClick={() => setActive(false)}
          color={!active ? '#2D8254' : '#AEDFAA'}
          value={props.val2}
        />
      </Box>
    </Container>
  );
};
