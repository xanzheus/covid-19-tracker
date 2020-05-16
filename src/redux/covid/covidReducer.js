const INITIAL_STATE = {
  loading: false,
  data: {
    confirmed: {
      value: null,
    },
    recovered: {
      value: null,
    },
    deaths: {
      value: null,
    },
    lastUpdate: null,
  },
  country: '',
  errorMessage: '',
};

const covidReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'AWAITING_COVID':
      return {
        ...state,
        loading: true,
      };

    case 'REJECTED_COVID':
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };

    case 'SUCCESS_COVID':
      return {
        ...state,
        loading: false,
        data: payload.data,
        country: payload.country,
      };

    default:
      return state;
  }
};

export default covidReducer;
