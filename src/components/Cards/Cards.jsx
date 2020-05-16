import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import styles from './Cards.module.css';
import ContentOfCard from './ContentOfCard/ContentOfCard';

const Cards = () => {
  const { confirmed, recovered, deaths, lastUpdate } = useSelector((state) => state.covid.data);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <ContentOfCard label='Infected' data={confirmed} lastUpdate={lastUpdate} />
        <ContentOfCard label='Recovered' data={recovered} lastUpdate={lastUpdate} />
        <ContentOfCard label='Deaths' data={deaths} lastUpdate={lastUpdate} />
      </Grid>
    </div>
  );
};

export default Cards;
