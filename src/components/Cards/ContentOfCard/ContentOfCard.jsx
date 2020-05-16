import React from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './ContentOfCard.module.css';

const ContentOfCard = ({ label, data: { value }, lastUpdate }) => {
  const getStyle = (category) => {
    switch (category) {
      case 'Infected':
        return cx(styles.card, styles.infected);
      case 'Recovered':
        return cx(styles.card, styles.recovered);
      case 'Deaths':
        return cx(styles.card, styles.deaths);
      default:
        return null;
    }
  };
  return (
    <Grid item component={Card} xs={12} md={3} className={getStyle(label)}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>{label}</Typography>
        <Typography variant='h5'>
          <CountUp
            start={0}
            end={value}
            duration={2.5}
            separator=','
          />
        </Typography>
        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant='body2'>Number of {label.toLowerCase()} by COVID-19</Typography>
      </CardContent>
    </Grid>
  );
};

export default ContentOfCard;
