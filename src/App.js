/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';
import { getCases } from './redux/covid/covidActions';
import image from './images/image.png';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAPI = async () => {
      await dispatch(getCases());
    };
    fetchAPI();
  });

  const handleCountryChange = async (country) => {
    dispatch(getCases(country));
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt='COVID-19' />
      <Cards />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart />
    </div>
  );
};

export default App;
