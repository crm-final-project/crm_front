import React from 'react'
import { Container, Grid, Typography, Box, Card, CardMedia } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SendIcon from '@mui/icons-material/Send';
import laptop1 from '../../../../assets/img/laptop-1.jfif';
import laptop2 from '../../../../assets/img/laptop-2.jpg';
import laptop3 from '../../../../assets/img/laptop-3.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    paddingLeft: theme.spacing(4),
  },
  step: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
    padding: theme.spacing(2),
    height: 75,
    width: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'relative',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    background: 'rgba(0,0,0, 0.45)',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    color: 'white',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '30px',
  },
  adMedia: {
    position: 'relative',
    borderRadius: 0,
    height: 250,
    margin: theme.spacing(2, 0),
  },
  adMediaOverlay: {
    position: 'absolute',
    background: '#651fffab',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outro: {
    background: theme.palette.primary.main,
    padding: theme.spacing(8, 0),
    color: 'white',
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

const steps = [
  { text: 'Type your data', icon: <EditIcon />, image: laptop1 },
  {
    text: 'Generate your Doc in pdf',
    icon: <PictureAsPdfIcon />,
    image: laptop2,
  },
  { text: 'Send your quotes!', icon: <SendIcon />, image: laptop3 },
];

export const StepSection = () => {
  const classes = useStyles();
  return (
    <>
      <section>

        <Container style={{ padding: 30 }}>
          <Box mb={3}>
            <Typography variant="h4" align="center">
              <b>It's easy to create a quote with DocuCRM</b>
            </Typography>
          </Box>
          <Grid
            container
            sx={{display: 'flex', justifyContent: 'center'}}
          >
            {steps.map((step, i) => (
              <Grid item xs={10} sm={6} md={4} style={{ padding: 10 }} key={i}>
                <Card className={classes.card} elevation={0}>
                  <CardMedia component="img" src={step.image} />
                  <div className={classes.overlay}>
                    <Grid>
                      <Box style={{ display: 'block' }}>{step.icon}</Box>
                      <Typography variant="h6">
                        {i + 1 + '.'} {step.text}
                      </Typography>
                    </Grid>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
}
