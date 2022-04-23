import { useEffect } from 'react';
import { TabR } from '../../atoms';
import { Container, Box } from '@mui/material';

export const TabsBarR = (props) => {
  const {setActiveTab, setCurrentQuote, activeTab, showModal} = props;
  // const {activeTab} = props.states.tabs; 

  useEffect(() => {
    setCurrentQuote(props.data[0])
  }, [activeTab]);

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{ backgroundColor: 'Gray', display: 'flex', marginTop: '2vh' }}>
        <TabR
          title='Last month'
          onClick={() => setActiveTab(true)}
          color={activeTab ? '#2D8254' : '#AEDFAA'}
          value={props.val1}
        />
        <TabR
          title='Older'
          onClick={() => setActiveTab(false)}
          color={!activeTab ? '#2D8254' : '#AEDFAA'}
          value={props.val2}
        />
      </Box>
    </Container>
  );
};
