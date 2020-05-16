import axios from 'axios';

export const getCases = (country) => async (dispatch) => {
  let changeableUrl = 'https://covid19.mathdro.id/api/';
  if (country) changeableUrl = `https://covid19.mathdro.id/api/countries/${country}`;
  try {
    dispatch({
      type: 'AWAITING_COVID',
    });

    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    dispatch({
      type: 'SUCCESS_COVID',
      payload: { data: { confirmed, recovered, deaths, lastUpdate }, country },
    });
  } catch (error) {
    dispatch({
      type: 'REJECTED_COVID',
      payload: error.message,
    });
  }
};
