# Covid 19 Tracker
An app that give you infected, recocered, deaths data of Covid19 with beautiful chart.

You can try it at https://yossansr.github.io/covid-19-tracker/

This app implement:
1. Redux to avoid props driling
2. Redux-Thunk async actions
3. React Hooks (class comp ability in functional comp)

## Features
### Live Covid-19 data for many country from https://covid19.mathdro.id/api
I use redux-thunk to get data for global and specific country and store into reducer

### Beautiful Chart from react-chartjs-2
I used line chart to show global data and bar chart for specific country 

This app insipired by Javascript Mastery, but I create the app with the diffetent method.
