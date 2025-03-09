// About.js
import React from 'react';
import { Grid, Typography } from '@mui/material';

function About() {
  return (
    <Grid container sx={{ padding: 4 }}>
      <Grid item xs={12}>
        <Typography variant="h4">About Me</Typography>
        <Typography variant="body1">
          Briefly describe yourself, your skills, and your experience.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
