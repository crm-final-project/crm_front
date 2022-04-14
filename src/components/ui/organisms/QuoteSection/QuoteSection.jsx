import React from 'react'
import { Container, Grid, Typography, Box, Card, CardMedia, Fab } from '@mui/material'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import laptop2 from '../../../../assets/img/laptop-2.jpg';
import laptop3 from '../../../../assets/img/laptop-3.jpg';

const features = [
  'Type your podcast as if it were a blog',
  'Include audio snippets, songs, tunes, jingles...',
  'Voices in multiples languages and accents',
  'Single click text-to-speech'
]

export const QuoteSection = () => {
  return (
    <section>

      <Container style={{ padding: 15 }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Grid item xs={12} md={7} style={{ padding: '0px 10px 0px' }}>
            <Box my={1}>
              <Fab color="primary" size="small">
                <RssFeedIcon />
              </Fab>
            </Box>
            <Box mb={2}>
              <Typography variant="h4">
                <b>
                  An exceptionaly intuitive way to create your digital
                  documents
                </b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
              justifyContent: 'flex-end',
            },
          })}
        >
          <Grid item xs={11} sm={8} md={4} sx={(theme) => ({ padding: '0px', marginBottom: '10px', [theme.breakpoints.up('md')]: {marginRight: '20px'} })}>
            <Box style={{ position: 'relative' }} mb={10}>
              <Card style={{ height: 200, width: '85%' }}>
                <CardMedia
                  component="img"
                  src={laptop2}
                  style={{ height: '100%' }}
                />
              </Card>
              <Card
                style={{ position: 'absolute', height: 220, top: 50, left: 50 }}
              >
                <CardMedia
                  component="img"
                  src={laptop3}
                  style={{ height: '100%' }}
                />
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid
              container
              sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.up('md')]: {
                  justifyContent: 'space-between',
                },
              })}
            >
              {features.map((feature, f) => (
                <Grid item xs={6} sm={5} style={{ padding: '0px 10px' }} key={f}>
                  <Typography variant="body1">
                    <b>{feature}</b>
                  </Typography>
                  <Typography paragraph variant="body2">
                    Generate your quotes, invoices and other documents easily and
                    quickly, fill out the form, generate your digital document in
                    PDF format and send it to your customers quickly and smoothly.
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
